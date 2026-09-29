import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { normalizeRoomCode } from "@/lib/room-code";
import { getRoomQuestion, isRoomPlayableGame, type RoomQuestion } from "@/lib/room-questions";
import { broadcastToRoom } from "@/lib/room-broadcast";
import type { Room, RoomParticipant } from "@/types";

export const dynamic = "force-dynamic";

const MIN_READY_TO_START = 2;

export async function POST(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: rawCode } = await params;
  const code = normalizeRoomCode(rawCode);
  const body = await request.json().catch(() => null);
  const participantId = String(body?.participantId ?? "");

  if (!participantId) {
    return NextResponse.json({ error: "participantId is required" }, { status: 400 });
  }

  const admin = createAdminSupabaseClient();

  const [{ data: room }, { data: participant }] = await Promise.all([
    admin.from("rooms").select("*").eq("code", code).single<Room>(),
    admin.from("room_participants").select("*").eq("id", participantId).single<RoomParticipant>(),
  ]);

  if (!room) {
    return NextResponse.json({ error: "room not found" }, { status: 404 });
  }
  if (room.status !== "lobby") {
    return NextResponse.json({ error: "room already started" }, { status: 409 });
  }
  if (!participant || participant.room_id !== room.id || participant.role !== "host") {
    return NextResponse.json({ error: "only the host can start the game" }, { status: 403 });
  }

  if (!isRoomPlayableGame(room.game_id)) {
    return NextResponse.json(
      { error: "this game isn't wired up for multiplayer rooms yet" },
      { status: 400 }
    );
  }

  const { data: allParticipants } = await admin
    .from("room_participants")
    .select("*")
    .eq("room_id", room.id)
    .returns<RoomParticipant[]>();

  const readyCount = (allParticipants ?? []).filter((p) => p.is_ready).length;
  if (readyCount < MIN_READY_TO_START) {
    return NextResponse.json(
      { error: `need at least ${MIN_READY_TO_START} ready players to start` },
      { status: 400 }
    );
  }

  // Generate every round's question up front, before claiming the lobby->playing
  // transition — this is the whole point: once the game is running, advancing to
  // the next round (see next/route.ts) just reads an already-generated row and
  // broadcasts it, instead of making players wait on a fresh eBay API call (or
  // any other per-round fetch) between every round. That latency gets absorbed
  // once, here, while the host is still looking at a "starting..." lobby state,
  // rather than sprinkled through live gameplay. Sequential (not parallel) so
  // each pick's exclude list accounts for everything already generated — no risk
  // of two rounds landing on the same item.
  const excludeIds: string[] = [];
  const questions: RoomQuestion[] = [];
  try {
    for (let i = 0; i < room.total_rounds; i++) {
      const question = await getRoomQuestion(room.game_id, excludeIds);
      if (!question) {
        return NextResponse.json({ error: "failed to fetch a question" }, { status: 502 });
      }
      questions.push(question);
      excludeIds.push(question.excludeId);
    }
  } catch {
    return NextResponse.json({ error: "failed to fetch a question" }, { status: 502 });
  }

  // Compare-and-swap: claim the lobby->playing transition. If two calls race
  // (double-click, or the same host open in two tabs that share localStorage),
  // only the first claims it — the second gets no row back and exits instead of
  // inserting a duplicate round 1. The questions generated above are simply
  // discarded in that rare case.
  const { data: claimed } = await admin
    .from("rooms")
    .update({ status: "playing", current_round: 1 })
    .eq("id", room.id)
    .eq("status", "lobby")
    .select()
    .maybeSingle();

  if (!claimed) {
    return NextResponse.json({ error: "room already started" }, { status: 409 });
  }

  const startedAt = new Date().toISOString();

  // Round 1 starts immediately; the rest are pre-generated but not "started"
  // (started_at stays null) until next/route.ts actually advances to them.
  const roundRows = questions.map((question, index) => ({
    room_id: room.id,
    round_number: index + 1,
    question_data: question.questionData,
    correct_answer: question.correctAnswer,
    started_at: index === 0 ? startedAt : null,
  }));

  // Independent writes to different tables — no need to serialize them.
  const [{ error: roundError }] = await Promise.all([
    admin.from("room_rounds").insert(roundRows),
    admin.from("rooms").update({ started_at: startedAt }).eq("id", room.id),
  ]);
  if (roundError) {
    return NextResponse.json({ error: roundError.message }, { status: 500 });
  }

  await broadcastToRoom(code, "round_start", {
    roundNumber: 1,
    totalRounds: room.total_rounds,
    durationSeconds: room.round_duration_seconds,
    startedAt,
    questionData: questions[0].questionData,
  });

  return NextResponse.json({ ok: true });
}
