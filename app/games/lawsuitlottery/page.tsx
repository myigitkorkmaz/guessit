"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { calculateScore, SCORE_COLOR_HEX, type ScoreResult } from "@/lib/scoring";
import { parseMoneyInput, formatMoney } from "@/lib/money";
import type { LawsuitData } from "@/lib/lawsuits";
import WikipediaPanel from "@/components/WikipediaPanel";

const MAX_ROUNDS = 10;

type Phase = "loading" | "guessing" | "revealed" | "gameover" | "error";

export default function LawsuitLotteryPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [rounds, setRounds] = useState<LawsuitData[]>([]);
  const [lawsuit, setLawsuit] = useState<LawsuitData | null>(null);
  const [guess, setGuess] = useState("");
  const [guessError, setGuessError] = useState<string | null>(null);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [guessValue, setGuessValue] = useState<number | null>(null);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);

  // Every round's lawsuit is fetched up front in one request, instead of one fetch per round —
  // advancing between rounds is then just reading the next array entry, with no loading pause.
  const fetchRounds = useCallback(async () => {
    setPhase("loading");
    try {
      const res = await fetch(`/api/lawsuitlottery/random?count=${MAX_ROUNDS}`);
      if (!res.ok) throw new Error("failed");
      const data: { items: LawsuitData[] } = await res.json();
      setRounds(data.items);
      setLawsuit(data.items[0]);
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
    if (!lawsuit) return;

    const parsed = parseMoneyInput(guess);
    if (parsed === null) {
      setGuessError('Try a number like 500m, "1.5b", or "14.7b".');
      return;
    }

    const scoreResult = calculateScore(parsed, lawsuit.amount);
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
    setLawsuit(rounds[nextRound - 1]);
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
    const text = `I scored ${totalScore} pts in GuessIt Lawsuit Lottery! ⚖️ Think you can beat me? Play at guessit.to`;
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
        <p className="text-lg text-muted">Couldn&apos;t load a case right now. Try again.</p>
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
          ⚖️
        </span>
        <h1 className="text-2xl font-extrabold text-foreground">Game Over!</h1>
        <p className="text-muted">You played {MAX_ROUNDS} rounds of Lawsuit Lottery.</p>
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
            <p className="text-muted">Loading a case…</p>
          </div>
        )}

        {lawsuit && (phase === "guessing" || phase === "revealed") && (
          <div className="animate-fade-up flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6">
            <div className="flex justify-center">
              <img
                src={lawsuit.imageUrl}
                alt={lawsuit.subject}
                className="h-56 w-full rounded-2xl border border-border object-contain bg-surface-raised"
              />
            </div>

            <div className="text-center">
              <h1 className="text-xl font-bold text-foreground">{lawsuit.lawsuitLabel}</h1>
              <p className="text-sm text-muted">
                {lawsuit.subject} · {lawsuit.year}
              </p>
            </div>

            {phase === "guessing" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-3 focus-within:border-accent">
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder='Settlement amount — e.g. "500m" or "14.7b"'
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
                    <p className="text-xs text-muted">Actual Amount</p>
                    <p className="text-2xl font-bold text-foreground">{formatMoney(lawsuit.amount)}</p>
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

      {lawsuit && (phase === "guessing" || phase === "revealed") && (
        <div className="w-full lg:sticky lg:top-6 lg:w-80 lg:shrink-0">
          <WikipediaPanel
            query={lawsuit.wikiQuery ?? lawsuit.subject}
            // Prefer the dedicated scandal/case article (wikiQuery) over the defendant's general
            // company page when one exists -- the company page talks about products and history,
            // not the case this round is testing. Still drop any sentence mentioning a dollar
            // figure as a safety net, since even the case-specific article could restate the
            // settlement amount directly.
            redact={["settlement", "settled", "fine of", "penalty", "billion"]}
            showLink={phase === "revealed"}
          />
        </div>
      )}
    </div>
  );
}
