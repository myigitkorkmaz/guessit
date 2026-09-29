// Static snapshot of minimum wage by country, converted to USD per hour, compiled 2026-09-23.
// Flags are reused directly from the existing REST Countries snapshot (lib/data/countries.ts) --
// no separate image sourcing needed for this dataset.
//
// This was rejected earlier in this app's development for "mixed currencies/units, real risk of
// wrong conversions" -- revisited once Rent Check (average city rent) proved out the pattern:
// pick ONE consistent methodology, apply it identically to every entry, and document the
// exchange rates used rather than letting a different aggregator's figure creep in per-country.
//
// A first attempt pulled a comparison table from Wikipedia's "List of minimum wages by country"
// in one bulk fetch, summarized by an LLM tool into prose. Spot-checking that summary against
// individually-verified figures caught real errors -- it had claimed Ireland at $18.64/hour
// (actual, individually verified: EUR14.15 => ~$16.48) and Germany at $16.44/hour (actual:
// EUR13.90 => ~$16.19) -- both close enough to look plausible but wrong by a meaningful margin,
// which is exactly the failure mode most likely to slip through unnoticed. The entire dataset
// was rebuilt from scratch with one live search per country for its actual current statutory
// rate (in local currency, from primary/government-adjacent sources), then converted using a
// single batch of mid-market exchange rates all fetched within the same session on 2026-09-23:
// EUR 1.1649, GBP 1.356, CAD 0.7253, AUD 0.7041, NZD (1/1.7617), JPY 0.0063146, KRW (1/1348),
// PLN (1/3.79235), MXN (1/17.2978), BRL (1/5.102), ZAR (1/16.222), CNY (1/6.7015),
// PHP 0.01594, IDR (1/17800), BDT (1/122.74), NGN (1/1373).
//
// Several countries have no single national rate and needed a documented choice of which figure
// represents them: the US and Canada use their federal floor (both have higher state/provincial
// minimums in many jurisdictions, same simplification Rent Check's single-source approach makes
// elsewhere); China uses Shanghai, its highest-paying region, since the rate is set provincially
// with no national figure; Indonesia uses Jakarta and the Philippines uses Metro Manila for the
// same reason (both set wages regionally). India's national "floor" wage was investigated and
// excluded entirely -- it is non-binding, last revised in 2019, and far below what any Indian
// state actually enforces, making it a misleading answer for "India's minimum wage" despite
// being the only single national figure that exists.
//
// Monthly/daily rates were converted to hourly using a standard 8-hour day (Bangladesh: /30
// days/month; Mexico, Philippines: /day directly) or a 174-hour month (China, Indonesia,
// Nigeria -- approximating a 40-hour week times ~4.33 weeks), consistent with how each source
// itself framed the figure.
//
// Minimum wage rates change on national schedules (annually, sometimes twice yearly) and this is
// a snapshot of rates in effect as of September 2026 converted at that date's exchange rates --
// both the local-currency figure AND the conversion rate will drift out of date. Baked in
// statically like the other datasets here; to refresh, re-verify each country's current
// statutory rate individually (do not trust a bulk comparison table's numbers without spot-
// checking, per the Ireland/Germany error caught above) and re-fetch exchange rates for the
// conversion.

export interface MinimumWageData {
  country: string;
  wage: number;
  flagUrl: string;
}

export const MINIMUM_WAGES: MinimumWageData[] = [
  {
    "country": "Nigeria",
    "wage": 0.29,
    "flagUrl": "https://flags.restcountries.com/v5/w640/ng.png"
  },
  {
    "country": "Bangladesh",
    "wage": 0.42,
    "flagUrl": "https://flags.restcountries.com/v5/w640/bd.png"
  },
  {
    "country": "Brazil",
    "wage": 1.44,
    "flagUrl": "https://flags.restcountries.com/v5/w640/br.png"
  },
  {
    "country": "Philippines",
    "wage": 1.5,
    "flagUrl": "https://flags.restcountries.com/v5/w640/ph.png"
  },
  {
    "country": "Indonesia",
    "wage": 1.85,
    "flagUrl": "https://flags.restcountries.com/v5/w640/id.png"
  },
  {
    "country": "South Africa",
    "wage": 1.86,
    "flagUrl": "https://flags.restcountries.com/v5/w640/za.png"
  },
  {
    "country": "Mexico",
    "wage": 2.28,
    "flagUrl": "https://flags.restcountries.com/v5/w640/mx.png"
  },
  {
    "country": "China",
    "wage": 2.35,
    "flagUrl": "https://flags.restcountries.com/v5/w640/cn.png"
  },
  {
    "country": "Japan",
    "wage": 7.08,
    "flagUrl": "https://flags.restcountries.com/v5/w640/jp.png"
  },
  {
    "country": "United States",
    "wage": 7.25,
    "flagUrl": "https://flags.restcountries.com/v5/w640/us.png"
  },
  {
    "country": "South Korea",
    "wage": 7.66,
    "flagUrl": "https://flags.restcountries.com/v5/w640/kr.png"
  },
  {
    "country": "Poland",
    "wage": 8.28,
    "flagUrl": "https://flags.restcountries.com/v5/w640/pl.png"
  },
  {
    "country": "Canada",
    "wage": 13.16,
    "flagUrl": "https://flags.restcountries.com/v5/w640/ca.png"
  },
  {
    "country": "New Zealand",
    "wage": 13.59,
    "flagUrl": "https://flags.restcountries.com/v5/w640/nz.png"
  },
  {
    "country": "France",
    "wage": 14.34,
    "flagUrl": "https://flags.restcountries.com/v5/w640/fr.png"
  },
  {
    "country": "Germany",
    "wage": 16.19,
    "flagUrl": "https://flags.restcountries.com/v5/w640/de.png"
  },
  {
    "country": "Ireland",
    "wage": 16.48,
    "flagUrl": "https://flags.restcountries.com/v5/w640/ie.png"
  },
  {
    "country": "United Kingdom",
    "wage": 17.23,
    "flagUrl": "https://flags.restcountries.com/v5/w640/gb.png"
  },
  {
    "country": "Netherlands",
    "wage": 17.46,
    "flagUrl": "https://flags.restcountries.com/v5/w640/nl.png"
  },
  {
    "country": "Australia",
    "wage": 18.62,
    "flagUrl": "https://flags.restcountries.com/v5/w640/au.png"
  }
];
