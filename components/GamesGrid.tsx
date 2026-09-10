import { Game } from "@/types";
import GameCard from "@/components/GameCard";

export default function GamesGrid({ games }: { games: Game[] }) {
  if (games.length === 0) {
    return <p className="py-12 text-center text-sm text-muted">No games match that filter.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
