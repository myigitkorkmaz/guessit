import { RENT_CHECKS, type RentCheckData } from "@/lib/data/rentcheck";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { RentCheckData };

export function getRandomRentCheck(exclude: string[] = []): RentCheckData {
  return pickRandom(RENT_CHECKS, (r) => r.city, exclude);
}

export function getRandomRentChecks(count: number, exclude: string[] = []): RentCheckData[] {
  return pickRandomBatch(RENT_CHECKS, count, (r) => r.city, exclude);
}
