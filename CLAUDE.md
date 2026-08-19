# sewing

Root of the `sewing` project. This repo hosts multiple subprojects, each with its own `CLAUDE.md` for context specific to that part of the codebase. Read the relevant subproject's `CLAUDE.md` in addition to this file when working inside it.

## Layout

- `src/` — root TypeScript package (`sewing`). Minimal setup: `tsc` build, no dependencies yet.
- `web/` — planned Astro site, deployed to GitHub Pages. See [web/CLAUDE.md](web/CLAUDE.md).

## Root package (`src/`)

- Build: `npm run build` (runs `tsc`, output to `dist/`)
- No test runner or lint config yet.

## Skills

Project-specific Claude Code skills live in `.claude/skills/`. Add a subdirectory per skill (with its own `SKILL.md`) there.

## Adding a new subproject

1. Create the subdirectory.
2. Add a `CLAUDE.md` inside it describing its tech stack, build/run/test commands, and any conventions specific to it.
3. Link it from this file's Layout section.
