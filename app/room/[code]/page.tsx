import { normalizeRoomCode } from "@/lib/room-code";
import RoomClient from "@/components/multiplayer/RoomClient";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: rawCode } = await params;
  const code = normalizeRoomCode(rawCode);

  return <RoomClient code={code} />;
}
