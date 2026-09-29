import { NextResponse } from "next/server";
import { COUNTRIES } from "@/lib/data/countries";
import type { CountryData } from "@/lib/countries";
import { haversineDistanceKm } from "@/lib/geo";

export const dynamic = "force-dynamic";

// Below this, the whole-degree rounding in our stored country coordinates (~±50km each) starts
// to dominate the actual distance, making the guess feel unfairly precise-or-arbitrary.
const MIN_DISTANCE_KM = 500;

interface Pair {
  a: CountryData;
  b: CountryData;
  distanceKm: number;
}

function pickPair(excludeSet: Set<string>): Pair {
  let pool = COUNTRIES.filter((c) => !excludeSet.has(c.cca3));
  if (pool.length < 2) pool = COUNTRIES;

  const a = pool[Math.floor(Math.random() * pool.length)];

  let b = pool.find((c) => c.cca3 !== a.cca3)!;
  let distanceKm = haversineDistanceKm(a.lat, a.lng, b.lat, b.lng);

  for (let i = 0; i < 30; i++) {
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    if (candidate.cca3 === a.cca3) continue;
    const d = haversineDistanceKm(a.lat, a.lng, candidate.lat, candidate.lng);
    if (d >= MIN_DISTANCE_KM) {
      b = candidate;
      distanceKm = d;
      break;
    }
  }

  return { a, b, distanceKm };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const exclude = (searchParams.get("exclude") ?? "").split(",").filter(Boolean);
  const count = Math.max(1, parseInt(searchParams.get("count") ?? "1", 10) || 1);

  const excludeSet = new Set(exclude);
  const pairs: Pair[] = [];
  for (let i = 0; i < count; i++) {
    const pair = pickPair(excludeSet);
    pairs.push(pair);
    excludeSet.add(pair.a.cca3);
    excludeSet.add(pair.b.cca3);
  }

  if (count === 1) {
    return NextResponse.json(pairs[0]);
  }
  return NextResponse.json({ pairs });
}
