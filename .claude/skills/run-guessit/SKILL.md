---
name: run-guessit
description: Build, run, and drive the GuessIt Next.js app (PriceDrop game backed by live eBay Browse API data). Use when asked to start guessit, run its dev server, build it, take a screenshot of its UI, or verify the PriceDrop game end-to-end.
---

GuessIt is a Next.js 16 App Router app. Drive it by starting the dev
server, then running the committed Playwright driver at
`.claude/skills/run-guessit/driver.mjs`, which loads the home page and
plays a full round of PriceDrop (the one game currently wired to live
data) headlessly.

All paths below are relative to `guessit/` (this project's root).

## Prerequisites

No OS packages needed on this machine (macOS). Node.js + npm must be
installed. Playwright's Chromium binary must be present:

```bash
node -e "require('playwright').chromium.launch().then(b=>{console.log('ok');b.close()})"
# if this errors with a missing browser, run:
npx playwright install chromium
```

## Setup

```bash
npm install
```

Env vars, in `.env.local` (git-ignored):

```bash
NEXT_PUBLIC_SUPABASE_URL=...       # required to build — placeholder ok if auth isn't being tested
NEXT_PUBLIC_SUPABASE_ANON_KEY=...  # required to build — placeholder ok if auth isn't being tested
SUPABASE_SERVICE_ROLE_KEY=...      # optional, only needed for server-side admin Supabase calls
EBAY_PROD_APP_ID=...               # required for PriceDrop to return real listings
EBAY_PROD_CERT_ID=...              # required for PriceDrop to return real listings
EBAY_VERIFICATION_TOKEN=...        # only needed for the /api/ebay/deletion-webhook route, not for gameplay
```

Without `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` set to *something* (even placeholders), the production build fails outright — see Gotchas.

## Build

```bash
npm run build   # production build; not needed for the dev-server driver path below
```

## Run (agent path)

```bash
# 1. start the dev server in the background
npm run dev > /tmp/guessit-dev.log 2>&1 & disown
i=0; while ! curl -sf http://localhost:3000 >/dev/null; do
  i=$((i+1)); [ "$i" -ge 30 ] && { echo "dev server did not come up"; exit 1; }
  sleep 1
done

# 2. drive it
node .claude/skills/run-guessit/driver.mjs --out-dir ./screenshots
```

(`timeout`/`gtimeout` aren't installed on this machine — use the plain
poll loop above, not `timeout 30 bash -c '...'`.)

The driver: loads `/`, screenshots it, navigates to `/games/pricedrop`,
waits for a live eBay listing image to appear, confirms no price is
visible pre-guess, opens the photo zoom lightbox and zooms in twice,
then plays all 5 rounds (submitting a guess each round, checking the
reveal screen and the round counter), confirms the last round's button
says "See Final Score" instead of "Next Round," confirms the game-over
screen appears with the final score, clicks "Play Again" and confirms
it resets to round 1 — then prints a JSON report (`ok: true/false`,
steps completed, any console errors) to stdout. Exit code is `0` on
success, `1` otherwise.

Screenshots land at whatever `--out-dir` you pass (default `./screenshots`, relative to cwd).

| driver arg | what it does |
|---|---|
| `--base-url <url>` | target a different host, e.g. the deployed Vercel URL instead of localhost |
| `--out-dir <path>` | where screenshots are written |

Stop the dev server: `lsof -ti:3000 -sTCP:LISTEN | xargs -r kill`

## Run (human path)

```bash
npm run dev   # -> http://localhost:3000, Ctrl-C to stop
```

## Test

No test suite exists yet (`package.json` has no `test` script). Lint is available:

```bash
npm run lint
```

---

## Gotchas

- **A percentage `width` inline style on a flex item gets silently
  shrunk back to fit by default `flex-shrink: 1`.** The PriceDrop photo
  zoom lightbox set `style={{ width: zoom * 100 + '%' }}` on an `<img>`
  that's a flex item — the inline style updated correctly (verified via
  `getAttribute('style')`), the "2.0x" label updated correctly, but the
  *rendered* `computedWidth`/`clientWidth` never changed: the flex
  algorithm shrank the oversized item straight back down. Fix: add
  `shrink-0` (or `flex-shrink: 0`) to the zoomable element. The driver's
  zoom check now measures `boundingBox().width` before/after zooming —
  not just the label text — specifically because that's what let this
  bug through the first version of the check.
- **`npm run dev` working does not mean production is updated.** This
  project is also deployed to Vercel. Vercel only redeploys when you
  explicitly run `vercel deploy --prod` — it does not watch the local
  filesystem. We hit this directly: the PriceDrop game was built,
  tested, and fully working on `localhost:3000`, but the public URL
  still 404'd on `/games/pricedrop` for days because no one redeployed
  after adding the routes. If you change app code and the user asks
  about the live site, redeploy before answering.
- **`.env.local` is not synced to Vercel automatically.** Vercel keeps
  its own env var store per environment (`production`/`preview`/`dev`).
  Adding a var to `.env.local` only affects local runs; push it with
  `vercel env add <NAME> production` (reads from stdin) before it will
  take effect on the deployed site.
- **Missing Supabase env vars break the Vercel build, not just auth.**
  `@supabase/ssr`'s client constructor throws at build/prerender time
  if `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` are
  unset — even placeholder strings are enough to pass; totally absent
  env vars are not. We hit `Error: @supabase/ssr: Your project's URL
  and API key are required...` on a Vercel deploy for exactly this
  reason.
- **eBay production keysets ship disabled** until you register and
  verify a Marketplace Account Deletion notification webhook (see
  `app/api/ebay/deletion-webhook/route.ts`) — without that,
  `EBAY_PROD_APP_ID`/`EBAY_PROD_CERT_ID` will fail OAuth with
  `invalid_client` even though the credentials are correct.

## Troubleshooting

- **`Cannot find package 'playwright'`**: it's a devDependency now (added this session); run `npm install`.
- **Vercel build fails with `@supabase/ssr: Your project's URL and API key are required`**: `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY` aren't set for the `production` environment in Vercel. `npx vercel env ls` to check; `npx vercel env add <NAME> production` to fix (placeholder values are fine if you just need the build to pass).
- **`/api/pricedrop/random` returns 502**: `EBAY_PROD_APP_ID`/`EBAY_PROD_CERT_ID` missing or the eBay keyset is disabled (see Gotchas above). Test the OAuth grant directly: `curl -u "$EBAY_PROD_APP_ID:$EBAY_PROD_CERT_ID" -d grant_type=client_credentials -d scope=https://api.ebay.com/oauth/api_scope https://api.ebay.com/identity/v1/oauth2/token`.
- **Driver reports `priceHiddenBeforeGuess: false`**: something is rendering a `$<digit>` pattern before the guess is submitted — check `app/games/pricedrop/page.tsx` for the guessing-phase JSX leaking `listing.price`.
