import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const participantId = String(body?.participantId ?? "");
  const isReady = Boolean(body?.isReady);

  if (!participantId) {
    return NextResponse.json({ error: "participantId is required" }, { status: 400 });
  }

  const admin = createAdminSupabaseClient();
  const { error } = await admin
    .from("room_participants")
    .update({ is_ready: isReady })
    .eq("id", participantId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, isReady });
}
