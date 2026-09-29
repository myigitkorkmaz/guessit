// Parses shorthand distance guesses like "5k", "1.2k", "800", or "12,000" (kilometers).
// Returns null if the input isn't a recognizable number.
export function parseDistanceInput(input: string): number | null {
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s*km$/, "");
  if (!cleaned) return null;

  const match = cleaned.match(/^(\d+(?:\.\d+)?)\s*(k)?$/);
  if (!match) return null;

  const value = parseFloat(match[1]);
  const suffix = match[2];

  const multiplier = suffix === "k" ? 1_000 : 1;

  const result = value * multiplier;
  return Number.isFinite(result) && result > 0 ? result : null;
}

// Formats a distance in km as "9,834 km".
export function formatDistance(km: number): string {
  return `${Math.round(km).toLocaleString()} km`;
}
