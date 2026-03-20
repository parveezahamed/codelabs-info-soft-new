/**
 * Shared ScrollTrigger defaults for Lenis + GSAP.
 * Import from here in scroll-bound animations so behavior stays consistent and easy to tune.
 */

/** Base props merged into every reveal ScrollTrigger instance */
export const scrollTriggerReveal = {
  toggleActions: "play none none none" as const,
  fastScrollEnd: true,
  /** Re-measure when layout changes (fonts, responsive) */
  invalidateOnRefresh: true,
} as const;

/** Start positions — fraction of viewport (higher = earlier trigger) */
export const scrollTriggerStart = {
  /** Section headings, single blocks */
  block: "top 90%",
  /** Grids — fire slightly earlier so cards don’t feel late */
  grid: "top 92%",
} as const;

/** Ready-to-merge ScrollTrigger configs — set `trigger` in the tween */
export const scrollTriggerBlock = {
  ...scrollTriggerReveal,
  start: scrollTriggerStart.block,
} as const;

export const scrollTriggerGrid = {
  ...scrollTriggerReveal,
  start: scrollTriggerStart.grid,
} as const;
