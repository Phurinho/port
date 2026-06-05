import Link from "next/link";

type UiButtonProps = {
  children: React.ReactNode;
  href: string;
};

export function UiButton({ children, href }: UiButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-full bg-(--portfolio-accent) px-7 py-3 text-base font-bold tracking-wide text-(--portfolio-bg) shadow-[0_0_1rem_var(--portfolio-accent)] transition hover:shadow-none"
    >
      {children}
    </Link>
  );
}
