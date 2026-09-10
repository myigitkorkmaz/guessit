import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { normalizeRoomCode } from "@/lib/room-code";
import { calculateScore } from "@/lib/scoring";
import { broadcastToRoom } from "@/lib/room-broadcast";
import { activePlayerCount, guessedCount, revealRound } from "@/lib/room-reveal";
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
  const guess = Number(body?.guess);

  if (!participantId || !Number.isFinite(guess) || guess < 0) {
    return NextResponse.json({ error: "participantId and a valid guess are required" }, { status: 400 });
  }

  const admin = createAdminSupabaseClient();

  // room and participant are independent lookups — no reason to serialize them.
  const [{ data: room }, { data: participant }] = await Promise.all([
    admin.from("rooms").select("*").eq("code", code).single<Room>(),
    admin.from("room_participants").select("*").eq("id", participantId).single<RoomParticipant>(),
  ]);

  if (!room || room.status !== "playing") {
    return NextResponse.json({ error: "room isn't in an active round" }, { status: 409 });
  }
  if (!participant || participant.room_id !== room.id) {
    return NextResponse.json({ error: "not a participant in this room" }, { status: 403 });
  }
  if (participant.role === "spectator") {
    return NextResponse.json({ error: "spectators can't guess" }, { status: 403 });
  }

  const { data: round } = await admin
    .from("room_rounds")
    .select("*")
    .eq("room_id", room.id)
    .eq("round_number", room.current_round)
    .single();

  if (!round || round.revealed_at) {
    return NextResponse.json({ error: "this round is already over" }, { status: 409 });
  }

  const { data: existing } = await admin
    .from("round_guesses")
    .select("id")
    .eq("round_id", round.id)
    .eq("display_name", participant.display_name)
    .maybeSingle();

  if (existing) {
    return NextResponse.json({ error: "already guessed this round" }, { status: 409 });
  }

  const result = calculateScore(guess, Number(round.correct_answer));

  const { error: insertError } = await admin.from("round_guesses").insert({
    round_id: round.id,
    room_id: room.id,
    user_id: participant.user_id,
    display_name: participant.display_name,
    guess,
    score: result.points,
    percentage_off: result.percentOff,
  });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  // Broadcasting "so-and-so guessed" and counting how many have guessed so
  // far are independent of each other — run them together.
  const [, total, guessed] = await Promise.all([
    broadcastToRoom(code, "player_guessed", { displayName: participant.display_name }),
    activePlayerCount(room.id),
    guessedCount(round.id),
  ]);

  if (guessed >= total) {
    await revealRound(code);
  }

  return NextResponse.json({ ok: true, points: result.points });
}
