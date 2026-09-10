import { NextResponse } from "next/server";
import { normalizeRoomCode } from "@/lib/room-code";
import { revealRound } from "@/lib/room-reveal";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: rawCode } = await params;
  const code = normalizeRoomCode(rawCode);

  const payload = await revealRound(code);
  if (!payload) {
    return NextResponse.json({ error: "nothing to reveal" }, { status: 400 });
  }
  return NextResponse.json(payload);
}
