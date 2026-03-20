"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { ease, duration, reveal } from "@/lib/motion";
import { scrollTriggerBlock } from "@/lib/scroll-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
};

/**
 * Fade + lift with expo deceleration — clears `will-change` after run to limit compositor cost.
 */
export default function ScrollReveal({
  children,
  className,
  y = reveal.y,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        clearProps: "transform,opacity,visibility,willChange",
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, { willChange: "transform, opacity" });

      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y,
          scale: reveal.scaleFrom,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: duration.reveal,
          delay,
          ease: ease.outExpo,
          force3D: true,
          scrollTrigger: {
            ...scrollTriggerBlock,
            trigger: el,
          },
          onComplete: () => {
            el.style.willChange = "auto";
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, reducedMotion]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
