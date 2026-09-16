# Design plan — Aabeyaantrix website

Brand colours are given (orange + blue from the logo), not chosen. This plan
decides everything around them. All contrast ratios below were computed against
WCAG 2.1 (see the values in parentheses); AA is the floor.

> **Resolved (2026-09-16):** exact brand hex sampled from the real logo
> artwork in `Aabeyaantrix-Brochure.pdf` (pages 1 & 12 — the wordmark, the
> gear ring/subtitle, and the solid footer band). Method: rendered each page
> to a 2382×3368 PNG at 4× zoom with PyMuPDF, then took the pixel-mode of
> flat regions in each colour (400k–900k+ pixels per sample). Two independent
> instances of both colours matched exactly, so this supersedes the brief's
> brochure-eyeballed approximations — orange was close (`#E8501F` → `#E55225`),
> blue was not (`#1160B8` → `#0054A6`, notably deeper and fully saturated).

## Palette (6 named + functional tokens)

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--paper` | `#FFFFFF` | Page background | — |
| `--surface` | `#F5F6F7` | Alternating section background (cool grey, **not** warm cream) | — |
| `--ink` | `#14181C` | Primary text & default headings | 17.8:1 on paper |
| `--blue` | `#0054A6` | Brand structural: links, section markers, heading accents | 7.5:1 on paper |
| `--navy` | `#0B2239` | Deep surfaces: footer, CTA band, strong headings | 16.1:1 (white on it) |
| `--orange` | `#E55225` | Brand accent: hairline rules, icons, large display numerals | large-text / non-text only |
| `--cta` | `#C74118` | Button fill under white label (tuned orange for AA) | 5.0:1 (white on it) |
| `--steel` | `#566069` | Secondary / supporting text | 5.9:1 on paper |
| `--line` | `#D9DEE3` | Hairline rules & borders | — |

Footer/CTA text on navy: `#C4CDD6` body (10:1), `#A9B2BC` muted (7.5:1).

**Why two oranges:** white on brand `#E55225` is 3.77:1 — fine for large display,
below AA for button labels. Button fills therefore use `--cta #C74118` (5.0:1),
visually the same orange family. `--orange` is reserved for rules, icons and
large numerals where it passes.

`--navy` is a derived dark neutral, not one of the two logo colours — the logo
has no navy. Its hue (210°) already sits within 2° of the real sampled blue,
so it needed no adjustment. The logo's gold "ABC" lettering (`#B4942F`) was
sampled too but isn't used site-wide — it's a one-off detail inside the
icon mark itself, not a brand colour the brief calls out for structural or
CTA use, and adding a third accent colour would fight the two-colour system.

## Logo

The real artwork was recovered as **vector** from the brochure PDF (page 12
draws the logo as paths, not a raster embed), cropped to its bounding box and
rebuilt as a minimal SVG — no tracing or redrawing. Two assets:

| File | Use |
|---|---|
| `public/logo-mark.svg` (7 KB) | Gear emblem. Header, footer, `app/icon.svg` favicon. |
| `public/logo-full.svg` (68 KB) | Complete stacked lockup. Print, OG, downloads. |

The full lockup is *stacked* (gear over wordmark over tagline), so it is
illegible at header height. `components/Logo.tsx` therefore pairs the mark with
set typography instead of shrinking the lockup. On navy the mark sits on a
paper chip — its gear is brand blue and would otherwise go dark-on-dark.

## Motion & interaction

Motion is **action-response only**: it answers a hover, focus or press. There is
no ambient scroll animation — the page never moves on its own, which is the
generated-design tell the brief calls out. Two exceptions, both one-shot on
load: the staggered hero entrance, and the schematic's pipe runs drawing
themselves in.

One easing curve (`--ease`) and three durations (`--t-fast/base/slow`) across
everything, so the whole surface feels like one hand made it. Shadows are
tinted navy, never neutral grey.

Utilities in `globals.css`: `.link-underline` (underline grows from the left),
`.lift` (panel raises + shadow), `.btn` (hover lift, press-down on `:active`),
`.row-item` (accent bar grows down the left edge), `.nudge` (icon shifts inside
a hovered parent), `.blueprint-grid` / `-light` (drawing-grid ground).

Every one of these is neutralised under `prefers-reduced-motion`, which keeps
colour and shadow feedback but drops all translation and scaling — nothing
becomes ambiguous or unclickable.

## Typography — one superfamily, two roles

- **IBM Plex Sans** (`--font-sans`) — headings, body, UI. Engineering heritage,
  legible, not the default Inter/Geist tell. Weights 400 / 500 / 600 / 700.
- **IBM Plex Mono** (`--font-mono`) — used *only* for genuine registration data
  (licence no., Chamber no., Makani, P.O. Box, project spec metadata). Mono here
  means "spec plate / registered data", not decoration.

Type scale (fluid, ~major-third), body max ~68ch:
- Display H1 `clamp(2.4rem, 6vw, 4rem)` / 600 / tight
- H2 `clamp(1.6rem, 3.5vw, 2.25rem)` / 600
- H3 `1.25rem` / 600
- Body `1.0625rem` (17px) / 1.6
- Data/label (mono) `0.8125rem`

## Home layout concept

```
┌─────────────────────────────────────────────────────────────┐
│ Aabeyaantrix        Services  Projects  About  Contact [Call]│  header, thin bottom rule
├─────────────────────────────────────────────────────────────┤
│  MEP & building-services              ┌───────────────────┐   │
│  contracting in Dubai.                │ blueprint grid +  │   │  hero: typographic +
│                                       │ isometric pipe/   │   │  engineered SVG motif
│  HVAC · electromechanical ·           │ duct line-schematic│   │  (NOT a skyline,
│  plumbing · district cooling.         │ in brand blue      │   │   NOT stock)
│                                       └───────────────────┘   │
│  [ Call +971 4 299 2591 ]  [ WhatsApp ]                       │  orange = the only CTAs
│  Licence 1439847 · Dubai Chamber 576016      (mono data line) │
├─────────────────────────────────────────────────────────────┤
│  What we do                                                   │
│  Six licensed activities as rule-separated index rows         │
│  (name + one-line scope) — NOT six identical shadowed cards.  │
├─────────────────────────────────────────────────────────────┤
│  Selected work — by scope / sector / location, no client names│
├─────────────────────────────────────────────────────────────┤
│  Registration plate: Licence · Register · Chamber · Capital · │
│  Makani  (mono, real numbers = the trust signal)              │
├─────────────────────────────────────────────────────────────┤
│  CTA band (navy): "Discuss your project" → Call / WhatsApp    │
├─────────────────────────────────────────────────────────────┤
│  Footer (navy): address, Makani, P.O. Box, licence, chamber,  │
│  landline + mobile, nav                                       │
└─────────────────────────────────────────────────────────────┘
        + mobile-only sticky WhatsApp button
```

## Three principles (specific to this brief)

1. **Show the plant room, not the skyline.** Every contractor in Dubai opens on
   the skyline; almost none show the installed work. Visuals derive from MEP
   reality — pipe/duct/valve schematics on a blueprint grid — and when real
   photos aren't cleared, the fallback is this engineered line-drawing, never
   stock towers.
2. **Data is the trust.** In UAE B2B the licence, commercial register, Chamber
   membership, capital and Makani *are* the credibility. They're set in mono as
   first-class "registration plates", not shrunk into fine print.
3. **Match the brochure's own hierarchy: blue builds, orange acts.** The printed
   material already uses blue for structure and orange for emphasis. The site
   keeps blue on all structure (headings, nav, rules, trust) and lets orange
   appear only on things you click to start a conversation — so print and web
   read as the same company, and the one action is unmistakable.

## Self-review — would this work for a dentist or a SaaS?

- Plant-room/schematic hero and "installed work over skyline": **no** — specific
  to a physical trades contractor. ✓ kept.
- Mono "registration plates" (trade licence, commercial register, Chamber,
  Makani): **no** — a SaaS/dentist has none of these UAE-contractor artefacts.
  ✓ kept.
- "Blue builds, orange acts" started as a portable colour rule — **revised** to
  tie it to *this company's existing brochure hierarchy* so it's grounded in the
  real identity rather than a generic default. ✓ changed.

## Motion

One orchestrated moment: a single hero entrance, gated behind
`prefers-reduced-motion`. Action-response (hover/focus/press) only elsewhere. No
ambient scroll animation.
