import { RIVERS, type RiverData } from "@/lib/data/rivers";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { RiverData };

export function getRandomRiver(exclude: string[] = []): RiverData {
  return pickRandom(RIVERS, (r) => r.name, exclude);
}

export function getRandomRivers(count: number, exclude: string[] = []): RiverData[] {
  return pickRandomBatch(RIVERS, count, (r) => r.name, exclude);
}
