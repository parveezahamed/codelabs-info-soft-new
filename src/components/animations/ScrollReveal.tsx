"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { ease, duration } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
};

/**
 * Fade + lift with expo deceleration — clears `will-change` after run to limit layer cost.
 */
export default function ScrollReveal({
  children,
  className,
  y = 36,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, { y: 0, opacity: 1, scale: 1, clearProps: "transform,opacity" });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { y, opacity: 0, scale: 0.985 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: duration.reveal,
        delay,
        ease: ease.outExpo,
        force3D: true,
        scrollTrigger: {
          trigger: el,
          start: "top 89%",
          toggleActions: "play none none none",
          fastScrollEnd: true,
        },
        onComplete: () => {
          el.style.willChange = "auto";
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, delay, reducedMotion]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
