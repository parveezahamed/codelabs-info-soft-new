/** Static / 2D background copy for `ServicesBackdrop` */
export const servicesBackdrop = {
  /** Large watermark word behind the heading area */
  watermark: "DELIVER",
  /** Faint keyword rail — capabilities we highlight */
  keywords: [
    "AI agents",
    "SaaS",
    "Mobile",
    "Desktop",
    "Cloud",
    "DevOps",
    "Managed",
    "Consulting",
  ] as const,
} as const;

export const servicesSection = {
  index: "02",
  eyebrow: "Services",
  title: "What we deliver",
  subtitle:
    "From AI‑powered products and SaaS to mobile, desktop, cloud, and managed operations — structured delivery that matches your roadmap and risk profile.",
  items: [
    {
      title: "Outsourcing & consulting",
      body: "Partnership over purchase orders: we align roadmaps, SLAs, and delivery models so outcomes stay measurable as your needs evolve — whether you’re augmenting a team or outsourcing a full workstream.",
    },
    {
      title: "AI agents & intelligent automation",
      body: "We design and implement AI agents, copilots, and workflow automations — from retrieval and tool use to guarded prompts, evaluation, and production monitoring — integrated with your APIs, data stores, and security policies.",
    },
    {
      title: "SaaS & digital products",
      body: "End‑to‑end SaaS engineering: multi‑tenant architecture, identity, billing hooks, admin consoles, analytics, and resilient APIs — so you can ship subscription products with room to scale usage and compliance needs.",
    },
    {
      title: "Mobile apps — hybrid & native",
      body: "Consumer and enterprise mobile applications using native stacks (Swift/Kotlin) and hybrid approaches (e.g. React Native, Flutter) when velocity and shared code matter — offline‑aware flows, push, deep links, and store‑ready release pipelines.",
    },
    {
      title: "Desktop — cross‑platform",
      body: "Desktop software for Windows, macOS, and Linux — from installers and auto‑update to system integrations, local performance, and offline‑first UX, using native frameworks or cross‑platform shells (e.g. Electron, Tauri) when appropriate.",
    },
    {
      title: "Recruitment process outsourcing (RPO)",
      body: "End‑to‑end hiring support: direct hire, temp‑to‑hire, consulting, temporary staffing, and payrolling — tuned for cost, compliance, and scale.",
    },
    {
      title: "Managed services",
      body: "Network coordination, remote infrastructure management, monitoring, and optional on‑site support so your teams stay focused on core work.",
    },
    {
      title: "DevOps & cloud",
      body: "AWS foundations, Docker & Kubernetes, CI/CD, load balancing, Lambda, Nginx, security hardening, and automation for reliable releases.",
    },
    {
      title: "Product & open source",
      body: "In‑house product initiatives and open‑source contributions — architecture, delivery, and long‑term maintainability in one lane.",
    },
  ],
} as const;
