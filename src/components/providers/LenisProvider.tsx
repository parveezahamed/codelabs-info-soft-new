"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { debounce } from "@/lib/debounce";
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

    /**
     * ScrollTrigger must read Lenis’s animated scroll, not a stale native position, while
     * smoothing runs — otherwise scroll-linked tweens feel wrong.
     */
    ScrollTrigger.scrollerProxy(window, {
      scrollTop(value) {
        if (arguments.length && typeof value === "number") {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    const onRefresh = debounce(() => {
      ScrollTrigger.refresh();
    }, 120);

    window.addEventListener("resize", onRefresh, { passive: true });

    return () => {
      window.removeEventListener("resize", onRefresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.scrollerProxy(window);
      ScrollTrigger.refresh();
    };
  }, [reducedMotion]);

  return children;
}
