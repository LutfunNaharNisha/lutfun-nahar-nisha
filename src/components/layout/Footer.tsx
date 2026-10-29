import Link from "next/link";
import { ArrowUp, Globe, Mail } from "lucide-react";
import { getSocialLinks, siteConfig } from "@/config/site";
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asIcon = (C: any): IconComponent => C;

const iconFor: Record<string, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: TwitterIcon,
  facebook: FacebookIcon,
  website: asIcon(Globe),
  mail: asIcon(Mail),
};

export function SocialIcons({ className = "" }: { className?: string }) {
  const links = getSocialLinks();
  if (links.length === 0) return null;
  return (
    <ul className={`flex items-center gap-2 ${className}`} aria-label="Social links">
      {links.map((link) => {
        const Icon = iconFor[link.key] ?? Globe;
        return (
          <li key={link.key}>
            <a
              href={link.href}
              target={link.key === "mail" ? undefined : "_blank"}
              rel={link.key === "mail" ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-mist-300 transition-all hover:-translate-y-0.5 hover:border-accent-400/60 hover:text-accent-300"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-700 bg-ink-900/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-bold text-white">
            {siteConfig.name}
            <span className="text-accent-400">.</span>
          </p>
          <p className="mt-1 text-xs text-mist-500">
            © {year} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
        <SocialIcons />
        <Link
          href="#home"
          className="inline-flex items-center gap-1.5 rounded-xl border border-ink-700 px-3.5 py-2 text-xs font-semibold text-mist-300 transition-colors hover:border-accent-400/60 hover:text-accent-300"
          aria-label="Back to top"
        >
          <ArrowUp size={14} aria-hidden="true" />
          Top
        </Link>
      </div>
    </footer>
  );
}
