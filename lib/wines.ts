import { WINES, type WineData } from "@/lib/data/wines";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { WineData };

export function getRandomWine(exclude: string[] = []): WineData {
  return pickRandom(WINES, (w) => w.name, exclude);
}

export function getRandomWines(count: number, exclude: string[] = []): WineData[] {
  return pickRandomBatch(WINES, count, (w) => w.name, exclude);
}
