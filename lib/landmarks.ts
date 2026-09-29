import { LANDMARKS, type LandmarkData } from "@/lib/data/landmarks";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { LandmarkData };

export function getRandomLandmark(exclude: string[] = []): LandmarkData {
  return pickRandom(LANDMARKS, (l) => l.name, exclude);
}

export function getRandomLandmarks(count: number, exclude: string[] = []): LandmarkData[] {
  return pickRandomBatch(LANDMARKS, count, (l) => l.name, exclude);
}

// Age is computed from `year` at call time (rather than baked into the dataset) so it stays
// correct as real years pass — `year` can be negative (BCE).
export function ageOf(landmark: LandmarkData): number {
  return new Date().getFullYear() - landmark.year;
}
