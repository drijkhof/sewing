# sewing

A public library for finding, browsing, and downloading free sewing patterns, hosted on GitHub Pages. See [README.md](README.md) for the project's goals, MVP scope, and what's explicitly out of scope — read it before making product decisions.

This repo hosts multiple subprojects, each with its own `CLAUDE.md` for context specific to that part of the codebase. Read the relevant subproject's `CLAUDE.md` in addition to this file when working inside it.

## Layout

- `web/` — Astro site; this is where the app lives. See [web/CLAUDE.md](web/CLAUDE.md).

## Skills

Project-specific Claude Code skills live in `.claude/skills/`. Add a subdirectory per skill (with its own `SKILL.md`) there.

## Adding a new subproject

1. Create the subdirectory.
2. Add a `CLAUDE.md` inside it describing its tech stack, build/run/test commands, and any conventions specific to it.
3. Link it from this file's Layout section.
