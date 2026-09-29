// Shared picker used by every "static dataset" game (countries, movies, TV shows,
// stadiums, discoveries) to pick one or several random items without repeats.

export function pickRandom<T>(
  pool: T[],
  keyOf: (item: T) => string | number,
  exclude: (string | number)[] = []
): T {
  const excludeSet = new Set(exclude);
  const available = pool.filter((item) => !excludeSet.has(keyOf(item)));
  const usable = available.length > 0 ? available : pool;
  return usable[Math.floor(Math.random() * usable.length)];
}

// Picks `count` distinct items (no duplicates within the batch) — used to fetch every
// round's data up front instead of one round at a time, so gameplay never pauses on a
// network request between rounds.
export function pickRandomBatch<T>(
  pool: T[],
  count: number,
  keyOf: (item: T) => string | number,
  exclude: (string | number)[] = []
): T[] {
  const excludeSet = new Set(exclude);
  const available = pool.filter((item) => !excludeSet.has(keyOf(item)));
  const usable = available.length >= count ? available : pool;
  const shuffled = [...usable].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
