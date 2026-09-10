import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { generateRoomCode } from "@/lib/room-code";
import { getGameById } from "@/lib/games";

export const dynamic = "force-dynamic";

const VALID_ROUNDS = [3, 5, 10];
const VALID_DURATIONS = [30, 45, 60];
const MAX_DISPLAY_NAME_LENGTH = 24;
const MAX_CODE_ATTEMPTS = 8;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "invalid request body" }, { status: 400 });
  }

  const displayName = String(body.displayName ?? "").trim().slice(0, MAX_DISPLAY_NAME_LENGTH);
  const gameId = String(body.gameId ?? "pricedrop");
  const totalRounds = Number(body.totalRounds ?? 5);
  const roundDurationSeconds = Number(body.roundDurationSeconds ?? 45);

  if (!displayName) {
    return NextResponse.json({ error: "displayName is required" }, { status: 400 });
  }
  if (!getGameById(gameId)) {
    return NextResponse.json({ error: "unknown gameId" }, { status: 400 });
  }
  if (!VALID_ROUNDS.includes(totalRounds)) {
    return NextResponse.json({ error: "totalRounds must be 3, 5, or 10" }, { status: 400 });
  }
  if (!VALID_DURATIONS.includes(roundDurationSeconds)) {
    return NextResponse.json({ error: "roundDurationSeconds must be 30, 45, or 60" }, { status: 400 });
  }

  const sessionClient = await createServerSupabaseClient();
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  const admin = createAdminSupabaseClient();

  let room = null;
  let lastError: { message: string } | null = null;

  for (let attempt = 0; attempt < MAX_CODE_ATTEMPTS && !room; attempt++) {
    const code = generateRoomCode();
    const { data, error } = await admin
      .from("rooms")
      .insert({
        code,
        host_user_id: user?.id ?? null,
        game_id: gameId,
        total_rounds: totalRounds,
        round_duration_seconds: roundDurationSeconds,
      })
      .select()
      .single();

    if (data) {
      room = data;
    } else if (error?.code !== "23505") {
      // Anything other than "code already taken" is a real failure — stop retrying.
      lastError = error;
      break;
    }
  }

  if (!room) {
    return NextResponse.json(
      { error: lastError?.message ?? "could not generate a unique room code" },
      { status: 500 }
    );
  }

  const { data: participant, error: participantError } = await admin
    .from("room_participants")
    .insert({
      room_id: room.id,
      user_id: user?.id ?? null,
      display_name: displayName,
      role: "host",
    })
    .select()
    .single();

  if (participantError || !participant) {
    return NextResponse.json({ error: participantError?.message ?? "failed to join room" }, { status: 500 });
  }

  return NextResponse.json({ code: room.code, participantId: participant.id, role: participant.role }, { status: 201 });
}
