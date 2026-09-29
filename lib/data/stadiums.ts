// Static snapshot of stadium seating capacity data from Wikidata (query.wikidata.org/sparql),
// fetched 2026-09-11. Sourced via SPARQL: instance-of stadium (Q483110)
// joined with seating capacity (P1083) and a Wikimedia Commons image (P18), restricted to items with
// more than 8 Wikipedia sitelinks (a notability proxy) and exactly one distinct capacity value across
// all statements (drops the handful of stadiums with conflicting/renovated capacity figures rather
// than guessing which one is current). Baked in statically like the other datasets here. To refresh,
// re-run the same SPARQL query against query.wikidata.org/sparql.

export interface StadiumData {
  name: string;
  capacity: number;
  imageUrl: string;
}

export const STADIUMS: StadiumData[] = [
  {
    "name": "Colosseum",
    "capacity": 65000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo%202020.jpg"
  },
  {
    "name": "Maracanã Stadium",
    "capacity": 78838,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Maracana%202022.jpg"
  },
  {
    "name": "Bernabéu",
    "capacity": 83186,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Santiago%20Bernab%C3%A9u%20Madrid.jpg"
  },
  {
    "name": "Allianz Arena",
    "capacity": 75024,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Allianz%20arena%20daylight%20Richard%20Bartz.jpg"
  },
  {
    "name": "Wembley Stadium",
    "capacity": 90000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/London%20Wembley.jpg"
  },
  {
    "name": "Stade de France",
    "capacity": 81338,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/StadeFranceNationsLeague2018.jpg"
  },
  {
    "name": "Beijing National Stadium",
    "capacity": 80000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing%20National%20Stadium%20from%20the%20Central%20Axis%20%2820220905140702%29.jpg"
  },
  {
    "name": "FNB Stadium",
    "capacity": 94736,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/FIFA%20World%20Cup%202010%20Argentina%20South%20Korea.jpg"
  },
  {
    "name": "Arena AufSchalke",
    "capacity": 62271,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gelsenkirchen%20-%20Schalker%20Feld%20-%20AufSchalke%2026%20ies.jpg"
  },
  {
    "name": "Hampden Park",
    "capacity": 51866,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hampden%20Park%20%28Glasgow%29%20aerial%20view%20cropped.jpg"
  },
  {
    "name": "Mineirão",
    "capacity": 66658,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mineir%C3%A3o%20A%C3%A9rea.jpg"
  },
  {
    "name": "Munich Olympic Stadium",
    "capacity": 63118,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Blick%20vom%20Olympiaberg%20auf%20das%20Olympiastadion.jpg"
  },
  {
    "name": "Stade Vélodrome",
    "capacity": 67394,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20V%C3%A9lodrome%20closeup.jpg"
  },
  {
    "name": "Lusail Stadium",
    "capacity": 88966,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Br%C3%A9sil%20vs%20Serbie.jpg"
  },
  {
    "name": "Rostov Arena",
    "capacity": 45000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rostov%20Arena2018%20%28cropped%29.jpg"
  },
  {
    "name": "Mordovia Arena",
    "capacity": 45015,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mordovia%20Arena1.jpg"
  },
  {
    "name": "MHPArena",
    "capacity": 60058,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Blick%20vom%20Rotenberg%20Stadion.jpg"
  },
  {
    "name": "Cape Town Stadium",
    "capacity": 58309,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2011-02-06%2014-57-32%20South%20Africa%20-%20Bakoven.jpg"
  },
  {
    "name": "Johan Cruyff Arena",
    "capacity": 54990,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arena%2C%20Ajax%20stadion%2C%20Amsterdam.JPG"
  },
  {
    "name": "Rostec Arena",
    "capacity": 45015,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kaliningrad%20stadium%20-%202018-04-07.jpg"
  },
  {
    "name": "Samara Arena",
    "capacity": 44918,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Samara%20arena.png"
  },
  {
    "name": "Parken Stadium",
    "capacity": 38065,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Denmark%20copenhagen%20parken%20stadium.jpg"
  },
  {
    "name": "Kazimierz Górski National Stadium",
    "capacity": 58274,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stadion%20narodowy%20panorama.jpg"
  },
  {
    "name": "Khalifa International Stadium",
    "capacity": 50500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Khalifa%20International%20Stadium.jpg"
  },
  {
    "name": "BC Place",
    "capacity": 54500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/BC%20Place%20%28Vancouver%29.jpg"
  },
  {
    "name": "Estádio Nacional de Brasília",
    "capacity": 69910,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Est%C3%A1dio%20Nacional%20de%20Bras%C3%ADlia%202022.jpg"
  },
  {
    "name": "Volgograd Arena",
    "capacity": 45568,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volgograd%20arena%20aerial%20view%201.jpg"
  },
  {
    "name": "Ernst-Happel-Stadion",
    "capacity": 50000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ernst-happel-stadion%20vienna.jpg"
  },
  {
    "name": "Millennium Stadium",
    "capacity": 73931,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Principality%20Stadium%20May%203%2C%202016.jpg"
  },
  {
    "name": "MetLife Stadium",
    "capacity": 82500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/New%20Meadowlands%20Stadium%20Mezz%20Corner.jpg"
  },
  {
    "name": "SoFi Stadium",
    "capacity": 70240,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SoFi%20Stadium%20%2851126606022%29.jpg"
  },
  {
    "name": "Castelão",
    "capacity": 57876,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fortaleza%20Arena.jpg"
  },
  {
    "name": "Peter Mokaba Stadium",
    "capacity": 41733,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mokaba%20stadium%20%284739619696%29.jpg"
  },
  {
    "name": "Nelson Mandela Bay Stadium",
    "capacity": 42486,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nelson%20Mandela%20Stadium%20in%20Port%20Elizabeth.jpg"
  },
  {
    "name": "Mestalla Stadium",
    "capacity": 49430,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/CAMP%20DE%20MESTALLA%20GRADA%20DE%20LA%20MAR%202014.JPG"
  },
  {
    "name": "Nizhny Novgorod Stadium",
    "capacity": 44899,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nizhny%20Novgorod%20Stadium%20asv2019-05.jpg"
  },
  {
    "name": "Estádio da Luz",
    "capacity": 68100,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LuzLissabon.jpg"
  },
  {
    "name": "Mbombela Stadium",
    "capacity": 43500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mbombela%20Stadium%20Aerial%20View.jpg"
  },
  {
    "name": "Royal Bafokeng Stadium",
    "capacity": 42000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Royal%20Bafokeng%20Stadium%2C%20Phokeng.jpg"
  },
  {
    "name": "Arena Amazônia",
    "capacity": 42924,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arena%20Amaz%C3%B4nia%20Manaus.jpg"
  },
  {
    "name": "Melbourne Cricket Ground",
    "capacity": 100024,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2017%20AFL%20Grand%20Final%20panorama%20during%20national%20anthem.jpg"
  },
  {
    "name": "Gillette Stadium",
    "capacity": 68756,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gillette%20Stadium02.jpg"
  },
  {
    "name": "Education City Stadium",
    "capacity": 90000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20FIFA%20World%20Cup%20Korea%20Uruguay%2001.jpg"
  },
  {
    "name": "Al Bayt Stadium",
    "capacity": 68895,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Bayt%20Stadium.jpg"
  },
  {
    "name": "Estádio Beira-Rio",
    "capacity": 49055,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beira-Rio-Stadium-Porto-Alegre-Brazil.jpg"
  },
  {
    "name": "Donbass Arena",
    "capacity": 52518,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Donetsk%20Donbass%20Arena%2040.jpg"
  },
  {
    "name": "Tottenham Hotspur Stadium",
    "capacity": 62850,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/London%20Tottenham%20Hotspur%20Stadium.jpg"
  },
  {
    "name": "Stadion Wankdorf",
    "capacity": 32000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stadedesuiss2.jpg"
  },
  {
    "name": "BMO Field",
    "capacity": 21566,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/BMO%20Field%20in%202016.png"
  },
  {
    "name": "Estadio Centenario",
    "capacity": 60235,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Centenario%20%28vista%20a%C3%A9rea%29.jpg"
  },
  {
    "name": "Arrowhead Stadium",
    "capacity": 76416,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20view%20of%20Arrowhead%20Stadium%2008-31-2013.jpg"
  },
  {
    "name": "Lumen Field",
    "capacity": 67000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Qwest%20Field%20North.jpg"
  },
  {
    "name": "Stadion Maksimir",
    "capacity": 60000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Maksimirski%20stadion%20Zagreb.jpg"
  },
  {
    "name": "Rajko Mitić Stadium",
    "capacity": 55538,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beograd%207652.jpg"
  },
  {
    "name": "Arena Fonte Nova",
    "capacity": 47915,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Salvador%20aerea%20arenafontenova.jpg"
  },
  {
    "name": "Stade Bollaert-Delelis",
    "capacity": 38223,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20Bollaert%20Delelis.JPG"
  },
  {
    "name": "Cardiff City Stadium",
    "capacity": 33260,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cardiff%20City%20Stadium%20Pitch.jpg"
  },
  {
    "name": "Arena da Baixada",
    "capacity": 28413,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arenadabaixada2.jpg"
  },
  {
    "name": "Arena Pantaloneta",
    "capacity": 42968,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arena%20Pantanal.jpg"
  },
  {
    "name": "Reliant Stadium",
    "capacity": 71054,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Reliantstadium.jpg"
  },
  {
    "name": "Mercedes-Benz Stadium",
    "capacity": 71000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes%20Benz%20Stadium%20time%20lapse%20capture%202017-08-13.jpg"
  },
  {
    "name": "Al Thumama Stadium",
    "capacity": 40000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20FIFA%20World%20Cup%20at%20Al%20Thumama%20Stadium.jpg"
  },
  {
    "name": "Niedersachsenstadion",
    "capacity": 49000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hanover%20stadium.jpg"
  },
  {
    "name": "Letzigrund",
    "capacity": 25000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Letzigrund%202024%202.jpg"
  },
  {
    "name": "Turf Moor",
    "capacity": 22546,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Turf%20Moor%20panorama.jpg"
  },
  {
    "name": "Arena Lviv",
    "capacity": 34915,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arena%20Lviv%205.jpg"
  },
  {
    "name": "Estádio do Dragão",
    "capacity": 50033,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Est%C3%A1dio%20do%20Drag%C3%A3o%20%288468978586%29.jpg"
  },
  {
    "name": "Stadio Luigi Ferraris",
    "capacity": 33205,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Autumn%20Nations%20Series%20%2722-%20Italia%20vs%20Sudafrica-954%20%2852519137176%29.jpg"
  },
  {
    "name": "Monumental Stadium",
    "capacity": 84567,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RiverPlateStadium.jpg"
  },
  {
    "name": "Arena das Dunas",
    "capacity": 45000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Natal%2C%20Brazil%20-%20Arena%20das%20Dunas.jpg"
  },
  {
    "name": "Arena Cidade da Copa",
    "capacity": 45440,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sport%200%285%29X%283%290%20Santa%20Cruz%20-%20Pernambucano%20BetNacional%202024.jpg"
  },
  {
    "name": "Metalist Stadium",
    "capacity": 40003,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Metalist%20Stadium%20Kharkiv.jpg"
  },
  {
    "name": "International Stadium Yokohama",
    "capacity": 72327,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nissan%20International%20Stadium%20Yokohama.jpg"
  },
  {
    "name": "Liberty Stadium",
    "capacity": 20750,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/New%20Morfa%20Stadium%20-%20geograph.org.uk%20-%2032243.jpg"
  },
  {
    "name": "Helsinki Olympic Stadium",
    "capacity": 42062,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Olympiastadion%202%202020-08-12.jpg"
  },
  {
    "name": "Carrow Road",
    "capacity": 27244,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NCFC%20Geoffrey%20Watling%20City%20Stand%20Apr07.JPG"
  },
  {
    "name": "Yves du Manoir Stadium",
    "capacity": 14000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Netherlands%20vs.%20Germany%2C%202024%20Summer%20Olympics%20men%27s%20field%20hockey%2C%202024-08-08%20-%201.jpg"
  },
  {
    "name": "King Baudouin Stadium",
    "capacity": 50024,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20Roi%20Baudouin.JPG"
  },
  {
    "name": "Hillsborough Stadium",
    "capacity": 39732,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sheffield%20wednesday%20hillsborough%20stadium.jpg"
  },
  {
    "name": "Ibrox Stadium",
    "capacity": 51700,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ibrox%20Inside.jpg"
  },
  {
    "name": "Brighton Community Stadium",
    "capacity": 31800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Falmer%20Stadium%20-%20night.jpg"
  },
  {
    "name": "Stockholm Olympic Stadium",
    "capacity": 14500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stockholms%20Olympiastadion%2C%20070310.JPG"
  },
  {
    "name": "Strawberry Arena",
    "capacity": 54329,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Friends%20Arena%20%287751335978%29.jpg"
  },
  {
    "name": "Twickenham Stadium",
    "capacity": 82000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Twickenham%20Stadium%20aerial%20view%202014.jpg"
  },
  {
    "name": "United Center",
    "capacity": 23500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/United%20Center%20060716.jpg"
  },
  {
    "name": "Stade de Genève",
    "capacity": 30084,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Stade%20de%20Gen%C3%A8ve%20during%20a%20UEFA%20Europa%20Conference%20League%20match%20between%20Servette%20and%20Viktoria%20Pilsen.%20%282023%29.jpg"
  },
  {
    "name": "Arena ”Philip II. of Macedonia / Toše Proeski / Todor”",
    "capacity": 33460,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/To%C5%A1e%20Proeski%20Arena%201.jpg"
  },
  {
    "name": "Vicarage Road",
    "capacity": 22000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vicarage%20Road%202015.jpg"
  },
  {
    "name": "Stadio Renato Dall'Ara",
    "capacity": 36462,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stadio%20Dall%27Ara%2001-02-2020.jpg"
  },
  {
    "name": "Wörthersee Stadion",
    "capacity": 32000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stadium%20klagenfurt%20aerial%20view.jpg"
  },
  {
    "name": "Estádio José Alvalade",
    "capacity": 52095,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Est%C3%A1dio%20Jos%C3%A9%20Alvalade%20antes%20do%20jogo%20Sporting%20-%20Arouca.jpg"
  },
  {
    "name": "Stade de la Beaujoire",
    "capacity": 35318,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20de%20la%20Beaujoire.jpg"
  },
  {
    "name": "Toughsheet Community Stadium",
    "capacity": 28723,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Reebokstadium%20inside.jpg"
  },
  {
    "name": "Croke Park",
    "capacity": 82300,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Croke%20Park%20from%20the%20Hill%20-%202004%20All-Ireland%20Football%20Championship%20Final.jpg"
  },
  {
    "name": "The O2 Arena",
    "capacity": 20000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/O2%20Arena.jpg"
  },
  {
    "name": "Stade de la Mosson",
    "capacity": 32900,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Australie-Fidji.4.JPG"
  },
  {
    "name": "Coventry Building Society Arena",
    "capacity": 32609,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ricoh%20Arena%20-%20geograph.org.uk%20-%20901396.jpg"
  },
  {
    "name": "Los Angeles Memorial Coliseum",
    "capacity": 77500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/USC%20vs%20University%20of%20Oregon%20November%202019.png"
  },
  {
    "name": "Olympic Stadium",
    "capacity": 22288,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Olstadion.jpg"
  },
  {
    "name": "Julio Martínez Prádanos National Stadium",
    "capacity": 46190,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Nacional%20-%20A741105.jpg"
  },
  {
    "name": "Lotto Park",
    "capacity": 21500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Constant%20Vanden%20Stockstadion%2C%20Anderlecht.jpg"
  },
  {
    "name": "Estadio Gran Parque Central",
    "capacity": 34000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eliminatorias%20Uruguay-Colombia%202021.jpg"
  },
  {
    "name": "San Mamés Stadium",
    "capacity": 40000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/San%20mames%20uefa.png"
  },
  {
    "name": "Pride Park Stadium",
    "capacity": 33597,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Derby%20pride%20park%20stadium%20derby%20county.jpg"
  },
  {
    "name": "La Rosaleda Stadium",
    "capacity": 30778,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estado%20de%20la%20Rosaleda%20%28M%C3%A1laga%20C.F.%29.jpg"
  },
  {
    "name": "Eden Park",
    "capacity": 50000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eden%20Park%20at%20Dusk%2C%202013.jpg"
  },
  {
    "name": "Dinamo Stadium",
    "capacity": 22000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Interior%20view%20of%20Dynamo%20Stadium%20%28Minsk%2C%20Belarus%29%20%E2%80%94%20%D0%92%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9%20%D0%B2%D0%B8%D0%B4%20%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD%D0%B0%20%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%BE%20%28%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%2C%20%D0%91%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C%29%202018%202.jpg"
  },
  {
    "name": "Estadio Nuevo José Zorrilla",
    "capacity": 27618,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Jos%C3%A9%20Zorrilla%20de%20Valladolid%20%28noviembre%20de%202019%29.jpg"
  },
  {
    "name": "Caesars Superdome",
    "capacity": 75167,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20Superdome%20Poydras%20bike.JPG"
  },
  {
    "name": "St Andrew's",
    "capacity": 30016,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/TiltonRoadEnd01.JPG"
  },
  {
    "name": "Ullevi",
    "capacity": 43000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ullevi%20stadium%20in%20gothenburg%2020060510.jpg"
  },
  {
    "name": "Yanmar Stadium Nagai",
    "capacity": 47853,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yammar%20Stadium%20Nagai.jpg"
  },
  {
    "name": "Stadio Ennio Tardini",
    "capacity": 22352,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stadio%20Ennio%20Tardini%202026.jpg"
  },
  {
    "name": "Stadio Marcantonio Bentegodi",
    "capacity": 31045,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Italy%20-%20Verona%20-%20Stadio%20Marcantonio%20Bentegodi.jpg"
  },
  {
    "name": "Giants Stadium",
    "capacity": 80242,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Giants%20Stadium%20aerial.jpg"
  },
  {
    "name": "Stade Chaban-Delmas",
    "capacity": 33290,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20Chaban-Delmas%20Rugby.jpg"
  },
  {
    "name": "Narendra Modi Stadium",
    "capacity": 132000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Narendra%20Modi%20Stadium%20view%20from%20the%20gallery.jpg"
  },
  {
    "name": "Madejski Stadium",
    "capacity": 24161,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Select%20Car%20Leasing.jpg"
  },
  {
    "name": "Estádio Municipal de Braga",
    "capacity": 30286,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Braga.JPG"
  },
  {
    "name": "White City Stadium",
    "capacity": 93000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/White%20City%20Stadium%201908.jpg"
  },
  {
    "name": "The Den",
    "capacity": 20146,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20New%20Den%20-%20geograph.org.uk%20-%201143517.jpg"
  },
  {
    "name": "Brentford Community Stadium",
    "capacity": 20000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Brentford%20Community%20Stadium%202020.jpg"
  },
  {
    "name": "Estádio D. Afonso Henriques",
    "capacity": 30029,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Est%C3%A1dio%20do%20Vit%C3%B3ria%20de%20Guimar%C3%A3es%20visto%20da%20torre%20central%20do%20Castelo%20de%20Guimar%C3%A3es%2003.JPG"
  },
  {
    "name": "El Molinón-Enrique Castro Quini",
    "capacity": 29371,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Interior%20de%20El%20Molin%C3%B3n.JPG"
  },
  {
    "name": "Air Albania Stadium",
    "capacity": 22500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Air%20Albania%20Stadium%20close.jpg"
  },
  {
    "name": "Olympiysky Sports Complex",
    "capacity": 25000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Moscow%2005-2017%20img48%20Olimpiysky%20Arena.jpg"
  },
  {
    "name": "State Farm Stadium",
    "capacity": 63400,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cardinals%20stadium%20crop.jpg"
  },
  {
    "name": "Bislett Stadion",
    "capacity": 15400,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bislett%20panorama.jpg"
  },
  {
    "name": "Suwon World Cup Stadium",
    "capacity": 43959,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Suwon%20world%20cup.JPG"
  },
  {
    "name": "Lanxess Arena",
    "capacity": 20000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/K%C3%B6ln%20deutz%20k%C3%B6lnarena.jpg"
  },
  {
    "name": "Mario Alberto Kempes Stadium",
    "capacity": 60000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vista%20a%C3%A9rea%20del%20Estadio%20Mario%20Alberto%20Kempes%2C%20C%C3%B3rdoba.jpg"
  },
  {
    "name": "Beijing National Indoor Stadium",
    "capacity": 18000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing%20National%20Indoor%20Stadium%202019%202.jpg"
  },
  {
    "name": "Estadio Manuel Martínez Valero",
    "capacity": 31388,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elche-Xerez.jpg"
  },
  {
    "name": "Cadillac Arena",
    "capacity": 18000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cadillac%20Arena%20%2820211011164821%29.jpg"
  },
  {
    "name": "Fenway Park",
    "capacity": 37499,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Fenway%20Park%20from%20the%20press%20box%20in%20July%202022.jpg"
  },
  {
    "name": "Sports Illustrated Stadium",
    "capacity": 25189,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Red%20Bull%20Arena%20Harrison%20behind%20goal.jpg"
  },
  {
    "name": "Denka Big Swan Stadium",
    "capacity": 42300,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bigswan080628.JPG"
  },
  {
    "name": "Northwest Stadium",
    "capacity": 64000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Commanders%20vs%20Giants%20%2853345178211%29.jpg"
  },
  {
    "name": "Lang Park",
    "capacity": 52500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Suncorp%20Stadium%2022%20April%202012.jpg"
  },
  {
    "name": "Shanghai Stadium",
    "capacity": 80000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Shanghai%20Stadium%202008.JPG"
  },
  {
    "name": "Dodger Stadium",
    "capacity": 56000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dodger%20Stadium.jpg"
  },
  {
    "name": "Ajinomoto Stadium",
    "capacity": 48013,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ajinomoto%20Stadium%20%28Tokyo%2C%20JAP%29%202012.JPG"
  },
  {
    "name": "Wrigley Field",
    "capacity": 41072,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wrigley%20Field%202018%20-%2042195054760.jpg"
  },
  {
    "name": "Estadio José Rico Pérez",
    "capacity": 24704,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Jose%20Rico%20Perez.JPG"
  },
  {
    "name": "Murrayfield Stadium",
    "capacity": 67144,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Murrayfield%20Stadium%202005-05-13.jpg"
  },
  {
    "name": "3Arena",
    "capacity": 30001,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tele2%20Arena%20September%202014%2014%20%28cropped%202%29.jpg"
  },
  {
    "name": "Q2860806",
    "capacity": 32000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/France%2098%20v%20FIFA%2098%2C%2012%20June%202018%20%281%29.jpg"
  },
  {
    "name": "Allegiant Stadium",
    "capacity": 65000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Allegiant%20Stadium%20%28cropped%29.jpg"
  },
  {
    "name": "Robert F. Kennedy Memorial Stadium",
    "capacity": 43500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RFK%20Stadium%20aerial%20photo%2C%20looking%20towards%20Capitol%2C%201988.jpg"
  },
  {
    "name": "Malmö stadion",
    "capacity": 26500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sweden%20malm%C3%B6%20stadion%20sweden.jpg"
  },
  {
    "name": "Dignity Health Sports Park",
    "capacity": 30510,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LA%20Galaxy%20vs%20Houston%20Dynamo-%20Western%20Conference%20Finals%20panorama.jpg"
  },
  {
    "name": "Shizuoka Stadium",
    "capacity": 51349,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ecopa030304.jpg"
  },
  {
    "name": "Stade de la Meinau",
    "capacity": 26109,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Meinau%20en%20National.jpg"
  },
  {
    "name": "Nissan Stadium",
    "capacity": 67700,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LP%20Field%202009%20crop.jpg"
  },
  {
    "name": "Estádio Nacional",
    "capacity": 37593,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/StadionJamor.JPG"
  },
  {
    "name": "Amman International Stadium",
    "capacity": 25000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20View%20of%20Amman%20International%20Stadium.jpg"
  },
  {
    "name": "Ipurúa Municipal Stadium",
    "capacity": 8164,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vista%20parcial%20de%20Ipurua.JPG"
  },
  {
    "name": "Camping World Stadium",
    "capacity": 65438,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Camping%20World%20Stadium.jpg"
  },
  {
    "name": "Amerant Bank Arena",
    "capacity": 20737,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/BB%26TCenterAerial.jpg"
  },
  {
    "name": "Lambeau Field",
    "capacity": 80750,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lambeau%20Field.jpg"
  },
  {
    "name": "Comerica Park",
    "capacity": 40120,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Detroit%20Tigers%20opening%20game%20at%20Comerica%20Park%2C%202007.jpg"
  },
  {
    "name": "Ōita Stadium",
    "capacity": 40000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/OitaStadium1.JPG"
  },
  {
    "name": "Silesian Stadium",
    "capacity": 54378,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama%20stadionu.jpg"
  },
  {
    "name": "Oracle Park",
    "capacity": 41915,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/AT%26T%20Park%20July%2024%2C%202016.jpg"
  },
  {
    "name": "Georgia Dome",
    "capacity": 74228,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Georgia%20Dome%202008-08-30%202.jpg"
  },
  {
    "name": "Acrisure Stadium",
    "capacity": 65500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ptr-HeinzField-FILE.jpg"
  },
  {
    "name": "Malvinas Argentinas Stadium",
    "capacity": 42000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Argentina%20vs.%20Uruguay%20-%20Mendoza%202016.jpg"
  },
  {
    "name": "The Valley",
    "capacity": 27111,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Valley%20North%20and%20West%20Stands.jpg"
  },
  {
    "name": "Melbourne Rectangular Stadium",
    "capacity": 30050,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2015%20A-League%20Grand%20Final%20AAMI%20Park%20panorama.jpg"
  },
  {
    "name": "Bolshoy Ice Dome",
    "capacity": 12000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F%20%D0%9B%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D0%90%D1%80%D0%B5%D0%BD%D0%B0%20-%20panoramio.jpg"
  },
  {
    "name": "Zayed Sports City Stadium",
    "capacity": 43000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Abu%20Dhabi%20Zayed%20Sports%20City%20Stadium%201.jpg"
  },
  {
    "name": "Tianjin Olympic Center Stadium",
    "capacity": 60000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tianjin%20Olympic%20Center%20Stadium.jpg"
  },
  {
    "name": "Eleda Stadion",
    "capacity": 22500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sweden%20malm%C3%B6%20eleda%20stadion%20nya%20stadion.jpg"
  },
  {
    "name": "Idrottsparken",
    "capacity": 17234,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nyaparken.jpg"
  },
  {
    "name": "Estádio Algarve",
    "capacity": 30305,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/EstadioAlgarve.JPG"
  },
  {
    "name": "Estádio do Pacaembu",
    "capacity": 37730,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Municipal%20do%20Pacaemb%C3%BA.%20-%20panoramio.jpg"
  },
  {
    "name": "Mohammed Bin Zayed Stadium",
    "capacity": 42056,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/IRN-YMN%2020190107%20Asian%20Cup%204.jpg"
  },
  {
    "name": "Estádio Municipal de Aveiro – Mário Duarte",
    "capacity": 32830,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Porto%20Portugal%20February%202015%2009.jpg"
  },
  {
    "name": "Estádio do Bessa",
    "capacity": 28263,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Est%C3%A1dio%20do%20Bessa%20XXI.jpg"
  },
  {
    "name": "Estádio Cidade de Coimbra",
    "capacity": 29622,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Coimbra%20City%20Stadium.jpg"
  },
  {
    "name": "M&T Bank Stadium",
    "capacity": 71008,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M%26T%20Bank%20Stadium%20DoD.jpg"
  },
  {
    "name": "Raymond James Stadium",
    "capacity": 65890,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Raymond%20James%20Stadium%20aerial.jpg"
  },
  {
    "name": "José Amalfitani Stadium",
    "capacity": 50000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Argentina%20A%20vs%20Inglaterra%20A%2002.JPG"
  },
  {
    "name": "Ralph Wilson Stadium",
    "capacity": 71608,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bills.jpg"
  },
  {
    "name": "Mikheil Meskhi Stadium",
    "capacity": 27223,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mikhain%20Meskhi%20Stadium%202024.jpg"
  },
  {
    "name": "Bunyodkor Stadium",
    "capacity": 34000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/National%20Stadium%20%28Uzbekistan%29%2C%20Uzbekistan-Qatar%2C%2010%20June%202025.jpg"
  },
  {
    "name": "National Stadium",
    "capacity": 55000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Seating%20at%20Singapore%20National%20Stadium.jpg"
  },
  {
    "name": "Stadio Mario Rigamonti",
    "capacity": 16308,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Mario%20Rigamonti%20stadium%20in%202020.jpg"
  },
  {
    "name": "Almaty Central Stadium",
    "capacity": 23804,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kazakhstan%20P9240988%2008%20%2839408856325%29.jpg"
  },
  {
    "name": "EverBank Field",
    "capacity": 67246,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/EverBank1.jpg"
  },
  {
    "name": "Sydney Football Stadium",
    "capacity": 45500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Allianz%20Stadium%20from%20above.jpg"
  },
  {
    "name": "Estádio Dr. Magalhães Pessoa",
    "capacity": 23888,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Est%C3%A1dio%20Municipal%20de%20Leiria.jpg"
  },
  {
    "name": "Kim Il-sung Stadium",
    "capacity": 70000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kim-Il-sung-Stadium-2014.jpg"
  },
  {
    "name": "PNC Park",
    "capacity": 37898,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pedro%20goes%20to%20Pittsburgh.jpg"
  },
  {
    "name": "T-Mobile Park",
    "capacity": 47476,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SafecoFieldTop.jpg"
  },
  {
    "name": "Great Strahov Stadium",
    "capacity": 56000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/14-09-30-Velk%C3%BD-strahovsk%C3%BD-stadion-RalfR-001.jpg"
  },
  {
    "name": "Michigan Stadium",
    "capacity": 107601,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Michigan%20Stadium%20Aerial.jpg"
  },
  {
    "name": "Shayba Arena",
    "capacity": 7000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/RUSMARKA-1765.jpg"
  },
  {
    "name": "Inter&Co Stadium",
    "capacity": 25500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Orlando%20City%20Stadium%20%2804-21-18%29%201.jpg"
  },
  {
    "name": "Unipol Domus",
    "capacity": 16416,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Unipol%20Domus%20from%20Distinti%202026.jpg"
  },
  {
    "name": "Commonwealth Stadium",
    "capacity": 56302,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Commonwealth.jpg"
  },
  {
    "name": "Centennial Olympic Stadium",
    "capacity": 85000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/JO%20Atlanta%201996%20-%20Stade.jpg"
  },
  {
    "name": "National Stadium, Dhaka",
    "capacity": 36000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A6%AF%E0%A6%BC%20%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%A1%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%AE%20%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE.jpg"
  },
  {
    "name": "Riverbank Arena",
    "capacity": 15000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Riverbank%20Arena%2C%204%20August%202012.jpg"
  },
  {
    "name": "Lucas Oil Stadium",
    "capacity": 62421,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LucasOilStadiumTheLuke.jpg"
  },
  {
    "name": "Angel Stadium of Anaheim",
    "capacity": 43250,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Angel%20Stadium%20of%20Anaheim.jpg"
  },
  {
    "name": "FedExForum",
    "capacity": 18119,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/FedExForum%20at%20night.jpg"
  },
  {
    "name": "Stanford Stadium",
    "capacity": 50424,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stanford%20Stadium%20new.jpg"
  },
  {
    "name": "Estadio Defensores del Chaco",
    "capacity": 42354,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Defensores%20del%20Chaco%20en%202019.jpg"
  },
  {
    "name": "Huntington Bank Field",
    "capacity": 71516,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cleveland%20National%20Air%20Show%20%2843805784984%29.jpg"
  },
  {
    "name": "Historic Crew Stadium",
    "capacity": 22555,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus%20crew%20stadium%20mls%20allstars%202005.jpg"
  },
  {
    "name": "Coors Field",
    "capacity": 50480,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Coors%20field%201.JPG"
  },
  {
    "name": "Cotton Bowl",
    "capacity": 92100,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cotton%20Bowl.JPG"
  },
  {
    "name": "Tianhe Stadium",
    "capacity": 58500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tianhe%20Stadium.jpg"
  },
  {
    "name": "Bakcell Arena",
    "capacity": 15000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%B0lham%20%C6%8Fliyev%20Bak%C4%B1da%20%E2%80%9C8%20KM%E2%80%9D%20stadionunun%20a%C3%A7%C4%B1l%C4%B1%C5%9F%C4%B1nda%20i%C5%9Ftirak%20etmi%C5%9Fdir%20%281%29.jpg"
  },
  {
    "name": "Unique Diego Armando Maradona Stadium",
    "capacity": 53000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20%C3%9Anico%20Ciudad%20de%20La%20Plata.jpg"
  },
  {
    "name": "Adrar Stadium",
    "capacity": 42000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Stade-Adrar2019.png"
  },
  {
    "name": "Tropicana Field",
    "capacity": 45369,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tropicana%20Field%20Playing%20Field%20Opening%20Day%202010.JPG"
  },
  {
    "name": "Estadio Olímpico Atahualpa",
    "capacity": 35742,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MIRANDO%20A%20QUITO%20DESDE%20LAS%20ALTURAS%20%2837628605982%29.jpg"
  },
  {
    "name": "Gradski Vrt Stadium",
    "capacity": 22050,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gradski%20vrt%20iz%20zraka%20%281%29.jpg"
  },
  {
    "name": "Shenyang Olympic Sports Center Stadium",
    "capacity": 60000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%9E%D0%BB%D0%B8%D0%BC%D0%BF%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD%20%D0%A8%D1%8D%D0%BD%D1%8C%D1%8F%D0%BD2.JPG"
  },
  {
    "name": "Sydney Cricket Ground",
    "capacity": 43649,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sydney%20Cricket%20Ground%20%2824509044622%29.jpg"
  },
  {
    "name": "Arthur Ashe Stadium",
    "capacity": 22547,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/US%20OPEN%202019%20%2848667665777%29.jpg"
  },
  {
    "name": "Olympia",
    "capacity": 16000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Olympiahelsingborg.jpg"
  },
  {
    "name": "WerkTalent Stadion",
    "capacity": 15000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ADO%20Den%20Haag%20Stadion%2C%20Forepark.jpg"
  },
  {
    "name": "Örjans Vall",
    "capacity": 15500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%96rjans%20Vall%20Halmstads%20BK%202023.jpg"
  },
  {
    "name": "Accra Sports Stadium",
    "capacity": 40000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ohene%20Djan%20Sports%20Stadium%2C%20Accra.jpg"
  },
  {
    "name": "Oriole Park at Camden Yards",
    "capacity": 48876,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/OrioleParkAtCamdenYardsJune2013.jpg"
  },
  {
    "name": "Stade du Pays de Charleroi",
    "capacity": 14891,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Charleroi%20Stade%20du%20Pays%20de%20Charleroi%201.jpg"
  },
  {
    "name": "Yokohama Stadium",
    "capacity": 34046,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/YokohamaStadium%20view.jpg"
  },
  {
    "name": "My Dinh National Stadium",
    "capacity": 40192,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kh%C3%A1n%20%C4%91%C3%A0i%20B%20-%20S%C3%A2n%20v%E1%BA%ADn%20%C4%91%E1%BB%99ng%20Qu%E1%BB%91c%20gia%20M%E1%BB%B9%20%C4%90%C3%ACnh.jpg"
  },
  {
    "name": "San Diego Stadium",
    "capacity": 70561,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Qualcomm%20Stadium.jpg"
  },
  {
    "name": "SeatGeek Stadium",
    "capacity": 20000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Park%20panorama%2C%208%20June%202013.jpg"
  },
  {
    "name": "Gaddafi Stadium",
    "capacity": 60000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gaddafi%20Stadium%20at%20Night.jpg"
  },
  {
    "name": "Ghazi Stadium",
    "capacity": 30000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ahmad%20Faisal%20-%20football%20-%20D.jpg"
  },
  {
    "name": "Kenilworth Road",
    "capacity": 10356,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kenilworth%20Road%2C%20Kenilworth%20End.jpg"
  },
  {
    "name": "Paycor Stadium",
    "capacity": 65515,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Paul%20Brown%20Stadium%20interior%202017.jpg"
  },
  {
    "name": "Kauffman Stadium",
    "capacity": 37903,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NewKauffman.jpg"
  },
  {
    "name": "Estadio Nacional de Costa Rica",
    "capacity": 35175,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Nacional%20de%20Costa%20Rica%2C%202011.jpg"
  },
  {
    "name": "Mandela National Stadium",
    "capacity": 45202,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mandela%20National%20Stadium%2C%20Uganda.JPG"
  },
  {
    "name": "Ruzhdi Bizhuta Stadium",
    "capacity": 12300,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elbasan%20Arena%20stadium%20in%20Elbasan%2C%20Albania%202.jpg"
  },
  {
    "name": "Hazza bin Zayed Stadium",
    "capacity": 25000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/IRN-JPN%2020190128%2001.jpg"
  },
  {
    "name": "Prince Abdullah Al Faisal Sports City",
    "capacity": 27000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Prince%20Abdullah%20Al-Faisal%20Sports%20City.jpg"
  },
  {
    "name": "Nationals Park",
    "capacity": 41888,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nationals%20Park%20Panorama%202011.05.02%20-%20Washington%20Nationals%20v%20San%20Francisco%20Giants.jpg"
  },
  {
    "name": "Arena do Grêmio",
    "capacity": 60540,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arena%20do%20Gr%C3%AAmio%202014.jpg"
  },
  {
    "name": "Sausalito Stadium",
    "capacity": 21739,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Estadio%20Sausalito%20Everton%20v%20Uni%C3%B3n%20La%20Calera%2020230716%2003.jpg"
  },
  {
    "name": "Schauinsland-Reisen-Arena",
    "capacity": 31500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Germany%20duisburg%20wedau-stadion.jpg"
  },
  {
    "name": "Pontiac Silverdome",
    "capacity": 82000,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Silverdome%202.jpg"
  }
];
