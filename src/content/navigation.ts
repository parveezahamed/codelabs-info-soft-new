export type NavItem = {
  href: string;
  label: string;
  index: string;
};

/** Primary in-page anchors — shared by header & footer */
export const primaryNav: readonly NavItem[] = [
  { href: "#about", label: "About", index: "01" },
  { href: "#services", label: "Services", index: "02" },
  { href: "#projects", label: "Work", index: "03" },
  { href: "#faq", label: "FAQ", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
] as const;
