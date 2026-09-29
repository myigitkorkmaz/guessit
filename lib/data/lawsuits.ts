// Static snapshot of famous corporate lawsuit settlements, compiled 2026-09-15. Amounts were
// verified via live web search against DOJ/FTC press releases, court filings, and major news
// coverage per case (no bulk API exists for this -- there is no structured, comparable dataset
// of lawsuit settlement values anywhere). The default image and the sidebar Wikipedia panel both
// query the paying company's general Wikipedia page by default (e.g. "Volkswagen"), which
// turned out to be the wrong article for the sidebar's purpose: it shows corporate history and
// products, not anything about the actual scandal or verdict a round is testing. Where a
// dedicated event/case article exists on Wikipedia with its own text (and often its own more
// specific photo -- an actual VW diesel car instead of the VW logo, the real Deepwater Horizon
// spill instead of a BP logo, a photo of Bernard Madoff instead of a JPMorgan logo), wikiQuery
// points the sidebar (and sometimes imageUrl) at that instead. Left unset where no such dedicated
// article exists (S&P's case, Anthropic's, Qualcomm v. Apple) -- those fall back to the company's
// general page, which is still more useful than nothing.
//
// Deliberately scoped to corporate, regulatory, and IP disputes -- antitrust fines, patent
// verdicts, securities fraud, data-privacy penalties -- and NOT personal-injury or wrongful-death
// litigation, even extremely famous ones (the McDonald's hot coffee case, tobacco and opioid
// settlements). A 'guess the dollar amount' framing trivializes real injury or death in a way it
// doesn't for a fine a corporation paid a regulator, so those categories were excluded on
// judgment regardless of how well-documented or requested by pure trivia value.
//
// Most of these settlements involve multiple payment tranches spread across years and forums
// (criminal fines, civil penalties, consumer restitution, shareholder payouts) -- the value
// stored here is the single most commonly-cited headline figure per case (e.g. Volkswagen's
// $14.7B DOJ/EPA settlement, not the ~$38B some sources quote for its total global cost
// including fines outside the US). Where a case is still colloquially cited by its original,
// later-reduced verdict (Apple v. Samsung's $1.05B 2012 jury award, since reduced on appeal
// and retried), that original headline figure was kept since it's the number the case is famous
// for.
//
// One researched case -- Texaco v. Pennzoil (a $10.53B 1985 verdict, still the largest jury
// verdict in US history at the time) -- was dropped because Texaco's Wikipedia article exposes
// no usable thumbnail image via the summary API (confirmed after retrying with alternate search
// terms), and this game leans on a photo per round like every other game here.
//
// The 2026-09-15 expansion pass added 3 more cases, applying the same sensitivity screen as the
// original set even more deliberately: Purdue Pharma's $7.4B opioid settlement and Boeing's
// $2.5B 737 MAX settlement were both researched and both rejected, since neither can be separated
// from the real deaths at their center (the opioid crisis; the two 737 MAX crashes) the way a
// pure antitrust or securities-fraud fine can. Theranos, FTX, and Binance were kept instead --
// investor fraud and financial-crimes cases with no comparable injury/death dimension.
//
// Baked in statically like the other datasets here. To refresh, re-verify each figure via live
// search rather than trusting a stale cached number.

export interface LawsuitData {
  lawsuitLabel: string;
  subject: string;
  amount: number;
  year: number;
  imageUrl: string;
  // Only set when a dedicated Wikipedia article about the specific scandal/case exists and is a
  // better sidebar-panel query than the defendant's general company page (see file header).
  wikiQuery?: string;
}

export const LAWSUITS: LawsuitData[] = [
  {
    "lawsuitLabel": "Theranos Investor Fraud Restitution",
    "subject": "Elizabeth Holmes",
    "amount": 452000000,
    "year": 2022,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Elizabeth_Holmes_2014_cropped.jpg/330px-Elizabeth_Holmes_2014_cropped.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "lawsuitLabel": "Apple v. Samsung Patent Verdict",
    "subject": "Samsung",
    "amount": 1050000000,
    "year": 2012,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Samsung_headquarters.jpg/330px-Samsung_headquarters.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Apple Inc. v. Samsung Electronics Co."
  },
  {
    "lawsuitLabel": "S&P Financial Crisis Ratings Settlement",
    "subject": "S&P Global",
    "amount": 1380000000,
    "year": 2015,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/S%26P_Global_Ratings_Logo.svg/330px-S%26P_Global_Ratings_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "lawsuitLabel": "Microsoft EU Antitrust Fine",
    "subject": "Microsoft",
    "amount": 1400000000,
    "year": 2008,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Belgique_-_Bruxelles_-_Schuman_-_Berlaymont_-_01.jpg/330px-Belgique_-_Bruxelles_-_Schuman_-_Berlaymont_-_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Microsoft Corp. v European Commission"
  },
  {
    "lawsuitLabel": "Anthropic Authors Copyright Settlement",
    "subject": "Anthropic",
    "amount": 1500000000,
    "year": 2025,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Slack_offices%2C_Howard_Street%2C_San_Francisco_%28viewed_from_the_south-west%2C_January_2020%29.jpg/330px-Slack_offices%2C_Howard_Street%2C_San_Francisco_%28viewed_from_the_south-west%2C_January_2020%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "lawsuitLabel": "JPMorgan Chase Madoff Settlement",
    "subject": "JPMorgan Chase",
    "amount": 2600000000,
    "year": 2014,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Bernard_Madoff_under_house_arrest.jpg/330px-Bernard_Madoff_under_house_arrest.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Madoff investment scandal"
  },
  {
    "lawsuitLabel": "House v. NCAA Settlement",
    "subject": "NCAA",
    "amount": 2800000000,
    "year": 2025,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/NCAA_logo.svg/330px-NCAA_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "House v. NCAA"
  },
  {
    "lawsuitLabel": "Wells Fargo Fake Accounts Scandal",
    "subject": "Wells Fargo",
    "amount": 3000000000,
    "year": 2020,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/330px-Wells_Fargo_Logo_%282020%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Wells Fargo cross-selling scandal"
  },
  {
    "lawsuitLabel": "Binance DOJ Settlement",
    "subject": "Binance",
    "amount": 4300000000,
    "year": 2023,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Binance-BNB-Icon-Logo.wine.svg/330px-Binance-BNB-Icon-Logo.wine.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "lawsuitLabel": "Qualcomm v. Apple Patent Settlement",
    "subject": "Apple",
    "amount": 4500000000,
    "year": 2019,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/330px-Apple_logo_black.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "lawsuitLabel": "Facebook–Cambridge Analytica Privacy Settlement",
    "subject": "Facebook (Meta)",
    "amount": 5000000000,
    "year": 2019,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Meta_HQ_2023.png/330px-Meta_HQ_2023.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Facebook–Cambridge Analytica data scandal"
  },
  {
    "lawsuitLabel": "Google Android Antitrust Fine",
    "subject": "Google",
    "amount": 5000000000,
    "year": 2018,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/330px-Googleplex_HQ_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Antitrust cases against Google by the European Union"
  },
  {
    "lawsuitLabel": "Enron Shareholder Fraud Settlement",
    "subject": "Enron",
    "amount": 7200000000,
    "year": 2005,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Logo_of_Enron_Corporation_%281997%29.svg/330px-Logo_of_Enron_Corporation_%281997%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Enron scandal"
  },
  {
    "lawsuitLabel": "FTX Fraud Forfeiture",
    "subject": "Sam Bankman-Fried",
    "amount": 11020000000,
    "year": 2024,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Sam_Bankman-Fried_%28cropped%29.png/330px-Sam_Bankman-Fried_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "lawsuitLabel": "Volkswagen \"Dieselgate\" Emissions Scandal",
    "subject": "Volkswagen",
    "amount": 14700000000,
    "year": 2016,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/VW_Golf_TDI_Clean_Diesel_WAS_2010_8983.JPG/330px-VW_Golf_TDI_Clean_Diesel_WAS_2010_8983.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Volkswagen emissions scandal"
  },
  {
    "lawsuitLabel": "BP Deepwater Horizon Settlement",
    "subject": "BP",
    "amount": 20800000000,
    "year": 2016,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Deepwater_Horizon_oil_spill_-_May_24%2C_2010_-_with_locator.jpg/330px-Deepwater_Horizon_oil_spill_-_May_24%2C_2010_-_with_locator.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Deepwater Horizon oil spill"
  }
];
