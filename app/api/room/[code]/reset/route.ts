import { NextResponse } from "next/server";
import { createAdminSupabaseClient } from "@/lib/supabase-admin";
import { normalizeRoomCode } from "@/lib/room-code";
import { broadcastToRoom } from "@/lib/room-broadcast";
import type { Room, RoomParticipant } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: rawCode } = await params;
  const code = normalizeRoomCode(rawCode);
  const body = await request.json().catch(() => null);
  const participantId = String(body?.participantId ?? "");

  const admin = createAdminSupabaseClient();

  const { data: room } = await admin.from("rooms").select("*").eq("code", code).single<Room>();
  if (!room) {
    return NextResponse.json({ error: "room not found" }, { status: 404 });
  }

  const { data: participant } = await admin
    .from("room_participants")
    .select("*")
    .eq("id", participantId)
    .single<RoomParticipant>();

  if (!participant || participant.room_id !== room.id || participant.role !== "host") {
    return NextResponse.json({ error: "only the host can reset the room" }, { status: 403 });
  }

  // room_rounds cascade-deletes its round_guesses.
  await admin.from("room_rounds").delete().eq("room_id", room.id);
  await admin
    .from("room_participants")
    .update({ total_score: 0, is_ready: false })
    .eq("room_id", room.id);
  await admin
    .from("rooms")
    .update({ status: "lobby", current_round: 0, started_at: null, finished_at: null })
    .eq("id", room.id);

  await broadcastToRoom(code, "room_reset", {});

  return NextResponse.json({ ok: true });
}
