// Static snapshot of discovery/invention year data from Wikidata (query.wikidata.org/sparql),
// fetched 2026-09-12. Sourced via SPARQL: any item with a "time of
// discovery or invention" (P575) date and a Wikimedia Commons image (P18), restricted to items with
// more than 8-15 Wikipedia sitelinks (varies by query batch) and exactly one distinct P575 value
// (drops items with conflicting dates). Spans chemical elements, inventions, technologies, sports,
// subatomic particles, diseases, physics/astronomy discoveries, moons, asteroids, constellations,
// medical conditions, chess openings, and archaeological artifacts.
//
// Known limitation: P575 (and P571 "inception", tried as a fallback) is sparse for common
// everyday consumer objects on Wikidata -- items like Velcro, the dishwasher, the stapler, or the
// safety pin either have no P575 value at all or have one with no accompanying image, so they
// could not be included despite being obvious "discovered when" candidates. A patent database
// would in principle cover this gap, but was not integrated: patent filing/grant dates frequently
// diverge from the commonly-told "invented in X" narrative for a product, and reliably matching a
// well-known object's name to the correct patent (out of many candidates) without introducing
// wrong dates is a materially harder, separately-scoped problem than the trivia curation done here.
//
// Also worth knowing: Wikidata is not error-free. Two items pulled by the query had incorrect
// P575 dates confirmed against other sources and were handled by hand: "rugby sevens" (Wikidata
// said 1833; Wikipedia's own prose says it originated in Melrose, Scotland in 1883 -- fixed) and
// "internal combustion engine" (Wikidata said 1924, which matches no real engine milestone --
// removed rather than guess a replacement date with the same false confidence). The rest of the
// dataset was spot-checked but not exhaustively fact-checked against outside sources.
//
// Three categories were filtered out entirely, not just cleaned:
// - Antiquity-era estimates (year < 1500 CE): metals known since prehistory (iron, copper, gold...)
//   have no real "discovery year" a player could reasonably guess.
// - Geographic/political entities (countries, continents, islands, lakes, rivers, territories):
//   "when was this country/island discovered" is colonial-exploration framing we don't want to
//   reproduce as trivia, and several of these also had conflicting dates (e.g. "the Americas" shows
//   both 1492 and a ~30,000 BCE settlement date on Wikidata) that would make for an unfair or
//   misleading question anyway. Archaeological artifacts/sites (Rosetta Stone, Antikythera
//   mechanism...) were deliberately kept -- "when was this specific object found" doesn't carry the
//   same framing problem.
// - Dates whose only source was an "unknown value" placeholder in Wikidata (a blank node, not an
//   actual date) rather than a real P575 literal.
//
// Baked in statically like the other datasets here. To refresh, re-run the same SPARQL queries
// against query.wikidata.org/sparql and re-apply the same filters.

export interface DiscoveryData {
  name: string;
  year: number;
  imageUrl: string;
}

export const DISCOVERIES: DiscoveryData[] = [
  {
    "name": "computer",
    "year": 1945,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Apple%20II%20Plus%2C%20Museum%20of%20the%20Moving%20Image.jpg"
  },
  {
    "name": "association football",
    "year": 1863,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Football%20in%20Bloomington%2C%20Indiana%2C%201995.jpg"
  },
  {
    "name": "Uranus",
    "year": 1781,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uranus%20Voyager2%20color%20calibrated.png"
  },
  {
    "name": "Neptune",
    "year": 1846,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Neptune%20Voyager2%20color%20calibrated.png"
  },
  {
    "name": "car",
    "year": 1884,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv%20Bild%20183-J0711-0001-003%2C%20Warnem%C3%BCnde%2C%20Stau.jpg"
  },
  {
    "name": "hydrogen",
    "year": 1766,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hydrogen%20discharge%20tube.jpg"
  },
  {
    "name": "oxygen",
    "year": 1774,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Liquid%20oxygen%20in%20a%20beaker%204.jpg"
  },
  {
    "name": "COVID-19",
    "year": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fphar-11-00937-g001.jpg"
  },
  {
    "name": "Pluto",
    "year": 1930,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pluto%20in%20True%20Color%20-%20High-Res.jpg"
  },
  {
    "name": "carbon",
    "year": 1789,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Coal%20anthracite.jpg"
  },
  {
    "name": "telephone",
    "year": 1876,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Telefon%20BW%202012-02-18%2013-44-32.JPG"
  },
  {
    "name": "basketball",
    "year": 1891,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dream%20Team%20at%20the%201992%20Summer%20Olympics.JPEG"
  },
  {
    "name": "electricity",
    "year": 1821,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lightning%20simulator%20questacon04.jpg"
  },
  {
    "name": "aluminium",
    "year": 1825,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aluminium-4.jpg"
  },
  {
    "name": "photography",
    "year": 1839,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Winterswijk%20%28NL%29%2C%20Woold%2C%20Boven%20Slinge%20--%202014%20--%203170.jpg"
  },
  {
    "name": "HIV/AIDS",
    "year": 1959,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Human%20Immunodeficency%20Virus%20-%20stylized%20rendering.jpg"
  },
  {
    "name": "helium",
    "year": 1868,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Helium%20discharge%20tube.jpg"
  },
  {
    "name": "nitrogen",
    "year": 1772,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fluessiger%20Stickstoff.jpg"
  },
  {
    "name": "bicycle",
    "year": 1885,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/00%208327%20Historisches%20Fahrrad.jpg"
  },
  {
    "name": "newspaper",
    "year": 1605,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2011%20newspapers%20Tehran%206030393078.jpg"
  },
  {
    "name": "airplane",
    "year": 1903,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Airliners%2028.07.2009%2010-01-28.JPG"
  },
  {
    "name": "sulfur",
    "year": 1777,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sulfur%20-%20El%20Desierto%20mine%2C%20San%20Pablo%20de%20Napa%2C%20Daniel%20Campos%20Province%2C%20Potos%C3%AD%2C%20Bolivia.jpg"
  },
  {
    "name": "lithium",
    "year": 1817,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Purified%20lithium%20in%20an%20ampoule%20under%20argon%2C%20dark%20background.png"
  },
  {
    "name": "radio",
    "year": 1894,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Biblis%20RFE%20RL%2001.jpg"
  },
  {
    "name": "sodium",
    "year": 1807,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Na%20%28Sodium%29.jpg"
  },
  {
    "name": "Big Bang",
    "year": 1931,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CMB%20Timeline300%20no%20WMAP.jpg"
  },
  {
    "name": "calcium",
    "year": 1808,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Calcium%201.jpg"
  },
  {
    "name": "beryllium",
    "year": 1798,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beryllium%20nuggets%202.jpg"
  },
  {
    "name": "neon",
    "year": 1898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NeTube.jpg"
  },
  {
    "name": "mobile phone",
    "year": 1973,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mobile%20phone%20PHS%20Japan%201997-2003.jpg"
  },
  {
    "name": "magnesium",
    "year": 1755,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Magnesium%20crystals.jpg"
  },
  {
    "name": "potassium",
    "year": 1807,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kalium.jpg"
  },
  {
    "name": "silicon",
    "year": 1823,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SiliconCroda.jpg"
  },
  {
    "name": "uranium",
    "year": 1789,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uranium2.jpg"
  },
  {
    "name": "fluorine",
    "year": 1810,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Liquid%20fluorine%20tighter%20crop.jpg"
  },
  {
    "name": "phosphorus",
    "year": 1669,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Phosphor.JPG"
  },
  {
    "name": "electron",
    "year": 1897,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Single%20electron%20probability%20pattern.png"
  },
  {
    "name": "chlorine",
    "year": 1774,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chlorine%20liquid%20in%20an%20ampoule.jpg"
  },
  {
    "name": "boron",
    "year": 1892,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Boron.jpg"
  },
  {
    "name": "piano",
    "year": 1700,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Steinway%20%26%20Sons%20concert%20grand%20piano%2C%20model%20D-274%2C%20manufactured%20at%20Steinway%27s%20factory%20in%20Hamburg%2C%20Germany.png"
  },
  {
    "name": "steel",
    "year": 1865,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kaltbandcoils.jpg"
  },
  {
    "name": "argon",
    "year": 1894,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ArTube.jpg"
  },
  {
    "name": "titanium",
    "year": 1791,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Titan-crystal%20bar.JPG"
  },
  {
    "name": "chromium",
    "year": 1797,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chromium%20crystals%20and%201cm3%20cube.jpg"
  },
  {
    "name": "volleyball",
    "year": 1895,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Triple%20block%20%28Serbia%20vs%20China%2C%20Grand%20Prix%202017%29.jpg"
  },
  {
    "name": "cobalt",
    "year": 1735,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kobalt%20electrolytic%20and%201cm3%20cube.jpg"
  },
  {
    "name": "iodine",
    "year": 1811,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sample%20of%20iodine.jpg"
  },
  {
    "name": "proton",
    "year": 1920,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Proton%20quark%20structure.svg"
  },
  {
    "name": "platinum",
    "year": 1557,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Platinum%20crystals.jpg"
  },
  {
    "name": "nickel",
    "year": 1751,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Electrolytic%20nickel.jpg"
  },
  {
    "name": "manganese",
    "year": 1774,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Manganese%20electrolytic%20and%201cm3%20cube.jpg"
  },
  {
    "name": "krypton",
    "year": 1898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/KrTube.jpg"
  },
  {
    "name": "vanadium",
    "year": 1801,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vanadium%201.jpg"
  },
  {
    "name": "barium",
    "year": 1808,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Barium%201.jpg"
  },
  {
    "name": "gallium",
    "year": 1875,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gallium%20crystals.jpg"
  },
  {
    "name": "World Wide Web",
    "year": 1989,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alcal%C3%A1%20de%20Henares%20%28RPS%2008-04-2017%29%20Calle%20WWW%2C%20indicador.png"
  },
  {
    "name": "radium",
    "year": 1898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Radium226.jpg"
  },
  {
    "name": "bromine",
    "year": 1825,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bromine%20vial%20in%20acrylic%20cube.jpg"
  },
  {
    "name": "tank",
    "year": 1915,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Char%20T%2034%20noBG.jpg"
  },
  {
    "name": "baseball",
    "year": 1900,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zack%20Greinke%20on%20July%2029%2C%202009.jpg"
  },
  {
    "name": "francium",
    "year": 1939,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Francium%20%28Element%20-%2087%29%201.jpg"
  },
  {
    "name": "selenium",
    "year": 1817,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Selen%201.jpg"
  },
  {
    "name": "radon",
    "year": 1899,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Radon%20water%20apparatus%20P1120815.JPG"
  },
  {
    "name": "web browser",
    "year": 1990,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wiki%20Smartphones.jpg"
  },
  {
    "name": "strontium",
    "year": 1787,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Strontium%20destilled%20crystals.jpg"
  },
  {
    "name": "cadmium",
    "year": 1817,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cadmium-crystal%20bar.jpg"
  },
  {
    "name": "scandium",
    "year": 1879,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Scandium%20sublimed%20dendritic%20and%201cm3%20cube.jpg"
  },
  {
    "name": "rubidium",
    "year": 1861,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RbMetal.JPG"
  },
  {
    "name": "caesium",
    "year": 1860,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cesium.jpg"
  },
  {
    "name": "germanium",
    "year": 1886,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Germanium%20element.jpg"
  },
  {
    "name": "xenon",
    "year": 1898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/XeTube.jpg"
  },
  {
    "name": "tungsten",
    "year": 1783,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wolfram%20evaporated%20crystals%20and%201cm3%20cube.jpg"
  },
  {
    "name": "Ebola hemorrhagic fever",
    "year": 1976,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/7042%20lores-Ebola-Zaire-CDC%20Photo.jpg"
  },
  {
    "name": "iridium",
    "year": 1803,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Iridium%20foil.jpg"
  },
  {
    "name": "niobium",
    "year": 1801,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Niobium%20crystals%20and%201cm3%20cube.jpg"
  },
  {
    "name": "judo",
    "year": 1882,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/KOCIS%20Korea%20Judo%20Kim%20Jaebum%20London%2036%20%287696361164%29.jpg"
  },
  {
    "name": "plutonium",
    "year": 1941,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Plutonium%20ring.jpg"
  },
  {
    "name": "palladium",
    "year": 1803,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Palladium%20%2846%20Pd%29.jpg"
  },
  {
    "name": "polonium",
    "year": 1898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2019-11-22%20Spark%20plugs%20and%20static%20eliminators%20with%20radioactive%20polonium%20at%20museum%20display.jpg"
  },
  {
    "name": "molybdenum",
    "year": 1778,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Molybdenum%20crystaline%20fragment%20and%201cm3%20cube.jpg"
  },
  {
    "name": "osmium",
    "year": 1804,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Osmium%20crystals.jpg"
  },
  {
    "name": "yttrium",
    "year": 1787,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yttrium%20sublimed%20dendritic%20and%201cm3%20cube.jpg"
  },
  {
    "name": "tellurium",
    "year": 1783,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tellurium%20element%202.jpg"
  },
  {
    "name": "tantalum",
    "year": 1802,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tantalum%20single%20crystal%20and%201cm3%20cube.jpg"
  },
  {
    "name": "hafnium",
    "year": 1922,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hf-crystal%20bar.jpg"
  },
  {
    "name": "astatine",
    "year": 1940,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Glow%20from%20a%20sample%20of%20astatine%20%28cropped%29.jpg"
  },
  {
    "name": "Ceres",
    "year": 1801,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ceres%20-%20RC3%20-%20Haulani%20Crater%20%2822381131691%29%20%28cropped%29.jpg"
  },
  {
    "name": "neutron",
    "year": 1932,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Neutron%20quark%20structure.svg"
  },
  {
    "name": "technetium",
    "year": 1937,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Technetium-sample.jpg"
  },
  {
    "name": "thorium",
    "year": 1828,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Thorium%20sample%200.1g.jpg"
  },
  {
    "name": "zirconium",
    "year": 1789,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zirconium%20crystal%20bar%20and%201cm3%20cube.jpg"
  },
  {
    "name": "rhodium",
    "year": 1803,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rhodium%20powder%20pressed%20melted.jpg"
  },
  {
    "name": "ruthenium",
    "year": 1844,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ruthenium%20a%20half%20bar.jpg"
  },
  {
    "name": "indium",
    "year": 1863,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Indium%20wetting%20glass.jpg"
  },
  {
    "name": "actinium",
    "year": 1899,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Actinium%20sample%20%2831481701837%29.png"
  },
  {
    "name": "neptunium",
    "year": 1940,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Neptunium2.jpg"
  },
  {
    "name": "artificial satellite",
    "year": 1957,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Luna%201%20-%202%20Spacecraft.png"
  },
  {
    "name": "refrigerator",
    "year": 1856,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LG%20refrigerator%20interior.jpg"
  },
  {
    "name": "lanthanum",
    "year": 1839,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lanthan%201-cropflipped.jpg"
  },
  {
    "name": "thallium",
    "year": 1861,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Thallium%20pieces%20in%20ampoule.jpg"
  },
  {
    "name": "rhenium",
    "year": 1925,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rhenium%20single%20crystal%20bar%20and%201cm3%20cube.jpg"
  },
  {
    "name": "europium",
    "year": 1901,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eu-Block.jpg"
  },
  {
    "name": "cerium",
    "year": 1804,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CE2k2g.jpg"
  },
  {
    "name": "rutherfordium",
    "year": 1964,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rutherfordium.svg"
  },
  {
    "name": "samarium",
    "year": 1879,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Samarium%201.jpg"
  },
  {
    "name": "lutetium",
    "year": 1906,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lutetium%20sublimed%20dendritic%20and%201cm3%20cube.jpg"
  },
  {
    "name": "transistor",
    "year": 1947,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Transistors.agr.jpg"
  },
  {
    "name": "protactinium",
    "year": 1917,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Protactinium-233.jpg"
  },
  {
    "name": "californium",
    "year": 1950,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Californium.jpg"
  },
  {
    "name": "einsteinium",
    "year": 1952,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Einsteinium.jpg"
  },
  {
    "name": "dubnium",
    "year": 1970,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dubnium.svg"
  },
  {
    "name": "neodymium",
    "year": 1885,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Neodym%201.jpg"
  },
  {
    "name": "gadolinium",
    "year": 1880,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gadolinium.jpg"
  },
  {
    "name": "promethium",
    "year": 1945,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Promethium-147%20solution.jpg"
  },
  {
    "name": "americium",
    "year": 1944,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Americium%20microscope.jpg"
  },
  {
    "name": "praseodymium",
    "year": 1841,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Praseodym%201.jpg"
  },
  {
    "name": "dysprosium",
    "year": 1886,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dysprosium1.jpg"
  },
  {
    "name": "fermium",
    "year": 1952,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fermium-Ytterbium%20Alloy.jpg"
  },
  {
    "name": "nobelium",
    "year": 1958,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nobelium.svg"
  },
  {
    "name": "terbium",
    "year": 1843,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Terbium%20element.jpg"
  },
  {
    "name": "curium",
    "year": 1944,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cm-Fluoreszenz.png"
  },
  {
    "name": "berkelium",
    "year": 1949,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Berkelium%20metal.jpg"
  },
  {
    "name": "ytterbium",
    "year": 1878,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ytterbium%20element.jpg"
  },
  {
    "name": "erbium",
    "year": 1843,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Erbium.jpg"
  },
  {
    "name": "mendelevium",
    "year": 1955,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mendelevium.svg"
  },
  {
    "name": "hard disk",
    "year": 1956,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Western%20Digital%20WD2500BB%20Hard%20Disk%20A.jpg"
  },
  {
    "name": "lawrencium",
    "year": 1961,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lawrencium.svg"
  },
  {
    "name": "holmium",
    "year": 1878,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Holmium.jpg"
  },
  {
    "name": "handball",
    "year": 1915,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Albert%20Rocas%20Selecci%C3%B3n%202013.jpg"
  },
  {
    "name": "special relativity",
    "year": 1905,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gedankenexperiment%20Zeitdilitation.svg"
  },
  {
    "name": "SARS-CoV-2",
    "year": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Coronavirus.%20SARS-CoV-2.png"
  },
  {
    "name": "electromagnetic radiation",
    "year": 1886,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/EM%20spectrumrevised.png"
  },
  {
    "name": "diode",
    "year": 1901,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Diode-closeup.jpg"
  },
  {
    "name": "moscovium",
    "year": 2003,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/U.S.%20Department%20of%20Energy%20-%20Science%20-%20529%20005%20001%20%289735158765%29.jpg"
  },
  {
    "name": "thulium",
    "year": 1879,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Thulium%20sublimed%20dendritic%20and%201cm3%20cube.jpg"
  },
  {
    "name": "photon",
    "year": 1923,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Light%20Amplification%20by%20Stimulated%20Emission%20of%20Radiation.jpg"
  },
  {
    "name": "transformer",
    "year": 1831,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Philips%20N4422%20without%20background.png"
  },
  {
    "name": "Titan",
    "year": 1655,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Titan%20in%20true%20color%20by%20Kevin%20M.%20Gill.jpg"
  },
  {
    "name": "Eris",
    "year": 2003,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eris%20and%20dysnomia.jpg"
  },
  {
    "name": "battery",
    "year": 1800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Batteries.jpg"
  },
  {
    "name": "methane",
    "year": 1777,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Methane-graphic.svg"
  },
  {
    "name": "laser",
    "year": 1960,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lasers.JPG"
  },
  {
    "name": "cacao",
    "year": 1502,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Theobroma%20cacao%20-%20K%C3%B6hler%E2%80%93s%20Medizinal-Pflanzen-136.jpg"
  },
  {
    "name": "Phobos",
    "year": 1877,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Phobos%20colour%202008.jpg"
  },
  {
    "name": "Europa",
    "year": 1610,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Europa-moon.jpg"
  },
  {
    "name": "Andromeda Galaxy",
    "year": 1964,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M31-Andromede-16-09-2023-Hamois.jpg"
  },
  {
    "name": "136472 Makemake",
    "year": 2005,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Makemake%20with%20moon.png"
  },
  {
    "name": "Io",
    "year": 1610,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Image%20of%20Io%20from%20Juno%20JunoCam%20from%20December%202023.png"
  },
  {
    "name": "HIV",
    "year": 1983,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/HIV-budding-Color.jpg"
  },
  {
    "name": "Ganymede",
    "year": 1610,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ganymede%20-%20Perijove%2034%20Composite.jpg"
  },
  {
    "name": "sewing machine",
    "year": 1790,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Starlet%20Singer%20-%204.jpg"
  },
  {
    "name": "Deimos",
    "year": 1877,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NASA-Deimos-MarsMoon-20090221.jpg"
  },
  {
    "name": "red blood cell",
    "year": 1658,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20Blood%20Cell.jpg"
  },
  {
    "name": "personal computer",
    "year": 1957,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/IBM%20PC%205150.jpg"
  },
  {
    "name": "(136108) Haumea",
    "year": 2003,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Haumea%20Hubble.png"
  },
  {
    "name": "Morse code",
    "year": 1836,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SOS.svg"
  },
  {
    "name": "incandescent light bulb",
    "year": 1879,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gluehlampe%2001%20KMJ.jpg"
  },
  {
    "name": "weighing scale",
    "year": 1770,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Balance%20%C3%A0%20tabac%201850.JPG"
  },
  {
    "name": "inductor",
    "year": 1831,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Electronic%20component%20inductors.jpg"
  },
  {
    "name": "Callisto",
    "year": 1610,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Callisto%20-%20July%208%201979%20%2838926064465%29.jpg"
  },
  {
    "name": "Persepolis",
    "year": 1621,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gate%20of%20All%20Nations%2C%20Persepolis.jpg"
  },
  {
    "name": "Pepsi",
    "year": 1893,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pepsi%20355%20ml%2C%20591%20ml%2C%20and%20710%20ml%2C%20Canada%20%28obverse%29%2C%202026-03-05.jpg"
  },
  {
    "name": "dynamite",
    "year": 1867,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Caisse%20dynamite%20nobel%20paulilles%20expo.JPG"
  },
  {
    "name": "Rosetta Stone",
    "year": 1799,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta%20Stone%20-%20front%20face%20-%20corrected%20image.jpg"
  },
  {
    "name": "electric motor",
    "year": 1834,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stator%20and%20rotor%20by%20Zureks.JPG"
  },
  {
    "name": "Triton",
    "year": 1846,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Neptune%E2%80%99s%20Moon%20Triton%20Fosters%20Rare%20Icy%20Union%20%28gemini1903a%29%20square.jpg"
  },
  {
    "name": "guillotine",
    "year": 1792,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Guillotine%20Luxembourg%2001.jpg"
  },
  {
    "name": "Borobudur Temple",
    "year": 1814,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur-Nothwest-view.jpg"
  },
  {
    "name": "chlorophyll",
    "year": 1819,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chlorophyll-a-3D-vdW.png"
  },
  {
    "name": "integrated circuit",
    "year": 1958,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NXP%20PCF8577C%20LCD%20driver%20with%20I%C2%B2C%20%28Colour%20Corrected%29.jpg"
  },
  {
    "name": "homeopathy",
    "year": 1796,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Homoepathikas.png"
  },
  {
    "name": "tardigrade",
    "year": 1773,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hypsibiusdujardini.jpg"
  },
  {
    "name": "vacuum cleaner",
    "year": 1901,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20vacuum%20cleaner.svg"
  },
  {
    "name": "Vesta",
    "year": 1807,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dawn-image-070911.jpg"
  },
  {
    "name": "Higgs boson",
    "year": 2012,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CMS%20Higgs-event.jpg"
  },
  {
    "name": "2 Pallas",
    "year": 1802,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Potw1749a%20Pallas%20crop.png"
  },
  {
    "name": "positron",
    "year": 1932,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PositronDiscovery.jpg"
  },
  {
    "name": "Charon",
    "year": 1978,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Charon%20in%20True%20Color%20-%20High-Res.jpg"
  },
  {
    "name": "barometer",
    "year": 1643,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dosen-barometer.jpg"
  },
  {
    "name": "Enceladus",
    "year": 1789,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA17202%20-%20Approaching%20Enceladus.jpg"
  },
  {
    "name": "Abu Simbel",
    "year": 1813,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gro%C3%9Fer%20Tempel%20%28Abu%20Simbel%29%2031.jpg"
  },
  {
    "name": "benzene",
    "year": 1825,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Benzene%20sample.jpg"
  },
  {
    "name": "Archaeopteryx",
    "year": 1861,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Berlin%20Archaeopteryx.jpg"
  },
  {
    "name": "Proxima Centauri",
    "year": 1915,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/New%20shot%20of%20Proxima%20Centauri%2C%20our%20nearest%20neighbour.jpg"
  },
  {
    "name": "microwave oven",
    "year": 1945,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Panasonic%20NN-SD69LS%2020220410.jpg"
  },
  {
    "name": "Antlia",
    "year": 1752,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Antlia.jpg"
  },
  {
    "name": "airship",
    "year": 1852,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zeppellin%20NT%20amk.JPG"
  },
  {
    "name": "pasteurization",
    "year": 1864,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/60s%20Pama%20pasteurizer.jpg"
  },
  {
    "name": "Terracotta Army",
    "year": 1974,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/51714-Terracota-Army.jpg"
  },
  {
    "name": "electrolysis",
    "year": 1787,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elektrolyse%20Allgemein.svg"
  },
  {
    "name": "Permian",
    "year": 1841,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mollweide%20Paleographic%20Map%20of%20Earth%2C%20275%20Ma%20%28Kungurian%20Age%29.png"
  },
  {
    "name": "Doppler effect",
    "year": 1842,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture%20of%20the%20first%20%27wall%20formula%27%20in%20the%20city%20of%20Utrecht%2001.jpg"
  },
  {
    "name": "hadron",
    "year": 1962,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hadrons.jpg"
  },
  {
    "name": "pulsar",
    "year": 1967,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cycle%20of%20pulsed%20gamma%20rays%20from%20the%20Vela%20pulsar.gif"
  },
  {
    "name": "Internet protocol suite",
    "year": 1975,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Data%20Flow%20of%20the%20Internet%20Protocol%20Suite-ar.png"
  },
  {
    "name": "Hydrus",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Hydrus.jpg"
  },
  {
    "name": "Monoceros",
    "year": 1612,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MonocerosCC.jpg"
  },
  {
    "name": "Carina",
    "year": 1763,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Carina.jpg"
  },
  {
    "name": "Coulomb's law",
    "year": 1875,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CoulombsLaw.svg"
  },
  {
    "name": "emoji",
    "year": 1999,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Emoji%20u263a.svg"
  },
  {
    "name": "Sedna",
    "year": 2003,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sedna%20PRC2004-14d.jpg"
  },
  {
    "name": "Camelopardalis",
    "year": 1612,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CamelopardalisCC.jpg"
  },
  {
    "name": "Fornax",
    "year": 1756,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Fornax.jpg"
  },
  {
    "name": "Caelum",
    "year": 1750,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Caelum.jpg"
  },
  {
    "name": "Vulpecula",
    "year": 1683,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/VulpeculaCC.jpg"
  },
  {
    "name": "lysergic acid diethylamide",
    "year": 1948,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LiquidLSD.jpg"
  },
  {
    "name": "Apus",
    "year": 1598,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Apus.jpg"
  },
  {
    "name": "Vela",
    "year": 1763,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Vela.jpg"
  },
  {
    "name": "3 Juno",
    "year": 1804,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/3%20Juno%20VLT%20%282021%29.png"
  },
  {
    "name": "steam locomotive",
    "year": 1814,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/3511%20-%20Hartswater%20240481.jpg"
  },
  {
    "name": "electrical generator",
    "year": 1873,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Siemens%20Brothers%20-%20DC%20Generator%20-%20Electricity%20Gallery%20-%20BITM%20-%20Kolkata%202015-05-09%206509.JPG"
  },
  {
    "name": "ballpoint pen",
    "year": 1888,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/03-BICcristal2008-03-26.jpg"
  },
  {
    "name": "wind turbine",
    "year": 1887,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2019%2007%2026%20Trampe%20Windkraftanlagen%20DJI%200041.jpg"
  },
  {
    "name": "Lacerta",
    "year": 1687,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LacertaCC.jpg"
  },
  {
    "name": "Lynx",
    "year": 1687,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Lynx.jpg"
  },
  {
    "name": "keto-D-fructose",
    "year": 1847,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Table%20fructose.JPG"
  },
  {
    "name": "Planck constant",
    "year": 1901,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/U%2B210E.svg"
  },
  {
    "name": "zipper",
    "year": 1893,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Coil%20plastic%20and%20metal%20zippers.jpg"
  },
  {
    "name": "mass–energy equivalence",
    "year": 1905,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Emc2.svg"
  },
  {
    "name": "microprocessor",
    "year": 1971,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ic-photo-Motorola--XPC750PRX333SE--%28PowerPC-CPU%29.png"
  },
  {
    "name": "Phoenix",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Phoenix.jpg"
  },
  {
    "name": "Chamaeleon",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Chamaeleon.jpg"
  },
  {
    "name": "Fermat's Last Theorem",
    "year": 1638,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fermat%20last%20teorem.jpg"
  },
  {
    "name": "Titania",
    "year": 1787,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Titania%20%28moon%29%20color%2C%20cropped.jpg"
  },
  {
    "name": "Oberon",
    "year": 1787,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Oberon%20in%20true%20color%20by%20Kevin%20M.%20Gill.jpg"
  },
  {
    "name": "Puppis",
    "year": 1763,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PuppisCC.jpg"
  },
  {
    "name": "lithography",
    "year": 1796,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Centenaire%20de%20la%20lithographie%20par%20Puvis%20de%20Chavannes%201895.jpg"
  },
  {
    "name": "Leo Minor",
    "year": 1687,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LeoMinorCC.jpg"
  },
  {
    "name": "Sextans",
    "year": 1687,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SextansCC.jpg"
  },
  {
    "name": "Indus",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Indus.jpg"
  },
  {
    "name": "Grus",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Grus.jpg"
  },
  {
    "name": "Tucana",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Tucana.jpg"
  },
  {
    "name": "Sculptor",
    "year": 1752,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Sculptor.jpg"
  },
  {
    "name": "Octans",
    "year": 1752,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Octans.jpg"
  },
  {
    "name": "Horologium",
    "year": 1752,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Horologium.jpg"
  },
  {
    "name": "Electromagnetic induction",
    "year": 1831,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Catalonia%20Terrassa%20mNATEC%20Dinamo.JPG"
  },
  {
    "name": "Scutum",
    "year": 1684,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ScutumCC.jpg"
  },
  {
    "name": "deuterium",
    "year": 1931,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Deuterium-glow.jpg"
  },
  {
    "name": "electron microscope",
    "year": 1931,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elektronenmikroskop.jpg"
  },
  {
    "name": "video game console",
    "year": 1972,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Four%20gaming%20consoles%20%28cropped%29.png"
  },
  {
    "name": "Triangulum Australe",
    "year": 1600,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Triangulum%20Australe.jpg"
  },
  {
    "name": "Volans",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Volans.jpg"
  },
  {
    "name": "Pavo",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Pavo.jpg"
  },
  {
    "name": "Musca",
    "year": 1756,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Musca.jpg"
  },
  {
    "name": "Pictor",
    "year": 1756,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Pictor.jpg"
  },
  {
    "name": "Microscopium",
    "year": 1751,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Microscopium.jpg"
  },
  {
    "name": "Quaternary",
    "year": 1829,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mollweide.jpg"
  },
  {
    "name": "Mimas",
    "year": 1789,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mimas%20Cassini.jpg"
  },
  {
    "name": "10 Hygiea",
    "year": 1849,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SPHERE%20image%20of%20Hygiea.jpg"
  },
  {
    "name": "Tunguska event",
    "year": 1908,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tunguska%20Ereignis-1.jpg"
  },
  {
    "name": "cosmic microwave background",
    "year": 1964,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/WMAP%202012.png"
  },
  {
    "name": "Orion Nebula",
    "year": 1610,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Orion%20Nebula%20-%20Hubble%202006%20mosaic%2018000.jpg"
  },
  {
    "name": "Mensa",
    "year": 1760,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Mensa.jpg"
  },
  {
    "name": "Circinus",
    "year": 1756,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Circinus.jpg"
  },
  {
    "name": "Telescopium",
    "year": 1751,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Telescopium.jpg"
  },
  {
    "name": "Crab Nebula",
    "year": 1731,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/25%20Images%20to%20Celebrate%20NASA%E2%80%99s%20Chandra%2025th%20Anniversary-%20Crab%20Nebula%20%2853893798390%29.jpg"
  },
  {
    "name": "gyroscope",
    "year": 1852,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gyroskop.jpg"
  },
  {
    "name": "Coriolis force",
    "year": 1835,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Low%20pressure%20system%20over%20Iceland.jpg"
  },
  {
    "name": "Rhea",
    "year": 1672,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA07763%20Rhea%20full%20globe5.jpg"
  },
  {
    "name": "Oedipus complex",
    "year": 1899,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Oedipus%20and%20the%20Sphinx%20MET%20DP-14201-023.jpg"
  },
  {
    "name": "Panama Papers",
    "year": 2015,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Countries%20implicated%20in%20the%20Panama%20Papers.svg"
  },
  {
    "name": "Pyxis",
    "year": 1752,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Pyxis.jpg"
  },
  {
    "name": "Norma",
    "year": 1751,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Norma.jpg"
  },
  {
    "name": "solar cell",
    "year": 1839,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Silicon%20solar%20cell%20%28PERC%29%20front%20and%20back.jpg"
  },
  {
    "name": "graphical user interface",
    "year": 1973,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Galaxy%20Z.jpg"
  },
  {
    "name": "Reticulum",
    "year": 1750,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constellation%20Reticulum.jpg"
  },
  {
    "name": "uncertainty principle",
    "year": 1927,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gamma-ray-microscope.svg"
  },
  {
    "name": "beach volleyball",
    "year": 1920,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/USMC-111007-M-UV915-234.jpg"
  },
  {
    "name": "Triangulum Galaxy",
    "year": 1654,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M33.jpg"
  },
  {
    "name": "Umbriel",
    "year": 1851,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Umbriel%20-%20January%2024%201986%20%2830767270234%29.jpg"
  },
  {
    "name": "phonograph",
    "year": 1877,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Edison%20and%20phonograph%20edit2.jpg"
  },
  {
    "name": "diesel engine",
    "year": 1893,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MAN%20TGX%20V8%20engine.JPG"
  },
  {
    "name": "Metis",
    "year": 1979,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Metis.jpg"
  },
  {
    "name": "Ariel",
    "year": 1851,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ariel%20in%20monochrome.jpg"
  },
  {
    "name": "Iapetus",
    "year": 1671,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Iapetus%20as%20seen%20by%20the%20Cassini%20probe%20-%2020071008.jpg"
  },
  {
    "name": "Miranda",
    "year": 1948,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Miranda%20mosaic%20in%20color%20-%20Voyager%202.png"
  },
  {
    "name": "gravitational wave",
    "year": 2015,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Maya-NR-Simulation-with-Waveform-frame788-overlay.png"
  },
  {
    "name": "revolver",
    "year": 1597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/S%26W%20M10%20%28M%26P%2C%20Victory%29.jpg"
  },
  {
    "name": "reinforced concrete",
    "year": 1853,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chantier%20de%20construction%20du%20complexe%20associatif%20multifonctions%20%C3%A0%20Antony%2007.jpg"
  },
  {
    "name": "bayonet",
    "year": 1700,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/US-Bajonette%20verschiedener%20Epochen.jpg"
  },
  {
    "name": "Amalthea",
    "year": 1892,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Amalthea%20PIA02532.png"
  },
  {
    "name": "vacuum tube",
    "year": 1904,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Philips%2012AX7WA%20tube.jpg"
  },
  {
    "name": "muon",
    "year": 1937,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hard-component-muon-868x1024.png"
  },
  {
    "name": "Adrastea",
    "year": 1979,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Adrastea.jpg"
  },
  {
    "name": "Quaoar",
    "year": 2002,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Quaoar-weywot%20hst.jpg"
  },
  {
    "name": "Brownian motion",
    "year": 1827,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Brownianmotion5particles150frame.gif"
  },
  {
    "name": "Thebe",
    "year": 1979,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Thebe.jpg"
  },
  {
    "name": "rugby union",
    "year": 1823,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dragons%20vs%20Leinster%20welsh%20try%20Celtic%20League%209%20may%202008.jpg"
  },
  {
    "name": "synapse",
    "year": 1897,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Synapse%20neuro-neuronale.png"
  },
  {
    "name": "nylon",
    "year": 1935,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nylon6%20and%20Nylon%2066.png"
  },
  {
    "name": "lightning rod",
    "year": 1752,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CN%20Tower%20struck%20by%20lightning-Edit%28Taxi%29.jpg"
  },
  {
    "name": "Venus de Milo",
    "year": 1820,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%A9nus%20de%20Milo%20-%20Mus%C3%A9e%20du%20Louvre%20AGER%20LL%20299%20%3B%20N%20527%20%3B%20Ma%20399.jpg"
  },
  {
    "name": "Cro-Magnon Man",
    "year": 1868,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cro-Magnon.jpg"
  },
  {
    "name": "433 Eros",
    "year": 1898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA02475%20Eros%27%20Bland%20Butterscotch%20Colors.jpg"
  },
  {
    "name": "Proteus",
    "year": 1989,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Proteus%20%28Voyager%202%29.jpg"
  },
  {
    "name": "second law of thermodynamics",
    "year": 1824,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Heat%20flow%20hot%20to%20cold.svg"
  },
  {
    "name": "Antikythera mechanism",
    "year": 1901,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NAMA%20Machine%20d%27Anticyth%C3%A8re%201.jpg"
  },
  {
    "name": "Nereid",
    "year": 1949,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nereid-Voyager2.jpg"
  },
  {
    "name": "prion",
    "year": 1982,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Histology%20bse.jpg"
  },
  {
    "name": "Comet Hale-Bopp",
    "year": 1995,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Comet%20Hale-Bopp%201995O1.jpg"
  },
  {
    "name": "Nix",
    "year": 2005,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nix%20best%20view-true%20color.jpg"
  },
  {
    "name": "carbonated water",
    "year": 1767,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Drinking%20glass%2000118.gif"
  },
  {
    "name": "Hyperion",
    "year": 1848,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hyperion%20true.jpg"
  },
  {
    "name": "polyethylene",
    "year": 1933,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Polyethylene-3D-vdW.png"
  },
  {
    "name": "thermonuclear weapon",
    "year": 1952,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/B53%20bomb.jpg"
  },
  {
    "name": "electronic cigarette",
    "year": 1963,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20E-papieros%20mod.jpg"
  },
  {
    "name": "graphene",
    "year": 2004,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Graphen.jpg"
  },
  {
    "name": "Dysnomia",
    "year": 2005,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hubble%20Dysnomia%20orbit%20overlay.jpg"
  },
  {
    "name": "Hydra",
    "year": 2005,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hydra%2014.07.2015.jpg"
  },
  {
    "name": "fuel cell",
    "year": 1842,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fuel%20cell%20NASA%20p48600ac.jpg"
  },
  {
    "name": "5 Astraea",
    "year": 1845,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/5-Astraea-Size.svg"
  },
  {
    "name": "7 Iris",
    "year": 1847,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Iris%20asteroid%20eso.jpg"
  },
  {
    "name": "Himalia",
    "year": 1904,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Himalia.png"
  },
  {
    "name": "chainsaw",
    "year": 1905,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chainsaw.JPG"
  },
  {
    "name": "grapheme",
    "year": 1912,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Accadian%20for%20ni.jpg"
  },
  {
    "name": "67P/Churyumov–Gerasimenko",
    "year": 1969,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/67P%20Churyumov-Gerasimenko%20-%20Rosetta%20%2832755885495%29.png"
  },
  {
    "name": "hovercraft",
    "year": 1955,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LCAC%2019970620.jpg"
  },
  {
    "name": "atomic clock",
    "year": 1955,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/17jila003%203d%20strontium%20atomic%20clock.jpg"
  },
  {
    "name": "Euler's formula",
    "year": 1748,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Euler%27s%20formula.svg"
  },
  {
    "name": "Cat's Eye Nebula",
    "year": 1786,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Catseye-big.jpg"
  },
  {
    "name": "Möbius strip",
    "year": 1858,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%B6bius%20strip.jpg"
  },
  {
    "name": "243 Ida",
    "year": 1884,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/243%20ida%20crop.jpg"
  },
  {
    "name": "rings of Saturn",
    "year": 1656,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA17172%20Saturn%20eclipse%20mosaic%20bright%20crop.jpg"
  },
  {
    "name": "Hubble–Lemaître law",
    "year": 1927,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hubble%20constant.JPG"
  },
  {
    "name": "Phoebe",
    "year": 1898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Phoebe%20cassini%20full.jpg"
  },
  {
    "name": "Galatea",
    "year": 1989,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Galatea%20moon.jpg"
  },
  {
    "name": "Orcus",
    "year": 2004,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Orcus-vanth%20hst2.jpg"
  },
  {
    "name": "Chelyabinsk meteor",
    "year": 2013,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RM1886-Meteorit-chelyabinsk.jpg"
  },
  {
    "name": "Planet Nine",
    "year": 2016,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Planet%20nine%20artistic%20plain.png"
  },
  {
    "name": "beriberi",
    "year": 1630,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/COLLECTIE%20TROPENMUSEUM%20Beri-beri%20patient%20TMnr%2010006754.jpg"
  },
  {
    "name": "Small Magellanic Cloud",
    "year": 1521,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SMC%20-%20Noirlab2030b.jpg"
  },
  {
    "name": "jigsaw puzzle",
    "year": 1760,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jigsaw%20puzzle%2001%20by%20Scouten.jpg"
  },
  {
    "name": "kaleidoscope",
    "year": 1816,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rotational%20symmetries%20in%20designs%20produced%20by%20a%20kaleidoscopeDSCN2440.jpg"
  },
  {
    "name": "electromagnet",
    "year": 1825,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/9%20v%20electromagnet.png"
  },
  {
    "name": "steam turbine",
    "year": 1884,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dampfturbine%20Laeufer01.jpg"
  },
  {
    "name": "Venus of Willendorf",
    "year": 1908,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Venus%20von%20Willendorf%2001.jpg"
  },
  {
    "name": "Leda",
    "year": 1974,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Leda%20WISE-W3.jpg"
  },
  {
    "name": "Lagoon Nebula",
    "year": 1654,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LagoonHunterWilson.jpg"
  },
  {
    "name": "Eagle Nebula",
    "year": 1745,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eagle%20Nebula%20from%20ESO.jpg"
  },
  {
    "name": "sunflower oil",
    "year": 1829,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sunflower%20oil%20and%20sunflower.jpg"
  },
  {
    "name": "Messier 81",
    "year": 1774,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M81.jpg"
  },
  {
    "name": "Sombrero Galaxy",
    "year": 1781,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M104%20ngc4594%20sombrero%20galaxy%20hi-res.jpg"
  },
  {
    "name": "Huntington's disease",
    "year": 1872,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Neuron%20with%20mHtt%20inclusion.jpg"
  },
  {
    "name": "951 Gaspra",
    "year": 1916,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Galileo%20Gaspra%20Mosaic.jpg"
  },
  {
    "name": "Pan",
    "year": 1981,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA21436.jpg"
  },
  {
    "name": "Styx",
    "year": 2012,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Styx%20%28moon%29.jpg"
  },
  {
    "name": "Pinwheel Galaxy",
    "year": 1781,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M101%20hires%20STScI-PRC2006-10a.jpg"
  },
  {
    "name": "16 Psyche",
    "year": 1852,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Psyche%20VLT.png"
  },
  {
    "name": "daguerreotype process",
    "year": 1839,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/C%C3%A1mara%20para%20obtener%20vistas%20al%20daguerrotipo%2C%20original%20del%20a%C3%B1o%201839%2C%20conservada%20en%20Barcelona%2C%20Espa%C3%B1a%2C%20Spain.jpg"
  },
  {
    "name": "8 Flora",
    "year": 1847,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/8%20Flora%20VLT%20%282021%29%2C%20deconvolved.pdf"
  },
  {
    "name": "6 Hebe",
    "year": 1847,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/6hebe.png"
  },
  {
    "name": "Elara",
    "year": 1905,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elara2-LB1-mag17.jpg"
  },
  {
    "name": "Larissa",
    "year": 1981,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Larissa.jpg"
  },
  {
    "name": "Naiad",
    "year": 1989,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Naiad.jpg"
  },
  {
    "name": "Messier 2",
    "year": 1746,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M2%20Globular%20Cluster.jpg"
  },
  {
    "name": "Black Eye Galaxy",
    "year": 1779,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Blackeyegalaxy.jpg"
  },
  {
    "name": "Messier 87",
    "year": 1781,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M87-full%20jpg.jpg"
  },
  {
    "name": "Yersinia pestis",
    "year": 1894,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yersinia%20pestis.jpg"
  },
  {
    "name": "Atlas",
    "year": 1980,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Atlas%20%28NASA%29.jpg"
  },
  {
    "name": "Pandora",
    "year": 1980,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pandora%20PIA07632.jpg"
  },
  {
    "name": "Ophelia",
    "year": 1986,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uranus-Portia-Cressida-Ophelia-NASA.gif"
  },
  {
    "name": "Despina",
    "year": 1989,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Despina.jpg"
  },
  {
    "name": "Messier 3",
    "year": 1764,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Messier3%20-%20SDSS%20DR14%20%28panorama%29.jpg"
  },
  {
    "name": "relay",
    "year": 1835,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Relay%20Scheme.png"
  },
  {
    "name": "Pasiphae",
    "year": 1908,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pasipha%C3%A9.jpg"
  },
  {
    "name": "Van Allen radiation belt",
    "year": 1958,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Van%20Allen%20radiation%20belt.svg"
  },
  {
    "name": "Prometheus",
    "year": 1980,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA12593%20Prometheus2.jpg"
  },
  {
    "name": "Thalassa",
    "year": 1989,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Neptune%20Trio.jpg"
  },
  {
    "name": "Kerberos",
    "year": 2011,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kerberos%20%28moon%29.jpg"
  },
  {
    "name": "Messier 4",
    "year": 1746,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M4HunterWilson.jpg"
  },
  {
    "name": "Trifid Nebula",
    "year": 1764,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Trifid.nebula.arp.750pix.jpg"
  },
  {
    "name": "Messier 82",
    "year": 1774,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M82%20HST%20ACS%202006-14-a-large%20web.jpg"
  },
  {
    "name": "steamboat",
    "year": 1783,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/100%20Jahre%20Dampfschiff%20%27Stadt%20Rapperswil%27%20-%20Tag%20der%20offenen%20Dampfschiff-T%C3%BCre%20am%20B%C3%BCrkliplatz%20-%20Alpenquai%202014-04-26%2017-47-28%20%28P7700%29.JPG"
  },
  {
    "name": "9 Metis",
    "year": 1848,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/9%20Metis%20VLT%20%282021%29%2C%20deconvolved.pdf"
  },
  {
    "name": "Sinope",
    "year": 1914,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sinop%C3%A9.jpg"
  },
  {
    "name": "Enigma",
    "year": 1918,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Enigma%20%28crittografia%29%20-%20Museo%20scienza%20e%20tecnologia%20Milano.jpg"
  },
  {
    "name": "intermodal container",
    "year": 1934,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Container%2001%20KMJ.jpg"
  },
  {
    "name": "Ananke",
    "year": 1951,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Anank%C3%A9.jpg"
  },
  {
    "name": "Lysithea",
    "year": 1938,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lysithea%202MASS%20JHK%20color%20composite.png"
  },
  {
    "name": "Epimetheus",
    "year": 1966,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA09813%20Epimetheus%20S.%20polar%20region.jpg"
  },
  {
    "name": "Helene",
    "year": 1980,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA12758%20Helene%20crop.jpg"
  },
  {
    "name": "Whirlpool Galaxy",
    "year": 1773,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M51%20Hubble%20Remix.jpg"
  },
  {
    "name": "galvanic cell",
    "year": 1786,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Galvanische%20Zelle%202009-02-08.svg"
  },
  {
    "name": "Centaurus A",
    "year": 1826,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ESO%20Centaurus%20A%20LABOCA.jpg"
  },
  {
    "name": "Carme",
    "year": 1938,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Carm%C3%A9.jpg"
  },
  {
    "name": "Puck",
    "year": 1985,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uranus%20moon%20Puck.png"
  },
  {
    "name": "Euporie",
    "year": 2001,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Euporie-discovery-CFHT-annotated.gif"
  },
  {
    "name": "Carpo",
    "year": 2003,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Carpo%20CFHT%202003-02-25%20annotated.gif"
  },
  {
    "name": "Messier 5",
    "year": 1702,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Messier5%20-%20SDSS%20DR14%20%28panorama%29.jpg"
  },
  {
    "name": "kilt",
    "year": 1720,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Plaid%20Kilt%20Nontraditional.jpg"
  },
  {
    "name": "standing wave",
    "year": 1831,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Standing%20wave.gif"
  },
  {
    "name": "Ring Nebula",
    "year": 1779,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ring%20Nebula.jpg"
  },
  {
    "name": "Sunflower Galaxy",
    "year": 1779,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M63s.jpg"
  },
  {
    "name": "Messier 106",
    "year": 1781,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Messier%20106%20visible%20and%20infrared%20composite.jpg"
  },
  {
    "name": "14 Irene",
    "year": 1851,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/14Irene%20%28Lightcurve%20Inversion%29.png"
  },
  {
    "name": "still camera",
    "year": 1826,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Many%20cameras.jpg"
  },
  {
    "name": "vulcanization",
    "year": 1839,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/VulcanizationMold1941.jpg"
  },
  {
    "name": "1036 Ganymed",
    "year": 1924,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/001036-asteroid%20shape%20model%20%281036%29%20Ganymed.png"
  },
  {
    "name": "mitochondrial DNA",
    "year": 1963,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mitochondrial%20DNA%20en.svg"
  },
  {
    "name": "Sagittarius A*",
    "year": 1974,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/EHT%20Sagittarius%20A%2A.jpg"
  },
  {
    "name": "Cordelia",
    "year": 1986,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uranus%20rings%20and%20two%20moons.jpg"
  },
  {
    "name": "Portia",
    "year": 1986,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uranus-Portia-Cressida-Ophelia-NASA.gif"
  },
  {
    "name": "Messier 15",
    "year": 1746,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Messier%2015%20HST.jpg"
  },
  {
    "name": "Omega Nebula",
    "year": 1745,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Omega%20Nebula.jpg"
  },
  {
    "name": "Tarantula Nebula",
    "year": 1751,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tarantula%20Nebula%20TRAPPIST.jpg"
  },
  {
    "name": "Great Red Spot",
    "year": 1831,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jupiter%20-%20Great%20Red%20Spot%20-%20PJ7-60%2061%2062%20-%20Balanced%20%2849803032983%29.png"
  },
  {
    "name": "Messier 110",
    "year": 1773,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M110%20-%20Noao-m110.jpg"
  },
  {
    "name": "Messier 78",
    "year": 1780,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Messier%2078%20reflection%20nebula%20in%20Orion.jpg"
  },
  {
    "name": "plywood",
    "year": 1797,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Plywood.jpg"
  },
  {
    "name": "Messier 74",
    "year": 1780,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M74%203.6%205.8%208.0%20microns%20spitzer.png"
  },
  {
    "name": "Owl Nebula",
    "year": 1781,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Owl%20Nebula%20M97%20Goran%20Nilsson%20%26%20The%20Liverpool%20Telescope.jpg"
  },
  {
    "name": "15 Eunomia",
    "year": 1851,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/15Eunomia%20%28Lightcurve%20Inversion%29.png"
  },
  {
    "name": "pectin",
    "year": 1825,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Methyliertes%20Pektin.png"
  },
  {
    "name": "Helix Nebula",
    "year": 1824,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NGC%207293.jpg"
  },
  {
    "name": "polyester",
    "year": 1926,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SEMexample.jpg"
  },
  {
    "name": "Chauvet Cave",
    "year": 1994,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rhinoc%C3%A9ros%20grotte%20Chauvet.jpg"
  },
  {
    "name": "aerogel",
    "year": 1931,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aerogel%20hand.jpg"
  },
  {
    "name": "Klinefelter's syndrome",
    "year": 1942,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Human%20chromosomesXXY01.png"
  },
  {
    "name": "Reiki",
    "year": 1922,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Reiki-Treatment.jpg"
  },
  {
    "name": "Sicilian Defence",
    "year": 1594,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sicilian%20Defence%201.%20e4%20c5.png"
  },
  {
    "name": "rugby sevens",
    "year": 1883,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Germany%20England%20Oktoberfest%207s%202931.jpg"
  },
  {
    "name": "quicksort",
    "year": 1961,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sorting%20quicksort%20anim.gif"
  },
  {
    "name": "gas turbine",
    "year": 1791,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Turboprop%20T-53.jpg"
  },
  {
    "name": "Ferris wheel",
    "year": 1893,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MUC%20OFest%20RiesnradTags%202012.JPG"
  },
  {
    "name": "wireless communication",
    "year": 1895,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Photophony1.jpg"
  },
  {
    "name": "Cyrus cylinder",
    "year": 1879,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cyrus%20Cylinder.jpg"
  },
  {
    "name": "penalty shoot-out",
    "year": 1969,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Penalty%20kick%20Lahm%20Cech%20Champions%20League%20Final%202012.jpg"
  },
  {
    "name": "Mira",
    "year": 1596,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Wide-field%20view%20of%20the%20sky%20around%20a%20field%20studied%20in%20the%20MASSIV%20survey%20%28eso1212d%29%28cropped%29.jpg"
  },
  {
    "name": "rings of Jupiter",
    "year": 1979,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PIA01627%20Ringe.jpg"
  },
  {
    "name": "antiproton",
    "year": 1955,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Quark%20structure%20antiproton.svg"
  },
  {
    "name": "Mercator projection",
    "year": 1569,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/BR-Albers-Mercator.svg"
  },
  {
    "name": "lawn mower",
    "year": 1830,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tondeuse.png"
  },
  {
    "name": "rugby league",
    "year": 1895,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Shaun%20ainscough%20try%20for%20wigan%20vs%20barrow%20%2805-04-09%29.JPG"
  },
  {
    "name": "roller skates",
    "year": 1760,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Roller-skate.jpg"
  }
];
