import { CALORIES, type CalorieData } from "@/lib/data/calories";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { CalorieData };

export function getRandomFood(exclude: string[] = []): CalorieData {
  return pickRandom(CALORIES, (c) => c.name, exclude);
}

export function getRandomFoods(count: number, exclude: string[] = []): CalorieData[] {
  return pickRandomBatch(CALORIES, count, (c) => c.name, exclude);
}
