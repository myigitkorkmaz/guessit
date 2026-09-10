import { NextResponse } from "next/server";
import { getRandomCountry } from "@/lib/countries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const exclude = (new URL(request.url).searchParams.get("exclude") ?? "")
    .split(",")
    .filter(Boolean);

  const country = getRandomCountry(exclude);
  return NextResponse.json(country);
}
