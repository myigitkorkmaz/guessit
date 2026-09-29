// Parses lifespan guesses like "25", "12.5", "40 years" or "30y".
// Returns null if the input isn't a recognizable positive number.
export function parseLifespanInput(input: string): number | null {
  const cleaned = input
    .trim()
    .toLowerCase()
    .replace(/,/g, "")
    .replace(/\s*(years?|yrs?|y)$/, "");
  if (!cleaned) return null;

  const match = cleaned.match(/^\d+(?:\.\d+)?$/);
  if (!match) return null;

  const result = parseFloat(match[0]);
  return Number.isFinite(result) && result > 0 ? result : null;
}

// Formats a lifespan as "27 years" / "4.5 years" / "1 year".
export function formatLifespan(years: number): string {
  const rounded = Math.round(years * 10) / 10;
  return `${rounded.toLocaleString()} ${rounded === 1 ? "year" : "years"}`;
}
