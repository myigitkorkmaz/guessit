const TOKEN_URL = "https://api.ebay.com/identity/v1/oauth2/token";
const BROWSE_SEARCH_URL = "https://api.ebay.com/buy/browse/v1/item_summary/search";
const BROWSE_ITEM_URL = "https://api.ebay.com/buy/browse/v1/item";

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAppToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value;
  }

  const appId = process.env.EBAY_PROD_APP_ID;
  const certId = process.env.EBAY_PROD_CERT_ID;
  if (!appId || !certId) {
    throw new Error("EBAY_PROD_APP_ID / EBAY_PROD_CERT_ID are not set");
  }
  const creds = Buffer.from(`${appId}:${certId}`).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${creds}`,
    },
    body: `grant_type=client_credentials&scope=${encodeURIComponent(
      "https://api.ebay.com/oauth/api_scope"
    )}`,
  });

  if (!res.ok) {
    throw new Error(`eBay OAuth token request failed: ${res.status}`);
  }

  const data = await res.json();
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return cachedToken.value;
}

export interface EbayListing {
  itemId: string;
  title: string;
  price: number;
  currency: string;
  imageUrls: string[];
  itemWebUrl: string;
  condition: string | null;
}

interface EbayItemSummary {
  itemId: string;
  price?: { value?: string; currency?: string };
  image?: { imageUrl?: string };
}

interface EbayAdditionalImage {
  imageUrl?: string;
}

async function searchCandidateItemIds(query: string, limit = 50): Promise<string[]> {
  const token = await getAppToken();

  const url = new URL(BROWSE_SEARCH_URL);
  url.searchParams.set("q", query);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("filter", "price:[5..2000],priceCurrency:USD,buyingOptions:{FIXED_PRICE}");

  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
    },
  });

  if (!res.ok) {
    throw new Error(`eBay Browse search failed: ${res.status}`);
  }

  const data = await res.json();
  const items = (data.itemSummaries ?? []) as EbayItemSummary[];

  return items
    .filter((item) => item.price?.value && item.image?.imageUrl)
    .map((item) => item.itemId as string);
}

async function getItemDetail(itemId: string): Promise<EbayListing | null> {
  const token = await getAppToken();

  const res = await fetch(`${BROWSE_ITEM_URL}/${encodeURIComponent(itemId)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
    },
  });

  if (!res.ok) return null;

  const item = await res.json();
  if (!item.price?.value || !item.image?.imageUrl) return null;

  const imageUrls = [
    item.image.imageUrl as string,
    ...((item.additionalImages ?? []) as EbayAdditionalImage[]).map((img) => img.imageUrl as string),
  ].filter((url, index, all) => url && all.indexOf(url) === index);

  return {
    itemId: item.itemId,
    title: item.title,
    price: parseFloat(item.price.value),
    currency: item.price.currency,
    imageUrls,
    itemWebUrl: item.itemWebUrl,
    condition: item.condition ?? null,
  };
}

export async function getRandomListing(query: string): Promise<EbayListing | null> {
  const candidateIds = await searchCandidateItemIds(query);
  const shuffled = [...candidateIds].sort(() => Math.random() - 0.5);

  for (const itemId of shuffled) {
    const listing = await getItemDetail(itemId);
    if (listing) return listing;
  }
  return null;
}
