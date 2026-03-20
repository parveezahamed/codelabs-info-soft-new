import dynamic from "next/dynamic";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/hero/Hero";
import MarqueeStrip from "@/components/ui/MarqueeStrip";

const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const Faq = dynamic(() => import("@/components/sections/Faq"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

/**
 * Hero + marquee load immediately; below-the-fold sections code-split.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex flex-col">
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
