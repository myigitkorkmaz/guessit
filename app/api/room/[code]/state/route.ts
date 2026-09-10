import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { normalizeRoomCode } from "@/lib/room-code";
import type { Room } from "@/types";

export const dynamic = "force-dynamic";

// Lets a client catch up after a page refresh (or a join that landed mid-game).
// room_rounds has no public SELECT policy — it holds the answer — so this is
// the only path back to "what's the current question" besides having been
// connected when the round_start broadcast went out.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: rawCode } = await params;
  const code = normalizeRoomCode(rawCode);

  const admin = createAdminSupabaseClient();
  const { data: room } = await admin.from("rooms").select("*").eq("code", code).single<Room>();
  if (!room) {
    return NextResponse.json({ error: "room not found" }, { status: 404 });
  }

  if (room.status !== "playing") {
    return NextResponse.json({ status: room.status });
  }

  const { data: round } = await admin
    .from("room_rounds")
    .select("id, round_number, question_data, started_at, revealed_at")
    .eq("room_id", room.id)
    .eq("round_number", room.current_round)
    .single();

  if (!round) {
    return NextResponse.json({ status: room.status });
  }

  const { data: guesses } = await admin
    .from("round_guesses")
    .select("display_name")
    .eq("round_id", round.id);

  return NextResponse.json({
    status: room.status,
    roundNumber: round.round_number,
    totalRounds: room.total_rounds,
    durationSeconds: room.round_duration_seconds,
    startedAt: round.started_at,
    revealed: Boolean(round.revealed_at),
    questionData: round.question_data,
    guessedNames: (guesses ?? []).map((g) => g.display_name),
  });
}
