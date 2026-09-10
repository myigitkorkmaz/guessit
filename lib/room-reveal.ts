import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { broadcastToRoom } from "@/lib/room-broadcast";
import type { Room, RoomParticipant } from "@/types";

interface RevealGuessEntry {
  displayName: string;
  guess: number | null;
  score: number;
  percentageOff: number | null;
}

interface LeaderboardEntry {
  displayName: string;
  totalScore: number;
}

export interface RevealPayload {
  roundNumber: number;
  correctAnswer: number;
  guesses: RevealGuessEntry[];
  leaderboard: LeaderboardEntry[];
}

// Idempotent: the first caller to reach this (a player finishing the last
// guess, or a client's timer hitting zero) does the scoring + broadcast;
// every other simultaneous caller just gets the same payload back with no
// duplicate broadcast. This is what lets both "everyone guessed early" and
// "timer expired" trigger the same reveal safely from multiple clients.
//
// Independent reads/writes run via Promise.all rather than sequentially —
// this used to be ~9 chained round-trips (each 100-300ms on its own is
// fine, but stacked serially it added up to multi-second lag between
// submitting a guess and seeing the reveal).
export async function revealRound(code: string): Promise<RevealPayload | null> {
  const admin = createAdminSupabaseClient();

  const { data: room } = await admin.from("rooms").select("*").eq("code", code).single<Room>();
  if (!room || room.status !== "playing") return null;

  const { data: round } = await admin
    .from("room_rounds")
    .select("*")
    .eq("room_id", room.id)
    .eq("round_number", room.current_round)
    .single();
  if (!round) return null;

  const [{ data: activeParticipants }, { data: existingGuesses }, { data: claimed }] = await Promise.all([
    admin
      .from("room_participants")
      .select("*")
      .eq("room_id", room.id)
      .in("role", ["host", "player"])
      .returns<RoomParticipant[]>(),
    admin.from("round_guesses").select("*").eq("round_id", round.id),
    // Atomic claim — only the winner scores + broadcasts.
    admin
      .from("room_rounds")
      .update({ revealed_at: new Date().toISOString() })
      .eq("id", round.id)
      .is("revealed_at", null)
      .select()
      .maybeSingle(),
  ]);

  // round_guesses doesn't carry participant_id directly (it's keyed by
  // user_id, which is null for guests) — match by display_name instead,
  // since that's unique enough within a single room's active roster.
  const guessByName = new Map((existingGuesses ?? []).map((g) => [g.display_name, g]));

  const guesses: RevealGuessEntry[] = (activeParticipants ?? []).map((p) => {
    const g = guessByName.get(p.display_name);
    return {
      displayName: p.display_name,
      guess: g ? Number(g.guess) : null,
      score: g ? Number(g.score ?? 0) : 0,
      percentageOff: g && g.percentage_off !== null ? Number(g.percentage_off) : null,
    };
  });

  let leaderboard: LeaderboardEntry[];

  if (claimed) {
    // Winner of the claim: apply score deltas in parallel, then build the
    // leaderboard from the totals we already know — skips a redundant
    // re-fetch of the rows we just updated.
    const updates = (activeParticipants ?? []).flatMap((p) => {
      const g = guessByName.get(p.display_name);
      if (!g) return [];
      return [{ participantId: p.id, displayName: p.display_name, newTotal: p.total_score + Number(g.score ?? 0) }];
    });

    await Promise.all(
      updates.map((u) =>
        admin.from("room_participants").update({ total_score: u.newTotal }).eq("id", u.participantId)
      )
    );

    const newTotalByName = new Map(updates.map((u) => [u.displayName, u.newTotal]));
    leaderboard = (activeParticipants ?? [])
      .map((p) => ({ displayName: p.display_name, totalScore: newTotalByName.get(p.display_name) ?? p.total_score }))
      .sort((a, b) => b.totalScore - a.totalScore);
  } else {
    // Lost the claim — someone else already applied scores (or is doing so
    // right now). This snapshot may be a beat stale; that's fine, the
    // winner's broadcast is the one every client actually renders from.
    leaderboard = (activeParticipants ?? [])
      .map((p) => ({ displayName: p.display_name, totalScore: p.total_score }))
      .sort((a, b) => b.totalScore - a.totalScore);
  }

  const payload: RevealPayload = {
    roundNumber: room.current_round,
    correctAnswer: Number(round.correct_answer),
    guesses,
    leaderboard,
  };

  if (claimed) {
    await broadcastToRoom(code, "round_reveal", payload as unknown as Record<string, unknown>);
  }

  return payload;
}

export async function activePlayerCount(roomId: string): Promise<number> {
  const admin = createAdminSupabaseClient();
  const { count } = await admin
    .from("room_participants")
    .select("id", { count: "exact", head: true })
    .eq("room_id", roomId)
    .in("role", ["host", "player"]);
  return count ?? 0;
}

export async function guessedCount(roundId: string): Promise<number> {
  const admin = createAdminSupabaseClient();
  const { count } = await admin
    .from("round_guesses")
    .select("id", { count: "exact", head: true })
    .eq("round_id", roundId);
  return count ?? 0;
}
