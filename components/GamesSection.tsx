"use client";

import { useMemo, useState } from "react";
import { Game, GameCategory } from "@/types";
import { CATEGORIES, CATEGORY_COLORS, GameCategoryFilter } from "@/lib/games";
import GamesGrid from "@/components/GamesGrid";

export default function GamesSection({ games }: { games: Game[] }) {
  const [activeFilter, setActiveFilter] = useState<GameCategoryFilter>("All");

  const filteredGames = useMemo(
    () => (activeFilter === "All" ? games : games.filter((g) => g.category === activeFilter)),
    [games, activeFilter]
  );

  const filters: GameCategoryFilter[] = ["All", ...CATEGORIES];

  return (
    <section id="games" className="mx-auto w-full max-w-6xl px-4">
      <h2 className="mb-5 text-xl font-bold text-foreground">All Games</h2>

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          const color = filter === "All" ? undefined : CATEGORY_COLORS[filter as GameCategory];
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className="rounded-full border px-3.5 py-1.5 text-sm font-medium transition"
              style={
                isActive
                  ? {
                      borderColor: color ?? "var(--accent)",
                      backgroundColor: color ? `${color}26` : "var(--accent)",
                      color: color ?? "var(--accent-foreground)",
                    }
                  : { borderColor: "var(--border)", color: "var(--muted)" }
              }
            >
              {filter}
            </button>
          );
        })}
      </div>

      <GamesGrid games={filteredGames} />
    </section>
  );
}
