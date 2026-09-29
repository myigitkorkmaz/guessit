import { NET_WORTHS, type NetWorthData } from "@/lib/data/networth";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { NetWorthData };

export function getRandomNetWorth(exclude: string[] = []): NetWorthData {
  return pickRandom(NET_WORTHS, (n) => n.name, exclude);
}

export function getRandomNetWorths(count: number, exclude: string[] = []): NetWorthData[] {
  return pickRandomBatch(NET_WORTHS, count, (n) => n.name, exclude);
}
