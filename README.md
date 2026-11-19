# Tanjim Imtial — Portfolio (Next.js)

Product Manager · Growth Strategist · AI Engineer.
Next.js 15 (App Router) + React 19 + TypeScript. No UI library: all styling is in `app/globals.css`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 18.18+ (20 LTS recommended).

## Deploy

Push the folder to GitHub, import it on https://vercel.com, and it deploys with zero config.
Then point `tanjimimtial.com` at the Vercel project (Settings → Domains).

## Structure

```
app/
  layout.tsx        <html>, fonts, metadata, pre-paint theme script (light by default)
  page.tsx          assembles every section in order
  globals.css       all styles (light/dark themes, responsive rules for mobile/tablet/web)
components/
  SiteChrome.tsx    loader, cursor, scroll bar, sticky header, mobile menu
  Hero.tsx          name, rotating roles, 3D parallax photo
  About.tsx         01 Who I am
  Impact.tsx        02 The impact (metrics grid is filled by site.js)
  Experience.tsx    03 What I do
  Toolkit.tsx       04 What I use
  PmFlow.tsx        05 How a PM works
  HowIWork.tsx      06 How I work (sprint board + phases)
  Products.tsx      07 What I've built (cards + filters)
  Showcase.tsx      08 Video player + playlist
  Games.tsx         09 Games carousel
  BuildingNext.tsx  10 In development
  Brands.tsx        11 Who I've worked with
  IdeaLab.tsx       12 Idea Lab form + Innovator Board
  Contact.tsx       Contact + message form
  Footer.tsx
  Modals.tsx        CV viewer, Idea Lab thank-you popup
  SiteScripts.tsx   loads /public/site.js after hydration
public/
  site.js           all interactivity + the content data lists
  assets/           photos, CV (PDF + image), game & product banners, videos
```

## Editing content

Most lists live at the top of their block in `public/site.js`:

| What | Search for in `site.js` |
|---|---|
| Product cards | `$('#bento')` (array `P`) |
| Videos in the player | `const VIDEOS=[` |
| Games | `IMG=s=>` (game list just above it) |
| In development items | `$('#devgrid')` (array `D`) |
| Impact numbers | `const M=[` |
| Brands | `$('#wwgrid')` (array `B`) |
| Toolkit | `$('#toolsg')` |

Static text (bio, experience, headings) is in the matching file in `components/`.

To add a video: drop an `.mp4` (and a poster `.jpg`) into `public/assets/videos/` and add a line to `VIDEOS`.
Keep videos around 720p and under ~20 MB so they load fast.

## Idea Lab storage

On your own domain the Idea Lab saves submissions in the visitor's browser (`localStorage`),
so each visitor only sees their own entries. To make the Innovator Board shared for everyone,
connect a backend (e.g. Supabase or a Google Sheet via an API route) and replace
`loadLocal()` / the submit handler in the Idea Lab block of `site.js`.
Only the name, date and product name should be stored publicly; keep industry and problem private.

## Notes

- Theme: light by default, the toggle stores the choice in `localStorage` (`ti_theme2`).
- Brand logos use Google's favicon service and load on the live domain.
- The QuizMuiz video is not included yet (it's on Facebook). Add the file to `public/assets/videos/` and a line in `VIDEOS`.
