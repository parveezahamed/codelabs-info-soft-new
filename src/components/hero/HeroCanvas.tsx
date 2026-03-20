"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import HeroScene from "./HeroScene";

/**
 * WebGL canvas: capped DPR + Suspense so the hero never blocks first paint badly.
 * When the hero scrolls off-screen, the render loop stops so scrolling stays light.
 */
export default function HeroCanvas() {
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
      { root: null, rootMargin: "64px 0px", threshold: [0, 0.03, 0.06] },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0">
      <Canvas
        frameloop={inView ? "always" : "never"}
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        className="h-full w-full"
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
