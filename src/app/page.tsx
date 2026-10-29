import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education, Experience } from "@/components/sections/Qualifications";
import { Projects } from "@/components/projects/ProjectCard";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
