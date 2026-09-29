import { STADIUMS, type StadiumData } from "@/lib/data/stadiums";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { StadiumData };

export function getRandomStadium(exclude: string[] = []): StadiumData {
  return pickRandom(STADIUMS, (s) => s.name, exclude);
}

export function getRandomStadiums(count: number, exclude: string[] = []): StadiumData[] {
  return pickRandomBatch(STADIUMS, count, (s) => s.name, exclude);
}
