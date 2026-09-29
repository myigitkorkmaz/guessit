// Static snapshot of net worth data from Wikidata (query.wikidata.org/sparql), fetched
// 2026-09-13. Sourced via SPARQL: items with a 'net worth' (P2218) statement denominated in
// United States dollar (to avoid mixing currencies), a Wikimedia Commons image (P18), and more
// than 25 Wikipedia sitelinks (a recognizability filter). Where a person had multiple P2218
// statements at different points in time (P585 qualifier), only the most recent one was kept.
//
// Known limitation: most of these figures come from a single bulk Forbes-list import into
// Wikidata and are frozen at whatever year that snapshot was taken (many read 2019), not
// updated live -- a few names show much more current figures (Elon Musk, Jensen Huang, Tim
// Cook) simply because their Wikidata statement happened to be refreshed more recently. The
// game surfaces the reported year on the reveal screen so this is transparent rather than
// presented as 'today's net worth.' This is a real limitation of a static-snapshot approach,
// consistent with how every other Wikidata-sourced dataset in this app works.
//
// Two entries were removed after spot-checking: 'John D. Rockefeller' (Wikidata gave $0.66B
// 'as of 2007', seven decades after his 1937 death -- an internally incoherent figure, not a
// real reported net worth) and Jeffrey Epstein (excluded on judgment -- his public notability is
// for child sex trafficking crimes, not business, and a 'guess how rich they are' framing for
// that specific person felt like the wrong kind of trivia regardless of data accuracy).
//
// Baked in statically like the other datasets here. To refresh, re-run the same SPARQL query
// pattern against query.wikidata.org/sparql.

export interface NetWorthData {
  name: string;
  netWorth: number;
  asOfYear: number;
  imageUrl: string;
}

export const NET_WORTHS: NetWorthData[] = [
  {
    "name": "Elon Musk",
    "netWorth": 790000000000,
    "asOfYear": 2026,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Elon%20Musk%20%2854816836217%29%20%28cropped%202%29%20%28b%29.jpg"
  },
  {
    "name": "Bernard Arnault",
    "netWorth": 207800000000,
    "asOfYear": 2024,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bernard%20Arnault%20%283%29%20-%202017%20%28cropped%29.jpg"
  },
  {
    "name": "Jeff Bezos",
    "netWorth": 204600000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jeff%20Bezos%20at%20Amazon%20Spheres%20Grand%20Opening%20in%20Seattle%20-%202018%20%2839074799225%29%20%28cropped%29.jpg"
  },
  {
    "name": "Jensen Huang",
    "netWorth": 151000000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jen-Hsun%20Huang%202025.jpg"
  },
  {
    "name": "Warren Buffett",
    "netWorth": 117200000000,
    "asOfYear": 2023,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Warren%20Buffett%20KU%20Visit.jpg"
  },
  {
    "name": "Bill Gates",
    "netWorth": 96500000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bill%20Gates%20at%20the%20European%20Commission%20-%202025%20-%20P067383-987995%20%28cropped%29.jpg"
  },
  {
    "name": "Mukesh Ambani",
    "netWorth": 83600000000,
    "asOfYear": 2023,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mukesh%20Ambani.jpg"
  },
  {
    "name": "Changpeng Zhao",
    "netWorth": 78800000000,
    "asOfYear": 2026,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Changpeng%20Zhao%20in%202022.jpg"
  },
  {
    "name": "Mark Zuckerberg",
    "netWorth": 69800000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mark%20Zuckerberg%20F8%202019%20Keynote%20%2832830578717%29%20%28cropped%29.jpg"
  },
  {
    "name": "Larry Ellison",
    "netWorth": 62500000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Larry%20Ellison%20picture.png"
  },
  {
    "name": "MacKenzie Scott",
    "netWorth": 59400000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MacKenzie%20Scott.jpg"
  },
  {
    "name": "Ingvar Kamprad",
    "netWorth": 58700000000,
    "asOfYear": 2018,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ingvar%20Kamprad%20%28cropped%29.jpg"
  },
  {
    "name": "Michael Bloomberg",
    "netWorth": 55500000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mike%20Bloomberg%20Headshot.jpg"
  },
  {
    "name": "Steve Ballmer",
    "netWorth": 51900000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Steve%20ballmer%202007%20outdoors2.jpg"
  },
  {
    "name": "Larry Page",
    "netWorth": 50800000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Larry%20Page%20in%20the%20European%20Parliament%2C%2017.06.2009.jpg"
  },
  {
    "name": "Charles Koch",
    "netWorth": 50500000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Charles%20Koch%20portrait%20%28cropped%29.jpg"
  },
  {
    "name": "David Koch",
    "netWorth": 50500000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/David%20Koch%20by%20Gage%20Skidmore.jpg"
  },
  {
    "name": "Sergey Brin",
    "netWorth": 49800000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sergey%20Brin%20Ted%202010%20%28cropped%29.jpg"
  },
  {
    "name": "Carlos Slim",
    "netWorth": 48000000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Carlos%20Slim%20%2845680472234%29%20%28cropped%29.jpg"
  },
  {
    "name": "Gautam Adani",
    "netWorth": 47100000000,
    "asOfYear": 2023,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gautam%20Adani.jpg"
  },
  {
    "name": "Jim Walton",
    "netWorth": 44600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jim%20Walton%20attends%20shareholders%20meeting.jpg"
  },
  {
    "name": "Alice Walton",
    "netWorth": 44400000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alice%20Walton%20portrait%20%28cropped%29.jpg"
  },
  {
    "name": "S. Robson Walton",
    "netWorth": 44300000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/S.%20Robson%20Walton.jpg"
  },
  {
    "name": "Phil Knight",
    "netWorth": 40800000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Philknightfootball.jpg"
  },
  {
    "name": "Ma Huateng",
    "netWorth": 38800000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E9%A9%AC%E5%8C%96%E8%85%BE%20Pony%20Ma%202019.jpg"
  },
  {
    "name": "Michael Dell",
    "netWorth": 37600000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Michael%20Dell%202010.jpg"
  },
  {
    "name": "Jack Ma",
    "netWorth": 37300000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Enabling%20eCommerce-%20Small%20Enterprises%2C%20Global%20Players%20%2839008130265%29%20%28cropped%29.jpg"
  },
  {
    "name": "Sheldon Adelson",
    "netWorth": 34800000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sheldon%20Adelson%202019%20%281%29.jpg"
  },
  {
    "name": "Li Ka-shing",
    "netWorth": 31700000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Li%20Ka%20Shing.jpg"
  },
  {
    "name": "François Pinault",
    "netWorth": 29700000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Fran%C3%A7ois%20Pinault%20Stade%20rennais%20-%20Le%20Havre%20AC%2020150708%2044.jpg"
  },
  {
    "name": "Melinda Gates",
    "netWorth": 29000000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Melinda%20Gates%20-%20World%20Economic%20Forum%20Annual%20Meeting%202011.jpg"
  },
  {
    "name": "Peter Thiel",
    "netWorth": 23900000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Peter%20Thiel%20by%20Gage%20Skidmore.jpg"
  },
  {
    "name": "Gina Rinehart",
    "netWorth": 23600000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gina%20Rinehart%20June%202015.jpg"
  },
  {
    "name": "Jim Simons",
    "netWorth": 23500000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jim%20Simons%20at%20MSRI.jpg"
  },
  {
    "name": "Azim Premji",
    "netWorth": 22600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Azim%20Premji%20-%20World%20Economic%20Forum%20Annual%20Meeting%20Davos%202009%20%28crop%29.jpg"
  },
  {
    "name": "Masayoshi Son",
    "netWorth": 21600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Masayoshi%20Son%20%28P066533-522034%2C%20cropped%29.jpg"
  },
  {
    "name": "Vladimir Lisin",
    "netWorth": 21300000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vladimir%20Lisin.jpg"
  },
  {
    "name": "Susanne Klatten",
    "netWorth": 21000000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Susanne%20Klatten%202017.jpg"
  },
  {
    "name": "Vagit Alekperov",
    "netWorth": 20700000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vagit%20Alekperov2011.jpg"
  },
  {
    "name": "Alexei Mordashov",
    "netWorth": 20500000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alexey%20Mordashov%2C%202018.jpg"
  },
  {
    "name": "Dietrich Mateschitz",
    "netWorth": 18900000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Dietrich%20Mateschitz%20Painting%20Collage%20By%20Danor%20Shtruzman.jpg"
  },
  {
    "name": "Laurene Powell Jobs",
    "netWorth": 18600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Laurene%20Powell%20Jobs.jpg"
  },
  {
    "name": "Vladimir Potanin",
    "netWorth": 18100000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Vladimir%20Potanin.jpg"
  },
  {
    "name": "Lee Kun-hee",
    "netWorth": 16900000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lee%20Kun-Hee.jpg"
  },
  {
    "name": "Jan Koum",
    "netWorth": 16100000000,
    "asOfYear": 2024,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jan%20Koum%20-%20Whatsapp%20-%204%20Years%20from%20Now%20%2812791847664%29.jpg"
  },
  {
    "name": "Abigail Johnson",
    "netWorth": 15600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Abigail%20Johnson%20at%20Village%20Global%20%28cropped%29.jpg"
  },
  {
    "name": "Alwaleed Bin Talal Bin Abdulaziz Al Saud",
    "netWorth": 15500000000,
    "asOfYear": 2022,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Waleed%20bin%20Talal%202015.jpg"
  },
  {
    "name": "Mikhail Fridman",
    "netWorth": 15000000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%A4%D1%80%D0%B8%D0%B4%D0%BC%D0%B0%D0%BD%20%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%20%D0%9C%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D0%B8%D1%87%20%28cropped%29.jpg"
  },
  {
    "name": "Ray Dalio",
    "netWorth": 14000000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Web%20Summit%202018%20-%20Forum%20-%20Day%202%2C%20November%207%20HM1%207481%20%2844858045925%29.jpg"
  },
  {
    "name": "Lakshmi Mittal",
    "netWorth": 13600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Lakshmi%20Mittal%20LM.jpg"
  },
  {
    "name": "Aliko Dangote",
    "netWorth": 13500000000,
    "asOfYear": 2023,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Shabani%20at%20the%20acquisition%20of%20Dangote%20Cement%20by%20ICD%20in%202014%20%28cropped%29.jpg"
  },
  {
    "name": "Eric Schmidt",
    "netWorth": 12900000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eric%20E%20Schmidt%2C%202005%20%28looking%20left%29.jpg"
  },
  {
    "name": "Ralph Lauren",
    "netWorth": 12700000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ralph%20Lauren%202013.jpg"
  },
  {
    "name": "Alisher Usmanov",
    "netWorth": 12600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Alisher%20Usmanov%20podium%202013%20Fencing%20WCH%20SMS-IN%20t204812.jpg"
  },
  {
    "name": "Roman Abramovich",
    "netWorth": 12400000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Abramovich%20Chukotka%20%28cropped%29.jpg"
  },
  {
    "name": "Pierre Omidyar",
    "netWorth": 11400000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Pomidyarji%20%28cropped%29.jpg"
  },
  {
    "name": "Dustin Moskovitz",
    "netWorth": 11100000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Web%20Summit%202017%20-%20Centre%20Stage%20Day%202%20DF2%205495%20%2824396886968%29.jpg"
  },
  {
    "name": "Mikhail Prokhorov",
    "netWorth": 9800000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Mikhail%20Prokhorov%20IF%2009-2013%20%28cropped%29.jpg"
  },
  {
    "name": "Gordon Moore",
    "netWorth": 9700000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rajiv%20L%20Gupta%20George%20Barclay%20Gordon%20Moore%20ID2004%20%28cropped%2C%20Moore%29.JPG"
  },
  {
    "name": "Eduardo Saverin",
    "netWorth": 9700000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Eduardo%20Saverin%20CHINICT.JPG"
  },
  {
    "name": "Viktor Vekselberg",
    "netWorth": 9700000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vekselberg%20viktor%20feliksovich.jpg"
  },
  {
    "name": "Lei Jun",
    "netWorth": 9600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/%E9%9B%B7%E5%86%9B%20Lei%20Jun%2020240425%201.jpg"
  },
  {
    "name": "Robin Li",
    "netWorth": 9600000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Robin%20Li%20%282020%29.png"
  },
  {
    "name": "Gabe Newell",
    "netWorth": 9500000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Gabe%20Newell%20GDC%202010%20%28cropped%202%29.jpg"
  },
  {
    "name": "George Soros",
    "netWorth": 8600000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/George%20Soros%20-%20May%2031%2C%202017.jpg"
  },
  {
    "name": "Giorgio Armani",
    "netWorth": 8500000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/GiorgioArmani.jpg"
  },
  {
    "name": "Charles Simonyi",
    "netWorth": 8400000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Charles%20simonyi.jpg"
  },
  {
    "name": "David Geffen",
    "netWorth": 7800000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/David%20Geffen.jpg"
  },
  {
    "name": "Rupert Murdoch",
    "netWorth": 7170000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rupert%20Murdoch%20-%20Flickr%20-%20Eva%20Rinaldi%20Celebrity%20and%20Live%20Music%20Photographer.jpg"
  },
  {
    "name": "Steven Spielberg",
    "netWorth": 7100000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Steven%20Spielberg%202025.jpg"
  },
  {
    "name": "David Baszucki",
    "netWorth": 7000000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/David%20Baszucki%20in%202021.jpg"
  },
  {
    "name": "Jack Dorsey",
    "netWorth": 6700000000,
    "asOfYear": 2022,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jack%20Dorsey%202014.jpg"
  },
  {
    "name": "Rinat Akhmetov",
    "netWorth": 6591000000,
    "asOfYear": 2023,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Rinat%20Akhmetov2013.jpg"
  },
  {
    "name": "Reed Hastings",
    "netWorth": 6300000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Reed%20Hastings%2C%20Web%202.0%20Conference.jpg"
  },
  {
    "name": "George Lucas",
    "netWorth": 5000000000,
    "asOfYear": 2017,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/George%20Lucas%202024.jpg"
  },
  {
    "name": "Vichai Srivaddhanaprabha",
    "netWorth": 4900000000,
    "asOfYear": 2018,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vichai%20Raksriaksorn%202007.jpg"
  },
  {
    "name": "Ronald Lauder",
    "netWorth": 4900000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ronald%20S%20Lauder%20-%20Rally%20against%20anti-Semitism%20-%20Berlin%2014%20September%202014%20-%201%20-%20c%20MichaelThaidigsmann%20%28cropped%29.jpg"
  },
  {
    "name": "Oleg Deripaska",
    "netWorth": 4500000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Deripaska%20Oleg%20September%202020%20%28cropped%29.jpg"
  },
  {
    "name": "Howard Schultz",
    "netWorth": 4200000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Howard%20Schultz%20by%20Gage%20Skidmore.jpg"
  },
  {
    "name": "Penny Pritzker",
    "netWorth": 4200000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Penny%20Pritzker%20official%20portrait.jpg"
  },
  {
    "name": "Ross Perot",
    "netWorth": 4100000000,
    "asOfYear": 2017,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Ross%20Perot.jpg"
  },
  {
    "name": "Meg Whitman",
    "netWorth": 4100000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Meg%20Whitman%2C%20U.S.%20Ambassador.jpg"
  },
  {
    "name": "Adnan Khashoggi",
    "netWorth": 4000000000,
    "asOfYear": 1980,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/AdnanKhashoggi06%20%28cropped%29.JPG"
  },
  {
    "name": "JB Pritzker",
    "netWorth": 3900000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/J.B.%20Pritzker%20April%202023.jpg"
  },
  {
    "name": "Michael Jordan",
    "netWorth": 3800000000,
    "asOfYear": 2025,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Michael%20Jordan%20in%202014.jpg"
  },
  {
    "name": "David Filo",
    "netWorth": 3400000000,
    "asOfYear": 2017,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/David%20Filo.jpg"
  },
  {
    "name": "Anil Ambani",
    "netWorth": 3400000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Anil%20Ambani%2C%202012%20%28cropped%29.jpg"
  },
  {
    "name": "Mark Cuban",
    "netWorth": 3000000000,
    "asOfYear": 2015,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/MarkCuban2023.jpg"
  },
  {
    "name": "Bernie Ecclestone",
    "netWorth": 2900000000,
    "asOfYear": 2017,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Bernie%20Ecclestone%2C%20S%C3%A3o%20Paulo%202022%20%2852498924277%29%20%28cropped%29.jpg"
  },
  {
    "name": "Tim Cook",
    "netWorth": 2800000000,
    "asOfYear": 2026,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tim%20Cook%20March%202026%20%28cropped%29.jpg"
  },
  {
    "name": "Hiro Matsushita",
    "netWorth": 2701000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Hiro%20Matsushita%20during%202000s.jpg"
  },
  {
    "name": "Pavel Durov",
    "netWorth": 2700000000,
    "asOfYear": 2019,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/TechCrunch%20Disrupt%20Europe%20Berlin%202013%20%2810536888854%29%20%28cropped%29.jpg"
  },
  {
    "name": "Donald Trump",
    "netWorth": 2500000000,
    "asOfYear": 2022,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Official%20Presidential%20Portrait%20of%20President%20Donald%20J.%20Trump%20%282025%29.jpg"
  },
  {
    "name": "Wilbur L. Ross Jr.",
    "netWorth": 2500000000,
    "asOfYear": 2017,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Wilbur%20Ross%20Official%20Portrait.jpg"
  },
  {
    "name": "Victor Pinchuk",
    "netWorth": 2500000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Viktor%20Pinchuk%202022.jpg"
  },
  {
    "name": "Yusaku Maezawa",
    "netWorth": 2000000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Yusaku%20Maezawa%20%28cropped%29.jpg"
  },
  {
    "name": "Jerry Yang",
    "netWorth": 1800000000,
    "asOfYear": 2015,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Jerry%20yang%202010%284555102908%29.jpg"
  },
  {
    "name": "Aziz Akhannouch",
    "netWorth": 1700000000,
    "asOfYear": 2024,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aziz%20Akhannouch%2C%20Joe%20Biden%2C%20Jill%20Biden%20%28cropped%29.jpg"
  },
  {
    "name": "Petro Poroshenko",
    "netWorth": 1600000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Official%20portrait%20of%20Petro%20Poroshenko.jpg"
  },
  {
    "name": "Toto Wolff",
    "netWorth": 1600000000,
    "asOfYear": 2023,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Toto%20Wolff%202014.jpg"
  },
  {
    "name": "Sundar Pichai",
    "netWorth": 1300000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sundar%20Pichai%20-%202023%20%28cropped%29.jpg"
  },
  {
    "name": "Sara Blakely",
    "netWorth": 1040000000,
    "asOfYear": 2017,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Sara%20Blakely%202012%20Shankbone.JPG"
  },
  {
    "name": "Bhumibol Adulyadej",
    "netWorth": 1000000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Aankomst%20Koning%20Bhumibol%20en%20Koningin%20Sirikit%20te%20Den%20Haag%2C%20Koning%20Bhumibol%2C%20Bestanddeelnr%20911-6993%20%28cropped%29%282%29.jpg"
  },
  {
    "name": "Vivek Ramaswamy",
    "netWorth": 950000000,
    "asOfYear": 2023,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vivek%20Ramaswamy%20%2855241367373%29%20%28cropped%29.jpg"
  },
  {
    "name": "David Copperfield",
    "netWorth": 800000000,
    "asOfYear": 2013,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/David%20Copperfield%20%28by%20Homer%20Liwag%3B%202014%29%2002.jpg"
  },
  {
    "name": "Marissa Mayer",
    "netWorth": 800000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/TechCrunch%20SF%202013%204S2A3709%20Marissa%20Mayer.jpg"
  },
  {
    "name": "Tony Fernandes",
    "netWorth": 745000000,
    "asOfYear": 2018,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Tony%20Fernandes.jpg"
  },
  {
    "name": "Serhiy Tihipko",
    "netWorth": 730000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Vice%20Prime%20Minister%20of%20Ukraine%20Sergei%20Tigipko%20%282012%29%20%28cropped%29.jpg"
  },
  {
    "name": "Kylie Jenner",
    "netWorth": 700000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Kylie%20Jenner1%20%28cropped%29.png"
  },
  {
    "name": "Viktor Medvedchuk",
    "netWorth": 620000000,
    "asOfYear": 2021,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Medvedchuk%20in%20Duma.jpg"
  },
  {
    "name": "Tyler Perry",
    "netWorth": 600000000,
    "asOfYear": 2017,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/TylerPerry-byPhilipRomano.jpg"
  },
  {
    "name": "Madonna",
    "netWorth": 550000000,
    "asOfYear": 2020,
    "imageUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Madonna%20Rebel%20Heart%20Tour%202015%20-%20Stockholm%20%2823051472299%29%20%28cropped%29.jpg"
  }
];
