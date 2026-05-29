import { Code2, Palette, Smartphone, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionHeading } from "@/components/section-heading";
import { UiButton } from "@/components/ui-button";
import { services, type Service } from "@/lib/site-content";

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  code: Code2,
  palette: Palette,
  smartphone: Smartphone,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen scroll-mt-24 px-[6%] py-24 lg:px-[9%]"
    >
      <RevealOnScroll>
        <SectionHeading>
          My <span className="text-[var(--portfolio-accent)]">Services</span>
        </SectionHeading>
      </RevealOnScroll>

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon];

          return (
            <RevealOnScroll
              key={service.title}
              delay={index === 0 ? "none" : index === 1 ? "short" : "medium"}
            >
              <article
                className="rounded-3xl border-2 border-[var(--portfolio-bg)] bg-[var(--portfolio-panel)] px-8 py-10 text-center transition hover:scale-[1.02] hover:border-[var(--portfolio-accent)]"
              >
                <Icon className="mx-auto text-[var(--portfolio-accent)]" size={70} />
                <h3 className="mt-6 text-3xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="my-5 min-h-20 text-lg leading-8 text-white/90">
                  {service.description}
                </p>
                <UiButton href="#contact">Read More</UiButton>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
