import { put, list } from "@vercel/blob";

// Innovator Board storage (Vercel Blob, private store).
// - board/<ts>-<key>~<data>.json : public board row (name, product, field lengths) encoded in the path,
//   so the board can be listed without reading every file.
// - ideas/<ts>-<key>-<random>.json : the full idea (industry + problem), never returned by this API.
export const dynamic = "force-dynamic";

type Row = { key: string; ts: number; n: string; pd: string; il: number; sl: number; pl: number };

const enc = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
const dec = (s: string) => JSON.parse(Buffer.from(s, "base64url").toString("utf8"));
const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : "";

export async function GET() {
  try {
    const items: Row[] = [];
    let cursor: string | undefined;
    do {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: any = await list({ prefix: "board/", cursor, limit: 1000 } as any);
      for (const b of res.blobs as { pathname: string }[]) {
        const m = b.pathname.match(/^board\/(\d+)-([a-z0-9]+)~([A-Za-z0-9_-]+)\.json$/);
        if (!m) continue;
        try {
          const d = dec(m[3]);
          items.push({ key: m[2], ts: Number(m[1]), n: String(d.n || ""), pd: String(d.pd || ""), il: Number(d.il) || 8, sl: Number(d.sl) || 12, pl: String(d.pd || "").length });
        } catch {
          /* skip malformed */
        }
      }
      cursor = res.hasMore ? res.cursor : undefined;
    } while (cursor);
    items.sort((a, b) => a.ts - b.ts);
    return Response.json({ items }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: "unavailable" }, { status: 503 });
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return Response.json({ error: "bad_request" }, { status: 400 });
  const nm = clean(body.nm, 40);
  const pd = clean(body.pd, 60);
  const ind = clean(body.ind, 40);
  const pt = clean(body.pt, 600);
  if (!nm || !pd || !ind || pt.length < 5) return Response.json({ error: "missing_fields" }, { status: 400 });
  const ts = Date.now();
  const key = (typeof body.key === "string" ? body.key.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 16) : "") || ts.toString(36);
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const opts: any = { access: "private", contentType: "application/json" };
    await put(`ideas/${ts}-${key}.json`, JSON.stringify({ key, ts, nm, pd, ind, pt }), { ...opts, addRandomSuffix: true });
    await put(`board/${ts}-${key}~${enc({ n: nm, pd, il: ind.length, sl: pt.length })}.json`, "1", { ...opts, addRandomSuffix: false });
  } catch {
    return Response.json({ error: "save_failed" }, { status: 500 });
  }
  const item: Row = { key, ts, n: nm, pd, il: ind.length, sl: pt.length, pl: pd.length };
  return Response.json({ item });
}
