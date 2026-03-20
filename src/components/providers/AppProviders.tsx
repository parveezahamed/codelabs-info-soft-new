"use client";

import type { ReactNode } from "react";
import LenisProvider from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/animations/CustomCursor";

/**
 * Client-only providers — add theme / analytics / auth here as the app grows.
 */
export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <CustomCursor />
      {children}
    </LenisProvider>
  );
}
