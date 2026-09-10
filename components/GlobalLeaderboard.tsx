import { LeaderboardEntry } from "@/types";
import { getGameById } from "@/lib/games";

const RANK_MEDAL: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

export default function GlobalLeaderboard({
  entries,
  currentUserId,
}: {
  entries: LeaderboardEntry[];
  currentUserId?: string | null;
}) {
  if (entries.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-muted">
        No scores yet — be the first to play!
      </p>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="border-b border-border bg-surface text-left text-xs uppercase tracking-wide text-muted">
            <th className="px-4 py-3 font-medium">Rank</th>
            <th className="px-4 py-3 font-medium">Username</th>
            <th className="px-4 py-3 font-medium text-right">Total Score</th>
            <th className="px-4 py-3 font-medium text-right">Games Played</th>
            <th className="px-4 py-3 font-medium">Best Game</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            const isCurrentUser = entry.user_id === currentUserId;
            const bestGame = entry.best_game ? getGameById(entry.best_game) : null;
            return (
              <tr
                key={entry.user_id}
                className={`border-b border-border last:border-0 ${
                  isCurrentUser ? "bg-accent/10" : "bg-background"
                }`}
              >
                <td className="px-4 py-3 font-semibold text-foreground">
                  {RANK_MEDAL[entry.rank] ?? entry.rank}
                </td>
                <td className="px-4 py-3 font-medium text-foreground">
                  {entry.username}
                  {isCurrentUser && <span className="ml-2 text-xs text-accent">you</span>}
                </td>
                <td className="px-4 py-3 text-right font-bold text-accent">
                  {entry.total_score.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right text-muted">{entry.games_played}</td>
                <td className="px-4 py-3 text-muted">
                  {bestGame ? (
                    <span>
                      {bestGame.emoji} {bestGame.name}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
