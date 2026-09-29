import { MOUNTAINS, type MountainData } from "@/lib/data/mountains";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { MountainData };

export function getRandomMountain(exclude: string[] = []): MountainData {
  return pickRandom(MOUNTAINS, (m) => m.name, exclude);
}

export function getRandomMountains(count: number, exclude: string[] = []): MountainData[] {
  return pickRandomBatch(MOUNTAINS, count, (m) => m.name, exclude);
}
