import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-content";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="min-h-screen scroll-mt-24 bg-[var(--portfolio-panel)] px-[6%] py-24 lg:px-[9%]"
    >
      <RevealOnScroll>
        <SectionHeading>
          Latest <span className="text-[var(--portfolio-accent)]">Projects</span>
        </SectionHeading>
      </RevealOnScroll>

      <div className="mx-auto mt-12 grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <RevealOnScroll
            key={`${project.title}-${project.image}`}
            delay={index % 3 === 0 ? "none" : index % 3 === 1 ? "short" : "medium"}
          >
            <article
              className="group relative flex aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_0_1rem_var(--portfolio-bg)]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-70 transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center bg-gradient-to-b from-black/10 to-[var(--portfolio-accent)] px-8 text-center transition duration-500 group-hover:translate-y-0">
                <h3 className="text-3xl font-extrabold text-white">
                  {project.title}
                </h3>
                <p className="my-3 text-lg text-white">{project.description}</p>
                <a
                  href={project.href}
                  aria-label={`Open ${project.title}`}
                  className="inline-flex size-14 items-center justify-center rounded-full bg-white text-[var(--portfolio-panel)] transition hover:scale-105"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
