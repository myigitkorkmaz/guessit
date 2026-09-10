import Link from "next/link";

export default function MultiplayerSection() {
  return (
    <section className="border-y border-border bg-surface/60 px-4 py-10">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 text-center">
        <div className="flex w-full items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted">
          <span className="h-px flex-1 bg-border" />
          Or play with others
          <span className="h-px flex-1 bg-border" />
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Link
            href="/room/create"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition hover:opacity-90"
          >
            🎮 Create Room
          </Link>
          <Link
            href="/room/join"
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-surface-raised px-6 py-3.5 font-semibold text-foreground transition hover:border-accent"
          >
            🔑 Join Room
          </Link>
        </div>
        <p className="text-xs text-muted">
          Up to 50 players, unlimited spectators — perfect for Discord and streams.
        </p>
      </div>
    </section>
  );
}
