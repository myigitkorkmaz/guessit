// Static snapshot of landmark/artifact construction-year data from Wikidata
// (query.wikidata.org/sparql), fetched 2026-09-12. Sourced by
// looking up a hand-picked list of ~140 well-known landmarks, monuments, and ancient sites by
// name and reading each one's "inception" (P571) date + a Wikimedia Commons image (P18) --
// a hand-curated name list rather than a broad class query, since a broad scan over
// architectural-structure or artifact classes on Wikidata was too expensive to run without
// timing out, and a hand-picked list of famous names has a much higher hit rate anyway.
//
// `year` can be negative (BCE). The game computes age from it at request time (currentYear -
// year) rather than baking in a static age, so it stays correct as real years pass.
//
// Three corrections applied by hand after spot-checking against Wikipedia: Chartres Cathedral's
// Wikidata P571 value (1830) does not match its well-documented construction ("mostly constructed
// between 1194 and 1220") -- fixed to 1194. Kinkaku-ji's P571 value (1976) matches neither its
// original 1397 construction nor its 1955 post-fire rebuild -- removed rather than guess a
// replacement. Angkor Wat's P571 value (802) turned out to be the founding year of the Khmer
// Empire, not the temple's own construction (Wikipedia: "constructed between 1113" under
// Suryavarman II) -- fixed to 1113; caught only because the redaction test below happened to
// print the real extract next to the stored value and they didn't match, which is a good argument
// for not fully trusting a bulk-fetched date just because it round-tripped through a plausible-
// looking spot check earlier. The Kaaba was deliberately excluded even though its Wikidata date
// (680 CE, a post-fire reconstruction) is not clearly wrong: presenting a specific "invented in
// year X" answer for it sits awkwardly next to its religious significance (traditionally
// attributed to Ibrahim/Abraham), unlike the purely secular/administrative construction dates
// elsewhere in this dataset -- excluded rather than adjudicate a matter of religious tradition as
// trivia. Given three confirmed errors were found via spot-checking rather than systematic
// verification, treat any single date here as "probably right" rather than "certainly right."
//
// Baked in statically like the other datasets here. To refresh, re-run the same per-name lookups
// against query.wikidata.org/sparql (see the name list history for this file) and re-apply the
// same fixes.

export interface LandmarkData {
  name: string;
  year: number;
  imageUrl: string;
}

export const LANDMARKS: LandmarkData[] = [
  {
    "name": "Rosetta Stone",
    "year": -195,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta%20Stone%20-%20front%20face%20-%20corrected%20image.jpg"
  },
  {
    "name": "Terracotta Army",
    "year": -247,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/51714-Terracota-Army.jpg"
  },
  {
    "name": "Venus de Milo",
    "year": -140,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%A9nus%20de%20Milo%20-%20Mus%C3%A9e%20du%20Louvre%20AGER%20LL%20299%20%3B%20N%20527%20%3B%20Ma%20399.jpg"
  },
  {
    "name": "Stonehenge",
    "year": -3000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stonehenge%20Total.jpg"
  },
  {
    "name": "Parthenon",
    "year": -500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Parthenon%20in%20Athens.jpg"
  },
  {
    "name": "Colosseum",
    "year": 82,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo%202020.jpg"
  },
  {
    "name": "Great Wall of China",
    "year": -700,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Wall%20of%20China%20at%20Jinshanling-edit.jpg"
  },
  {
    "name": "Machu Picchu",
    "year": 1450,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Machu%20Picchu%2C%202023%20%28012%29.jpg"
  },
  {
    "name": "Petra",
    "year": -799,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Treasury%2C%20Petra%2C%20Jordan5.jpg"
  },
  {
    "name": "Angkor Wat",
    "year": 1113,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Angkor%20wat%20temple.jpg"
  },
  {
    "name": "Chichen Itza",
    "year": 455,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chichen%20Itza%203.jpg"
  },
  {
    "name": "Nazca Lines",
    "year": -199,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/L%C3%ADneas%20de%20Nazca%2C%20Nazca%2C%20Per%C3%BA%2C%202015-07-29%2C%20DD%2044.JPG"
  },
  {
    "name": "Mona Lisa",
    "year": 1503,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mona%20Lisa%2C%20by%20Leonardo%20da%20Vinci%2C%20from%20C2RMF%20natural%20color.jpg"
  },
  {
    "name": "Statue of Liberty",
    "year": 1886,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Statue%20of%20Liberty%20and%20a%20sightseeing%20boat%2C%20Liberty%20Island%2C%20New%20York.jpg"
  },
  {
    "name": "Eiffel Tower",
    "year": 1887,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tour%20Eiffel%20Wikimedia%20Commons.jpg"
  },
  {
    "name": "Great Pyramid of Giza",
    "year": -2559,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kheops-Pyramid.jpg"
  },
  {
    "name": "Elgin Marbles",
    "year": -440,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elgin%20Marbles%20British%20Museum.jpg"
  },
  {
    "name": "Ishtar Gate",
    "year": -574,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ishtar%20Gate%20at%20Berlin%20Museum.jpg"
  },
  {
    "name": "Leaning Tower of Pisa",
    "year": 1173,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Campanile%20D%C3%B4me%20-%20Pise%20%28IT52%29%20-%202022-08-31%20-%2020.jpg"
  },
  {
    "name": "Notre-Dame de Paris",
    "year": 1163,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Notre-Dame%20de%20Paris%202013-07-24.jpg"
  },
  {
    "name": "Big Ben",
    "year": 1843,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elizabeth%20Tower%20and%20the%20north%20front%20of%20the%20Palace%20of%20Westminster%2C%20London.jpg"
  },
  {
    "name": "Tower of London",
    "year": 1066,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tower%20of%20London%20viewed%20from%20the%20River%20Thames.jpg"
  },
  {
    "name": "Taj Mahal",
    "year": 1631,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%2C%20Agra%2C%20India%20edit3.jpg"
  },
  {
    "name": "Forbidden City",
    "year": 1420,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hall%20of%20Supreme%20Harmony%20%2820241127120000%29.jpg"
  },
  {
    "name": "Alhambra",
    "year": 1239,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra%20detail.jpg"
  },
  {
    "name": "Hagia Sophia",
    "year": 532,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia%20Sophia%20Mars%202013.jpg"
  },
  {
    "name": "Blue Mosque",
    "year": 1481,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Mosque%20%28general%20view%29%2C%20Mazar-i%20Sharif%2C%20Afghanistan.jpg"
  },
  {
    "name": "St. Basil's Cathedral",
    "year": 1555,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/00%200568%20Saint%20Basil%27s%20Cathedral%20-%20Moscow.jpg"
  },
  {
    "name": "Neuschwanstein Castle",
    "year": 1869,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Schloss%20Neuschwanstein%202013.jpg"
  },
  {
    "name": "Edinburgh Castle",
    "year": 1200,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Edinburgh%20Castle%20from%20the%20Grassmarket.jpg"
  },
  {
    "name": "Windsor Castle",
    "year": 1070,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Windsor%20Castle%20at%20Sunset%20-%20Nov%202006.jpg"
  },
  {
    "name": "Buckingham Palace",
    "year": 1703,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Buckingham%20Palace%2C%20London%20-%20April%202009.jpg"
  },
  {
    "name": "White House",
    "year": 1800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/WhiteHouseSouthFacade.JPG"
  },
  {
    "name": "Sydney Opera House",
    "year": 1973,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sydney%20Opera%20House%20Sails.jpg"
  },
  {
    "name": "Christ the Redeemer",
    "year": 1920,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Christ%20the%20Redeemer%20-%20Cristo%20Redentor.jpg"
  },
  {
    "name": "Golden Gate Bridge",
    "year": 1937,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/GoldenGateBridge-001.jpg"
  },
  {
    "name": "Tower Bridge",
    "year": 1886,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/London%20-%20London%20Tower%20Bridge%20-%20140806%20171049.jpg"
  },
  {
    "name": "Berlin Wall",
    "year": 1961,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Berlin%20Wall%20Potsdamer%20Platz%20November%201975%20looking%20east%20crop.jpg"
  },
  {
    "name": "Brandenburg Gate",
    "year": 1791,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Brandenburger%20Tor%20morgens.jpg"
  },
  {
    "name": "Arc de Triomphe",
    "year": 1836,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arc%20de%20Triomphe%20-%20Ao%C3%BBt%202026.jpg"
  },
  {
    "name": "Trevi Fountain",
    "year": 1732,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Trevi%20Fountain%20-%20Roma.jpg"
  },
  {
    "name": "Acropolis of Athens",
    "year": -500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Attica%2006-13%20Athens%2050%20View%20from%20Philopappos%20-%20Acropolis%20Hill.jpg"
  },
  {
    "name": "Pompeii",
    "year": -600,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pompeii%20%284873744179%29.jpg"
  },
  {
    "name": "Knossos",
    "year": -6999,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Knossos%20-%20North%20Portico%2002.jpg"
  },
  {
    "name": "Ephesus",
    "year": -1000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ephesus%20Celsus%20Library%20Fa%C3%A7ade.jpg"
  },
  {
    "name": "Persepolis",
    "year": -510,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gate%20of%20All%20Nations%2C%20Persepolis.jpg"
  },
  {
    "name": "Babylon",
    "year": -2200,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/DSC%200658-Recovered.jpg"
  },
  {
    "name": "Lighthouse of Alexandria",
    "year": -278,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lighthouse%20-%20Thiersch.png"
  },
  {
    "name": "Library of Alexandria",
    "year": -300,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ancientlibraryalex.jpg"
  },
  {
    "name": "Hanging Gardens of Babylon",
    "year": -600,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Babylon%3B%20the%20city%20%28above%29%3B%20the%20hanging%20gardens%20of%20Babylon%20Wellcome%20L0047679.jpg"
  },
  {
    "name": "Colossus of Rhodes",
    "year": -283,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Colosse%20de%20Rhodes%20%28Barclay%29.jpg"
  },
  {
    "name": "Mausoleum at Halicarnassus",
    "year": -350,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20ruins%20of%20the%20Mausoleum%20at%20Halicarnassus.jpg"
  },
  {
    "name": "Bagan",
    "year": 200,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bagan%2C%20Myanmar%2C%20Htilominlo%20Temple%20and%20other%20Buddhist%20stupas%20in%20Bagan%20plain.jpg"
  },
  {
    "name": "Potala Palace",
    "year": 637,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Potala.jpg"
  },
  {
    "name": "Chan Chan",
    "year": 850,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chan%20Chan%2C%202023%20%2832%29.jpg"
  },
  {
    "name": "Skara Brae",
    "year": -3179,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Orkney%20Skara%20Brae.jpg"
  },
  {
    "name": "Ajanta Caves",
    "year": -200,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta%20%2863%29.jpg"
  },
  {
    "name": "Meenakshi Temple",
    "year": 1200,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Meenakshi%20Temple%2C%20Gopuram%2C%20Madurai%2C%20India.jpg"
  },
  {
    "name": "Wat Arun",
    "year": 1656,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wat%20Arun%20from%20Chao%20Phraya%20River.jpg"
  },
  {
    "name": "Great Mosque of Samarra",
    "year": 848,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Samara%20spiralovity%20minaret%20rijen1973.jpg"
  },
  {
    "name": "Dome of the Rock",
    "year": 691,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D8%AE%D8%B1%D9%8A%D9%81..%D9%82%D8%A8%D8%A9%20%D8%A7%D9%84%D8%B5%D8%AE%D8%B1%D8%A9.jpg"
  },
  {
    "name": "Church of the Holy Sepulchre",
    "year": 335,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Church%20of%20the%20Holy%20Sepulchre-Jerusalem.JPG"
  },
  {
    "name": "Western Wall",
    "year": -18,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/16-03-30-Klagemauer%20Jerusalem%20RalfR-DSCF7673.jpg"
  },
  {
    "name": "St. Peter's Basilica",
    "year": 1506,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Basilica%20di%20San%20Pietro%20in%20Vaticano%20September%202015-1a.jpg"
  },
  {
    "name": "Milan Cathedral",
    "year": 1386,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/20110724%20Milan%20Cathedral%205260.jpg"
  },
  {
    "name": "Cologne Cathedral",
    "year": 1248,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/K%C3%B6lner%20Dom%20von%20Osten.jpg"
  },
  {
    "name": "Chartres Cathedral",
    "year": 1194,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jean-Baptiste-Camille%20Corot%20-%20The%20Cathedral%20of%20Chartres%20-%20WGA5282.jpg"
  },
  {
    "name": "Canterbury Cathedral",
    "year": 597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Canterbury%20Cathedral%20-%20Portal%20Nave%20Cross-spire.jpeg"
  },
  {
    "name": "Westminster Abbey",
    "year": 901,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Westminster-Abbey.JPG"
  },
  {
    "name": "Kremlin",
    "year": 1420,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Moscow%2005-2012%20Kremlin%2022.jpg"
  },
  {
    "name": "Winter Palace",
    "year": 1754,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Winter%20Palace%20Panorama%203.jpg"
  },
  {
    "name": "Catherine Palace",
    "year": 1797,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Moscow%20Lefortovo%20Catherine%20Palace%20asv2018-08%20img2.jpg"
  },
  {
    "name": "Himeji Castle",
    "year": 1346,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Himeji%20castle%20in%20may%202015.jpg"
  },
  {
    "name": "Osaka Castle",
    "year": 1583,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Osaka%20Castle%2002bs3200.jpg"
  },
  {
    "name": "Empire State Building",
    "year": 1931,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Empire%20State%20Building%20%28aerial%20view%29.jpg"
  },
  {
    "name": "Chrysler Building",
    "year": 1930,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chrysler%20Building%20by%20David%20Shankbone%20Retouched.jpg"
  },
  {
    "name": "Flatiron Building",
    "year": 1902,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio%20Fuller%20%28Flatiron%29%20en%202010%20desde%20el%20Empire%20State%20crop%20boxin.jpg"
  },
  {
    "name": "CN Tower",
    "year": 1976,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CN%20Tower%20from%20Puente%20de%20Luz%2C%20Toronto%2C%20Ontario%2C%202025-08-25%2001.jpg"
  },
  {
    "name": "Space Needle",
    "year": 1961,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Seattle%2C%20October%206%2C%202023%20-%2060.jpg"
  },
  {
    "name": "Burj Khalifa",
    "year": 2004,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dubai%20skyline%202015%20%28crop%29.jpg"
  },
  {
    "name": "Petronas Towers",
    "year": 1993,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kuala%20Lumpur%20-%20panoramio%20%2818%29.jpg"
  },
  {
    "name": "Willis Tower",
    "year": 1971,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chicago%20Sears%20Tower.jpg"
  },
  {
    "name": "One World Trade Center",
    "year": 2014,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/One%20World%20Trade%20Center%2C%20New%20York%20%2833224081040%29.jpg"
  },
  {
    "name": "Transamerica Pyramid",
    "year": 1969,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SF%20Transamerica%20full%20CA.jpg"
  }
];
