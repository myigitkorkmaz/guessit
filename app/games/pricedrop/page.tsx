"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { calculateScore, SCORE_COLOR_HEX, type ScoreResult } from "@/lib/scoring";

interface Listing {
  itemId: string;
  title: string;
  price: number;
  currency: string;
  imageUrls: string[];
  itemWebUrl: string;
  condition: string | null;
  category: string;
  searchQuery: string;
  isEasterEgg: boolean;
}

type Phase = "loading" | "guessing" | "revealed" | "gameover" | "error";

const MAX_ROUNDS = 5;
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

export default function PriceDropPage() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [listing, setListing] = useState<Listing | null>(null);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const usedQueries = useRef<string[]>([]);

  const fetchListing = useCallback(async (options?: { surprise?: boolean }) => {
    setPhase("loading");
    setGuess("");
    setResult(null);
    setActiveImage(0);
    try {
      const exclude = usedQueries.current.join(",");
      const params = new URLSearchParams({ exclude });
      if (options?.surprise) params.set("surprise", "1");
      const res = await fetch(`/api/pricedrop/random?${params.toString()}`);
      if (!res.ok) throw new Error("failed");
      const data = await res.json();
      usedQueries.current = [...usedQueries.current, data.searchQuery];
      setListing(data);
      setPhase("guessing");
    } catch {
      setPhase("error");
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional fetch-on-mount, not a derived-state effect
    fetchListing();
  }, [fetchListing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!listing) return;
    const guessValue = parseFloat(guess);
    if (Number.isNaN(guessValue) || guessValue < 0) return;

    const scoreResult = calculateScore(guessValue, listing.price);
    setResult(scoreResult);
    setTotalScore((prev) => prev + scoreResult.points);
    setPhase("revealed");
  };

  const handleNextRound = () => {
    if (round >= MAX_ROUNDS) {
      setPhase("gameover");
      return;
    }
    setRound((prev) => prev + 1);
    fetchListing();
  };

  const handlePlayAgain = () => {
    setRound(1);
    setTotalScore(0);
    usedQueries.current = [];
    fetchListing();
  };

  const handleSurpriseMe = () => {
    fetchListing({ surprise: true });
  };

  const openLightbox = () => {
    setZoom(MIN_ZOOM);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setZoom(MIN_ZOOM);
  };

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, z + 0.5));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, z - 0.5));

  if (phase === "error") {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <p className="text-lg text-muted">Couldn&apos;t load a listing right now. Try again.</p>
        <button
          onClick={() => fetchListing()}
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
          🏁
        </span>
        <h1 className="text-2xl font-extrabold text-foreground">Game Over!</h1>
        <p className="text-muted">
          You played {MAX_ROUNDS} rounds of PriceDrop.
        </p>
        <div className="rounded-2xl border border-border bg-surface px-8 py-5">
          <p className="text-xs text-muted">Final Score</p>
          <p className="text-4xl font-bold text-accent">{totalScore}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handlePlayAgain}
            className="rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
          >
            Play Again
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

  const guessValue = parseFloat(guess);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 px-4 py-10">
      <div className="flex items-center justify-between text-sm text-muted">
        <span>
          Round {round} / {MAX_ROUNDS}
        </span>
        <div className="flex items-center gap-3">
          {phase === "guessing" && (
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition hover:border-accent hover:text-foreground"
            >
              Surprise Me 👀
            </button>
          )}
          <span>
            Score: <span className="font-semibold text-foreground">{totalScore}</span>
          </span>
        </div>
      </div>

      {phase === "loading" && (
        <div className="flex flex-1 items-center justify-center py-20">
          <p className="text-muted">Loading a real eBay listing…</p>
        </div>
      )}

      {listing && (phase === "guessing" || phase === "revealed") && (
        <div className="animate-fade-up flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6">
          <div className="flex items-center gap-2 text-xs">
            {listing.isEasterEgg && (
              <span className="rounded-full border border-accent bg-accent/10 px-3 py-1 text-accent">
                👀 Weird one!
              </span>
            )}
            <span className="rounded-full border border-border px-3 py-1 text-muted">
              {listing.category}
            </span>
            {listing.condition && (
              <span className="rounded-full border border-border px-3 py-1 text-muted">
                {listing.condition}
              </span>
            )}
          </div>

          {listing.imageUrls.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="relative">
                <img
                  src={listing.imageUrls[activeImage]}
                  alt={listing.title}
                  onClick={openLightbox}
                  className="mx-auto h-72 w-full cursor-zoom-in rounded-2xl border border-border object-contain bg-surface-raised"
                />
                <button
                  type="button"
                  aria-label="View full size"
                  onClick={openLightbox}
                  className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:border-accent"
                >
                  🔍
                </button>
                {listing.imageUrls.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous photo"
                      onClick={() =>
                        setActiveImage(
                          (i) => (i - 1 + listing.imageUrls.length) % listing.imageUrls.length
                        )
                      }
                      className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:border-accent"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next photo"
                      onClick={() => setActiveImage((i) => (i + 1) % listing.imageUrls.length)}
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:border-accent"
                    >
                      ›
                    </button>
                    <span className="absolute bottom-2 right-2 rounded-full bg-background/80 px-2 py-0.5 text-xs text-muted backdrop-blur">
                      {activeImage + 1} / {listing.imageUrls.length}
                    </span>
                  </>
                )}
              </div>

              {listing.imageUrls.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {listing.imageUrls.map((url, i) => (
                    <button
                      type="button"
                      key={url}
                      onClick={() => setActiveImage(i)}
                      className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg border transition ${
                        i === activeImage
                          ? "border-accent"
                          : "border-border opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={url} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <h1 className="text-lg font-semibold text-foreground">{listing.title}</h1>

          {phase === "guessing" && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-raised px-4 py-3 focus-within:border-accent">
                <span className="text-muted">$</span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  step="0.01"
                  required
                  autoFocus
                  placeholder="Your guess"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  className="w-full bg-transparent text-foreground placeholder:text-muted focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Submit Guess
              </button>
            </form>
          )}

          {phase === "revealed" && result && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-2xl border border-border bg-surface-raised p-4">
                <div>
                  <p className="text-xs text-muted">Actual Price</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${listing.price.toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted">Your Guess</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${guessValue.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted">{result.direction}</span>
                <span className="text-sm text-muted">
                  {result.percentOff.toFixed(1)}% off
                </span>
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

      {isLightboxOpen && listing && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={closeLightbox}
        >
          <div className="flex items-center justify-between p-4">
            <span className="text-sm text-white/70">
              {activeImage + 1} / {listing.imageUrls.length}
            </span>
            <button
              type="button"
              aria-label="Close"
              onClick={closeLightbox}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white"
            >
              ✕
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center overflow-auto px-4 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={listing.imageUrls[activeImage]}
              alt={listing.title}
              style={{ width: `${zoom * 100}%`, maxWidth: "none" }}
              className="mx-auto shrink-0 rounded-xl transition-[width] duration-150"
            />
          </div>

          <div
            className="flex items-center justify-center gap-4 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {listing.imageUrls.length > 1 && (
              <button
                type="button"
                aria-label="Previous photo (fullscreen)"
                onClick={() => {
                  setZoom(MIN_ZOOM);
                  setActiveImage(
                    (i) => (i - 1 + listing.imageUrls.length) % listing.imageUrls.length
                  );
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition hover:border-white"
              >
                ‹
              </button>
            )}
            <button
              type="button"
              aria-label="Zoom out"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition hover:border-white disabled:opacity-30"
            >
              −
            </button>
            <span className="w-12 text-center text-sm text-white/70">
              {zoom.toFixed(1)}x
            </span>
            <button
              type="button"
              aria-label="Zoom in"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition hover:border-white disabled:opacity-30"
            >
              +
            </button>
            {listing.imageUrls.length > 1 && (
              <button
                type="button"
                aria-label="Next photo (fullscreen)"
                onClick={() => {
                  setZoom(MIN_ZOOM);
                  setActiveImage((i) => (i + 1) % listing.imageUrls.length);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white transition hover:border-white"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
