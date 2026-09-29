import { ANIMALS, type AnimalData } from "@/lib/data/animals";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { AnimalData };

export function getRandomAnimal(exclude: string[] = []): AnimalData {
  return pickRandom(ANIMALS, (a) => a.name, exclude);
}

export function getRandomAnimals(count: number, exclude: string[] = []): AnimalData[] {
  return pickRandomBatch(ANIMALS, count, (a) => a.name, exclude);
}
