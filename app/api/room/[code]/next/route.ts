import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { normalizeRoomCode } from "@/lib/room-code";
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
  const startedAt = new Date().toISOString();

  // Same compare-and-swap here: claim the round advance by requiring
  // current_round to still equal what we just read. Whoever loses this
  // race returns early instead of double-advancing past the same round
  // (which is what produced the duplicate-round bug — two clients both
  // racing to round_number 2, then a client's later .single() query
  // matching two rows and erroring as "round not found").
  //
  // The next round's question was already generated up front in
  // start/route.ts (see the comment there) — every round row for this game
  // was inserted at game-start time, with round 1 already "started" and the
  // rest sitting with started_at: null until advanced to. So advancing is
  // just stamping started_at on the row that's already there (combined with
  // reading its question_data in the same round trip below) — no per-round
  // eBay call (or any other external fetch) sits on the critical path
  // between rounds.
  const [{ data: claimed }, { data: nextRound }] = await Promise.all([
    admin
      .from("rooms")
      .update({ current_round: nextRoundNumber })
      .eq("id", room.id)
      .eq("current_round", room.current_round)
      .select()
      .maybeSingle(),
    admin
      .from("room_rounds")
      .update({ started_at: startedAt })
      .eq("room_id", room.id)
      .eq("round_number", nextRoundNumber)
      .select("question_data")
      .single(),
  ]);

  if (!claimed) {
    return NextResponse.json({ ok: true, finished: false, alreadyAdvanced: true });
  }

  if (!nextRound) {
    return NextResponse.json({ error: "next round wasn't pre-generated" }, { status: 500 });
  }

  await broadcastToRoom(code, "round_start", {
    roundNumber: nextRoundNumber,
    totalRounds: room.total_rounds,
    durationSeconds: room.round_duration_seconds,
    startedAt,
    questionData: nextRound.question_data,
  });

  return NextResponse.json({ ok: true, finished: false });
}
