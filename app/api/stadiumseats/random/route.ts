import { NextResponse } from "next/server";
import { getRandomStadium, getRandomStadiums } from "@/lib/stadiums";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const exclude = (searchParams.get("exclude") ?? "").split(",").filter(Boolean);
  const count = Math.max(1, parseInt(searchParams.get("count") ?? "1", 10) || 1);

  if (count === 1) {
    return NextResponse.json(getRandomStadium(exclude));
  }
  return NextResponse.json({ items: getRandomStadiums(count, exclude) });
}
