// Static snapshot of mountain elevation data from Wikidata (query.wikidata.org/sparql),
// fetched 2026-09-12. Sourced via SPARQL: instance-of mountain
// (Q8502) joined with elevation above sea level (P2044) and a Wikimedia Commons image (P18),
// restricted to items with more than 15 Wikipedia sitelinks (a notability proxy) and exactly one
// distinct elevation value (drops the rare mountain with conflicting survey figures). Filtered to
// >= 300m to keep the set feeling like "mountains" rather than large hills. Values spot-checked
// against known real-world elevations (Everest 8848.86m, K2 8611m, Matterhorn 4477.54m, etc.) --
// unlike the building-height data tried for a "How Tall" buildings variant (abandoned after
// finding conflicting tip/roof/pinnacle height statements for the same building), mountains have
// one authoritative "elevation above sea level" figure per peak, so data quality here is solid.
// Baked in statically like the other datasets here. To refresh, re-run the same SPARQL query
// against query.wikidata.org/sparql and re-apply the same filters.

export interface MountainData {
  name: string;
  heightMeters: number;
  imageUrl: string;
}

export const MOUNTAINS: MountainData[] = [
  {
    "name": "Mount Everest",
    "heightMeters": 8848.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Everest%20as%20seen%20from%20Drukair2%20PLW%20edit.jpg"
  },
  {
    "name": "Mount Fuji",
    "heightMeters": 3777.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kodaki%20fuji%20frm%20shojinko%20refurb.jpg"
  },
  {
    "name": "Mount Vesuvius",
    "heightMeters": 1281,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Il%20cratere%20del%20Vulcano%20-%20panoramio.jpg"
  },
  {
    "name": "Mont Blanc",
    "heightMeters": 4805.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama%20of%20Mont%20Blanc%20du%20Tacul%2C%20Mont%20Maudit%20and%20Mont%20Blanc%20from%20Aiguille%20du%20Midi%2C%20Chamonix%2C%20Haute-Savoie.jpg"
  },
  {
    "name": "Aconcagua",
    "heightMeters": 6962,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aconcagua2016.jpg"
  },
  {
    "name": "Mount Elbrus",
    "heightMeters": 5642,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt.%20Elbrus%20in%20Russia.jpg"
  },
  {
    "name": "K2",
    "heightMeters": 8611,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chogori.jpg"
  },
  {
    "name": "Mount Ararat",
    "heightMeters": 5137,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/NEO%20ararat%20big.jpg"
  },
  {
    "name": "Mount Olympus",
    "heightMeters": 2917.7,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt%20Olympus%20aerial%202.jpg"
  },
  {
    "name": "Kanchenjunga",
    "heightMeters": 8586,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kangchenjunga%2C%20India.jpg"
  },
  {
    "name": "Mount Rushmore",
    "heightMeters": 1745,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Rushmore%20detail%20view%20%28100MP%29.jpg"
  },
  {
    "name": "Matterhorn",
    "heightMeters": 4477.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cervino%20cloud.jpg"
  },
  {
    "name": "Mount Kailash",
    "heightMeters": 6638,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kailash-Barkha.jpg"
  },
  {
    "name": "Dhaulagiri",
    "heightMeters": 8167,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dhaulagiri%2C%20Himalaya%2C%20Nepal.jpg"
  },
  {
    "name": "Nanga Parbat",
    "heightMeters": 8126,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nanga%20parbat%2C%20fairy%20medow%2C%20Pak%20by%20gul791.jpg"
  },
  {
    "name": "Makalu",
    "heightMeters": 8485,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Makalu.jpg"
  },
  {
    "name": "Mount Kenya",
    "heightMeters": 5199,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20kenya.JPG"
  },
  {
    "name": "Mount Athos",
    "heightMeters": 2033,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt.%20Athos%20%283939757657%29.jpg"
  },
  {
    "name": "Mauna Kea",
    "heightMeters": 4207.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mauna%20Kea10.jpg"
  },
  {
    "name": "Mount Sinai",
    "heightMeters": 2287,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sinai-Katharinenberg-162-Abstieg-Oase-2009-gje.jpg"
  },
  {
    "name": "Lhotse",
    "heightMeters": 8516,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/LhotseMountain.jos.500pix.jpg"
  },
  {
    "name": "Mount Kosciuszko",
    "heightMeters": 2228,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kosciuszko%20Townsend.jpg"
  },
  {
    "name": "Chimborazo",
    "heightMeters": 6263.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n%20Chimborazo%20desde%20Riobamba.jpg"
  },
  {
    "name": "Cho Oyu",
    "heightMeters": 8188,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ChoOyu-fromGokyo.jpg"
  },
  {
    "name": "Manaslu",
    "heightMeters": 8163,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt%20Manaslu.jpg"
  },
  {
    "name": "Ben Nevis",
    "heightMeters": 1344.5,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ben%20nevis.jpg"
  },
  {
    "name": "Shishapangma",
    "heightMeters": 8027,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Shishapangma.jpg"
  },
  {
    "name": "Baekdu Mountain",
    "heightMeters": 2744,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Baitou%20Mountain%20Tianchi.jpg"
  },
  {
    "name": "Broad Peak",
    "heightMeters": 8051,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/7%2015%20BroadPeak.jpg"
  },
  {
    "name": "Puncak Jaya",
    "heightMeters": 4884,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Puncakjaya.jpg"
  },
  {
    "name": "Zugspitze",
    "heightMeters": 2962.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Zugspitzmassiv-von-Almkopf-2024.jpg"
  },
  {
    "name": "Mount Logan",
    "heightMeters": 5959,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Logan.jpg"
  },
  {
    "name": "Tambora",
    "heightMeters": 2850,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Caldera%20Mt%20Tambora%20Sumbawa%20Indonesia.jpg"
  },
  {
    "name": "Table Mountain",
    "heightMeters": 1085,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cape%20Town%20Table%20Mountain.jpg"
  },
  {
    "name": "Ojos del Salado",
    "heightMeters": 6893,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ojos%20del%20Salado%20summit.jpg"
  },
  {
    "name": "Gasherbrum",
    "heightMeters": 8080,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/HiddenPeak.jpg"
  },
  {
    "name": "Gasherbrum II",
    "heightMeters": 8034,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gasherbrum2.jpg"
  },
  {
    "name": "Mount Tai",
    "heightMeters": 1545,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%B3%B0%E5%B1%B1%20%E5%8D%97%E5%A4%A9%E9%97%A8.jpg"
  },
  {
    "name": "Pinatubo",
    "heightMeters": 1486,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pinatubo%20Crater%20Lake%20%28052005%29.jpg"
  },
  {
    "name": "Aoraki / Mount Cook",
    "heightMeters": 3724,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/00%200985%20Mount%20Cook%20-%20New%20Zealand%20Alps.jpg"
  },
  {
    "name": "Mount Kinabalu",
    "heightMeters": 4095,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kinabalu%20Sabah%20Borneo%20Kampong%20Kundasang%202.jpg"
  },
  {
    "name": "Mount Erebus",
    "heightMeters": 3794,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt%20erebus.jpg"
  },
  {
    "name": "Mount Rainier",
    "heightMeters": 4389,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Rainier%205917s.JPG"
  },
  {
    "name": "Mount Aragats",
    "heightMeters": 4090,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Aragats%202020-05-11.jpg"
  },
  {
    "name": "Mayon Volcano",
    "heightMeters": 2462,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mayon%20Volcano%20as%20of%20March%202020.jpg"
  },
  {
    "name": "Mount of Olives",
    "heightMeters": 826,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2013-Aerial-Mount%20of%20Olives.jpg"
  },
  {
    "name": "Mount Parnassus",
    "heightMeters": 2455,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Parnassos2.jpg"
  },
  {
    "name": "Triglav",
    "heightMeters": 2864,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Triglav.jpg"
  },
  {
    "name": "Cotopaxi volcano",
    "heightMeters": 5897,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%B3lcan%20Cotopaxi.jpg"
  },
  {
    "name": "Mount Hermon",
    "heightMeters": 2814,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hermonsnow.jpg"
  },
  {
    "name": "Citlaltepetl",
    "heightMeters": 5636,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pico%20de%20Orizaba%20desde%20Hidalgo%2C%20Puebla.jpg"
  },
  {
    "name": "Khan Tengri",
    "heightMeters": 7010,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Peak%20of%20Khan%20Tengri%20at%20sunset.jpg"
  },
  {
    "name": "Gangkhar Puensum",
    "heightMeters": 7570,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Himalayan%20peak%20from%20Bumthang.jpg"
  },
  {
    "name": "Grossglockner",
    "heightMeters": 3798,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gro%C3%9Fglockner1.jpg"
  },
  {
    "name": "Mount Kazbek",
    "heightMeters": 5033,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mkinvarcveri.jpg"
  },
  {
    "name": "Mount Pelée",
    "heightMeters": 1397,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/La%20Pel%C3%A9e%20vue%20du%20Carbet.jpg"
  },
  {
    "name": "Klyuchevskaya Sopka",
    "heightMeters": 4800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Klju%C4%8Devskaja%20za%20v%C3%BDchodu%20slunce.jpg"
  },
  {
    "name": "Mount Nemrut",
    "heightMeters": 2150,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nemrut%20Mountain%20Peak.JPG"
  },
  {
    "name": "Mount Arafat",
    "heightMeters": 454,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hajj%201965%2009.jpg"
  },
  {
    "name": "Mount Whitney",
    "heightMeters": 4421,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Whitney%202003-03-25.jpg"
  },
  {
    "name": "Mount Cameroon",
    "heightMeters": 4095,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Le%20Char%20des%20Dieux%20-%20Fako%20Mountain%20-%20Mount%20Cameroon%20National%20Park%20-%20R%C3%A9gion%20du%20Sud-ouest.jpg"
  },
  {
    "name": "Nanda Devi",
    "heightMeters": 7816,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nanda%20Devi%202006.JPG"
  },
  {
    "name": "Mount Roraima",
    "heightMeters": 2810,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Roraima3%20%2879%29.JPG"
  },
  {
    "name": "Terich Mir",
    "heightMeters": 7708,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tirich%20Mir%20%28The%20Kingdom%20Of%20Djinns%20And%20Fairies%29.jpg"
  },
  {
    "name": "Vulcano",
    "heightMeters": 500,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20image%20of%20Vulcano%20%28view%20from%20the%20east%29.jpg"
  },
  {
    "name": "Hoverla",
    "heightMeters": 2061,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0%202015.JPG"
  },
  {
    "name": "Eiger",
    "heightMeters": 3967,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eiger%20Nordwand%20-%20panoramio%20%281%29.jpg"
  },
  {
    "name": "Mount Tabor",
    "heightMeters": 530,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Tabor4.jpg"
  },
  {
    "name": "Sněžka",
    "heightMeters": 1603.3,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%C5%9Anie%C5%BCka%20z%20zachodu.jpg"
  },
  {
    "name": "Sugarloaf Mountain",
    "heightMeters": 395,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vista%20do%20Morro%20Dona%20Marta.jpg"
  },
  {
    "name": "Parícutin",
    "heightMeters": 2800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Paricut%C3%ADn%20volcano.jpg"
  },
  {
    "name": "Noshaq",
    "heightMeters": 7492,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Noshaq%20seen%20from%20the%20base%20camp%20%28photo%20Louis%20Meunier%29.jpg"
  },
  {
    "name": "Rysy",
    "heightMeters": 2501,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rysy%2C%20szczyt.jpg"
  },
  {
    "name": "Jungfrau",
    "heightMeters": 4158,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jungfrau.jpg"
  },
  {
    "name": "Kebnekaise",
    "heightMeters": 2096.8,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kebnekaise%20view%20of%20the%20tops%20from%20the%20south.jpg"
  },
  {
    "name": "Llullaillaco",
    "heightMeters": 6723,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Habitat%20du%20Chinchilla%20brevicaudata%20-%20Lllullaillaco.jpg"
  },
  {
    "name": "Ismoil Somoni Peak",
    "heightMeters": 7495,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kommunismi%20pilt%206100m.jpg"
  },
  {
    "name": "Musala",
    "heightMeters": 2925.4,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Musala.JPG"
  },
  {
    "name": "Jengish Chokusu",
    "heightMeters": 7439,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jengish%20Chokusu%20from%20BC.jpg"
  },
  {
    "name": "Mount Apo",
    "heightMeters": 2954,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Ring%20of%20Mt.%20Apo.jpg"
  },
  {
    "name": "Adam's Peak",
    "heightMeters": 2243,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Adam%27s%20Peak%20-%20February%202020%20%284%29.jpg"
  },
  {
    "name": "Mount Emei",
    "heightMeters": 3099,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%B3%A8%E7%9C%89%E5%B1%B1%E9%A3%8E%E6%99%AF%E5%8C%BA%20Mount%20Emei%20Scenic%20Area%2007.jpg"
  },
  {
    "name": "Shkhara",
    "heightMeters": 5193.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Shahara%20peak%20near%20Ushguli%201870.jpg"
  },
  {
    "name": "Aburaj",
    "heightMeters": 1220,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nakki%20Lake%2C%20Mount%20Abu%2C%20Rajasthan%2C%20610.jpg"
  },
  {
    "name": "Jbel Toubkal",
    "heightMeters": 4167,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Toubkal%207.90965W%2031.05231N.jpg"
  },
  {
    "name": "Galdhøpiggen",
    "heightMeters": 2468.9,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Galdhopiggen%202004.jpg"
  },
  {
    "name": "Aneto",
    "heightMeters": 3404,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aneto%2001.jpg"
  },
  {
    "name": "Mulhacén",
    "heightMeters": 3479,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mulhacen%20Winter.jpg"
  },
  {
    "name": "Belukha Mountain",
    "heightMeters": 4506,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2006-07%20altaj%20belucha.jpg"
  },
  {
    "name": "Yushan Main Peak",
    "heightMeters": 3952,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yushan%20Main%20Peak%20at%20nine%20o%27clock%20in%20the%20morning.jpg"
  },
  {
    "name": "Devils Tower",
    "heightMeters": 1558,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Flaganddevilstower.jpg"
  },
  {
    "name": "Dufourspitze",
    "heightMeters": 4634,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MonteRosaWestseite%20gesehenVomGornergrat.JPG"
  },
  {
    "name": "Grímsvötn",
    "heightMeters": 1725,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Iceland%20Grimsvoetn%201972-B.jpg"
  },
  {
    "name": "Mont Ventoux",
    "heightMeters": 1910,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mont%20ventoux.jpg"
  },
  {
    "name": "Snowdon",
    "heightMeters": 1085,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Snowdon%20from%20Llyn%20Llydaw.jpg"
  },
  {
    "name": "Mount Wutai",
    "heightMeters": 3061,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wutai%202009%20431.jpg"
  },
  {
    "name": "Mount Erciyes",
    "heightMeters": 3916,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Turkey.Mount%20Erciyes01.jpg"
  },
  {
    "name": "Huascarán",
    "heightMeters": 6768,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Huascaran%20norte.JPG"
  },
  {
    "name": "Mount Herzl",
    "heightMeters": 834,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ViewOfMountHerzlMar042023%2004.jpg"
  },
  {
    "name": "Nevado Sajama",
    "heightMeters": 6542,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nevado%20Sajama.jpg"
  },
  {
    "name": "Mount Scopus",
    "heightMeters": 826,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MountScopusDec032022%2003.jpg"
  },
  {
    "name": "Volcán de Fuego",
    "heightMeters": 3765,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n%20de%20Fuego%20and%20Acatenango.jpg"
  },
  {
    "name": "Dykh-Tau",
    "heightMeters": 5204,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dykhtau.jpg"
  },
  {
    "name": "Mönch",
    "heightMeters": 4110,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/M%C3%B6nch%20depuis%20Niederhorn.jpg"
  },
  {
    "name": "Korab",
    "heightMeters": 2764,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Velky%20Korab%202011.jpg"
  },
  {
    "name": "Moldoveanu Peak",
    "heightMeters": 2544,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Varful-Moldoveanu-scenery.jpg"
  },
  {
    "name": "Monte San Giorgio",
    "heightMeters": 1097,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Lugano.jpg"
  },
  {
    "name": "Mount Lu",
    "heightMeters": 1474,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%BA%90%E5%B1%B1%E6%97%A5%E5%87%BA.JPG"
  },
  {
    "name": "Tungurahua volcano",
    "heightMeters": 5016,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n%20Tungurahua%20Riobamba%20-%20Ecuador.jpg"
  },
  {
    "name": "Ras Dashen",
    "heightMeters": 4533,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dejen%20misura%20da%20cima%20W.jpg"
  },
  {
    "name": "Ol Doinyo Lengai",
    "heightMeters": 2960,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lengai%20from%20Natron.jpg"
  },
  {
    "name": "Snæfellsjökull",
    "heightMeters": 1446,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sn%C3%A6fellsj%C3%B6kull%20in%20the%20Morning%20%287622876302%29%20%28cropped%29.jpg"
  },
  {
    "name": "Mount Yamantau",
    "heightMeters": 1640,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yamantau.JPG"
  },
  {
    "name": "Carrauntoohil",
    "heightMeters": 1038.6,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Carrauntoohil%202016.JPG"
  },
  {
    "name": "Corcovado",
    "heightMeters": 710,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rio%20Larson%201.jpg"
  },
  {
    "name": "Mount Bromo",
    "heightMeters": 2329,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Bromo%20closeup%20on%20sunrise%202.jpg"
  },
  {
    "name": "Pico Bolívar",
    "heightMeters": 4978,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PicoBolivarMerida.JPG"
  },
  {
    "name": "Montserrat",
    "heightMeters": 1236,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Montserrat%20-%20100.jpg"
  },
  {
    "name": "Lenin Peak",
    "heightMeters": 7134,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lenin%20peak%20from%20Sary-mogol.jpg"
  },
  {
    "name": "Rinjani",
    "heightMeters": 3726,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gunung%20Rinjani%20dari%20Jalur%20Sembalun.jpg"
  },
  {
    "name": "Mount Sanqing",
    "heightMeters": 1817,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/19190-SanQingShan%20%2845434925915%29.jpg"
  },
  {
    "name": "Mount Pilatus",
    "heightMeters": 2128,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pilatus%20%28mountain%29.JPG"
  },
  {
    "name": "Galeras",
    "heightMeters": 4276,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n%20Galeras%20%28cropped%29.jpg"
  },
  {
    "name": "Avachinsky",
    "heightMeters": 2741,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Koryaksky%20volcano%20Petropavlovsk-Kamchatsky%20oct-2005.jpg"
  },
  {
    "name": "Sulaiman-Too",
    "heightMeters": 1110,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A1%D1%83%D0%BB%D0%B0%D0%B9%D0%BC%D0%B0%D0%BD-%D0%A2%D0%BE%D0%BE%20%D1%81%20%D0%B4%D1%80%D0%BE%D0%BD%D0%B0.jpg"
  },
  {
    "name": "Colima",
    "heightMeters": 3850,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Colima%20Landsat%20image.jpg"
  },
  {
    "name": "Burkhan Khaldun",
    "heightMeters": 2450,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Burkhan%20Khaldun%20mount2.jpg"
  },
  {
    "name": "Dom",
    "heightMeters": 4546,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dom%20of%20Mischabel.jpg"
  },
  {
    "name": "Mount Fitz Roy",
    "heightMeters": 3406,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fitz%20Roy%202.jpg"
  },
  {
    "name": "Hoher Dachstein",
    "heightMeters": 2995,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ramsau%20am%20Dachstein%20-%20Dachsteins%C3%BCdwand%20%28c%29.JPG"
  },
  {
    "name": "Mount Elgon",
    "heightMeters": 4321,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20elgon%20topo.jpg"
  },
  {
    "name": "Mount Meru",
    "heightMeters": 4562.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Meru.jpg"
  },
  {
    "name": "Vitosha",
    "heightMeters": 2292,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sofia-vitosha-kempinski.jpg"
  },
  {
    "name": "Gran Paradiso",
    "heightMeters": 4061,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gran%20Paradiso.jpg"
  },
  {
    "name": "Mount Nebo",
    "heightMeters": 808,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Nebo%20BW%206.JPG"
  },
  {
    "name": "Monte Cassino",
    "heightMeters": 520,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Monte%20Cassino%20Abbey.jpg"
  },
  {
    "name": "Monte Perdido",
    "heightMeters": 3355,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cirque%20de%20Soaso%20et%20massif%20du%20Mont-Perdu.jpg"
  },
  {
    "name": "Pico da Neblina",
    "heightMeters": 2994,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pico%20da%20Neblina%20%28FAB%29.jpg"
  },
  {
    "name": "Phou Bia",
    "heightMeters": 2819,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PhouBia%20from%20Nam%20Ngum%20Lake.jpg"
  },
  {
    "name": "Mount Gerizim",
    "heightMeters": 881,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D7%A8%D7%9B%D7%A1%20%D7%94%D7%A8%20%D7%92%D7%A8%D7%99%D7%96%D7%99%D7%9D.jpg"
  },
  {
    "name": "Mount Saint Elias",
    "heightMeters": 5489,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt%20Saint%20Elias%2C%20South%20Central%20Alaska.jpg"
  },
  {
    "name": "Mount Shasta",
    "heightMeters": 4322,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/North%20face%20of%20Mount%20Shasta%20at%20sunset-2175.jpg"
  },
  {
    "name": "Pumori",
    "heightMeters": 7161,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pumori%2C%20Nepal%2C%20Asia.jpg"
  },
  {
    "name": "Finsteraarhorn",
    "heightMeters": 4274,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20image%20of%20Finsteraarhorn%20%28view%20from%20the%20south%29.jpg"
  },
  {
    "name": "Piz Bernina",
    "heightMeters": 4048,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bernina%20Sunrise.jpg"
  },
  {
    "name": "Gyachung Kang",
    "heightMeters": 7952,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gyachung%20Kang.jpg"
  },
  {
    "name": "Mount Helicon",
    "heightMeters": 1748,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/IMG%20View%20from%20Helicon.jpg"
  },
  {
    "name": "Mount Karisimbi",
    "heightMeters": 4507,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Karisimbi2.jpg"
  },
  {
    "name": "Muztagh Ata",
    "heightMeters": 7546,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Muztagh%20Ata%20Xinjiang%20China.jpg"
  },
  {
    "name": "Arenal Volcano",
    "heightMeters": 1670,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arenal%20volcano%20%2870785p%29%20%28cropped%29.jpg"
  },
  {
    "name": "Parinacota",
    "heightMeters": 6348,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Parinacota.jpg"
  },
  {
    "name": "Mount Pico",
    "heightMeters": 2351,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ilha%20do%20Pico%20vista%20da%20Faj%C3%A3%20Grande%2C%20Calheta%2C%20ilha%20de%20S%C3%A3o%20Jorge%2C%20A%C3%A7ores%2C%20Portugal.JPG"
  },
  {
    "name": "Aiguille du Midi",
    "heightMeters": 3842,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aiguille-du-Midi-summer.jpg"
  },
  {
    "name": "Jezercë",
    "heightMeters": 2694,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jezerski%20Vrh%20%282694%29%20sa%20Karanfila%20%282480%29.jpg"
  },
  {
    "name": "Shiveluch",
    "heightMeters": 3283,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Shiveluch.jpg"
  },
  {
    "name": "Coma Pedrosa",
    "heightMeters": 2942,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Comapedrosa01.jpg"
  },
  {
    "name": "Mount Ida",
    "heightMeters": 2456,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Landscape%20mountains%20Phaistos.jpg"
  },
  {
    "name": "Pico Cristóbal Colón",
    "heightMeters": 5775,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pico%20Cristobal%20Colon.jpg"
  },
  {
    "name": "Illimani",
    "heightMeters": 6438,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bolivia%20illimani.png"
  },
  {
    "name": "Brocken",
    "heightMeters": 1141.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Brocken-Gipfelbereich.jpg"
  },
  {
    "name": "Kongur Tagh",
    "heightMeters": 7649,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kongur%20south.jpg"
  },
  {
    "name": "Mount Wilhelm",
    "heightMeters": 4509,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Wilhelm.jpg"
  },
  {
    "name": "Mount Tahat",
    "heightMeters": 2908,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tahat%20matin.jpg"
  },
  {
    "name": "Hkakabo Razi",
    "heightMeters": 5881,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hkakabo%20Razi%20Burma%2029%20Sept%202015%20Landsat%208%20ETM%20%2B%20Channels%20654%20panchromatic%20sharpened.jpg"
  },
  {
    "name": "Ama Dablam",
    "heightMeters": 6814,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Himalayas%2C%20Ama%20Dablam%2C%20Nepal.jpg"
  },
  {
    "name": "Meron",
    "heightMeters": 1208,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Northern%20slope%20of%20Mount%20Meron.jpg"
  },
  {
    "name": "Mount Kumgang",
    "heightMeters": 1638,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/0438%20-%20Nordkorea%202015%20-%20Kumgang%20Gebirge%20-%20Kuryong%20Fasserfall%20%2822543108597%29.jpg"
  },
  {
    "name": "Sangay volcano",
    "heightMeters": 5230,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volcan-Sangay-Ecuador.jpg"
  },
  {
    "name": "Weisshorn",
    "heightMeters": 4505,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Weisshorn%20depuis%20Sorebois.jpg"
  },
  {
    "name": "Monte Pissis",
    "heightMeters": 6795,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Monte%20Pissis.jpg"
  },
  {
    "name": "Mount Baker",
    "heightMeters": 3286,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Baker%2022101.JPG"
  },
  {
    "name": "Novarupta",
    "heightMeters": 841,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Novarupta.jpg"
  },
  {
    "name": "Rakaposhi",
    "heightMeters": 7788,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Rakaposhi%20from%20Hunza%20valley.jpg"
  },
  {
    "name": "Gunnbjørn Fjeld",
    "heightMeters": 3694,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/GunnbjornFromAboveABC.jpg"
  },
  {
    "name": "Signal de Botrange",
    "heightMeters": 694.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Signal%20de%20Botrange%20-%20panoramio.jpg"
  },
  {
    "name": "Bárðarbunga",
    "heightMeters": 2010,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vatnaj%C3%B6kull.jpeg"
  },
  {
    "name": "La Soufrière",
    "heightMeters": 1220,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Soufriere.jpg"
  },
  {
    "name": "Nevado del Huila",
    "heightMeters": 5364,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nevado%20del%20Huila%20%285321495400%29.jpg"
  },
  {
    "name": "Mount Hiei",
    "heightMeters": 848.1,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sakura%20MtHiei.jpg"
  },
  {
    "name": "Maglić",
    "heightMeters": 2386,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Trnova%C4%8Dko%20jezero%2C%20Magli%C4%87.jpg"
  },
  {
    "name": "Masherbrum",
    "heightMeters": 7821,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Masherbrum.jpg"
  },
  {
    "name": "Gjeravica",
    "heightMeters": 2656,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%90eravica.jpg"
  },
  {
    "name": "Osorno",
    "heightMeters": 2652,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Petrohu%C3%A9%2C%202019%20%2810%29.jpg"
  },
  {
    "name": "Namcha Barwa",
    "heightMeters": 7782,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Namcha%20Barwa%20from%20the%20west.jpg"
  },
  {
    "name": "Mount Amiata",
    "heightMeters": 1738,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/UmbMonteAmiata.jpg"
  },
  {
    "name": "Kamet",
    "heightMeters": 7756,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kamet.jpg"
  },
  {
    "name": "Nuptse",
    "heightMeters": 7861,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nuptse%2C%20Nepal%2C%20Himalayas.jpg"
  },
  {
    "name": "Kelut",
    "heightMeters": 1731,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kelud%20eruption%202014%20ash%20in%20Yogyakarta.jpg"
  },
  {
    "name": "Viso",
    "heightMeters": 3841,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Monviso001.jpg"
  },
  {
    "name": "Mount Tongariro",
    "heightMeters": 1978,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tongariro%20from%20the%20air.jpg"
  },
  {
    "name": "Wildspitze",
    "heightMeters": 3768,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wildspitzefromtiefenbachkogel.JPG"
  },
  {
    "name": "Corno Grande",
    "heightMeters": 2912,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Corno%20grande%20da%20campo%20imperatore.jpg"
  },
  {
    "name": "Uludağ",
    "heightMeters": 2542,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Uludag.JPG"
  },
  {
    "name": "Mount Elbert",
    "heightMeters": 4401,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt.%20Elbert.jpg"
  },
  {
    "name": "Feldberg",
    "heightMeters": 1494.2,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Feldberg%20vom%20Schauinsland.jpg"
  },
  {
    "name": "Gasherbrum IV",
    "heightMeters": 7932,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gasherbrum%20IV.JPG"
  },
  {
    "name": "Villarrica Volcano",
    "heightMeters": 2850,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pucon-y-su-Volcan.jpg"
  },
  {
    "name": "Mount Song",
    "heightMeters": 1516,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Songshan.JPG"
  },
  {
    "name": "Maromokotro",
    "heightMeters": 2876,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Maromokotro.jpg"
  },
  {
    "name": "Acotango",
    "heightMeters": 6052,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Acotango.jpg"
  },
  {
    "name": "Mount Mitchell",
    "heightMeters": 2037,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Mitchell.jpg"
  },
  {
    "name": "Mount Hasan",
    "heightMeters": 3268,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vulkan%20Hasan%20Bagi.jpg"
  },
  {
    "name": "Cayambe",
    "heightMeters": 5790,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volcan%20Cayambe.JPG"
  },
  {
    "name": "Öræfajökull",
    "heightMeters": 2110,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%C3%96r%C3%A6faj%C3%B6kull%20-%20Mapillary%20%28520905752282052%29.jpg"
  },
  {
    "name": "Soufrière Hills",
    "heightMeters": 1050,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Soufriere%20Hills.jpg"
  },
  {
    "name": "Mount Richard-Molard",
    "heightMeters": 1752,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mont%20Nimba%20landscape.jpg"
  },
  {
    "name": "Sabalan",
    "heightMeters": 4811,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sab%20dalj1.JPG"
  },
  {
    "name": "Jabal al-Nour",
    "heightMeters": 642,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jabal%20Nur.JPG"
  },
  {
    "name": "Machhapuchhre",
    "heightMeters": 6993,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ghorepani-Tadapani-34-Machhapuchhre-2013-gje.jpg"
  },
  {
    "name": "Mount Terror",
    "heightMeters": 3230,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/ErebusTerror.jpg"
  },
  {
    "name": "Ambrym",
    "heightMeters": 1334,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Marum%20sept%202009.jpg"
  },
  {
    "name": "Aletschhorn",
    "heightMeters": 4194,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aletschhorn%20in%20snow.jpg"
  },
  {
    "name": "Misti",
    "heightMeters": 5825,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/El%20misti.jpg"
  },
  {
    "name": "Puyehue-Cordón Caulle",
    "heightMeters": 2236,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Puyehue%20Lake%20with%20Puyehue%20volcano%20in%20the%20background.jpg"
  },
  {
    "name": "Volcan Baru",
    "heightMeters": 3475,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volcan%20baru.jpg"
  },
  {
    "name": "Chaitén",
    "heightMeters": 1122,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chaiten%20Volcano%20NASA.jpg"
  },
  {
    "name": "Cerro Chirripó",
    "heightMeters": 3820,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Picture%201191.jpg"
  },
  {
    "name": "Pacaya",
    "heightMeters": 2552,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pacaya%20erupting%20in%201976.jpg"
  },
  {
    "name": "Lovćen",
    "heightMeters": 1749,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lovcen-008-p1010045.jpg"
  },
  {
    "name": "Cerro Torre",
    "heightMeters": 3128,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cerro%20torre%201987.jpg"
  },
  {
    "name": "Mount Hamiguitan",
    "heightMeters": 1620,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Hamiguitan%20peak.JPG"
  },
  {
    "name": "Le Morne Brabant",
    "heightMeters": 556,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Le%20Morne%20Peninsula%20in%20Mauritius%20%2853697779236%29.jpg"
  },
  {
    "name": "Gasherbrum III",
    "heightMeters": 7946,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gasherbrum2.jpg"
  },
  {
    "name": "Arashiyama",
    "heightMeters": 382,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Arashiyama%20%288741759830%29.jpg"
  },
  {
    "name": "Mount Fanjing",
    "heightMeters": 2570,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E6%A2%B5%E6%B7%A8%E5%B1%B1%E7%B4%85%E9%9B%B2%E9%87%91%E9%A0%82%EF%BC%88%E6%96%B0%E9%87%91%E9%A0%82%EF%BC%89.jpg"
  },
  {
    "name": "Victoria Peak",
    "heightMeters": 552,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/High%20West%20and%20Victoria%20Peak%20from%20Victoria%20Gap%20%28crop1%29.jpg"
  },
  {
    "name": "Smolikas",
    "heightMeters": 2637,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Smolikas%20IMG%200118.jpg"
  },
  {
    "name": "Slættaratindur",
    "heightMeters": 880,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sl%C3%A6ttaratindur%2C%20Faroe%20Islands.JPG"
  },
  {
    "name": "Jebel Shams",
    "heightMeters": 3018,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jebel%20Shams%20%282%29.jpg"
  },
  {
    "name": "Pichincha Volcano",
    "heightMeters": 4776,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rucu%20Pichincha%20and%20Trail.jpg"
  },
  {
    "name": "Half Dome",
    "heightMeters": 2693,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yosemite%2020%20bg%20090404.jpg"
  },
  {
    "name": "Grauspitz",
    "heightMeters": 2599,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Grauspitzen.JPG"
  },
  {
    "name": "Pelion",
    "heightMeters": 1543,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pilion%20with%20monastery%20pau.JPG"
  },
  {
    "name": "Mehetia",
    "heightMeters": 435,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mehetia-osnaburg.jpg"
  },
  {
    "name": "Mount Moco",
    "heightMeters": 2619,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Moco.JPG"
  },
  {
    "name": "Kriváň",
    "heightMeters": 2494,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kriv%C3%A1%C5%88.JPG"
  },
  {
    "name": "Kula Kangri",
    "heightMeters": 7538,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kula%20Kangri%20from%20Moenla%20Karchung%201933%C2%B7.jpg"
  },
  {
    "name": "Doi Inthanon",
    "heightMeters": 2565,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/InthanonChedi1.jpg"
  },
  {
    "name": "Pidurutalagala",
    "heightMeters": 2524,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/SL%20Nuwara%20Eliya%20asv2020-01%20img13%20Mount%20Pedro.jpg"
  },
  {
    "name": "Popa Hill",
    "heightMeters": 1518,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/20200217%20112000%20Mount%20Popa%20Mandalay%20Region%20Myanmar%20anagoria.JPG"
  },
  {
    "name": "Keli Mutubuurai",
    "heightMeters": 1639,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kelimutu%202007-07-21.jpg"
  },
  {
    "name": "Roman-Kosh",
    "heightMeters": 1545,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Roman-Kosh%20%28Crimea%29%20top2.jpg"
  },
  {
    "name": "Grandes Jorasses",
    "heightMeters": 4208,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/GrandesJorasses0001a.jpg"
  },
  {
    "name": "Janq'u Uma",
    "heightMeters": 6425,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bolivia%20Cordillera%20Real%20y%20Lago%20Titicaca.jpg"
  },
  {
    "name": "Llaima",
    "heightMeters": 3125,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Volc%C3%A1n%20Llaima%20y%20Laguna%20Conguill%C3%ADo%2C%20desde%20Sierra%20Nevada.jpg"
  },
  {
    "name": "Ushba",
    "heightMeters": 4737,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ushba%20summit.jpg"
  },
  {
    "name": "Bezymianny",
    "heightMeters": 2882,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bezymyannyi%20volcano.jpg"
  },
  {
    "name": "Incahuasi",
    "heightMeters": 6621,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Incahuasi%20and%20el%20fraile%20plus%20laguna%20verde%20chile.jpg"
  },
  {
    "name": "Mount Gongga",
    "heightMeters": 7556,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Minya%20Konka%20Northwest%20Ridge.JPG"
  },
  {
    "name": "Calbuco",
    "heightMeters": 2003,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/00%20126%202680%20Vulcano%20Calbuco%20-%20Chile.jpg"
  },
  {
    "name": "Chomolhari",
    "heightMeters": 7326,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bundesarchiv%20Bild%20135-KA-06-039%2C%20Tibetexpedition%2C%20Landschaftsaufnahme.jpg"
  },
  {
    "name": "Hüiten Peak",
    "heightMeters": 4374,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ukok%20Plateau%202.jpg"
  },
  {
    "name": "Cumbre Vieja",
    "heightMeters": 1944,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Plantation%20banana%20La%20Palma.jpg"
  },
  {
    "name": "Pico Turquino",
    "heightMeters": 1974,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/PicoTurquino.jpg"
  },
  {
    "name": "Scafell Pike",
    "heightMeters": 978,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Scafell%20Pike.JPG"
  },
  {
    "name": "Mawson Peak",
    "heightMeters": 2745,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Heard.jpg"
  },
  {
    "name": "Lyskamm",
    "heightMeters": 4532,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Liskamm%2001.jpg"
  },
  {
    "name": "Titlis",
    "heightMeters": 3238,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/.00%201069%20Engelberg%20-%20Titlis%20und%20F%C3%BCrenalb.jpg"
  },
  {
    "name": "Breithorn",
    "heightMeters": 4160,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Breithorn.jpg"
  },
  {
    "name": "Mount Washington",
    "heightMeters": 1917,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt.%20Washington%20from%20Bretton%20Woods.JPG"
  },
  {
    "name": "Großvenediger",
    "heightMeters": 3657,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gro%C3%9Fvenediger%20von%20Osten.jpg"
  },
  {
    "name": "Gunung Galunggung",
    "heightMeters": 2168,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Galunggung.jpg"
  },
  {
    "name": "Barren Island",
    "heightMeters": 353,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ile%20Barren%2C%201995.jpg"
  },
  {
    "name": "Kata Tjuta",
    "heightMeters": 1069,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kata%20Tjuta%20Australia.jpg"
  },
  {
    "name": "Krafla",
    "heightMeters": 818,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/KraflaViti.jpg"
  },
  {
    "name": "Kinyeti",
    "heightMeters": 3187,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sudan%20Kinyeti.jpg"
  },
  {
    "name": "Alpamayo",
    "heightMeters": 5947,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alpamayo.jpg"
  },
  {
    "name": "Mount Redoubt",
    "heightMeters": 3108,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MountRedoubt.jpg"
  },
  {
    "name": "Nemrut",
    "heightMeters": 3050,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Nemrut%20Vulcano.jpg"
  },
  {
    "name": "Lassen Peak",
    "heightMeters": 3189,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lassen%20Peak%20in%20June%202020.jpg"
  },
  {
    "name": "Kala Patthar",
    "heightMeters": 5645,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pumori%20and%20kalapathar.jpg"
  },
  {
    "name": "Tronador",
    "heightMeters": 3491,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Cerro%20tronador%20desde%20lago%20mascardi%2001b.jpg"
  },
  {
    "name": "Mount Bulusan",
    "heightMeters": 1565,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mt-Bulusan.jpg"
  },
  {
    "name": "Illampu",
    "heightMeters": 6485,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Illamp%C3%BA%20in%20May%202007%20%28Cody%20H%29.jpg"
  },
  {
    "name": "Genting Highlands",
    "heightMeters": 1800,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Chin%20Swee%20Caves%20Temple%20KL29.JPG"
  },
  {
    "name": "Himalchuli",
    "heightMeters": 7893,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Himalchuli%20from%20south.jpg"
  },
  {
    "name": "Mount Dajti",
    "heightMeters": 1613,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mali%20i%20Dajtit.jpg"
  },
  {
    "name": "Mount Robson",
    "heightMeters": 3954,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Robson%2008122005.jpg"
  },
  {
    "name": "Iremel",
    "heightMeters": 1586,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Iremel.jpg"
  },
  {
    "name": "Tianmen Mountain",
    "heightMeters": 1519,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tianmen%2038330-Zhangjiajie%20%2849047525877%29.jpg"
  },
  {
    "name": "Grand Combin",
    "heightMeters": 4309,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial%20image%20of%20Grand%20Combin%20%28view%20from%20the%20southwest%29.jpg"
  },
  {
    "name": "Bietschhorn",
    "heightMeters": 3934,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bietschhorn.jpg"
  },
  {
    "name": "Bălănești Hill",
    "heightMeters": 430,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dealul%20B%C4%83l%C4%83ne%C8%99ti%202.JPG"
  },
  {
    "name": "Schreckhorn",
    "heightMeters": 4078,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/00%203474%20Schreckhorn%20-%20Berner%20Alpen.jpg"
  },
  {
    "name": "Blue Mountain Peak",
    "heightMeters": 2256,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Blue%20Mountain%20Peak.jpg"
  },
  {
    "name": "Antsiferov Island",
    "heightMeters": 761,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Antsiferova%20-%20Landsat%207.jpg"
  },
  {
    "name": "Ortler",
    "heightMeters": 3905,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ortler0001.jpg"
  },
  {
    "name": "Großer Arber",
    "heightMeters": 1456,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Grosser-Arber-002.jpg"
  },
  {
    "name": "Hochkönig",
    "heightMeters": 2941,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hochk%C3%B6nig%202025%20%282%29.jpg"
  },
  {
    "name": "Mount Scenery",
    "heightMeters": 870,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Saba%20with%20cloud%20cover.jpg"
  },
  {
    "name": "Distaghil Sar",
    "heightMeters": 7885,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Distaghil%20ISS.JPG"
  },
  {
    "name": "Pikes Peak",
    "heightMeters": 4302,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pikes%20Peak%20by%20David%20Shankbone.jpg"
  },
  {
    "name": "Mount Ossa",
    "heightMeters": 1978,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kisavos%20%28Ossa%29%20mountain%2C%20Thessaly%2C%20Greece.jpg"
  },
  {
    "name": "Gauri Sankar",
    "heightMeters": 7134,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Gauri%20Shankar.jpg"
  },
  {
    "name": "Volcán Wolf",
    "heightMeters": 1707,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wolf%20volcano.jpg"
  }
];
