import { ChevronUp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-5 bg-[var(--portfolio-panel)] px-[6%] py-7 sm:flex-row lg:px-[9%]">
      <p className="text-center text-base text-white sm:text-left">
        Copyright &copy; 2024 by @pondinhocode | All Rights Reserved.
      </p>
      <a
        href="#home"
        aria-label="Back to top"
        className="inline-flex size-11 items-center justify-center rounded-lg bg-[var(--portfolio-accent)] text-[var(--portfolio-panel)] transition hover:shadow-[0_0_1rem_var(--portfolio-accent)]"
      >
        <ChevronUp size={26} />
      </a>
    </footer>
  );
}
