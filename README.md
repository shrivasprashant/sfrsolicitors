# SFR Solicitors — Next.js Site

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — App Router entry (layout, page, global styles)
- `components/layout/` — Header, Footer
- `components/sections/` — Hero, PracticeAreaNav, CaseFile, Principles, ProcessSteps, FAQ, ClosingCTA
- `components/ui/` — Button, Eyebrow
- `components/icons/` — Scales-of-justice hero illustration, practice-area motifs
- `lib/data/` — Practice areas, principles, process steps, and FAQ content (data-driven, so the four "case file" sections render from one component)
- `public/logo.png` — Extracted from the source HTML's embedded base64 favicon/logo

Only the FAQ accordion is a Client Component (`"use client"`); everything else renders on the server.

## Interaction / animation layer

Added on top of the original conversion, kept deliberately restrained to match the editorial legal-site aesthetic:

- `components/ui/Reveal.js` — IntersectionObserver-based fade-up/scale-in on scroll, with per-item stagger via a `delay` prop (ms). Used across Hero, CaseFile, Principles, ProcessSteps, FAQ, ClosingCTA.
- `lib/tilt.js` — two plain event-handler functions (`handleTiltMove` / `handleTiltLeave`) shared by the docket tabs (`PracticeAreaNav`) and the process-step cards (`ProcessSteps`). They write CSS custom properties straight to the hovered element's `style` on `pointermove`, so hovering never triggers a React re-render. The actual 3D tilt + cursor-glow is applied by the `.tilt-card` / `.tilt-card-glow` classes in `app/globals.css`, and is scoped inside a `(hover: hover) and (pointer: fine)` media query — touch devices get a flat, static card automatically.
- `components/ui/Button.js` — hover lift + glow shadow, and a click-position ripple (only on the two filled variants; the ghost/underline variant just gets an arrow micro-interaction instead, since a filled ripple doesn't suit a transparent button).
- `components/layout/Header.js` — scroll-based transition from flat to a blurred, shadowed bar.
- Reduced motion: the global `prefers-reduced-motion: reduce` override in `globals.css` collapses all transition/animation durations to ~0, so entrance reveals, the ambient hero float, and hover transitions all still resolve to their end state instantly rather than being skipped or left mid-animation.
