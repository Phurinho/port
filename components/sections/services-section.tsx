import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionHeading } from "@/components/section-heading";
import { UiButton } from "@/components/ui-button";
import { services, type Service } from "@/lib/site-content";

const serviceIcons: Record<Service["icon"], string> = {
  code: "fi fi-rr-code-simple",
  palette: "fi fi-rr-palette",
  android: "fi fi-brands-android",
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen scroll-mt-24 px-[6%] py-24 lg:px-[9%]"
    >
      <RevealOnScroll>
        <SectionHeading>
          My <span className="text-(--portfolio-accent)">Services</span>
        </SectionHeading>
      </RevealOnScroll>

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const iconClass = serviceIcons[service.icon];

          return (
            <RevealOnScroll
              key={service.title}
              delay={index === 0 ? "none" : index === 1 ? "short" : "medium"}
              className="h-full"
            >
              <article
                className="flex flex-col h-full rounded-3xl border-2 border-(--portfolio-bg) bg-(--portfolio-panel) px-8 py-10 text-center transition hover:scale-[1.02] hover:border-(--portfolio-accent)"
              >
                <i className={`${iconClass} mx-auto text-(--portfolio-accent) text-6xl block`} />
                <h3 className="mt-6 text-3xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="my-5 flex-1 text-lg leading-8 text-white/90">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <UiButton href="#contact">Read More</UiButton>
                </div>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
