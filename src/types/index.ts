export interface SocialLink {
  /** Stable key used to pick an icon: github | linkedin | x | facebook | website | mail */
  key: "github" | "linkedin" | "x" | "facebook" | "website" | "mail";
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  subject?: string;
  period: string;
  status: string;
  achievements?: string[];
}

export interface ExperienceEntry {
  organization: string;
  title: string;
  employmentType: string;
  period: string;
  location?: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  /** Long-form paragraphs shown on the detail page. */
  description: string[];
  problem?: string;
  role?: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  futureImprovements?: string[];
  /** Local path under /public, e.g. "/images/projects/bazardor.png". Omit when no screenshot exists. */
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
}

export interface SiteConfig {
  name: string;
  firstName: string;
  designation: string;
  tagline: string;
  intro: string;
  location: string;
  availability: string;
  email: string;
  /** International format without spaces, e.g. "+8801XXXXXXXXX". Omit when unavailable. */
  phone?: string;
  /** WhatsApp number in international format without "+" or spaces. Omit when unavailable. */
  whatsapp?: string;
  github?: string;
  linkedin?: string;
  x?: string;
  facebook?: string;
  website?: string;
  resumeAvailable: boolean;
  resumeFilePath: string;
  resumeFileName: string;
  siteTitle: string;
  siteDescription: string;
  /** Production URL, e.g. "https://your-domain.vercel.app". Leave empty until deployed. */
  productionUrl?: string;
}
