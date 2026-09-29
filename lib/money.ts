// Parses shorthand dollar-amount guesses like "150m", "1.2b", "800k", "$150,000,000", or plain numbers.
// Returns null if the input isn't a recognizable number.
export function parseMoneyInput(input: string): number | null {
  const cleaned = input.trim().toLowerCase().replace(/[$,]/g, "");
  if (!cleaned) return null;

  const match = cleaned.match(/^(\d+(?:\.\d+)?)\s*([kmb])?$/);
  if (!match) return null;

  const value = parseFloat(match[1]);
  const suffix = match[2];

  const multiplier = suffix === "k" ? 1_000 : suffix === "m" ? 1_000_000 : suffix === "b" ? 1_000_000_000 : 1;

  const result = value * multiplier;
  return Number.isFinite(result) && result > 0 ? result : null;
}

// Formats a dollar amount as "$165.0 Million", "$800 Thousand", or "$950".
export function formatMoney(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)} Billion`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)} Million`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)} Thousand`;
  return `$${n.toLocaleString()}`;
}
