import { getPriceDropRound } from "@/lib/pricedrop-round";
import { getRandomCountry } from "@/lib/countries";

export interface RoomQuestion {
  // Safe to broadcast to every client — never contains the answer.
  questionData: Record<string, unknown>;
  correctAnswer: number;
  // Stable id (stashed inside questionData too) used to avoid repeating the
  // same item across rounds within one room game.
  excludeId: string;
}

const SUPPORTED_GAMES = new Set(["pricedrop", "popguess"]);

export function isRoomPlayableGame(gameId: string): boolean {
  return SUPPORTED_GAMES.has(gameId);
}

export async function getRoomQuestion(
  gameId: string,
  excludeIds: string[]
): Promise<RoomQuestion | null> {
  if (gameId === "pricedrop") {
    const round = await getPriceDropRound(excludeIds);
    if (!round) return null;
    return {
      questionData: {
        kind: "pricedrop",
        title: round.listing.title,
        imageUrls: round.listing.imageUrls,
        category: round.category,
        condition: round.listing.condition,
        currency: round.listing.currency,
        isEasterEgg: round.isEasterEgg,
        _excludeId: round.searchQuery,
      },
      correctAnswer: round.listing.price,
      excludeId: round.searchQuery,
    };
  }

  if (gameId === "popguess") {
    const country = getRandomCountry(excludeIds);
    return {
      questionData: {
        kind: "popguess",
        name: country.name,
        flagUrl: country.flagUrl,
        ccn3: country.ccn3,
        lat: country.lat,
        lng: country.lng,
        areaKm2: country.areaKm2,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        _excludeId: country.cca3,
      },
      correctAnswer: country.population,
      excludeId: country.cca3,
    };
  }

  return null;
}
