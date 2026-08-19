# web

The app — an Astro site for browsing/searching/downloading free sewing patterns. See the [root README](../README.md) for product scope.

## Tech stack

- [Astro](https://astro.build) (minimal template)
- Hosted on GitHub Pages, deployed via `.github/workflows/deploy.yml` on push to `main`
- `astro.config.mjs` sets `site`/`base` for the `drijkhof/sewing` GitHub Pages project URL (`https://drijkhof.github.io/sewing`)
- [`astro-pagefind`](https://github.com/shishkin/astro-pagefind) indexes the built site (including pattern pages) at build time; the search box lives on the landing page

## Commands

Run from inside `web/`:

- `npm install` — install dependencies
- `npm run dev` — local dev server at `localhost:4321`
- `npm run build` — production build to `web/dist/` (also runs Pagefind indexing)
- `npm run preview` — preview the production build locally

## Structure

- `src/pages/` — routes (`.astro`/`.md` files, one route per file)
  - `patterns/[slug].astro` — per-pattern detail page (from the `patterns` content collection)
- `src/content.config.ts` — content collections; `patterns` loads `public/patterns/*/index.yaml` with schema `name`, `description`, `size`, `type`
- `src/layouts/Base.astro` — shared `<html>` shell
- `src/lib/base.ts` — normalized `BASE_URL` (Astro's `import.meta.env.BASE_URL` has no trailing slash for a `base` like `/sewing`; use this instead of concatenating `BASE_URL` directly)
- `public/patterns/<slug>/` — one directory per pattern, co-locating `index.yaml` (metadata) and `pattern.pdf` (the file). Both are served statically; `index.yaml`'s parent directory name is the pattern's id/slug (Astro's content collections convention).
