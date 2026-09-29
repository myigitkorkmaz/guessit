import { COUNTRIES, type CountryData } from "@/lib/data/countries";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { CountryData };

export function getRandomCountry(exclude: string[] = []): CountryData {
  return pickRandom(COUNTRIES, (c) => c.cca3, exclude);
}

export function getRandomCountries(count: number, exclude: string[] = []): CountryData[] {
  return pickRandomBatch(COUNTRIES, count, (c) => c.cca3, exclude);
}

export function getCountryNameByCca3(cca3: string): string | null {
  return COUNTRIES.find((c) => c.cca3 === cca3)?.name ?? null;
}
