// Static snapshot of maximum recorded animal lifespans from Wikidata (query.wikidata.org/sparql),
// fetched 2026-09-24. Sourced via SPARQL: items with a "maximum age" (P4214) statement in years,
// an image (P18), and an English Wikipedia article. Nearly all P4214 values on Wikidata are imported
// from the AnAge database (genomics.senescence.info), which records the longest reliably documented
// lifespan for a species (often in captivity), not its typical/average life expectancy.
// Filters applied:
// - Animals only: the taxon's parent-taxon (P171) chain must reach Animalia (Q729), and its rank
//   must be species or subspecies. This drops trees (oaks, sequoias, bristlecone pines with
//   1000+ year values) and higher clades like "Pinniped". Dog/Cattle/Sheep are kept explicitly
//   since Wikidata models domesticated animals without a taxon rank or parent taxon.
// - More than 55 Wikipedia sitelinks (a notability proxy — below that the pool fills with obscure
//   voles, bats and shorebirds nobody could reasonably guess).
// - Exactly one distinct P4214 value (drops the few species with conflicting figures, e.g. whale
//   shark 80 vs. 130 years). The Winter white dwarf hamster (1.0 years) was also removed by hand as
//   an implausible value.
// - Display name is the English Wikipedia title with any "(animal)"-style qualifier stripped; the
//   few articles titled by their binomial name were renamed to their common name.
// Values spot-checked against AnAge / well-known records (Human 122.4 — Jeanne Calment; Bowhead
// whale 211; Chimpanzee 59.4; Polar bear 43.8). Baked in statically like the other datasets here.
// To refresh, re-run the same query and re-apply the same filters.

export interface AnimalData {
  name: string;
  scientificName: string | null;
  maxLifespanYears: number;
  imageUrl: string;
}

export const ANIMALS: AnimalData[] = [
  {
    "name": "Dog",
    "scientificName": null,
    "maxLifespanYears": 30.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Greenland%20467%20%2835130903436%29%20%28cropped%29.jpg"
  },
  {
    "name": "Lion",
    "scientificName": "Panthera leo",
    "maxLifespanYears": 27.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PZ%20lion%20pride.jpg"
  },
  {
    "name": "Cattle",
    "scientificName": null,
    "maxLifespanYears": 48.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cow%20female%20black%20white.jpg"
  },
  {
    "name": "Tiger",
    "scientificName": "Panthera tigris",
    "maxLifespanYears": 26.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Adult%20male%20Royal%20Bengal%20tiger.jpg"
  },
  {
    "name": "Sheep",
    "scientificName": null,
    "maxLifespanYears": 22.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yorkshire%20dales%20sheep.jpg"
  },
  {
    "name": "Pig",
    "scientificName": "Sus scrofa domesticus",
    "maxLifespanYears": 27.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sow%20with%20piglet.jpg"
  },
  {
    "name": "Wolf",
    "scientificName": "Canis lupus",
    "maxLifespanYears": 20.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eurasian%20wolf%202.jpg"
  },
  {
    "name": "Goat",
    "scientificName": "Capra aegagrus hircus",
    "maxLifespanYears": 20.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Billy%20goat.jpg"
  },
  {
    "name": "Leopard",
    "scientificName": "Panthera pardus",
    "maxLifespanYears": 27.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Male%20leopard%20-%20Mara.jpg"
  },
  {
    "name": "Wild boar",
    "scientificName": "Sus scrofa",
    "maxLifespanYears": 27.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wildschwein%2C%20N%C3%A4he%20Pulverstampftor.jpg"
  },
  {
    "name": "Polar bear",
    "scientificName": "Ursus maritimus",
    "maxLifespanYears": 43.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Polar%20Bear%20-%20Alaska%20%28cropped%29.jpg"
  },
  {
    "name": "Red fox",
    "scientificName": "Vulpes vulpes",
    "maxLifespanYears": 21.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20a%20red%20fox%20in%20Rautas%20fj%C3%A4llurskog%20%28cropped%29.jpg"
  },
  {
    "name": "Cheetah",
    "scientificName": "Acinonyx jubatus",
    "maxLifespanYears": 20.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/TheCheethcat.jpg"
  },
  {
    "name": "Hippopotamus",
    "scientificName": "Hippopotamus amphibius",
    "maxLifespanYears": 61.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20Hippopotamus%20in%20the%20water.jpg"
  },
  {
    "name": "Giant panda",
    "scientificName": "Ailuropoda melanoleuca",
    "maxLifespanYears": 36.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Grosser%20Panda.JPG"
  },
  {
    "name": "House sparrow",
    "scientificName": "Passer domesticus",
    "maxLifespanYears": 19.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/House%20sparrow%20male%20in%20Prospect%20Park%20%2853532%29.jpg"
  },
  {
    "name": "Giraffe",
    "scientificName": "Giraffa camelopardalis",
    "maxLifespanYears": 39.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rothschild%27s%20giraffe%20%28Giraffa%20camelopardalis%20rothschildi%29%20-%20Murchison%20Falls%20National%20Park.jpg"
  },
  {
    "name": "Brown bear",
    "scientificName": "Ursus arctos",
    "maxLifespanYears": 40.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kamchatka%20Brown%20Bear%20near%20Dvuhyurtochnoe%20on%202015-07-23.jpg"
  },
  {
    "name": "Common raven",
    "scientificName": "Corvus corax",
    "maxLifespanYears": 21.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Corvus%20corax%20ad%20berlin%20090516.jpg"
  },
  {
    "name": "Water buffalo",
    "scientificName": "Bubalus bubalis",
    "maxLifespanYears": 34.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wasserb%C3%BCffel%20%2825787818312%29.jpg"
  },
  {
    "name": "Jaguar",
    "scientificName": "Panthera onca",
    "maxLifespanYears": 28.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/On%C3%A7a-pintada-PE%20Encontro%20das%20%C3%81guas-Thiagomarcelcampi%28001%29.jpg"
  },
  {
    "name": "Koala",
    "scientificName": "Phascolarctos cinereus",
    "maxLifespanYears": 22.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Koala%20climbing%20tree.jpg"
  },
  {
    "name": "Cougar",
    "scientificName": "Puma concolor",
    "maxLifespanYears": 23.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Puma%20-%2049044464307.jpg"
  },
  {
    "name": "Least weasel",
    "scientificName": "Mustela nivalis",
    "maxLifespanYears": 9.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mustela%20nivalis%20-British%20Wildlife%20Centre-4.jpg"
  },
  {
    "name": "European badger",
    "scientificName": "Meles meles",
    "maxLifespanYears": 18.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/European%20badger%20%28Meles%20meles%20taxus%29%20Drenthe.jpg"
  },
  {
    "name": "Eurasian otter",
    "scientificName": "Lutra lutra",
    "maxLifespanYears": 18.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Otter.png"
  },
  {
    "name": "House mouse",
    "scientificName": "Mus musculus",
    "maxLifespanYears": 4.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Maus%20au%C3%9Fer%20Haus.JPG"
  },
  {
    "name": "Reindeer",
    "scientificName": "Rangifer tarandus",
    "maxLifespanYears": 21.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Caribou.jpg"
  },
  {
    "name": "Platypus",
    "scientificName": "Ornithorhynchus anatinus",
    "maxLifespanYears": 22.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Duck-billed%20platypus%20%28Ornithorhynchus%20anatinus%29%20Scottsdale.jpg"
  },
  {
    "name": "Eurasian lynx",
    "scientificName": "Lynx lynx",
    "maxLifespanYears": 23.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lynx%20lynx%202%20%28Martin%20Mecnarowski%29%20%28cropped%29.jpg"
  },
  {
    "name": "Red panda",
    "scientificName": "Ailurus fulgens",
    "maxLifespanYears": 19.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RedPanda%20SingalilaNationalPark%20DFrame.jpg"
  },
  {
    "name": "Raccoon",
    "scientificName": "Procyon lotor",
    "maxLifespanYears": 21.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Raccoon%20in%20Central%20Park%20%2835264%29.jpg"
  },
  {
    "name": "Red squirrel",
    "scientificName": "Sciurus vulgaris",
    "maxLifespanYears": 14.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Squirrel%20posing.jpg"
  },
  {
    "name": "Stoat",
    "scientificName": "Mustela erminea",
    "maxLifespanYears": 12.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%B8yskatt%20%28Mustela%20erminea%20erminea%29%2C%20Lista%2C%20Norway.jpg"
  },
  {
    "name": "Red deer",
    "scientificName": "Cervus elaphus",
    "maxLifespanYears": 31.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20deer%20%28Cervus%20elaphus%29%20hind.jpg"
  },
  {
    "name": "Caracal",
    "scientificName": "Caracal caracal",
    "maxLifespanYears": 20.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Caracal%20Caracal-001.jpg"
  },
  {
    "name": "Roe deer",
    "scientificName": "Capreolus capreolus",
    "maxLifespanYears": 17.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Capreolus%20%28js%2911.jpg"
  },
  {
    "name": "Coyote",
    "scientificName": "Canis latrans",
    "maxLifespanYears": 21.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2009-Coyote-Yosemite.jpg"
  },
  {
    "name": "Aardvark",
    "scientificName": "Orycteropus afer",
    "maxLifespanYears": 29.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Porc%20formiguer.JPG"
  },
  {
    "name": "Wolverine",
    "scientificName": "Gulo gulo",
    "maxLifespanYears": 19.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gulo%20gulo%202.jpg"
  },
  {
    "name": "Western honey bee",
    "scientificName": "Apis mellifera",
    "maxLifespanYears": 8.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%28MHNT%29%20Apis%20mellifera%20%28female%29%20-%20on%20viburnum%20tinus%20flowers.jpg"
  },
  {
    "name": "Arctic fox",
    "scientificName": "Vulpes lagopus",
    "maxLifespanYears": 16.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vulpes%20lagopus%20in%20Iceland%20%28cropped%29.jpg"
  },
  {
    "name": "Capybara",
    "scientificName": "Hydrochoerus hydrochaeris",
    "maxLifespanYears": 15.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Capybara%20%28Hydrochoerus%20hydrochaeris%29%20alpha%20male.JPG"
  },
  {
    "name": "Llama",
    "scientificName": "Lama glama",
    "maxLifespanYears": 28.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/18-08-25-%C3%85land%20RRK6596a.jpg"
  },
  {
    "name": "European wildcat",
    "scientificName": "Felis silvestris",
    "maxLifespanYears": 19.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Felis%20silvestris%20silvestris%20Luc%20Viatour.jpg"
  },
  {
    "name": "Dromedary",
    "scientificName": "Camelus dromedarius",
    "maxLifespanYears": 28.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Camelcalf-feeding.jpg"
  },
  {
    "name": "Golden jackal",
    "scientificName": "Canis aureus",
    "maxLifespanYears": 18.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/033%20Golden%20jackal%20in%20Keoladeo%20National%20Park%20Photo%20by%20Giles%20Laurent.jpg"
  },
  {
    "name": "Serval",
    "scientificName": "Leptailurus serval",
    "maxLifespanYears": 22.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Leptailurus%20serval%2061666728%2C%20crop.jpg"
  },
  {
    "name": "American black bear",
    "scientificName": "Ursus americanus",
    "maxLifespanYears": 34.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/American%20black%20bear%20%2819647087094%29.jpg"
  },
  {
    "name": "Chimpanzee",
    "scientificName": "Pan troglodytes",
    "maxLifespanYears": 59.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/013%20Alpha%20male%20chimpanzee%20at%20Kibale%20forest%20National%20Park%20Photo%20by%20Giles%20Laurent.jpg"
  },
  {
    "name": "Alpaca",
    "scientificName": "Vicugna pacos",
    "maxLifespanYears": 25.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alpacas%20Sillustani%20%28pixinn.net%29.jpg"
  },
  {
    "name": "Okapi",
    "scientificName": "Okapia johnstoni",
    "maxLifespanYears": 33.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Okapi%20and%20son.jpg"
  },
  {
    "name": "Bactrian camel",
    "scientificName": "Camelus bactrianus",
    "maxLifespanYears": 35.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2011%20Trampeltier%201528.JPG"
  },
  {
    "name": "European bison",
    "scientificName": "Bison bonasus",
    "maxLifespanYears": 26.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/European%20bison%20%28Bison%20bonasus%29%20male%20Bia%C5%82owieza.jpg"
  },
  {
    "name": "American bison",
    "scientificName": "Bison bison",
    "maxLifespanYears": 33.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/American%20bison%20k5680-1.jpg"
  },
  {
    "name": "Asian elephant",
    "scientificName": "Elephas maximus",
    "maxLifespanYears": 65.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elephas%20maximus%20%28Bandipur%29.jpg"
  },
  {
    "name": "Impala",
    "scientificName": "Aepyceros melampus",
    "maxLifespanYears": 25.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aepyceros%20melampus%20-%20001.jpg"
  },
  {
    "name": "Tasmanian devil",
    "scientificName": "Sarcophilus harrisii",
    "maxLifespanYears": 13.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sarcophilus%20harrisii%20taranna.jpg"
  },
  {
    "name": "Honey badger",
    "scientificName": "Mellivora capensis",
    "maxLifespanYears": 31.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Honey%20badger.jpg"
  },
  {
    "name": "African wild dog",
    "scientificName": "Lycaon pictus",
    "maxLifespanYears": 17.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lycaon%20pictus.jpg"
  },
  {
    "name": "Meerkat",
    "scientificName": "Suricata suricatta",
    "maxLifespanYears": 20.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Meerkat%20%28Suricata%20suricatta%29.jpg"
  },
  {
    "name": "Ocelot",
    "scientificName": "Leopardus pardalis",
    "maxLifespanYears": 28.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/081%20Ocelot%20in%20Encontro%20das%20%C3%81guas%20State%20Park%20Photo%20by%20Giles%20Laurent.jpg"
  },
  {
    "name": "Jungle cat",
    "scientificName": "Felis chaus",
    "maxLifespanYears": 20.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/FelisChausMunsiari1.jpg"
  },
  {
    "name": "Asian black bear",
    "scientificName": "Ursus thibetanus",
    "maxLifespanYears": 39.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ursus%20thibetanus%203%20%28Wroclaw%20zoo%29.JPG"
  },
  {
    "name": "African bush elephant",
    "scientificName": "Loxodonta africana",
    "maxLifespanYears": 65.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/African%20Bush%20Elephant.jpg"
  },
  {
    "name": "European hare",
    "scientificName": "Lepus europaeus",
    "maxLifespanYears": 10.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/European%20Brown%20Hare%20%2850341079472%29.jpg"
  },
  {
    "name": "Dhole",
    "scientificName": "Cuon alpinus",
    "maxLifespanYears": 16.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dhole%20%28Asiatic%20wild%20dog%29%20cropped.jpg"
  },
  {
    "name": "White rhinoceros",
    "scientificName": "Ceratotherium simum",
    "maxLifespanYears": 45.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/White%20rhinoceros%20africa.jpg"
  },
  {
    "name": "Fennec fox",
    "scientificName": "Vulpes zerda",
    "maxLifespanYears": 16.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fennec%20Fox%20%289163009503%29.jpg"
  },
  {
    "name": "Sable",
    "scientificName": "Martes zibellina",
    "maxLifespanYears": 18.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sobol%20bur.jpg"
  },
  {
    "name": "Black rhinoceros",
    "scientificName": "Diceros bicornis",
    "maxLifespanYears": 49.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2012%20Black%20Rhinoceros%20Gemsbokvlakte.jpg"
  },
  {
    "name": "Bobcat",
    "scientificName": "Lynx rufus",
    "maxLifespanYears": 32.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bobcat%20at%20Columbus%20Zoo%20Boo.jpg"
  },
  {
    "name": "Beluga whale",
    "scientificName": "Delphinapterus leucas",
    "maxLifespanYears": 40.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beluga%20oceanografic.jpg"
  },
  {
    "name": "European fallow deer",
    "scientificName": "Dama dama",
    "maxLifespanYears": 21.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fallow%20deer%20in%20field.jpg"
  },
  {
    "name": "Muskox",
    "scientificName": "Ovibos moschatus",
    "maxLifespanYears": 27.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ovibos%20moschatus.jpg"
  },
  {
    "name": "European polecat",
    "scientificName": "Mustela putorius",
    "maxLifespanYears": 11.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ilder.jpg"
  },
  {
    "name": "Chamois",
    "scientificName": "Rupicapra rupicapra",
    "maxLifespanYears": 17.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/064%20Wild%20Chamois%20Parc%20r%C3%A9gional%20Chasseral%20Photo%20by%20Giles%20Laurent.jpg"
  },
  {
    "name": "Sand cat",
    "scientificName": "Felis margarita",
    "maxLifespanYears": 13.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SandCat12.jpg"
  },
  {
    "name": "European hedgehog",
    "scientificName": "Erinaceus europaeus",
    "maxLifespanYears": 11.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Erinaceus%20europaeus%20%28Linnaeus%2C%201758%29.jpg"
  },
  {
    "name": "Clouded leopard",
    "scientificName": "Neofelis nebulosa",
    "maxLifespanYears": 19.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Clouded%20Leopard%20%28205918213%29.jpeg"
  },
  {
    "name": "Leopard cat",
    "scientificName": "Prionailurus bengalensis",
    "maxLifespanYears": 17.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Close-up%20of%20a%20Leopard%20Cat%20in%20Sundarban.jpg"
  },
  {
    "name": "Common raccoon dog",
    "scientificName": "Nyctereutes procyonoides",
    "maxLifespanYears": 16.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%95%D0%BD%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%B0%D1%8F%20%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0%20%D0%93%D1%80%D0%BE%D0%B4%D0%BD%D0%BE%20%28cropped%202%29.jpg"
  },
  {
    "name": "Beech marten",
    "scientificName": "Martes foina",
    "maxLifespanYears": 18.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beech%20Marten.jpg"
  },
  {
    "name": "Dugong",
    "scientificName": "Dugong dugon",
    "maxLifespanYears": 73.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dugong%20Marsa%20Alam.jpg"
  },
  {
    "name": "Sun bear",
    "scientificName": "Helarctos malayanus",
    "maxLifespanYears": 35.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sitting%20sun%20bear.jpg"
  },
  {
    "name": "Guanaco",
    "scientificName": "Lama guanicoe",
    "maxLifespanYears": 33.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Guanaco%20at%20SF%20Zoo.jpg"
  },
  {
    "name": "Brown rat",
    "scientificName": "Rattus norvegicus",
    "maxLifespanYears": 3.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rattus%20norvegicus%201.jpg"
  },
  {
    "name": "Human",
    "scientificName": "Homo sapiens",
    "maxLifespanYears": 122.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Human.svg"
  },
  {
    "name": "Sea otter",
    "scientificName": "Enhydra lutris",
    "maxLifespanYears": 15.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sea%20otter%20nursing.jpg"
  },
  {
    "name": "Vicuña",
    "scientificName": "Vicugna vicugna",
    "maxLifespanYears": 31.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vicunacrop.jpg"
  },
  {
    "name": "Indian rhinoceros",
    "scientificName": "Rhinoceros unicornis",
    "maxLifespanYears": 43.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Greater%20one-horned%20rhinoceros%20at%20Chitwan.jpg"
  },
  {
    "name": "Spotted hyena",
    "scientificName": "Crocuta crocuta",
    "maxLifespanYears": 41.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hiena%20manchada%20%28Crocuta%20crocuta%29%2C%20parque%20nacional%20Kruger%2C%20Sud%C3%A1frica%2C%202018-07-26%2C%20DD%2022.jpg"
  },
  {
    "name": "Nutria",
    "scientificName": "Myocastor coypus",
    "maxLifespanYears": 8.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Myocastor%20coypus%20-%20ragondin.jpg"
  },
  {
    "name": "Canada lynx",
    "scientificName": "Lynx canadensis",
    "maxLifespanYears": 26.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Canada%20lynx%20by%20Michael%20Zahra.jpg"
  },
  {
    "name": "Rhesus macaque",
    "scientificName": "Macaca mulatta",
    "maxLifespanYears": 40.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/202108%20Rhesus%20monkey.svg"
  },
  {
    "name": "Fishing cat",
    "scientificName": "Prionailurus viverrinus",
    "maxLifespanYears": 17.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Prionailurus%20viverrinus%2001.jpg"
  },
  {
    "name": "African golden cat",
    "scientificName": "Profelis aurata",
    "maxLifespanYears": 21.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/FelisAurataKeulemans.jpg"
  },
  {
    "name": "Springbok",
    "scientificName": "Antidorcas marsupialis",
    "maxLifespanYears": 19.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Antidorcas%20marsupialis%2C%20female%20%28Etosha%2C%202012%29.jpg"
  },
  {
    "name": "Blackbuck",
    "scientificName": "Antilope cervicapra",
    "maxLifespanYears": 23.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/BlackBuck.jpg"
  },
  {
    "name": "American mink",
    "scientificName": "Neogale vison",
    "maxLifespanYears": 11.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/American%20Mink.jpg"
  },
  {
    "name": "Striped hyena",
    "scientificName": "Hyaena hyaena",
    "maxLifespanYears": 25.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Museo%20della%20Specola%20%28Florence%29%20-%20Hyaena%20hyaena.jpg"
  },
  {
    "name": "Sika deer",
    "scientificName": "Cervus nippon",
    "maxLifespanYears": 26.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cervus%20nippon%20dybowski%20Solo.jpg"
  },
  {
    "name": "Mountain hare",
    "scientificName": "Lepus timidus",
    "maxLifespanYears": 18.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lepus%20timidus%20in%20Volgograd%20Oblast.jpg"
  },
  {
    "name": "European mink",
    "scientificName": "Mustela lutreola",
    "maxLifespanYears": 8.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Europ%C3%A4ischer%20Nerz.jpg"
  },
  {
    "name": "Common eland",
    "scientificName": "Taurotragus oryx",
    "maxLifespanYears": 26.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Taurotragus%20oryx%20-%20young%20bull%20-%20Etosha%202015.jpg"
  },
  {
    "name": "Common bottlenose dolphin",
    "scientificName": "Tursiops truncatus",
    "maxLifespanYears": 51.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tursiops%20truncatus%2001-cropped.jpg"
  },
  {
    "name": "Jaguarundi",
    "scientificName": "Puma yagouaroundi",
    "maxLifespanYears": 18.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Puma%20yagouaroundi.jpg"
  },
  {
    "name": "Ring-tailed lemur",
    "scientificName": "Lemur catta",
    "maxLifespanYears": 37.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lemur%20catta%20001.jpg"
  },
  {
    "name": "Aye-aye",
    "scientificName": "Daubentonia madagascariensis",
    "maxLifespanYears": 32.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aye-aye%20%28Daubentonia%20madagascariensis%29%2C%20Tsimbazaza%20Zoo%2C%20Madagascar%20%283897947810%29.jpg"
  },
  {
    "name": "Spectacled bear",
    "scientificName": "Tremarctos ornatus",
    "maxLifespanYears": 39.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zool%C3%B3gico%20Paraguan%C3%A1%20-%20Oso%20frontino%20Pacheco.jpg"
  },
  {
    "name": "Sloth bear",
    "scientificName": "Melursus ursinus",
    "maxLifespanYears": 33.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SlothBear.jpg"
  },
  {
    "name": "Alpine ibex",
    "scientificName": "Capra ibex",
    "maxLifespanYears": 20.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/094%20Wild%20female%20Alpine%20Ibex%20at%20Creux%20du%20Van%20%28crop%29%20Photo%20by%20Giles%20Laurent.jpg"
  },
  {
    "name": "Aardwolf",
    "scientificName": "Proteles cristata",
    "maxLifespanYears": 20.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Proteles%20cristatus1.jpg"
  },
  {
    "name": "Harbor seal",
    "scientificName": "Phoca vitulina",
    "maxLifespanYears": 47.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Common%20Seal%20Phoca%20vitulina.jpg"
  },
  {
    "name": "Argali",
    "scientificName": "Ovis ammon",
    "maxLifespanYears": 16.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ovis%20ammon%20%28cropped%29.jpg"
  },
  {
    "name": "Onager",
    "scientificName": "Equus hemionus",
    "maxLifespanYears": 31.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kulan%20%28cropped%29.jpg"
  },
  {
    "name": "Black-footed cat",
    "scientificName": "Felis nigripes",
    "maxLifespanYears": 15.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zoo%20Wuppertal%20Schwarzfusskatze.jpg"
  },
  {
    "name": "European edible dormouse",
    "scientificName": "Glis glis",
    "maxLifespanYears": 8.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Glis%20glis%204058.JPG"
  },
  {
    "name": "Corsac fox",
    "scientificName": "Vulpes corsac",
    "maxLifespanYears": 13.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vulpes%20corsac.jpg"
  },
  {
    "name": "Nilgai",
    "scientificName": "Boselaphus tragocamelus",
    "maxLifespanYears": 21.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Female%20neelgai%201%20gir%202006%20karthick.jpg"
  },
  {
    "name": "Black rat",
    "scientificName": "Rattus rattus",
    "maxLifespanYears": 4.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/20191212%20Szczury%20w%20%C5%9Awi%C4%85tyni%20Karni%20Maty%20w%20De%C5%9Bnok%201038%208111%20DxO.jpg"
  },
  {
    "name": "Markhor",
    "scientificName": "Capra falconeri",
    "maxLifespanYears": 19.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Markhor%20Schraubenziege%20Capra%20falconeri%20Zoo%20Augsburg-02.jpg"
  },
  {
    "name": "Binturong",
    "scientificName": "Arctictis binturong",
    "maxLifespanYears": 27.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Binturong%20in%20Overloon.jpg"
  },
  {
    "name": "Common warthog",
    "scientificName": "Phacochoerus africanus",
    "maxLifespanYears": 20.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nolan%20warthog%20%28Phacochoerus%20africanus%20africanus%29.jpg"
  },
  {
    "name": "Fossa",
    "scientificName": "Cryptoprocta ferox",
    "maxLifespanYears": 23.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cryptoprocta%20Ferox.JPG"
  },
  {
    "name": "Addax",
    "scientificName": "Addax nasomaculatus",
    "maxLifespanYears": 28.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Addax%20%28Addax%20nasomaculatus%29%20adult%20male%20and%20juvenile.jpg"
  },
  {
    "name": "Proboscis monkey",
    "scientificName": "Nasalis larvatus",
    "maxLifespanYears": 25.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Proboscis%20monkey%20%28Nasalis%20larvatus%29%20male%20Labuk%20Bay.jpg"
  },
  {
    "name": "Barbary macaque",
    "scientificName": "Macaca sylvanus",
    "maxLifespanYears": 29.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20a%20father.jpg"
  },
  {
    "name": "Bowhead whale",
    "scientificName": "Balaena mysticetus",
    "maxLifespanYears": 211.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bowheads42.jpg"
  },
  {
    "name": "Mandrill",
    "scientificName": "Mandrillus sphinx",
    "maxLifespanYears": 40.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mandrill%20%284531340530%29.jpg"
  },
  {
    "name": "Chital",
    "scientificName": "Axis axis",
    "maxLifespanYears": 20.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Spotted%20deer%20%28Axis%20axis%29%20female.jpg"
  },
  {
    "name": "Quokka",
    "scientificName": "Setonix brachyurus",
    "maxLifespanYears": 13.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rottnest%20Quokka%202004%20SeanMcClean.jpg"
  },
  {
    "name": "Banteng",
    "scientificName": "Bos javanicus",
    "maxLifespanYears": 27.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alas%20Purwo%20banteng%20close%20up.jpg"
  },
  {
    "name": "Yak",
    "scientificName": "Bos grunniens",
    "maxLifespanYears": 26.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bos%20grunniens%20at%20Letdar%20on%20Annapurna%20Circuit.jpg"
  },
  {
    "name": "Pronghorn",
    "scientificName": "Antilocapra americana",
    "maxLifespanYears": 15.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Antilocapra%20americana.jpg"
  },
  {
    "name": "Sambar deer",
    "scientificName": "Rusa unicolor",
    "maxLifespanYears": 26.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Sambal%20Deer%20at%20Peace.jpg"
  },
  {
    "name": "North American beaver",
    "scientificName": "Castor canadensis",
    "maxLifespanYears": 23.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/North%20American%20Beaver%2C%20Humber%20River%20near%20Kleinburg%2C%20Ontario%20%2839637607974%29.jpg"
  },
  {
    "name": "Oncilla",
    "scientificName": "Leopardus tigrinus",
    "maxLifespanYears": 21.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Snethlage%27s%20Tigrina%20imported%20from%20iNaturalist%20photo%20354017009%20on%202%20August%202024%20%28cropped%29.jpg"
  },
  {
    "name": "African civet",
    "scientificName": "Civettictis civetta",
    "maxLifespanYears": 28.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/African%20civet.jpg"
  },
  {
    "name": "Grey seal",
    "scientificName": "Halichoerus grypus",
    "maxLifespanYears": 42.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Two%20seals%20in%20the%20water.jpg"
  },
  {
    "name": "Hamadryas baboon",
    "scientificName": "Papio hamadryas",
    "maxLifespanYears": 37.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hamadryas%20baboon%20%28Papio%20hamadryas%29%20female.jpg"
  },
  {
    "name": "Margay",
    "scientificName": "Leopardus wiedii",
    "maxLifespanYears": 24.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Margay%20in%20Costa%20Rica.jpg"
  },
  {
    "name": "Takin",
    "scientificName": "Budorcas taxicolor",
    "maxLifespanYears": 21.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Budorcas%20taxicolor01.jpg"
  },
  {
    "name": "Grévy's zebra",
    "scientificName": "Equus grevyi",
    "maxLifespanYears": 31.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Equus%20grevyi%20in%20Samburu.jpg"
  },
  {
    "name": "Maned wolf",
    "scientificName": "Chrysocyon brachyurus",
    "maxLifespanYears": 16.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chrysocyon%20brachyurus%20no%20Parque%20Nacional%20da%20Serra%20da%20Canastra%20por%20Celso%20Ferrarezi%20Jr%20%2807%29.jpg"
  },
  {
    "name": "Bat-eared fox",
    "scientificName": "Otocyon megalotis",
    "maxLifespanYears": 17.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Otocyon%20megalotis%20%28Namibia%29.jpg"
  },
  {
    "name": "Giant anteater",
    "scientificName": "Myrmecophaga tridactyla",
    "maxLifespanYears": 33.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Myresluger2.jpg"
  },
  {
    "name": "Mountain goat",
    "scientificName": "Oreamnos americanus",
    "maxLifespanYears": 20.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mountain%20Goat%20Mount%20Massive.JPG"
  },
  {
    "name": "Mountain zebra",
    "scientificName": "Equus zebra",
    "maxLifespanYears": 33.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Equus%20zebra%20-%20Disney%27s%20Animal%20Kingdom%20Lodge%2C%20Orlando%2C%20Florida%2C%20USA%20-%2020100119.jpg"
  },
  {
    "name": "Greater kudu",
    "scientificName": "Tragelaphus strepsiceros",
    "maxLifespanYears": 23.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Greater%20kudu%20skeleton%20at%20MAV-USP.jpg"
  },
  {
    "name": "Red kangaroo",
    "scientificName": "Macropus rufus",
    "maxLifespanYears": 25.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20kangaroo%20-%20melbourne%20zoo.jpg"
  },
  {
    "name": "Waterbuck",
    "scientificName": "Kobus ellipsiprymnus",
    "maxLifespanYears": 30.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ant%C3%ADlope%20acu%C3%A1tico%20%28Kobus%20ellipsiprymnus%29%2C%20parque%20nacional%20de%20Chobe%2C%20Botsuana%2C%202018-07-28%2C%20DD%2049.jpg"
  },
  {
    "name": "Japanese macaque",
    "scientificName": "Macaca fuscata",
    "maxLifespanYears": 38.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/202308%20Japanese%20macaque.svg"
  },
  {
    "name": "Hawksbill sea turtle",
    "scientificName": "Eretmochelys imbricata",
    "maxLifespanYears": 20.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tortuga%20carey%20%28Eretmochelys%20imbricata%29%2C%20parque%20nacional%20Ras%20Muhammad%2C%20Egipto%2C%202022-03-28%2C%20DD%2056.jpg"
  },
  {
    "name": "Hartebeest",
    "scientificName": "Alcelaphus buselaphus",
    "maxLifespanYears": 22.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Coke%27s%20Hartebeest%2C%20running.jpg"
  },
  {
    "name": "Gemsbok",
    "scientificName": "Oryx gazella",
    "maxLifespanYears": 23.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gemsbok%20%28Oryx%20gazella%29%20female%20...%20%2850917402268%29.jpg"
  },
  {
    "name": "Gerenuk",
    "scientificName": "Litocranius walleri",
    "maxLifespanYears": 17.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/San%20Diego%20Zoo%20Avril%202013%2005.JPG"
  },
  {
    "name": "Kinkajou",
    "scientificName": "Potos flavus",
    "maxLifespanYears": 38.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Potos%20flavus%20%288973438737%29.jpg"
  },
  {
    "name": "Virginia opossum",
    "scientificName": "Didelphis virginiana",
    "maxLifespanYears": 6.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Opossum%202.jpg"
  },
  {
    "name": "Wood mouse",
    "scientificName": "Apodemus sylvaticus",
    "maxLifespanYears": 6.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Apodemus%20sylvaticus%20%28Sardinia%29.jpg"
  },
  {
    "name": "Siamang",
    "scientificName": "Symphalangus syndactylus",
    "maxLifespanYears": 43.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Siamang%202014.jpg"
  },
  {
    "name": "White-tailed deer",
    "scientificName": "Odocoileus virginianus",
    "maxLifespanYears": 23.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/White-tailed%20deer.jpg"
  },
  {
    "name": "Harbour porpoise",
    "scientificName": "Phocoena phocoena",
    "maxLifespanYears": 20.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Daan%20Close%20Up.PNG"
  },
  {
    "name": "Siberian flying squirrel",
    "scientificName": "Pteromys volans",
    "maxLifespanYears": 11.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9B%D0%B5%D1%82%D1%8F%D0%B3%D0%B0.jpg"
  },
  {
    "name": "Red phalarope",
    "scientificName": "Phalaropus fulicarius",
    "maxLifespanYears": 6.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Grey%20Phalarope.jpg"
  },
  {
    "name": "Bush dog",
    "scientificName": "Speothos venaticus",
    "maxLifespanYears": 14.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bush%20dog.JPG"
  },
  {
    "name": "Rusty-spotted cat",
    "scientificName": "Prionailurus rubiginosus",
    "maxLifespanYears": 17.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rostkatze.JPG"
  },
  {
    "name": "Marbled polecat",
    "scientificName": "Vormela peregusna",
    "maxLifespanYears": 8.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Marbled%20Polecat%2C%20Suzakskiy%2C%20Kazakhstan%202.jpg"
  },
  {
    "name": "Bongo",
    "scientificName": "Tragelaphus eurycerus",
    "maxLifespanYears": 21.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bongo%20Burger%20Zoo.jpg"
  },
  {
    "name": "Siberian weasel",
    "scientificName": "Mustela sibirica",
    "maxLifespanYears": 8.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Siberian%20weasel.jpeg"
  },
  {
    "name": "Irrawaddy dolphin",
    "scientificName": "Orcaella brevirostris",
    "maxLifespanYears": 30.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Orcaella%20brevirostris%201878.jpg"
  },
  {
    "name": "European hamster",
    "scientificName": "Cricetus cricetus",
    "maxLifespanYears": 10.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/European%20hamster%20in%20Vienna.jpg"
  },
  {
    "name": "Gray fox",
    "scientificName": "Urocyon cinereoargenteus",
    "maxLifespanYears": 16.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gray%20fox.jpg"
  },
  {
    "name": "Geoffroy's cat",
    "scientificName": "Leopardus geoffroyi",
    "maxLifespanYears": 23.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Geoffrey%27sCat2.jpg"
  },
  {
    "name": "Giant otter",
    "scientificName": "Pteronura brasiliensis",
    "maxLifespanYears": 17.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Giantotter.jpg"
  },
  {
    "name": "Gelada",
    "scientificName": "Theropithecus gelada",
    "maxLifespanYears": 36.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Southern%20gelada%20%28Theropithecus%20gelada%20obscura%29%20female%20with%20baby.jpg"
  },
  {
    "name": "Bornean orangutan",
    "scientificName": "Pongo pygmaeus",
    "maxLifespanYears": 59.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nanga%20with%20male%20baby.jpg"
  },
  {
    "name": "Numbat",
    "scientificName": "Myrmecobius fasciatus",
    "maxLifespanYears": 11.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Numbat.jpg"
  },
  {
    "name": "Eastern gray squirrel",
    "scientificName": "Sciurus carolinensis",
    "maxLifespanYears": 23.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Grey%20squirrel%20standing%2C%20Bute%20Park%2C%20Cardiff.jpg"
  },
  {
    "name": "Goitered gazelle",
    "scientificName": "Gazella subgutturosa",
    "maxLifespanYears": 16.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Female%20goitered%20gazelle%2C%20Shirvan%20National%20Park%2C%20Azerbaijan.jpg"
  },
  {
    "name": "American badger",
    "scientificName": "Taxidea taxus",
    "maxLifespanYears": 25.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Taxidea%20taxus%20%28Point%20Reyes%2C%202007%29.jpg"
  },
  {
    "name": "Blue wildebeest",
    "scientificName": "Connochaetes taurinus",
    "maxLifespanYears": 24.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20wildebeest%20%28Connochaetes%20taurinus%20taurinus%29%20female%20and%20calf.jpg"
  },
  {
    "name": "Barasingha",
    "scientificName": "Rucervus duvaucelii",
    "maxLifespanYears": 24.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Barasingha%20females.JPG"
  },
  {
    "name": "Malayan tapir",
    "scientificName": "Tapirus indicus",
    "maxLifespanYears": 36.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Malayan%20Tapir.JPG"
  },
  {
    "name": "Short-beaked echidna",
    "scientificName": "Tachyglossus aculeatus",
    "maxLifespanYears": 49.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wild%20shortbeak%20echidna.jpg"
  },
  {
    "name": "Sitatunga",
    "scientificName": "Tragelaphus spekii",
    "maxLifespanYears": 22.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sitatunga%20%281%29.JPG"
  },
  {
    "name": "Greenland shark",
    "scientificName": "Somniosus microcephalus",
    "maxLifespanYears": 500.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Somniosus%20microcephalus%20okeanos.jpg"
  },
  {
    "name": "Pampas cat",
    "scientificName": "Leopardus colocolo",
    "maxLifespanYears": 19.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gato%20palheiro%20no%20Zool%C3%B3gico%20de%20Bras%C3%ADlia%20mar%C3%A7o%20de%202025.jpg"
  },
  {
    "name": "Baikal seal",
    "scientificName": "Pusa sibirica",
    "maxLifespanYears": 56.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%98%D0%B7%20%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8%20%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BD%D0%B5%D1%80%D0%BF%D1%8B%20%D0%B1%D0%BB%D0%B8%D0%B7%20%D0%A3%D1%88%D0%BA%D0%B0%D0%BD%D1%8C%D0%B8%D1%85%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%B2%2002.jpg"
  },
  {
    "name": "Crab-eating macaque",
    "scientificName": "Macaca fascicularis",
    "maxLifespanYears": 39.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Macaca%20fascicularis%2C%20Ubud%20Monkey%20Forest%2C%20Bali%2C%2020220822%201053%200059.jpg"
  },
  {
    "name": "Barbary sheep",
    "scientificName": "Ammotragus lervia",
    "maxLifespanYears": 21.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Two%20Barbary%20sheep.JPG"
  },
  {
    "name": "Water deer",
    "scientificName": "Hydropotes inermis",
    "maxLifespanYears": 13.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hydropotes%20inermis%20male.JPG"
  },
  {
    "name": "Common vole",
    "scientificName": "Microtus arvalis",
    "maxLifespanYears": 4.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Feldmaus%20Microtus%20arvalis.jpg"
  },
  {
    "name": "Eurasian harvest mouse",
    "scientificName": "Micromys minutus",
    "maxLifespanYears": 3.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Micromys%20minutus%20-%20British%20Wildlife%20Centre.jpg"
  },
  {
    "name": "Kob",
    "scientificName": "Kobus kob",
    "maxLifespanYears": 21.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ugandan%20kob%20%28Kobus%20kob%20thomasi%29%20male.jpg"
  },
  {
    "name": "Sable antelope",
    "scientificName": "Hippotragus niger",
    "maxLifespanYears": 22.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sable%20antelope%20%28Hippotragus%20niger%29%20adult%20male.jpg"
  },
  {
    "name": "Culpeo",
    "scientificName": "Lycalopex culpaeus",
    "maxLifespanYears": 13.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Culpeo%20MC.jpg"
  },
  {
    "name": "Oilbird",
    "scientificName": "Steatornis caripensis",
    "maxLifespanYears": 12.0,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Oilbirds.jpg"
  },
  {
    "name": "Bank vole",
    "scientificName": "Myodes glareolus",
    "maxLifespanYears": 4.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/BankVole.jpg"
  },
  {
    "name": "Southern red muntjac",
    "scientificName": "Muntiacus muntjak",
    "maxLifespanYears": 18.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Muntiacus%20muntjak%2034068208%20%28cropped%29.jpg"
  }
];
