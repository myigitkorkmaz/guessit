import { NextResponse } from "next/server";
import { getPriceDropRound } from "@/lib/pricedrop-round";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const exclude = (params.get("exclude") ?? "").split(",").filter(Boolean);
  const surprise = params.get("surprise") === "1";

  try {
    const round = await getPriceDropRound(exclude, surprise);
    if (!round) {
      return NextResponse.json({ error: "no listing found" }, { status: 404 });
    }
    return NextResponse.json({
      ...round.listing,
      category: round.category,
      searchQuery: round.searchQuery,
      isEasterEgg: round.isEasterEgg,
    });
  } catch {
    return NextResponse.json({ error: "eBay request failed" }, { status: 502 });
  }
}
