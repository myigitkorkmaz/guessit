import { NextResponse } from "next/server";
import { getRandomShow } from "@/lib/tv-shows";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const exclude = (new URL(request.url).searchParams.get("exclude") ?? "")
    .split(",")
    .filter(Boolean);

  const show = getRandomShow(exclude);
  return NextResponse.json(show);
}
