"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { isValidRoomCode, normalizeRoomCode } from "@/lib/room-code";
import { saveRoomSession } from "@/lib/room-session";

export default function JoinRoomPage() {
  const router = useRouter();
  const { username } = useAuth();

  const [code, setCode] = useState("");
  const [displayName, setDisplayName] = useState(username ?? "");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeRoomCode(code);

    if (!displayName.trim()) {
      setError("Enter a display name.");
      return;
    }
    if (!isValidRoomCode(normalized)) {
      setError("That doesn't look like a room code — try something like TIGER-4821.");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/room/${normalized}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName: displayName.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error === "room not found" ? "No room found with that code." : data.error);
      saveRoomSession(normalized, {
        participantId: data.participantId,
        displayName: displayName.trim(),
        role: data.role,
      });
      router.push(`/room/${normalized}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join room");
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-4 py-12">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Join a Room</h1>
        <p className="mt-1 text-sm text-muted">
          Got a room code from a friend or a stream? Enter it below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground">Room code</label>
          <input
            type="text"
            required
            placeholder="TIGER-4821"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="rounded-xl border border-border bg-surface-raised px-4 py-4 text-center text-2xl font-bold uppercase tracking-widest text-foreground placeholder:text-muted/50 placeholder:tracking-widest focus:border-accent focus:outline-none"
          />
        </div>

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

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Joining…" : "Join Room"}
        </button>
      </form>

      <Link href="/" className="text-center text-sm text-muted hover:text-foreground">
        ← Back to all games
      </Link>
    </div>
  );
}
