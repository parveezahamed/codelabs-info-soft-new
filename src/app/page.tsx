import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/hero/Hero";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

/**
 * Sections are static imports so GSAP + content mount with the page (no extra chunk delay on scroll).
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
