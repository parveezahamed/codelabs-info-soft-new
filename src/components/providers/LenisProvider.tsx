"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";
import { lenisOptions } from "@/config/lenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function debounce<T extends (...args: unknown[]) => void>(fn: T, ms: number) {
  let t: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}

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

    ScrollTrigger.refresh();

    const onRefresh = debounce(() => {
      ScrollTrigger.refresh();
    }, 120);

    window.addEventListener("resize", onRefresh, { passive: true });

    return () => {
      window.removeEventListener("resize", onRefresh);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return children;
}
