import type { LenisOptions } from "lenis";

/** Quartic ease-out — paired with LenisProvider */
export const lenisEaseOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Snappier than stock Lenis defaults — long duration + low lerp reads as “lag”
 * behind the wheel / finger; this keeps smooth scroll without mushy inertia.
 */
export const lenisOptions: LenisOptions = {
  duration: 0.92,
  easing: lenisEaseOutQuart,
  lerp: 0.12,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.08,
  syncTouchLerp: 0.1,
  /** Lenis runs its own rAF loop — avoids duplicating RAF in the provider */
  autoRaf: true,
};
