import Link from "next/link";
import { Game } from "@/types";
import { CATEGORY_COLORS } from "@/lib/games";

export default function GameCard({ game }: { game: Game }) {
  const isLive = game.status === "live";
  const color = CATEGORY_COLORS[game.category];

  const content = (
    <div className="relative flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/60">
      {isLive && (
        <span className="absolute right-4 top-4 flex items-center gap-1.5 text-[11px] font-semibold text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          LIVE
        </span>
      )}

      {!isLive && (
        <span className="absolute right-4 top-4 rounded-full bg-surface-raised px-2.5 py-1 text-[10px] font-medium text-muted">
          Coming Soon
        </span>
      )}

      <div className="flex items-start justify-between pr-16">
        <span className="text-3xl" aria-hidden="true">
          {game.emoji}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-foreground">{game.name}</h3>
        </div>
        <p className="text-sm leading-snug text-muted">{game.description}</p>
      </div>

      <span
        className="mt-1 w-fit rounded-full border px-2.5 py-1 text-[11px] font-medium"
        style={{ borderColor: color, color, backgroundColor: `${color}1a` }}
      >
        {game.category}
      </span>

      {isLive && (
        <span className="mt-2 w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
          Play Now
        </span>
      )}
    </div>
  );

  if (isLive && game.href) {
    return (
      <Link href={game.href} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
}
