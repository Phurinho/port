"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-content";

const sectionIds = navItems.map((item) => item.href.slice(1));

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      const currentSection =
        sectionIds.find((id) => {
          const section = document.getElementById(id);

          if (!section) {
            return false;
          }

          const offset = section.offsetTop - 160;
          const bottom = offset + section.offsetHeight;

          return window.scrollY >= offset && window.scrollY < bottom;
        }) ?? "home";

      setActiveSection(currentSection);
      setMenuOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-[var(--portfolio-bg)] px-[6%] py-5 transition lg:px-[9%] ${
        isSticky ? "border-b border-black/20 shadow-lg shadow-black/10" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="#home"
          className="text-3xl font-extrabold text-white transition hover:text-[var(--portfolio-accent)] sm:text-5xl"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </Link>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-white transition hover:text-[var(--portfolio-accent)] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={34} /> : <Menu size={34} />}
        </button>

        <nav
          className={`absolute left-0 top-full w-full bg-[var(--portfolio-bg)] px-[6%] py-4 shadow-xl shadow-black/20 md:static md:block md:w-auto md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:gap-10">
            {navItems.map((item) => {
              const id = item.href.slice(1);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xl font-bold transition md:text-base ${
                    activeSection === id
                      ? "text-[var(--portfolio-accent)]"
                      : "text-white hover:text-[var(--portfolio-accent)]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
