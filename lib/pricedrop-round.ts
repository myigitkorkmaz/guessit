import { getRandomListing, type EbayListing } from "@/lib/ebay";
import {
  CATEGORY_LABELS,
  EASTER_EGG_CATEGORIES,
  FULL_SEARCH_POOL,
  SURPRISE_CATEGORIES,
  type CategorySlug,
} from "@/lib/pricedrop-categories";

const EASTER_EGG_CHANCE = 0.1;

// wtf_hilarious/bizarre_but_real are large categories — if they stayed in the
// normal pool they'd get pulled organically far more than 10% of the time.
// Excluding them here means the only way into them (outside "Surprise Me")
// is the explicit 10% roll below, so the true rate is exactly 10%.
const NORMAL_POOL = FULL_SEARCH_POOL.filter(
  (p) => !(EASTER_EGG_CATEGORIES as CategorySlug[]).includes(p.categorySlug)
);

function pickPool(surprise: boolean): typeof FULL_SEARCH_POOL {
  if (surprise) {
    return FULL_SEARCH_POOL.filter((p) => SURPRISE_CATEGORIES.includes(p.categorySlug));
  }
  if (Math.random() < EASTER_EGG_CHANCE) {
    return FULL_SEARCH_POOL.filter((p) => EASTER_EGG_CATEGORIES.includes(p.categorySlug));
  }
  return NORMAL_POOL;
}

export interface PriceDropRound {
  listing: EbayListing;
  category: string;
  searchQuery: string;
  isEasterEgg: boolean;
}

export async function getPriceDropRound(
  exclude: string[] = [],
  surprise = false
): Promise<PriceDropRound | null> {
  const excluded = new Set(exclude);
  const basePool = pickPool(surprise);
  const available = basePool.filter((p) => !excluded.has(p.query));
  const pool = available.length > 0 ? available : basePool;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  for (const pick of shuffled) {
    const listing = await getRandomListing(pick.query);
    if (listing) {
      return {
        listing,
        category: CATEGORY_LABELS[pick.categorySlug],
        searchQuery: pick.query,
        isEasterEgg: (EASTER_EGG_CATEGORIES as CategorySlug[]).includes(pick.categorySlug),
      };
    }
  }
  return null;
}
