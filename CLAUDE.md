# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Community website for Claude users in Kazakhstan — built with **Astro 6** (static site generator), deployed to **GitHub Pages** at `claude-community.kz`. Multi-page site with homepage, projects showcase (#builtwithclaude), and about page. Supports 3 locales (Russian default, English, Kazakh).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview production build locally |

No test framework or linter is configured yet.

## Architecture

- **Astro file-based routing**: pages in `src/pages/`, locale variants in `src/pages/en/` and `src/pages/kk/`
- **Layout**: `src/layouts/Layout.astro` — master HTML shell with global CSS custom properties, theme toggle, JSON-LD, OG tags, Google Analytics, Navbar, and Footer
- **Styling**: Pure CSS with custom properties (no Tailwind). Design tokens defined in Layout.astro
- **Theme system**: Dark/light mode via `data-theme` attribute on `<html>`, persisted to localStorage
- **Client-side JS**: Inline `<script>` blocks in Astro components (theme toggle, terminal animation, project modal)
- **Data**: `src/data/projects.json` — project entries for #builtwithclaude page

## i18n

- **Locales**: `ru` (default, served at `/`), `en` (`/en/`), `kk` (`/kk/`)
- **System**: `src/i18n/index.ts` exports `t()`, `getLocalePath()`, `getBasePath()`
- **Translations**: `src/i18n/translations.ts` — flat key-value records per locale
- **Fallback**: Missing keys fall back to `ru`, then return the key itself
- **Convention**: Russian is the root route (`/`), other locales are prefixed (`/en/`, `/kk/`)

## Components

| Component | Purpose |
|-----------|---------|
| `Layout.astro` | Master HTML shell (in `src/layouts/`) |
| `Navbar.astro` | Fixed header with nav links, language selector, theme toggle |
| `Footer.astro` | Global 4-column footer (brand, nav, friends, GitHub) |
| `HomePage.astro` | Main landing: hero, telegram links, #builtwithclaude preview, about |
| `ProjectsPage.astro` | Projects grid with card click → modal, share via hash URL |
| `ProjectCard.astro` | Individual project card (clickable, opens modal) |
| `PlaceholderPage.astro` | "Coming Soon" placeholder (used by about page) |
| `LanguageSelector.astro` | Locale dropdown in navbar |

## Design System

The full design system is documented in `docs/ui-guideline.md`. Key points:

- **Primary accent**: `#d97757` (coral), hover: `#C46849`
- **Fonts**: JetBrains Mono (body/UI, imported from Google Fonts), Georgia (headings)
- **Mobile-first**: breakpoint at 480px, uses CSS media queries
- **Animations**: respect `prefers-reduced-motion`
- **Footer**: Always dark background (`#131313`) with hardcoded dark-mode text colors in both themes

Always consult `docs/ui-guideline.md` before creating new components or modifying visual styles.

## Gotchas

- **Astro scoped styles + child components**: Scoped `<style>` in a parent component won't apply to child component elements — the `data-astro-cid-*` attribute doesn't propagate. Use `<style is:global>` for styles that target child component elements or dynamically created DOM nodes (e.g., ProjectCard styles, modal tool tags)
- **Astro template whitespace**: Consecutive spaces in Astro templates get collapsed. For preformatted text (ASCII art), use a frontmatter variable with `set:html` directive instead of inline template content
- **Footer is in Layout**: The footer is rendered by `Layout.astro` via `Footer.astro`, not by individual pages. Don't add footers to page components

## SEO & AI

- **Sitemap**: `public/sitemap.xml` — static, lists all 9 pages with hreflang cross-references
- **robots.txt**: `public/robots.txt` — allows all crawlers including AI bots (GPTBot, ClaudeBot, etc.)
- **LLM files**: `public/llms.txt` and `public/llms-full.txt` — AI-optimized site descriptions
- **JSON-LD**: Organization, WebSite, WebPage schemas in Layout.astro `<head>`
- **OG/Twitter**: Open Graph and Twitter Card meta tags per page
- **Google Analytics**: `G-C4TW7QTDJ6` in Layout.astro

## Deployment

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy.yml`) which builds with Astro and deploys to GitHub Pages. The custom domain is set via the `CNAME` file.

## Conventions

- Global shared styles use `<style is:global>` (Layout, Footer, ProjectCard)
- Page-specific styles use scoped `<style>` when elements are in the same component
- Components go in `src/components/`
- Node >=22.12.0 required (set in package.json `engines`)
