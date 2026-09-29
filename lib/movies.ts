import { MOVIES, type MovieData } from "@/lib/data/movies";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { MovieData };

export function getRandomMovie(exclude: string[] = []): MovieData {
  return pickRandom(MOVIES, (m) => m.tmdbId, exclude.map(Number));
}

export function getRandomMovies(count: number, exclude: string[] = []): MovieData[] {
  return pickRandomBatch(MOVIES, count, (m) => m.tmdbId, exclude.map(Number));
}
