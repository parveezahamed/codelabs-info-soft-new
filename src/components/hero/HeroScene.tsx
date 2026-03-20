"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/** Deterministic 0–1 value from index (pure — stable across SSR / re-renders). */
function hash01(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Subtle camera sway following pointer — keeps motion gentle for readability.
 */
function CameraRig() {
  useFrame((state) => {
    const { pointer, camera } = state;
    const tx = pointer.x * 1.4;
    const ty = pointer.y * 0.9;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, tx, 0.032);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, ty, 0.032);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/** Orbiting particle field — low point count for stable frame times on laptops. */
function ParticleField({ count = 260 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + hash01(i, 1) * 5.5;
      const theta = hash01(i, 2) * Math.PI * 2;
      const phi = Math.acos(2 * hash01(i, 3) - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.028;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.06;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#5eead4"
        size={0.034}
        sizeAttenuation
        depthWrite={false}
        opacity={0.78}
      />
    </Points>
  );
}

/** Central wireframe shape — reads as “tech” without heavy shaders. */
function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x =
      state.clock.elapsedTime * 0.15 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.65}>
      <Icosahedron ref={meshRef} args={[1.15, 1]}>
        <meshStandardMaterial
          color="#2dd4bf"
          wireframe
          emissive="#0f766e"
          emissiveIntensity={0.5}
          metalness={0.25}
          roughness={0.32}
        />
      </Icosahedron>
    </Float>
  );
}

const BG = "#060608";

export default function HeroScene() {
  return (
    <>
      <color attach="background" args={[BG]} />
      <fog attach="fog" args={[BG, 6, 22]} />
      <ambientLight intensity={0.32} />
      <pointLight position={[8, 6, 8]} intensity={1.05} color="#ccfbf1" />
      <pointLight position={[-6, -4, -4]} intensity={0.5} color="#2dd4bf" />
      <ParticleField />
      <FloatingCore />
      <CameraRig />
    </>
  );
}
