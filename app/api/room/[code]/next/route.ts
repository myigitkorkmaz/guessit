import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { normalizeRoomCode } from "@/lib/room-code";
import { getRoomQuestion } from "@/lib/room-questions";
import { broadcastToRoom } from "@/lib/room-broadcast";
import type { Room, RoomParticipant } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: rawCode } = await params;
  const code = normalizeRoomCode(rawCode);
  const body = await request.json().catch(() => null);
  const participantId = String(body?.participantId ?? "");

  const admin = createAdminSupabaseClient();

  const [{ data: room }, { data: participant }] = await Promise.all([
    admin.from("rooms").select("*").eq("code", code).single<Room>(),
    admin.from("room_participants").select("*").eq("id", participantId).single<RoomParticipant>(),
  ]);

  if (!room || room.status !== "playing") {
    return NextResponse.json({ error: "room isn't in an active game" }, { status: 409 });
  }
  if (!participant || participant.room_id !== room.id || participant.role !== "host") {
    return NextResponse.json({ error: "only the host can advance the game" }, { status: 403 });
  }

  if (room.current_round >= room.total_rounds) {
    // Compare-and-swap on status: if two tabs both count down to the same
    // "advance" moment (e.g. the same host open in two tabs sharing
    // localStorage), only the first claims the finish — the second gets
    // back no row and skips straight to returning, no duplicate broadcast.
    const { data: claimed } = await admin
      .from("rooms")
      .update({ status: "finished", finished_at: new Date().toISOString() })
      .eq("id", room.id)
      .eq("status", "playing")
      .select()
      .maybeSingle();

    if (!claimed) {
      return NextResponse.json({ ok: true, finished: true, alreadyAdvanced: true });
    }

    const { data: finalParticipants } = await admin
      .from("room_participants")
      .select("*")
      .eq("room_id", room.id)
      .in("role", ["host", "player"])
      .order("total_score", { ascending: false })
      .returns<RoomParticipant[]>();

    const leaderboard = (finalParticipants ?? []).map((p) => ({
      displayName: p.display_name,
      totalScore: p.total_score,
    }));

    await broadcastToRoom(code, "game_over", { leaderboard });
    return NextResponse.json({ ok: true, finished: true, leaderboard });
  }

  const nextRoundNumber = room.current_round + 1;

  // Same compare-and-swap here: claim the round advance by requiring
  // current_round to still equal what we just read. Whoever loses this
  // race returns early instead of inserting a second room_rounds row for
  // the same round_number (which is what produced the duplicate-round bug —
  // two clients both racing to round_number 2, then a client's later
  // .single() query matching two rows and erroring as "round not found").
  // Fetch prior rounds (for the exclude list) in parallel with the claim
  // attempt — it's only wasted work in the rare case we lose the race.
  const [{ data: claimed }, { data: priorRounds }] = await Promise.all([
    admin
      .from("rooms")
      .update({ current_round: nextRoundNumber })
      .eq("id", room.id)
      .eq("current_round", room.current_round)
      .select()
      .maybeSingle(),
    admin.from("room_rounds").select("question_data").eq("room_id", room.id),
  ]);

  if (!claimed) {
    return NextResponse.json({ ok: true, finished: false, alreadyAdvanced: true });
  }

  const exclude = (priorRounds ?? [])
    .map((r) => (r.question_data as { _excludeId?: string })?._excludeId)
    .filter((id): id is string => Boolean(id));

  let question;
  try {
    question = await getRoomQuestion(room.game_id, exclude);
  } catch {
    return NextResponse.json({ error: "failed to fetch a question" }, { status: 502 });
  }
  if (!question) {
    return NextResponse.json({ error: "failed to fetch a question" }, { status: 502 });
  }

  const startedAt = new Date().toISOString();

  const { error: roundError } = await admin.from("room_rounds").insert({
    room_id: room.id,
    round_number: nextRoundNumber,
    question_data: question.questionData,
    correct_answer: question.correctAnswer,
    started_at: startedAt,
  });
  if (roundError) {
    return NextResponse.json({ error: roundError.message }, { status: 500 });
  }

  await broadcastToRoom(code, "round_start", {
    roundNumber: nextRoundNumber,
    totalRounds: room.total_rounds,
    durationSeconds: room.round_duration_seconds,
    startedAt,
    questionData: question.questionData,
  });

  return NextResponse.json({ ok: true, finished: false });
}
