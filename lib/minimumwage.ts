import { MINIMUM_WAGES, type MinimumWageData } from "@/lib/data/minimumwage";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { MinimumWageData };

export function getRandomMinimumWage(exclude: string[] = []): MinimumWageData {
  return pickRandom(MINIMUM_WAGES, (m) => m.country, exclude);
}

export function getRandomMinimumWages(count: number, exclude: string[] = []): MinimumWageData[] {
  return pickRandomBatch(MINIMUM_WAGES, count, (m) => m.country, exclude);
}
