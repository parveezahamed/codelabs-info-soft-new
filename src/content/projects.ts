/** SVG grid texture for project cards */
export const PROJECT_CARD_GRID_BG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

/** 3D hero art per card — used by `ProjectCardScene` (React Three Fiber) */
export type ProjectVisualPreset =
  | "nodes"
  | "neural"
  | "grid"
  | "layers"
  | "capsule"
  | "monitor";

export type ProjectVisual = {
  preset: ProjectVisualPreset;
  accent: string;
  emissive: string;
};

export const projectsSection = {
  index: "03",
  eyebrow: "Portfolio",
  title: "Representative engagements",
  subtitle:
    "Illustrative workstreams aligned with our stack — names or details may be anonymized under client agreements.",
  items: [
    {
      name: "Enterprise microservices platform",
      tag: "Backend & APIs",
      year: "2025",
      blurb: "Service decomposition, React/Node surfaces, and AWS‑backed scaling for high‑traffic workloads.",
      tone: "from-teal-900/40 via-[#0c1514] to-[#060608]",
      visual: {
        preset: "nodes",
        accent: "#2dd4bf",
        emissive: "#0f766e",
      } satisfies ProjectVisual,
    },
    {
      name: "AI‑assisted operations suite",
      tag: "Agents & automation",
      year: "2025",
      blurb: "Tool‑using workflows, policy guardrails, and observability layered on existing APIs — built for staged rollout and human oversight.",
      tone: "from-violet-950/35 via-[#0c1018] to-[#060608]",
      visual: {
        preset: "neural",
        accent: "#a78bfa",
        emissive: "#5b21b6",
      } satisfies ProjectVisual,
    },
    {
      name: "Field operations suite",
      tag: "Web & internal tools",
      year: "2024",
      blurb: "Role‑based consoles and workflows replacing spreadsheets — cloud‑hosted with managed monitoring.",
      tone: "from-emerald-950/50 via-[#0c1412] to-[#060608]",
      visual: {
        preset: "grid",
        accent: "#34d399",
        emissive: "#065f46",
      } satisfies ProjectVisual,
    },
    {
      name: "B2B SaaS control plane",
      tag: "SaaS & multi‑tenant",
      year: "2024",
      blurb: "Tenant isolation, subscription‑aware APIs, and operator tooling — designed for evolving compliance and usage tiers.",
      tone: "from-amber-950/35 via-[#14100c] to-[#060608]",
      visual: {
        preset: "layers",
        accent: "#fbbf24",
        emissive: "#92400e",
      } satisfies ProjectVisual,
    },
    {
      name: "Patient & provider mobile apps",
      tag: "iOS · Android",
      year: "2024",
      blurb: "Native and hybrid releases with secure APIs, offline‑aware flows, and store‑ready pipelines.",
      tone: "from-cyan-950/40 via-[#0c1418] to-[#060608]",
      visual: {
        preset: "capsule",
        accent: "#22d3ee",
        emissive: "#155e75",
      } satisfies ProjectVisual,
    },
    {
      name: "Cross‑platform desktop client",
      tag: "Windows · macOS · Linux",
      year: "2024",
      blurb: "Installers, auto‑update, and deep OS integrations for a single codebase — performance‑tested on target hardware profiles.",
      tone: "from-slate-800/40 via-[#0c0e12] to-[#060608]",
      visual: {
        preset: "monitor",
        accent: "#94a3b8",
        emissive: "#334155",
      } satisfies ProjectVisual,
    },
  ],
} as const;
