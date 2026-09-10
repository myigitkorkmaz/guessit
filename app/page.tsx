import HeroSection from "@/components/HeroSection";
import MultiplayerSection from "@/components/MultiplayerSection";
import DailyChallengeBanner from "@/components/DailyChallengeBanner";
import PopularSection from "@/components/PopularSection";
import GamesSection from "@/components/GamesSection";
import { GAMES, getDailyFeaturedGame } from "@/lib/games";

export default function Home() {
  const dailyGame = getDailyFeaturedGame();

  return (
    <div className="flex flex-1 flex-col gap-12 pb-16">
      <HeroSection />

      <MultiplayerSection />

      <DailyChallengeBanner game={dailyGame} />

      <PopularSection />

      <GamesSection games={GAMES} />

      <footer className="mt-auto border-t border-border px-4 py-6 text-center text-sm text-muted">
        GuessIt · Every number is a game.
      </footer>
    </div>
  );
}
