// Parses shorthand height guesses like "8848", "8.8k", or "1,200" (meters).
// Returns null if the input isn't a recognizable number.
export function parseHeightInput(input: string): number | null {
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s*m$/, "");
  if (!cleaned) return null;

  const match = cleaned.match(/^(\d+(?:\.\d+)?)\s*(k)?$/);
  if (!match) return null;

  const value = parseFloat(match[1]);
  const suffix = match[2];

  const multiplier = suffix === "k" ? 1_000 : 1;

  const result = value * multiplier;
  return Number.isFinite(result) && result > 0 ? result : null;
}

// Formats a height in meters as "8,849 m".
export function formatHeight(meters: number): string {
  return `${Math.round(meters).toLocaleString()} m`;
}
