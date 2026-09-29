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

interface AbsoluteScoreThresholds {
  perfect: number;
  great: number;
  good: number;
  close: number;
}

// calculateScore's percent-off formula divides by `actual`, which breaks whenever `actual`
// can legitimately be 0 (e.g. island nations with no land borders), and percent-off is a
// poor fit for small-range values generally (guessing 1 vs. actual 2 borders is already
// "50% off"; guessing a year 10 off out of ~1800 barely registers). Scores on absolute
// difference against caller-tuned thresholds instead.
function calculateAbsoluteDiffScore(
  guess: number,
  actual: number,
  thresholds: AbsoluteScoreThresholds
): ScoreResult {
  const diff = Math.abs(guess - actual);

  let points: number;
  let label: string;
  let color: string;

  if (diff <= thresholds.perfect) {
    points = 1000;
    label = "Perfect!";
    color = "gold";
  } else if (diff <= thresholds.great) {
    points = 700;
    label = "Great!";
    color = "green";
  } else if (diff <= thresholds.good) {
    points = 400;
    label = "Good";
    color = "yellow";
  } else if (diff <= thresholds.close) {
    points = 200;
    label = "Close...";
    color = "orange";
  } else {
    points = 50;
    label = "Miss!";
    color = "red";
  }

  const direction = guess >= actual ? "Too High ↑" : "Too Low ↓";
  const percentOff = actual === 0 ? (guess === 0 ? 0 : 100) : Math.abs((guess - actual) / actual) * 100;

  return { points, label, color, direction, percentOff };
}

export function calculateBorderScore(guess: number, actual: number): ScoreResult {
  return calculateAbsoluteDiffScore(guess, actual, { perfect: 0, great: 1, good: 2, close: 4 });
}

export function calculateYearScore(guess: number, actual: number): ScoreResult {
  return calculateAbsoluteDiffScore(guess, actual, { perfect: 5, great: 15, good: 30, close: 75 });
}

// Construction durations skew heavily toward single-digit years (many famous builds took
// 1-10 years), so this needs tighter absolute thresholds than calculateYearScore's calendar-year
// tolerances, or a guess of "5" against an actual of "1" would still read as "Great!".
export function calculateDurationScore(guess: number, actual: number): ScoreResult {
  return calculateAbsoluteDiffScore(guess, actual, { perfect: 1, great: 3, good: 7, close: 20 });
}
