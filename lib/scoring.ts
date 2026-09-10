export const SCORE_COLOR_HEX: Record<string, string> = {
  gold: "#ffd700",
  green: "#22c55e",
  yellow: "#eab308",
  orange: "#f97316",
  red: "#ef4444",
};

export interface ScoreResult {
  points: number;
  label: string;
  color: string;
  direction: "Too High ↑" | "Too Low ↓";
  percentOff: number;
}

// GeoGuessr-style exponential scoring, shared by every GuessIt game so the
// "feel" of a good vs. bad guess is consistent across the whole hub.
export function calculateScore(guess: number, actual: number): ScoreResult {
  const percentOff = Math.abs((guess - actual) / actual) * 100;
  const points = Math.max(1, Math.round(1000 * Math.exp(-percentOff / 30)));

  let label: string;
  let color: string;

  if (percentOff <= 5) {
    label = "Perfect!";
    color = "gold";
  } else if (percentOff <= 15) {
    label = "Great!";
    color = "green";
  } else if (percentOff <= 30) {
    label = "Good";
    color = "yellow";
  } else if (percentOff <= 50) {
    label = "Close...";
    color = "orange";
  } else {
    label = "Miss!";
    color = "red";
  }

  const direction = guess > actual ? "Too High ↑" : "Too Low ↓";

  return { points, label, color, direction, percentOff };
}
