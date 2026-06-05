import Image from "next/image";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-10 bg-(--portfolio-panel) px-[6%] py-24 md:flex-row lg:px-[9%]"
    >
      <RevealOnScroll className="md:w-5/12">
        <Image
          src="/images/profiesecond.png"
          alt="Phurin profile illustration"
          width={520}
          height={520}
          className="w-full max-w-md object-cover aspect-square rounded-full border-4 border-(--portfolio-accent) shadow-[0_0_2rem_var(--portfolio-bg)]"
        />
      </RevealOnScroll>

      <RevealOnScroll className="max-w-3xl md:w-7/12" delay="short">
        <SectionHeading align="left">
          ABOUT <span className="text-(--portfolio-accent)">ME</span>
        </SectionHeading>
        <h3 className="mt-4 text-3xl font-bold text-white">Full Stack Developer</h3>
        <p className="my-7 text-lg leading-8 text-white/90">
          My name is Phurin Toomkul, nickname Pangpond. I&apos;m from Phayao,
          Thailand, and I&apos;m currently living in Phitsanulok while studying
          Computer Engineering at Naresuan University. I want to become a
          full-stack developer, and this portfolio is a place to introduce my
          work, personality, and growth as a developer.
        </p>
      </RevealOnScroll>
    </section>
  );
}
