"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";
import { lenisOptions } from "@/config/lenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Lenis smooth scroll + ScrollTrigger sync.
 * Disabled when `prefers-reduced-motion: reduce`.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis(lenisOptions);

    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return children;
}
