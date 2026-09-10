const WORD_LIST = [
  "TIGER", "SHARK", "EAGLE", "COBRA", "VIPER", "GHOST", "STORM",
  "BLAZE", "FROST", "NEON", "PIXEL", "TURBO", "SONIC", "LASER",
  "HYPER", "ULTRA", "MEGA", "SUPER", "ALPHA", "DELTA", "OMEGA",
  "PRIME", "APEX", "NOVA", "COMET", "LUNAR", "SOLAR", "CYBER",
  "STEALTH", "PHANTOM", "RAVEN", "FALCON", "DRAGON", "KRAKEN",
  "TITAN", "GOLEM", "SPHINX", "HYDRA", "PHOENIX", "CHIMERA",
  "BANDIT", "OUTLAW", "MAVERICK", "REBEL", "RANGER", "HUNTER",
  "CHROME", "SHADOW", "SILVER", "GOLDEN", "CRIMSON", "INDIGO",
  "TUNDRA", "CANYON", "AVALANCHE", "TSUNAMI", "INFERNO", "BLIZZARD",
];

// WORD-NUMBER, e.g. TIGER-4821 — memorable enough to read out on a stream
// or call out in a Discord voice channel.
export function generateRoomCode(): string {
  const word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  const number = Math.floor(1000 + Math.random() * 9000);
  return `${word}-${number}`;
}

const ROOM_CODE_PATTERN = /^[A-Z]{3,10}-\d{4}$/;

export function isValidRoomCode(code: string): boolean {
  return ROOM_CODE_PATTERN.test(code.trim().toUpperCase());
}

export function normalizeRoomCode(code: string): string {
  return code.trim().toUpperCase();
}
