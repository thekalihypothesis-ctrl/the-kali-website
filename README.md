# The Kali Hypothesis

Detective-office-themed Astro site with a clickable scene on the home
page and a marker-based AR viewer page.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Camera access (needed for the AR
page) only works on `localhost` or real HTTPS — this is a browser
security rule, not something in this code.

## What's here

- `src/layouts/MainLayout.astro` — fixed 1920×1080 stage, no responsive
  breakpoints. Every page except `/ar` uses this.
- `src/layouts/ARLayout.astro` — bare full-viewport shell for the AR
  page (no header/nav, loads A-Frame + AR.js).
- `src/components/OfficeScene.astro` — the interactive home page scene.
- `src/data/hotspots.js` — every clickable region's position and link
  target. **This is the file you'll edit most.**
- `src/pages/ar.astro` — the AR viewer, carried over from the earlier
  marker-ar project (drag-to-rotate included).
- `src/pages/*.astro` — one stub page per destination (about, story,
  shows, collectibles, the bookshelf items, the desk drawers). Replace
  the placeholder text with real content whenever you're ready.

## Finishing the scene with your real assets

Right now `OfficeScene.astro` shows the **complete labeled image**
(`scene-complete.jpg`) with invisible clickable boxes on top — so the
site works today, but it doesn't yet have per-element hover effects
(like a drawer visibly lighting up).

Once you export your individual cropped PNGs (transparent background,
one per element — cabinet, monitor, each bookshelf item, etc.):

1. Drop them in `public/images/office/elements/`.
2. Switch the background in `OfficeScene.astro` from
   `scene-complete.jpg` to `scene-base.jpg` (the empty room).
3. In `ClickableRegion.astro`, add an `<img>` inside the `<a>` sized to
   match its box, sourcing from your new element PNG. That gets you
   independent hover states per element instead of just a highlighted
   rectangle.

## Tuning hotspot positions

Every position in `src/data/hotspots.js` was eyeballed from the
reference art — treat them as a starting point. Visit any page with
`?debug=1` (e.g. `http://localhost:4321/?debug=1`) to see red outlines
over every hotspot, and adjust `x`, `y`, `w`, `h` until each box hugs
its element.

## Adding the AR assets

The AR page expects:

- `public/models/cover.glb`
- `public/markers/pattern.patt`

Copy these over from your existing marker-ar project (same filenames
are already wired up in `src/pages/ar.astro`).

## Testing the AR page for real

1. `npm run dev` and open the AR page on your laptop first, just to
   confirm no console errors and the camera permission prompt appears.
2. For a real test, you need a phone: either
   - deploy to Cloudflare Pages (push to your connected GitHub repo —
     it auto-builds, and Pages URLs are HTTPS by default), then open
     the Pages preview URL on your phone, or
   - use your laptop's local IP with a self-signed cert if you want to
     test on-phone without deploying.
3. Print (or display on another screen) `pattern.patt`'s source image
   and point your phone's camera at it — the `cover.glb` model should
   appear and rotate on drag.

## Deploying

This project builds to static files (`output: 'static'` in
`astro.config.mjs`), so it's a plain static-site deploy — just point
Cloudflare Pages at this repo with build command `npm run build` and
output directory `dist`.
