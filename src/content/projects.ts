/** SVG grid texture for project cards */
export const PROJECT_CARD_GRID_BG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

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
    },
    {
      name: "Field operations suite",
      tag: "Web & internal tools",
      year: "2024",
      blurb: "Role‑based consoles and workflows replacing spreadsheets — cloud‑hosted with managed monitoring.",
      tone: "from-emerald-950/50 via-[#0c1412] to-[#060608]",
    },
    {
      name: "Patient & provider mobile apps",
      tag: "iOS · Android",
      year: "2024",
      blurb: "Cross‑platform releases with secure APIs, offline‑aware flows, and store‑ready pipelines.",
      tone: "from-cyan-950/40 via-[#0c1418] to-[#060608]",
    },
  ],
} as const;
