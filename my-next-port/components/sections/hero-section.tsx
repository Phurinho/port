"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroRoles, socialLinks, type SocialLink } from "@/lib/site-content";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { UiButton } from "@/components/ui-button";

const socialIcons: Record<SocialLink["icon"], string> = {
  facebook: "fi fi-brands-facebook",
  instagram: "fi fi-brands-instagram",
  tiktok: "fi fi-brands-tik-tok",
  github: "fi fi-brands-github",
};

export function HeroSection() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const i = loopNum % heroRoles.length;
      const fullText = heroRoles[i];

      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(40); // faster deletion
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(70); // normal typing speed
      }

      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        timer = setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setTypingSpeed(300); // pause before typing next word
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-8 px-[6%] pb-12 pt-32 md:flex-row lg:px-[9%]"
    >
      <RevealOnScroll className="order-2 max-w-2xl md:order-1">
        <h3 className="text-3xl font-bold text-white sm:text-4xl">
          Hi, <span className="text-(--portfolio-accent)">I&apos;m</span>
        </h3>
        <h1 className="mt-2 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
          Phurin Toomkul
        </h1>
        <h3 className="mt-3 min-h-12 text-3xl font-bold text-(--portfolio-accent) sm:text-4xl flex items-center">
          <span>{text}</span>
          <span className="animate-[pulse_0.8s_infinite] ml-1 font-extralight text-white">|</span>
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">
          I&apos;m a Computer Engineering student at Naresuan University.
        </p>

        <div className="my-8 flex flex-wrap gap-4">
          {socialLinks.map((link) => {
            const iconClass = socialIcons[link.icon];

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex size-11 items-center justify-center rounded-full border-2 border-(--portfolio-accent) text-(--portfolio-accent) transition hover:bg-(--portfolio-accent) hover:text-(--portfolio-panel) hover:shadow-[0_0_1rem_var(--portfolio-accent)]"
              >
                <i className={`${iconClass} text-xl flex items-center justify-center`} />
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setShowResume(true)}
            className="inline-flex h-12 items-center justify-center rounded-full border-2 border-(--portfolio-accent) bg-transparent px-8 text-lg font-bold text-(--portfolio-accent) transition hover:bg-(--portfolio-accent) hover:text-(--portfolio-panel) hover:shadow-[0_0_1rem_var(--portfolio-accent)] cursor-pointer"
          >
            My Resume
          </button>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="order-1 md:order-2" delay="short">
        <Image
          src="/images/hero-profile.png"
          alt="Phurin Toomkul portrait"
          width={560}
          height={560}
          priority
          className="w-[82vw] max-w-sm animate-[floatImage_4s_ease-in-out_infinite] object-contain md:w-[32vw] md:max-w-lg"
        />
      </RevealOnScroll>

      {/* Resume Preview Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10">
          <div className="relative flex h-full w-full max-w-5xl flex-col rounded-3xl border-2 border-white/10 bg-(--portfolio-panel) shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-black/20">
              <span className="text-lg font-bold text-white">Resume Preview</span>
              <button
                onClick={() => setShowResume(false)}
                className="text-white/70 hover:text-white transition cursor-pointer"
                title="Close Preview"
              >
                <i className="fi fi-rr-cross text-lg flex items-center justify-center" />
              </button>
            </div>
            
            {/* Modal Body / PDF Viewer */}
            <div className="relative flex-1 bg-white">
              <iframe
                src="/PondResume.pdf"
                className="h-full w-full border-none"
                title="Resume PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
