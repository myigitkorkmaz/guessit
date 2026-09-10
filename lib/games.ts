import { Game, GameCategory } from "@/types";

export const GAMES: Game[] = [
  // ==================
  // LIVE
  // ==================
  {
    id: "pricedrop",
    name: "PriceDrop",
    emoji: "💰",
    description: "Guess what this random eBay listing is selling for",
    category: "Prices",
    status: "live",
    href: "/games/pricedrop",
    dataSource: "eBay Browse API",
  },

  // ==================
  // PRICES & MONEY
  // ==================
  {
    id: "rentcheck",
    name: "Rent Check",
    emoji: "🏠",
    description: "See a house or apartment photo — guess the monthly rent or asking price",
    category: "Prices",
    status: "coming-soon",
    dataSource: "Zillow API / manual curation with photos",
  },
  {
    id: "networth",
    name: "Net Worth",
    emoji: "💎",
    description: "See a billionaire or celebrity — guess their Forbes net worth",
    category: "Prices",
    status: "coming-soon",
    dataSource: "Forbes / Wikidata",
  },
  {
    id: "lawsuitlottery",
    name: "Lawsuit Lottery",
    emoji: "⚖️",
    description: "See a famous lawsuit — guess the settlement amount in millions",
    category: "Prices",
    status: "coming-soon",
    dataSource: "Wikipedia manual curation",
  },
  {
    id: "winevault",
    name: "Wine Vault",
    emoji: "🍷",
    description: "See a wine bottle label — guess the price per bottle",
    category: "Prices",
    status: "coming-soon",
    dataSource: "Wine-Searcher API / manual curation",
  },
  {
    id: "pricepernicht",
    name: "Price Per Night",
    emoji: "🏨",
    description: "See a hotel or Airbnb interior — guess the nightly rate",
    category: "Prices",
    status: "coming-soon",
    dataSource: "Manual curation from Airbnb/Booking listings",
  },
  {
    id: "transferfee",
    name: "Transfer Fee",
    emoji: "⚽",
    description: "See a soccer player — guess their transfer fee in millions",
    category: "Prices",
    status: "coming-soon",
    dataSource: "Transfermarkt data / Wikipedia",
  },
  {
    id: "minimumwage",
    name: "Minimum Wage",
    emoji: "💵",
    description: "See a country flag — guess their minimum hourly wage in USD",
    category: "Prices",
    status: "coming-soon",
    dataSource: "ILO database / Wikipedia",
  },

  // ==================
  // SPORTS
  // ==================
  {
    id: "stadiumseats",
    name: "Stadium Seats",
    emoji: "🏟️",
    description: "See a stadium or venue — guess its total seating capacity",
    category: "Sports",
    status: "coming-soon",
    dataSource: "Wikipedia / manual curation with photos",
  },
  {
    id: "jerseydrop",
    name: "Jersey Drop",
    emoji: "🏆",
    description: "See an athlete photo with number hidden — guess their jersey number",
    category: "Sports",
    status: "coming-soon",
    dataSource: "TheSportsDB + AI inpainting to remove jersey numbers",
  },
  {
    id: "contractking",
    name: "Contract King",
    emoji: "📝",
    description: "See an athlete — guess the total value of their contract",
    category: "Sports",
    status: "coming-soon",
    dataSource: "Spotrac / Wikipedia",
  },

  // ==================
  // ENTERTAINMENT
  // ==================
  {
    id: "episodecount",
    name: "Episode Count",
    emoji: "📺",
    description: "See a TV show poster — guess the total number of episodes ever made",
    category: "Entertainment",
    status: "live",
    href: "/games/episodecount",
    dataSource: "TMDB API (static snapshot, refreshed periodically)",
  },
  {
    id: "youtubeviews",
    name: "YouTube Views",
    emoji: "▶️",
    description: "See a YouTube video thumbnail — guess its total view count",
    category: "Entertainment",
    status: "coming-soon",
    dataSource: "YouTube Data API (free tier)",
  },
  {
    id: "tweetyear",
    name: "Tweet Year",
    emoji: "🐦",
    description: "See a famous tweet — guess what year it was posted",
    category: "Entertainment",
    status: "coming-soon",
    dataSource: "Manual curation of famous historical tweets with screenshots",
  },
  {
    id: "followers",
    name: "Follow Check",
    emoji: "📱",
    description: "See a famous person's profile — guess their Instagram follower count",
    category: "Entertainment",
    status: "coming-soon",
    dataSource: "Manual curation updated monthly",
  },
  {
    id: "budgetbuster",
    name: "Budget Buster",
    emoji: "🎬",
    description: "See a movie poster — guess its total production budget",
    category: "Entertainment",
    status: "coming-soon",
    dataSource: "TMDB API (free)",
  },

  // ==================
  // HISTORY
  // ==================
  {
    id: "deathtoll",
    name: "Death Toll",
    emoji: "💀",
    description: "See a war, disaster or pandemic — guess the total death count",
    category: "History",
    status: "coming-soon",
    dataSource: "Wikipedia / Wikidata",
  },
  {
    id: "howlongtobuildit",
    name: "How Long To Build",
    emoji: "🏗️",
    description: "See a famous structure or landmark — guess how many years it took to build",
    category: "History",
    status: "coming-soon",
    dataSource: "Wikipedia",
  },
  {
    id: "discoveredwhen",
    name: "Discovered When",
    emoji: "🔍",
    description: "See an invention, element, or discovery — guess what year it was first discovered",
    category: "History",
    status: "coming-soon",
    dataSource: "Wikipedia / Wikidata",
  },
  {
    id: "howoldisit",
    name: "How Old Is It",
    emoji: "🏺",
    description: "See an ancient artifact — guess how many years old it is",
    category: "History",
    status: "coming-soon",
    dataSource: "Wikipedia / museum databases",
  },
  {
    id: "crowdcount",
    name: "Crowd Count",
    emoji: "👥",
    description: "See a famous historical event — guess how many people attended",
    category: "History",
    status: "coming-soon",
    dataSource: "Wikipedia manual curation",
  },
  {
    id: "criminals",
    name: "Do The Time",
    emoji: "🔒",
    description: "See a famous convicted criminal — guess how many years they were sentenced to",
    category: "History",
    status: "coming-soon",
    dataSource: "Wikipedia / Wikidata — famous, historical and international cases only",
  },

  // ==================
  // GEOGRAPHY
  // ==================
  {
    id: "popguess",
    name: "Population Guess",
    emoji: "🌍",
    description: "See a country's flag and an interactive map — guess its population",
    category: "Geography",
    status: "live",
    href: "/games/popguess",
    dataSource: "REST Countries API v5 (static snapshot, refreshed periodically)",
  },
  {
    id: "howbig",
    name: "How Big",
    emoji: "🌍",
    description: "See a country outline — guess its total area in square kilometers",
    category: "Geography",
    status: "coming-soon",
    dataSource: "REST Countries API (free)",
  },
  {
    id: "bordercount",
    name: "Border Count",
    emoji: "🗺️",
    description: "See a country — guess how many countries it shares a border with",
    category: "Geography",
    status: "coming-soon",
    dataSource: "REST Countries API (free)",
  },
  {
    id: "howfar",
    name: "How Far",
    emoji: "📍",
    description: "See two cities or landmarks — guess the distance between them in kilometers",
    category: "Geography",
    status: "coming-soon",
    dataSource: "OpenStreetMap / Nominatim API (free)",
  },
  {
    id: "howtall",
    name: "How Tall",
    emoji: "⛰️",
    description: "See a mountain, building or structure — guess its height in meters",
    category: "Geography",
    status: "coming-soon",
    dataSource: "Wikipedia / Wikidata",
  },

  // ==================
  // SCIENCE & NATURE
  // ==================
  {
    id: "animalspeed",
    name: "Top Speed",
    emoji: "⚡",
    description: "See an animal or vehicle — guess its top speed in km/h",
    category: "Science",
    status: "coming-soon",
    dataSource: "Wikipedia / Wikidata",
  },
  {
    id: "howHeavy",
    name: "How Heavy",
    emoji: "⚖️",
    description: "See any object, animal or vehicle — guess its weight in kg",
    category: "Science",
    status: "coming-soon",
    dataSource: "Wikipedia / Wikidata",
  },
  {
    id: "animallifespan",
    name: "Lifespan",
    emoji: "🐾",
    description: "See an animal — guess its average lifespan in years",
    category: "Science",
    status: "coming-soon",
    dataSource: "Wikipedia / Wikidata",
  },
  {
    id: "worldrecord",
    name: "World Record",
    emoji: "🏅",
    description: "See a Guinness World Record category — guess the actual record number",
    category: "Science",
    status: "coming-soon",
    dataSource: "Wikipedia / Guinness records data",
  },
  {
    id: "caloriecount",
    name: "Calorie Count",
    emoji: "🍔",
    description: "See a meal or food item — guess its total calorie count",
    category: "Science",
    status: "coming-soon",
    dataSource: "USDA FoodData Central API (free)",
  },

  // ==================
  // VEHICLES
  // ==================
  {
    id: "mileagecheck",
    name: "Mileage Check",
    emoji: "🚗",
    description: "See a used car listing — guess how many miles are on it",
    category: "Vehicles",
    status: "coming-soon",
    dataSource: "CarGurus / AutoTrader public listings",
  },

  // ==================
  // COMMUNITY
  // ==================
  {
    id: "create",
    name: "Create Your Own",
    emoji: "🛠️",
    description: "Have a number nobody knows? Turn it into a game for everyone to play",
    category: "Community",
    status: "coming-soon",
    href: "/games/create",
  },
];

/*
 * ==================
 * DATA SOURCE REFERENCE — implementation plan per game
 * ==================
 *
 * FREE APIS (no cost, build immediately):
 * - REST Countries API      → popguess (live), howbig, bordercount, minimumwage
 * - TMDB API (free key)     → budgetbuster, episodecount
 * - YouTube Data API (free) → youtubeviews
 * - USDA FoodData Central   → caloriecount
 * - OpenStreetMap/Nominatim → howfar
 * - Wikidata SPARQL         → howtall, animalspeed, howHeavy, animallifespan,
 *                              discoveredwhen, howoldisit, worldrecord, criminals
 *
 * MANUAL CURATION (build a seeded database once):
 * - lawsuitlottery, crowdcount, deathtoll, howlongtobuildit, stadiumseats,
 *   tweetyear, followers, winevault, pricepernicht, networth, rentcheck,
 *   mileagecheck, transferfee, contractking
 *
 * BUILD ORDER:
 * 1. Games hub update (this file) — all coming-soon except PriceDrop ✅
 * 2. Population Guess ✅ — REST Countries v5 (needs a free API key now; data is
 *    baked into a static snapshot at build time, not fetched live)
 * 3. How Big + Border Count (same API, bundle together)
 * 4. Budget Buster + Episode Count (TMDB API, free key)
 * 5. Calorie Count (USDA API, free)
 * 6. Animal Lifespan + Top Speed + How Heavy (Wikidata, batch them)
 * 7. Death Toll + Discovered When + How Old Is It (Wikipedia/Wikidata)
 * 8. YouTube Views (YouTube API)
 * 9. Do The Time / criminals (Wikidata + manual curation)
 * 10. Rent Check + Price Per Night (manual curation with photos)
 * 11. Net Worth (manual curation)
 * 12. Mileage Check (CarGurus/AutoTrader)
 * 13. Transfer Fee (Transfermarkt)
 * 14. Stadium Seats (Wikipedia manual curation)
 * 15. Jersey Drop (TheSportsDB + AI inpainting)
 * 16. Tweet Year (manual screenshot curation)
 * 17. Instagram Followers (manual monthly update)
 * 18. Create Your Own (user generated — last, most complex)
 */

export const CATEGORY_COLORS: Record<GameCategory, string> = {
  Prices: "#00ff88",
  Sports: "#3b82f6",
  Entertainment: "#a855f7",
  History: "#f97316",
  Geography: "#14b8a6",
  Science: "#eab308",
  Vehicles: "#ef4444",
  Community: "#ec4899",
};

export const CATEGORIES: GameCategoryList = Array.from(
  new Set(GAMES.map((g) => g.category))
) as GameCategoryList;

type GameCategoryList = Game["category"][];

export type GameCategoryFilter = "All" | Game["category"];

export function getGameById(id: string): Game | undefined {
  return GAMES.find((g) => g.id === id);
}

export function getDailyFeaturedGame(date: string = new Date().toISOString().slice(0, 10)): Game {
  const liveGames = GAMES.filter((g) => g.status === "live");
  const pool = liveGames.length > 0 ? liveGames : GAMES;

  let hash = 0;
  for (let i = 0; i < date.length; i++) {
    hash = (hash << 5) - hash + date.charCodeAt(i);
    hash |= 0;
  }
  return pool[Math.abs(hash) % pool.length];
}
