"use client";

import { useEffect, useState } from "react";
import { LeaderboardEntry } from "@/types";
import { CATEGORIES, GameCategoryFilter } from "@/lib/games";
import { getGlobalLeaderboard } from "@/lib/leaderboard";
import { useAuth } from "@/lib/auth-context";
import GlobalLeaderboard from "@/components/GlobalLeaderboard";

export default function LeaderboardPage() {
  const { user } = useAuth();
  const [category, setCategory] = useState<GameCategoryFilter>("All");
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!cancelled) setLoading(true);
      const data = await getGlobalLeaderboard(category);
      if (!cancelled) {
        setEntries(data);
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [category]);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-10">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground">Leaderboard</h1>
        <p className="text-sm text-muted">Global scores across every game on GuessIt.</p>
      </div>

      <div className="flex w-full flex-wrap gap-2">
        {(["All", ...CATEGORIES] as GameCategoryFilter[]).map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition ${
              category === c
                ? "border-accent bg-accent/15 text-accent"
                : "border-border text-muted hover:border-accent hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="py-12 text-center text-sm text-muted">Loading…</p>
      ) : (
        <GlobalLeaderboard entries={entries} currentUserId={user?.id} />
      )}
    </div>
  );
}
