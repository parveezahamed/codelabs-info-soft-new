"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { primaryNav } from "@/content/navigation";
import BrandLogo from "@/components/branding/BrandLogo";
import { contentMaxWidthClass, contentPaddingX, site } from "@/config/site";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled || menuOpen
            ? "border-b border-white/[0.06] bg-[#060608]/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-[4.25rem] items-center justify-between md:h-[4.75rem]",
            contentMaxWidthClass,
            contentPaddingX,
          )}
        >
          <a
            href="#hero"
            className="group relative z-[60] flex items-center gap-2.5 sm:gap-3"
            aria-label={`${site.name} — home`}
            onClick={() => setMenuOpen(false)}
            data-cursor-hover
          >
            <BrandLogo
              priority
              sizeClass="h-8 w-auto sm:h-9 md:h-10"
            />
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-white sm:text-xl md:text-[1.35rem]">
              <span className="transition-colors group-hover:text-zinc-300">
                {site.shortName}
              </span>
              <span className="text-teal-400">.</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="Primary"
          >
            {primaryNav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-white"
                data-cursor-hover
              >
                <span className="mr-2 text-teal-500/70 opacity-0 transition-opacity group-hover:opacity-100">
                  {l.index}
                </span>
                {l.label}
                <span
                  className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-teal-400/60 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={cn(
                "hidden rounded-full border border-white/[0.1] px-5 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 sm:inline-flex",
                "hover:border-teal-400/40 hover:bg-teal-400/10",
              )}
              data-cursor-hover
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="flex h-5 w-5 flex-col justify-center gap-1.5">
                <span
                  className={cn(
                    "h-0.5 w-full rounded-full bg-white transition-transform duration-300",
                    menuOpen && "translate-y-2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full rounded-full bg-white transition-transform duration-300",
                    menuOpen && "-translate-y-2 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-[#060608]/98 backdrop-blur-2xl transition-[visibility,opacity] duration-500 lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-1 flex-col justify-center gap-2 px-8 pt-24"
          aria-label="Mobile"
        >
          {primaryNav.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-6 border-b border-white/[0.06] py-6"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${i * 45}ms` : "0ms" }}
            >
              <span className="font-mono text-xs text-teal-500/80">{l.index}</span>
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-white transition-colors group-hover:text-teal-300">
                {l.label}
              </span>
            </a>
          ))}
        </nav>
        <p className="px-8 pb-10 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          {site.name}
        </p>
      </div>
    </>
  );
}
