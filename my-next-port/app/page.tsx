import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-bg)] text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
