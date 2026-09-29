// Static snapshot of construction-duration data from Wikidata (query.wikidata.org/sparql),
// fetched 2026-09-13. Sourced via SPARQL: items with both an "inception" (P571, used here as
// construction start) and a "date of official opening" (P1619, used here as construction
// completion) date, plus a Wikimedia Commons image (P18).
//
// This property combination turned out to be unusually error-prone compared to the other
// datasets in this app, so the curation bar was much stricter and the resulting list is
// shorter (21 items) than most other games here. Roughly 90 candidate names were queried across
// three batches; the large majority were dropped for one of two reasons:
// - Missing start or end date entirely (very common -- P1619 in particular is sparse).
// - "date of official opening" pointing at a *different* event than original construction
//   completion -- almost always a modern reopening after a fire/renovation, or the date a
//   building was opened to the public as a museum long after it was actually built. Caught by
//   spot-checking every result against independently-known history. Confirmed bad and excluded:
//   Notre-Dame de Paris (P1619 gave 2024 -- its post-2019-fire reopening, not its ~1345 medieval
//   completion), Forbidden City (P1619 gave 1923, decades after its 1420 completion -- likely a
//   museum-access date), Palazzo Pitti (P1619 gave 1919, centuries after its 1458 start -- same
//   museum-opening pattern), Buckingham Palace (mixes the 1703 townhouse with 19th-century palace
//   remodeling into one figure), Flatiron Building and Woolworth Building and Lotte World Tower
//   (each contradicts a well-documented, much shorter real construction span -- P571 likely
//   pointing at a different milestone than groundbreaking for these). A few more (Empire State
//   Building, Golden Gate Bridge, Sydney Opera House, One World Trade Center, the Colosseum) were
//   dropped for the opposite failure: P571 and P1619 resolved to the same year or an impossible
//   negative span, i.e. the two properties were pointing at the same single event rather than
//   genuine start and end dates.
//
// The 21 items that survived were individually cross-checked against well-known construction
// history (e.g. the Leaning Tower of Pisa's famous multi-generation build interrupted by its
// tilt, the Eiffel Tower's famously fast two-year erection, the Washington Monument's Civil-War
// funding halt). Baked in statically like the other datasets here. To refresh, re-run the same
// SPARQL query pattern against query.wikidata.org/sparql and re-apply the same spot-check rigor
// -- do not trust this property combination's raw output without independently verifying dates.

export interface ConstructionData {
  name: string;
  startYear: number;
  endYear: number;
  duration: number;
  imageUrl: string;
}

export const CONSTRUCTIONS: ConstructionData[] = [
  {
    "name": "Chrysler Building",
    "startYear": 1930,
    "endYear": 1931,
    "duration": 1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chrysler%20Building%20by%20David%20Shankbone%20Retouched.jpg"
  },
  {
    "name": "Space Needle",
    "startYear": 1961,
    "endYear": 1962,
    "duration": 1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Seattle%2C%20October%206%2C%202023%20-%2060.jpg"
  },
  {
    "name": "Eiffel Tower",
    "startYear": 1887,
    "endYear": 1889,
    "duration": 2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tour%20Eiffel%20Wikimedia%20Commons.jpg"
  },
  {
    "name": "Willis Tower",
    "startYear": 1971,
    "endYear": 1973,
    "duration": 2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicago%20Sears%20Tower.jpg"
  },
  {
    "name": "Millennium Stadium",
    "startYear": 1997,
    "endYear": 1999,
    "duration": 2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Principality%20Stadium%20May%203%2C%202016.jpg"
  },
  {
    "name": "Millau Viaduct",
    "startYear": 2001,
    "endYear": 2004,
    "duration": 3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/00%200237%20Millau%20-%20D%C3%A9partement%20Aveyron.jpg"
  },
  {
    "name": "Hagia Sophia",
    "startYear": 532,
    "endYear": 537,
    "duration": 5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20Mars%202013.jpg"
  },
  {
    "name": "Burj Khalifa",
    "startYear": 2004,
    "endYear": 2010,
    "duration": 6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dubai%20skyline%202015%20%28crop%29.jpg"
  },
  {
    "name": "Petronas Towers",
    "startYear": 1993,
    "endYear": 1999,
    "duration": 6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kuala%20Lumpur%20-%20panoramio%20%2818%29.jpg"
  },
  {
    "name": "Sultan Ahmed Mosque",
    "startYear": 1609,
    "endYear": 1616,
    "duration": 7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Exterior%20of%20Sultan%20Ahmed%20I%20Mosque%20in%20Istanbul%2C%20Turkey%20002.jpg"
  },
  {
    "name": "Tower Bridge",
    "startYear": 1886,
    "endYear": 1894,
    "duration": 8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/London%20-%20London%20Tower%20Bridge%20-%20140806%20171049.jpg"
  },
  {
    "name": "Winter Palace",
    "startYear": 1754,
    "endYear": 1762,
    "duration": 8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Winter%20Palace%20Panorama%203.jpg"
  },
  {
    "name": "Berlin Cathedral",
    "startYear": 1894,
    "endYear": 1905,
    "duration": 11,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Berliner%20Dom%20von%20Humboldt-Box.jpg"
  },
  {
    "name": "Christ the Redeemer",
    "startYear": 1920,
    "endYear": 1931,
    "duration": 11,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Christ%20the%20Redeemer%20-%20Cristo%20Redentor.jpg"
  },
  {
    "name": "Uffizi Gallery",
    "startYear": 1560,
    "endYear": 1581,
    "duration": 21,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Florence%2C%20Italy%20-%20panoramio%20%28125%29.jpg"
  },
  {
    "name": "Taj Mahal",
    "startYear": 1631,
    "endYear": 1653,
    "duration": 22,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%2C%20Agra%2C%20India%20edit3.jpg"
  },
  {
    "name": "Trevi Fountain",
    "startYear": 1732,
    "endYear": 1762,
    "duration": 30,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Trevi%20Fountain%20-%20Roma.jpg"
  },
  {
    "name": "Washington Monument",
    "startYear": 1848,
    "endYear": 1886,
    "duration": 38,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Washington%20250424%20Washington%20Monument%2001.jpg"
  },
  {
    "name": "Reims Cathedral",
    "startYear": 1201,
    "endYear": 1275,
    "duration": 74,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Reims%20Cathedral%20016%208341.jpg"
  },
  {
    "name": "Leaning Tower of Pisa",
    "startYear": 1173,
    "endYear": 1373,
    "duration": 200,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Campanile%20D%C3%B4me%20-%20Pise%20%28IT52%29%20-%202022-08-31%20-%2020.jpg"
  },
  {
    "name": "Cologne Cathedral",
    "startYear": 1248,
    "endYear": 1880,
    "duration": 632,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/K%C3%B6lner%20Dom%20von%20Osten.jpg"
  }
];
