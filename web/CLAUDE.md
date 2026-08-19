# web

The app — an Astro site for browsing/searching/downloading free sewing patterns. See the [root README](../README.md) for product scope.

## Tech stack

- [Astro](https://astro.build) (minimal template)
- Hosted on GitHub Pages, deployed via `.github/workflows/deploy.yml` on push to `main`
- `astro.config.mjs` sets `site`/`base` for the `drijkhof/sewing` GitHub Pages project URL (`https://drijkhof.github.io/sewing`)

## Commands

Run from inside `web/`:

- `npm install` — install dependencies
- `npm run dev` — local dev server at `localhost:4321`
- `npm run build` — production build to `web/dist/`
- `npm run preview` — preview the production build locally

## Structure

- `src/pages/` — routes (`.astro`/`.md` files, one route per file)
- `public/` — static assets served as-is
