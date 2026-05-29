export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "users" | "camera" | "music";
};

export type Service = {
  title: string;
  description: string;
  icon: "code" | "palette" | "smartphone";
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
    icon: "users",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/pond_blsb/",
    icon: "camera",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@pondinho?_t=8mEWyeAi6i7&_r=1",
    icon: "music",
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
    icon: "smartphone",
  },
];

export const projects: Project[] = [
  {
    title: "UX Design",
    description: "Coffee Cup",
    image: "/images/coffee.jpg",
    href: "#portfolio",
  },
  {
    title: "Web Design",
    description: "Portfolio visual concept",
    image: "/images/project-2.jpg",
    href: "#portfolio",
  },
  {
    title: "Web Design",
    description: "Responsive interface study",
    image: "/images/project-3.jpg",
    href: "#portfolio",
  },
  {
    title: "Web Design",
    description: "Creative landing page layout",
    image: "/images/project-4.jpg",
    href: "#portfolio",
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
