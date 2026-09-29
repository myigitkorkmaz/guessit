"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { supabase } from "@/lib/supabase";
import { getRoomSession, saveRoomSession, type RoomSession } from "@/lib/room-session";
import { getGameById } from "@/lib/games";
import { parsePopulationInput, formatPopulation } from "@/lib/population";
import { SCORE_COLOR_HEX } from "@/lib/scoring";
import type { Room, RoomRole } from "@/types";

const WorldMap = dynamic(() => import("@/components/popguess/WorldMap"), {
  ssr: false,
  loading: () => <div className="h-56 rounded-2xl border border-border bg-surface-raised" />,
});

const MIN_READY_TO_START = 2;
const NEXT_ROUND_DELAY = 8;

type Phase = "loading" | "need-name" | "not-found" | "lobby" | "playing" | "reveal" | "finished";

interface PresenceEntry {
  participantId: string;
  displayName: string;
  role: RoomRole;
  isReady: boolean;
}

interface RevealGuessEntry {
  displayName: string;
  guess: number | null;
  score: number;
  percentageOff: number | null;
}

interface RevealPayload {
  roundNumber: number;
  correctAnswer: number;
  guesses: RevealGuessEntry[];
  leaderboard: { displayName: string; totalScore: number }[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type QuestionData = any;

function colorForPercentOff(percentOff: number | null): string {
  if (percentOff === null) return "var(--border)";
  if (percentOff <= 5) return SCORE_COLOR_HEX.gold;
  if (percentOff <= 15) return SCORE_COLOR_HEX.green;
  if (percentOff <= 30) return SCORE_COLOR_HEX.yellow;
  if (percentOff <= 50) return SCORE_COLOR_HEX.orange;
  return SCORE_COLOR_HEX.red;
}

export default function RoomClient({ code }: { code: string }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [room, setRoom] = useState<Room | null>(null);
  const [session, setSession] = useState<RoomSession | null>(null);
  const [joinName, setJoinName] = useState("");
  const [joinError, setJoinError] = useState<string | null>(null);
  const [joinLoading, setJoinLoading] = useState(false);

  const [presence, setPresence] = useState<Record<string, PresenceEntry>>({});
  const [isReady, setIsReady] = useState(false);
  const [startError, setStartError] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);

  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [roundNumber, setRoundNumber] = useState(1);
  const [totalRounds, setTotalRounds] = useState(5);
  const [durationSeconds, setDurationSeconds] = useState(45);
  const [startedAt, setStartedAt] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [guessedNames, setGuessedNames] = useState<Set<string>>(new Set());
  const [myGuessSubmitted, setMyGuessSubmitted] = useState(false);
  const [guessInput, setGuessInput] = useState("");
  const [guessError, setGuessError] = useState<string | null>(null);

  const [reveal, setReveal] = useState<RevealPayload | null>(null);
  const [nextCountdown, setNextCountdown] = useState(NEXT_ROUND_DELAY);
  const [finalLeaderboard, setFinalLeaderboard] = useState<{ displayName: string; totalScore: number }[]>([]);

  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);
  const revealedRef = useRef(false);
  // A second tab (or a reload) subscribing to presence must announce the
  // REAL current ready state, not a hardcoded false — otherwise whichever
  // tab's subscribe+track happens to land last wins and can silently
  // un-ready a player who already readied up in another tab. Refs (not
  // state) because the subscribe callback fires async and must read the
  // latest value, not whatever was closed over when the effect was set up.
  const isReadyRef = useRef(false);

  const game = room ? getGameById(room.game_id) : null;

  // ---- initial load: session + room + (if mid-game) current round ----
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const existing = getRoomSession(code);
      const { data: roomRow } = await supabase.from("rooms").select("*").eq("code", code).single();
      if (cancelled) return;

      if (!roomRow) {
        setPhase("not-found");
        return;
      }
      setRoom(roomRow);

      if (!existing) {
        setPhase("need-name");
        return;
      }
      // Resolve the real ready state — and populate isReadyRef — BEFORE
      // setSession, since setSession is what the realtime-subscribe effect
      // depends on. If session were set first, that effect could subscribe
      // and track() using the ref's still-default value before this fetch
      // resolves, recreating the exact race this is meant to prevent.
      const { data: participantRow } = await supabase
        .from("room_participants")
        .select("is_ready")
        .eq("id", existing.participantId)
        .maybeSingle();
      if (cancelled) return;
      const currentIsReady = participantRow?.is_ready ?? false;
      isReadyRef.current = currentIsReady;
      setIsReady(currentIsReady);
      setSession(existing);

      if (roomRow.status === "playing") {
        const res = await fetch(`/api/room/${code}/state`);
        const state = await res.json();
        if (cancelled) return;
        if (state.questionData) {
          setQuestion(state.questionData);
          setRoundNumber(state.roundNumber);
          setTotalRounds(state.totalRounds);
          setDurationSeconds(state.durationSeconds);
          setStartedAt(state.startedAt);
          setGuessedNames(new Set(state.guessedNames ?? []));
          setPhase(state.revealed ? "reveal" : "playing");
        } else {
          setPhase("lobby");
        }
      } else if (roomRow.status === "finished") {
        setPhase("finished");
      } else {
        setPhase("lobby");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code]);

  const handleJoinInline = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinName.trim()) {
      setJoinError("Enter a display name.");
      return;
    }
    setJoinLoading(true);
    setJoinError(null);
    try {
      const res = await fetch(`/api/room/${code}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ displayName: joinName.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to join room");
      const newSession = { participantId: data.participantId, displayName: joinName.trim(), role: data.role };
      saveRoomSession(code, newSession);
      setSession(newSession);
      setPhase(room?.status === "playing" ? "playing" : room?.status === "finished" ? "finished" : "lobby");
    } catch (err) {
      setJoinError(err instanceof Error ? err.message : "Failed to join room");
    } finally {
      setJoinLoading(false);
    }
  };

  // ---- realtime: presence (lobby liveness) + broadcast (game events) ----
  useEffect(() => {
    if (!session) return;

    const channel = supabase.channel(`room:${code}`, {
      config: { presence: { key: session.participantId } },
    });
    channelRef.current = channel;

    channel.on("presence", { event: "sync" }, () => {
      const state = channel.presenceState<PresenceEntry>();
      const merged: Record<string, PresenceEntry> = {};
      for (const key of Object.keys(state)) {
        const metas = state[key];
        const base = metas[0];
        if (!base) continue;
        // A single participant can have multiple connections under the
        // same presence key (two tabs, a reload that hasn't cleaned up
        // yet). Indexing metas[0] alone is unreliable — Supabase doesn't
        // guarantee that's the most-recently-updated connection, so a
        // stale "not ready" tab could silently mask a real "ready" one.
        // Ready is a per-participant fact, not per-connection: OR across
        // every connection sharing this key instead.
        const isReady = metas.some((m) => m.isReady);
        merged[key] = { ...base, isReady };
      }
      setPresence(merged);
    });

    channel.on("broadcast", { event: "round_start" }, ({ payload }) => {
      revealedRef.current = false;
      setQuestion(payload.questionData);
      setRoundNumber(payload.roundNumber);
      setTotalRounds(payload.totalRounds);
      setDurationSeconds(payload.durationSeconds);
      setStartedAt(payload.startedAt);
      setGuessedNames(new Set());
      setMyGuessSubmitted(false);
      setGuessInput("");
      setGuessError(null);
      setReveal(null);
      setPhase("playing");
    });

    channel.on("broadcast", { event: "player_guessed" }, ({ payload }) => {
      setGuessedNames((prev) => new Set(prev).add(payload.displayName));
    });

    channel.on("broadcast", { event: "round_reveal" }, ({ payload }) => {
      revealedRef.current = true;
      setReveal(payload as RevealPayload);
      setNextCountdown(NEXT_ROUND_DELAY);
      setPhase("reveal");
    });

    channel.on("broadcast", { event: "game_over" }, ({ payload }) => {
      setFinalLeaderboard(payload.leaderboard ?? []);
      setPhase("finished");
    });

    channel.on("broadcast", { event: "room_reset" }, () => {
      isReadyRef.current = false;
      setIsReady(false);
      setReveal(null);
      setQuestion(null);
      setPhase("lobby");
    });

    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel.track({
          participantId: session.participantId,
          displayName: session.displayName,
          role: session.role,
          isReady: isReadyRef.current,
        } satisfies PresenceEntry);
      }
    });

    return () => {
      supabase.removeChannel(channel);
      channelRef.current = null;
    };
  }, [code, session]);

  const toggleReady = async () => {
    const next = !isReady;
    isReadyRef.current = next;
    setIsReady(next);
    if (channelRef.current && session) {
      await channelRef.current.track({
        participantId: session.participantId,
        displayName: session.displayName,
        role: session.role,
        isReady: next,
      } satisfies PresenceEntry);
    }
    await fetch(`/api/room/${code}/ready`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId: session?.participantId, isReady: next }),
    });
  };

  const readyCount = Object.values(presence).filter((p) => p.isReady).length;
  const canStart = session?.role === "host" && readyCount >= MIN_READY_TO_START;

  const handleStart = async () => {
    setStartError(null);
    setIsStarting(true);
    try {
      // Every round's question is generated up front here (see start/route.ts) so gameplay
      // never pauses between rounds — for PriceDrop specifically that means several sequential
      // real eBay API calls, which can take a good few seconds for a longer game. isStarting
      // keeps the button showing that instead of looking frozen.
      const res = await fetch(`/api/room/${code}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ participantId: session?.participantId }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStartError(data.error ?? "Failed to start game");
      }
    } finally {
      setIsStarting(false);
    }
  };

  // ---- countdown timer ----
  useEffect(() => {
    if (phase !== "playing" || !startedAt) return;
    const started = new Date(startedAt).getTime();

    const tick = () => {
      const elapsed = (Date.now() - started) / 1000;
      const remaining = Math.max(0, Math.ceil(durationSeconds - elapsed));
      setTimeLeft(remaining);
      if (remaining <= 0 && !revealedRef.current) {
        revealedRef.current = true;
        fetch(`/api/room/${code}/reveal`, { method: "POST" }).catch(() => {
          revealedRef.current = false;
        });
      }
    };
    tick();
    const interval = setInterval(tick, 500);
    return () => clearInterval(interval);
  }, [phase, startedAt, durationSeconds, code]);

  // ---- reveal -> next round countdown (host auto-advances) ----
  useEffect(() => {
    if (phase !== "reveal") return;
    if (nextCountdown <= 0) {
      if (session?.role === "host") {
        fetch(`/api/room/${code}/next`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ participantId: session.participantId }),
        });
      }
      return;
    }
    const t = setTimeout(() => setNextCountdown((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, nextCountdown, session, code]);

  const handleSubmitGuess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session || myGuessSubmitted) return;

    let value: number | null = null;
    if (question?.kind === "popguess") {
      value = parsePopulationInput(guessInput);
      if (value === null) {
        setGuessError('Try a number like 50000, "50m", or "2.3b".');
        return;
      }
    } else {
      value = parseFloat(guessInput);
      if (!Number.isFinite(value) || value < 0) {
        setGuessError("Enter a valid number.");
        return;
      }
    }

    setMyGuessSubmitted(true);
    const res = await fetch(`/api/room/${code}/guess`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId: session.participantId, guess: value }),
    });
    if (!res.ok) {
      setMyGuessSubmitted(false);
      const data = await res.json().catch(() => ({}));
      setGuessError(data.error ?? "Failed to submit guess");
    }
  };

  const handlePlayAgain = async () => {
    await fetch(`/api/room/${code}/reset`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ participantId: session?.participantId }),
    });
  };

  // ==================== RENDER ====================

  if (phase === "loading") {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-1 items-center justify-center py-20">
        <p className="text-muted">Loading room…</p>
      </div>
    );
  }

  if (phase === "not-found") {
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <span className="text-4xl">🔍</span>
        <h1 className="text-xl font-bold text-foreground">Room not found</h1>
        <p className="text-sm text-muted">
          <span className="font-mono">{code}</span> doesn&apos;t match any active room.
        </p>
        <Link href="/room/join" className="rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90">
          Try another code
        </Link>
      </div>
    );
  }

  if (phase === "need-name") {
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-4 py-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Room</p>
          <h1 className="font-mono text-2xl font-extrabold text-foreground">{code}</h1>
        </div>
        <form onSubmit={handleJoinInline} className="flex flex-col gap-3">
          <input
            type="text"
            required
            maxLength={24}
            placeholder="Your display name"
            value={joinName}
            onChange={(e) => setJoinName(e.target.value)}
            className="rounded-xl border border-border bg-surface-raised px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
          {joinError && <p className="text-sm text-red-400">{joinError}</p>}
          <button
            type="submit"
            disabled={joinLoading}
            className="rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            {joinLoading ? "Joining…" : "Join Room"}
          </button>
        </form>
      </div>
    );
  }

  const participants = Object.values(presence);
  const players = participants.filter((p) => p.role !== "spectator");
  const spectators = participants.filter((p) => p.role === "spectator");

  if (phase === "lobby" && room) {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-6 px-4 py-10">
        <div className="flex flex-col items-center gap-2 rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/10 via-surface to-surface p-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Room Code</p>
          <p className="font-mono text-3xl font-extrabold tracking-widest text-foreground">{room.code}</p>
          <button
            onClick={() => navigator.clipboard?.writeText(room.code)}
            className="text-xs text-muted underline hover:text-foreground"
          >
            Copy code
          </button>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-border bg-surface p-4 text-sm">
          <span className="text-muted">Game</span>
          <span className="font-medium text-foreground">
            {game ? `${game.emoji} ${game.name}` : room.game_id}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl border border-border bg-surface p-4 text-center">
            <p className="text-muted">Rounds</p>
            <p className="text-lg font-bold text-foreground">{room.total_rounds}</p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-4 text-center">
            <p className="text-muted">Timer</p>
            <p className="text-lg font-bold text-foreground">{room.round_duration_seconds}s</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-5">
          <p className="text-sm font-medium text-foreground">
            Players ({players.length}) {spectators.length > 0 && `· ${spectators.length} watching`}
          </p>
          <ul className="flex flex-col gap-2">
            {players.map((p) => (
              <li key={p.participantId} className="flex items-center gap-2 text-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-raised text-xs font-bold text-foreground">
                  {p.displayName.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-foreground">{p.displayName}</span>
                {p.role === "host" && (
                  <span className="rounded-full border border-accent px-2 py-0.5 text-[10px] font-medium text-accent">HOST</span>
                )}
                <span className={`ml-auto text-xs ${p.isReady ? "text-accent" : "text-muted"}`}>
                  {p.isReady ? "Ready ✓" : "Not ready"}
                </span>
              </li>
            ))}
            {players.length === 0 && <li className="text-sm text-muted">Waiting for players to connect…</li>}
          </ul>
        </div>

        {session?.role !== "spectator" && (
          <button
            onClick={toggleReady}
            className={`rounded-xl py-3 font-semibold transition ${
              isReady
                ? "border border-accent bg-accent/10 text-accent"
                : "bg-accent text-accent-foreground hover:opacity-90"
            }`}
          >
            {isReady ? "Ready ✓ — click to cancel" : "Ready Up"}
          </button>
        )}

        {session?.role === "host" && (
          <button
            onClick={handleStart}
            disabled={!canStart || isStarting}
            className="rounded-xl border border-border bg-surface-raised py-3 font-semibold text-foreground transition hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isStarting
              ? "Starting…"
              : canStart
                ? "Start Game →"
                : `Start Game (need ${MIN_READY_TO_START}+ ready)`}
          </button>
        )}
        {startError && <p className="text-center text-sm text-red-400">{startError}</p>}

        <Link href="/" className="text-center text-sm text-muted hover:text-foreground">
          ← Back to all games
        </Link>
      </div>
    );
  }

  if (phase === "playing" && question) {
    const activeCount = players.length;
    const guessedActiveCount = players.filter((p) => guessedNames.has(p.displayName)).length;
    const isSpectator = session?.role === "spectator";
    const timerColor = timeLeft <= 5 ? "#ef4444" : timeLeft <= 15 ? "#f97316" : "var(--foreground)";

    return (
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-5 px-4 py-8">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>Round {roundNumber} / {totalRounds}</span>
          <span className="font-mono text-lg font-bold" style={{ color: timerColor }}>
            {timeLeft}s
          </span>
        </div>

        <div className="animate-fade-up flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
          {question.kind === "pricedrop" && (
            <>
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full border border-border px-3 py-1 text-muted">{question.category}</span>
                {question.condition && (
                  <span className="rounded-full border border-border px-3 py-1 text-muted">{question.condition}</span>
                )}
              </div>
              {question.imageUrls?.[0] && (
                <img
                  src={question.imageUrls[0]}
                  alt={question.title}
                  className="mx-auto h-56 w-full rounded-2xl border border-border object-contain bg-surface-raised"
                />
              )}
              <h1 className="text-lg font-semibold text-foreground">{question.title}</h1>
            </>
          )}

          {question.kind === "popguess" && (
            <>
              <span className="w-fit rounded-full border border-border px-3 py-1 text-xs text-muted">
                {question.subregion}
              </span>
              <div className="flex items-center gap-3">
                <img src={question.flagUrl} alt="" className="h-10 w-14 rounded border border-border object-cover" />
                <h1 className="text-xl font-bold text-foreground">{question.name}</h1>
              </div>
              <WorldMap targetCcn3={question.ccn3} lat={question.lat} lng={question.lng} areaKm2={question.areaKm2} />
            </>
          )}

          <p className="text-sm text-muted">
            {guessedActiveCount} / {activeCount} players guessed
          </p>

          {isSpectator ? (
            <p className="rounded-xl border border-dashed border-border py-3 text-center text-sm text-muted">
              You&apos;re spectating this round.
            </p>
          ) : myGuessSubmitted ? (
            <p className="rounded-xl border border-dashed border-border py-3 text-center text-sm text-muted">
              Guess submitted — waiting for the round to end…
            </p>
          ) : (
            <form onSubmit={handleSubmitGuess} className="flex flex-col gap-3">
              <input
                type="text"
                required
                autoFocus
                placeholder={question.kind === "popguess" ? 'e.g. "50m" or "2.3b"' : "Your guess"}
                value={guessInput}
                onChange={(e) => {
                  setGuessInput(e.target.value);
                  setGuessError(null);
                }}
                className="rounded-xl border border-border bg-surface-raised px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
              />
              {guessError && <p className="text-sm text-red-400">{guessError}</p>}
              <button type="submit" className="rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:opacity-90">
                Submit Guess
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  if (phase === "reveal" && reveal) {
    const sorted = [...reveal.guesses].sort((a, b) => {
      if (a.percentageOff === null) return 1;
      if (b.percentageOff === null) return -1;
      return a.percentageOff - b.percentageOff;
    });

    return (
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-5 px-4 py-8">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>Round {reveal.roundNumber} / {totalRounds}</span>
          <span>Next round in {nextCountdown}s…</span>
        </div>

        <div className="animate-fade-up flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
          <div className="rounded-2xl border border-border bg-surface-raised p-4 text-center">
            <p className="text-xs text-muted">Correct Answer</p>
            <p className="text-2xl font-bold text-foreground">
              {question?.kind === "popguess" ? formatPopulation(reveal.correctAnswer) : `$${reveal.correctAnswer.toFixed(2)}`}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {sorted.map((g, i) => (
              <div
                key={g.displayName}
                className="flex items-center justify-between rounded-xl border border-border px-4 py-2.5 text-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="text-muted">#{i + 1}</span>
                  <span className="font-medium text-foreground">{g.displayName}</span>
                </span>
                <span className="flex items-center gap-2">
                  {g.guess !== null ? (
                    <span className="text-muted">
                      {question?.kind === "popguess" ? formatPopulation(g.guess) : `$${g.guess.toFixed(2)}`}
                    </span>
                  ) : (
                    <span className="text-muted">no guess</span>
                  )}
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-bold text-black"
                    style={{ backgroundColor: colorForPercentOff(g.percentageOff) }}
                  >
                    +{g.score}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 border-t border-border pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Leaderboard</p>
            {reveal.leaderboard.map((entry, i) => (
              <div key={entry.displayName} className="flex items-center justify-between text-sm">
                <span className="text-foreground">
                  {i === 0 ? "🏆 " : ""}
                  {entry.displayName}
                </span>
                <span className="font-semibold text-foreground">{entry.totalScore}</span>
              </div>
            ))}
          </div>

          {session?.role === "host" && (
            <button
              onClick={() =>
                fetch(`/api/room/${code}/next`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ participantId: session.participantId }),
                })
              }
              className="rounded-xl border border-border bg-surface-raised py-3 font-semibold text-foreground transition hover:border-accent"
            >
              {roundNumber >= totalRounds ? "See Final Results →" : "Next Round →"}
            </button>
          )}
        </div>
      </div>
    );
  }

  if (phase === "finished") {
    const winner = finalLeaderboard[0];
    return (
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center gap-6 px-4 py-16 text-center">
        <span className="text-5xl">🏆</span>
        <h1 className="text-2xl font-extrabold text-foreground">Game Over!</h1>
        {winner && (
          <p className="text-muted">
            <span className="font-semibold text-foreground">{winner.displayName}</span> wins with{" "}
            {winner.totalScore} pts!
          </p>
        )}

        <div className="flex w-full flex-col gap-2 rounded-2xl border border-border bg-surface p-5">
          {finalLeaderboard.map((entry, i) => (
            <div key={entry.displayName} className="flex items-center justify-between text-sm">
              <span className="text-foreground">
                {i === 0 ? "🏆 " : `${i + 1}. `}
                {entry.displayName}
              </span>
              <span className="font-semibold text-foreground">{entry.totalScore}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {session?.role === "host" && (
            <button
              onClick={handlePlayAgain}
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Play Again
            </button>
          )}
          <Link href="/room/create" className="rounded-xl border border-border bg-surface-raised px-6 py-3 font-semibold text-foreground transition hover:border-accent">
            New Room
          </Link>
          <Link href="/" className="rounded-xl border border-border px-6 py-3 font-semibold text-foreground transition hover:border-accent">
            All Games
          </Link>
        </div>
      </div>
    );
  }

  return null;
}
