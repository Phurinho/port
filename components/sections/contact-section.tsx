import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-24 px-[6%] py-24 lg:px-[9%]"
    >
      <RevealOnScroll>
        <SectionHeading>
          Contact <span className="text-(--portfolio-accent)">Me</span>
        </SectionHeading>
      </RevealOnScroll>

      <RevealOnScroll delay="short">
        <form
          action="#contact"
          className="mx-auto mt-10 max-w-3xl text-center"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Fullname"
              aria-label="Fullname"
              className="w-full rounded-lg bg-(--portfolio-panel) p-4 text-lg text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-(--portfolio-accent)"
            />
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              className="w-full rounded-lg bg-(--portfolio-panel) p-4 text-lg text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-(--portfolio-accent)"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              aria-label="Mobile Number"
              className="w-full rounded-lg bg-(--portfolio-panel) p-4 text-lg text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-(--portfolio-accent)"
            />
            <input
              type="text"
              placeholder="Email Subject"
              aria-label="Email Subject"
              className="w-full rounded-lg bg-(--portfolio-panel) p-4 text-lg text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-(--portfolio-accent)"
            />
          </div>
          <textarea
            name="message"
            rows={10}
            placeholder="Your Message"
            aria-label="Your Message"
            className="mt-4 w-full resize-none rounded-lg bg-(--portfolio-panel) p-4 text-lg text-white outline-none placeholder:text-white/60 focus:ring-2 focus:ring-(--portfolio-accent)"
          />
          <button
            type="submit"
            className="mt-8 inline-flex cursor-pointer rounded-full bg-(--portfolio-accent) px-7 py-3 text-base font-bold tracking-wide text-(--portfolio-bg) shadow-[0_0_1rem_var(--portfolio-accent)] transition hover:shadow-none"
          >
            Send Message
          </button>
        </form>
      </RevealOnScroll>
    </section>
  );
}
