/**
 * Central motion tokens — one place to tune timing, easing, and scroll behavior.
 * Prefer expo / power4 for soft deceleration; keep durations slightly generous for a premium feel.
 */

/** GSAP easing strings */
export const ease = {
  /** Primary entrances, scroll reveals, hero */
  outExpo: "expo.out" as const,
  /** Secondary — crisp but soft */
  outQuart: "power4.out" as const,
  /** Stagger distribution between grid items */
  staggerSpread: "power2.out" as const,
  /** Micro-interactions */
  outCubic: "power3.out" as const,
  /** Hover / press */
  outQuad: "power2.out" as const,
  /** Idle loops (logo float, ambient) */
  smoothInOut: "sine.inOut" as const,
};

/**
 * Durations (seconds). Slightly longer = calmer, more “premium” perceived quality.
 */
export const duration = {
  /** Hero headline lines */
  heroLine: 1.38,
  heroSub: 1.12,
  heroCta: 1.05,
  heroAside: 1.22,
  /** Scroll-triggered blocks */
  reveal: 1.28,
  /** Card grid — each item */
  staggerItem: 1.05,
  /** Brand logo entrance */
  brandEntrance: 0.95,
  /** Brand idle float loop */
  brandFloat: 3.35,
  /** Cursor dot (quickTo) */
  cursorDot: 0.2,
  /** Cursor ring lag */
  cursorRing: 0.68,
  /** Cursor press / hover tweens */
  cursorMicro: 0.42,
};

/** Stagger gaps (seconds between siblings) */
export const stagger = {
  /** Hero headline lines */
  heroLines: 0.155,
  /** Card grids — center-weighted stagger uses this as base step */
  cards: 0.128,
};

/** Scroll-driven reveal: initial transform (subtle = less “pop”) */
export const reveal = {
  y: 26,
  scaleFrom: 0.992,
};

/** Hero timeline overlap labels — softer cascade than hard -= jumps */
export const heroOverlap = {
  afterLines: "-=0.48",
  afterSub: "-=0.52",
  afterCta: "-=0.56",
};

/**
 * CSS easing for `transition-*` (buttons, hovers) — matches GSAP expo feel.
 * Use with `motion-safe:duration-[650ms]` etc.
 */
export const cssEasing = {
  premium: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;
