# Sewing

A public library for finding, browsing, and downloading free sewing patterns.

## Why

I want to learn how to sew, and sewing patterns are a fundamental resource for doing that. I want a single place where I can keep the patterns I use and access them reliably.

## MVP

The first version will:

- Browse the available sewing patterns.
- Search the collection.
- Show basic pattern metadata.
- Host and provide access to the pattern files.
- Be publicly available through GitHub Pages.
- Store patterns directly in the repository.

The initial collection will be manually curated. No accounts or user-generated content are required for the MVP.

## Future directions

Possible future additions include:

- Tags and richer filtering.
- Comments and personal notes.
- Pattern tracking.
- Ratings and reviews.
- Community contributions.
- User accounts and user-owned data.
- Improved pattern management workflows.
- A Claude Code skill for consistently adding patterns.
- An AI-generated sewing knowledge base.

## Out of scope

The project is not intended to become:

- A social network.
- A marketplace for selling patterns.
- An internet-wide pattern search engine.
- A scraping or aggregation service.
- A general-purpose file storage service.
- A sewing project-management application.

## Layout

- `web/` — Astro site, deployed to GitHub Pages. This is where the app lives.

## Setup

Prerequisites: Node.js (>=22.12) with npm.

```sh
cd web
npm install
npm run dev
```

## Development

Each subdirectory documents itself in its own `CLAUDE.md` (see [CLAUDE.md](CLAUDE.md) for the full layout). Project-specific Claude Code skills live in `.claude/skills/`.
