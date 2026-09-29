import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const USER_AGENT = "GuessIt/1.0 (guessing game; contact via app)";

// Two-step lookup: Wikipedia's search API resolves a loose query (e.g. "Interstellar film",
// "Titan moon") to a real, correctly-disambiguated article title, then the REST summary API
// returns that article's lead paragraph + thumbnail. Doing the search step server-side avoids
// guessing exact article title conventions (film vs. "(film)" vs. "(TV series)"...) per category.
async function resolveTitle(query: string, bias?: string): Promise<string | null> {
  const searchQuery = bias ? `${query} ${bias}` : query;
  const url = new URL("https://en.wikipedia.org/w/api.php");
  url.searchParams.set("action", "query");
  url.searchParams.set("list", "search");
  url.searchParams.set("format", "json");
  url.searchParams.set("srlimit", "1");
  url.searchParams.set("srsearch", searchQuery);

  const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
  if (!res.ok) return null;
  const data = await res.json();
  return data.query?.search?.[0]?.title ?? null;
}

// The panel shows while the round is still being guessed, so the exact fact a round is testing
// (population, border list, episode count, discovery year...) has to be scrubbed from the lead
// paragraph before it reaches the client — Wikipedia's opening sentence very often states it
// directly. Each `redact` term is either:
// - a whole number (e.g. a discovery year): masked wherever it appears as a standalone number,
//   leaving the surrounding sentence intact.
// - a keyword (e.g. "population", "border"): any sentence containing it (case-insensitive) is
//   dropped entirely, since the leaking fact is usually woven through the whole sentence rather
//   than isolated in one token (e.g. "It borders Belgium, Germany, and Switzerland").
function redactExtract(extract: string, redactTerms: string[]): string {
  let text = extract;

  for (const term of redactTerms) {
    if (/^\d+$/.test(term)) {
      text = text.replace(new RegExp(`\\b${term}\\b`, "g"), "[redacted]");
    }
  }

  const keywordTerms = redactTerms.filter((t) => !/^\d+$/.test(t)).map((t) => t.toLowerCase());
  if (keywordTerms.length > 0) {
    // Word-boundary matching, not a bare substring check -- a short term like "bc" would
    // otherwise false-positive inside unrelated words (e.g. "subcontinent") and drop sentences
    // that have nothing to do with the fact being protected.
    const keywordRegexes = keywordTerms.map(
      (kw) => new RegExp(`\\b${kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`)
    );
    const sentences = text.split(/(?<=[.!?])\s+/);
    text = sentences
      .filter((sentence) => {
        const lower = sentence.toLowerCase();
        return !keywordRegexes.some((re) => re.test(lower));
      })
      .join(" ")
      .trim();
  }

  return text;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("title");
  const bias = searchParams.get("bias") ?? undefined;
  const redactTerms = (searchParams.get("redact") ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!query) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  try {
    const title = await resolveTitle(query, bias);
    if (!title) {
      return NextResponse.json({ found: false });
    }

    const summaryRes = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { headers: { "User-Agent": USER_AGENT } }
    );
    if (!summaryRes.ok) {
      return NextResponse.json({ found: false });
    }
    const summary = await summaryRes.json();

    if (summary.type === "disambiguation" || !summary.extract) {
      return NextResponse.json({ found: false });
    }

    const extract =
      redactTerms.length > 0 ? redactExtract(summary.extract, redactTerms) : summary.extract;
    if (!extract) {
      return NextResponse.json({ found: false });
    }

    return NextResponse.json({
      found: true,
      title: summary.title,
      extract,
      thumbnailUrl: summary.thumbnail?.source ?? null,
      pageUrl: summary.content_urls?.desktop?.page ?? null,
    });
  } catch {
    return NextResponse.json({ found: false });
  }
}
