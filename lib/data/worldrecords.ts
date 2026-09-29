// Static snapshot of world-record facts, compiled 2026-09-15, expanded 2026-09-15. Unlike
// every other dataset in this app, there is no single bulk API for 'world records' with a
// comparable numeric value and unit per record -- Guinness's own site has no public API, and
// Wikidata has no property that captures 'the record value' in a structured, cross-category way.
// Each entry here was individually researched and verified via live web search against Guinness
// World Records' own pages (or, where GWR doesn't track the category, the standard scientific
// reference for it -- e.g. NOAA/WMO for temperature extremes, oceanographic surveys for the
// Challenger Deep), not pulled from a bulk query, since a manually-curated dataset carries a much
// higher risk of a stale or misremembered figure than the Wikidata-sourced datasets elsewhere in
// this app.
//
// Only records considered stable enough not to go obviously wrong shortly after being pinned down
// were included -- e.g. Robert Wadlow's height as the tallest man ever is treated by Guinness
// itself as effectively permanent, and Michael Phelps' 23 Olympic golds has an enormous margin
// over second place. Deliberately excluded during research for being too volatile for a static
// snapshot: the fastest roller coaster (the record changed in December 2025, mid-curation),
// freediving depth (splits confusingly across several distinct equipment categories with very
// different numbers), and the largest iceberg 'ever' (undermined by a pre-satellite-era estimate
// with no reliable measurement -- used the largest *reliably, satellite-measured* iceberg instead
// and labeled it as such).
//
// Two researched records -- longest fingernails on a single hand ever (Shridhar Chillal, 909.6cm)
// and longest human hair ever recorded (Xie Qiuping, 5.627m) -- were dropped not for accuracy
// reasons but because neither Wikipedia article exposes a usable thumbnail image via the summary
// API, and this game leans on a photo per round the way every other game here does.
//
// The 2026-09-15 expansion pass added 9 more records, deliberately choosing categories that don't
// overlap with what other games here already test (skipped anything about mountain height, river
// length, or country area/population, since those are separately covered by How Tall, River
// Length, How Big and Population Guess). Also deliberately excluded from this pass, for the same
// volatility concern as the roller coaster above: the fastest recognized wind speed *inside a
// tornado* (a 2024 reprocessing of 1999 radar data, contested and separately tracked from the
// official anemometer record used here) and the highest bungee jump overall (splits across
// altitude/building/water-dive sub-categories with wildly different numbers the way freediving
// does -- the 'from a building' sub-category alone was kept, since it has one unambiguous figure).
//
// Each record keeps its own natural unit (cm, km/h, °C, kg, km², medals...) rather than being
// normalized to a common scale, since a round only ever asks the player to guess *that* record's
// value in its own displayed unit -- there's no cross-record comparison the way a normalized
// scale would suggest. calculateScore's percent-based formula handles this fine per-round
// regardless of the wildly different magnitudes and one negative value (the coldest temperature)
// involved.

export interface WorldRecordData {
  recordLabel: string;
  subject: string;
  value: number;
  unit: string;
  imageUrl: string;
}

export const WORLD_RECORDS: WorldRecordData[] = [
  {
    "recordLabel": "Tallest man ever",
    "subject": "Robert Wadlow",
    "value": 272,
    "unit": "cm",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Robert_Wadlow_postcard.jpg/330px-Robert_Wadlow_postcard.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Fastest human top speed ever recorded",
    "subject": "Usain Bolt",
    "value": 44.72,
    "unit": "km/h",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Usain_Bolt_smiling_Berlin_2009.JPG/330px-Usain_Bolt_smiling_Berlin_2009.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest pizza ever made",
    "subject": "The record-breaking pizza",
    "value": 1296.72,
    "unit": "m²",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/330px-Pizza-3007395.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Highest temperature ever recorded on Earth",
    "subject": "Death Valley, California",
    "value": 56.7,
    "unit": "°C",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Death_Valley_from_space.JPG/330px-Death_Valley_from_space.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Deepest point in the ocean",
    "subject": "Challenger Deep, Mariana Trench",
    "value": 10935,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Marianatrenchmap.png/330px-Marianatrenchmap.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest animal ever recorded",
    "subject": "Blue whale",
    "value": 33.58,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/330px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Most Olympic gold medals by an individual",
    "subject": "Michael Phelps",
    "value": 23,
    "unit": "medals",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Michael_Phelps_Rio_Olympics_2016.jpg/330px-Michael_Phelps_Rio_Olympics_2016.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest hamburger ever made",
    "subject": "A 2017 German-made burger",
    "value": 1164.2,
    "unit": "kg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/330px-RedDot_Burger.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest hailstone ever recorded (by diameter)",
    "subject": "The Vivian, South Dakota hailstone",
    "value": 20.32,
    "unit": "cm",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Granizo.jpg/330px-Granizo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Longest cake ever made",
    "subject": "A 2020 Kerala, India cake",
    "value": 5300,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/330px-Pound_layer_cake.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Longest bridge in the world",
    "subject": "Danyang–Kunshan Grand Bridge",
    "value": 164.8,
    "unit": "km",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/201603_Danyang-Kunshan_grand_bridge_%28wuxi%29_%28cropped%29.JPG/330px-201603_Danyang-Kunshan_grand_bridge_%28wuxi%29_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest hot desert in the world",
    "subject": "The Sahara",
    "value": 9200000,
    "unit": "km²",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Sahara_real_color.jpg/330px-Sahara_real_color.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Tallest building in the world",
    "subject": "Burj Khalifa",
    "value": 828,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/330px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest reliably measured iceberg",
    "subject": "Iceberg B-15",
    "value": 11000,
    "unit": "km²",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Research_on_Iceberg_B-15A_by_Josh_Landis%2C_National_Science_Foundation_%28Image_4%29_%28NSF%29.jpg/330px-Research_on_Iceberg_B-15A_by_Josh_Landis%2C_National_Science_Foundation_%28Image_4%29_%28NSF%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Lowest temperature ever recorded on Earth",
    "subject": "Vostok Station, Antarctica",
    "value": -89.2,
    "unit": "°C",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Vostok_Station_2024.png/330px-Vostok_Station_2024.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Highest waterfall in the world",
    "subject": "Angel Falls, Venezuela",
    "value": 979,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/SaltoAngel1.jpg/330px-SaltoAngel1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Longest venomous snake ever recorded",
    "subject": "A king cobra specimen",
    "value": 5.71,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg/330px-12_-_The_Mystical_King_Cobra_and_Coffee_Forests.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Longest verified human lifespan",
    "subject": "Jeanne Calment",
    "value": 122,
    "unit": "years",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/JeanneCalmentaged40.jpg/330px-JeanneCalmentaged40.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest lake in the world by area",
    "subject": "The Caspian Sea",
    "value": 371000,
    "unit": "km²",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Caspian_Sea_from_orbit.jpg/330px-Caspian_Sea_from_orbit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Highest tsunami wave ever recorded",
    "subject": "Lituya Bay, Alaska (1958)",
    "value": 524,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Lituya_Bay_overview.jpg/330px-Lituya_Bay_overview.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Fastest wind speed ever recorded",
    "subject": "Tropical Cyclone Olivia (1996)",
    "value": 408,
    "unit": "km/h",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Olivia_Apr_10_1996_1123Z.png/330px-Olivia_Apr_10_1996_1123Z.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest meteorite ever found",
    "subject": "The Hoba meteorite",
    "value": 60,
    "unit": "tonnes",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Hoba_meteorite_%2815682150765%29.jpg/330px-Hoba_meteorite_%2815682150765%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Deepest cave in the world",
    "subject": "Veryovkina Cave",
    "value": 2209,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Veryovkina_cave._Babatunda_pit.jpg/330px-Veryovkina_cave._Babatunda_pit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Largest coral reef system",
    "subject": "The Great Barrier Reef",
    "value": 2300,
    "unit": "km",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/330px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Highest bungee jump from a building",
    "subject": "Macau Tower",
    "value": 199,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Macau_Tower_CE_Centre.jpg/330px-Macau_Tower_CE_Centre.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "recordLabel": "Deepest lake in the world",
    "subject": "Lake Baikal",
    "value": 1642,
    "unit": "m",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Baikal.A2001296.0420.250m-NASA.jpg/330px-Baikal.A2001296.0420.250m-NASA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  }
];
