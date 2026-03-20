/** Global marketing / SEO — aligned with https://codelabsinfosoft.com */

export const site = {
  name: "Codelabs Infosoft",
  shortName: "Codelabs",
  legalName: "Codelabs Infosoft Pvt Ltd",
  url: "https://codelabsinfosoft.com",
  /** Mark / public — used in header, footer, JSON-LD */
  logoSrc: "/codelabs-logo.png",
  description:
    "ISO 9001:2015 certified technology consulting and software engineering. We build AI agents and intelligent automations, SaaS and subscription products, native and hybrid mobile applications, and cross‑platform desktop software for Windows, macOS, and Linux — backed by cloud, DevOps, managed services, and global outsourcing partnerships.",
  /** Primary support inbox (from live site) */
  email: "support@codelabsinfosoft.com",
  themeColor: "#060608",
  phoneE164: "+919538403073",
  phoneDisplay: "+91 953 840 3073",
  foundedYear: 2022,
  isoCertification: "ISO 9001:2015",
  privacyPolicyUrl: "https://codelabsinfosoft.com/privacy-policy",
  facebookUrl:
    "https://www.facebook.com/Codelabsinfosoft.software.development/",
  /**
   * Used for `<meta name="keywords">`. Most major search engines do not use this
   * tag for ranking; value is marginal (legacy tools, some crawlers). Terms are
   * aligned with real offerings — avoid unrelated or repeated spam.
   */
  seoKeywords: [
    // Brand / entity
    "Codelabs Infosoft",
    "Codelabs Infosoft Pvt Ltd",
    "Codelabs",
    // Core positioning
    "technology consulting",
    "IT consulting",
    "IT services",
    "digital transformation",
    "software engineering",
    "software development",
    "application development",
    "full stack development",
    "full-stack development",
    "enterprise software",
    "custom software development",
    "product engineering",
    "digital product studio",
    "digital services",
    // Delivery & engagement
    "IT outsourcing",
    "software outsourcing",
    "outsourcing company",
    "offshore development",
    "nearshore development",
    "onsite consulting",
    "managed IT services",
    "managed services",
    "staff augmentation",
    "dedicated development team",
    "SLA",
    "technology partnership",
    // People / hiring (RPO)
    "recruitment process outsourcing",
    "RPO",
    "IT recruitment",
    "tech hiring",
    "direct hire",
    "temporary staffing",
    "temp-to-hire",
    "payrolling services",
    // Architecture & backend
    "microservices architecture",
    "microservices",
    "API development",
    "REST APIs",
    "backend development",
    "service decomposition",
    "scalable systems",
    "high traffic systems",
    // Web frontend
    "React development",
    "React",
    "Node.js",
    "Node.js development",
    "JavaScript",
    "TypeScript",
    "Python",
    "Python development",
    "web application development",
    "UI UX",
    "UI/UX",
    // Mobile
    "iOS development",
    "Android development",
    "mobile app development",
    "cross-platform mobile",
    "native mobile apps",
    "app store deployment",
    // Cloud & DevOps
    "AWS",
    "Amazon Web Services",
    "cloud consulting",
    "cloud migration",
    "DevOps",
    "CI/CD",
    "continuous integration",
    "Docker",
    "Kubernetes",
    "K8s",
    "containerization",
    "infrastructure as code",
    "AWS Lambda",
    "serverless",
    "load balancing",
    "Nginx",
    "monitoring and alerting",
    "remote infrastructure management",
    "network operations",
    "security hardening",
    "release automation",
    // Quality / trust
    "ISO 9001",
    "ISO 9001:2015",
    "quality management",
    "certified IT company",
    // Domains (illustrative)
    "healthcare software",
    "field operations software",
    "internal tools",
    "enterprise platforms",
    // Open source / product
    "open source development",
    "open source contributions",
    "in-house products",
    // Geography / reach
    "India software company",
    "global IT services",
    "worldwide delivery",
    // AI & SaaS
    "AI agents",
    "AI automation",
    "LLM integration",
    "intelligent workflows",
    "SaaS development",
    "SaaS product engineering",
    "multi-tenant SaaS",
    "subscription billing integration",
    // Mobile
    "hybrid mobile apps",
    "React Native",
    "Flutter",
    "native iOS",
    "native Android",
    "cross-platform mobile",
    // Desktop
    "desktop application development",
    "cross-platform desktop",
    "Windows applications",
    "macOS applications",
    "Linux applications",
    "Electron",
    "Tauri",
  ],
} as const;

/** Tailwind max-width for main content column */
export const contentMaxWidthClass = "max-w-[1400px]";

/** Horizontal padding for aligned sections */
export const contentPaddingX = "px-5 sm:px-8";
