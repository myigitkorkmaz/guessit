import { TV_SHOWS, type TvShowData } from "@/lib/data/tv-shows";

export type { TvShowData };

export function getRandomShow(exclude: string[] = []): TvShowData {
  const excludeSet = new Set(exclude.map(Number));
  const available = TV_SHOWS.filter((s) => !excludeSet.has(s.tmdbId));
  const pool = available.length > 0 ? available : TV_SHOWS;
  return pool[Math.floor(Math.random() * pool.length)];
}
