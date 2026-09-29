// Static snapshot of average monthly rent for a 1-bedroom apartment in the city centre, per
// city, fetched 2026-09-18 from Numbeo (numbeo.com/cost-of-living), the same single source used
// consistently for every city here. This dataset originated as "Rent Check" -- the app's
// original one-line pitch was "see a house or apartment photo, guess the rent" for one specific
// listing, which needs a live listings API (Zillow) this app does not have access to. Reframed
// the same way Wine Vault and Lawsuit Lottery were: instead of one specific unverifiable
// listing, show a recognizable subject (the city) paired with a real, sourced figure (its
// published average rent).
//
// Rent is a much less stable figure to snapshot than the other games' data: cost-of-living
// aggregators frequently disagree by 30-40% on the *same* city's average -- a live check across
// several rent-tracking sites for San Francisco alone turned up figures from $2,974 to $4,250
// for nominally the same "average 1-bedroom rent" number, depending on methodology and which
// buildings/listings each site samples. Rather than pick whichever figure looked most
// plausible, every city here uses the same single source (Numbeo, queried with
// '?displayCurrency=USD' for a consistent unit across cities with wildly different local
// currencies) so that any two entries are at least *comparable* to each other, even though the
// absolute number for any one city could look different from a different aggregator's figure.
// This is a real limitation, more pronounced here than for this app's other price-guessing
// games, and rents drift with local market conditions faster than, say, a landmark's
// construction date -- treat this as a snapshot of Numbeo's September 2026 numbers, not a
// permanent fact.
//
// Two cities researched but not included: Cairo and Tel Aviv both failed to resolve on Numbeo
// under the URL slugs tried ("Cannot find city id" errors); Lagos separately lacked a usable
// Wikipedia thumbnail after a retry. None were pursued further given a good, diverse 28-city set
// was already in hand spanning $367 (Jakarta) to $4,438 (New York City).
//
// Baked in statically like the other datasets here. To refresh, re-fetch each city's Numbeo
// page with the same USD currency parameter -- do not mix in a different aggregator's figures.

export interface RentCheckData {
  city: string;
  rent: number;
  imageUrl: string;
}

export const RENT_CHECKS: RentCheckData[] = [
  {
    "city": "Jakarta",
    "rent": 367,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Water_fountain_at_Bundaran_Hotel_Indonesia%2C_Jakarta_at_dusk%3B_January_2009.jpg/330px-Water_fountain_at_Bundaran_Hotel_Indonesia%2C_Jakarta_at_dusk%3B_January_2009.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Hanoi",
    "rent": 404,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Hanoi_skyline_with_Ba_Vi_Mountain.jpg/330px-Hanoi_skyline_with_Ba_Vi_Mountain.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Nairobi",
    "rent": 429,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Nairobi_skyline_from_Gem_Hotel.jpg/330px-Nairobi_skyline_from_Gem_Hotel.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Manila",
    "rent": 539,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Cityscape_of_Manila%2C_2025_%2801%29.jpg/330px-Cityscape_of_Manila%2C_2025_%2801%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Kuala Lumpur",
    "rent": 605,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Bukit_Bintang_junction_in_2024_2.jpg/330px-Bukit_Bintang_junction_in_2024_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Mumbai",
    "rent": 631,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Mumbai_Bandra-Worli_Sea_Link.jpg/330px-Mumbai_Bandra-Worli_Sea_Link.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Bangkok",
    "rent": 688,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/330px-4Y1A1159_Bangkok_%2833536795515%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Buenos Aires",
    "rent": 724,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg/330px-Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Seoul",
    "rent": 856,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/%EC%A4%91%ED%99%94%EC%A0%84%EC%9D%98_%EB%82%AE.jpg/330px-%EC%A4%91%ED%99%94%EC%A0%84%EC%9D%98_%EB%82%AE.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Istanbul",
    "rent": 976,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Historical_peninsula_and_modern_skyline_of_Istanbul.jpg/330px-Historical_peninsula_and_modern_skyline_of_Istanbul.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Shanghai",
    "rent": 982,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg/330px-Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Mexico City",
    "rent": 1118,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/330px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Prague",
    "rent": 1142,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/330px-Prague_%286365119737%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Warsaw",
    "rent": 1216,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Aleja_Niepdleglosci_Warsaw_2022_aerial_%28cropped%29.jpg/330px-Aleja_Niepdleglosci_Warsaw_2022_aerial_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Tokyo",
    "rent": 1255,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/330px-Skyscrapers_of_Shinjuku_2009_January.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Berlin",
    "rent": 1525,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/330px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Paris",
    "rent": 1596,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/330px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Toronto",
    "rent": 1615,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Toronto_Skyline_from_Snake_Island%2C_September_11_2026_%2801%29.jpg/330px-Toronto_Skyline_from_Snake_Island%2C_September_11_2026_%2801%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Barcelona",
    "rent": 1676,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Evening_light_over_Barcelona.jpg/330px-Evening_light_over_Barcelona.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Hong Kong",
    "rent": 2248,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/330px-Flag_of_Hong_Kong.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Dubai",
    "rent": 2396,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/en/thumb/c/c7/Burj_Khalifa_2021.jpg/330px-Burj_Khalifa_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Los Angeles",
    "rent": 2589,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Hollywood_sign_%288485145044%29.jpg/330px-Hollywood_sign_%288485145044%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Sydney",
    "rent": 2615,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/330px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "London",
    "rent": 2877,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/330px-London_Skyline_%28125508655%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Singapore",
    "rent": 2988,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/330px-Flag_of_Singapore.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Zurich",
    "rent": 3051,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Altstadt_Z%C3%BCrich_2015.jpg/330px-Altstadt_Z%C3%BCrich_2015.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "San Francisco",
    "rent": 3816,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Zeppelin-ride-020100925-195_%285029394846%29.jpg/330px-Zeppelin-ride-020100925-195_%285029394846%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "New York City",
    "rent": 4438,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/330px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  }
];
