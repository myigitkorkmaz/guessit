import type { RoomRole } from "@/types";

export interface RoomSession {
  participantId: string;
  displayName: string;
  role: RoomRole;
}

function storageKey(code: string): string {
  return `guessit_room_${code}`;
}

export function saveRoomSession(code: string, session: RoomSession): void {
  try {
    localStorage.setItem(storageKey(code), JSON.stringify(session));
  } catch {
    // localStorage unavailable (private mode, blocked) — session just won't persist across reloads
  }
}

export function getRoomSession(code: string): RoomSession | null {
  try {
    const raw = localStorage.getItem(storageKey(code));
    return raw ? (JSON.parse(raw) as RoomSession) : null;
  } catch {
    return null;
  }
}
