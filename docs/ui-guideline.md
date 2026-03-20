# Claude Community Website - UI Guideline

This document defines the visual design system for the Claude Community website. All styles are derived from the official Claude Code documentation site (code.claude.com) and the Anthropic brand identity (anthropic.com).

---

## 1. Brand Identity

The Claude Community website should feel like a natural extension of the Claude/Anthropic ecosystem: clean, developer-focused, and modern, with a dark-first aesthetic and warm accent colors.

### Design Principles

- **Dark-first**: Default to dark mode; support light mode as an alternative
- **Minimal but purposeful**: Every element should earn its place
- **Developer-focused**: Prioritize readability, code presentation, and information density
- **Warm and approachable**: Use warm accent colors to avoid feeling cold or sterile
- **Accessible**: Honor `prefers-reduced-motion`, maintain WCAG AA contrast ratios

---

## 2. Color Palette

### Primary Brand Colors

| Role              | Hex       | Usage                                        |
|-------------------|-----------|----------------------------------------------|
| Coral (Primary)   | `#d97757` | Primary accent, CTAs, links, highlights      |
| Coral Dark        | `#C46849` | Hover states, active states                  |
| Dark Slate        | `#141413` | Primary text (light mode), deepest background|
| Light Cream       | `#f5f4ed` | Primary background (light mode)              |
| Cloud Light       | `#e8e6dc` | Secondary background (light mode), borders   |

### Dark Mode Palette

| Role                  | Token                  | Approximate Hex | Usage                        |
|-----------------------|------------------------|-----------------|------------------------------|
| Background Primary    | `--color-gray-950`     | `#0a0a0a`       | Page background              |
| Background Secondary  | `--color-gray-900`     | `#131313`       | Card backgrounds, sidebar    |
| Background Tertiary   | `--color-gray-850`     | `#1a1a1a`       | Elevated surfaces, hover     |
| Foreground Primary    | `--color-gray-050`     | `#f5f5f5`       | Primary text                 |
| Foreground Secondary  | `--color-gray-400`     | `#9a9a9a`       | Secondary text, descriptions |
| Foreground Tertiary   | `--color-gray-500`     | `#737373`       | Muted text, placeholders     |
| Border Primary        | `--color-gray-600`     | `#525252`       | Dividers, card borders       |
| Border Secondary      | `--color-gray-700`     | `#404040`       | Subtle borders               |
| Button BG Primary     | `--color-gray-050`     | `#f5f5f5`       | Primary button background    |
| Button BG Secondary   | `--color-gray-750`     | `#333333`       | Secondary button background  |

### Light Mode Palette

| Role                  | Approximate Hex | Usage                        |
|-----------------------|-----------------|------------------------------|
| Background Primary    | `#f5f4ed`       | Page background              |
| Background Secondary  | `#e8e6dc`       | Card backgrounds, sidebar    |
| Background Tertiary   | `#dddbd1`       | Elevated surfaces            |
| Foreground Primary    | `#141413`       | Primary text                 |
| Foreground Secondary  | `#30302e`       | Secondary text               |
| Foreground Tertiary   | `#87867f`       | Muted text                   |

### Semantic Colors

| Role    | Hex       | Usage                                 |
|---------|-----------|---------------------------------------|
| Error   | `#df6666` | Error messages, destructive actions   |
| Warning | `#eda100` | Warning callouts, caution indicators  |
| Success | `#4ade80` | Success states, confirmations         |
| Info    | `#60a5fa` | Informational callouts, links         |

---

## 3. Typography

### Font Families

The site uses a **monospace-only** typographic approach, with JetBrains Mono for all text (loaded from Google Fonts).

```css
:root {
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
  --font-serif: Georgia, 'Times New Roman', serif;
}
```

| Context              | Font Stack     | Notes                                           |
|----------------------|----------------|-------------------------------------------------|
| Display/Headings     | `--font-serif` | Used for hero headlines and major section titles |
| Body/UI/Code         | `--font-mono`  | All body text, navigation, buttons, labels, code blocks, terminal output |

> **Note**: `--font-sans` has been removed. All body and UI text uses `--font-mono` (JetBrains Mono) for a unified monospace aesthetic.

### Font Sizes (Fluid Typography)

Use CSS `clamp()` for responsive scaling:

```css
--text-xs:    clamp(0.75rem,  0.7rem  + 0.2vw,  0.875rem);   /* 12-14px */
--text-sm:    clamp(0.875rem, 0.83rem + 0.2vw,  1rem);        /* 14-16px */
--text-base:  clamp(1rem,     0.95rem + 0.25vw, 1.125rem);    /* 16-18px */
--text-lg:    clamp(1.125rem, 1.087rem + 0.163vw, 1.25rem);   /* 18-20px */
--text-xl:    clamp(1.25rem,  1.1rem  + 0.65vw, 1.75rem);     /* 20-28px */
--text-2xl:   clamp(1.5rem,   1.3rem  + 0.85vw, 2.25rem);     /* 24-36px */
--text-3xl:   clamp(2rem,     1.69rem + 1.31vw, 3rem);        /* 32-48px */
--text-hero:  clamp(3rem,     2.39rem + 2.61vw, 5rem);        /* 48-80px */
```

### Line Heights

| Context   | Value  |
|-----------|--------|
| Headings  | `1.2`  |
| Body      | `1.6`  |
| Code      | `1.5`  |
| Compact   | `1.4`  |

### Font Weights

| Weight     | Value | Usage                               |
|------------|-------|-------------------------------------|
| Regular    | `400` | Body text, descriptions             |
| Medium     | `500` | Navigation items, labels            |
| Semibold   | `600` | Subheadings, emphasis               |
| Bold       | `700` | Headlines, strong emphasis          |

---

## 4. Layout & Grid

### Grid System

Use a 12-column CSS Grid with content and full-width lanes:

```css
.grid-layout {
  display: grid;
  grid-template-columns:
    [full-start] minmax(0, 1fr)
    [content-start] minmax(0, 72rem)
    [content-end] minmax(0, 1fr)
    [full-end];
  gap: var(--grid-gutter);
}
```

### Breakpoints

| Name    | Min-width | Pixels | Usage                      |
|---------|-----------|--------|----------------------------|
| `sm`    | `30em`    | 480px  | Mobile landscape           |
| `md`    | `48em`    | 768px  | Tablet                     |
| `lg`    | `56em`    | 896px  | Small desktop, nav switch  |
| `xl`    | `62em`    | 992px  | Desktop                    |
| `2xl`   | `80em`    | 1280px | Wide desktop               |

### Spacing Scale

Use a consistent spacing scale based on `rem`:

```css
--space-1:   0.25rem;   /*  4px */
--space-2:   0.5rem;    /*  8px */
--space-3:   0.75rem;   /* 12px */
--space-4:   1rem;      /* 16px */
--space-5:   1.5rem;    /* 24px */
--space-6:   2rem;      /* 32px */
--space-7:   3rem;      /* 48px */
--space-8:   4rem;      /* 64px */
--space-9:   6rem;      /* 96px */
```

### Max Widths

| Element         | Max Width  |
|-----------------|------------|
| Content area    | `72rem` (1152px) |
| Readable text   | `65ch`     |
| Sidebar         | `16rem` (256px) |
| Navigation      | `80rem` (1280px) |

---

## 5. Components

### Buttons

Three tiers of buttons following the Claude Code design pattern:

#### Primary Button
```css
.btn-primary {
  background: var(--color-gray-050);     /* light on dark */
  color: var(--color-gray-950);          /* dark text */
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  transition: opacity 150ms ease;
}
.btn-primary:hover {
  opacity: 0.9;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: var(--color-gray-750);
  color: var(--color-gray-050);
  border: 1px solid var(--color-gray-600);
  border-radius: 4px;
  padding: 8px 16px;
}
```

#### Tertiary/Ghost Button
```css
.btn-tertiary {
  background: transparent;
  color: var(--color-gray-050);
  border: 1px solid var(--color-gray-700);
  border-radius: 4px;
  padding: 8px 16px;
}
```

#### Accent Button (CTA)
```css
.btn-accent {
  background: #d97757;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-weight: 600;
}
.btn-accent:hover {
  background: #C46849;
}
```

#### Focus States
```css
*:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

### Cards

```css
.card {
  background: var(--color-gray-900);
  border: 1px solid var(--color-gray-700);
  border-radius: 8px;                    /* --radius-large */
  padding: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
}
.card:hover {
  border-color: var(--color-gray-600);
}
```

### Navigation

#### Header
- Fixed position, full width
- Height: `4.25rem` on desktop
- Background: same as page background with slight opacity
- Hamburger menu below `56em` (896px)
- Hamburger animation: `45deg` rotation, `300ms` duration
- Dropdown easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out)

#### Sidebar (Documentation)
- Width: `16rem` (256px)
- Sticky positioning
- Collapsible sections
- Active item highlighted with accent color or background change

### Links

```css
a {
  color: #d97757;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 150ms ease;
}
a:hover {
  color: #C46849;
}
```

In dark mode, links within body text use the coral accent. Navigation links use the foreground colors.

### Code Blocks

```css
.code-block {
  background: var(--color-gray-900);
  border: 1px solid var(--color-gray-700);
  border-radius: 6px;
  padding: 1rem 1.25rem;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.5;
  overflow-x: auto;
}
```

#### Inline Code
```css
code {
  background: var(--color-gray-850);
  padding: 0.125rem 0.375rem;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.9em;
}
```

### Callouts / Alerts

Four semantic callout types matching the docs site:

#### Tip (Green)
```css
.callout-tip {
  border-left: 3px solid #4ade80;
  background: rgba(74, 222, 128, 0.05);
  padding: 1rem 1.25rem;
  border-radius: 0 6px 6px 0;
}
```

#### Info (Blue)
```css
.callout-info {
  border-left: 3px solid #60a5fa;
  background: rgba(96, 165, 250, 0.05);
  padding: 1rem 1.25rem;
  border-radius: 0 6px 6px 0;
}
```

#### Warning (Yellow/Amber)
```css
.callout-warning {
  border-left: 3px solid #eda100;
  background: rgba(237, 161, 0, 0.05);
  padding: 1rem 1.25rem;
  border-radius: 0 6px 6px 0;
}
```

#### Error/Danger (Red)
```css
.callout-error {
  border-left: 3px solid #df6666;
  background: rgba(223, 102, 102, 0.05);
  padding: 1rem 1.25rem;
  border-radius: 0 6px 6px 0;
}
```

### Tables

```css
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  text-align: left;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-bottom: 2px solid var(--color-gray-600);
}
td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-gray-700);
}
tr:hover {
  background: var(--color-gray-850);
}
```

### Tabs

- Horizontal tab bar with bottom border
- Active tab: coral accent underline (`#d97757`), 2px thick
- Inactive tabs: muted text color (`--color-gray-400`)
- Smooth transition on tab switch

### Accordion / Expandable Sections

- Chevron icon rotates on expand
- Content area uses `grid-template-rows: 0fr` to `1fr` for smooth animation
- Border between items using `--color-gray-700`

### Steps / Numbered Lists

- Numbered circle indicators with coral accent
- Vertical connector line between steps
- Active/completed steps use filled circles

---

## 6. Icons

- Use a consistent icon set (Lucide, Heroicons, or Phosphor recommended)
- Icon size: `1rem` (16px) inline, `1.25rem` (20px) in buttons, `1.5rem` (24px) standalone
- Icons inherit `currentColor` for easy theming
- Status symbols from Claude Code terminal aesthetic: `◈ ◓ ✽ ◐ ◑ ◒ ● ◯ ◇ ◆ ▲ ▼`

---

## 7. Motion & Animation

### Guiding Principles
- Respect `prefers-reduced-motion` always
- Keep transitions under `300ms` for UI interactions
- Use `ease` or `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for smooth feel

### Standard Transitions
```css
--transition-fast:    100ms ease;
--transition-default: 200ms ease;
--transition-slow:    300ms cubic-bezier(0.16, 1, 0.3, 1);
```

### Animations Used on Claude Code Site
- **Typewriter effect**: hero section text animation (`100ms` per character)
- **Symbol cycling**: rotating status symbols (`1000ms` interval)
- **Hamburger rotation**: `45deg` on open (`300ms`)
- **Card hover**: `transform: scale(1.05)` with `200ms ease`
- **Dropdown expand**: `grid-template-rows 0fr → 1fr`

---

## 8. Dark / Light Mode Implementation

### Approach
Use CSS custom properties with a `data-theme` attribute on `<html>`:

```css
:root,
[data-theme="dark"] {
  --bg-primary:    #0a0a0a;
  --bg-secondary:  #131313;
  --bg-tertiary:   #1a1a1a;
  --fg-primary:    #f5f5f5;
  --fg-secondary:  #9a9a9a;
  --fg-tertiary:   #737373;
  --border-primary: #525252;
  --border-secondary: #404040;
  --accent:        #d97757;
  --accent-hover:  #C46849;
}

[data-theme="light"] {
  --bg-primary:    #f5f4ed;
  --bg-secondary:  #e8e6dc;
  --bg-tertiary:   #dddbd1;
  --fg-primary:    #141413;
  --fg-secondary:  #30302e;
  --fg-tertiary:   #87867f;
  --border-primary: #c2c0b6;
  --border-secondary: #d4d2c8;
  --accent:        #d97757;
  --accent-hover:  #C46849;
}
```

### Detection
```javascript
// Default to OS preference, allow manual override
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
```

---

## 9. Page Templates

### Documentation Page
- Sidebar navigation (left, 256px)
- Content area (centered, max 65ch for prose)
- Table of contents (right, sticky, optional)
- Breadcrumb navigation above content

### Landing / Home Page
- Full-width hero with dark background
- Terminal/code aesthetic in hero section
- Feature cards in grid layout
- Community highlights section
- CTA sections with accent buttons

### Community Page (Events, Members, etc.)
- Card grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Filter/search bar at top
- Pagination or infinite scroll

---

## 10. Astro-Specific Implementation Notes

Since this project uses Astro:

- Use `<style>` blocks in `.astro` components for scoped styles
- Define CSS custom properties in a global `styles/global.css`
- Use Astro's built-in `class:list` for conditional classes
- Leverage `astro:assets` for optimized images
- Consider using `@astrojs/tailwind` if the team prefers utility-first CSS (Tailwind classes map well to the design tokens above)

### Recommended File Structure
```
src/
  styles/
    global.css          # CSS custom properties, resets, base styles
    components.css      # Shared component styles (cards, buttons, callouts)
  components/
    Header.astro
    Footer.astro
    Sidebar.astro
    Card.astro
    Callout.astro
    CodeBlock.astro
    Button.astro
  layouts/
    BaseLayout.astro    # HTML shell, theme detection, global styles
    DocsLayout.astro    # Sidebar + content layout
    PageLayout.astro    # Full-width page layout
```

---

## 11. Quick Reference: CSS Custom Properties

```css
:root {
  /* Colors */
  --accent:            #d97757;
  --accent-hover:      #C46849;
  --error:             #df6666;
  --warning:           #eda100;
  --success:           #4ade80;
  --info:              #60a5fa;

  /* Typography (monospace-only) */
  --font-mono:         'JetBrains Mono', 'SF Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
  --font-serif:        Georgia, 'Times New Roman', serif;
  --line-height-body:  1.6;
  --line-height-heading: 1.2;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;

  /* Borders */
  --radius-sm:   3px;
  --radius-md:   4px;
  --radius-lg:   6px;
  --radius-xl:   8px;

  /* Transitions */
  --transition-fast:    100ms ease;
  --transition-default: 200ms ease;
  --transition-slow:    300ms cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --content-max-width:  72rem;
  --prose-max-width:    65ch;
  --sidebar-width:      16rem;
  --nav-height:         4.25rem;
}
```

---

## 12. Sources

- Claude Code documentation: https://code.claude.com/docs/en/best-practices
- Claude Code product page: https://www.claude.com/product/claude-code
- Anthropic corporate site: https://www.anthropic.com
- Design tokens extracted from rendered CSS on 2026-03-19
