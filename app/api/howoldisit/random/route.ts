import { NextResponse } from "next/server";
import { getRandomLandmark, getRandomLandmarks, ageOf } from "@/lib/landmarks";

export const dynamic = "force-dynamic";

function toPayload(landmark: ReturnType<typeof getRandomLandmark>) {
  return { name: landmark.name, imageUrl: landmark.imageUrl, ageYears: ageOf(landmark) };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const exclude = (searchParams.get("exclude") ?? "").split(",").filter(Boolean);
  const count = Math.max(1, parseInt(searchParams.get("count") ?? "1", 10) || 1);

  if (count === 1) {
    return NextResponse.json(toPayload(getRandomLandmark(exclude)));
  }
  return NextResponse.json({ items: getRandomLandmarks(count, exclude).map(toPayload) });
}
