"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { calculateScore, SCORE_COLOR_HEX, type ScoreResult } from "@/lib/scoring";
import { parseMoneyInput, formatMoney } from "@/lib/money";
import type { WineData } from "@/lib/wines";
import WikipediaPanel from "@/components/WikipediaPanel";

const MAX_ROUNDS = 10;

type Phase = "loading" | "guessing" | "revealed" | "gameover" | "error";

export default function WineVaultPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [rounds, setRounds] = useState<WineData[]>([]);
  const [wine, setWine] = useState<WineData | null>(null);
  const [guess, setGuess] = useState("");
  const [guessError, setGuessError] = useState<string | null>(null);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [guessValue, setGuessValue] = useState<number | null>(null);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);

  // Every round's wine is fetched up front in one request, instead of one fetch per round —
  // advancing between rounds is then just reading the next array entry, with no loading pause.
  const fetchRounds = useCallback(async () => {
    setPhase("loading");
    try {
      const res = await fetch(`/api/winevault/random?count=${MAX_ROUNDS}`);
      if (!res.ok) throw new Error("failed");
      const data: { items: WineData[] } = await res.json();
      setRounds(data.items);
      setWine(data.items[0]);
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
    if (!wine) return;

    const parsed = parseMoneyInput(guess);
    if (parsed === null) {
      setGuessError('Try a number like 500, "1.2k", or "25k".');
      return;
    }

    const scoreResult = calculateScore(parsed, wine.price);
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
    setWine(rounds[nextRound - 1]);
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
    const text = `I scored ${totalScore} pts in GuessIt Wine Vault! 🍷 Think you can beat me? Play at guessit.to`;
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
        <p className="text-lg text-muted">Couldn&apos;t load a wine right now. Try again.</p>
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
          🍷
        </span>
        <h1 className="text-2xl font-extrabold text-foreground">Game Over!</h1>
        <p className="text-muted">You played {MAX_ROUNDS} rounds of Wine Vault.</p>
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
            <p className="text-muted">Loading a bottle…</p>
          </div>
        )}

        {wine && (phase === "guessing" || phase === "revealed") && (
          <div className="animate-fade-up flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6">
            <div className="flex justify-center">
              <img
                src={wine.imageUrl}
                alt={wine.name}
                className="h-56 w-full rounded-2xl border border-border object-contain bg-surface-raised"
              />
            </div>

            <h1 className="text-center text-xl font-bold text-foreground">{wine.name}</h1>

            {phase === "guessing" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-3 focus-within:border-accent">
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder='Price per bottle — e.g. "500" or "1.2k"'
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

            {phase === "revealed" && result && guessValue !== null && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between rounded-2xl border border-border bg-surface-raised p-4">
                  <div>
                    <p className="text-xs text-muted">Actual Price</p>
                    <p className="text-2xl font-bold text-foreground">{formatMoney(wine.price)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted">Your Guess</p>
                    <p className="text-2xl font-bold text-foreground">{formatMoney(guessValue)}</p>
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

      {wine && (phase === "guessing" || phase === "revealed") && (
        <div className="w-full lg:sticky lg:top-6 lg:w-80 lg:shrink-0">
          <WikipediaPanel
            query={wine.wikiQuery ?? wine.name}
            // Bottle price is one of the most frequently-restated facts in a winery's lead
            // paragraph, and it drifts with vintage/market the same way net worth drifts with
            // time — dropping any sentence that mentions price/cost sidesteps a live figure that
            // wouldn't match this round's static snapshot anyway.
            redact={["price", "cost", "expensive", "per bottle"]}
            showLink={phase === "revealed"}
          />
        </div>
      )}
    </div>
  );
}
