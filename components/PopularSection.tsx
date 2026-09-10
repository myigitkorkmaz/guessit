import { Game } from "@/types";
import GameCard from "@/components/GameCard";
import { getGameById } from "@/lib/games";

const POPULAR_IDS = ["pricedrop", "criminals", "youtubeviews"];

export default function PopularSection() {
  const games = POPULAR_IDS.map((id) => getGameById(id)).filter(
    (g): g is Game => g !== undefined
  );

  if (games.length === 0) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4">
      <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-foreground">
        🔥 Popular
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
