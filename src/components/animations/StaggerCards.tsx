"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { ease, duration, stagger } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type StaggerCardsProps = {
  children: ReactNode;
  className?: string;
  childSelector?: string;
};

/**
 * Staggered grid reveal — eased stagger curve so the tail doesn’t feel rushed.
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
      gsap.set(items, { y: 0, opacity: 1, scale: 1, clearProps: "all" });
      return;
    }

    const tween = gsap.fromTo(
      items,
      { y: 32, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: duration.staggerItem,
        stagger: {
          each: stagger.cards,
          ease: ease.outCubic,
        },
        ease: ease.outExpo,
        force3D: true,
        scrollTrigger: {
          trigger: root,
          start: "top 84%",
          toggleActions: "play none none none",
          fastScrollEnd: true,
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
