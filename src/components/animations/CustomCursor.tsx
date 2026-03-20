"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { ease } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Soft follow cursor — slower ring + expo easing reads more “studio” than linear quickTo.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches || reducedMotion) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    document.body.classList.add("cursor-none");

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.16, ease: ease.outExpo });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.16, ease: ease.outExpo });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.55, ease: ease.outExpo });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.55, ease: ease.outExpo });

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onDown = () => {
      gsap.to([dot, ring], {
        scale: 0.9,
        duration: 0.35,
        ease: ease.outQuart,
      });
    };
    const onUp = () => {
      gsap.to([dot, ring], {
        scale: 1,
        duration: 0.45,
        ease: ease.outExpo,
      });
    };

    const interactive = "a, button, [data-cursor-hover]";
    const onEnter = () => {
      gsap.to(ring, {
        scale: 1.55,
        opacity: 0.38,
        duration: 0.45,
        ease: ease.outExpo,
      });
      gsap.to(dot, { scale: 0.55, duration: 0.35, ease: ease.outExpo });
    };
    const onLeave = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: ease.outExpo,
      });
      gsap.to(dot, { scale: 1, duration: 0.4, ease: ease.outExpo });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const els = document.querySelectorAll<HTMLElement>(interactive);
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [reducedMotion]);

  return (
    <>
      <div
        ref={dotRef}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[100]",
          "hidden h-2 w-2 rounded-full bg-teal-400 md:block",
        )}
        aria-hidden
      />
      <div
        ref={ringRef}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[99]",
          "hidden h-9 w-9 rounded-full border border-teal-400/40 md:block",
        )}
        aria-hidden
      />
    </>
  );
}
