"use client";

import Image from "next/image";
import { Camera, Music2, Users, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { heroRoles, socialLinks, type SocialLink } from "@/lib/site-content";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { UiButton } from "@/components/ui-button";

const socialIcons: Record<SocialLink["icon"], LucideIcon> = {
  users: Users,
  camera: Camera,
  music: Music2,
};

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % heroRoles.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-8 px-[6%] pb-12 pt-32 md:flex-row lg:px-[9%]"
    >
      <RevealOnScroll className="order-2 max-w-2xl md:order-1">
        <h3 className="text-3xl font-bold text-white sm:text-4xl">
          Hi, <span className="text-[var(--portfolio-accent)]">I&apos;m</span>
        </h3>
        <h1 className="mt-2 text-5xl font-extrabold leading-tight text-white sm:text-6xl">
          Phurin Toomkul
        </h1>
        <h3 className="mt-3 min-h-12 text-3xl font-bold text-[var(--portfolio-accent)] sm:text-4xl">
          {heroRoles[roleIndex]}
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-8 text-white/90">
          I&apos;m a Computer Engineering student at Naresuan University.
        </p>

        <div className="my-8 flex flex-wrap gap-4">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex size-11 items-center justify-center rounded-full border-2 border-[var(--portfolio-accent)] text-[var(--portfolio-accent)] transition hover:bg-[var(--portfolio-accent)] hover:text-[var(--portfolio-panel)] hover:shadow-[0_0_1rem_var(--portfolio-accent)]"
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        <UiButton href="#contact">Download CV</UiButton>
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
    </section>
  );
}
