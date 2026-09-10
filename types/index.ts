export type GameStatus = "live" | "coming-soon";

export type GameCategory =
  | "Prices"
  | "Sports"
  | "Entertainment"
  | "History"
  | "Geography"
  | "Science"
  | "Vehicles"
  | "Community";

export interface Game {
  id: string;
  name: string;
  emoji: string;
  description: string;
  category: GameCategory;
  status: GameStatus;
  href?: string;
  dataSource?: string;
}

export interface GlobalScoreRow {
  id: string;
  user_id: string | null;
  game_id: string;
  score: number;
  played_at: string;
}

export interface LeaderboardEntry {
  rank: number;
  user_id: string;
  username: string;
  total_score: number;
  games_played: number;
  best_score: number;
  best_game: string | null;
}

export type RoomStatus = "lobby" | "playing" | "reveal" | "finished";
export type RoomRole = "host" | "player" | "spectator";

export interface Room {
  id: string;
  code: string;
  host_user_id: string | null;
  game_id: string;
  status: RoomStatus;
  current_round: number;
  total_rounds: number;
  round_duration_seconds: number;
  max_players: number;
  created_at: string;
  started_at: string | null;
  finished_at: string | null;
}

export interface RoomParticipant {
  id: string;
  room_id: string;
  user_id: string | null;
  display_name: string;
  role: RoomRole;
  total_score: number;
  joined_at: string;
  is_ready: boolean;
}
