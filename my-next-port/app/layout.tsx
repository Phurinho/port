import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phurin Toomkul | Portfolio",
  description:
    "Portfolio website for Phurin Toomkul, Computer Engineering student and aspiring full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
