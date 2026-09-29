// Static snapshot of river length data from Wikidata (query.wikidata.org/sparql), fetched
// 2026-09-13, expanded 2026-09-15. Sourced by looking up curated lists of recognizable rivers by
// name and taking each one's 'length' (P2043) statement plus a Wikimedia Commons image (P18).
//
// A first attempt did a blind bulk SPARQL scan (any river with P2043 + P18 + a sitelinks
// popularity filter) instead of naming rivers explicitly, but SPARQL's LIMIT has no implicit
// ordering -- without an explicit ORDER BY (which timed out repeatedly against this endpoint for
// a property this widely used), an arbitrary few hundred matching rows came back and happened to
// contain zero of the Nile, Amazon, Yangtze, Congo, Mekong, or Danube. Named lookups avoid that
// sampling problem entirely, at the cost of only covering rivers that made it onto a curated list.
//
// Two lookup pitfalls surfaced during the original curation, both consistent with issues seen in
// this app's other datasets:
// - Exact rdfs:label matching missed rivers whose common English name is a Wikidata alias
//   rather than the canonical label (e.g. "Amazon River" resolved to nothing because the item's
//   real label is just "Amazon"; "Zambezi" alone matched an unrelated Portuguese patrol boat,
//   fixed on the expansion pass by querying "Zambezi River" instead).
// - "Fraser River" is a label shared by several unrelated rivers on Wikidata, and the one that
//   exact-match resolved to -- the real, famous Fraser River in British Columbia (Q269710) --
//   itself carries a P2043 value of 2,657 km, roughly double the ~1,375 km figure given by
//   encyclopedic sources (Britannica, The Canadian Encyclopedia) and geographically implausible
//   for a river confined to a single Canadian province. This is a genuine error on Wikidata's
//   side, not a lookup mistake, so the entry was dropped entirely rather than guess a replacement
//   figure with the same false confidence.
//
// The 2026-09-15 expansion pass added 52 more rivers (mostly mid-length rivers across Europe,
// South America, South Asia, and Africa/Oceania not covered by the original 58) using the same
// per-name lookup pattern; every new figure was spot-checked against independently-known river
// facts (the Zambezi's ~2,574 km, the River Severn's 354 km as Britain's longest river, etc.)
// before being trusted.
//
// Baked in statically like the other datasets here. To refresh, re-run the same per-name lookup
// pattern against query.wikidata.org/sparql, and re-verify any new entry that looks geographically
// implausible before trusting it.

export interface RiverData {
  name: string;
  lengthKm: number;
  imageUrl: string;
}

export const RIVERS: RiverData[] = [
  {
    "name": "Nile",
    "lengthKm": 6650,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cairo%20skyline%2C%20Panoramic%20view%2C%20Egypt.jpg"
  },
  {
    "name": "Amazon",
    "lengthKm": 6400,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Amazon%20CIAT%20(2).jpg"
  },
  {
    "name": "Yangtze",
    "lengthKm": 6300,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Qutang%20Gorge%20on%20Changjiang.jpg"
  },
  {
    "name": "Yellow River",
    "lengthKm": 5464,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yellow%20River%20-%20panoramio.jpg"
  },
  {
    "name": "Congo River",
    "lengthKm": 4700,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sunrise%20near%20Mossaka%20(Congo).JPG"
  },
  {
    "name": "Mekong River",
    "lengthKm": 4350,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chiang%20Saen%2C%20Mekong%20River%2C%20Thailand.jpg"
  },
  {
    "name": "Lena River",
    "lengthKm": 4294,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lena%202007%20%28synchroswimr%29.jpg"
  },
  {
    "name": "Niger River",
    "lengthKm": 4180,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niger%20River%20View%2C%20Djenne%20%286861797%29.jpg"
  },
  {
    "name": "Mississippi River",
    "lengthKm": 3766,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Efmo%20View%20from%20Fire%20Point.jpg"
  },
  {
    "name": "Missouri River",
    "lengthKm": 3726,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/St%20Joseph%20Missouri%20River.jpg"
  },
  {
    "name": "Volga",
    "lengthKm": 3530,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%92%D0%B8%D0%B4%20%D0%BD%D0%B0%20%D0%9A%D0%B8%D0%BD%D0%B5%D1%88%D0%B5%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BC%D0%BE%D1%81%D1%82%20%D0%B8%D0%B7%20%D1%81%D0%B5%D0%BB%D0%B0%20%D0%92%D0%BE%D0%B7%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D1%8C%D0%B5.JPG"
  },
  {
    "name": "Yukon River",
    "lengthKm": 3190,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yukon%20River%2C%20Whitehorse%20%2816209595096%29.jpg"
  },
  {
    "name": "Indus River",
    "lengthKm": 3180,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Indus%20near%20Skardu.jpg"
  },
  {
    "name": "Rio Grande",
    "lengthKm": 3051,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rio%20Grande%20White%20Rock%20Overlook%20Park%20View%202006%2009%2005.jpg"
  },
  {
    "name": "Purus River",
    "lengthKm": 2960,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RioPurus.jpg"
  },
  {
    "name": "Brahmaputra River",
    "lengthKm": 2900,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Brahmaputra%20River%20Homeward%20bound.jpg"
  },
  {
    "name": "Danube",
    "lengthKm": 2850,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Budapest%20from%20Gellert%20Hill.jpg"
  },
  {
    "name": "Amur River",
    "lengthKm": 2824,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Heilongjiang%20%28Amur%29%20shore.jpg"
  },
  {
    "name": "Japurá River",
    "lengthKm": 2820,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ecologia%20de%20reserva%20intacta%2091407-2019-05-11%20at%2010.47.50%20PM%20-%20copia.jpg"
  },
  {
    "name": "Salween River",
    "lengthKm": 2815,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%80%92%E6%B1%9F%E7%A6%8F%E8%B4%A1%E6%AE%B5%20-%20%E8%88%AA%E6%8B%8D%20-%202024-06-01%2005.jpg"
  },
  {
    "name": "São Francisco River",
    "lengthKm": 2814,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Canind%C3%A9%20de%20S%C3%A3o%20Francisco-002.jpg"
  },
  {
    "name": "Euphrates",
    "lengthKm": 2800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/F%C4%B1rat%20River%20Gaziantep.IMG%201474.jpg"
  },
  {
    "name": "Paraguay River",
    "lengthKm": 2621,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rio%20Paraguay.jpg"
  },
  {
    "name": "Zambezi River",
    "lengthKm": 2574,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%ADo%20Zambeze%2C%20Zambia-Zimbabue%2C%202018-07-27%2C%20DD%2025.jpg"
  },
  {
    "name": "Ganges",
    "lengthKm": 2525,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Ghats%20across%20the%20Ganges%2C%20Varanasi.jpg"
  },
  {
    "name": "Murray River",
    "lengthKm": 2508,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Murray%20River%20at%20Boundary%20Bend.jpg"
  },
  {
    "name": "Tocantins River",
    "lengthKm": 2450,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ponte%20Imperatriz.jpg"
  },
  {
    "name": "Ural River",
    "lengthKm": 2428,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ural%20river.jpg"
  },
  {
    "name": "Pearl River",
    "lengthKm": 2400,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pearl%20river%2C%20Guangzhou.JPG"
  },
  {
    "name": "Arkansas River",
    "lengthKm": 2364,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/AR%20Arkansas%20River.jpg"
  },
  {
    "name": "Colorado River",
    "lengthKm": 2334,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Grand%20Canyon%20Horseshoe%20Bend%20%28crop%202%29.jpg"
  },
  {
    "name": "Dnieper",
    "lengthKm": 2285,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dniepras.png"
  },
  {
    "name": "Orange River",
    "lengthKm": 2200,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%9Adol%C3%AD%20%C5%99eky%20Orange%20-%20panoramio.jpg"
  },
  {
    "name": "Irrawaddy River",
    "lengthKm": 2170,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sagaing%2C%20Myanmar.jpg"
  },
  {
    "name": "Orinoco",
    "lengthKm": 2140,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ciudad%20Bol%C3%ADvar%20historical%20zone.jpg"
  },
  {
    "name": "Columbia River",
    "lengthKm": 2000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ColumbiarivergorgeJRH.jpg"
  },
  {
    "name": "Chenab River",
    "lengthKm": 1974,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chenab%20River%20in%20Akhanoor%2C%20India.jpg"
  },
  {
    "name": "Tapajós River",
    "lengthKm": 1930,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Santarem%2C%20Tapajos.JPG"
  },
  {
    "name": "Tigris",
    "lengthKm": 1850,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tigris%202015.jpg"
  },
  {
    "name": "Uruguay River",
    "lengthKm": 1790,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rio%20Uruguai.JPG"
  },
  {
    "name": "Blue Nile",
    "lengthKm": 1783,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ET%20Bahir%20Dar%20asv2018-02%20img17%20Tis%20Issat.jpg"
  },
  {
    "name": "Limpopo River",
    "lengthKm": 1750,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Limpopo.jpg"
  },
  {
    "name": "Mackenzie River",
    "lengthKm": 1738,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mackenzie%20River%20drainage%20basin.PNG"
  },
  {
    "name": "Snake River",
    "lengthKm": 1735,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/U.S.%20Highway%2093%20bridge%20from%20within%20Snake%20River%20Canyon.jpeg"
  },
  {
    "name": "Xingu River",
    "lengthKm": 1640,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/AMAZONIA%20REAL%20ALDEIA%20SAO%20FRANCISCO%20SOUZEL%20PEDROSA%20NETO-437%20%2849594456486%29.jpg"
  },
  {
    "name": "Okavango River",
    "lengthKm": 1600,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Okavangolodge.jpg"
  },
  {
    "name": "Ohio River",
    "lengthKm": 1579,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ohio%20Falls%20Bridge%202025j.jpg"
  },
  {
    "name": "Magdalena River",
    "lengthKm": 1528,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rio%20Magdalena%2C%20Colombia%2001.jpg"
  },
  {
    "name": "Sutlej",
    "lengthKm": 1500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/A%20view%20of%20Sutlej%20river%20Himachal%20Pradesh%20India%202014.jpg"
  },
  {
    "name": "Volta River",
    "lengthKm": 1500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/VoltaRiverWithAdombeBridge183-1-.jpg"
  },
  {
    "name": "Darling River",
    "lengthKm": 1472,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Darling-near-Bourke.jpg"
  },
  {
    "name": "Godavari River",
    "lengthKm": 1465,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Godavari%20river.jpg"
  },
  {
    "name": "Madeira River",
    "lengthKm": 1450,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Araras%20na%20margem%20do%20rio%20Madeira.jpg"
  },
  {
    "name": "Krishna River",
    "lengthKm": 1400,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Krishna%20River%20Vijayawada.jpg"
  },
  {
    "name": "Yamuna",
    "lengthKm": 1376,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yamuna.jpg"
  },
  {
    "name": "Dniester",
    "lengthKm": 1352,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/19-01-18-Prednistrowien-RalfR-18.jpg"
  },
  {
    "name": "Ottawa River",
    "lengthKm": 1271,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rapides%20Joachims%20QC%202.jpg"
  },
  {
    "name": "Rhine",
    "lengthKm": 1233,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Loreleyblick%20Maria%20Ruh%202025.jpg"
  },
  {
    "name": "Gambia River",
    "lengthKm": 1130,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/River%20gambia%20Niokolokoba%20National%20Park.gif"
  },
  {
    "name": "Elbe",
    "lengthKm": 1094,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Labe%20udoli.jpg"
  },
  {
    "name": "Senegal River",
    "lengthKm": 1050,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fluss%20Senegal.jpg"
  },
  {
    "name": "Fly River",
    "lengthKm": 1050,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fly%20River.PNG"
  },
  {
    "name": "Tennessee River",
    "lengthKm": 1049,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tn%20River%20Bridge%20Natchez%20Trace.jpg"
  },
  {
    "name": "Vistula",
    "lengthKm": 1047,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Boat%20on%20the%20Vistula%20River%20in%20Krak%C3%B3w%2C%20Poland.jpg"
  },
  {
    "name": "Essequibo River",
    "lengthKm": 1014,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Essequibo%20River.jpg"
  },
  {
    "name": "Loire",
    "lengthKm": 1006,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Loire%20%C3%A0%20Br%C3%A9h%C3%A9mont2.JPG"
  },
  {
    "name": "Neman",
    "lengthKm": 937,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2025-07-02%20Nemunas%20Litovio%20ZvD%2010.jpg"
  },
  {
    "name": "Ebro",
    "lengthKm": 910,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zaragoza%20shel.JPG"
  },
  {
    "name": "Oder",
    "lengthKm": 854,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/WyspaRedzinska-GK.JPG"
  },
  {
    "name": "Rhône",
    "lengthKm": 812,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Saint-benezet%20in%20southeastern%20France.jpg"
  },
  {
    "name": "Southern Bug",
    "lengthKm": 806,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ship%20M%20I%20Pirogov%20Vinnitsa%202006%20G2.jpg"
  },
  {
    "name": "Ruvuma River",
    "lengthKm": 800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Near%20the%20Cataracts%20of%20the%20Rovuma.jpg"
  },
  {
    "name": "Guadiana",
    "lengthKm": 778,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Puente%20romano%20m%C3%A9rida.jpg"
  },
  {
    "name": "Seine",
    "lengthKm": 777,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Seine%20as%20seen%20from%20the%20Eiffel%20Tower%2C%20June%202002.jpg"
  },
  {
    "name": "Jhelum River",
    "lengthKm": 774,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jhelum%20River-Pakistan.jpg"
  },
  {
    "name": "Pripyat River",
    "lengthKm": 748,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pripyat%20near%20Mozyr.jpg"
  },
  {
    "name": "Northern Dvina",
    "lengthKm": 744,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arkhangelsk%20bridge.jpg"
  },
  {
    "name": "Ravi River",
    "lengthKm": 720,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RaviRiver-Chamba.JPG"
  },
  {
    "name": "Tapti River",
    "lengthKm": 720,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tapi%20River%20in%20Surat.jpg"
  },
  {
    "name": "Guadalquivir",
    "lengthKm": 657,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cordoba%20PuenteRomano%20mezquita.jpg"
  },
  {
    "name": "Po",
    "lengthKm": 652,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Po%20bei%20Mantova.jpg"
  },
  {
    "name": "Sacramento River",
    "lengthKm": 644,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sacramento%20river%20delta%20p1080765.jpg"
  },
  {
    "name": "Rufiji River",
    "lengthKm": 600,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SelousSandRivers.jpg"
  },
  {
    "name": "Moselle",
    "lengthKm": 544,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Schweicher%20Annaberg.jpg"
  },
  {
    "name": "Han River",
    "lengthKm": 514,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Seoul-Han.River.at.night-01.jpg"
  },
  {
    "name": "Beas River",
    "lengthKm": 470,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beasmanikant.jpg"
  },
  {
    "name": "Weser",
    "lengthKm": 451,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Weser%20Hilwartshausen.jpg"
  },
  {
    "name": "Vltava",
    "lengthKm": 430,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vltava%20river%20in%20Prague.jpg"
  },
  {
    "name": "Waikato River",
    "lengthKm": 425,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Waikato%20river%20750px.jpg"
  },
  {
    "name": "Tiber",
    "lengthKm": 405,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/StAngelo%20Bridge%20Rome.jpg"
  },
  {
    "name": "Shire River",
    "lengthKm": 402,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Shire%20%28rivi%C3%A8re%29.png"
  },
  {
    "name": "Chao Phraya River",
    "lengthKm": 372,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lunch%20at%20Rongros%2C%20Bangkok%20%28Jan%202021%29%20-%20img%2006.jpg"
  },
  {
    "name": "River Shannon",
    "lengthKm": 368,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Limerick%20-%20Shannon%20River%20cropped.jpg"
  },
  {
    "name": "Neckar",
    "lengthKm": 362,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zuckerle.jpg"
  },
  {
    "name": "Scheldt",
    "lengthKm": 355,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tournai%20JPG05.jpg"
  },
  {
    "name": "River Severn",
    "lengthKm": 354,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/River%20Severn%20at%20Atcham%2C%20Shropshire.jpg"
  },
  {
    "name": "Snowy River",
    "lengthKm": 352,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Snowy%20River%2001.jpg"
  },
  {
    "name": "Thames",
    "lengthKm": 334,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/River%20thames%20oxford.jpg"
  },
  {
    "name": "Minho River",
    "lengthKm": 315,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Roman%20bridge%2C%20Ourense%20%28Spain%29.jpg"
  },
  {
    "name": "River Trent",
    "lengthKm": 298,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RiverTrentNottingham.jpg"
  },
  {
    "name": "Jordan River",
    "lengthKm": 252,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20jordan.jpg"
  },
  {
    "name": "Arno",
    "lengthKm": 241,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/FirenzeDec092023%2001.jpg"
  },
  {
    "name": "River Great Ouse",
    "lengthKm": 240,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/DSCN1566-goba-mooring-after-brownshill-staunch%201200x900.jpg"
  },
  {
    "name": "River Wye",
    "lengthKm": 215,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tintern%20village%20and%20River%20Wye%202004-07-25.jpg"
  },
  {
    "name": "River Tay",
    "lengthKm": 193,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/St.%20Matthew%27s%20Church%20and%20Smeaton%27s%20Bridge.jpg"
  },
  {
    "name": "River Clyde",
    "lengthKm": 176,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/River%20Clyde%20in%20Glasgow%20-%20aerial%20-%202025-04-17%2001.jpg"
  },
  {
    "name": "River Spey",
    "lengthKm": 172,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/River%20spey.jpg"
  },
  {
    "name": "River Usk",
    "lengthKm": 112,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/River%20Usk%20in%20the%20Brecon%20Beacons%20National%20Park.jpg"
  },
  {
    "name": "River Boyne",
    "lengthKm": 112,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/River%20Boyne%20-%20aerial%20-%202025-12-26%2002.jpg"
  },
  {
    "name": "Amstel",
    "lengthKm": 31,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Amsterdam%20Amstel%2020041105.jpg"
  }
];
