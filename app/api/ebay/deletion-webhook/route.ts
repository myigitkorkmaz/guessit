import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const ENDPOINT_URL = "https://temporary-express-perseus-x2604ok.vercel.app/api/ebay/deletion-webhook";

export async function GET(request: NextRequest) {
  const challengeCode = request.nextUrl.searchParams.get("challenge_code");
  const verificationToken = process.env.EBAY_VERIFICATION_TOKEN;

  if (!challengeCode || !verificationToken) {
    return NextResponse.json({ error: "missing challenge_code or verification token" }, { status: 400 });
  }

  const hash = createHash("sha256");
  hash.update(challengeCode);
  hash.update(verificationToken);
  hash.update(ENDPOINT_URL);
  const challengeResponse = hash.digest("hex");

  return NextResponse.json({ challengeResponse });
}

export async function POST() {
  // PriceDrop stores no eBay user account data, so there is nothing to delete — just acknowledge.
  return new NextResponse(null, { status: 200 });
}
