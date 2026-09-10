import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { normalizeRoomCode } from "@/lib/room-code";
import type { Room } from "@/types";

export const dynamic = "force-dynamic";

const MAX_DISPLAY_NAME_LENGTH = 24;

export async function POST(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: rawCode } = await params;
  const code = normalizeRoomCode(rawCode);

  const body = await request.json().catch(() => null);
  const displayName = String(body?.displayName ?? "").trim().slice(0, MAX_DISPLAY_NAME_LENGTH);
  if (!displayName) {
    return NextResponse.json({ error: "displayName is required" }, { status: 400 });
  }

  const admin = createAdminSupabaseClient();

  const { data: room } = await admin
    .from("rooms")
    .select("*")
    .eq("code", code)
    .single<Room>();

  if (!room) {
    return NextResponse.json({ error: "room not found" }, { status: 404 });
  }

  const sessionClient = await createServerSupabaseClient();
  const {
    data: { user },
  } = await sessionClient.auth.getUser();

  // Logged-in users rejoining (page refresh, reconnect) shouldn't get a
  // duplicate row — reuse their existing participant instead.
  if (user) {
    const { data: existing } = await admin
      .from("room_participants")
      .select("*")
      .eq("room_id", room.id)
      .eq("user_id", user.id)
      .maybeSingle();

    if (existing) {
      return NextResponse.json({ participantId: existing.id, role: existing.role }, { status: 200 });
    }
  }

  const { count: activePlayerCount } = await admin
    .from("room_participants")
    .select("id", { count: "exact", head: true })
    .eq("room_id", room.id)
    .eq("role", "player");

  const role = (activePlayerCount ?? 0) < room.max_players ? "player" : "spectator";

  const { data: participant, error } = await admin
    .from("room_participants")
    .insert({
      room_id: room.id,
      user_id: user?.id ?? null,
      display_name: displayName,
      role,
    })
    .select()
    .single();

  if (error || !participant) {
    return NextResponse.json({ error: error?.message ?? "failed to join room" }, { status: 500 });
  }

  return NextResponse.json({ participantId: participant.id, role }, { status: 201 });
}
