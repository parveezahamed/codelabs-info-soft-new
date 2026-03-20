"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Box,
  Float,
  Icosahedron,
  RoundedBox,
  Sphere,
  Torus,
  TorusKnot,
} from "@react-three/drei";
import * as THREE from "three";
import type { ProjectVisual } from "@/content/projects";

function RotatingGroup({
  children,
  speed = 0.22,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
  });
  return <group ref={ref}>{children}</group>;
}

function PresetMeshes({ visual }: { visual: ProjectVisual }) {
  const { accent, emissive, preset } = visual;

  const mat = useMemo(
    () => ({
      metalness: 0.38,
      roughness: 0.32,
    }),
    [],
  );

  switch (preset) {
    case "nodes":
      return (
        <Float speed={1.15} rotationIntensity={0.28} floatIntensity={0.35}>
          <RotatingGroup speed={0.2}>
            <group>
              <Icosahedron args={[0.78, 0]}>
                <meshStandardMaterial
                  color={accent}
                  wireframe
                  emissive={emissive}
                  emissiveIntensity={0.35}
                  {...mat}
                />
              </Icosahedron>
              <Torus args={[1.15, 0.02, 12, 48]} rotation={[Math.PI / 2.4, 0, 0]}>
                <meshStandardMaterial
                  color={accent}
                  emissive={emissive}
                  emissiveIntensity={0.25}
                  transparent
                  opacity={0.65}
                  {...mat}
                />
              </Torus>
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const a = (i / 6) * Math.PI * 2;
                return (
                  <mesh key={i} position={[Math.cos(a) * 1.35, Math.sin(a * 0.7) * 0.2, Math.sin(a) * 1.35]}>
                    <sphereGeometry args={[0.09, 12, 12]} />
                    <meshStandardMaterial
                      color={accent}
                      emissive={emissive}
                      emissiveIntensity={0.5}
                      {...mat}
                    />
                  </mesh>
                );
              })}
            </group>
          </RotatingGroup>
        </Float>
      );

    case "neural":
      return (
        <Float speed={1.35} rotationIntensity={0.4} floatIntensity={0.45}>
          <RotatingGroup speed={0.26}>
            <TorusKnot args={[0.52, 0.11, 96, 12]}>
              <meshStandardMaterial
                color={accent}
                wireframe
                emissive={emissive}
                emissiveIntensity={0.45}
                {...mat}
              />
            </TorusKnot>
            <Sphere args={[0.14, 16, 16]} position={[0.75, 0.35, 0.2]}>
              <meshStandardMaterial
                color={accent}
                emissive={emissive}
                emissiveIntensity={0.6}
                {...mat}
              />
            </Sphere>
          </RotatingGroup>
        </Float>
      );

    case "grid":
      return (
        <RotatingGroup speed={0.18}>
          <group>
            {Array.from({ length: 9 }).map((_, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const x = (col - 1) * 0.38;
              const y = (1 - row) * 0.38;
              const lift = (Math.sin(i * 1.7) + 1) * 0.06;
              return (
                <RoundedBox
                  key={i}
                  args={[0.24, 0.24, 0.08 + lift * 3]}
                  position={[x, y, lift]}
                  radius={0.03}
                  smoothness={3}
                >
                  <meshStandardMaterial
                    color={accent}
                    emissive={emissive}
                    emissiveIntensity={0.22 + lift * 2}
                    {...mat}
                  />
                </RoundedBox>
              );
            })}
          </group>
        </RotatingGroup>
      );

    case "layers":
      return (
        <RotatingGroup speed={0.14}>
          <group>
            {[
              { y: 0.38, s: 1.05, o: 0.95 },
              { y: 0, s: 1.12, o: 0.85 },
              { y: -0.42, s: 1.18, o: 0.75 },
            ].map((layer, i) => (
              <RoundedBox
                key={i}
                args={[layer.s * 1.4, 0.14, layer.s * 0.85]}
                position={[0, layer.y, i * 0.06]}
                radius={0.04}
                smoothness={3}
              >
                <meshStandardMaterial
                  color={accent}
                  emissive={emissive}
                  emissiveIntensity={0.18 + i * 0.08}
                  transparent
                  opacity={layer.o}
                  {...mat}
                />
              </RoundedBox>
            ))}
          </group>
        </RotatingGroup>
      );

    case "capsule":
      /**
       * Mobile / patient apps — reads as a handset (not a pill).
       * Rounded slab frame + inset glass + sensor bar + subtle UI dots.
       */
      return (
        <Float speed={0.85} rotationIntensity={0.2} floatIntensity={0.26}>
          <RotatingGroup speed={0.16}>
            <group rotation={[0.08, 0.48, 0]}>
              {/* Chassis — metal frame */}
              <RoundedBox
                args={[0.54, 1.06, 0.075]}
                radius={0.085}
                smoothness={5}
              >
                <meshStandardMaterial
                  color={accent}
                  emissive={emissive}
                  emissiveIntensity={0.14}
                  metalness={0.62}
                  roughness={0.38}
                />
              </RoundedBox>
              {/* Bezel ring */}
              <RoundedBox
                args={[0.48, 0.98, 0.04]}
                position={[0, 0, 0.022]}
                radius={0.065}
                smoothness={4}
              >
                <meshStandardMaterial
                  color="#0a0c10"
                  emissive={emissive}
                  emissiveIntensity={0.08}
                  metalness={0.45}
                  roughness={0.55}
                />
              </RoundedBox>
              {/* Glass / screen plane */}
              <RoundedBox
                args={[0.42, 0.86, 0.018]}
                position={[0, 0, 0.048]}
                radius={0.055}
                smoothness={4}
              >
                <meshStandardMaterial
                  color="#070a12"
                  emissive={accent}
                  emissiveIntensity={0.62}
                  metalness={0.12}
                  roughness={0.22}
                />
              </RoundedBox>
              {/* Sensor / dynamic island */}
              <RoundedBox
                args={[0.15, 0.03, 0.022]}
                position={[0, 0.395, 0.062]}
                radius={0.014}
                smoothness={3}
              >
                <meshStandardMaterial
                  color="#050508"
                  emissive={emissive}
                  emissiveIntensity={0.35}
                  metalness={0.55}
                  roughness={0.4}
                />
              </RoundedBox>
              {/* Soft “app” highlights on glass */}
              {[
                [-0.1, 0.05, 0.063],
                [0.08, -0.12, 0.063],
                [-0.05, -0.32, 0.063],
              ].map((pos, i) => (
                <RoundedBox
                  key={i}
                  args={[0.1, 0.08, 0.006]}
                  position={pos as [number, number, number]}
                  radius={0.02}
                  smoothness={2}
                >
                  <meshStandardMaterial
                    color={accent}
                    emissive={accent}
                    emissiveIntensity={0.35 - i * 0.06}
                    transparent
                    opacity={0.55}
                    metalness={0.2}
                    roughness={0.45}
                  />
                </RoundedBox>
              ))}
            </group>
          </RotatingGroup>
        </Float>
      );

    case "monitor":
      return (
        <RotatingGroup speed={0.16}>
          <group rotation={[0.18, 0.52, 0]}>
            <RoundedBox
              args={[1.35, 0.78, 0.07]}
              position={[0, 0.12, 0]}
              radius={0.04}
              smoothness={3}
            >
              <meshStandardMaterial
                color={accent}
                emissive={emissive}
                emissiveIntensity={0.2}
                {...mat}
              />
            </RoundedBox>
            <RoundedBox
              args={[0.45, 0.12, 0.4]}
              position={[0, -0.52, 0.12]}
              radius={0.03}
              smoothness={2}
            >
              <meshStandardMaterial
                color={emissive}
                emissive={accent}
                emissiveIntensity={0.15}
                {...mat}
              />
            </RoundedBox>
            <Box args={[1.1, 0.55, 0.02]} position={[0, 0.12, 0.05]}>
              <meshStandardMaterial
                color={emissive}
                emissive={accent}
                emissiveIntensity={0.45}
                {...mat}
              />
            </Box>
          </group>
        </RotatingGroup>
      );

    default:
      return null;
  }
}

function SceneLights({ visual }: { visual: ProjectVisual }) {
  return (
    <>
      <ambientLight intensity={0.38} />
      <pointLight position={[8, 6, 8]} intensity={0.95} color={visual.accent} />
      <pointLight position={[-6, -4, -4]} intensity={0.45} color={visual.emissive} />
      <pointLight position={[0, 0, 4]} intensity={0.35} color="#f8fafc" />
    </>
  );
}

type Props = {
  visual: ProjectVisual;
  inView: boolean;
};

export default function ProjectCardScene({ visual, inView }: Props) {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      dpr={[1, 1.35]}
      frameloop={inView ? "always" : "never"}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
    >
      <Suspense fallback={null}>
        <SceneLights visual={visual} />
        <PresetMeshes visual={visual} />
      </Suspense>
    </Canvas>
  );
}
