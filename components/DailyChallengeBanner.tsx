import Link from "next/link";
import { Game } from "@/types";

export default function DailyChallengeBanner({ game }: { game: Game }) {
  const isLive = game.status === "live";

  return (
    <section className="mx-auto w-full max-w-4xl px-4">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-surface to-surface p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <span className="text-4xl" aria-hidden="true">
            {game.emoji}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Daily Challenge
            </p>
            <p className="text-xl font-bold text-foreground">{game.name}</p>
            <p className="text-sm text-muted">{game.description}</p>
          </div>
        </div>

        {isLive && game.href ? (
          <Link
            href={game.href}
            className="w-full shrink-0 rounded-2xl bg-accent px-6 py-3 text-center font-semibold text-accent-foreground transition hover:opacity-90 sm:w-auto"
          >
            Play Today&apos;s Challenge
          </Link>
        ) : (
          <span className="w-full shrink-0 rounded-2xl bg-surface-raised px-6 py-3 text-center font-medium text-muted sm:w-auto">
            Coming Soon
          </span>
        )}
      </div>
    </section>
  );
}
