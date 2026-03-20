"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { ease, duration, stagger, reveal } from "@/lib/motion";
import { scrollTriggerGrid } from "@/lib/scroll-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type StaggerCardsProps = {
  children: ReactNode;
  className?: string;
  childSelector?: string;
};

/**
 * Staggered grid reveal — row-major order so no “middle” card waits on a long center wave.
 */
export default function StaggerCards({
  children,
  className,
  childSelector = "[data-stagger]",
}: StaggerCardsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = gsap.utils.toArray<HTMLElement>(
      root.querySelectorAll(childSelector),
    );
    if (!items.length) return;

    if (reducedMotion) {
      gsap.set(items, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        clearProps: "all",
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(items, { willChange: "transform, opacity" });

      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: reveal.staggerY,
          scale: reveal.staggerScaleFrom,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: duration.staggerItem,
          stagger: {
            each: stagger.cards,
            ease: ease.staggerSpread,
            from: "start",
            grid: "auto",
          },
          ease: ease.outExpo,
          force3D: true,
          scrollTrigger: {
            ...scrollTriggerGrid,
            trigger: root,
          },
          onComplete: () => {
            items.forEach((node) => {
              node.style.willChange = "auto";
            });
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [childSelector, reducedMotion]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
