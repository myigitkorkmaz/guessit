import { NextResponse } from "next/server";
import { getRandomFood, getRandomFoods } from "@/lib/calories";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const exclude = (searchParams.get("exclude") ?? "").split(",").filter(Boolean);
  const count = Math.max(1, parseInt(searchParams.get("count") ?? "1", 10) || 1);

  if (count === 1) {
    return NextResponse.json(getRandomFood(exclude));
  }
  return NextResponse.json({ items: getRandomFoods(count, exclude) });
}
