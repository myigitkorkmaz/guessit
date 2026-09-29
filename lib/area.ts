// Parses shorthand area guesses like "650k", "1.2m", "9,833,517", or plain numbers (km²).
// Returns null if the input isn't a recognizable number.
export function parseAreaInput(input: string): number | null {
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s*km2?²?$/, "");
  if (!cleaned) return null;

  const match = cleaned.match(/^(\d+(?:\.\d+)?)\s*([km])?$/);
  if (!match) return null;

  const value = parseFloat(match[1]);
  const suffix = match[2];

  const multiplier = suffix === "k" ? 1_000 : suffix === "m" ? 1_000_000 : 1;

  const result = value * multiplier;
  return Number.isFinite(result) && result > 0 ? result : null;
}

// Formats an area in km² as "9,833,517 km²".
export function formatArea(km2: number): string {
  return `${Math.round(km2).toLocaleString()} km²`;
}
