import { TV_SHOWS, type TvShowData } from "@/lib/data/tv-shows";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { TvShowData };

export function getRandomShow(exclude: string[] = []): TvShowData {
  return pickRandom(TV_SHOWS, (s) => s.tmdbId, exclude.map(Number));
}

export function getRandomShows(count: number, exclude: string[] = []): TvShowData[] {
  return pickRandomBatch(TV_SHOWS, count, (s) => s.tmdbId, exclude.map(Number));
}
