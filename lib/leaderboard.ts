import { supabase } from "@/lib/supabase";
import { LeaderboardEntry } from "@/types";
import { GAMES, GameCategoryFilter } from "@/lib/games";

interface RawGlobalLeaderboardRow {
  user_id: string;
  username: string;
  total_score: number;
  games_played: number;
  best_score: number;
  best_game: string | null;
}

export async function getGlobalLeaderboard(
  category: GameCategoryFilter
): Promise<LeaderboardEntry[]> {
  try {
    if (category === "All") {
      const { data, error } = await supabase
        .from("global_leaderboard")
        .select("*")
        .limit(100);
      if (error || !data) return [];
      return (data as RawGlobalLeaderboardRow[]).map((row, i) => ({
        rank: i + 1,
        user_id: row.user_id,
        username: row.username,
        total_score: row.total_score,
        games_played: row.games_played,
        best_score: row.best_score,
        best_game: row.best_game,
      }));
    }

    // Category-filtered: the pre-aggregated view covers all games, so for a
    // single category we aggregate the raw rows client-side instead.
    const gameIdsInCategory = GAMES.filter((g) => g.category === category).map((g) => g.id);
    if (gameIdsInCategory.length === 0) return [];

    const { data: rows, error } = await supabase
      .from("global_scores")
      .select("user_id, game_id, score")
      .in("game_id", gameIdsInCategory)
      .not("user_id", "is", null);
    if (error || !rows) return [];

    const byUser = new Map<
      string,
      { total_score: number; games_played: number; best_score: number; best_game: string }
    >();
    for (const row of rows as Array<{ user_id: string; game_id: string; score: number }>) {
      const existing = byUser.get(row.user_id);
      if (!existing) {
        byUser.set(row.user_id, {
          total_score: row.score,
          games_played: 1,
          best_score: row.score,
          best_game: row.game_id,
        });
      } else {
        existing.total_score += row.score;
        existing.games_played += 1;
        if (row.score > existing.best_score) {
          existing.best_score = row.score;
          existing.best_game = row.game_id;
        }
      }
    }

    const userIds = Array.from(byUser.keys());
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, username")
      .in("id", userIds);
    const usernameById = new Map((profiles ?? []).map((p) => [p.id, p.username]));

    return Array.from(byUser.entries())
      .map(([user_id, v]) => ({
        user_id,
        username: usernameById.get(user_id) ?? "player",
        ...v,
      }))
      .sort((a, b) => b.total_score - a.total_score)
      .slice(0, 100)
      .map((entry, i) => ({ rank: i + 1, ...entry }));
  } catch {
    return [];
  }
}
