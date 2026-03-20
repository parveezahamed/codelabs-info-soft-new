"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { ease, duration } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Soft follow cursor — ring lags behind the dot; pointer events batched to one rAF per frame.
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

    const xDot = gsap.quickTo(dot, "x", {
      duration: duration.cursorDot,
      ease: ease.outExpo,
    });
    const yDot = gsap.quickTo(dot, "y", {
      duration: duration.cursorDot,
      ease: ease.outExpo,
    });
    const xRing = gsap.quickTo(ring, "x", {
      duration: duration.cursorRing,
      ease: ease.outExpo,
    });
    const yRing = gsap.quickTo(ring, "y", {
      duration: duration.cursorRing,
      ease: ease.outExpo,
    });

    let raf = 0;
    let px = 0;
    let py = 0;

    const flush = () => {
      raf = 0;
      xDot(px);
      yDot(py);
      xRing(px);
      yRing(py);
    };

    const onMove = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(flush);
    };

    const onDown = () => {
      gsap.to([dot, ring], {
        scale: 0.9,
        duration: duration.cursorMicro,
        ease: ease.outQuart,
      });
    };
    const onUp = () => {
      gsap.to([dot, ring], {
        scale: 1,
        duration: duration.cursorMicro + 0.08,
        ease: ease.outExpo,
      });
    };

    const interactive = "a, button, [data-cursor-hover]";
    const onEnter = () => {
      gsap.to(ring, {
        scale: 1.55,
        opacity: 0.38,
        duration: duration.cursorMicro + 0.06,
        ease: ease.outExpo,
      });
      gsap.to(dot, {
        scale: 0.55,
        duration: duration.cursorMicro,
        ease: ease.outExpo,
      });
    };
    const onLeave = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 1,
        duration: duration.cursorMicro + 0.12,
        ease: ease.outExpo,
      });
      gsap.to(dot, {
        scale: 1,
        duration: duration.cursorMicro + 0.06,
        ease: ease.outExpo,
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const els = document.querySelectorAll<HTMLElement>(interactive);
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
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
