import { PRICE_PER_NIGHT, type PricePerNightData } from "@/lib/data/pricepernicht";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { PricePerNightData };

export function getRandomPricePerNight(exclude: string[] = []): PricePerNightData {
  return pickRandom(PRICE_PER_NIGHT, (p) => p.city, exclude);
}

export function getRandomPricePerNights(count: number, exclude: string[] = []): PricePerNightData[] {
  return pickRandomBatch(PRICE_PER_NIGHT, count, (p) => p.city, exclude);
}
