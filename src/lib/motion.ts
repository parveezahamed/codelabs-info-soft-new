/**
 * Central motion tokens — one place to tune timing, easing, and scroll behavior.
 * Prefer expo / power4 for soft deceleration; slightly longer durations read as calmer / premium.
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
  heroLine: 1.48,
  heroSub: 1.18,
  heroCta: 1.1,
  heroAside: 1.28,
  /** Scroll-triggered blocks — generous deceleration */
  reveal: 1.42,
  /** Card grid — each item (keep modest so stagger doesn’t feel sluggish) */
  staggerItem: 0.95,
  /** Brand logo entrance */
  brandEntrance: 1.02,
  /** Brand idle float loop */
  brandFloat: 3.5,
  /** Cursor dot (quickTo) */
  cursorDot: 0.22,
  /** Cursor ring lag — slightly silkier follow */
  cursorRing: 0.74,
  /** Cursor press / hover tweens */
  cursorMicro: 0.44,
};

/** Stagger gaps (seconds between siblings) */
export const stagger = {
  /** Hero headline lines */
  heroLines: 0.165,
  /** Card grids — gap between siblings (smaller = snappier grid reveals) */
  cards: 0.045,
};

/** Scroll-driven reveal: initial transform (subtle = less “pop”) */
export const reveal = {
  y: 22,
  scaleFrom: 0.994,
  /** Staggered cards — separate from block reveals for layout tuning */
  staggerY: 24,
  staggerScaleFrom: 0.992,
};

/** Hero timeline overlap labels — softer cascade than hard -= jumps */
export const heroOverlap = {
  afterLines: "-=0.52",
  afterSub: "-=0.56",
  afterCta: "-=0.58",
};

/**
 * CSS easing for `transition-*` (buttons, hovers) — matches GSAP expo feel.
 * Use with `motion-safe:duration-[650ms]` etc.
 */
export const cssEasing = {
  premium: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;
