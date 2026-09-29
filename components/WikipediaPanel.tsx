"use client";

import { useEffect, useState } from "react";

interface WikipediaSummary {
  found: boolean;
  title?: string;
  extract?: string;
  thumbnailUrl?: string | null;
  pageUrl?: string | null;
}

interface WikipediaPanelProps {
  // The name to look up.
  query: string;
  // Extra search terms to disambiguate ("film", "TV series", "moon", "stadium"...).
  bias?: string;
  // Terms to scrub from the extract server-side before it reaches the client. This panel shows
  // during guessing, and Wikipedia's lead paragraph very often states exactly the fact a round
  // is asking about (population, border list, episode count, discovery year...), so the specific
  // thing a game is testing must be redacted rather than just deferring display. A number (e.g.
  // a discovery year) is masked wherever it appears standalone; anything else is treated as a
  // keyword and drops any sentence containing it.
  redact?: string[];
  // Show the "Read more" link to the full Wikipedia article. The redaction above only cleans the
  // short extract — the full article (and its infobox) still has the exact answer, so this should
  // stay false until the guess is already locked in.
  showLink: boolean;
}

export default function WikipediaPanel({ query, bias, redact, showLink }: WikipediaPanelProps) {
  const [summary, setSummary] = useState<WikipediaSummary | null>(null);
  // `redact` is often passed as an inline array literal, which is a new reference every render —
  // depend on this stable string instead so the effect doesn't refetch on every re-render.
  const redactKey = redact?.join(",") ?? "";

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional fetch-on-query-change, not a derived-state effect
    setSummary(null);

    const params = new URLSearchParams({ title: query });
    if (bias) params.set("bias", bias);
    if (redactKey) params.set("redact", redactKey);

    fetch(`/api/wikipedia/summary?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setSummary(data);
      })
      .catch(() => {
        if (!cancelled) setSummary({ found: false });
      });

    return () => {
      cancelled = true;
    };
  }, [query, bias, redactKey]);

  if (summary === null) {
    return (
      <div className="rounded-2xl border border-border bg-surface-raised p-4">
        <p className="text-xs text-muted">Loading Wikipedia summary…</p>
      </div>
    );
  }

  if (!summary.found) return null;

  return (
    <div className="flex gap-3 rounded-2xl border border-border bg-surface-raised p-4">
      {summary.thumbnailUrl && (
        <img
          src={summary.thumbnailUrl}
          alt={summary.title}
          className="h-20 w-20 shrink-0 rounded-xl border border-border object-cover"
        />
      )}
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-semibold text-muted">From Wikipedia — {summary.title}</p>
        <p className="text-sm text-foreground/90">{summary.extract}</p>
        {showLink && summary.pageUrl && (
          <a
            href={summary.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-accent hover:underline"
          >
            Read more ↗
          </a>
        )}
      </div>
    </div>
  );
}
