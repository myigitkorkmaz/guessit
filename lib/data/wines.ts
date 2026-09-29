// Static snapshot of wine pricing, compiled 2026-09-15, expanded 2026-09-15. Prices are the
// current average retail/secondary-market price per 750ml bottle, gathered via live web search
// against Wine-Searcher aggregate data and cross-referenced against multiple retailer/auction
// sources per wine (not a bulk API -- Wine-Searcher's own API is a paid product this app doesn't
// have access to). Images come from Wikipedia's summary API thumbnail for the winery/producer.
//
// Every wine here trades across a genuinely wide range depending on vintage -- a 'young'
// Chateau Margaux release can run $570 while a celebrated vintage of the same wine fetches
// $1,880+, and investment-grade wines (Petrus, Romanee-Conti) can vary by 2-3x between an
// ordinary and an exceptional year. The values here are each wine's overall average price
// across vintages as reported by price-aggregation sites, not any single specific vintage or
// bottle -- this is a real approximation, consistent with how this app already handles other
// inherently fuzzy or time-varying figures (see the net worth dataset), and is presented as
// 'about what this bottle costs' rather than an exact, disputable number.
//
// Two researched wines -- Penfolds Grange and Chateau Cheval Blanc -- were dropped despite
// having solid price data, because neither producer's Wikipedia article exposes a usable
// thumbnail image via the summary API (confirmed after repeated retries, not just a rate-limit
// blip), and this game leans on a photo per round like every other game here.
//
// The 2026-09-15 expansion pass added 7 more wines specifically to widen the price range at the
// low end -- Charles Shaw ('Two Buck Chuck', ~$3) and Yellow Tail (~$7) sit at the opposite
// extreme from Romanee-Conti's $23,658, which the original 16-wine set lacked entirely (its
// cheapest bottle was $289). Three more researched candidates from this pass -- Caymus, Barefoot,
// and Kendall-Jackson -- were dropped for the same no-usable-thumbnail reason as Grange and Cheval
// Blanc above; one of Barefoot's alternate search queries even resolved to a wrong, unrelated
// brand (Josh Cellars) rather than Barefoot itself, which is exactly the failure mode this app's
// per-item wikiQuery override exists to catch when it happens on the sidebar-panel query instead
// of here at initial image sourcing.
//
// Baked in statically like the other datasets here. To refresh, re-verify each price via live
// search rather than trusting a stale cached figure -- wine prices move enough year to year that
// last year's number is a worse bet than a fresh check.

export interface WineData {
  name: string;
  price: number;
  imageUrl: string;
  // Only set when the bare 'name' resolves to the wrong (or no) Wikipedia article for the
  // sidebar panel -- e.g. "Opus One" alone hits a short music-related disambiguation stub, and
  // "Château Latour" alone returns no result at all, while these more specific phrasings resolve
  // correctly. Left unset for every other wine, where the bare name already works and adding an
  // unnecessary qualifier risks resolving to the *wrong* thing instead (confirmed while testing:
  // appending "winery" broke "Château Margaux" -> a different château, and "Dom Pérignon" -> the
  // historical monk instead of the champagne).
  wikiQuery?: string;
}

export const WINES: WineData[] = [
  {
    "name": "Charles Shaw",
    "price": 3,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Two_Buck_Chuck_for_sale.jpg/330px-Two_Buck_Chuck_for_sale.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Charles Shaw wine"
  },
  {
    "name": "Yellow Tail",
    "price": 7,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/2/26/Yellowtaillogo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "name": "Veuve Clicquot",
    "price": 60,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Logo_Veuve_Clicquot.png/330px-Logo_Veuve_Clicquot.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Moët & Chandon",
    "price": 60,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Mo%C3%ABt_et_Chandon.jpg/330px-Mo%C3%ABt_et_Chandon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Château Musar",
    "price": 100,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/ChateauMusar1999.jpg/330px-ChateauMusar1999.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Silver Oak",
    "price": 181,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/7/76/Silver_Oak_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    "wikiQuery": "Silver Oak Cellars"
  },
  {
    "name": "Tignanello",
    "price": 187,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/2003_Antinori_Tiganello.jpg/330px-2003_Antinori_Tiganello.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Krug Grande Cuvée",
    "price": 289,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Krug_1512907.jpg/330px-Krug_1512907.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Dom Pérignon",
    "price": 307,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Logo_-_Dom_P%C3%A9rignon.svg/330px-Logo_-_Dom_P%C3%A9rignon.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Sassicaia",
    "price": 340,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Sassicaia_crop.jpg/330px-Sassicaia_crop.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Louis Roederer Cristal",
    "price": 384,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Gamme_BD.jpg/330px-Gamme_BD.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Opus One",
    "price": 483,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Opus-One-Szmurlo.jpg/330px-Opus-One-Szmurlo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Opus One Winery"
  },
  {
    "name": "Château d'Yquem",
    "price": 494,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/en/thumb/1/1e/Chateau_d_yquem_logo.jpg/330px-Chateau_d_yquem_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Vega Sicilia Unico",
    "price": 607,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Vega_Sicilia_%C3%9Anico_2000.jpg/330px-Vega_Sicilia_%C3%9Anico_2000.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Château Haut-Brion",
    "price": 692,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Pessac_Ch%C3%A2teau_Haut-Brion.jpg/330px-Pessac_Ch%C3%A2teau_Haut-Brion.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Château Mouton Rothschild",
    "price": 791,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Jardin_de_Ch%C3%A2teau_de_Mouton-Rothschild%2C_Pauillac._2012.jpg/330px-Jardin_de_Ch%C3%A2teau_de_Mouton-Rothschild%2C_Pauillac._2012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Château Margaux",
    "price": 890,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Margaux_exterior.jpg/330px-Margaux_exterior.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Château Latour",
    "price": 947,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Ch%C3%A2teau_La_Tour.jpg/330px-Ch%C3%A2teau_La_Tour.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "wikiQuery": "Château Latour (Pauillac)"
  },
  {
    "name": "Château Lafite Rothschild",
    "price": 1004,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Ch%C3%A2teau_Lafite-Rothschild.jpg/330px-Ch%C3%A2teau_Lafite-Rothschild.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Harlan Estate",
    "price": 1640,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Harlan_Estate_Label.jpg/330px-Harlan_Estate_Label.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Screaming Eagle Cabernet Sauvignon",
    "price": 3647,
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/6/6e/Screaming_Eagle_Winery_and_Vineyards_Logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "name": "Château Pétrus",
    "price": 5799,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/P%C3%A9trus_%28ch%C3%A2teau%29_02.jpg/330px-P%C3%A9trus_%28ch%C3%A2teau%29_02.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Romanée-Conti",
    "price": 23658,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Vosne-Roman%C3%A9e%2C_le_Domaine_de_la_Roman%C3%A9e-Conti.jpg/330px-Vosne-Roman%C3%A9e%2C_le_Domaine_de_la_Roman%C3%A9e-Conti.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  }
];
