"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { calculateScore, SCORE_COLOR_HEX, type ScoreResult } from "@/lib/scoring";
import { parseAreaInput, formatArea } from "@/lib/area";
import { formatPopulation } from "@/lib/population";
import type { CountryData } from "@/lib/countries";
import WikipediaPanel from "@/components/WikipediaPanel";

const WorldMap = dynamic(() => import("@/components/popguess/WorldMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-64 items-center justify-center rounded-2xl border border-border bg-surface-raised">
      <p className="text-sm text-muted">Loading map…</p>
    </div>
  ),
});

const MAX_ROUNDS = 10;

type Phase = "loading" | "guessing" | "revealed" | "gameover" | "error";

export default function HowBigPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [rounds, setRounds] = useState<CountryData[]>([]);
  const [country, setCountry] = useState<CountryData | null>(null);
  const [guess, setGuess] = useState("");
  const [guessError, setGuessError] = useState<string | null>(null);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [guessValue, setGuessValue] = useState<number | null>(null);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);

  // Every round's country is fetched up front in one request, instead of one fetch per round —
  // advancing between rounds is then just reading the next array entry, with no loading pause.
  const fetchRounds = useCallback(async () => {
    setPhase("loading");
    try {
      const res = await fetch(`/api/howbig/random?count=${MAX_ROUNDS}`);
      if (!res.ok) throw new Error("failed");
      const data: { items: CountryData[] } = await res.json();
      setRounds(data.items);
      setCountry(data.items[0]);
      setGuess("");
      setGuessError(null);
      setResult(null);
      setGuessValue(null);
      setPhase("guessing");
    } catch {
      setPhase("error");
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional fetch-on-mount, not a derived-state effect
    fetchRounds();
  }, [fetchRounds]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!country || country.areaKm2 === null) return;

    const parsed = parseAreaInput(guess);
    if (parsed === null) {
      setGuessError('Try a number like 500000, "650k", or "1.2m".');
      return;
    }

    const scoreResult = calculateScore(parsed, country.areaKm2);
    setGuessValue(parsed);
    setResult(scoreResult);
    setTotalScore((prev) => prev + scoreResult.points);
    setPhase("revealed");
  };

  const handleNextRound = () => {
    if (round >= MAX_ROUNDS) {
      setPhase("gameover");
      return;
    }
    const nextRound = round + 1;
    setRound(nextRound);
    setCountry(rounds[nextRound - 1]);
    setGuess("");
    setGuessError(null);
    setResult(null);
    setGuessValue(null);
    setPhase("guessing");
  };

  const handlePlayAgain = () => {
    setRound(1);
    setTotalScore(0);
    fetchRounds();
  };

  const handleShare = async () => {
    const text = `I scored ${totalScore} pts in GuessIt How Big! 🌍 Think you can beat me? Play at guessit.to`;
    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch {
        // user cancelled or share failed — fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      // clipboard unavailable — nothing more we can do
    }
  };

  if (phase === "error") {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <p className="text-lg text-muted">Couldn&apos;t load a country right now. Try again.</p>
        <button
          onClick={() => fetchRounds()}
          className="rounded-2xl bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
        >
          Retry
        </button>
      </div>
    );
  }

  if (phase === "gameover") {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-6 px-4 py-20 text-center">
        <span className="text-5xl" aria-hidden="true">
          🌍
        </span>
        <h1 className="text-2xl font-extrabold text-foreground">Game Over!</h1>
        <p className="text-muted">You played {MAX_ROUNDS} rounds of How Big.</p>
        <div className="rounded-2xl border border-border bg-surface px-8 py-5">
          <p className="text-xs text-muted">Final Score</p>
          <p className="text-4xl font-bold text-accent">{totalScore}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={handlePlayAgain}
            className="rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Play Again
          </button>
          <button
            onClick={handleShare}
            className="rounded-xl border border-border bg-surface-raised px-6 py-3 font-semibold text-foreground transition hover:border-accent"
          >
            {shareCopied ? "Copied!" : "Share Result"}
          </button>
          <Link
            href="/"
            className="rounded-xl border border-border px-6 py-3 font-semibold text-foreground transition hover:border-accent"
          >
            All Games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-10 lg:flex-row lg:items-start lg:justify-center">
      <div className="flex w-full max-w-xl flex-col gap-6">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>
            Round {round} / {MAX_ROUNDS}
          </span>
          <span>
            Score: <span className="font-semibold text-foreground">{totalScore}</span>
          </span>
        </div>

        {phase === "loading" && (
          <div className="flex flex-1 items-center justify-center py-20">
            <p className="text-muted">Loading a country…</p>
          </div>
        )}

        {country && (phase === "guessing" || phase === "revealed") && (
          <div className="animate-fade-up flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full border border-border px-3 py-1 text-muted">
                {country.subregion}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={country.flagUrl}
                alt={`Flag of ${country.name}`}
                className="h-10 w-14 rounded border border-border object-cover"
              />
              <h1 className="text-xl font-bold text-foreground">{country.name}</h1>
            </div>

            <WorldMap
              targetCcn3={country.ccn3}
              lat={country.lat}
              lng={country.lng}
              areaKm2={country.areaKm2}
            />

            {phase === "guessing" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-3 focus-within:border-accent">
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder='Total area — e.g. "650000" or "1.2m" km²'
                    value={guess}
                    onChange={(e) => {
                      setGuess(e.target.value);
                      setGuessError(null);
                    }}
                    className="w-full bg-transparent text-foreground placeholder:text-muted focus:outline-none"
                  />
                </div>
                {guessError && <p className="text-sm text-red-400">{guessError}</p>}
                <button
                  type="submit"
                  className="rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:opacity-90"
                >
                  Submit Guess
                </button>
              </form>
            )}

            {phase === "revealed" && result && guessValue !== null && country.areaKm2 !== null && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-surface-raised p-4">
                  <div>
                    <p className="text-xs text-muted">Actual Area</p>
                    <p className="text-2xl font-bold text-foreground">
                      {formatArea(country.areaKm2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted">Your Guess</p>
                    <p className="text-2xl font-bold text-foreground">{formatArea(guessValue)}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted">{result.direction}</span>
                  <span className="text-sm text-muted">{result.percentOff.toFixed(1)}% off</span>
                </div>

                <div
                  className="flex items-center justify-between rounded-2xl px-5 py-4 text-black"
                  style={{ backgroundColor: SCORE_COLOR_HEX[result.color] ?? "var(--accent)" }}
                >
                  <span className="text-lg font-bold">{result.label}</span>
                  <span className="text-lg font-bold">+{result.points} pts</span>
                </div>

                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border bg-surface-raised p-4 text-center">
                  <div>
                    <p className="text-[11px] text-muted">Population</p>
                    <p className="text-sm font-semibold text-foreground">
                      {formatPopulation(country.population)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted">Region</p>
                    <p className="text-sm font-semibold text-foreground">{country.region}</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-muted">Capital</p>
                    <p className="text-sm font-semibold text-foreground">
                      {country.capital ?? "—"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNextRound}
                  className="rounded-xl border border-border bg-surface-raised py-3 font-semibold text-foreground transition hover:border-accent"
                >
                  {round >= MAX_ROUNDS ? "See Final Score →" : "Next Round →"}
                </button>
              </div>
            )}
          </div>
        )}

        <Link href="/" className="text-center text-sm text-muted hover:text-foreground">
          ← Back to all games
        </Link>
      </div>

      {country && (phase === "guessing" || phase === "revealed") && (
        <div className="w-full lg:sticky lg:top-6 lg:w-80 lg:shrink-0">
          <WikipediaPanel
            query={country.name}
            bias="country"
            redact={["km2", "km²", "square kilomet", "square km", "square mile", "sq mi"]}
            showLink={phase === "revealed"}
          />
        </div>
      )}
    </div>
  );
}
