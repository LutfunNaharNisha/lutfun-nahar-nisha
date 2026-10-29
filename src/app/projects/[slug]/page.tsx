import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { getProject, projects } from "@/data/portfolio";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Card, TechBadge } from "@/components/ui/Primitives";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-label={title} className="mt-10">
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-mist-300">{children}</div>
    </section>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-mist-300 transition-colors hover:text-accent-300"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to all projects
      </Link>

      <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-accent-400">
        Case study
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg font-medium text-mist-100">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.technologies.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <Button href={project.liveUrl} external size="sm">
            <ArrowUpRight size={16} aria-hidden="true" />
            Live Demo
          </Button>
        ) : null}
        {project.repositoryUrl ? (
          <Button href={project.repositoryUrl} external size="sm" variant="secondary">
            <GithubIcon size={16} aria-hidden="true" />
            GitHub Repository
          </Button>
        ) : null}
      </div>

      {project.image ? (
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-ink-600">
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            width={1200}
            height={675}
            priority
            className="w-full object-cover"
          />
        </div>
      ) : (
        <Card className="mt-10 flex flex-col items-center gap-2 p-12 text-center">
          <p className="font-display text-2xl font-bold text-accent-400/70">Visual preview coming soon</p>
          <p className="max-w-md text-sm text-mist-500">
            Add a screenshot at <code className="text-mist-300">public{project.image ?? "/images/projects/…"}</code> and
            set <code className="text-mist-300">image</code> in <code className="text-mist-300">src/data/portfolio.ts</code>.
            The live demo link above works in the meantime.
          </p>
        </Card>
      )}

      <CaseSection title="About this project">
        {project.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </CaseSection>

      {project.problem ? (
        <CaseSection title="The problem">
          <p>{project.problem}</p>
        </CaseSection>
      ) : null}

      {project.role ? (
        <CaseSection title="My role">
          <p>{project.role}</p>
        </CaseSection>
      ) : null}

      <CaseSection title="Key features">
        <ul className="list-disc space-y-1.5 pl-5">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </CaseSection>

      {project.challenges && project.challenges.length > 0 ? (
        <CaseSection title="Challenges & how I solved them">
          <ul className="list-disc space-y-1.5 pl-5">
            {project.challenges.map((c, i) => (
              <li key={c}>
                {c}
                {project.solutions?.[i] ? (
                  <span className="block text-mist-500">→ {project.solutions[i]}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </CaseSection>
      ) : null}

      {project.futureImprovements && project.futureImprovements.length > 0 ? (
        <CaseSection title="What's next">
          <ul className="list-disc space-y-1.5 pl-5">
            {project.futureImprovements.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </CaseSection>
      ) : null}

      {related.length > 0 ? (
        <section aria-label="Related projects" className="mt-12 border-t border-ink-700 pt-8">
          <h2 className="font-display text-xl font-bold text-white">Keep exploring</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/projects/${r.slug}`}
                className="rounded-2xl border border-ink-700 bg-ink-900/70 p-5 transition-colors hover:border-accent-400/40"
              >
                <p className="font-display text-base font-bold text-white">{r.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-mist-500">{r.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
