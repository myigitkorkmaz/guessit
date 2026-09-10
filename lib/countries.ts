import { COUNTRIES, type CountryData } from "@/lib/data/countries";

export type { CountryData };

export function getRandomCountry(exclude: string[] = []): CountryData {
  const excludeSet = new Set(exclude);
  const available = COUNTRIES.filter((c) => !excludeSet.has(c.cca3));
  const pool = available.length > 0 ? available : COUNTRIES;
  return pool[Math.floor(Math.random() * pool.length)];
}
