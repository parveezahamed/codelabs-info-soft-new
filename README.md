# Codelabs Infosoft — Marketing Site

Next.js (App Router) agency landing page with GSAP scroll animations, Lenis smooth scrolling, and a lazy-loaded React Three Fiber hero.

## Stack

- **Next.js** · **TypeScript** · **Tailwind CSS v4**
- **GSAP** + ScrollTrigger
- **Three.js** via `@react-three/fiber` + `@react-three/drei`
- **Lenis** for smooth scroll (synced with ScrollTrigger)

## Scripts

```bash
npm run dev    # development
npm run build  # production build
npm run start  # serve production build
npm run lint   # ESLint
```

## Content

Copy and facts are aligned with the public site **[codelabsinfosoft.com](https://codelabsinfosoft.com/)** (ISO 9001:2015, est. 2022, services, FAQ, contact). Edit `src/config/site.ts` and `src/content/*` to update.

## Structure

| Path | Purpose |
|------|---------|
| `src/app` | App Router, `layout.tsx`, `page.tsx`, `globals.css` |
| `src/config` | Site strings (`site.ts`), Lenis options (`lenis.ts`) |
| `src/content` | Copy & structured data (nav, sections, marquee, footer) |
| `src/components/hero` | 3D canvas (dynamic, `ssr: false`) + hero UI |
| `src/components/sections` | About, Services, Projects, Contact (below-fold code-split from `page.tsx`) |
| `src/components/animations` | ScrollReveal, StaggerCards, CustomCursor |
| `src/components/providers` | `AppProviders` (Lenis + cursor), `LenisProvider` |
| `src/lib` | `utils.ts`, `motion.ts`, **`gsap.ts`** (single ScrollTrigger registration) |
| `src/hooks` | `usePrefersReducedMotion` |

## Performance & scalability

- **GSAP**: import `{ gsap, ScrollTrigger }` from `@/lib/gsap` only — one `registerPlugin` site-wide.
- **Next.js**: `experimental.optimizePackageImports` for `three`, `@react-three/fiber`, `@react-three/drei` (smaller client bundles when using barrel imports).
- **Route JS**: Hero + marquee load first; **About / Services / Projects / Contact** are `next/dynamic` imports to split chunks.
- **ScrollReveal**: `will-change` reset to `auto` after tween completes.
- **Hero WebGL**: `next/dynamic` + `ssr: false`, capped canvas `dpr`, modest particle count.

## UI direction

- Dark, editorial layout: **Syne** (display), **DM Sans** (body), **Instrument Serif** (accent lines)
- Teal accent (`teal-400` / `#5eead4`) with film grain + gradient hero headline
- Marquee strip, oversized section indices, portfolio cards with gradient “visual” blocks
- Full-screen mobile nav; desktop nav with mono index hints and underline hover

## Motion

- Shared easing + durations in `src/lib/motion.ts` (`expo.out` for major moves)
- **Lenis**: options live in `src/config/lenis.ts` (quartic ease-out, tuned `lerp` / `wheelMultiplier`)
- **GSAP**: hero uses a **timeline** with overlaps; scroll reveals add slight **scale** + `force3D`
- **`prefers-reduced-motion`**: Lenis off; scroll/hero/cursor/stagger animations skipped; marquee CSS paused
