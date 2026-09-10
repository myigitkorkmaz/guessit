// Static snapshot of TMDB TV show data (api.themoviedb.org), fetched 2026-09-10.
// Sourced from /discover/tv sorted by vote_count.desc (a strong proxy for "widely recognized"),
// then detail-fetched for exact episode counts. Baked in statically rather than fetched live per
// round — same reasoning as the Population Guess dataset: no runtime API dependency, instant
// loads, no risk of rate limits. Caveat this dataset doesn't share with countries: episode counts
// for STILL-AIRING shows drift as new episodes air, so this needs periodic refreshing to stay
// accurate (ended/cancelled shows are permanently correct). To refresh, re-run the fetch against
// api.themoviedb.org/3/discover/tv + /3/tv/{id} with a valid API key and re-apply the same filters.
//
// Attribution required by TMDB's terms of use — see the notice rendered on the game page itself,
// do not remove it.

export interface TvShowData {
  name: string;
  tmdbId: number;
  posterUrl: string;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  genres: string[];
  firstAirYear: string | null;
  status: string;
}

export const TV_SHOWS: TvShowData[] = [
  {
    "name": "Game of Thrones",
    "tmdbId": 1399,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    "numberOfEpisodes": 73,
    "numberOfSeasons": 8,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Stranger Things",
    "tmdbId": 66732,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    "numberOfEpisodes": 42,
    "numberOfSeasons": 5,
    "genres": [
      "Action & Adventure",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "Money Heist",
    "tmdbId": 71446,
    "posterUrl": "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    "numberOfEpisodes": 41,
    "numberOfSeasons": 3,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Breaking Bad",
    "tmdbId": 1396,
    "posterUrl": "https://image.tmdb.org/t/p/w500/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
    "numberOfEpisodes": 62,
    "numberOfSeasons": 5,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2008",
    "status": "Ended"
  },
  {
    "name": "The Walking Dead",
    "tmdbId": 1402,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ng3cMtxYKt1OSQYqFlnKWnVsqNO.jpg",
    "numberOfEpisodes": 177,
    "numberOfSeasons": 11,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Squid Game",
    "tmdbId": 93405,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",
    "numberOfEpisodes": 22,
    "numberOfSeasons": 3,
    "genres": [
      "Action & Adventure",
      "Mystery",
      "Drama"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "Lucifer",
    "tmdbId": 63174,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    "numberOfEpisodes": 93,
    "numberOfSeasons": 6,
    "genres": [
      "Crime",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "Riverdale",
    "tmdbId": 69050,
    "posterUrl": "https://image.tmdb.org/t/p/w500/d8mmn9thQ5dBk2qbv6BCqGUXWK3.jpg",
    "numberOfEpisodes": 137,
    "numberOfSeasons": 7,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "The Boys",
    "tmdbId": 76479,
    "posterUrl": "https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
    "numberOfEpisodes": 40,
    "numberOfSeasons": 5,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "The Good Doctor",
    "tmdbId": 71712,
    "posterUrl": "https://image.tmdb.org/t/p/w500/luhKkdD80qe62fwop6sdrXK9jUT.jpg",
    "numberOfEpisodes": 126,
    "numberOfSeasons": 7,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "WandaVision",
    "tmdbId": 85271,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ijWWwINc8h71NQ8j1LTJMFSj5wr.jpg",
    "numberOfEpisodes": 9,
    "numberOfSeasons": 1,
    "genres": [
      "Sci-Fi & Fantasy",
      "Mystery",
      "Drama"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "The Big Bang Theory",
    "tmdbId": 1418,
    "posterUrl": "https://image.tmdb.org/t/p/w500/euKFiO5M125rpngFRBbSW83beeI.jpg",
    "numberOfEpisodes": 279,
    "numberOfSeasons": 12,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2007",
    "status": "Ended"
  },
  {
    "name": "Loki",
    "tmdbId": 84958,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    "numberOfEpisodes": 12,
    "numberOfSeasons": 2,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "The Flash",
    "tmdbId": 60735,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yZevl2vHQgmosfwUdVNzviIfaWS.jpg",
    "numberOfEpisodes": 184,
    "numberOfSeasons": 9,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Rick and Morty",
    "tmdbId": 60625,
    "posterUrl": "https://image.tmdb.org/t/p/w500/owhkU6KRqdXoUQpjV8uyZGPtX58.jpg",
    "numberOfEpisodes": 91,
    "numberOfSeasons": 9,
    "genres": [
      "Animation",
      "Comedy",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2013",
    "status": "Returning Series"
  },
  {
    "name": "Peaky Blinders",
    "tmdbId": 60574,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    "numberOfEpisodes": 36,
    "numberOfSeasons": 6,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "The Mandalorian",
    "tmdbId": 82856,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "Euphoria",
    "tmdbId": 85552,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ypmtwojDd751Peszi62DVLytqqC.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "Grey's Anatomy",
    "tmdbId": 1416,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hjJkrLXhWvGHpLeLBDFznpBTY1S.jpg",
    "numberOfEpisodes": 466,
    "numberOfSeasons": 23,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2005",
    "status": "Returning Series"
  },
  {
    "name": "The Simpsons",
    "tmdbId": 456,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uWpG7GqfKGQqX4YMAo3nv5OrglV.jpg",
    "numberOfEpisodes": 802,
    "numberOfSeasons": 38,
    "genres": [
      "Animation",
      "Comedy"
    ],
    "firstAirYear": "1989",
    "status": "Returning Series"
  },
  {
    "name": "Wednesday",
    "tmdbId": 119051,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    "numberOfEpisodes": 16,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Mystery",
      "Comedy"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "The Umbrella Academy",
    "tmdbId": 75006,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg",
    "numberOfEpisodes": 36,
    "numberOfSeasons": 4,
    "genres": [
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "The Vampire Diaries",
    "tmdbId": 18165,
    "posterUrl": "https://image.tmdb.org/t/p/w500/b3vl6wV1W8PBezFfntKTrhrehCY.jpg",
    "numberOfEpisodes": 171,
    "numberOfSeasons": 8,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2009",
    "status": "Ended"
  },
  {
    "name": "Elite",
    "tmdbId": 76669,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
    "numberOfEpisodes": 64,
    "numberOfSeasons": 8,
    "genres": [
      "Crime",
      "Mystery",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Friends",
    "tmdbId": 1668,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
    "numberOfEpisodes": 228,
    "numberOfSeasons": 10,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "1994",
    "status": "Ended"
  },
  {
    "name": "The Falcon and the Winter Soldier",
    "tmdbId": 88396,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
    "numberOfEpisodes": 6,
    "numberOfSeasons": 1,
    "genres": [
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "The 100",
    "tmdbId": 48866,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wHIMMLFsk32wIzDmawWkYVbxFCS.jpg",
    "numberOfEpisodes": 100,
    "numberOfSeasons": 7,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Naruto Shippūden",
    "tmdbId": 31910,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kV27j3Nz4d5z8u6mN3EJw9RiLg2.jpg",
    "numberOfEpisodes": 500,
    "numberOfSeasons": 20,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2007",
    "status": "Ended"
  },
  {
    "name": "Supernatural",
    "tmdbId": 1622,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8iixmfGx5EIFPdpNvB2JvI3VIqX.jpg",
    "numberOfEpisodes": 327,
    "numberOfSeasons": 15,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "Chernobyl",
    "tmdbId": 87108,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    "numberOfEpisodes": 5,
    "numberOfSeasons": 1,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "Sex Education",
    "tmdbId": 81356,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bc3bmTdnoKcRuO9xdQKgAbB7Y9Z.jpg",
    "numberOfEpisodes": 32,
    "numberOfSeasons": 4,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "Vikings",
    "tmdbId": 44217,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    "numberOfEpisodes": 89,
    "numberOfSeasons": 6,
    "genres": [
      "Action & Adventure",
      "Drama",
      "War & Politics"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "House",
    "tmdbId": 1408,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3Cz7ySOQJmqiuTdrc6CY0r65yDI.jpg",
    "numberOfEpisodes": 176,
    "numberOfSeasons": 8,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2004",
    "status": "Ended"
  },
  {
    "name": "Dark",
    "tmdbId": 70523,
    "posterUrl": "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 3,
    "genres": [
      "Crime",
      "Drama",
      "Sci-Fi & Fantasy",
      "Mystery"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Attack on Titan",
    "tmdbId": 1429,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    "numberOfEpisodes": 87,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "Demon Slayer: Kimetsu no Yaiba",
    "tmdbId": 85937,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    "numberOfEpisodes": 63,
    "numberOfSeasons": 5,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "The Last of Us",
    "tmdbId": 100088,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg",
    "numberOfEpisodes": 16,
    "numberOfSeasons": 2,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2023",
    "status": "Returning Series"
  },
  {
    "name": "House of the Dragon",
    "tmdbId": 94997,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7V0Ebks0GgpKvQ7QbLAIdX5dos4.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "Cobra Kai",
    "tmdbId": 77169,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg",
    "numberOfEpisodes": 65,
    "numberOfSeasons": 6,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "The Witcher",
    "tmdbId": 71912,
    "posterUrl": "https://image.tmdb.org/t/p/w500/AoGsDM02UVt0npBA8OvpDcZbaMi.jpg",
    "numberOfEpisodes": 32,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2019",
    "status": "Returning Series"
  },
  {
    "name": "Better Call Saul",
    "tmdbId": 60059,
    "posterUrl": "https://image.tmdb.org/t/p/w500/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg",
    "numberOfEpisodes": 63,
    "numberOfSeasons": 6,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Sherlock",
    "tmdbId": 19885,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
    "numberOfEpisodes": 12,
    "numberOfSeasons": 4,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Black Mirror",
    "tmdbId": 42009,
    "posterUrl": "https://image.tmdb.org/t/p/w500/seN6rRfN0I6n8iDXjlSMk1QjNcq.jpg",
    "numberOfEpisodes": 33,
    "numberOfSeasons": 7,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2011",
    "status": "Returning Series"
  },
  {
    "name": "Arrow",
    "tmdbId": 1412,
    "posterUrl": "https://image.tmdb.org/t/p/w500/u8ZHFj1jC384JEkTt3vNg1DfWEb.jpg",
    "numberOfEpisodes": 170,
    "numberOfSeasons": 8,
    "genres": [
      "Crime",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2012",
    "status": "Ended"
  },
  {
    "name": "Westworld",
    "tmdbId": 63247,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ALlSU9du9iRiKIIoY1sREGNqQ5.jpg",
    "numberOfEpisodes": 36,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Western"
    ],
    "firstAirYear": "2016",
    "status": "Canceled"
  },
  {
    "name": "Arcane",
    "tmdbId": 94605,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    "numberOfEpisodes": 18,
    "numberOfSeasons": 2,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "American Horror Story",
    "tmdbId": 1413,
    "posterUrl": "https://image.tmdb.org/t/p/w500/x2c3AvZeTyNehRZXabTojAxfDuR.jpg",
    "numberOfEpisodes": 145,
    "numberOfSeasons": 13,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2011",
    "status": "Returning Series"
  },
  {
    "name": "Prison Break",
    "tmdbId": 2288,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg",
    "numberOfEpisodes": 88,
    "numberOfSeasons": 5,
    "genres": [
      "Action & Adventure",
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "Naruto",
    "tmdbId": 46260,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
    "numberOfEpisodes": 220,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2002",
    "status": "Ended"
  },
  {
    "name": "INVINCIBLE",
    "tmdbId": 95557,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4tblBrslcKSifMVZ3TmtT2ukMor.jpg",
    "numberOfEpisodes": 32,
    "numberOfSeasons": 5,
    "genres": [
      "Animation",
      "Drama",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2021",
    "status": "Returning Series"
  },
  {
    "name": "How I Met Your Mother",
    "tmdbId": 1100,
    "posterUrl": "https://image.tmdb.org/t/p/w500/b34jPzmB0wZy7EjUZoleXOl2RRI.jpg",
    "numberOfEpisodes": 208,
    "numberOfSeasons": 9,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "Suits",
    "tmdbId": 37680,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vQiryp6LioFxQThywxbC6TuoDjy.jpg",
    "numberOfEpisodes": 134,
    "numberOfSeasons": 9,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Dexter",
    "tmdbId": 1405,
    "posterUrl": "https://image.tmdb.org/t/p/w500/q8dWfc4JwQuv3HayIZeO84jAXED.jpg",
    "numberOfEpisodes": 96,
    "numberOfSeasons": 8,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2006",
    "status": "Ended"
  },
  {
    "name": "The Queen's Gambit",
    "tmdbId": 87739,
    "posterUrl": "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    "numberOfEpisodes": 7,
    "numberOfSeasons": 1,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Mr. Robot",
    "tmdbId": 62560,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kv1nRqgebSsREnd7vdC2pSGjpLo.jpg",
    "numberOfEpisodes": 45,
    "numberOfSeasons": 4,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "One Piece",
    "tmdbId": 37854,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dB4EDhre2dsC2kxYDavyKWqLQwi.jpg",
    "numberOfEpisodes": 1181,
    "numberOfSeasons": 23,
    "genres": [
      "Action & Adventure",
      "Comedy",
      "Animation"
    ],
    "firstAirYear": "1999",
    "status": "Returning Series"
  },
  {
    "name": "The Office",
    "tmdbId": 2316,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dg9e5fPRRId8PoBE0F6jl5y85Eu.jpg",
    "numberOfEpisodes": 186,
    "numberOfSeasons": 9,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "My Hero Academia",
    "tmdbId": 65930,
    "posterUrl": "https://image.tmdb.org/t/p/w500/phuYuzqWW9ru8EA3HVjE9W2Rr3M.jpg",
    "numberOfEpisodes": 170,
    "numberOfSeasons": 8,
    "genres": [
      "Action & Adventure",
      "Animation",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "Marvel's Daredevil",
    "tmdbId": 61889,
    "posterUrl": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
    "numberOfEpisodes": 39,
    "numberOfSeasons": 3,
    "genres": [
      "Crime",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2015",
    "status": "Canceled"
  },
  {
    "name": "Dragon Ball Super",
    "tmdbId": 62715,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qEUrbXJ2qt4Rg84Btlx4STOhgte.jpg",
    "numberOfEpisodes": 131,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Lost",
    "tmdbId": 4607,
    "posterUrl": "https://image.tmdb.org/t/p/w500/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg",
    "numberOfEpisodes": 118,
    "numberOfSeasons": 6,
    "genres": [
      "Mystery",
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2004",
    "status": "Ended"
  },
  {
    "name": "Fear the Walking Dead",
    "tmdbId": 62286,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eKt4ELpQZUKGZCKIDobEbwHwk3I.jpg",
    "numberOfEpisodes": 113,
    "numberOfSeasons": 8,
    "genres": [
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Rebelde",
    "tmdbId": 12637,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kQHXg2BOiODkF4yVI75NcodMmAJ.jpg",
    "numberOfEpisodes": 440,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2004",
    "status": "Ended"
  },
  {
    "name": "The Act",
    "tmdbId": 82883,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vb1sQLC2MqfCPOFqHd8SyVsyDVB.jpg",
    "numberOfEpisodes": 8,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "The Seven Deadly Sins",
    "tmdbId": 62104,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gxTojpKEOtue85EEFlozwRbDXwJ.jpg",
    "numberOfEpisodes": 96,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "South Park",
    "tmdbId": 2190,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1CGwZCFX2qerXaXQJJUB3qUvxq7.jpg",
    "numberOfEpisodes": 337,
    "numberOfSeasons": 29,
    "genres": [
      "Animation",
      "Comedy"
    ],
    "firstAirYear": "1997",
    "status": "Returning Series"
  },
  {
    "name": "Death Note",
    "tmdbId": 13916,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
    "numberOfEpisodes": 37,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2006",
    "status": "Ended"
  },
  {
    "name": "Family Guy",
    "tmdbId": 1434,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3PFsEuAiyLkWsP4GG6dIV37Q6gu.jpg",
    "numberOfEpisodes": 456,
    "numberOfSeasons": 24,
    "genres": [
      "Animation",
      "Comedy"
    ],
    "firstAirYear": "1999",
    "status": "Returning Series"
  },
  {
    "name": "Avatar: The Last Airbender",
    "tmdbId": 246,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yaGt4GIutpbXHsv48tWceWg6s56.jpg",
    "numberOfEpisodes": 61,
    "numberOfSeasons": 3,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "Dragon Ball Z",
    "tmdbId": 12971,
    "posterUrl": "https://image.tmdb.org/t/p/w500/oQ5CnVj3TRifXl2bIOri6H6rfNe.jpg",
    "numberOfEpisodes": 291,
    "numberOfSeasons": 9,
    "genres": [
      "Animation",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "1989",
    "status": "Ended"
  },
  {
    "name": "Anne with an E",
    "tmdbId": 70785,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
    "numberOfEpisodes": 27,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Family"
    ],
    "firstAirYear": "2017",
    "status": "Canceled"
  },
  {
    "name": "Malcolm in the Middle",
    "tmdbId": 2004,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uftxEWbn3OSykTy4DX4BrdVeiuv.jpg",
    "numberOfEpisodes": 151,
    "numberOfSeasons": 7,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2000",
    "status": "Ended"
  },
  {
    "name": "Teen Wolf",
    "tmdbId": 34524,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wjKBTcNy1xihmExqJI8kM2qvavP.jpg",
    "numberOfEpisodes": 100,
    "numberOfSeasons": 6,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "What If...?",
    "tmdbId": 91363,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 3,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "The Mentalist",
    "tmdbId": 5920,
    "posterUrl": "https://image.tmdb.org/t/p/w500/acYXu4KaDj1NIkMgObnhe4C4a0T.jpg",
    "numberOfEpisodes": 151,
    "numberOfSeasons": 7,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2008",
    "status": "Ended"
  },
  {
    "name": "Miraculous: Tales of Ladybug & Cat Noir",
    "tmdbId": 65334,
    "posterUrl": "https://image.tmdb.org/t/p/w500/acrtAy8gmxcsEvrDP09MpMSCeDZ.jpg",
    "numberOfEpisodes": 155,
    "numberOfSeasons": 6,
    "genres": [
      "Action & Adventure",
      "Animation",
      "Kids"
    ],
    "firstAirYear": "2015",
    "status": "Returning Series"
  },
  {
    "name": "13 Reasons Why",
    "tmdbId": 66788,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nel144y4dIOdFFid6twN5mAX9Yd.jpg",
    "numberOfEpisodes": 49,
    "numberOfSeasons": 4,
    "genres": [
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "JUJUTSU KAISEN",
    "tmdbId": 95479,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6qQzMJG27XOJsyAEEIisoJB45j2.jpg",
    "numberOfEpisodes": 59,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2020",
    "status": "Returning Series"
  },
  {
    "name": "Smallville",
    "tmdbId": 4604,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mHZSq8LA5Dt48JjaOZ5tcPXQRVN.jpg",
    "numberOfEpisodes": 216,
    "numberOfSeasons": 10,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2001",
    "status": "Ended"
  },
  {
    "name": "All of Us Are Dead",
    "tmdbId": 99966,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
    "numberOfEpisodes": 12,
    "numberOfSeasons": 2,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "Supergirl",
    "tmdbId": 62688,
    "posterUrl": "https://image.tmdb.org/t/p/w500/90mSQajf4STPROA6H7Hh8OvyWdK.jpg",
    "numberOfEpisodes": 126,
    "numberOfSeasons": 6,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Band of Brothers",
    "tmdbId": 4613,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pGzV187ogXzgJrvPRy2YPi29ofH.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "War & Politics"
    ],
    "firstAirYear": "2001",
    "status": "Ended"
  },
  {
    "name": "True Detective",
    "tmdbId": 46648,
    "posterUrl": "https://image.tmdb.org/t/p/w500/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg",
    "numberOfEpisodes": 30,
    "numberOfSeasons": 4,
    "genres": [
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2014",
    "status": "Returning Series"
  },
  {
    "name": "Law & Order: Special Victims Unit",
    "tmdbId": 2734,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iofokHZoUB4Qhik4PflvJl8TT6a.jpg",
    "numberOfEpisodes": 595,
    "numberOfSeasons": 28,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "1999",
    "status": "Returning Series"
  },
  {
    "name": "Dark Desire",
    "tmdbId": 105214,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uxFNAo2A6ZRcgNASLk02hJUbybn.jpg",
    "numberOfEpisodes": 33,
    "numberOfSeasons": 2,
    "genres": [
      "Mystery",
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "FROM",
    "tmdbId": 124364,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pRtJagIxpfODzzb0T0NAvZSzErC.jpg",
    "numberOfEpisodes": 40,
    "numberOfSeasons": 4,
    "genres": [
      "Mystery",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "One-Punch Man",
    "tmdbId": 63926,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dT10AxJIXVvRwFAew4tt2RhzJrD.jpg",
    "numberOfEpisodes": 36,
    "numberOfSeasons": 3,
    "genres": [
      "Animation",
      "Comedy",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2015",
    "status": "Returning Series"
  },
  {
    "name": "Chucky",
    "tmdbId": 90462,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sdCJbGkvnIsIKLxaFQrviriODVq.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Crime",
      "Comedy",
      "Mystery"
    ],
    "firstAirYear": "2021",
    "status": "Canceled"
  },
  {
    "name": "Scorpion",
    "tmdbId": 60797,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hzeirSF6bRjssDh5JFrm5WRwFLd.jpg",
    "numberOfEpisodes": 93,
    "numberOfSeasons": 4,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2014",
    "status": "Canceled"
  },
  {
    "name": "Criminal Minds",
    "tmdbId": 4057,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hWSb4UnIjlTvnvrP98NbFSO60HA.jpg",
    "numberOfEpisodes": 364,
    "numberOfSeasons": 19,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2005",
    "status": "Returning Series"
  },
  {
    "name": "Love, Death & Robots",
    "tmdbId": 86831,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vL5BQvXH96cJzmNK5n7QliQxy90.jpg",
    "numberOfEpisodes": 45,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2019",
    "status": "Canceled"
  },
  {
    "name": "Brooklyn Nine-Nine",
    "tmdbId": 48891,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mpjlDzVjp7oyHUe2LaF9ltKe6f1.jpg",
    "numberOfEpisodes": 152,
    "numberOfSeasons": 8,
    "genres": [
      "Comedy",
      "Crime"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "You",
    "tmdbId": 78191,
    "posterUrl": "https://image.tmdb.org/t/p/w500/oANi0vEE92nuijiZQgPZ88FSxqQ.jpg",
    "numberOfEpisodes": 50,
    "numberOfSeasons": 5,
    "genres": [
      "Mystery",
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Under the Dome",
    "tmdbId": 46331,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fwH0ePhd7m3swtCuFeubtR49ZTd.jpg",
    "numberOfEpisodes": 39,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2013",
    "status": "Canceled"
  },
  {
    "name": "The Lord of the Rings: The Rings of Power",
    "tmdbId": 84773,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kf5Hz70tjNAHg4swGDzOr9BfoZ1.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "Futurama",
    "tmdbId": 615,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eM8bbTn8C8vUwwS6upzzm7gX31u.jpg",
    "numberOfEpisodes": 164,
    "numberOfSeasons": 11,
    "genres": [
      "Animation",
      "Comedy",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "1999",
    "status": "Returning Series"
  },
  {
    "name": "Marvel's Agents of S.H.I.E.L.D.",
    "tmdbId": 1403,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gHUCCMy1vvj58tzE3dZqeC9SXus.jpg",
    "numberOfEpisodes": 136,
    "numberOfSeasons": 7,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "Hawkeye",
    "tmdbId": 88329,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ct5pNE5dDHryHLDnxyZPYcqO1sz.jpg",
    "numberOfEpisodes": 6,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Comedy",
      "Action & Adventure"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "Chilling Adventures of Sabrina",
    "tmdbId": 79242,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yxMpoHO0CXP5o9gB7IfsciilQS4.jpg",
    "numberOfEpisodes": 36,
    "numberOfSeasons": 2,
    "genres": [
      "Mystery",
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Gotham",
    "tmdbId": 60708,
    "posterUrl": "https://image.tmdb.org/t/p/w500/zLpSNnVoL2bjQdc1PcaHUPUzttP.jpg",
    "numberOfEpisodes": 100,
    "numberOfSeasons": 5,
    "genres": [
      "Drama",
      "Crime",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Two and a Half Men",
    "tmdbId": 2691,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xgfjxyV3g1S68opzuvG6G87muDp.jpg",
    "numberOfEpisodes": 262,
    "numberOfSeasons": 12,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2003",
    "status": "Ended"
  },
  {
    "name": "Pablo Escobar: The Drug Lord",
    "tmdbId": 43348,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5u02bo70uzUFpEV9Pd0lFkLA9Es.jpg",
    "numberOfEpisodes": 113,
    "numberOfSeasons": 1,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2012",
    "status": "Ended"
  },
  {
    "name": "The X-Files",
    "tmdbId": 4087,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rcBx0p8h51LHceyhquYMxbspJQu.jpg",
    "numberOfEpisodes": 218,
    "numberOfSeasons": 11,
    "genres": [
      "Mystery",
      "Sci-Fi & Fantasy",
      "Crime"
    ],
    "firstAirYear": "1993",
    "status": "Ended"
  },
  {
    "name": "The Blacklist",
    "tmdbId": 46952,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4HTfd1PhgFUenJxVuBDNdLmdr0c.jpg",
    "numberOfEpisodes": 218,
    "numberOfSeasons": 10,
    "genres": [
      "Drama",
      "Crime",
      "Mystery"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "Moon Knight",
    "tmdbId": 92749,
    "posterUrl": "https://image.tmdb.org/t/p/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg",
    "numberOfEpisodes": 6,
    "numberOfSeasons": 1,
    "genres": [
      "Sci-Fi & Fantasy",
      "Mystery",
      "Action & Adventure"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "The End of the F***ing World",
    "tmdbId": 74577,
    "posterUrl": "https://image.tmdb.org/t/p/w500/f1OV9xEJCZVYcYSDRr5xOD8NJw3.jpg",
    "numberOfEpisodes": 16,
    "numberOfSeasons": 2,
    "genres": [
      "Comedy",
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "The Sopranos",
    "tmdbId": 1398,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg",
    "numberOfEpisodes": 86,
    "numberOfSeasons": 6,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "1999",
    "status": "Ended"
  },
  {
    "name": "The Originals",
    "tmdbId": 46896,
    "posterUrl": "https://image.tmdb.org/t/p/w500/keJOhJXGiLL54EW6QocbyvQGquA.jpg",
    "numberOfEpisodes": 92,
    "numberOfSeasons": 5,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "El Señor de los Cielos",
    "tmdbId": 44953,
    "posterUrl": "https://image.tmdb.org/t/p/w500/Ag7VUdnrRz5Qpq3Yn3E5OCvFnu0.jpg",
    "numberOfEpisodes": 841,
    "numberOfSeasons": 10,
    "genres": [
      "Crime",
      "Drama",
      "Soap"
    ],
    "firstAirYear": "2013",
    "status": "Returning Series"
  },
  {
    "name": "Grimm",
    "tmdbId": 39351,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iOptnt1QHi6bIHmOq6adnZTV0bU.jpg",
    "numberOfEpisodes": 122,
    "numberOfSeasons": 6,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Gravity Falls",
    "tmdbId": 40075,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qwi3p6PzKfQZ4YXBzv3CP5pO2dE.jpg",
    "numberOfEpisodes": 40,
    "numberOfSeasons": 2,
    "genres": [
      "Action & Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2012",
    "status": "Ended"
  },
  {
    "name": "Yo soy Betty, la fea",
    "tmdbId": 16286,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iEBOiXiDGaxVR6w8aKgG5MEusuO.jpg",
    "numberOfEpisodes": 335,
    "numberOfSeasons": 1,
    "genres": [
      "Soap",
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "1999",
    "status": "Ended"
  },
  {
    "name": "Bones",
    "tmdbId": 1911,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eyTu5c8LniVciRZIOSHTvvkkgJa.jpg",
    "numberOfEpisodes": 246,
    "numberOfSeasons": 12,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "Peacemaker",
    "tmdbId": 110492,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eYzbGcYnOUlvj2fa76pTgIXogd7.jpg",
    "numberOfEpisodes": 16,
    "numberOfSeasons": 2,
    "genres": [
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Comedy"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "The Rookie",
    "tmdbId": 79744,
    "posterUrl": "https://image.tmdb.org/t/p/w500/70kTz0OmjjZe7zHvIDrq2iKW7PJ.jpg",
    "numberOfEpisodes": 145,
    "numberOfSeasons": 9,
    "genres": [
      "Crime",
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2018",
    "status": "Returning Series"
  },
  {
    "name": "Modern Family",
    "tmdbId": 1421,
    "posterUrl": "https://image.tmdb.org/t/p/w500/k5Qg5rgPoKdh3yTJJrLtyoyYGwC.jpg",
    "numberOfEpisodes": 250,
    "numberOfSeasons": 11,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2009",
    "status": "Ended"
  },
  {
    "name": "Shameless",
    "tmdbId": 34307,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ifo31fMWLmyOVpdak9K0kY4jldQ.jpg",
    "numberOfEpisodes": 134,
    "numberOfSeasons": 11,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Dragon Ball",
    "tmdbId": 12609,
    "posterUrl": "https://image.tmdb.org/t/p/w500/onCLyCOgszTIyyVs2XKYSkKPOPG.jpg",
    "numberOfEpisodes": 153,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "1986",
    "status": "Ended"
  },
  {
    "name": "Doctor Who",
    "tmdbId": 57243,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lHfmc6d8pOVFrD0eOKPiDbjeucG.jpg",
    "numberOfEpisodes": 153,
    "numberOfSeasons": 13,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "Siren",
    "tmdbId": 71886,
    "posterUrl": "https://image.tmdb.org/t/p/w500/k906XXqqFMT93v2WMkIOtUcEAlV.jpg",
    "numberOfEpisodes": 36,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Canceled"
  },
  {
    "name": "Narcos",
    "tmdbId": 63351,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    "numberOfEpisodes": 30,
    "numberOfSeasons": 3,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "The Handmaid's Tale",
    "tmdbId": 69478,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eGUT7j3n3rn5yGihlCgwUnD70HV.jpg",
    "numberOfEpisodes": 66,
    "numberOfSeasons": 6,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "The Purge",
    "tmdbId": 80213,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9CaS2XFd0Db42grzzVBnWcSkrbg.jpg",
    "numberOfEpisodes": 20,
    "numberOfSeasons": 2,
    "genres": [
      "Mystery",
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Canceled"
  },
  {
    "name": "Fargo",
    "tmdbId": 60622,
    "posterUrl": "https://image.tmdb.org/t/p/w500/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg",
    "numberOfEpisodes": 51,
    "numberOfSeasons": 5,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Bridgerton",
    "tmdbId": 91239,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uXTg565ahu9RwonCX1V2Hex1NU6.jpg",
    "numberOfEpisodes": 32,
    "numberOfSeasons": 5,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Returning Series"
  },
  {
    "name": "It",
    "tmdbId": 19614,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4ybQ6gopB3H3cu0seVZLznDnIKo.jpg",
    "numberOfEpisodes": 2,
    "numberOfSeasons": 1,
    "genres": [
      "Mystery",
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "1990",
    "status": "Ended"
  },
  {
    "name": "Sons of Anarchy",
    "tmdbId": 1409,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yPLkf4EiCkR0NOvMfmpHMA2zfN3.jpg",
    "numberOfEpisodes": 92,
    "numberOfSeasons": 7,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2008",
    "status": "Ended"
  },
  {
    "name": "Marvel's The Punisher",
    "tmdbId": 67178,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tM6xqRKXoloH9UchaJEyyRE9O1w.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 2,
    "genres": [
      "Action & Adventure",
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Canceled"
  },
  {
    "name": "Yellowstone",
    "tmdbId": 73586,
    "posterUrl": "https://image.tmdb.org/t/p/w500/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg",
    "numberOfEpisodes": 53,
    "numberOfSeasons": 5,
    "genres": [
      "Western",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "House of Cards",
    "tmdbId": 1425,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg",
    "numberOfEpisodes": 73,
    "numberOfSeasons": 6,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "SpongeBob SquarePants",
    "tmdbId": 387,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5h0EU2lqBb03dp5vtRuUHJwqzem.jpg",
    "numberOfEpisodes": 659,
    "numberOfSeasons": 18,
    "genres": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "firstAirYear": "1999",
    "status": "Returning Series"
  },
  {
    "name": "Halo",
    "tmdbId": 52814,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4UmNhZCEu8Vt3byMvNxNEPyf8EY.jpg",
    "numberOfEpisodes": 17,
    "numberOfSeasons": 2,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2022",
    "status": "Canceled"
  },
  {
    "name": "Reacher",
    "tmdbId": 108978,
    "posterUrl": "https://image.tmdb.org/t/p/w500/f1VCQIG2iCyOookdgOzwtUpwWC0.jpg",
    "numberOfEpisodes": 32,
    "numberOfSeasons": 4,
    "genres": [
      "Action & Adventure",
      "Crime"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "Adventure Time",
    "tmdbId": 15260,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qk3eQ8jW4opJ48gFWYUXWaMT4l.jpg",
    "numberOfEpisodes": 279,
    "numberOfSeasons": 10,
    "genres": [
      "Animation",
      "Comedy",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Super Dragon Ball Heroes",
    "tmdbId": 80020,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8jq6xv5c1WK7KAPOXCsodm8eUxp.jpg",
    "numberOfEpisodes": 54,
    "numberOfSeasons": 6,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Love Is in the Air",
    "tmdbId": 104877,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bE71f9A3eztjcd5JT3MmHB8MbzA.jpg",
    "numberOfEpisodes": 52,
    "numberOfSeasons": 2,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Guardian: The Lonely and Great God",
    "tmdbId": 67915,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sPkxHNw5BFvuCFGWw825TS7n6X3.jpg",
    "numberOfEpisodes": 16,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy",
      "Comedy"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "Fallout",
    "tmdbId": 106379,
    "posterUrl": "https://image.tmdb.org/t/p/w500/c15BtJxCXMrISLVmysdsnZUPQft.jpg",
    "numberOfEpisodes": 16,
    "numberOfSeasons": 2,
    "genres": [
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2024",
    "status": "Returning Series"
  },
  {
    "name": "MINDHUNTER",
    "tmdbId": 67744,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fbKE87mojpIETWepSbD5Qt741fp.jpg",
    "numberOfEpisodes": 19,
    "numberOfSeasons": 2,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2017",
    "status": "Canceled"
  },
  {
    "name": "Young Sheldon",
    "tmdbId": 71728,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kidkbZRBGbsEIrX7pODRSKi9ipl.jpg",
    "numberOfEpisodes": 141,
    "numberOfSeasons": 7,
    "genres": [
      "Comedy",
      "Family",
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Young Sheldon",
    "tmdbId": 71728,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kidkbZRBGbsEIrX7pODRSKi9ipl.jpg",
    "numberOfEpisodes": 141,
    "numberOfSeasons": 7,
    "genres": [
      "Comedy",
      "Family",
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Legacies",
    "tmdbId": 79460,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg",
    "numberOfEpisodes": 68,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Canceled"
  },
  {
    "name": "Spartacus",
    "tmdbId": 46296,
    "posterUrl": "https://image.tmdb.org/t/p/w500/c2GKN4VHCj1dnjFMANRpGkCVBae.jpg",
    "numberOfEpisodes": 33,
    "numberOfSeasons": 3,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Hannibal",
    "tmdbId": 40008,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pbV2eLnKSIm1epSZt473UYfqaeZ.jpg",
    "numberOfEpisodes": 39,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "Outlander",
    "tmdbId": 56570,
    "posterUrl": "https://image.tmdb.org/t/p/w500/oftZNfyTVNU7IfOqoGLoT8MGvNs.jpg",
    "numberOfEpisodes": 101,
    "numberOfSeasons": 8,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "iZombie",
    "tmdbId": 60866,
    "posterUrl": "https://image.tmdb.org/t/p/w500/q4nqNwAhzVR7JuYctrWJvUWz3xR.jpg",
    "numberOfEpisodes": 71,
    "numberOfSeasons": 5,
    "genres": [
      "Drama",
      "Crime",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "BoJack Horseman",
    "tmdbId": 61222,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6JFWzlChcGgLiIUo2COgNlWGFKy.jpg",
    "numberOfEpisodes": 76,
    "numberOfSeasons": 6,
    "genres": [
      "Animation",
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Severance",
    "tmdbId": 95396,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
    "numberOfEpisodes": 19,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "Sin senos sí hay paraíso",
    "tmdbId": 67335,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7lBJ6lOS0uQqsH13U9iMTikawQS.jpg",
    "numberOfEpisodes": 240,
    "numberOfSeasons": 3,
    "genres": [
      "Action & Adventure",
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2016",
    "status": "Returning Series"
  },
  {
    "name": "DAHMER - Monster: The Jeffrey Dahmer Story",
    "tmdbId": 113988,
    "posterUrl": "https://image.tmdb.org/t/p/w500/f2PVrphK0u81ES256lw3oAZuF3x.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "See",
    "tmdbId": 80752,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lKDIhc9FQibDiBQ57n3ELfZCyZg.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "The Expanse",
    "tmdbId": 63639,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5vQlVWkIMPhZ88OWchJsgwGEK9.jpg",
    "numberOfEpisodes": 62,
    "numberOfSeasons": 6,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Fringe",
    "tmdbId": 1705,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sY9hg5dLJ93RJOyKEiu1nAtBRND.jpg",
    "numberOfEpisodes": 100,
    "numberOfSeasons": 5,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2008",
    "status": "Ended"
  },
  {
    "name": "Ozark",
    "tmdbId": 69740,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg",
    "numberOfEpisodes": 44,
    "numberOfSeasons": 4,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Titans",
    "tmdbId": 75450,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8e6QiSexmYKaiHGPvbhaFMmQEhc.jpg",
    "numberOfEpisodes": 49,
    "numberOfSeasons": 4,
    "genres": [
      "Drama",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Orange Is the New Black",
    "tmdbId": 1424,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg",
    "numberOfEpisodes": 91,
    "numberOfSeasons": 7,
    "genres": [
      "Drama",
      "Comedy",
      "Crime"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "9-1-1",
    "tmdbId": 75219,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6njUqsd3By2mJsdZm1P0moPLzs3.jpg",
    "numberOfEpisodes": 143,
    "numberOfSeasons": 10,
    "genres": [
      "Drama",
      "Crime",
      "Action & Adventure"
    ],
    "firstAirYear": "2018",
    "status": "Returning Series"
  },
  {
    "name": "The Haunting of Hill House",
    "tmdbId": 72844,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nWPZb800NCGiDPNGsKCfY0w44Z2.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Mystery",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Pretty Little Liars",
    "tmdbId": 31917,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aUPbHiLS3hCHKjtLsncFa9g0viV.jpg",
    "numberOfEpisodes": 161,
    "numberOfSeasons": 7,
    "genres": [
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Alice in Borderland",
    "tmdbId": 110316,
    "posterUrl": "https://image.tmdb.org/t/p/w500/Ac8ruycRXzgcsndTZFK6ouGA0FA.jpg",
    "numberOfEpisodes": 22,
    "numberOfSeasons": 3,
    "genres": [
      "Mystery",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "The Wire",
    "tmdbId": 1438,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg",
    "numberOfEpisodes": 60,
    "numberOfSeasons": 5,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2002",
    "status": "Ended"
  },
  {
    "name": "Tulsa King",
    "tmdbId": 153312,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rOYLWCdAifpUtPlTf1WHxyaxeMt.jpg",
    "numberOfEpisodes": 39,
    "numberOfSeasons": 4,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "Superman & Lois",
    "tmdbId": 95057,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg",
    "numberOfEpisodes": 53,
    "numberOfSeasons": 4,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "Marvel's Iron Fist",
    "tmdbId": 62127,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4l6KD9HhtD6nCDEfg10Lp6C6zah.jpg",
    "numberOfEpisodes": 23,
    "numberOfSeasons": 2,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2017",
    "status": "Canceled"
  },
  {
    "name": "The Sandman",
    "tmdbId": 90802,
    "posterUrl": "https://image.tmdb.org/t/p/w500/q54qEgagGOYCq5D1903eBVMNkbo.jpg",
    "numberOfEpisodes": 23,
    "numberOfSeasons": 2,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "True Beauty",
    "tmdbId": 112888,
    "posterUrl": "https://image.tmdb.org/t/p/w500/I9WCyKUbKAiu95tAitaHOx8EVO.jpg",
    "numberOfEpisodes": 16,
    "numberOfSeasons": 1,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Marvel's Jessica Jones",
    "tmdbId": 38472,
    "posterUrl": "https://image.tmdb.org/t/p/w500/oxnWofiE9fHOgUfs9NJa6nG6NTR.jpg",
    "numberOfEpisodes": 39,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Homeland",
    "tmdbId": 1407,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6GAvS2e6VIRsms9FpVt33PsCoEW.jpg",
    "numberOfEpisodes": 96,
    "numberOfSeasons": 8,
    "genres": [
      "Drama",
      "War & Politics",
      "Crime"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Twin Peaks",
    "tmdbId": 1920,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lA9CNSdo50iQPZ8A2fyVpMvJZAf.jpg",
    "numberOfEpisodes": 48,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "1990",
    "status": "Ended"
  },
  {
    "name": "Heroes",
    "tmdbId": 1639,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lf0TcOkheYUZKpeh7c8lqJHNk5O.jpg",
    "numberOfEpisodes": 78,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2006",
    "status": "Canceled"
  },
  {
    "name": "Lupin",
    "tmdbId": 96677,
    "posterUrl": "https://image.tmdb.org/t/p/w500/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg",
    "numberOfEpisodes": 25,
    "numberOfSeasons": 3,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2021",
    "status": "Returning Series"
  },
  {
    "name": "Ted Lasso",
    "tmdbId": 97546,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uRHsiw1wLxPHFXkkv4Ix1s0O6f4.jpg",
    "numberOfEpisodes": 44,
    "numberOfSeasons": 4,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2020",
    "status": "Returning Series"
  },
  {
    "name": "Chicago P.D.",
    "tmdbId": 58841,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bez40PgT36RUu4gstD2A6GSM0tP.jpg",
    "numberOfEpisodes": 265,
    "numberOfSeasons": 14,
    "genres": [
      "Crime",
      "Drama"
    ],
    "firstAirYear": "2014",
    "status": "Returning Series"
  },
  {
    "name": "Silo",
    "tmdbId": 125988,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg",
    "numberOfEpisodes": 31,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2023",
    "status": "Returning Series"
  },
  {
    "name": "The Pacific",
    "tmdbId": 16997,
    "posterUrl": "https://image.tmdb.org/t/p/w500/x9Y1IMFdY8Ma222KcQadFEau0EB.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Action & Adventure",
      "War & Politics"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Tokyo Ghoul",
    "tmdbId": 61374,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1m4RlC9BTCbyY549TOdVQ5NRPcR.jpg",
    "numberOfEpisodes": 48,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "She-Hulk: Attorney at Law",
    "tmdbId": 92783,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5xz2orV8f0usyrfGNshcoXHmiaV.jpg",
    "numberOfEpisodes": 9,
    "numberOfSeasons": 1,
    "genres": [
      "Comedy",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "Charmed",
    "tmdbId": 1981,
    "posterUrl": "https://image.tmdb.org/t/p/w500/z4bPJ1BWU2EtV69NII2GVvsugQ2.jpg",
    "numberOfEpisodes": 178,
    "numberOfSeasons": 8,
    "genres": [
      "Comedy",
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "1998",
    "status": "Ended"
  },
  {
    "name": "Blindspot",
    "tmdbId": 62710,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4AeYzamQmd9Fa6hawDmYKbdvBSe.jpg",
    "numberOfEpisodes": 100,
    "numberOfSeasons": 5,
    "genres": [
      "Crime",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Fullmetal Alchemist: Brotherhood",
    "tmdbId": 31911,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
    "numberOfEpisodes": 64,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2009",
    "status": "Ended"
  },
  {
    "name": "NCIS",
    "tmdbId": 4614,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mBcu8d6x6zB1el3MPNl7cZQEQ31.jpg",
    "numberOfEpisodes": 508,
    "numberOfSeasons": 24,
    "genres": [
      "Crime",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2003",
    "status": "Returning Series"
  },
  {
    "name": "Once Upon a Time",
    "tmdbId": 39272,
    "posterUrl": "https://image.tmdb.org/t/p/w500/u95scYysMZvBoekSLmMNJjeqXcY.jpg",
    "numberOfEpisodes": 156,
    "numberOfSeasons": 7,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Locked Up",
    "tmdbId": 62455,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1kH9u5DkoDUuIlhFFWjz9VSlKhC.jpg",
    "numberOfEpisodes": 40,
    "numberOfSeasons": 4,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Boruto: Naruto Next Generations",
    "tmdbId": 70881,
    "posterUrl": "https://image.tmdb.org/t/p/w500/e0B6i48kxdRkMcK4tR4YNfXGWOc.jpg",
    "numberOfEpisodes": 293,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Comedy"
    ],
    "firstAirYear": "2017",
    "status": "Returning Series"
  },
  {
    "name": "The Fresh Prince of Bel-Air",
    "tmdbId": 1892,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fJXzwxCVr2TEkhhKRKcih9o5DYK.jpg",
    "numberOfEpisodes": 148,
    "numberOfSeasons": 6,
    "genres": [
      "Comedy",
      "Family"
    ],
    "firstAirYear": "1990",
    "status": "Ended"
  },
  {
    "name": "DC's Legends of Tomorrow",
    "tmdbId": 62643,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qNgAcg4gNYbZ9mySLB9ZX4ehZb6.jpg",
    "numberOfEpisodes": 110,
    "numberOfSeasons": 7,
    "genres": [
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2016",
    "status": "Canceled"
  },
  {
    "name": "Firefly",
    "tmdbId": 1437,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vZcKsy4sGAvWMVqLluwYuoi11Kj.jpg",
    "numberOfEpisodes": 11,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2002",
    "status": "Canceled"
  },
  {
    "name": "The Wheel of Time",
    "tmdbId": 71914,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ihBi24EIr5kwAeY2PqmsgAcCj4n.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2021",
    "status": "Canceled"
  },
  {
    "name": "Seinfeld",
    "tmdbId": 1400,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
    "numberOfEpisodes": 180,
    "numberOfSeasons": 9,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "1989",
    "status": "Ended"
  },
  {
    "name": "American Dad!",
    "tmdbId": 1433,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eb9sH2am9IUSQ8GhXTNAVoujk8W.jpg",
    "numberOfEpisodes": 401,
    "numberOfSeasons": 22,
    "genres": [
      "Animation",
      "Comedy"
    ],
    "firstAirYear": "2005",
    "status": "Returning Series"
  },
  {
    "name": "Chicago Fire",
    "tmdbId": 44006,
    "posterUrl": "https://image.tmdb.org/t/p/w500/r915sk2JpthZSjHEgZKifWxgo6L.jpg",
    "numberOfEpisodes": 296,
    "numberOfSeasons": 15,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2012",
    "status": "Returning Series"
  },
  {
    "name": "Star Wars: The Clone Wars",
    "tmdbId": 4194,
    "posterUrl": "https://image.tmdb.org/t/p/w500/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
    "numberOfEpisodes": 133,
    "numberOfSeasons": 7,
    "genres": [
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Animation"
    ],
    "firstAirYear": "2008",
    "status": "Ended"
  },
  {
    "name": "Good Omens",
    "tmdbId": 71915,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nO68XVx5of8hlBwEOGOkPC8Mveu.jpg",
    "numberOfEpisodes": 13,
    "numberOfSeasons": 3,
    "genres": [
      "Comedy",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "The Legend of Korra",
    "tmdbId": 33880,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dZgYvSfuh1YHDrJuILlVQ5oA2hF.jpg",
    "numberOfEpisodes": 52,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2012",
    "status": "Ended"
  },
  {
    "name": "The Crown",
    "tmdbId": 65494,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    "numberOfEpisodes": 60,
    "numberOfSeasons": 6,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "Altered Carbon",
    "tmdbId": 68421,
    "posterUrl": "https://image.tmdb.org/t/p/w500/AisK4uFsnwwmMkSynFpNl0VeGR.jpg",
    "numberOfEpisodes": 18,
    "numberOfSeasons": 2,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Canceled"
  },
  {
    "name": "Control Z",
    "tmdbId": 102903,
    "posterUrl": "https://image.tmdb.org/t/p/w500/oEDU7EGbmS6f7kpMmViyGHMfhwp.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Gossip Girl",
    "tmdbId": 1395,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mRvSUuU1VQQkZZ578jKJpcUCuL8.jpg",
    "numberOfEpisodes": 121,
    "numberOfSeasons": 6,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2007",
    "status": "Ended"
  },
  {
    "name": "SPY x FAMILY",
    "tmdbId": 120089,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7NAvPYPAu7MeHwP8E9sn81PqsRh.jpg",
    "numberOfEpisodes": 50,
    "numberOfSeasons": 3,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Comedy"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "Obi-Wan Kenobi",
    "tmdbId": 92830,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qJRB789ceLryrLvOKrZqLKr2CGf.jpg",
    "numberOfEpisodes": 6,
    "numberOfSeasons": 1,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "Regular Show",
    "tmdbId": 31132,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg",
    "numberOfEpisodes": 245,
    "numberOfSeasons": 8,
    "genres": [
      "Animation",
      "Comedy",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Chainsaw Man",
    "tmdbId": 114410,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iFM1dyFi0rByvEomEkmm7NpQeeb.jpg",
    "numberOfEpisodes": 12,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Comedy"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "Seven Deadly Sins",
    "tmdbId": 27240,
    "posterUrl": "https://image.tmdb.org/t/p/w500/u7UUYOeMcQ62qHhRhWeGO09h8qH.jpg",
    "numberOfEpisodes": 7,
    "numberOfSeasons": 1,
    "genres": [
      "Documentary"
    ],
    "firstAirYear": "2008",
    "status": "Ended"
  },
  {
    "name": "Only Murders in the Building",
    "tmdbId": 107113,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1yjFVQZuW8aofZ5Cgol8iImsVFp.jpg",
    "numberOfEpisodes": 51,
    "numberOfSeasons": 6,
    "genres": [
      "Comedy",
      "Mystery",
      "Crime"
    ],
    "firstAirYear": "2021",
    "status": "Returning Series"
  },
  {
    "name": "Bleach",
    "tmdbId": 30984,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2EewmxXe72ogD0EaWM8gqa0ccIw.jpg",
    "numberOfEpisodes": 416,
    "numberOfSeasons": 2,
    "genres": [
      "Action & Adventure",
      "Animation",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2004",
    "status": "Returning Series"
  },
  {
    "name": "Pokémon",
    "tmdbId": 60572,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lP4zwr0F7hWTbAFltfoFTc2AxRG.jpg",
    "numberOfEpisodes": 1235,
    "numberOfSeasons": 25,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "1997",
    "status": "Ended"
  },
  {
    "name": "Fast & Furious Spy Racers",
    "tmdbId": 95594,
    "posterUrl": "https://image.tmdb.org/t/p/w500/cI7zYWuYTmKEdXITcUKPzjc2EW5.jpg",
    "numberOfEpisodes": 52,
    "numberOfSeasons": 6,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Kids",
      "Family"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "Andor",
    "tmdbId": 83867,
    "posterUrl": "https://image.tmdb.org/t/p/w500/khZqmwHQicTYoS7Flreb9EddFZC.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 2,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "Hunter x Hunter",
    "tmdbId": 46298,
    "posterUrl": "https://image.tmdb.org/t/p/w500/i2EEr2uBvRlAwJ8d8zTG2Y19mIa.jpg",
    "numberOfEpisodes": 148,
    "numberOfSeasons": 3,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Sex and the City",
    "tmdbId": 105,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jfLp8gTfdi9d8onEFJ60kp1Bl1e.jpg",
    "numberOfEpisodes": 94,
    "numberOfSeasons": 6,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "1998",
    "status": "Ended"
  },
  {
    "name": "Black Clover",
    "tmdbId": 73223,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kaMisKeOoTBPxPkbC3OW7Wgt6ON.jpg",
    "numberOfEpisodes": 170,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2017",
    "status": "Returning Series"
  },
  {
    "name": "Sword Art Online",
    "tmdbId": 45782,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9m8bFIXPg26taNrFSXGwEORVACD.jpg",
    "numberOfEpisodes": 96,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "2012",
    "status": "Ended"
  },
  {
    "name": "Neon Genesis Evangelion",
    "tmdbId": 890,
    "posterUrl": "https://image.tmdb.org/t/p/w500/y2ah9t0navXyIvoHg1uIbIHO3tt.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 1,
    "genres": [
      "Sci-Fi & Fantasy",
      "Animation",
      "Drama"
    ],
    "firstAirYear": "1995",
    "status": "Ended"
  },
  {
    "name": "Community",
    "tmdbId": 18347,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg",
    "numberOfEpisodes": 110,
    "numberOfSeasons": 6,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2009",
    "status": "Ended"
  },
  {
    "name": "Person of Interest",
    "tmdbId": 1411,
    "posterUrl": "https://image.tmdb.org/t/p/w500/f8aIvYk5h7Z8EP3dinCmVgQFYow.jpg",
    "numberOfEpisodes": 103,
    "numberOfSeasons": 5,
    "genres": [
      "Action & Adventure",
      "Crime",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Castle",
    "tmdbId": 1419,
    "posterUrl": "https://image.tmdb.org/t/p/w500/diXBeMzvfJb2iJg3G0kCUaMCzEc.jpg",
    "numberOfEpisodes": 173,
    "numberOfSeasons": 8,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2009",
    "status": "Canceled"
  },
  {
    "name": "The Kardashians",
    "tmdbId": 154521,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pLeSPrwEmxwaV1vqzdVfAgnUvXc.jpg",
    "numberOfEpisodes": 70,
    "numberOfSeasons": 7,
    "genres": [
      "Reality"
    ],
    "firstAirYear": "2022",
    "status": "Returning Series"
  },
  {
    "name": "Pasión de Gavilanes",
    "tmdbId": 11250,
    "posterUrl": "https://image.tmdb.org/t/p/w500/91UV7pNcDPhIzJl7EuK36sK5vRG.jpg",
    "numberOfEpisodes": 270,
    "numberOfSeasons": 2,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2003",
    "status": "Ended"
  },
  {
    "name": "True Blood",
    "tmdbId": 10545,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ktEp6fzL4xzCWsSVtrcH8JaQNQy.jpg",
    "numberOfEpisodes": 80,
    "numberOfSeasons": 7,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2008",
    "status": "Ended"
  },
  {
    "name": "Desperate Housewives",
    "tmdbId": 693,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4qeI51jDzH81PpUUNaJCBrfm7f6.jpg",
    "numberOfEpisodes": 179,
    "numberOfSeasons": 8,
    "genres": [
      "Mystery",
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2004",
    "status": "Ended"
  },
  {
    "name": "InuYasha",
    "tmdbId": 35610,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rQHTNaynedeKurm0sNOsbAZg2oe.jpg",
    "numberOfEpisodes": 193,
    "numberOfSeasons": 2,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2000",
    "status": "Ended"
  },
  {
    "name": "Dragon Ball GT",
    "tmdbId": 12697,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rLHhDpv6rrhuzBjNzaMRNv2fng.jpg",
    "numberOfEpisodes": 64,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "1996",
    "status": "Ended"
  },
  {
    "name": "Star Trek: Discovery",
    "tmdbId": 67198,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xwpOHgym48Ftz7fbJq5te5xoiwu.jpg",
    "numberOfEpisodes": 65,
    "numberOfSeasons": 5,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Marvel's Luke Cage",
    "tmdbId": 62126,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yzM1hMB3PUJqbISX0f421b3xOjB.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 2,
    "genres": [
      "Drama",
      "Action & Adventure",
      "Crime"
    ],
    "firstAirYear": "2016",
    "status": "Canceled"
  },
  {
    "name": "El Chavo del Ocho",
    "tmdbId": 47,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1TdBpVOASafzfWlnecwW17UL6a5.jpg",
    "numberOfEpisodes": 314,
    "numberOfSeasons": 7,
    "genres": [
      "Comedy",
      "Family",
      "Drama"
    ],
    "firstAirYear": "1973",
    "status": "Ended"
  },
  {
    "name": "Rosario Tijeras (Mexico)",
    "tmdbId": 74428,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sqe3I68PRfHig0lgiDUrWVEVlsk.jpg",
    "numberOfEpisodes": 277,
    "numberOfSeasons": 5,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2016",
    "status": "Returning Series"
  },
  {
    "name": "High School DxD",
    "tmdbId": 45950,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5a9vaaLDAZTYjgfWIw7ZYhL1m1A.jpg",
    "numberOfEpisodes": 49,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Comedy",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2012",
    "status": "Ended"
  },
  {
    "name": "The Good Place",
    "tmdbId": 66573,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qIhsuhoIYR5yTnDta0IL4senbeN.jpg",
    "numberOfEpisodes": 50,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Comedy"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "The Strain",
    "tmdbId": 47640,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2BWErT9QcADpf2G4BZ769eSnFTP.jpg",
    "numberOfEpisodes": 46,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Buffy the Vampire Slayer",
    "tmdbId": 95,
    "posterUrl": "https://image.tmdb.org/t/p/w500/y7fVZkyheCEQHDUEHwNmYENGfT2.jpg",
    "numberOfEpisodes": 144,
    "numberOfSeasons": 7,
    "genres": [
      "Comedy",
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "1997",
    "status": "Ended"
  },
  {
    "name": "Marvel's Agent Carter",
    "tmdbId": 61550,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fe79VYyLp5ZBstpJ4oukpuUT3B.jpg",
    "numberOfEpisodes": 18,
    "numberOfSeasons": 2,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2015",
    "status": "Canceled"
  },
  {
    "name": "Love Alarm",
    "tmdbId": 89641,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hQ8Hobo1RpYuZVQJQOCycNMHAG.jpg",
    "numberOfEpisodes": 14,
    "numberOfSeasons": 2,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "The Last Kingdom",
    "tmdbId": 63333,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
    "numberOfEpisodes": 46,
    "numberOfSeasons": 5,
    "genres": [
      "Action & Adventure",
      "Drama",
      "War & Politics"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "The Game of Keys",
    "tmdbId": 90239,
    "posterUrl": "https://image.tmdb.org/t/p/w500/a2dhpxmBGfpSx6HaeUpSozR1Z9x.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "Silicon Valley",
    "tmdbId": 60573,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4ptpmWBVD9HY9hMh8Cbs6SMiy7p.jpg",
    "numberOfEpisodes": 53,
    "numberOfSeasons": 6,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Cowboy Bebop",
    "tmdbId": 30991,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xDiXDfZwC6XYC6fxHI1jl3A3Ill.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Western"
    ],
    "firstAirYear": "1998",
    "status": "Ended"
  },
  {
    "name": "Locked Up: The Oasis",
    "tmdbId": 45871,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7EOWkNGxXq2MBZxfV3ZxjRM4vlH.jpg",
    "numberOfEpisodes": 8,
    "numberOfSeasons": 1,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "I Am Not Okay with This",
    "tmdbId": 90260,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kf3yX0ILNlLJ42X3lX2iYJ3QRp6.jpg",
    "numberOfEpisodes": 7,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Comedy",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2020",
    "status": "Canceled"
  },
  {
    "name": "Drake & Josh",
    "tmdbId": 2038,
    "posterUrl": "https://image.tmdb.org/t/p/w500/udCvGctktHvvf8w51XyTPfcmzDa.jpg",
    "numberOfEpisodes": 57,
    "numberOfSeasons": 4,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2004",
    "status": "Ended"
  },
  {
    "name": "Solo Leveling",
    "tmdbId": 127532,
    "posterUrl": "https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
    "numberOfEpisodes": 25,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2024",
    "status": "Ended"
  },
  {
    "name": "La Reina del Sur",
    "tmdbId": 31586,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1qCGOuNVOlaBb7MMDen6CLzp0UE.jpg",
    "numberOfEpisodes": 183,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2011",
    "status": "Returning Series"
  },
  {
    "name": "Cyberpunk: Edgerunners",
    "tmdbId": 105248,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lqcDVZ8pyk08AVftMBildDR3QUK.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Sci-Fi & Fantasy",
      "Crime"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "His Dark Materials",
    "tmdbId": 68507,
    "posterUrl": "https://image.tmdb.org/t/p/w500/g6tIKGc3f1H5QMz1dcgCwADKpZ7.jpg",
    "numberOfEpisodes": 23,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "Star Trek: Picard",
    "tmdbId": 85949,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nIlAKIrLKxOeoEnc0Urb65yNCp.jpg",
    "numberOfEpisodes": 30,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Fleabag",
    "tmdbId": 67070,
    "posterUrl": "https://image.tmdb.org/t/p/w500/27vEYsRKa3eAniwmoccOoluEXQ1.jpg",
    "numberOfEpisodes": 12,
    "numberOfSeasons": 2,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "Never Have I Ever",
    "tmdbId": 100883,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hd5fnBixab6IzfUwjC5wfdbX3eM.jpg",
    "numberOfEpisodes": 40,
    "numberOfSeasons": 4,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "DARLING in the FRANXX",
    "tmdbId": 76121,
    "posterUrl": "https://image.tmdb.org/t/p/w500/m6R8gI3brohD6izeVCXFmuGeV2m.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 1,
    "genres": [
      "Animation",
      "Drama",
      "Sci-Fi & Fantasy",
      "Comedy"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "ONE PIECE",
    "tmdbId": 111110,
    "posterUrl": "https://image.tmdb.org/t/p/w500/blWCPEqDGLBuLB9u89CxP9ORQP4.jpg",
    "numberOfEpisodes": 17,
    "numberOfSeasons": 3,
    "genres": [
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2023",
    "status": "Returning Series"
  },
  {
    "name": "Sense8",
    "tmdbId": 61664,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kmyvlQ9QKzgdZY31rXaUlgCnzrB.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 2,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Lost in Space",
    "tmdbId": 75758,
    "posterUrl": "https://image.tmdb.org/t/p/w500/y8NJnTXzb4rio9uvVYFVrXEMofU.jpg",
    "numberOfEpisodes": 28,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "The Bear",
    "tmdbId": 136315,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg",
    "numberOfEpisodes": 46,
    "numberOfSeasons": 5,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2022",
    "status": "Ended"
  },
  {
    "name": "Record of Ragnarok",
    "tmdbId": 114868,
    "posterUrl": "https://image.tmdb.org/t/p/w500/t6GEKms3JgLhC6pXjFHhDvPP65y.jpg",
    "numberOfEpisodes": 42,
    "numberOfSeasons": 4,
    "genres": [
      "Action & Adventure",
      "Animation",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2021",
    "status": "Returning Series"
  },
  {
    "name": "Jurassic World Camp Cretaceous",
    "tmdbId": 93741,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pwte1p4ZySI1qAVSVdSTRKjuIAa.jpg",
    "numberOfEpisodes": 49,
    "numberOfSeasons": 5,
    "genres": [
      "Animation",
      "Kids",
      "Action & Adventure",
      "Family"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Parks and Recreation",
    "tmdbId": 8592,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5IOj62y2Eb2ngyYmEn1IJ7bFhzH.jpg",
    "numberOfEpisodes": 122,
    "numberOfSeasons": 7,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2009",
    "status": "Ended"
  },
  {
    "name": "Ghost Whisperer",
    "tmdbId": 1606,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9ZtGupUFaHhws7mOcwhNTtRpRHC.jpg",
    "numberOfEpisodes": 107,
    "numberOfSeasons": 5,
    "genres": [
      "Sci-Fi & Fantasy",
      "Mystery",
      "Drama"
    ],
    "firstAirYear": "2005",
    "status": "Canceled"
  },
  {
    "name": "Hawaii Five-0",
    "tmdbId": 32798,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sIdCKlmM2nU4akIvFQaAIiU8YES.jpg",
    "numberOfEpisodes": 240,
    "numberOfSeasons": 10,
    "genres": [
      "Crime",
      "Drama",
      "Action & Adventure"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Stargate SG-1",
    "tmdbId": 4629,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dQjmI7XxI47v8IM2MUysHG0LuU2.jpg",
    "numberOfEpisodes": 214,
    "numberOfSeasons": 10,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure"
    ],
    "firstAirYear": "1997",
    "status": "Ended"
  },
  {
    "name": "Elementary",
    "tmdbId": 1415,
    "posterUrl": "https://image.tmdb.org/t/p/w500/q9dObe29W4bDpgzUfOOH3ZnzDbR.jpg",
    "numberOfEpisodes": 154,
    "numberOfSeasons": 7,
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "firstAirYear": "2012",
    "status": "Ended"
  },
  {
    "name": "Batman: The Animated Series",
    "tmdbId": 2098,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lBomQFW1vlm1yUYMNSbFZ45R4Ox.jpg",
    "numberOfEpisodes": 85,
    "numberOfSeasons": 4,
    "genres": [
      "Action & Adventure",
      "Animation",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "1992",
    "status": "Ended"
  },
  {
    "name": "Shōgun",
    "tmdbId": 126308,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "War & Politics"
    ],
    "firstAirYear": "2024",
    "status": "Returning Series"
  },
  {
    "name": "Sex, Explained",
    "tmdbId": 96815,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nIwI7rlhVXlfDHNoLFfYzkz7TJ4.jpg",
    "numberOfEpisodes": 5,
    "numberOfSeasons": 1,
    "genres": [
      "Documentary"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Tom Clancy's Jack Ryan",
    "tmdbId": 73375,
    "posterUrl": "https://image.tmdb.org/t/p/w500/cO4py3L3q5GNPrA0qr1wVDrosK1.jpg",
    "numberOfEpisodes": 30,
    "numberOfSeasons": 4,
    "genres": [
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "24",
    "tmdbId": 1973,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iq6yrZ5LEDXf1ArCOYLq8PIUBpV.jpg",
    "numberOfEpisodes": 204,
    "numberOfSeasons": 9,
    "genres": [
      "Action & Adventure",
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2001",
    "status": "Ended"
  },
  {
    "name": "We Bare Bears",
    "tmdbId": 63401,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3xWzlLZ0kAD6SkVZTekFM9lxZyP.jpg",
    "numberOfEpisodes": 138,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Comedy",
      "Kids"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Manifest",
    "tmdbId": 79696,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eTemCphrglLKrXOsNRhYezHA7H9.jpg",
    "numberOfEpisodes": 62,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Mystery",
      "Drama"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Boys Over Flowers",
    "tmdbId": 16420,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7nqNwwCoMB3IdMU9VKSPTg5SrfL.jpg",
    "numberOfEpisodes": 25,
    "numberOfSeasons": 1,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "2009",
    "status": "Ended"
  },
  {
    "name": "Star Trek: The Next Generation",
    "tmdbId": 655,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vkLzXddgUKH5VcpnYiRzpJFrZhz.jpg",
    "numberOfEpisodes": 176,
    "numberOfSeasons": 7,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "1987",
    "status": "Ended"
  },
  {
    "name": "Battlestar Galactica",
    "tmdbId": 1972,
    "posterUrl": "https://image.tmdb.org/t/p/w500/99PJSbcO2LeM10uOGWeFihNp77j.jpg",
    "numberOfEpisodes": 73,
    "numberOfSeasons": 4,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Drama"
    ],
    "firstAirYear": "2004",
    "status": "Ended"
  },
  {
    "name": "Raised by Wolves",
    "tmdbId": 85723,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mTvSVKMn2Npf6zvYNbGMJnYLtvp.jpg",
    "numberOfEpisodes": 18,
    "numberOfSeasons": 2,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2020",
    "status": "Canceled"
  },
  {
    "name": "The Owl House",
    "tmdbId": 92685,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rhzwpJBhi2WkfihXndS1xUdQlzB.jpg",
    "numberOfEpisodes": 43,
    "numberOfSeasons": 3,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Comedy",
      "Sci-Fi & Fantasy",
      "Family"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "Ben 10",
    "tmdbId": 4686,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eogRp6oAPK0SEvQmCrQ78LTlSdp.jpg",
    "numberOfEpisodes": 52,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Comedy",
      "Kids"
    ],
    "firstAirYear": "2005",
    "status": "Ended"
  },
  {
    "name": "American Gods",
    "tmdbId": 46639,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3KCAZaKHmoMIN9dHutqaMtubQqD.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 3,
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2017",
    "status": "Canceled"
  },
  {
    "name": "Teresa",
    "tmdbId": 12926,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5Thydptu5Ym3mq0XTGJXpdl624Y.jpg",
    "numberOfEpisodes": 151,
    "numberOfSeasons": 1,
    "genres": [
      "Soap",
      "Drama"
    ],
    "firstAirYear": "2010",
    "status": "Ended"
  },
  {
    "name": "Ginny & Georgia",
    "tmdbId": 117581,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vOwunzW4dx3n0J5mH40n9jTRSwY.jpg",
    "numberOfEpisodes": 30,
    "numberOfSeasons": 4,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "firstAirYear": "2021",
    "status": "Returning Series"
  },
  {
    "name": "Scream Queens",
    "tmdbId": 62046,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yeayXZYSU8xdmC8i5g5jTdxeggp.jpg",
    "numberOfEpisodes": 23,
    "numberOfSeasons": 2,
    "genres": [
      "Mystery",
      "Comedy"
    ],
    "firstAirYear": "2015",
    "status": "Canceled"
  },
  {
    "name": "Foundation",
    "tmdbId": 93740,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tg9I5pOY4M9CKj8U0cxVBTsm5eh.jpg",
    "numberOfEpisodes": 30,
    "numberOfSeasons": 3,
    "genres": [
      "Sci-Fi & Fantasy",
      "Drama"
    ],
    "firstAirYear": "2021",
    "status": "Returning Series"
  },
  {
    "name": "How to Get Away with Murder",
    "tmdbId": 61056,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bJs8Y6T88NcgksxA8UaVl4YX8p8.jpg",
    "numberOfEpisodes": 90,
    "numberOfSeasons": 6,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Over the Garden Wall",
    "tmdbId": 61617,
    "posterUrl": "https://image.tmdb.org/t/p/w500/m3lU8n7WxzMecxKZcqhq5y5ESy.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Mystery",
      "Sci-Fi & Fantasy",
      "Animation",
      "Family",
      "Comedy"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "Bates Motel",
    "tmdbId": 46786,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xXKcfZE7ulYxgjjYv51s0zDG69s.jpg",
    "numberOfEpisodes": 50,
    "numberOfSeasons": 5,
    "genres": [
      "Drama",
      "Crime",
      "Mystery"
    ],
    "firstAirYear": "2013",
    "status": "Ended"
  },
  {
    "name": "Ash vs Evil Dead",
    "tmdbId": 62264,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9tNtSk46s3f1ePr59p0JG6uacc8.jpg",
    "numberOfEpisodes": 30,
    "numberOfSeasons": 3,
    "genres": [
      "Comedy",
      "Action & Adventure",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2015",
    "status": "Canceled"
  },
  {
    "name": "11.22.63",
    "tmdbId": 64464,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1fH41ccMKvgDTbbcCxWWH6fznah.jpg",
    "numberOfEpisodes": 8,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2016",
    "status": "Ended"
  },
  {
    "name": "The Amazing World of Gumball",
    "tmdbId": 37606,
    "posterUrl": "https://image.tmdb.org/t/p/w500/VYnnyA2hyxi3VUPgCA71mMtt69.jpg",
    "numberOfEpisodes": 240,
    "numberOfSeasons": 6,
    "genres": [
      "Animation",
      "Family",
      "Sci-Fi & Fantasy",
      "Comedy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Dr. STONE",
    "tmdbId": 86031,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xbZQ3fDl0y5mt0ARwfeyrgQ4JTw.jpg",
    "numberOfEpisodes": 94,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Comedy",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2019",
    "status": "Ended"
  },
  {
    "name": "2 Broke Girls",
    "tmdbId": 39340,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wW1SDEoZ6pDfnSkVQuXwOo8ICep.jpg",
    "numberOfEpisodes": 137,
    "numberOfSeasons": 6,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2011",
    "status": "Canceled"
  },
  {
    "name": "The Boss Baby: Back in Business",
    "tmdbId": 77606,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mUVZHkJPKDYgDy1dbDdi0Esj9eB.jpg",
    "numberOfEpisodes": 49,
    "numberOfSeasons": 4,
    "genres": [
      "Animation",
      "Action & Adventure",
      "Comedy",
      "Kids",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Heartstopper",
    "tmdbId": 124834,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dQc0QbDiHjGmWxTfKtBgYtS4bj5.jpg",
    "numberOfEpisodes": 24,
    "numberOfSeasons": 3,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2022",
    "status": "Canceled"
  },
  {
    "name": "Succession",
    "tmdbId": 76331,
    "posterUrl": "https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
    "numberOfEpisodes": 39,
    "numberOfSeasons": 4,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2018",
    "status": "Ended"
  },
  {
    "name": "Adolescence",
    "tmdbId": 249042,
    "posterUrl": "https://image.tmdb.org/t/p/w500/20i4nShZZg1g1VFHSB8xpaYM4r7.jpg",
    "numberOfEpisodes": 4,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Crime"
    ],
    "firstAirYear": "2025",
    "status": "Ended"
  },
  {
    "name": "Mare of Easttown",
    "tmdbId": 115004,
    "posterUrl": "https://image.tmdb.org/t/p/w500/78aK4Msbr22A5PGa6PZV0pAvdwf.jpg",
    "numberOfEpisodes": 7,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Crime",
      "Mystery"
    ],
    "firstAirYear": "2021",
    "status": "Ended"
  },
  {
    "name": "The Outsider",
    "tmdbId": 84661,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aMiPwPQjQI1EZN3xP2V0sSU37dc.jpg",
    "numberOfEpisodes": 10,
    "numberOfSeasons": 1,
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "firstAirYear": "2020",
    "status": "Ended"
  },
  {
    "name": "CSI: Miami",
    "tmdbId": 1620,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pNW64pjaHvf6purNaFhq4SHYRfl.jpg",
    "numberOfEpisodes": 232,
    "numberOfSeasons": 10,
    "genres": [
      "Drama",
      "Mystery",
      "Crime"
    ],
    "firstAirYear": "2002",
    "status": "Ended"
  },
  {
    "name": "Victorious",
    "tmdbId": 31251,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2Jc4L48qEwN9HyzqsdaSX1BCGMJ.jpg",
    "numberOfEpisodes": 57,
    "numberOfSeasons": 4,
    "genres": [
      "Comedy",
      "Kids"
    ],
    "firstAirYear": "2010",
    "status": "Canceled"
  },
  {
    "name": "Arrested Development",
    "tmdbId": 4589,
    "posterUrl": "https://image.tmdb.org/t/p/w500/p4r4RD7RsNcJVoz0H6z3dBoTBtW.jpg",
    "numberOfEpisodes": 84,
    "numberOfSeasons": 5,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2003",
    "status": "Ended"
  },
  {
    "name": "Big Little Lies",
    "tmdbId": 66292,
    "posterUrl": "https://image.tmdb.org/t/p/w500/zxGkno93ExrTMsJVllH6mzQ652z.jpg",
    "numberOfEpisodes": 14,
    "numberOfSeasons": 2,
    "genres": [
      "Drama"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Lie to Me",
    "tmdbId": 8358,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2xpQxwsGYtdGDrmLvCosTZ0I54R.jpg",
    "numberOfEpisodes": 48,
    "numberOfSeasons": 3,
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "firstAirYear": "2009",
    "status": "Canceled"
  },
  {
    "name": "New Girl",
    "tmdbId": 1420,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8oCqMlKKomCArVtyOjRzMN6g40Z.jpg",
    "numberOfEpisodes": 146,
    "numberOfSeasons": 7,
    "genres": [
      "Comedy"
    ],
    "firstAirYear": "2011",
    "status": "Ended"
  },
  {
    "name": "Cosmos",
    "tmdbId": 58474,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5o07ps0QZ0bNoRYxTn9cPdRWlUu.jpg",
    "numberOfEpisodes": 26,
    "numberOfSeasons": 2,
    "genres": [
      "Documentary"
    ],
    "firstAirYear": "2014",
    "status": "Ended"
  },
  {
    "name": "The Magicians",
    "tmdbId": 64432,
    "posterUrl": "https://image.tmdb.org/t/p/w500/A66dZN98BPEYeFQAhNdNCIXa57d.jpg",
    "numberOfEpisodes": 65,
    "numberOfSeasons": 5,
    "genres": [
      "Drama",
      "Sci-Fi & Fantasy"
    ],
    "firstAirYear": "2015",
    "status": "Ended"
  },
  {
    "name": "Marvel's The Defenders",
    "tmdbId": 62285,
    "posterUrl": "https://image.tmdb.org/t/p/w500/49XzINhH4LFsgz7cx6TOPcHUJUL.jpg",
    "numberOfEpisodes": 8,
    "numberOfSeasons": 1,
    "genres": [
      "Sci-Fi & Fantasy",
      "Action & Adventure",
      "Crime"
    ],
    "firstAirYear": "2017",
    "status": "Ended"
  },
  {
    "name": "Insatiable",
    "tmdbId": 80743,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lHZ4xqGQlmyiFTOVtwnNpTcZgkd.jpg",
    "numberOfEpisodes": 22,
    "numberOfSeasons": 2,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "firstAirYear": "2018",
    "status": "Canceled"
  }
];
