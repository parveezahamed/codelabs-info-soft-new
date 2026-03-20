"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ease } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  /** e.g. `h-9 w-auto md:h-10` */
  sizeClass?: string;
  priority?: boolean;
  /** Entrance + gentle idle motion */
  animated?: boolean;
};

/**
 * Brand mark with optional GSAP entrance and a soft vertical float (header).
 */
export default function BrandLogo({
  className,
  imageClassName,
  sizeClass = "h-9 w-auto md:h-10",
  priority = false,
  animated = true,
}: BrandLogoProps) {
  const outerRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    if (reducedMotion || !animated) {
      gsap.set([outer, inner], { clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        outer,
        { opacity: 0, y: 12, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.88,
          ease: ease.outExpo,
          delay: 0.08,
        },
      );

      gsap.fromTo(
        inner,
        { rotate: -2 },
        { rotate: 0, duration: 0.9, ease: ease.outExpo, delay: 0.08 },
      );

      gsap.to(inner, {
        y: -3,
        duration: 2.75,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, outer);

    return () => ctx.revert();
  }, [animated, reducedMotion]);

  return (
    <span
      ref={outerRef}
      className={cn(
        "inline-flex shrink-0 will-change-transform motion-safe:transform-gpu",
        className,
      )}
    >
      <span ref={innerRef} className="inline-block">
        <Image
          src={site.logoSrc}
          alt=""
          width={220}
          height={72}
          priority={priority}
          sizes="(max-width: 768px) 140px, 180px"
          className={cn(
            "pointer-events-none select-none object-contain object-left",
            "drop-shadow-[0_0_24px_rgba(249,115,22,0.12)]",
            "transition-[filter,transform] duration-500 ease-out motion-safe:group-hover:scale-[1.04] motion-safe:group-hover:drop-shadow-[0_0_28px_rgba(249,115,22,0.22)]",
            sizeClass,
            imageClassName,
          )}
        />
      </span>
    </span>
  );
}
