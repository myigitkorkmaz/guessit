import { createAdminSupabaseClient } from "@/lib/supabase-admin";

export function roomChannelName(code: string): string {
  return `room:${code}`;
}

// Server-side broadcast (API routes are stateless HTTP — there's no
// persistent websocket to piggyback on). supabase-js sends broadcasts over
// Realtime's REST endpoint when the channel isn't already joined, so this
// works from a one-shot request without holding a socket open.
export async function broadcastToRoom(
  code: string,
  event: string,
  payload: Record<string, unknown>
): Promise<void> {
  const admin = createAdminSupabaseClient();
  const channel = admin.channel(roomChannelName(code));
  await channel.httpSend(event, payload);
  await admin.removeChannel(channel);
}
