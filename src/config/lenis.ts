import type { LenisOptions } from "lenis";

/** Quartic ease-out — paired with LenisProvider */
export const lenisEaseOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/** Defaults tuned for smooth wheel / touch */
export const lenisOptions: LenisOptions = {
  duration: 1.28,
  easing: lenisEaseOutQuart,
  lerp: 0.075,
  smoothWheel: true,
  wheelMultiplier: 0.92,
  touchMultiplier: 1.15,
  syncTouchLerp: 0.075,
};
