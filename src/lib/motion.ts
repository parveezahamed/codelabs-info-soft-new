/**
 * Shared motion tokens — GSAP easing strings + durations for consistent, premium feel.
 * Prefer expo / power4 over power3 for softer deceleration at rest.
 */

export const ease = {
  /** Primary entrance / scroll reveals */
  outExpo: "expo.out" as const,
  /** Secondary — slightly snappier */
  outQuart: "power4.out" as const,
  /** Micro-interactions */
  outCubic: "power3.out" as const,
  /** Hover / press */
  outQuad: "power2.out" as const,
};

export const duration = {
  /** Hero lines, major reveals */
  hero: 1.2,
  /** Scroll-triggered blocks */
  reveal: 1.1,
  /** Card stagger item */
  staggerItem: 0.95,
  /** Cursor micro */
  cursor: 0.35,
};

export const stagger = {
  /** Hero headline lines */
  heroLines: 0.13,
  /** Card grids */
  cards: 0.11,
};
