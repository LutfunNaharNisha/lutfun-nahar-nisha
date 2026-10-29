import { GithubIcon } from "@/components/ui/BrandIcons";
import { Card, SectionHeading, TechBadge } from "@/components/ui/Primitives";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function initials(title: string): string {
	return title
		.split(/\s+/)
		.slice(0, 2)
		.map((w) => w.replace(/[^A-Za-z\u0980-\u09FF]/g, "").charAt(0))
		.join("")
		.toUpperCase();
}

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Card className="group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-[0_20px_44px_-20px_rgba(0,0,0,0.8)]">
			<div className="relative aspect-video overflow-hidden bg-ink-800">
				{project.image ? (
					<Image
						src={project.image}
						alt={project.imageAlt ?? `${project.title} screenshot`}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						loading="eager"
						className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
					/>
				) : (
					<div
						aria-hidden="true"
						className="flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-ink-700 via-ink-800 to-ink-900"
					>
						<span className="font-display text-4xl font-extrabold text-accent-400/80">
							{initials(project.title)}
						</span>
						<span className="px-6 text-center text-xs text-mist-500">
							Screenshot coming soon — see the live demo
						</span>
					</div>
				)}
			</div>
			<div className="flex flex-1 flex-col p-6">
				<h3 className="font-display text-lg font-bold text-white">
					<Link
						href={`/projects/${project.slug}`}
						className="transition-colors hover:text-accent-300"
					>
						{project.title}
					</Link>
				</h3>
				<p className="mt-1 text-sm font-medium text-accent-300/90">
					{project.tagline}
				</p>
				<p className="mt-3 line-clamp-3 text-sm leading-relaxed text-mist-300">
					{project.summary}
				</p>
				<div className="mt-4 flex flex-wrap gap-1.5">
					{project.technologies.slice(0, 4).map((t) => (
						<TechBadge
							key={t}
							label={t}
						/>
					))}
					{project.technologies.length > 4 ? (
						<TechBadge
							label={`+${project.technologies.length - 4} more`}
						/>
					) : null}
				</div>
				<div className="mt-5 flex items-center gap-3 border-t border-ink-700 pt-4 text-sm font-semibold">
					<Link
						href={`/projects/${project.slug}`}
						className="inline-flex items-center gap-1 text-accent-300 hover:text-accent-400"
						aria-label={`View details of ${project.title}`}
					>
						View Details{" "}
						<ArrowRight
							size={15}
							aria-hidden="true"
						/>
					</Link>
					<span
						aria-hidden="true"
						className="text-ink-600"
					>
						·
					</span>
					{project.liveUrl ? (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-mist-300 hover:text-white"
							aria-label={`Open live demo of ${project.title} (new tab)`}
						>
							Live{" "}
							<ArrowUpRight
								size={15}
								aria-hidden="true"
							/>
						</a>
					) : null}
					{project.repositoryUrl ? (
						<a
							href={project.repositoryUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-1 text-mist-300 hover:text-white"
							aria-label={`Open GitHub repository of ${project.title} (new tab)`}
						>
							<GithubIcon
								size={15}
								aria-hidden="true"
							/>{" "}
							Code
						</a>
					) : null}
				</div>
			</div>
		</Card>
	);
}

export function Projects() {
	if (projects.length === 0) {
		return (
			<section
				id="projects"
				aria-labelledby="projects-heading"
				className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
			>
				<SectionHeading
					eyebrow="Projects"
					title="Projects"
					description="Project case studies are on the way — check back soon."
				/>
				<Card className="mt-10 p-10 text-center text-mist-300">
					No projects published yet. New work from the Programming
					Hero journey will appear here.
				</Card>
			</section>
		);
	}
	return (
		<section
			id="projects"
			aria-labelledby="projects-heading"
			className="mx-auto max-w-6xl px-4 py-20 sm:px-6"
		>
			<div id="projects-heading">
				<SectionHeading
					eyebrow="Projects"
					title="Things I've built & shipped"
					description="Real coursework, deployed and live. Each project has a full case study — the problem, my role, the hard parts, and what's next."
				/>
			</div>
			<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<ProjectCard
						key={project.slug}
						project={project}
					/>
				))}
			</div>
		</section>
	);
}
