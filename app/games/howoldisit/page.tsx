"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { calculateScore, SCORE_COLOR_HEX, type ScoreResult } from "@/lib/scoring";
import WikipediaPanel from "@/components/WikipediaPanel";
import YearSlider, { formatYearLabel } from "@/components/YearSlider";

interface Landmark {
  name: string;
  imageUrl: string;
  ageYears: number;
}

const MAX_ROUNDS = 10;

type Phase = "loading" | "guessing" | "revealed" | "gameover" | "error";

export default function HowOldIsItPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [rounds, setRounds] = useState<Landmark[]>([]);
  const [landmark, setLandmark] = useState<Landmark | null>(null);
  const [guess, setGuess] = useState("");
  const [guessError, setGuessError] = useState<string | null>(null);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [guessValue, setGuessValue] = useState<number | null>(null);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [shareCopied, setShareCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  // Every round's landmark is fetched up front in one request, instead of one fetch per round —
  // advancing between rounds is then just reading the next array entry, with no loading pause.
  const fetchRounds = useCallback(async () => {
    setPhase("loading");
    try {
      const res = await fetch(`/api/howoldisit/random?count=${MAX_ROUNDS}`);
      if (!res.ok) throw new Error("failed");
      const data: { items: Landmark[] } = await res.json();
      setRounds(data.items);
      setLandmark(data.items[0]);
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
    if (!landmark) return;

    // The guess is a year (negative = BC) — matches what the slider picks, so the two inputs
    // always agree on what they represent. Scoring still compares age, not year: a year close to
    // 0 (e.g. the Western Wall's -18) would badly distort a percent-based score computed on the
    // year itself, since that formula divides by the actual value.
    const guessedYear = parseInt(guess.replace(/,/g, ""), 10);
    if (!Number.isFinite(guessedYear)) {
      setGuessError('Enter a year, e.g. "1194" or "-3000" for 3000 BC.');
      return;
    }

    const guessedAge = currentYear - guessedYear;
    const scoreResult = calculateScore(guessedAge, landmark.ageYears);
    setGuessValue(guessedYear);
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
    setLandmark(rounds[nextRound - 1]);
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
    const text = `I scored ${totalScore} pts in GuessIt How Old Is It! 🏺 Think you can beat me? Play at guessit.to`;
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
        <p className="text-lg text-muted">Couldn&apos;t load a landmark right now. Try again.</p>
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
          🏺
        </span>
        <h1 className="text-2xl font-extrabold text-foreground">Game Over!</h1>
        <p className="text-muted">You played {MAX_ROUNDS} rounds of How Old Is It.</p>
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
            <p className="text-muted">Loading a landmark…</p>
          </div>
        )}

        {landmark && (phase === "guessing" || phase === "revealed") && (
          <div className="animate-fade-up flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6">
            <div className="flex justify-center">
              <img
                src={landmark.imageUrl}
                alt={landmark.name}
                className="h-56 w-full rounded-2xl border border-border object-contain bg-surface-raised"
              />
            </div>

            <h1 className="text-center text-xl font-bold text-foreground">{landmark.name}</h1>

            {phase === "guessing" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder='What year was it built? e.g. "1194" or "-3000" for 3000 BC'
                  value={guess}
                  onChange={(e) => {
                    setGuess(e.target.value);
                    setGuessError(null);
                  }}
                  className="rounded-xl border border-border bg-surface-raised px-4 py-3 text-center text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                />
                <YearSlider
                  min={-7500}
                  max={currentYear}
                  // Same unit as the text input above (a year, negative = BC) — they always
                  // agree, unlike an earlier version where this slider set a year but the text
                  // field held an age, so typing a "year" there silently meant something else.
                  value={Number.isFinite(parseInt(guess, 10)) ? parseInt(guess, 10) : currentYear}
                  onChange={(year) => {
                    setGuess(String(year));
                    setGuessError(null);
                  }}
                />
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
                    <p className="text-xs text-muted">Actual Year Built</p>
                    <p className="text-2xl font-bold text-foreground">
                      {formatYearLabel(currentYear - landmark.ageYears)}
                    </p>
                    <p className="text-xs text-muted">{landmark.ageYears.toLocaleString()} yrs old</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted">Your Guess</p>
                    <p className="text-2xl font-bold text-foreground">
                      {formatYearLabel(guessValue)}
                    </p>
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

      {landmark && (phase === "guessing" || phase === "revealed") && (
        <div className="w-full lg:sticky lg:top-6 lg:w-80 lg:shrink-0">
          <WikipediaPanel
            query={landmark.name}
            // No bias term here on purpose — these landmark names are already unambiguous, and
            // testing showed a "landmark" bias actively hurt search resolution (e.g. "Eiffel
            // Tower landmark" matched a Texas replica page instead of the real tower).
            // BCE landmarks reconstruct to a negative year, but Wikipedia prose never writes a
            // literal minus sign for those — it writes e.g. "3179 BCE" — so mask the absolute
            // value regardless of sign, or the redaction silently misses every ancient site.
            // Exact-year masking alone isn't enough for ancient sites: an article's lead often
            // states a *different* nearby date (a burial year, a dynasty's reign span, a
            // discovery date) that's close enough to the real answer to trivially "Perfect!" a
            // guess even though it never matches the masked number exactly (e.g. the Terracotta
            // Army's construction started 247 BCE, but its Wikipedia summary opens with "buried
            // ... in 210-209 BCE" — 37 years off, well inside this game's scoring tolerance).
            // Dropping any sentence that mentions "BCE"/"BC" at all sidesteps that whole class of
            // near-miss leaks for ancient landmarks, at the cost of losing a little flavor text.
            redact={[
              String(Math.abs(currentYear - landmark.ageYears - 1)),
              String(Math.abs(currentYear - landmark.ageYears)),
              String(Math.abs(currentYear - landmark.ageYears + 1)),
              "bce",
              "bc",
              "century",
            ]}
            showLink={phase === "revealed"}
          />
        </div>
      )}
    </div>
  );
}
