import * as blob from "@vercel/blob";

// Private export of every Idea Lab submission (full details).
//   /api/ideas/export?key=ADMIN_KEY            -> table you can view in the browser
//   /api/ideas/export?key=ADMIN_KEY&format=csv -> CSV file (opens in Google Sheets / Excel)
export const dynamic = "force-dynamic";

type Idea = { key: string; ts: number; nm: string; pd: string; ind: string; pt: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const B: any = blob;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function readText(b: any): Promise<string> {
  if (typeof B.get === "function") {
    try {
      const r = await B.get(b.pathname, { access: "private" });
      if (r) {
        if (typeof r.text === "function") return await r.text();
        if (r.stream) return await new Response(r.stream).text();
        if (r.body) return await new Response(r.body).text();
      }
    } catch {
      /* fall through */
    }
  }
  const res = await fetch(b.downloadUrl || b.url, {
    headers: { authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` },
    cache: "no-store",
  });
  return await res.text();
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);
const csvCell = (s: string) => `"${String(s ?? "").replace(/"/g, '""')}"`;
const dhaka = (ts: number) =>
  new Date(ts).toLocaleString("en-GB", { timeZone: "Asia/Dhaka", year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });

export async function GET(req: Request) {
  const url = new URL(req.url);
  const key = process.env.ADMIN_KEY;
  if (!key || url.searchParams.get("key") !== key) return new Response("Not found", { status: 404 });

  const ideas: Idea[] = [];
  let cursor: string | undefined;
  do {
    const res = await B.list({ prefix: "ideas/", cursor, limit: 1000 });
    const batch = await Promise.all(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      res.blobs.map(async (b: any) => {
        try {
          return JSON.parse(await readText(b)) as Idea;
        } catch {
          return null;
        }
      }),
    );
    for (const i of batch) if (i) ideas.push(i);
    cursor = res.hasMore ? res.cursor : undefined;
  } while (cursor);
  ideas.sort((a, b) => a.ts - b.ts);

  if (url.searchParams.get("format") === "csv") {
    const rows = [["#", "Date (Dhaka)", "Name", "Product / Service", "Industry", "Problem it solves"]].concat(
      ideas.map((i, n) => [String(n + 1), dhaka(i.ts), i.nm, i.pd, i.ind, i.pt]),
    );
    const csv = "﻿" + rows.map((r) => r.map(csvCell).join(",")).join("\r\n");
    return new Response(csv, {
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": `attachment; filename="innovator-board-${new Date().toISOString().slice(0, 10)}.csv"`,
        "cache-control": "no-store",
      },
    });
  }

  const body = ideas
    .map((i, n) => `<tr><td>${n + 1}</td><td>${esc(dhaka(i.ts))}</td><td>${esc(i.nm)}</td><td>${esc(i.pd)}</td><td>${esc(i.ind)}</td><td>${esc(i.pt)}</td></tr>`)
    .join("");
  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Innovator Board · all ideas</title>
<style>body{font-family:system-ui,sans-serif;background:#0d0c14;color:#eee;margin:0;padding:24px}h1{font-size:22px;margin:0 0 4px}p{color:#aaa;margin:0 0 18px}a.b{display:inline-block;background:#fff;color:#111;padding:10px 16px;border-radius:999px;text-decoration:none;font-weight:600;margin-bottom:18px}
.w{overflow-x:auto}table{border-collapse:collapse;width:100%;min-width:760px;font-size:14px}th,td{border-bottom:1px solid #2a2838;padding:10px 12px;text-align:left;vertical-align:top}th{color:#bbb;font-weight:600;background:#17151f;position:sticky;top:0}td:last-child{max-width:420px}</style></head>
<body><h1>Innovator Board</h1><p>${ideas.length} idea${ideas.length === 1 ? "" : "s"} · private view, don't share this link</p>
<a class="b" href="?key=${encodeURIComponent(key)}&format=csv">⬇ Download CSV (open in Google Sheets)</a>
<div class="w"><table><thead><tr><th>#</th><th>Date (Dhaka)</th><th>Name</th><th>Product / Service</th><th>Industry</th><th>Problem it solves</th></tr></thead><tbody>${body || '<tr><td colspan="6">No ideas yet.</td></tr>'}</tbody></table></div></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-robots-tag": "noindex" } });
}
