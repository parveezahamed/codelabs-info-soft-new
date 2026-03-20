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
  block: "top 88%",
  /** Grids — trigger when container enters */
  grid: "top 86%",
} as const;
