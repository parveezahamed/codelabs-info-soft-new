"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { ease, duration, stagger } from "@/lib/motion";
import { scrollTriggerReveal, scrollTriggerStart } from "@/lib/scroll-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type StaggerCardsProps = {
  children: ReactNode;
  className?: string;
  childSelector?: string;
};

/**
 * Staggered grid reveal — center-weighted stagger + eased step curve so the tail stays graceful.
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

    gsap.set(items, { willChange: "transform, opacity" });

    const tween = gsap.fromTo(
      items,
      { autoAlpha: 0, y: 28, scale: 0.99 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: duration.staggerItem,
        stagger: {
          each: stagger.cards,
          ease: ease.staggerSpread,
          from: "center",
          grid: "auto",
        },
        ease: ease.outExpo,
        force3D: true,
        scrollTrigger: {
          trigger: root,
          start: scrollTriggerStart.grid,
          ...scrollTriggerReveal,
        },
        onComplete: () => {
          items.forEach((node) => {
            node.style.willChange = "auto";
          });
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [childSelector, reducedMotion]);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
