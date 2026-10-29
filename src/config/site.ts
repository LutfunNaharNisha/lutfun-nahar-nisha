import type { NavItem, SiteConfig, SocialLink } from "@/types";

/**
 * Central site configuration.
 *
 * Everything personal lives here so the portfolio can be personalized
 * without hunting through components. Leave a field empty (or omit the
 * optional ones) and the UI hides that link/button automatically —
 * nothing fake is ever rendered.
 */
export const siteConfig: SiteConfig = {
  name: "Lutfun Nahar Nisha",
  firstName: "Nisha",
  designation: "Aspiring Full-Stack Developer",
  tagline: "Project manager turning builder — crafting calm, accessible web experiences.",
  intro:
    "I'm Lutfun Nahar Nisha from Jessore, Bangladesh — a project manager with 8+ years in tech delivery, now learning full-stack web development with Programming Hero. I bring the discipline of shipping real products to every interface I build.",
  location: "Jessore, Bangladesh",
  availability: "Open to junior / intern frontend roles",
  email: "lutfunnaharnishaa@gmail.com",
  // TODO: add your phone / WhatsApp numbers when ready, e.g. "+8801XXXXXXXXX"
  // phone: "",
  // whatsapp: "",
  github: "https://github.com/LutfunNaharNisha",
  linkedin: "https://linkedin.com/in/lutfunnaharnishaa",
  // TODO: add only the profiles you actually own
  // x: "",
  // facebook: "",
  // website: "",
  resumeAvailable: false, // flip to true once public/resume.pdf is the real resume
  resumeFilePath: "/resume.pdf",
  resumeFileName: "Lutfun-Nahar-Nisha-Resume.pdf",
  siteTitle: "Lutfun Nahar Nisha — Aspiring Full-Stack Developer",
  siteDescription:
    "Portfolio of Lutfun Nahar Nisha, an aspiring full-stack developer from Jessore, Bangladesh. React, Next.js, TypeScript, Node.js — projects, skills, journey, and contact.",
  productionUrl: "",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function getSocialLinks(config: SiteConfig = siteConfig): SocialLink[] {
  const links: SocialLink[] = [];
  if (config.github) links.push({ key: "github", label: "GitHub", href: config.github });
  if (config.linkedin) links.push({ key: "linkedin", label: "LinkedIn", href: config.linkedin });
  if (config.x) links.push({ key: "x", label: "X (Twitter)", href: config.x });
  if (config.facebook) links.push({ key: "facebook", label: "Facebook", href: config.facebook });
  if (config.website) links.push({ key: "website", label: "Website", href: config.website });
  if (config.email) links.push({ key: "mail", label: "Email", href: `mailto:${config.email}` });
  return links;
}
