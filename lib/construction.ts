import { CONSTRUCTIONS, type ConstructionData } from "@/lib/data/construction";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { ConstructionData };

export function getRandomConstruction(exclude: string[] = []): ConstructionData {
  return pickRandom(CONSTRUCTIONS, (c) => c.name, exclude);
}

export function getRandomConstructions(count: number, exclude: string[] = []): ConstructionData[] {
  return pickRandomBatch(CONSTRUCTIONS, count, (c) => c.name, exclude);
}
