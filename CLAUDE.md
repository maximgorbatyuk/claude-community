# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Community website for Claude users in Kazakhstan — built with **Astro 6** (static site generator), deployed to **GitHub Pages** at `claude-community.kz`. Currently a single-page "Coming Soon" landing with planned expansion (about page, #builtwithclaude section, multi-column footer).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |

No test framework or linter is configured yet.

## Architecture

- **Astro file-based routing**: pages live in `src/pages/`, each `.astro` file becomes a route
- **Layout**: `src/layouts/Layout.astro` — master HTML shell with all global CSS custom properties, theme toggle logic, and animations
- **Styling**: Pure CSS with custom properties (no Tailwind). All design tokens (colors, spacing, typography, radii, transitions) are defined as CSS custom properties in Layout.astro
- **Theme system**: Dark/light mode via `data-theme` attribute on `<html>`, persisted to localStorage, respects `prefers-color-scheme`
- **Client-side JS**: Inline `<script>` blocks in Astro components (theme toggle, animated terminal status)

## Design System

The full design system is documented in `docs/ui-guideline.md`. Key points:

- **Primary accent**: `#d97757` (coral), hover: `#C46849`
- **Fonts**: Roboto (body, imported from Google Fonts), Georgia (headings), JetBrains Mono (code)
- **Mobile-first**: breakpoint at 480px, uses CSS media queries
- **Animations**: respect `prefers-reduced-motion`

Always consult `docs/ui-guideline.md` before creating new components or modifying visual styles.

## Deployment

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy.yml`) which builds with Astro and deploys to GitHub Pages. The custom domain is set via the `CNAME` file.

## Conventions

- Astro components use `<style is:global>` in Layout for shared styles and scoped `<style>` in page components
- No component library — components go in `src/components/` when created
- Node >=22.12.0 required (set in package.json `engines`)
