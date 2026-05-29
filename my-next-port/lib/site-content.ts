export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "tiktok" | "github";
};

export type Service = {
  title: string;
  description: string;
  icon: "code" | "palette" | "android";
};

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const heroRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100013137529107",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pond_blsb/",
    icon: "instagram",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@gruufootball",
    icon: "tiktok",
  },
  {
    label: "GitHub",
    href: "https://github.com/Phurinho",
    icon: "github",
  },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description: "HTML5, CSS, JavaScript, Tailwind CSS, and Bootstrap 5.",
    icon: "code",
  },
  {
    title: "UX/UI Design",
    description: "Interface design using Figma and Adobe XD.",
    icon: "palette",
  },
  {
    title: "App Development",
    description: "Java, Android, iOS, and Windows phone application concepts.",
    icon: "android",
  },
];

export const projects: Project[] = [
  {
    title: "Theptud Der Restaurant",
    description: "Restaurant web application",
    image: "https://api.microlink.io?url=https%3A%2F%2Frestuarant-tep.vercel.app%2F&screenshot=true&embed=screenshot.url",
    href: "https://restuarant-tep.vercel.app/",
  },
  {
    title: "Fresh Flowers",
    description: "E-commerce flower shop",
    image: "https://api.microlink.io?url=https%3A%2F%2Fe-comerce-flower.vercel.app%2F&screenshot=true&embed=screenshot.url",
    href: "https://e-comerce-flower.vercel.app/",
  },
  {
    title: "Exam Bank System",
    description: "Exam question bank application",
    image: "https://api.microlink.io?url=https%3A%2F%2Fexam-bank-system-2025.vercel.app%2F&screenshot=true&embed=screenshot.url",
    href: "https://exam-bank-system-2025.vercel.app/",
  },
  {
    title: "iWarp HR Management",
    description: "Human resource management dashboard",
    image: "https://api.microlink.io?url=https%3A%2F%2Fiwarp-demo-v1-0-0.vercel.app%2F&screenshot=true&embed=screenshot.url",
    href: "https://iwarp-demo-v1-0-0.vercel.app/",
  },
  {
    title: "Web Design",
    description: "Personal branding project",
    image: "/images/project-5.jpg",
    href: "#portfolio",
  },
  {
    title: "Web Design",
    description: "Modern web composition",
    image: "/images/project-6.jpg",
    href: "#portfolio",
  },
];
