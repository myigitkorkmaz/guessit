import { DISCOVERIES, type DiscoveryData } from "@/lib/data/discoveries";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { DiscoveryData };

export function getRandomDiscovery(exclude: string[] = []): DiscoveryData {
  return pickRandom(DISCOVERIES, (d) => d.name, exclude);
}

export function getRandomDiscoveries(count: number, exclude: string[] = []): DiscoveryData[] {
  return pickRandomBatch(DISCOVERIES, count, (d) => d.name, exclude);
}
