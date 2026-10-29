"use client";

import { useState } from "react";
import { Check, Copy, Mail, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { toTelHref, toWhatsAppHref } from "@/lib/utils";

async function copyText(value: string, label: string) {
  try {
    await navigator.clipboard.writeText(value);
    toast.success(`${label} copied to clipboard`);
  } catch {
    toast.error("Copy failed", { description: "Your browser blocked clipboard access — please copy it manually." });
  }
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await copyText(siteConfig.email, "Email address");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-ink-700 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div id="contact-heading">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something good"
            description="The fastest way to reach me is email. I read everything and reply within a day or two."
            align="center"
          />
        </div>

        <Card className="mx-auto mt-10 max-w-2xl p-8 text-center sm:p-10">
          <a
            href={`mailto:${siteConfig.email}`}
            className="break-all font-display text-lg font-bold text-white transition-colors hover:text-accent-300 sm:text-2xl"
          >
            {siteConfig.email}
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Hello Nisha — let's talk")}`}>
              <Mail size={17} aria-hidden="true" />
              Send Email
            </Button>
            <Button
              variant="secondary"
              onClick={handleCopyEmail}
              ariaLabel="Copy email address"
            >
              {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              {copied ? "Copied!" : "Copy Email"}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mist-300">
            {siteConfig.phone ? (
              <a href={toTelHref(siteConfig.phone)} className="inline-flex items-center gap-1.5 hover:text-accent-300">
                <Phone size={15} aria-hidden="true" /> {siteConfig.phone}
              </a>
            ) : null}
            {siteConfig.whatsapp ? (
              <a
                href={toWhatsAppHref(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent-300"
              >
                <MessageCircle size={15} aria-hidden="true" /> WhatsApp
              </a>
            ) : null}
            <span className="text-mist-500">{siteConfig.location}</span>
          </div>

          <div className="mt-6 flex justify-center">
            <SocialIcons />
          </div>
        </Card>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-mist-500">
          Prefer a form? Email works best for now — a full contact form with spam protection
          will be added once a delivery service is configured.
        </p>
      </div>
    </section>
  );
}
