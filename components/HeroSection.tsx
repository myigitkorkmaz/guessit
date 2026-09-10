import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 px-4 py-16 text-center sm:py-20">
      <div className="flex items-center gap-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        GuessIt
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-accent-foreground sm:h-10 sm:w-10">
          ?
        </span>
      </div>
      <p className="text-lg text-muted">Every number is a game.</p>
      <p className="text-sm font-medium text-accent">30+ games and counting</p>
      <Link
        href="#games"
        className="rounded-2xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground transition hover:opacity-90"
      >
        Start Playing
      </Link>
    </section>
  );
}
