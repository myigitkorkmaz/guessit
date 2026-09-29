import { WORLD_RECORDS, type WorldRecordData } from "@/lib/data/worldrecords";
import { pickRandom, pickRandomBatch } from "@/lib/random-pool";

export type { WorldRecordData };

export function getRandomWorldRecord(exclude: string[] = []): WorldRecordData {
  return pickRandom(WORLD_RECORDS, (r) => r.recordLabel, exclude);
}

export function getRandomWorldRecords(count: number, exclude: string[] = []): WorldRecordData[] {
  return pickRandomBatch(WORLD_RECORDS, count, (r) => r.recordLabel, exclude);
}
