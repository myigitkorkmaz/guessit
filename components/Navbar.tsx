"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function Navbar() {
  const { user, username, loading, openAuthModal, signOut } = useAuth();

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-1.5 text-lg font-extrabold tracking-tight text-foreground">
          GuessIt
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-extrabold text-accent-foreground">
            ?
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/leaderboard"
            className="hidden text-sm font-medium text-muted transition hover:text-foreground sm:inline"
          >
            Leaderboard
          </Link>

          {!loading &&
            (user ? (
              <div className="flex items-center gap-3">
                <span className="hidden text-sm text-muted sm:inline">
                  {username ?? user.email}
                </span>
                <button
                  onClick={signOut}
                  className="rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-accent"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
              >
                Sign In
              </button>
            ))}
        </div>
      </div>
    </nav>
  );
}
