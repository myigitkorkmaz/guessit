"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { GAMES } from "@/lib/games";
import { isRoomPlayableGame } from "@/lib/room-questions";
import { saveRoomSession } from "@/lib/room-session";

const ROUND_OPTIONS = [3, 5, 10];
const DURATION_OPTIONS = [30, 45, 60];

export default function CreateRoomPage() {
  const router = useRouter();
  const { username } = useAuth();

  const [displayName, setDisplayName] = useState(username ?? "");
  const [gameId, setGameId] = useState("pricedrop");
  const [totalRounds, setTotalRounds] = useState(5);
  const [roundDurationSeconds, setRoundDurationSeconds] = useState(45);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim()) {
      setError("Enter a display name.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/room/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: displayName.trim(),
          gameId,
          totalRounds,
          roundDurationSeconds,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to create room");
      saveRoomSession(data.code, {
        participantId: data.participantId,
        displayName: displayName.trim(),
        role: data.role,
      });
      router.push(`/room/${data.code}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create room");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-4 py-12">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Create a Room</h1>
        <p className="mt-1 text-sm text-muted">
          Host a GuessIt game for friends, a Discord community, or a stream.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Your display name</label>
          <input
            type="text"
            required
            maxLength={24}
            placeholder="e.g. Mehmet"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="rounded-xl border border-border bg-surface-raised px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Game</label>
          <select
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            className="rounded-xl border border-border bg-surface-raised px-4 py-3 text-foreground focus:border-accent focus:outline-none"
          >
            {GAMES.map((game) => (
              <option key={game.id} value={game.id}>
                {game.emoji} {game.name}
                {game.status !== "live" ? " (Coming Soon)" : ""}
              </option>
            ))}
          </select>
          {!isRoomPlayableGame(gameId) && (
            <p className="text-xs text-muted">
              This game isn&apos;t wired up for multiplayer rooms yet — only PriceDrop and
              Population Guess are playable right now.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Rounds</label>
          <div className="flex gap-2">
            {ROUND_OPTIONS.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setTotalRounds(n)}
                className={`flex-1 rounded-xl border py-2.5 text-sm font-semibold transition ${
                  totalRounds === n
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted hover:border-accent/60"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Timer per round</label>
          <div className="flex gap-2">
            {DURATION_OPTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setRoundDurationSeconds(s)}
                className={`flex-1 rounded-xl border py-2.5 text-sm font-semibold transition ${
                  roundDurationSeconds === s
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted hover:border-accent/60"
                }`}
              >
                {s}s
              </button>
            ))}
          </div>
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Creating…" : "Create Room"}
        </button>
      </form>

      <Link href="/" className="text-center text-sm text-muted hover:text-foreground">
        ← Back to all games
      </Link>
    </div>
  );
}
