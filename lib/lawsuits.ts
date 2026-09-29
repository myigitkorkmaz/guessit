import { LAWSUITS, type LawsuitData } from "@/lib/data/lawsuits";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { LawsuitData };

export function getRandomLawsuit(exclude: string[] = []): LawsuitData {
  return pickRandom(LAWSUITS, (l) => l.lawsuitLabel, exclude);
}

export function getRandomLawsuits(count: number, exclude: string[] = []): LawsuitData[] {
  return pickRandomBatch(LAWSUITS, count, (l) => l.lawsuitLabel, exclude);
}
