"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ProjectVisual } from "@/content/projects";

const ProjectCardScene = dynamic(() => import("./ProjectCardScene"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  visual: ProjectVisual;
};

/**
 * Lightweight WebGL art for each portfolio card — pauses when off-screen.
 * Respects `prefers-reduced-motion` (gradient-only hero area).
 */
export default function ProjectCardVisual({ visual }: Props) {
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(
          entry.isIntersecting && entry.intersectionRatio > 0.03,
        );
      },
      { root: null, rootMargin: "120px 0px", threshold: [0, 0.03, 0.06] },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (reducedMotion) return null;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden
    >
      <ProjectCardScene visual={visual} inView={inView} />
    </div>
  );
}
