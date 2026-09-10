"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/lib/auth-context";

type Mode = "login" | "signup";

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const reset = () => {
    setError(null);
    setInfo(null);
    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    reset();
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else closeAuthModal();
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else setInfo("Check your email to confirm your account.");
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    reset();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center"
      onClick={closeAuthModal}
    >
      <div
        className="animate-fade-up w-full max-w-sm rounded-t-3xl border border-border bg-surface p-6 pb-8 shadow-2xl sm:rounded-3xl sm:pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">
            {mode === "login" ? "Sign In" : "Create account"}
          </h2>
          <button
            onClick={closeAuthModal}
            aria-label="Close"
            className="text-muted transition hover:text-foreground"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-border bg-surface-raised px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl border border-border bg-surface-raised px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />

          {error && <p className="text-sm text-red-400">{error}</p>}
          {info && <p className="text-sm text-accent">{info}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 rounded-xl bg-accent py-3 font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Please wait…" : mode === "login" ? "Sign In" : "Sign up"}
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted">OR</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <button
          onClick={handleGoogle}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised py-3 font-medium text-foreground transition hover:border-accent"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"
            />
            <path
              fill="#34A853"
              d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z"
            />
            <path
              fill="#FBBC05"
              d="M3.97 10.72A5.4 5.4 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"
            />
            <path
              fill="#EA4335"
              d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"
            />
          </svg>
          Continue with Google
        </button>

        <p className="mt-5 text-center text-sm text-muted">
          {mode === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => {
              reset();
              setMode(mode === "login" ? "signup" : "login");
            }}
            className="font-medium text-accent hover:underline"
          >
            {mode === "login" ? "Sign up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
