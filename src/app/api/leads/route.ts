import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    
    const body = await req.json().catch(() => ({}));
    const email = String(body.email ?? "").trim();
    const website_url = body.website_url ? String(body.website_url).trim() : "";
    const company = String(body.company ?? "").trim();

    // Honeypot: silently accept
    if (company) return NextResponse.json({ ok: true });

    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    // Optional URL validation (mirrors your client)
    if (website_url && !(website_url.startsWith("http://") || website_url.startsWith("https://"))) {
      return NextResponse.json(
        { ok: false, error: "Invalid URL (must start with http or https)." },
        { status: 400 }
      );
    }

    const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json(
        { ok: false, error: "Server not configured: GOOGLE_SHEETS_WEBHOOK_URL missing." },
        { status: 500 }
      );
    }

    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        website_url: website_url || null,
        source: "turnover-sites",
      }),
    });

    const upstreamText = await upstream.text();

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: `Webhook failed (${upstream.status}): ${upstreamText}` },
        { status: 502 }
      );
    }

    // If Apps Script returns JSON, great; if not, any 200 is success
    return NextResponse.json({ ok: true, upstream: upstreamText || null });
  } catch (err: any) {
    console.error("API /api/leads error:", err);
    return NextResponse.json(
      { ok: false, error: `Server error: ${err?.message ?? "unknown"}` },
      { status: 500 }
    );
  }
}