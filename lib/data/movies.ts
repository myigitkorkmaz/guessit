// Static snapshot of TMDB movie data (api.themoviedb.org), fetched 2026-09-10.
// Sourced from /discover/movie sorted by vote_count.desc (a strong proxy for "widely recognized"),
// then detail-fetched for exact production budgets. Baked in statically rather than fetched live per
// round — same reasoning as the Population Guess and Episode Count datasets: no runtime API dependency,
// instant loads, no risk of rate limits. Filtered to movies with a reported budget >= $1M (TMDB sets
// budget to 0 when unknown, which would otherwise look like a free movie). To refresh, re-run the fetch
// against api.themoviedb.org/3/discover/movie + /3/movie/{id} with a valid API key and re-apply the same
// filters.
//
// Attribution required by TMDB's terms of use — see the notice rendered on the game page itself,
// do not remove it.

export interface MovieData {
  title: string;
  tmdbId: number;
  posterUrl: string;
  budget: number;
  revenue: number | null;
  genres: string[];
  releaseYear: string | null;
  runtimeMinutes: number | null;
}

export const MOVIES: MovieData[] = [
  {
    "title": "Interstellar",
    "tmdbId": 157336,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    "budget": 165000000,
    "revenue": 746606706,
    "genres": [
      "Adventure",
      "Drama",
      "Science Fiction"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 169
  },
  {
    "title": "Inception",
    "tmdbId": 27205,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    "budget": 160000000,
    "revenue": 839030630,
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 148
  },
  {
    "title": "The Avengers",
    "tmdbId": 24428,
    "posterUrl": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "budget": 220000000,
    "revenue": 1518815515,
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 143
  },
  {
    "title": "The Dark Knight",
    "tmdbId": 155,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "budget": 185000000,
    "revenue": 1004558444,
    "genres": [
      "Action",
      "Thriller"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 152
  },
  {
    "title": "Avatar",
    "tmdbId": 19995,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    "budget": 237000000,
    "revenue": 2923706026,
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 162
  },
  {
    "title": "Deadpool",
    "tmdbId": 293660,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    "budget": 58000000,
    "revenue": 782837347,
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 108
  },
  {
    "title": "Avengers: Infinity War",
    "tmdbId": 299536,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "budget": 300000000,
    "revenue": 2052415039,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 149
  },
  {
    "title": "Fight Club",
    "tmdbId": 550,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    "budget": 63000000,
    "revenue": 100853753,
    "genres": [
      "Drama",
      "Thriller"
    ],
    "releaseYear": "1999",
    "runtimeMinutes": 139
  },
  {
    "title": "The Shawshank Redemption",
    "tmdbId": 278,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "budget": 25000000,
    "revenue": 28341469,
    "genres": [
      "Drama",
      "Crime"
    ],
    "releaseYear": "1994",
    "runtimeMinutes": 142
  },
  {
    "title": "Pulp Fiction",
    "tmdbId": 680,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    "budget": 8000000,
    "revenue": 213928762,
    "genres": [
      "Thriller",
      "Crime",
      "Comedy"
    ],
    "releaseYear": "1994",
    "runtimeMinutes": 154
  },
  {
    "title": "Forrest Gump",
    "tmdbId": 13,
    "posterUrl": "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
    "budget": 55000000,
    "revenue": 677387716,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "releaseYear": "1994",
    "runtimeMinutes": 142
  },
  {
    "title": "Guardians of the Galaxy",
    "tmdbId": 118340,
    "posterUrl": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    "budget": 170000000,
    "revenue": 772776600,
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 121
  },
  {
    "title": "Harry Potter and the Philosopher's Stone",
    "tmdbId": 671,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    "budget": 125000000,
    "revenue": 1029374615,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 152
  },
  {
    "title": "Iron Man",
    "tmdbId": 1726,
    "posterUrl": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    "budget": 140000000,
    "revenue": 585174222,
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 126
  },
  {
    "title": "The Matrix",
    "tmdbId": 603,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    "budget": 63000000,
    "revenue": 463517383,
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "1999",
    "runtimeMinutes": 136
  },
  {
    "title": "Avengers: Endgame",
    "tmdbId": 299534,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    "budget": 356000000,
    "revenue": 2799439100,
    "genres": [
      "Adventure",
      "Science Fiction",
      "Action"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 181
  },
  {
    "title": "Django Unchained",
    "tmdbId": 68718,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    "budget": 100000000,
    "revenue": 425368238,
    "genres": [
      "Drama",
      "Western"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 165
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "tmdbId": 120,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "budget": 93000000,
    "revenue": 871368364,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 179
  },
  {
    "title": "Joker",
    "tmdbId": 475557,
    "posterUrl": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "budget": 55000000,
    "revenue": 1078958629,
    "genres": [
      "Crime",
      "Thriller",
      "Drama"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 122
  },
  {
    "title": "Titanic",
    "tmdbId": 597,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "budget": 200000000,
    "revenue": 2264162353,
    "genres": [
      "Drama",
      "Romance"
    ],
    "releaseYear": "1997",
    "runtimeMinutes": 194
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "tmdbId": 122,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "budget": 94000000,
    "revenue": 1118888979,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2003",
    "runtimeMinutes": 201
  },
  {
    "title": "The Wolf of Wall Street",
    "tmdbId": 106646,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg",
    "budget": 100000000,
    "revenue": 407039432,
    "genres": [
      "Crime",
      "Drama",
      "Comedy"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 180
  },
  {
    "title": "Shutter Island",
    "tmdbId": 11324,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    "budget": 80000000,
    "revenue": 294804195,
    "genres": [
      "Drama",
      "Thriller",
      "Mystery"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 138
  },
  {
    "title": "Avengers: Age of Ultron",
    "tmdbId": 99861,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    "budget": 235000000,
    "revenue": 1405403694,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 141
  },
  {
    "title": "The Dark Knight Rises",
    "tmdbId": 49026,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    "budget": 250000000,
    "revenue": 1081041287,
    "genres": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 165
  },
  {
    "title": "Inglourious Basterds",
    "tmdbId": 16869,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aupnPtagH9JVBuMrGEanf4iqXEQ.jpg",
    "budget": 70000000,
    "revenue": 321457747,
    "genres": [
      "Drama",
      "Thriller",
      "War"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 153
  },
  {
    "title": "Mad Max: Fury Road",
    "tmdbId": 76341,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    "budget": 150000000,
    "revenue": 378858340,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 121
  },
  {
    "title": "Captain America: Civil War",
    "tmdbId": 271110,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    "budget": 250000000,
    "revenue": 1155046416,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 147
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "tmdbId": 121,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    "budget": 79000000,
    "revenue": 926287400,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2002",
    "runtimeMinutes": 179
  },
  {
    "title": "Harry Potter and the Chamber of Secrets",
    "tmdbId": 672,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    "budget": 100000000,
    "revenue": 876688482,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2002",
    "runtimeMinutes": 161
  },
  {
    "title": "Black Panther",
    "tmdbId": 284054,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    "budget": 200000000,
    "revenue": 1349926083,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 135
  },
  {
    "title": "Doctor Strange",
    "tmdbId": 284052,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    "budget": 180000000,
    "revenue": 676343174,
    "genres": [
      "Fantasy",
      "Adventure",
      "Action"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 115
  },
  {
    "title": "Spider-Man: Homecoming",
    "tmdbId": 315635,
    "posterUrl": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    "budget": 175000000,
    "revenue": 880978185,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 133
  },
  {
    "title": "Inside Out",
    "tmdbId": 150540,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    "budget": 175000000,
    "revenue": 857611174,
    "genres": [
      "Animation",
      "Family",
      "Adventure",
      "Drama",
      "Comedy"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 95
  },
  {
    "title": "Iron Man 3",
    "tmdbId": 68721,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    "budget": 200000000,
    "revenue": 1215577205,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 130
  },
  {
    "title": "Se7en",
    "tmdbId": 807,
    "posterUrl": "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    "budget": 33000000,
    "revenue": 327311859,
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "releaseYear": "1995",
    "runtimeMinutes": 127
  },
  {
    "title": "The Hunger Games",
    "tmdbId": 70160,
    "posterUrl": "https://image.tmdb.org/t/p/w500/apa5G43Hha7kH7wJG0gkkHT7FA9.jpg",
    "budget": 75000000,
    "revenue": 694000000,
    "genres": [
      "Science Fiction",
      "Adventure",
      "Action",
      "Thriller"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 142
  },
  {
    "title": "Harry Potter and the Prisoner of Azkaban",
    "tmdbId": 673,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    "budget": 130000000,
    "revenue": 789804554,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 141
  },
  {
    "title": "The Godfather",
    "tmdbId": 238,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "budget": 6000000,
    "revenue": 245066411,
    "genres": [
      "Drama",
      "Crime"
    ],
    "releaseYear": "1972",
    "runtimeMinutes": 175
  },
  {
    "title": "Guardians of the Galaxy Vol. 2",
    "tmdbId": 283995,
    "posterUrl": "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    "budget": 200000000,
    "revenue": 863756051,
    "genres": [
      "Science Fiction",
      "Adventure",
      "Action"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 137
  },
  {
    "title": "Captain America: The First Avenger",
    "tmdbId": 1771,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    "budget": 140000000,
    "revenue": 370569774,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 124
  },
  {
    "title": "Batman Begins",
    "tmdbId": 272,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sPX89Td70IDDjVr85jdSBb4rWGr.jpg",
    "budget": 150000000,
    "revenue": 374218673,
    "genres": [
      "Drama",
      "Crime",
      "Action"
    ],
    "releaseYear": "2005",
    "runtimeMinutes": 140
  },
  {
    "title": "Spider-Man: No Way Home",
    "tmdbId": 634649,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "budget": 200000000,
    "revenue": 1921426073,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2021",
    "runtimeMinutes": 148
  },
  {
    "title": "Iron Man 2",
    "tmdbId": 10138,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    "budget": 200000000,
    "revenue": 623933331,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 124
  },
  {
    "title": "Star Wars",
    "tmdbId": 11,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fai0rspsNeJCS69wHNjOdWxcI7P.jpg",
    "budget": 11000000,
    "revenue": 775398007,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "1977",
    "runtimeMinutes": 121
  },
  {
    "title": "Thor",
    "tmdbId": 10195,
    "posterUrl": "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    "budget": 150000000,
    "revenue": 449326618,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 115
  },
  {
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "tmdbId": 22,
    "posterUrl": "https://image.tmdb.org/t/p/w500/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
    "budget": 140000000,
    "revenue": 655011224,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2003",
    "runtimeMinutes": 143
  },
  {
    "title": "Harry Potter and the Goblet of Fire",
    "tmdbId": 674,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    "budget": 150000000,
    "revenue": 895921036,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2005",
    "runtimeMinutes": 157
  },
  {
    "title": "Thor: Ragnarok",
    "tmdbId": 284053,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    "budget": 180000000,
    "revenue": 855301806,
    "genres": [
      "Action",
      "Science Fiction",
      "Comedy",
      "Adventure"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 131
  },
  {
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "tmdbId": 12445,
    "posterUrl": "https://image.tmdb.org/t/p/w500/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
    "budget": 125000000,
    "revenue": 1341511219,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 130
  },
  {
    "title": "Suicide Squad",
    "tmdbId": 297761,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sk3FZgh3sRrmr8vyhaitNobMcfh.jpg",
    "budget": 175000000,
    "revenue": 749200054,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 122
  },
  {
    "title": "Back to the Future",
    "tmdbId": 105,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
    "budget": 19000000,
    "revenue": 381109762,
    "genres": [
      "Adventure",
      "Comedy",
      "Science Fiction"
    ],
    "releaseYear": "1985",
    "runtimeMinutes": 116
  },
  {
    "title": "Up",
    "tmdbId": 14160,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
    "budget": 175000000,
    "revenue": 735103954,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Adventure"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 96
  },
  {
    "title": "Jurassic World",
    "tmdbId": 135397,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    "budget": 150000000,
    "revenue": 1671537444,
    "genres": [
      "Adventure",
      "Science Fiction",
      "Thriller",
      "Action"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 124
  },
  {
    "title": "The Martian",
    "tmdbId": 286217,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fASz8A0yFE3QB6LgGoOfwvFSseV.jpg",
    "budget": 108000000,
    "revenue": 631058917,
    "genres": [
      "Science Fiction",
      "Drama",
      "Adventure"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 141
  },
  {
    "title": "Gladiator",
    "tmdbId": 98,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
    "budget": 103000000,
    "revenue": 465516248,
    "genres": [
      "Action",
      "Drama",
      "Adventure"
    ],
    "releaseYear": "2000",
    "runtimeMinutes": 155
  },
  {
    "title": "Spider-Man",
    "tmdbId": 557,
    "posterUrl": "https://image.tmdb.org/t/p/w500/or6XJBVpcEbIkma0V9zshnbEtx4.jpg",
    "budget": 139000000,
    "revenue": 821708551,
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2002",
    "runtimeMinutes": 121
  },
  {
    "title": "Coco",
    "tmdbId": 354912,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
    "budget": 175000000,
    "revenue": 814641172,
    "genres": [
      "Family",
      "Animation",
      "Music",
      "Adventure"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 105
  },
  {
    "title": "John Wick",
    "tmdbId": 245891,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg",
    "budget": 20000000,
    "revenue": 86085191,
    "genres": [
      "Action",
      "Thriller"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 101
  },
  {
    "title": "Parasite",
    "tmdbId": 496243,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "budget": 11363000,
    "revenue": 257591776,
    "genres": [
      "Comedy",
      "Thriller",
      "Drama"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 133
  },
  {
    "title": "Ant-Man",
    "tmdbId": 102899,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    "budget": 130000000,
    "revenue": 519311965,
    "genres": [
      "Science Fiction",
      "Adventure",
      "Action"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 117
  },
  {
    "title": "Harry Potter and the Order of the Phoenix",
    "tmdbId": 675,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
    "budget": 150000000,
    "revenue": 938212738,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 138
  },
  {
    "title": "Wonder Woman",
    "tmdbId": 297762,
    "posterUrl": "https://image.tmdb.org/t/p/w500/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg",
    "budget": 149000000,
    "revenue": 823970682,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 141
  },
  {
    "title": "Harry Potter and the Half-Blood Prince",
    "tmdbId": 767,
    "posterUrl": "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    "budget": 250000000,
    "revenue": 933959197,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 153
  },
  {
    "title": "Finding Nemo",
    "tmdbId": 12,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    "budget": 94000000,
    "revenue": 940335536,
    "genres": [
      "Animation",
      "Family",
      "Adventure"
    ],
    "releaseYear": "2003",
    "runtimeMinutes": 100
  },
  {
    "title": "Star Wars: The Force Awakens",
    "tmdbId": 140607,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    "budget": 245000000,
    "revenue": 2068223624,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 136
  },
  {
    "title": "WALL·E",
    "tmdbId": 10681,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "budget": 180000000,
    "revenue": 521311860,
    "genres": [
      "Animation",
      "Family",
      "Science Fiction"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 98
  },
  {
    "title": "Logan",
    "tmdbId": 263115,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    "budget": 97000000,
    "revenue": 619021436,
    "genres": [
      "Action",
      "Drama",
      "Science Fiction"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 137
  },
  {
    "title": "The Truman Show",
    "tmdbId": 37165,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
    "budget": 60000000,
    "revenue": 264118712,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "releaseYear": "1998",
    "runtimeMinutes": 103
  },
  {
    "title": "Harry Potter and the Deathly Hallows: Part 1",
    "tmdbId": 12444,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    "budget": 250000000,
    "revenue": 954305868,
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 146
  },
  {
    "title": "It",
    "tmdbId": 346364,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    "budget": 35000000,
    "revenue": 719766009,
    "genres": [
      "Horror",
      "Thriller",
      "Drama"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 135
  },
  {
    "title": "Toy Story",
    "tmdbId": 862,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "budget": 30000000,
    "revenue": 962301978,
    "genres": [
      "Family",
      "Comedy",
      "Animation",
      "Adventure"
    ],
    "releaseYear": "1995",
    "runtimeMinutes": 81
  },
  {
    "title": "Captain America: The Winter Soldier",
    "tmdbId": 100402,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    "budget": 170000000,
    "revenue": 714766572,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 136
  },
  {
    "title": "Gone Girl",
    "tmdbId": 210577,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
    "budget": 61000000,
    "revenue": 370890259,
    "genres": [
      "Mystery",
      "Thriller",
      "Drama"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 149
  },
  {
    "title": "Monsters, Inc.",
    "tmdbId": 585,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
    "budget": 115000000,
    "revenue": 579700000,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 92
  },
  {
    "title": "The Lion King",
    "tmdbId": 8587,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "budget": 45000000,
    "revenue": 763455561,
    "genres": [
      "Animation",
      "Family",
      "Drama"
    ],
    "releaseYear": "1994",
    "runtimeMinutes": 89
  },
  {
    "title": "The Hobbit: An Unexpected Journey",
    "tmdbId": 49051,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    "budget": 250000000,
    "revenue": 1021103568,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 169
  },
  {
    "title": "Fantastic Beasts and Where to Find Them",
    "tmdbId": 259316,
    "posterUrl": "https://image.tmdb.org/t/p/w500/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
    "budget": 180000000,
    "revenue": 809342332,
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 133
  },
  {
    "title": "Arrival",
    "tmdbId": 329865,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pEzNVQfdzYDzVK0XqxERIw2x2se.jpg",
    "budget": 47000000,
    "revenue": 203388186,
    "genres": [
      "Drama",
      "Science Fiction",
      "Mystery"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 116
  },
  {
    "title": "The Green Mile",
    "tmdbId": 497,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "budget": 60000000,
    "revenue": 286801374,
    "genres": [
      "Fantasy",
      "Drama",
      "Crime"
    ],
    "releaseYear": "1999",
    "runtimeMinutes": 189
  },
  {
    "title": "The Revenant",
    "tmdbId": 281957,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
    "budget": 135000000,
    "revenue": 532950503,
    "genres": [
      "Western",
      "Drama",
      "Adventure"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 157
  },
  {
    "title": "Deadpool 2",
    "tmdbId": 383498,
    "posterUrl": "https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
    "budget": 110000000,
    "revenue": 785896632,
    "genres": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 120
  },
  {
    "title": "Kill Bill: Vol. 1",
    "tmdbId": 24,
    "posterUrl": "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    "budget": 30000000,
    "revenue": 180906076,
    "genres": [
      "Action",
      "Crime"
    ],
    "releaseYear": "2003",
    "runtimeMinutes": 111
  },
  {
    "title": "The Shining",
    "tmdbId": 694,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg",
    "budget": 19000000,
    "revenue": 50312025,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "releaseYear": "1980",
    "runtimeMinutes": 144
  },
  {
    "title": "Batman v Superman: Dawn of Justice",
    "tmdbId": 209112,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    "budget": 250000000,
    "revenue": 874362803,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 152
  },
  {
    "title": "Get Out",
    "tmdbId": 419430,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "budget": 4500000,
    "revenue": 255407969,
    "genres": [
      "Mystery",
      "Thriller",
      "Horror"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 104
  },
  {
    "title": "Shrek",
    "tmdbId": 808,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    "budget": 60000000,
    "revenue": 489676241,
    "genres": [
      "Animation",
      "Comedy",
      "Fantasy",
      "Adventure",
      "Family"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 90
  },
  {
    "title": "The Incredibles",
    "tmdbId": 9806,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    "budget": 92000000,
    "revenue": 631442092,
    "genres": [
      "Action",
      "Adventure",
      "Animation",
      "Family"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 115
  },
  {
    "title": "The Amazing Spider-Man",
    "tmdbId": 1930,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jexoNYnPd6vVrmygwF6QZmWPFdu.jpg",
    "budget": 215000000,
    "revenue": 758725893,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 136
  },
  {
    "title": "Ratatouille",
    "tmdbId": 2062,
    "posterUrl": "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
    "budget": 150000000,
    "revenue": 623726000,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 111
  },
  {
    "title": "Spirited Away",
    "tmdbId": 129,
    "posterUrl": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "budget": 19000000,
    "revenue": 274925095,
    "genres": [
      "Animation",
      "Family",
      "Fantasy"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 125
  },
  {
    "title": "The Empire Strikes Back",
    "tmdbId": 1891,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
    "budget": 18000000,
    "revenue": 538400000,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "1980",
    "runtimeMinutes": 124
  },
  {
    "title": "The Intouchables",
    "tmdbId": 77338,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
    "budget": 13000000,
    "revenue": 426590315,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 113
  },
  {
    "title": "The Hunger Games: Catching Fire",
    "tmdbId": 101299,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
    "budget": 130000000,
    "revenue": 865011746,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 146
  },
  {
    "title": "Thor: The Dark World",
    "tmdbId": 76338,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    "budget": 170000000,
    "revenue": 644783140,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 112
  },
  {
    "title": "Split",
    "tmdbId": 381288,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lli31lYTFpvxVBeFHWoe5PMfW5s.jpg",
    "budget": 9000000,
    "revenue": 278454358,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 117
  },
  {
    "title": "Zootopia",
    "tmdbId": 269149,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    "budget": 150000000,
    "revenue": 1025521689,
    "genres": [
      "Animation",
      "Adventure",
      "Family",
      "Comedy"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 109
  },
  {
    "title": "The Hangover",
    "tmdbId": 18785,
    "posterUrl": "https://image.tmdb.org/t/p/w500/A0uS9rHR56FeBtpjVki16M5xxSW.jpg",
    "budget": 35000000,
    "revenue": 469310836,
    "genres": [
      "Comedy"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 100
  },
  {
    "title": "The Silence of the Lambs",
    "tmdbId": 274,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    "budget": 19000000,
    "revenue": 272742922,
    "genres": [
      "Crime",
      "Thriller",
      "Drama"
    ],
    "releaseYear": "1991",
    "runtimeMinutes": 119
  },
  {
    "title": "La La Land",
    "tmdbId": 313369,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    "budget": 30000000,
    "revenue": 509183536,
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 129
  },
  {
    "title": "The Maze Runner",
    "tmdbId": 198663,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg",
    "budget": 34000000,
    "revenue": 348319861,
    "genres": [
      "Action",
      "Mystery",
      "Science Fiction",
      "Thriller"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 113
  },
  {
    "title": "The Imitation Game",
    "tmdbId": 205596,
    "posterUrl": "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
    "budget": 14000000,
    "revenue": 233555708,
    "genres": [
      "History",
      "Drama",
      "Thriller",
      "War"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 113
  },
  {
    "title": "Jurassic Park",
    "tmdbId": 329,
    "posterUrl": "https://image.tmdb.org/t/p/w500/63viWuPfYQjRYLSZSZNq7dglJP5.jpg",
    "budget": 63000000,
    "revenue": 1058454230,
    "genres": [
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "1993",
    "runtimeMinutes": 127
  },
  {
    "title": "Kingsman: The Secret Service",
    "tmdbId": 207703,
    "posterUrl": "https://image.tmdb.org/t/p/w500/r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
    "budget": 81000000,
    "revenue": 414351546,
    "genres": [
      "Crime",
      "Comedy",
      "Action"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 129
  },
  {
    "title": "The Prestige",
    "tmdbId": 1124,
    "posterUrl": "https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    "budget": 40000000,
    "revenue": 109676311,
    "genres": [
      "Drama",
      "Mystery",
      "Science Fiction"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 130
  },
  {
    "title": "Bohemian Rhapsody",
    "tmdbId": 424694,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
    "budget": 52000000,
    "revenue": 910813521,
    "genres": [
      "Music",
      "Drama"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 135
  },
  {
    "title": "Dunkirk",
    "tmdbId": 374720,
    "posterUrl": "https://image.tmdb.org/t/p/w500/b4Oe15CGLL61Ped0RAS9JpqdmCt.jpg",
    "budget": 150000000,
    "revenue": 549136737,
    "genres": [
      "War",
      "Action",
      "Drama"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 107
  },
  {
    "title": "Schindler's List",
    "tmdbId": 424,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "budget": 22000000,
    "revenue": 321365567,
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "releaseYear": "1993",
    "runtimeMinutes": 195
  },
  {
    "title": "Frozen",
    "tmdbId": 109445,
    "posterUrl": "https://image.tmdb.org/t/p/w500/itAKcobTYGpYT8Phwjd8c9hleTo.jpg",
    "budget": 150000000,
    "revenue": 1274219009,
    "genres": [
      "Animation",
      "Family",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 102
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "tmdbId": 324857,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "budget": 90000000,
    "revenue": 394884133,
    "genres": [
      "Animation",
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 117
  },
  {
    "title": "Saving Private Ryan",
    "tmdbId": 857,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    "budget": 70000000,
    "revenue": 481840909,
    "genres": [
      "War",
      "Drama",
      "History"
    ],
    "releaseYear": "1998",
    "runtimeMinutes": 169
  },
  {
    "title": "Spider-Man: Far From Home",
    "tmdbId": 429617,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    "budget": 160000000,
    "revenue": 1132723226,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 129
  },
  {
    "title": "Venom",
    "tmdbId": 335983,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    "budget": 116000000,
    "revenue": 856085151,
    "genres": [
      "Science Fiction",
      "Action"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 112
  },
  {
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "tmdbId": 58,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
    "budget": 200000000,
    "revenue": 1066179747,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 151
  },
  {
    "title": "Catch Me If You Can",
    "tmdbId": 640,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
    "budget": 52000000,
    "revenue": 352114312,
    "genres": [
      "Drama",
      "Crime"
    ],
    "releaseYear": "2002",
    "runtimeMinutes": 141
  },
  {
    "title": "Lucy",
    "tmdbId": 240832,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
    "budget": 40000000,
    "revenue": 469058574,
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 89
  },
  {
    "title": "Ready Player One",
    "tmdbId": 333339,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    "budget": 175000000,
    "revenue": 607274134,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 140
  },
  {
    "title": "I Am Legend",
    "tmdbId": 6479,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
    "budget": 150000000,
    "revenue": 585410052,
    "genres": [
      "Drama",
      "Science Fiction",
      "Thriller"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 101
  },
  {
    "title": "Return of the Jedi",
    "tmdbId": 1892,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jQYlydvHm3kUix1f8prMucrplhm.jpg",
    "budget": 32350000,
    "revenue": 572700000,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "1983",
    "runtimeMinutes": 132
  },
  {
    "title": "Baby Driver",
    "tmdbId": 339403,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tYzFuYXmT8LOYASlFCkaPiAFAl0.jpg",
    "budget": 34000000,
    "revenue": 226945087,
    "genres": [
      "Action",
      "Crime"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 113
  },
  {
    "title": "Captain Marvel",
    "tmdbId": 299537,
    "posterUrl": "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    "budget": 152000000,
    "revenue": 1131416446,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 124
  },
  {
    "title": "Now You See Me",
    "tmdbId": 75656,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tWsNYbrqy1p1w6K9zRk0mSchztT.jpg",
    "budget": 75000000,
    "revenue": 351723989,
    "genres": [
      "Thriller",
      "Crime"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 116
  },
  {
    "title": "Whiplash",
    "tmdbId": 244786,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "budget": 3300000,
    "revenue": 50307484,
    "genres": [
      "Drama",
      "Music",
      "Thriller"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 107
  },
  {
    "title": "World War Z",
    "tmdbId": 72190,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aCnVdvExw6UWSeQfr0tUH3jr4qG.jpg",
    "budget": 200000000,
    "revenue": 531865000,
    "genres": [
      "Action",
      "Horror",
      "Science Fiction"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 116
  },
  {
    "title": "The Hunger Games: Mockingjay - Part 1",
    "tmdbId": 131631,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    "budget": 125000000,
    "revenue": 755356711,
    "genres": [
      "Science Fiction",
      "Adventure",
      "Thriller"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 123
  },
  {
    "title": "Big Hero 6",
    "tmdbId": 177572,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    "budget": 165000000,
    "revenue": 657870525,
    "genres": [
      "Adventure",
      "Family",
      "Animation",
      "Action",
      "Comedy"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 102
  },
  {
    "title": "Spider-Man 2",
    "tmdbId": 558,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aGuvNAaaZuWXYQQ6N2v7DeuP6mB.jpg",
    "budget": 200000000,
    "revenue": 788976453,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 127
  },
  {
    "title": "Alien",
    "tmdbId": 348,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    "budget": 11000000,
    "revenue": 104931801,
    "genres": [
      "Horror",
      "Science Fiction"
    ],
    "releaseYear": "1979",
    "runtimeMinutes": 117
  },
  {
    "title": "Rogue One: A Star Wars Story",
    "tmdbId": 330459,
    "posterUrl": "https://image.tmdb.org/t/p/w500/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
    "budget": 200000000,
    "revenue": 1056057273,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 133
  },
  {
    "title": "Memento",
    "tmdbId": 77,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nzlv62aC0octS5AklAiWpXLX9Z0.jpg",
    "budget": 9000000,
    "revenue": 40060108,
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "releaseYear": "2000",
    "runtimeMinutes": 113
  },
  {
    "title": "Eternal Sunshine of the Spotless Mind",
    "tmdbId": 38,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    "budget": 20000000,
    "revenue": 72258126,
    "genres": [
      "Science Fiction",
      "Drama",
      "Romance"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 108
  },
  {
    "title": "Star Wars: The Last Jedi",
    "tmdbId": 181808,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ySaaKHOLAQU5HoZqWmzDIj1VvZ1.jpg",
    "budget": 300000000,
    "revenue": 1334407706,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 152
  },
  {
    "title": "Gravity",
    "tmdbId": 49047,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
    "budget": 105000000,
    "revenue": 723192705,
    "genres": [
      "Science Fiction",
      "Thriller",
      "Drama"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 91
  },
  {
    "title": "X-Men: Days of Future Past",
    "tmdbId": 127585,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
    "budget": 250000000,
    "revenue": 748045700,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 132
  },
  {
    "title": "The Departed",
    "tmdbId": 1422,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    "budget": 90000000,
    "revenue": 291465000,
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 151
  },
  {
    "title": "Man of Steel",
    "tmdbId": 49521,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg",
    "budget": 225000000,
    "revenue": 668045518,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 143
  },
  {
    "title": "Léon: The Professional",
    "tmdbId": 101,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg",
    "budget": 16000000,
    "revenue": 20330788,
    "genres": [
      "Crime",
      "Drama",
      "Action"
    ],
    "releaseYear": "1994",
    "runtimeMinutes": 111
  },
  {
    "title": "The Grand Budapest Hotel",
    "tmdbId": 120467,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    "budget": 30000000,
    "revenue": 174600318,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 100
  },
  {
    "title": "Skyfall",
    "tmdbId": 37724,
    "posterUrl": "https://image.tmdb.org/t/p/w500/d0IVecFQvsGdSbnMAHqiYsNYaJT.jpg",
    "budget": 200000000,
    "revenue": 1108594176,
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 143
  },
  {
    "title": "Charlie and the Chocolate Factory",
    "tmdbId": 118,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iKP6wg3c6COUe8gYutoGG7qcPnO.jpg",
    "budget": 150000000,
    "revenue": 475000000,
    "genres": [
      "Adventure",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "releaseYear": "2005",
    "runtimeMinutes": 115
  },
  {
    "title": "Despicable Me",
    "tmdbId": 20352,
    "posterUrl": "https://image.tmdb.org/t/p/w500/b1BT309QWjtFUlJPLmXmrcHOWEL.jpg",
    "budget": 69000000,
    "revenue": 543284256,
    "genres": [
      "Animation",
      "Comedy",
      "Crime",
      "Science Fiction",
      "Family"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 95
  },
  {
    "title": "Star Wars: Episode I - The Phantom Menace",
    "tmdbId": 1893,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
    "budget": 115000000,
    "revenue": 1046515409,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "1999",
    "runtimeMinutes": 136
  },
  {
    "title": "Toy Story 3",
    "tmdbId": 10193,
    "posterUrl": "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    "budget": 200000000,
    "revenue": 1067316101,
    "genres": [
      "Animation",
      "Family",
      "Comedy"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 103
  },
  {
    "title": "Beauty and the Beast",
    "tmdbId": 321612,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hKegSKIDep2ewJWPUQD7u0KqFIp.jpg",
    "budget": 160000000,
    "revenue": 1266115964,
    "genres": [
      "Family",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 129
  },
  {
    "title": "V for Vendetta",
    "tmdbId": 752,
    "posterUrl": "https://image.tmdb.org/t/p/w500/piZOwjyk1g51oPHonc7zaQY3WOv.jpg",
    "budget": 54000000,
    "revenue": 134686457,
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 132
  },
  {
    "title": "Black Swan",
    "tmdbId": 44214,
    "posterUrl": "https://image.tmdb.org/t/p/w500/viWheBd44bouiLCHgNMvahLThqx.jpg",
    "budget": 13000000,
    "revenue": 329398046,
    "genres": [
      "Drama",
      "Thriller",
      "Horror"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 108
  },
  {
    "title": "Reservoir Dogs",
    "tmdbId": 500,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
    "budget": 1200000,
    "revenue": 2859750,
    "genres": [
      "Crime",
      "Thriller"
    ],
    "releaseYear": "1992",
    "runtimeMinutes": 99
  },
  {
    "title": "Pirates of the Caribbean: At World's End",
    "tmdbId": 285,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    "budget": 300000000,
    "revenue": 961691209,
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 169
  },
  {
    "title": "Spider-Man 3",
    "tmdbId": 559,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg",
    "budget": 258000000,
    "revenue": 894983373,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 139
  },
  {
    "title": "The Hobbit: The Battle of the Five Armies",
    "tmdbId": 122917,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    "budget": 250000000,
    "revenue": 956019788,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 144
  },
  {
    "title": "A Quiet Place",
    "tmdbId": 447332,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "budget": 17000000,
    "revenue": 340955294,
    "genres": [
      "Horror",
      "Drama",
      "Science Fiction"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 91
  },
  {
    "title": "Blade Runner 2049",
    "tmdbId": 335984,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "budget": 150000000,
    "revenue": 259239658,
    "genres": [
      "Science Fiction",
      "Drama"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 164
  },
  {
    "title": "Her",
    "tmdbId": 152601,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    "budget": 23000000,
    "revenue": 47351251,
    "genres": [
      "Romance",
      "Science Fiction",
      "Drama"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 126
  },
  {
    "title": "The Hateful Eight",
    "tmdbId": 273248,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg",
    "budget": 44000000,
    "revenue": 155760117,
    "genres": [
      "Drama",
      "Mystery",
      "Western"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 188
  },
  {
    "title": "Dune",
    "tmdbId": 438631,
    "posterUrl": "https://image.tmdb.org/t/p/w500/v1tRXZ4JtD2Iv6fjkPvT4GiwslV.jpg",
    "budget": 165000000,
    "revenue": 410668500,
    "genres": [
      "Science Fiction",
      "Adventure"
    ],
    "releaseYear": "2021",
    "runtimeMinutes": 155
  },
  {
    "title": "Cars",
    "tmdbId": 920,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2Touk3m5gzsqr1VsvxypdyHY5ci.jpg",
    "budget": 120000000,
    "revenue": 461983149,
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 117
  },
  {
    "title": "Edge of Tomorrow",
    "tmdbId": 137113,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
    "budget": 178000000,
    "revenue": 370541256,
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 114
  },
  {
    "title": "Kill Bill: Vol. 2",
    "tmdbId": 393,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg",
    "budget": 30000000,
    "revenue": 152159461,
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 136
  },
  {
    "title": "Blade Runner",
    "tmdbId": 78,
    "posterUrl": "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
    "budget": 28000000,
    "revenue": 41722424,
    "genres": [
      "Science Fiction",
      "Drama",
      "Thriller"
    ],
    "releaseYear": "1982",
    "runtimeMinutes": 118
  },
  {
    "title": "Toy Story 2",
    "tmdbId": 863,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4rbcp3ng8n1MKHjpeqW0L7Fnpzz.jpg",
    "budget": 90000000,
    "revenue": 497375404,
    "genres": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "releaseYear": "1999",
    "runtimeMinutes": 92
  },
  {
    "title": "Star Wars: Episode III - Revenge of the Sith",
    "tmdbId": 1895,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
    "budget": 113000000,
    "revenue": 850000000,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2005",
    "runtimeMinutes": 140
  },
  {
    "title": "Hacksaw Ridge",
    "tmdbId": 324786,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fnOMP6mjmOmZwmlC1n0K7ivrzt1.jpg",
    "budget": 40000000,
    "revenue": 175302354,
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 139
  },
  {
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "tmdbId": 1865,
    "posterUrl": "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    "budget": 379000000,
    "revenue": 1046721266,
    "genres": [
      "Adventure",
      "Action",
      "Fantasy"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 136
  },
  {
    "title": "Once Upon a Time... in Hollywood",
    "tmdbId": 466272,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
    "budget": 95000000,
    "revenue": 393869691,
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 162
  },
  {
    "title": "Aquaman",
    "tmdbId": 297802,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ufl63EFcc5XpByEV2Ecdw6WJZAI.jpg",
    "budget": 160000000,
    "revenue": 1152028393,
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 143
  },
  {
    "title": "Men in Black",
    "tmdbId": 607,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg",
    "budget": 90000000,
    "revenue": 589390539,
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Science Fiction"
    ],
    "releaseYear": "1997",
    "runtimeMinutes": 98
  },
  {
    "title": "The Terminator",
    "tmdbId": 218,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    "budget": 6400000,
    "revenue": 78371200,
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "releaseYear": "1984",
    "runtimeMinutes": 108
  },
  {
    "title": "300",
    "tmdbId": 1271,
    "posterUrl": "https://image.tmdb.org/t/p/w500/h7Lcio0c9ohxPhSZg42eTlKIVVY.jpg",
    "budget": 65000000,
    "revenue": 456082343,
    "genres": [
      "Action",
      "Adventure",
      "War"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 117
  },
  {
    "title": "Alice in Wonderland",
    "tmdbId": 12155,
    "posterUrl": "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
    "budget": 200000000,
    "revenue": 1025467110,
    "genres": [
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 108
  },
  {
    "title": "Sherlock Holmes",
    "tmdbId": 10528,
    "posterUrl": "https://image.tmdb.org/t/p/w500/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
    "budget": 90000000,
    "revenue": 524028679,
    "genres": [
      "Action",
      "Adventure",
      "Mystery"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 129
  },
  {
    "title": "Terminator 2: Judgment Day",
    "tmdbId": 280,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg",
    "budget": 102000000,
    "revenue": 517814175,
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "releaseYear": "1991",
    "runtimeMinutes": 137
  },
  {
    "title": "Jumanji: Welcome to the Jungle",
    "tmdbId": 353486,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
    "budget": 90000000,
    "revenue": 995339117,
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 119
  },
  {
    "title": "GoodFellas",
    "tmdbId": 769,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
    "budget": 25000000,
    "revenue": 47072327,
    "genres": [
      "Drama",
      "Crime"
    ],
    "releaseYear": "1990",
    "runtimeMinutes": 145
  },
  {
    "title": "The Amazing Spider-Man 2",
    "tmdbId": 102382,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bU7nTmvmy0h3VUP01v1T2imgH6N.jpg",
    "budget": 200000000,
    "revenue": 716934779,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 141
  },
  {
    "title": "How to Train Your Dragon",
    "tmdbId": 10191,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    "budget": 165000000,
    "revenue": 495141736,
    "genres": [
      "Fantasy",
      "Adventure",
      "Animation",
      "Family"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 98
  },
  {
    "title": "Star Wars: Episode II - Attack of the Clones",
    "tmdbId": 1894,
    "posterUrl": "https://image.tmdb.org/t/p/w500/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
    "budget": 120000000,
    "revenue": 649398328,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2002",
    "runtimeMinutes": 142
  },
  {
    "title": "Twilight",
    "tmdbId": 8966,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
    "budget": 37000000,
    "revenue": 393616788,
    "genres": [
      "Fantasy",
      "Drama",
      "Romance"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 122
  },
  {
    "title": "Avatar: The Way of Water",
    "tmdbId": 76600,
    "posterUrl": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "budget": 460000000,
    "revenue": 2334484620,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2022",
    "runtimeMinutes": 192
  },
  {
    "title": "Ice Age",
    "tmdbId": 425,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
    "budget": 59000000,
    "revenue": 383257136,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Adventure"
    ],
    "releaseYear": "2002",
    "runtimeMinutes": 81
  },
  {
    "title": "John Wick: Chapter 2",
    "tmdbId": 324552,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
    "budget": 40000000,
    "revenue": 171539887,
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 122
  },
  {
    "title": "Ex Machina",
    "tmdbId": 264660,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    "budget": 15000000,
    "revenue": 36869414,
    "genres": [
      "Drama",
      "Science Fiction"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 108
  },
  {
    "title": "The Hobbit: The Desolation of Smaug",
    "tmdbId": 57158,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    "budget": 250000000,
    "revenue": 958400000,
    "genres": [
      "Fantasy",
      "Adventure",
      "Action"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 161
  },
  {
    "title": "Passengers",
    "tmdbId": 274870,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jK9S6HANSf2no64v1x1HxfcpmcA.jpg",
    "budget": 110000000,
    "revenue": 303144152,
    "genres": [
      "Drama",
      "Romance",
      "Science Fiction"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 116
  },
  {
    "title": "Ant-Man and the Wasp",
    "tmdbId": 363088,
    "posterUrl": "https://image.tmdb.org/t/p/w500/cFQEO687n1K6umXbInzocxcnAQz.jpg",
    "budget": 140000000,
    "revenue": 622674139,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 119
  },
  {
    "title": "Knives Out",
    "tmdbId": 546554,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    "budget": 40000000,
    "revenue": 312897920,
    "genres": [
      "Comedy",
      "Crime",
      "Mystery"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 131
  },
  {
    "title": "Brave",
    "tmdbId": 62177,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg",
    "budget": 185000000,
    "revenue": 538983207,
    "genres": [
      "Adventure",
      "Animation",
      "Family",
      "Fantasy"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 93
  },
  {
    "title": "The Godfather Part II",
    "tmdbId": 240,
    "posterUrl": "https://image.tmdb.org/t/p/w500/sSuQTCZwqKrNBNIsksO9IAUoWP9.jpg",
    "budget": 13000000,
    "revenue": 102600000,
    "genres": [
      "Drama",
      "Crime"
    ],
    "releaseYear": "1974",
    "runtimeMinutes": 202
  },
  {
    "title": "Good Will Hunting",
    "tmdbId": 489,
    "posterUrl": "https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
    "budget": 10000000,
    "revenue": 225933435,
    "genres": [
      "Drama"
    ],
    "releaseYear": "1997",
    "runtimeMinutes": 127
  },
  {
    "title": "Back to the Future Part II",
    "tmdbId": 165,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",
    "budget": 40000000,
    "revenue": 332000000,
    "genres": [
      "Adventure",
      "Comedy",
      "Science Fiction"
    ],
    "releaseYear": "1989",
    "runtimeMinutes": 108
  },
  {
    "title": "Life Is Beautiful",
    "tmdbId": 637,
    "posterUrl": "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
    "budget": 20000000,
    "revenue": 230098753,
    "genres": [
      "Comedy",
      "Drama"
    ],
    "releaseYear": "1997",
    "runtimeMinutes": 116
  },
  {
    "title": "The Devil Wears Prada",
    "tmdbId": 350,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8912AsVuS7Sj915apArUFbv6F9L.jpg",
    "budget": 35000000,
    "revenue": 326588371,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 109
  },
  {
    "title": "A Clockwork Orange",
    "tmdbId": 185,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
    "budget": 2200000,
    "revenue": 27033812,
    "genres": [
      "Science Fiction",
      "Crime"
    ],
    "releaseYear": "1971",
    "runtimeMinutes": 137
  },
  {
    "title": "X-Men: Apocalypse",
    "tmdbId": 246655,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ikA8UhYdTGpqbatFa93nIf6noSr.jpg",
    "budget": 178000000,
    "revenue": 543934787,
    "genres": [
      "Science Fiction",
      "Fantasy",
      "Action"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 144
  },
  {
    "title": "Edward Scissorhands",
    "tmdbId": 162,
    "posterUrl": "https://image.tmdb.org/t/p/w500/e0FqKFvGPdQNWG8tF9cZBtev9Em.jpg",
    "budget": 20000000,
    "revenue": 86024005,
    "genres": [
      "Fantasy",
      "Drama",
      "Romance"
    ],
    "releaseYear": "1990",
    "runtimeMinutes": 105
  },
  {
    "title": "The Curious Case of Benjamin Button",
    "tmdbId": 4922,
    "posterUrl": "https://image.tmdb.org/t/p/w500/26wEWZYt6yJkwRVkjcbwJEFh9IS.jpg",
    "budget": 150000000,
    "revenue": 335802786,
    "genres": [
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 166
  },
  {
    "title": "Moana",
    "tmdbId": 277834,
    "posterUrl": "https://image.tmdb.org/t/p/w500/4JeejGugONWpJkbnvL12hVoYEDa.jpg",
    "budget": 150000000,
    "revenue": 690860472,
    "genres": [
      "Adventure",
      "Comedy",
      "Family",
      "Animation"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 107
  },
  {
    "title": "Life of Pi",
    "tmdbId": 87827,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iLgRu4hhSr6V1uManX6ukDriiSc.jpg",
    "budget": 120000000,
    "revenue": 609016565,
    "genres": [
      "Adventure",
      "Drama"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 127
  },
  {
    "title": "Drive",
    "tmdbId": 64690,
    "posterUrl": "https://image.tmdb.org/t/p/w500/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    "budget": 15000000,
    "revenue": 79713640,
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 100
  },
  {
    "title": "Raiders of the Lost Ark",
    "tmdbId": 85,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
    "budget": 18000000,
    "revenue": 389925971,
    "genres": [
      "Adventure",
      "Action"
    ],
    "releaseYear": "1981",
    "runtimeMinutes": 115
  },
  {
    "title": "Maleficent",
    "tmdbId": 102651,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ik8PugpL41s137RAWEGTAWu0dPo.jpg",
    "budget": 180000000,
    "revenue": 758539785,
    "genres": [
      "Fantasy",
      "Adventure",
      "Action",
      "Family",
      "Romance"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 97
  },
  {
    "title": "Incredibles 2",
    "tmdbId": 260513,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    "budget": 200000000,
    "revenue": 1243225667,
    "genres": [
      "Action",
      "Adventure",
      "Animation",
      "Family"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 118
  },
  {
    "title": "Justice League",
    "tmdbId": 141052,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    "budget": 300000000,
    "revenue": 661326987,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 120
  },
  {
    "title": "1917",
    "tmdbId": 530915,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    "budget": 100000000,
    "revenue": 446064352,
    "genres": [
      "War",
      "Drama",
      "History"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 119
  },
  {
    "title": "American Sniper",
    "tmdbId": 190859,
    "posterUrl": "https://image.tmdb.org/t/p/w500/i1U46OwMc6vlm7OoSUKfqUH615e.jpg",
    "budget": 58800000,
    "revenue": 542300000,
    "genres": [
      "War",
      "Action"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 133
  },
  {
    "title": "X-Men: First Class",
    "tmdbId": 49538,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hNEokmUke0dazoBhttFN0o3L7Xv.jpg",
    "budget": 160000000,
    "revenue": 353624124,
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 132
  },
  {
    "title": "Birdman or (The Unexpected Virtue of Ignorance)",
    "tmdbId": 194662,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rHUg2AuIuLSIYMYFgavVwqt1jtc.jpg",
    "budget": 18000000,
    "revenue": 103215094,
    "genres": [
      "Drama",
      "Comedy"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 120
  },
  {
    "title": "Pacific Rim",
    "tmdbId": 68726,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8wo4eN8dWKaKlxhSvBz19uvj8gA.jpg",
    "budget": 180000000,
    "revenue": 411000000,
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 131
  },
  {
    "title": "Taxi Driver",
    "tmdbId": 103,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    "budget": 1900000,
    "revenue": 28579636,
    "genres": [
      "Crime",
      "Drama"
    ],
    "releaseYear": "1976",
    "runtimeMinutes": 114
  },
  {
    "title": "Shrek 2",
    "tmdbId": 809,
    "posterUrl": "https://image.tmdb.org/t/p/w500/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
    "budget": 150000000,
    "revenue": 932542741,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 92
  },
  {
    "title": "No Country for Old Men",
    "tmdbId": 6977,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    "budget": 25000000,
    "revenue": 171627166,
    "genres": [
      "Crime",
      "Thriller",
      "Western"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 122
  },
  {
    "title": "Donnie Darko",
    "tmdbId": 141,
    "posterUrl": "https://image.tmdb.org/t/p/w500/j2AtZFsflxiluaNtajMTI0Avm8C.jpg",
    "budget": 4500000,
    "revenue": 7500000,
    "genres": [
      "Fantasy",
      "Drama",
      "Mystery"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 114
  },
  {
    "title": "Divergent",
    "tmdbId": 157350,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aNh4Q3iuPKDMPi2SL7GgOpiLukX.jpg",
    "budget": 85000000,
    "revenue": 288885818,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 140
  },
  {
    "title": "Prometheus",
    "tmdbId": 70981,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qsYQflQhOuhDpQ0W2aOcwqgDAeI.jpg",
    "budget": 130000000,
    "revenue": 403354469,
    "genres": [
      "Science Fiction",
      "Mystery",
      "Horror"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 124
  },
  {
    "title": "The Hunger Games: Mockingjay - Part 2",
    "tmdbId": 131634,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lImKHDfExAulp16grYm8zD5eONE.jpg",
    "budget": 160000000,
    "revenue": 653428261,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 137
  },
  {
    "title": "Me Before You",
    "tmdbId": 296096,
    "posterUrl": "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    "budget": 20000000,
    "revenue": 207945075,
    "genres": [
      "Drama",
      "Romance"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 110
  },
  {
    "title": "The Social Network",
    "tmdbId": 37799,
    "posterUrl": "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    "budget": 40000000,
    "revenue": 224920315,
    "genres": [
      "Drama"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 121
  },
  {
    "title": "Prisoners",
    "tmdbId": 146233,
    "posterUrl": "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
    "budget": 46000000,
    "revenue": 122127446,
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 153
  },
  {
    "title": "Zombieland",
    "tmdbId": 19908,
    "posterUrl": "https://image.tmdb.org/t/p/w500/dUkAmAyPVqubSBNRjRqCgHggZcK.jpg",
    "budget": 23600000,
    "revenue": 102391540,
    "genres": [
      "Comedy",
      "Horror"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 88
  },
  {
    "title": "Ted",
    "tmdbId": 72105,
    "posterUrl": "https://image.tmdb.org/t/p/w500/1QVZXQQHCEIj8lyUhdBYd2qOYtq.jpg",
    "budget": 50000000,
    "revenue": 549368315,
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 107
  },
  {
    "title": "Scarface",
    "tmdbId": 111,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    "budget": 25000000,
    "revenue": 66023329,
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "releaseYear": "1983",
    "runtimeMinutes": 170
  },
  {
    "title": "American Beauty",
    "tmdbId": 14,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wby9315QzVKdW9BonAefg8jGTTb.jpg",
    "budget": 15000000,
    "revenue": 356296601,
    "genres": [
      "Drama"
    ],
    "releaseYear": "1999",
    "runtimeMinutes": 122
  },
  {
    "title": "Wreck-It Ralph",
    "tmdbId": 82690,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nrEupcBwf4O1zihCM34NoXusZDq.jpg",
    "budget": 165000000,
    "revenue": 471222889,
    "genres": [
      "Family",
      "Animation",
      "Comedy",
      "Adventure"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 101
  },
  {
    "title": "The Sixth Sense",
    "tmdbId": 745,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vOyfUXNFSnaTk7Vk5AjpsKTUWsu.jpg",
    "budget": 40000000,
    "revenue": 672800000,
    "genres": [
      "Mystery",
      "Thriller",
      "Drama"
    ],
    "releaseYear": "1999",
    "runtimeMinutes": 107
  },
  {
    "title": "Fury",
    "tmdbId": 228150,
    "posterUrl": "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    "budget": 68000000,
    "revenue": 211817906,
    "genres": [
      "War",
      "Drama",
      "Action"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 135
  },
  {
    "title": "Green Book",
    "tmdbId": 490132,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    "budget": 23000000,
    "revenue": 321752656,
    "genres": [
      "Drama",
      "Comedy",
      "History"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 130
  },
  {
    "title": "The Great Gatsby",
    "tmdbId": 64682,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nimh1rrDDLhgpG8XAYoUZXHYwb6.jpg",
    "budget": 105000000,
    "revenue": 351040419,
    "genres": [
      "Drama",
      "Romance"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 143
  },
  {
    "title": "The Incredible Hulk",
    "tmdbId": 1724,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
    "budget": 150000000,
    "revenue": 264770996,
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 114
  },
  {
    "title": "The Shape of Water",
    "tmdbId": 399055,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
    "budget": 19500000,
    "revenue": 195300000,
    "genres": [
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 123
  },
  {
    "title": "Rise of the Planet of the Apes",
    "tmdbId": 61791,
    "posterUrl": "https://image.tmdb.org/t/p/w500/oqA45qMyyo1TtrnVEBKxqmTPhbN.jpg",
    "budget": 93000000,
    "revenue": 481800873,
    "genres": [
      "Thriller",
      "Action",
      "Drama",
      "Science Fiction"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 105
  },
  {
    "title": "Pirates of the Caribbean: Dead Men Tell No Tales",
    "tmdbId": 166426,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6lAPOAFYFWIO3SQRemEY2wInQMC.jpg",
    "budget": 230000000,
    "revenue": 795922298,
    "genres": [
      "Adventure",
      "Action",
      "Fantasy"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 129
  },
  {
    "title": "The Conjuring",
    "tmdbId": 138843,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    "budget": 13000000,
    "revenue": 321293998,
    "genres": [
      "Horror",
      "Thriller"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 112
  },
  {
    "title": "2012",
    "tmdbId": 14161,
    "posterUrl": "https://image.tmdb.org/t/p/w500/c2PkTPT5D9zB8SIm5wNlDAANEqM.jpg",
    "budget": 200000000,
    "revenue": 791217826,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 158
  },
  {
    "title": "Jurassic World: Fallen Kingdom",
    "tmdbId": 351286,
    "posterUrl": "https://image.tmdb.org/t/p/w500/x2Us3jR6ToMJjbcPbLimYoxf6xr.jpg",
    "budget": 170000000,
    "revenue": 1310469037,
    "genres": [
      "Adventure",
      "Science Fiction",
      "Thriller",
      "Action"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 129
  },
  {
    "title": "Kung Fu Panda",
    "tmdbId": 9502,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
    "budget": 130000000,
    "revenue": 632091832,
    "genres": [
      "Action",
      "Animation",
      "Comedy",
      "Family"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 90
  },
  {
    "title": "Your Name.",
    "tmdbId": 372058,
    "posterUrl": "https://image.tmdb.org/t/p/w500/vfJFJPepRKapMd5G2ro7klIRysq.jpg",
    "budget": 7500000,
    "revenue": 407210429,
    "genres": [
      "Animation",
      "Romance",
      "Drama"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 106
  },
  {
    "title": "I, Robot",
    "tmdbId": 2048,
    "posterUrl": "https://image.tmdb.org/t/p/w500/efwv6F2lGaghjPpBRSINHtoEiZB.jpg",
    "budget": 120000000,
    "revenue": 347234916,
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 115
  },
  {
    "title": "Call Me by Your Name",
    "tmdbId": 398818,
    "posterUrl": "https://image.tmdb.org/t/p/w500/gXiE0WveDnT0n5J4sW9TMxXF4oT.jpg",
    "budget": 3500000,
    "revenue": 43143046,
    "genres": [
      "Romance",
      "Drama"
    ],
    "releaseYear": "2017",
    "runtimeMinutes": 132
  },
  {
    "title": "Dead Poets Society",
    "tmdbId": 207,
    "posterUrl": "https://image.tmdb.org/t/p/w500/tNvKkSnnn4Z6RCBThyK1gfCSSvv.jpg",
    "budget": 16400000,
    "revenue": 235860116,
    "genres": [
      "Drama"
    ],
    "releaseYear": "1989",
    "runtimeMinutes": 129
  },
  {
    "title": "2001: A Space Odyssey",
    "tmdbId": 62,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
    "budget": 12000000,
    "revenue": 71923560,
    "genres": [
      "Science Fiction",
      "Mystery",
      "Adventure"
    ],
    "releaseYear": "1968",
    "runtimeMinutes": 149
  },
  {
    "title": "American History X",
    "tmdbId": 73,
    "posterUrl": "https://image.tmdb.org/t/p/w500/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg",
    "budget": 20000000,
    "revenue": 23900000,
    "genres": [
      "Drama"
    ],
    "releaseYear": "1998",
    "runtimeMinutes": 119
  },
  {
    "title": "Ocean's Eleven",
    "tmdbId": 161,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hQQCdZrsHtZyR6NbKH2YyCqd2fR.jpg",
    "budget": 85000000,
    "revenue": 450717150,
    "genres": [
      "Thriller",
      "Crime"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 116
  },
  {
    "title": "The Notebook",
    "tmdbId": 11036,
    "posterUrl": "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
    "budget": 29000000,
    "revenue": 115600000,
    "genres": [
      "Romance",
      "Drama"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 123
  },
  {
    "title": "Finding Dory",
    "tmdbId": 127380,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg",
    "budget": 200000000,
    "revenue": 1029266989,
    "genres": [
      "Adventure",
      "Animation",
      "Family"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 97
  },
  {
    "title": "Silver Linings Playbook",
    "tmdbId": 82693,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fhHB1uvfFKKFbj6bTKE8xdtsjKi.jpg",
    "budget": 21000000,
    "revenue": 236412453,
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "releaseYear": "2012",
    "runtimeMinutes": 122
  },
  {
    "title": "Home Alone",
    "tmdbId": 771,
    "posterUrl": "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",
    "budget": 18000000,
    "revenue": 476684675,
    "genres": [
      "Comedy",
      "Family"
    ],
    "releaseYear": "1990",
    "runtimeMinutes": 103
  },
  {
    "title": "American Psycho",
    "tmdbId": 1359,
    "posterUrl": "https://image.tmdb.org/t/p/w500/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg",
    "budget": 7000000,
    "revenue": 34269748,
    "genres": [
      "Thriller",
      "Drama",
      "Crime"
    ],
    "releaseYear": "2000",
    "runtimeMinutes": 102
  },
  {
    "title": "Tangled",
    "tmdbId": 38757,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    "budget": 260000000,
    "revenue": 592461732,
    "genres": [
      "Animation",
      "Family",
      "Adventure"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 100
  },
  {
    "title": "Amélie",
    "tmdbId": 194,
    "posterUrl": "https://image.tmdb.org/t/p/w500/nSxDa3M9aMvGVLoItzWTepQ5h5d.jpg",
    "budget": 10000000,
    "revenue": 173921954,
    "genres": [
      "Comedy",
      "Romance"
    ],
    "releaseYear": "2001",
    "runtimeMinutes": 122
  },
  {
    "title": "Kick-Ass",
    "tmdbId": 23483,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iHMbrTHJwocsNvo5murCBw0CwTo.jpg",
    "budget": 28000000,
    "revenue": 96188903,
    "genres": [
      "Action",
      "Crime"
    ],
    "releaseYear": "2010",
    "runtimeMinutes": 118
  },
  {
    "title": "Die Hard",
    "tmdbId": 562,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7Bjd8kfmDSOzpmhySpEhkUyK2oH.jpg",
    "budget": 28000000,
    "revenue": 140767956,
    "genres": [
      "Action",
      "Thriller"
    ],
    "releaseYear": "1988",
    "runtimeMinutes": 132
  },
  {
    "title": "Fifty Shades of Grey",
    "tmdbId": 216015,
    "posterUrl": "https://image.tmdb.org/t/p/w500/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
    "budget": 40000000,
    "revenue": 569651467,
    "genres": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 125
  },
  {
    "title": "Cast Away",
    "tmdbId": 8358,
    "posterUrl": "https://image.tmdb.org/t/p/w500/7lLJgKnAicAcR5UEuo8xhSMj18w.jpg",
    "budget": 90000000,
    "revenue": 429632142,
    "genres": [
      "Adventure",
      "Drama"
    ],
    "releaseYear": "2000",
    "runtimeMinutes": 143
  },
  {
    "title": "Transformers",
    "tmdbId": 1858,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lkZ9gqCEjzX85lKR6Jjd1uGAXNp.jpg",
    "budget": 150000000,
    "revenue": 709709780,
    "genres": [
      "Adventure",
      "Science Fiction",
      "Action"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 144
  },
  {
    "title": "X-Men",
    "tmdbId": 36657,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bRDAc4GogyS9ci3ow7UnInOcriN.jpg",
    "budget": 75000000,
    "revenue": 296339527,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2000",
    "runtimeMinutes": 104
  },
  {
    "title": "Dawn of the Planet of the Apes",
    "tmdbId": 119450,
    "posterUrl": "https://image.tmdb.org/t/p/w500/mSmAc9G25fhOHH45SLEeagR0qi7.jpg",
    "budget": 170000000,
    "revenue": 710644566,
    "genres": [
      "Science Fiction",
      "Action",
      "Drama",
      "Thriller"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 130
  },
  {
    "title": "The Batman",
    "tmdbId": 414906,
    "posterUrl": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "budget": 185000000,
    "revenue": 772775278,
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "releaseYear": "2022",
    "runtimeMinutes": 177
  },
  {
    "title": "The Big Lebowski",
    "tmdbId": 115,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3bv6WAp6BSxxYvB5ozKFUYuRA8C.jpg",
    "budget": 15000000,
    "revenue": 47010480,
    "genres": [
      "Comedy",
      "Crime"
    ],
    "releaseYear": "1998",
    "runtimeMinutes": 117
  },
  {
    "title": "Oppenheimer",
    "tmdbId": 872585,
    "posterUrl": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "budget": 100000000,
    "revenue": 952000000,
    "genres": [
      "Drama",
      "History"
    ],
    "releaseYear": "2023",
    "runtimeMinutes": 181
  },
  {
    "title": "In Time",
    "tmdbId": 49530,
    "posterUrl": "https://image.tmdb.org/t/p/w500/3Mwj2sIONQckOZP3YwsUXF7U5I4.jpg",
    "budget": 40000000,
    "revenue": 173900000,
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 109
  },
  {
    "title": "A Star Is Born",
    "tmdbId": 332562,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    "budget": 36000000,
    "revenue": 436388866,
    "genres": [
      "Music",
      "Drama",
      "Romance"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 136
  },
  {
    "title": "Taken",
    "tmdbId": 8681,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ognkaUSNgJe1a2pjB4UNdzEo5jT.jpg",
    "budget": 25000000,
    "revenue": 226830568,
    "genres": [
      "Action",
      "Thriller"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 94
  },
  {
    "title": "The Matrix Reloaded",
    "tmdbId": 604,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
    "budget": 150000000,
    "revenue": 738599701,
    "genres": [
      "Adventure",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "releaseYear": "2003",
    "runtimeMinutes": 138
  },
  {
    "title": "Aladdin",
    "tmdbId": 812,
    "posterUrl": "https://image.tmdb.org/t/p/w500/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg",
    "budget": 28000000,
    "revenue": 504050219,
    "genres": [
      "Animation",
      "Family",
      "Adventure",
      "Fantasy",
      "Romance"
    ],
    "releaseYear": "1992",
    "runtimeMinutes": 91
  },
  {
    "title": "E.T. the Extra-Terrestrial",
    "tmdbId": 601,
    "posterUrl": "https://image.tmdb.org/t/p/w500/an0nD6uq6byfxXCfk6lQBzdL2J1.jpg",
    "budget": 10500000,
    "revenue": 797307407,
    "genres": [
      "Adventure",
      "Science Fiction",
      "Family"
    ],
    "releaseYear": "1982",
    "runtimeMinutes": 115
  },
  {
    "title": "Despicable Me 2",
    "tmdbId": 93456,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
    "budget": 76000000,
    "revenue": 970766005,
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Science Fiction"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 98
  },
  {
    "title": "12 Years a Slave",
    "tmdbId": 76203,
    "posterUrl": "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
    "budget": 20000000,
    "revenue": 187000000,
    "genres": [
      "Drama",
      "History"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 134
  },
  {
    "title": "The Fifth Element",
    "tmdbId": 18,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg",
    "budget": 90000000,
    "revenue": 263920180,
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "releaseYear": "1997",
    "runtimeMinutes": 126
  },
  {
    "title": "John Wick: Chapter 3 - Parabellum",
    "tmdbId": 458156,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    "budget": 55000000,
    "revenue": 328349908,
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "releaseYear": "2019",
    "runtimeMinutes": 131
  },
  {
    "title": "Nightcrawler",
    "tmdbId": 242582,
    "posterUrl": "https://image.tmdb.org/t/p/w500/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
    "budget": 8500000,
    "revenue": 47425835,
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 118
  },
  {
    "title": "Casino Royale",
    "tmdbId": 36557,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lMrxYKKhd4lqRzwUHAy5gcx9PSO.jpg",
    "budget": 150000000,
    "revenue": 599045960,
    "genres": [
      "Adventure",
      "Action",
      "Thriller"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 144
  },
  {
    "title": "Madagascar",
    "tmdbId": 953,
    "posterUrl": "https://image.tmdb.org/t/p/w500/zMpJY5CJKUufG9OTw0In4eAFqPX.jpg",
    "budget": 75000000,
    "revenue": 542064525,
    "genres": [
      "Adventure",
      "Animation",
      "Comedy",
      "Family"
    ],
    "releaseYear": "2005",
    "runtimeMinutes": 86
  },
  {
    "title": "Zodiac",
    "tmdbId": 1949,
    "posterUrl": "https://image.tmdb.org/t/p/w500/6YmeO4pB7XTh8P8F960O1uA14JO.jpg",
    "budget": 65000000,
    "revenue": 84785914,
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "releaseYear": "2007",
    "runtimeMinutes": 157
  },
  {
    "title": "Jaws",
    "tmdbId": 578,
    "posterUrl": "https://image.tmdb.org/t/p/w500/lxM6kqilAdpdhqUl2biYp5frUxE.jpg",
    "budget": 7000000,
    "revenue": 470653000,
    "genres": [
      "Horror",
      "Thriller",
      "Adventure"
    ],
    "releaseYear": "1975",
    "runtimeMinutes": 124
  },
  {
    "title": "Oblivion",
    "tmdbId": 75612,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bYLM3GpNUZnoFElPXp1zlhDPdtv.jpg",
    "budget": 120000000,
    "revenue": 286168572,
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure",
      "Mystery"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 124
  },
  {
    "title": "Gran Torino",
    "tmdbId": 13223,
    "posterUrl": "https://image.tmdb.org/t/p/w500/zUybYvxWdAJy5hhYovsXtHSWI1l.jpg",
    "budget": 33000000,
    "revenue": 270000000,
    "genres": [
      "Drama"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 116
  },
  {
    "title": "Back to the Future Part III",
    "tmdbId": 196,
    "posterUrl": "https://image.tmdb.org/t/p/w500/crzoVQnMzIrRfHtQw0tLBirNfVg.jpg",
    "budget": 40000000,
    "revenue": 244527583,
    "genres": [
      "Adventure",
      "Comedy",
      "Science Fiction"
    ],
    "releaseYear": "1990",
    "runtimeMinutes": 119
  },
  {
    "title": "Now You See Me 2",
    "tmdbId": 291805,
    "posterUrl": "https://image.tmdb.org/t/p/w500/A81kDB6a1K86YLlcOtZB27jriJh.jpg",
    "budget": 120000000,
    "revenue": 334897606,
    "genres": [
      "Crime",
      "Thriller"
    ],
    "releaseYear": "2016",
    "runtimeMinutes": 129
  },
  {
    "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "tmdbId": 411,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
    "budget": 180000000,
    "revenue": 745013115,
    "genres": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "releaseYear": "2005",
    "runtimeMinutes": 143
  },
  {
    "title": "Full Metal Jacket",
    "tmdbId": 600,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
    "budget": 30000000,
    "revenue": 46357676,
    "genres": [
      "Drama",
      "War"
    ],
    "releaseYear": "1987",
    "runtimeMinutes": 117
  },
  {
    "title": "One Flew Over the Cuckoo's Nest",
    "tmdbId": 510,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kjWsMh72V6d8KRLV4EOoSJLT1H7.jpg",
    "budget": 3000000,
    "revenue": 108981275,
    "genres": [
      "Drama"
    ],
    "releaseYear": "1975",
    "runtimeMinutes": 135
  },
  {
    "title": "Bruce Almighty",
    "tmdbId": 310,
    "posterUrl": "https://image.tmdb.org/t/p/w500/wqkWrOFtYnZSvIMu8Lsmz7WIvKC.jpg",
    "budget": 80000000,
    "revenue": 484592874,
    "genres": [
      "Fantasy",
      "Comedy"
    ],
    "releaseYear": "2003",
    "runtimeMinutes": 101
  },
  {
    "title": "The Usual Suspects",
    "tmdbId": 629,
    "posterUrl": "https://image.tmdb.org/t/p/w500/99X2SgyFunJFXGAYnDv3sb9pnUD.jpg",
    "budget": 6000000,
    "revenue": 23300000,
    "genres": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "releaseYear": "1995",
    "runtimeMinutes": 106
  },
  {
    "title": "Limitless",
    "tmdbId": 51876,
    "posterUrl": "https://image.tmdb.org/t/p/w500/r8anWUCVK7MZEolcfPrM9eFkRO4.jpg",
    "budget": 27000000,
    "revenue": 161900000,
    "genres": [
      "Thriller",
      "Mystery",
      "Science Fiction"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 106
  },
  {
    "title": "Pan's Labyrinth",
    "tmdbId": 1417,
    "posterUrl": "https://image.tmdb.org/t/p/w500/z7xXihu5wHuSMWymq5VAulPVuvg.jpg",
    "budget": 19000000,
    "revenue": 83258226,
    "genres": [
      "Fantasy",
      "Drama",
      "War"
    ],
    "releaseYear": "2006",
    "runtimeMinutes": 118
  },
  {
    "title": "Soul",
    "tmdbId": 508442,
    "posterUrl": "https://image.tmdb.org/t/p/w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    "budget": 150000000,
    "revenue": 121977511,
    "genres": [
      "Animation",
      "Family",
      "Drama",
      "Music",
      "Fantasy"
    ],
    "releaseYear": "2020",
    "runtimeMinutes": 101
  },
  {
    "title": "The Fault in Our Stars",
    "tmdbId": 222935,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kcVuktIlrn9SAN1uBmPDnocTQmF.jpg",
    "budget": 14000000,
    "revenue": 307166834,
    "genres": [
      "Romance",
      "Drama"
    ],
    "releaseYear": "2014",
    "runtimeMinutes": 126
  },
  {
    "title": "Fantastic Beasts: The Crimes of Grindelwald",
    "tmdbId": 338952,
    "posterUrl": "https://image.tmdb.org/t/p/w500/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
    "budget": 200000000,
    "revenue": 654900000,
    "genres": [
      "Fantasy",
      "Adventure"
    ],
    "releaseYear": "2018",
    "runtimeMinutes": 134
  },
  {
    "title": "Black Widow",
    "tmdbId": 497698,
    "posterUrl": "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    "budget": 200000000,
    "revenue": 379751131,
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "releaseYear": "2021",
    "runtimeMinutes": 134
  },
  {
    "title": "Slumdog Millionaire",
    "tmdbId": 12405,
    "posterUrl": "https://image.tmdb.org/t/p/w500/5leCCi7ZF0CawAfM5Qo2ECKPprc.jpg",
    "budget": 15000000,
    "revenue": 378400000,
    "genres": [
      "Drama",
      "Romance"
    ],
    "releaseYear": "2008",
    "runtimeMinutes": 121
  },
  {
    "title": "The Mask",
    "tmdbId": 854,
    "posterUrl": "https://image.tmdb.org/t/p/w500/jPC2eYub74zwf2tPGVtzSlBW6Oy.jpg",
    "budget": 23000000,
    "revenue": 351583407,
    "genres": [
      "Comedy",
      "Fantasy",
      "Crime",
      "Romance"
    ],
    "releaseYear": "1994",
    "runtimeMinutes": 101
  },
  {
    "title": "Jumanji",
    "tmdbId": 8844,
    "posterUrl": "https://image.tmdb.org/t/p/w500/bdHG5Mo83VPobeZZdlSz0Y7HQHB.jpg",
    "budget": 65000000,
    "revenue": 262821940,
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "releaseYear": "1995",
    "runtimeMinutes": 104
  },
  {
    "title": "Barbie",
    "tmdbId": 346698,
    "posterUrl": "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "budget": 145000000,
    "revenue": 1447138421,
    "genres": [
      "Comedy",
      "Adventure",
      "Fantasy"
    ],
    "releaseYear": "2023",
    "runtimeMinutes": 114
  },
  {
    "title": "Monsters University",
    "tmdbId": 62211,
    "posterUrl": "https://image.tmdb.org/t/p/w500/y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg",
    "budget": 200000000,
    "revenue": 743559465,
    "genres": [
      "Animation",
      "Family",
      "Comedy",
      "Fantasy"
    ],
    "releaseYear": "2013",
    "runtimeMinutes": 104
  },
  {
    "title": "The Hangover Part II",
    "tmdbId": 45243,
    "posterUrl": "https://image.tmdb.org/t/p/w500/cKZu0Fdkj7dmwbfMpgDqVVCkLJQ.jpg",
    "budget": 80000000,
    "revenue": 586764305,
    "genres": [
      "Comedy"
    ],
    "releaseYear": "2011",
    "runtimeMinutes": 102
  },
  {
    "title": "Top Gun: Maverick",
    "tmdbId": 361743,
    "posterUrl": "https://image.tmdb.org/t/p/w500/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg",
    "budget": 170000000,
    "revenue": 1488732821,
    "genres": [
      "Action",
      "Drama"
    ],
    "releaseYear": "2022",
    "runtimeMinutes": 131
  },
  {
    "title": "X-Men Origins: Wolverine",
    "tmdbId": 2080,
    "posterUrl": "https://image.tmdb.org/t/p/w500/yj8LbTju1p7CUJg7US2unSBk33s.jpg",
    "budget": 150000000,
    "revenue": 373062864,
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "releaseYear": "2009",
    "runtimeMinutes": 107
  },
  {
    "title": "Tenet",
    "tmdbId": 577922,
    "posterUrl": "https://image.tmdb.org/t/p/w500/aCIFMriQh8rvhxpN1IWGgvH0Tlg.jpg",
    "budget": 205000000,
    "revenue": 365304105,
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "releaseYear": "2020",
    "runtimeMinutes": 150
  },
  {
    "title": "Troy",
    "tmdbId": 652,
    "posterUrl": "https://image.tmdb.org/t/p/w500/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg",
    "budget": 175000000,
    "revenue": 497409852,
    "genres": [
      "Action",
      "Adventure"
    ],
    "releaseYear": "2004",
    "runtimeMinutes": 163
  },
  {
    "title": "Mr. & Mrs. Smith",
    "tmdbId": 787,
    "posterUrl": "https://image.tmdb.org/t/p/w500/kjD700RtyhveN3ZbOnSvUSne0Qj.jpg",
    "budget": 110000000,
    "revenue": 487287646,
    "genres": [
      "Action",
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "releaseYear": "2005",
    "runtimeMinutes": 120
  },
  {
    "title": "Furious 7",
    "tmdbId": 168259,
    "posterUrl": "https://image.tmdb.org/t/p/w500/ktofZ9Htrjiy0P6LEowsDaxd3Ri.jpg",
    "budget": 190000000,
    "revenue": 1515400000,
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "releaseYear": "2015",
    "runtimeMinutes": 138
  }
];
