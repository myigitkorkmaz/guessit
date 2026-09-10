#!/usr/bin/env node
// Drives the GuessIt Next.js app in headless Chromium via Playwright.
// Assumes `npm run dev` is already up on BASE_URL (default http://localhost:3000).
//
// Usage:
//   node .claude/skills/run-guessit/driver.mjs [--base-url http://localhost:3000] [--out-dir ./screenshots]
//
// Plays a full 5-round PriceDrop game (the one game currently wired to a
// live data source) end-to-end — including the round limit / game-over
// screen and the photo zoom lightbox — and reports pass/fail + console
// errors as JSON.

import { chromium } from "playwright";
import path from "node:path";
import fs from "node:fs";

const MAX_ROUNDS = 5;

const args = process.argv.slice(2);
function getArg(name, fallback) {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : fallback;
}

const BASE_URL = getArg("base-url", "http://localhost:3000");
const OUT_DIR = path.resolve(getArg("out-dir", "./screenshots"));
fs.mkdirSync(OUT_DIR, { recursive: true });

const consoleErrors = [];
const report = { baseUrl: BASE_URL, steps: [], consoleErrors: [], ok: false };

const browser = await chromium.launch();
const page = await browser.newPage();
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
page.on("pageerror", (err) => consoleErrors.push(String(err)));

try {
  // Home page loads
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForSelector("text=GuessIt", { timeout: 15000 });
  await page.screenshot({ path: path.join(OUT_DIR, "01-home.png") });
  report.steps.push("home page loaded");

  // PriceDrop: guessing state — a live eBay listing loads via /api/pricedrop/random
  await page.goto(`${BASE_URL}/games/pricedrop`, { waitUntil: "networkidle" });
  await page.waitForSelector("img", { timeout: 15000 });
  await page.screenshot({ path: path.join(OUT_DIR, "02-pricedrop-guessing.png") });
  report.steps.push("pricedrop: live listing loaded (guessing state)");

  // Confirm no price is visible before guessing (only the input's static "$" prefix should show)
  const visibleBeforeGuess = await page.evaluate(() => document.body.innerText);
  report.priceHiddenBeforeGuess = !/\$\s*\d/.test(visibleBeforeGuess);

  // Zoom lightbox — open, zoom in twice, confirm the image *actually* grows
  // (not just the "2.0x" label — flexbox shrink-to-fit silently defeated
  // this once before: the label updated but the rendered width didn't).
  await page.click('button[aria-label="View full size"]');
  await page.waitForSelector("text=/^\\d\\.\\dx$/", { timeout: 5000 });
  const lightboxImg = page.locator(".fixed.inset-0.z-50 img");
  const widthAt1x = (await lightboxImg.boundingBox()).width;
  await page.click('button[aria-label="Zoom in"]');
  await page.click('button[aria-label="Zoom in"]');
  await page.waitForTimeout(250); // let the 150ms CSS width transition settle
  const zoomLevel = (await page.textContent("text=/^\\d\\.\\dx$/")).trim();
  const widthAt2x = (await lightboxImg.boundingBox()).width;
  report.zoomLevelAfterTwoClicks = zoomLevel;
  report.zoomActuallyResized = widthAt2x > widthAt1x * 1.5;
  if (!report.zoomActuallyResized) {
    throw new Error(
      `zoom label says ${zoomLevel} but image width stayed ~${widthAt1x}px (was ${widthAt1x}px, now ${widthAt2x}px) — zoom is not visually working`
    );
  }
  await page.screenshot({ path: path.join(OUT_DIR, "03-lightbox-zoomed.png") });
  await page.click('button[aria-label="Close"]');
  await page.waitForSelector('input[type="number"]', { timeout: 5000 });
  report.steps.push(`zoom lightbox: opened, zoomed to ${zoomLevel} (${widthAt1x}px -> ${widthAt2x}px), closed`);

  // "Surprise Me" forces a guaranteed weird (wtf_hilarious/bizarre_but_real)
  // listing and shows a "Weird one!" badge — check it works within a few tries
  // (surprise mode is restricted to 4 categories, not always the badge ones).
  let sawWeirdBadge = false;
  for (let i = 0; i < 6 && !sawWeirdBadge; i++) {
    await page.click('button:has-text("Surprise Me")');
    await page.waitForSelector('input[type="number"]', { timeout: 15000 });
    sawWeirdBadge = await page.locator("text=Weird one!").isVisible().catch(() => false);
  }
  if (!sawWeirdBadge) {
    throw new Error('"Surprise Me" never produced a "Weird one!" badge in 6 tries');
  }
  report.steps.push('"Surprise Me" produced a weird-badged listing');

  // Play all rounds; confirm the round counter and the button label on the last round
  for (let round = 1; round <= MAX_ROUNDS; round++) {
    await page.waitForSelector('input[type="number"]', { timeout: 15000 });
    const roundLabel = (await page.textContent("text=/Round \\d \\/ \\d/")).trim();
    if (!roundLabel.startsWith(`Round ${round} / ${MAX_ROUNDS}`)) {
      throw new Error(`expected "Round ${round} / ${MAX_ROUNDS}", got "${roundLabel}"`);
    }
    await page.fill('input[type="number"]', "100");
    await page.click('button:has-text("Submit Guess")');
    await page.waitForSelector('text=/Next Round|See Final Score/', { timeout: 10000 });
    const nextBtn = round < MAX_ROUNDS ? "Next Round" : "See Final Score";
    await page.click(`button:has-text("${nextBtn}")`);
  }
  report.steps.push(`played all ${MAX_ROUNDS} rounds`);

  // Game-over screen + Play Again resets to round 1
  await page.waitForSelector("text=Game Over!", { timeout: 10000 });
  await page.screenshot({ path: path.join(OUT_DIR, "04-gameover.png") });
  await page.click('button:has-text("Play Again")');
  await page.waitForSelector('input[type="number"]', { timeout: 15000 });
  const afterReset = (await page.textContent("text=/Round \\d \\/ \\d/")).trim();
  report.roundAfterPlayAgain = afterReset;
  report.steps.push("game-over screen shown, Play Again reset to round 1");

  report.ok =
    consoleErrors.length === 0 &&
    report.priceHiddenBeforeGuess &&
    afterReset.startsWith("Round 1 /");
} catch (err) {
  report.error = String(err);
} finally {
  report.consoleErrors = consoleErrors;
  await browser.close();
}

console.log(JSON.stringify(report, null, 2));
process.exit(report.ok ? 0 : 1);
