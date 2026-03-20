"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroScene from "./HeroScene";

/**
 * WebGL canvas: capped DPR + Suspense so the hero never blocks first paint badly.
 */
export default function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        dpr={[1, 1.75]}
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
