// Static snapshot of average hotel price per night by U.S. city, compiled 2026-09-23 from a
// single source: Engine.com's "Average Hotel Prices in 50 U.S. Cities" index
// (engine.com/data/hotel-prices), the same single-aggregator discipline used for Rent Check's
// city rent data. Images come from Wikipedia's summary API thumbnail for each city.
//
// This dataset originated as "Price Per Night" -- the app's original pitch was "see a hotel or
// Airbnb interior, guess the nightly rate" for one specific listing, which needs a live
// listings API (a hotel booking platform) this app doesn't have access to. Reframed the same
// way Rent Check was: instead of one unverifiable listing, show a recognizable city paired with
// its published average rate.
//
// Deliberately kept to U.S. cities only, unlike Rent Check's global city list -- Engine.com's
// index only covers the U.S., and rather than splice in a second aggregator's figures for
// international cities (which would reintroduce the exact cross-source inconsistency problem
// Rent Check's header warns about), this dataset stays within the one source's full 50-city
// list. All 50 cities the index publishes are included here, not a curated subset, so the
// dataset is exactly as complete as its source.
//
// Hotel rates are seasonal and shift with travel demand faster than most of this app's other
// price data -- treat this as a snapshot of Engine.com's 2026 index, not a permanent ranking.
// Baked in statically like the other datasets here; to refresh, re-fetch the same index page
// rather than mixing in a different hotel-price source.

export interface PricePerNightData {
  city: string;
  price: number;
  imageUrl: string;
}

export const PRICE_PER_NIGHT: PricePerNightData[] = [
  {
    "city": "New York City",
    "price": 336,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/330px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Boston",
    "price": 311,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/ISH_WC_Boston4.jpg/330px-ISH_WC_Boston4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Washington, D.C.",
    "price": 252,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/12-07-13-washington-by-RalfR-08.jpg/330px-12-07-13-washington-by-RalfR-08.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Chicago",
    "price": 233,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Chicago_River_ferry_b.jpg/330px-Chicago_River_ferry_b.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Palm Springs, California",
    "price": 229,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Palm_Springs_from_the_Museum_Trail.jpg/330px-Palm_Springs_from_the_Museum_Trail.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Philadelphia",
    "price": 205,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Philadelphia_skyline_20240528_%28cropped_2-1%29.jpg/330px-Philadelphia_skyline_20240528_%28cropped_2-1%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Seattle",
    "price": 204,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Seattle_Center_as_night_falls.jpg/330px-Seattle_Center_as_night_falls.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "San Diego",
    "price": 198,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/La_Jolla_Shores_view_%28cropped%29.jpg/330px-La_Jolla_Shores_view_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Detroit",
    "price": 193,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Detroit_Skyline_from_Windsor_2025-09-01.jpg/330px-Detroit_Skyline_from_Windsor_2025-09-01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Miami",
    "price": 191,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Villa_Vizcaya_20110228.jpg/330px-Villa_Vizcaya_20110228.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Honolulu",
    "price": 189,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/2022_Views_from_Diamond_Head_02.jpg/330px-2022_Views_from_Diamond_Head_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Nashville, Tennessee",
    "price": 188,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Nashville%2C_Tennessee_%28cropped%29.jpg/330px-Nashville%2C_Tennessee_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "New Orleans",
    "price": 173,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/New_Orleans_from_the_Air_September_2019_-_Central_Business_District_Skyline_%28cropped%29.jpg/330px-New_Orleans_from_the_Air_September_2019_-_Central_Business_District_Skyline_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Tampa, Florida",
    "price": 173,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Downtown_Tampa%2C_Florida.jpg/330px-Downtown_Tampa%2C_Florida.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Charleston, South Carolina",
    "price": 171,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/East_Battery_Street_Charleston_Aug2010.jpg/330px-East_Battery_Street_Charleston_Aug2010.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Los Angeles",
    "price": 169,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Hollywood_sign_%288485145044%29.jpg/330px-Hollywood_sign_%288485145044%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Denver",
    "price": 166,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Denver%2C_Colorado_skyline_%28cropped_3x5%29.jpg/330px-Denver%2C_Colorado_skyline_%28cropped_3x5%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "San Francisco",
    "price": 165,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Zeppelin-ride-020100925-195_%285029394846%29.jpg/330px-Zeppelin-ride-020100925-195_%285029394846%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Austin, Texas",
    "price": 161,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Skyline_of_Austin%2C_Texas_%28cropped%29.jpg/330px-Skyline_of_Austin%2C_Texas_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Pittsburgh",
    "price": 158,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Ascending_the_Duquesne_Incline.jpg/330px-Ascending_the_Duquesne_Incline.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Phoenix, Arizona",
    "price": 154,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/330px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Cleveland",
    "price": 152,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Cleveland_skyline_from_Lakewood_Park%2C_January_2026.jpg/330px-Cleveland_skyline_from_Lakewood_Park%2C_January_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Las Vegas",
    "price": 151,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Las_Vegas_from_above_%2840064746644%29.jpg/330px-Las_Vegas_from_above_%2840064746644%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "St. Louis",
    "price": 151,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Runner_Fountain_and_Old_Courthouse_and_Arch_%285618845531%29.jpg/330px-Runner_Fountain_and_Old_Courthouse_and_Arch_%285618845531%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Sacramento, California",
    "price": 150,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Sacramento%2C_CA_skyline_%28cropped%29.jpg/330px-Sacramento%2C_CA_skyline_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Atlanta",
    "price": 146,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/A2ATL20250614-0721_%28cropped%29.jpg/330px-A2ATL20250614-0721_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Salt Lake City",
    "price": 138,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/SLC_Skyline_2024.jpg/330px-SLC_Skyline_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Savannah, Georgia",
    "price": 138,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Savannah.tif/lossy-page1-330px-Savannah.tif.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Kansas City, Missouri",
    "price": 137,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Kansas_City_-_Downtown_-_panoramio_%2815%29.jpg/330px-Kansas_City_-_Downtown_-_panoramio_%2815%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Houston",
    "price": 136,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Texas_medical_center.jpg/330px-Texas_medical_center.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Norfolk, Virginia",
    "price": 136,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/The_Wisconsin_Battleship_in_Norfolk%2C_VA.jpg/330px-The_Wisconsin_Battleship_in_Norfolk%2C_VA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Baltimore",
    "price": 135,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Fell%27s_Point_Aerial_2022.jpg/330px-Fell%27s_Point_Aerial_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Raleigh, North Carolina",
    "price": 134,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Raleigh_Skyline.jpg/330px-Raleigh_Skyline.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Louisville, Kentucky",
    "price": 132,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Louisville_Skyline_2021_%283%29.jpg/330px-Louisville_Skyline_2021_%283%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Milwaukee",
    "price": 132,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Milwaukee_Skyline_w_New_NW_Mutual_Building_2025_by_Isaac_Rowlett.jpg/330px-Milwaukee_Skyline_w_New_NW_Mutual_Building_2025_by_Isaac_Rowlett.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Minneapolis",
    "price": 132,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Minneapolis_Skyline_looking_south.jpg/330px-Minneapolis_Skyline_looking_south.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Charlotte, North Carolina",
    "price": 131,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg/330px-Uptown_Charlotte_2018_taking_by_DJI_Phantom_4_pro.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Albuquerque, New Mexico",
    "price": 130,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Albuquerque%2C_New_Mexico_skyline.jpg/330px-Albuquerque%2C_New_Mexico_skyline.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Indianapolis",
    "price": 128,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Indianapolis-1872529_1920_%28cropped%29.jpg/330px-Indianapolis-1872529_1920_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Cincinnati",
    "price": 127,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Downtown_Cincinnati_viewed_from_Devou_Park_%28cropped%29.jpg/330px-Downtown_Cincinnati_viewed_from_Devou_Park_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Dallas",
    "price": 125,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Dallas_Texas_skyline_from_Reunion_Tower_September_2025_%28cropped%29.png/330px-Dallas_Texas_skyline_from_Reunion_Tower_September_2025_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "El Paso, Texas",
    "price": 124,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/El_Paso_Cityscape_%28cropped%29.jpg/330px-El_Paso_Cityscape_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Orlando, Florida",
    "price": 124,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Orlando%2C_Florida_%28cropped%29.jpg/330px-Orlando%2C_Florida_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Portland, Oregon",
    "price": 124,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Portland_Oregon_Aerial%2C_June_2025.jpg/330px-Portland_Oregon_Aerial%2C_June_2025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Columbus, Ohio",
    "price": 123,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Downtown_Columbus_View_from_Main_St_Bridge_-_edit1.jpg/330px-Downtown_Columbus_View_from_Main_St_Bridge_-_edit1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Jacksonville, Florida",
    "price": 122,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Jacksonville_skyline.jpg/330px-Jacksonville_skyline.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Memphis, Tennessee",
    "price": 116,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Skyline_of_Memphis%2C_TN.jpg/330px-Skyline_of_Memphis%2C_TN.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Omaha, Nebraska",
    "price": 115,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/City_of_Omaha%2C_Nebraska_Skyline_on_the_Missouri_River_%2830899969517%29.jpg/330px-City_of_Omaha%2C_Nebraska_Skyline_on_the_Missouri_River_%2830899969517%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "San Antonio",
    "price": 114,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/San_Antonio_Botanical_Garden_Overlook_View.jpg/330px-San_Antonio_Botanical_Garden_Overlook_View.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "city": "Oklahoma City",
    "price": 97,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Oklahoma_city_downtown.JPG/330px-Oklahoma_city_downtown.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  }
];
