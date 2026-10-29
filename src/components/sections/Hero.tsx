"use client";

import Image from "next/image";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

export function Hero() {
	const handleResume = () => {
		if (!siteConfig.resumeAvailable) {
			toast.info("Resume coming soon", {
				description:
					"Nisha hasn't uploaded her resume yet — check back soon or reach out by email.",
			});
		}
	};

	return (
		<section
			id="home"
			aria-labelledby="hero-heading"
			className="relative overflow-hidden"
		>
			{/* Subtle decorative wash — static, no motion */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_10%,rgba(251,191,36,0.10),transparent_70%)]"
			/>
			<div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
				<div>
					<p className="animate-rise inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 text-xs font-semibold text-accent-300">
						<Sparkles
							size={14}
							aria-hidden="true"
						/>
						{siteConfig.availability}
					</p>
					<p className="animate-rise animate-rise-1 mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-mist-500">
						Hello, I&apos;m
					</p>
					<h1
						id="hero-heading"
						className="animate-rise animate-rise-1 mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
					>
						{siteConfig.name}
						<span className="text-accent-400">.</span>
					</h1>
					<p className="animate-rise animate-rise-2 mt-3 font-display text-xl font-semibold text-mist-100 sm:text-2xl">
						{siteConfig.designation}
					</p>
					<p className="animate-rise animate-rise-2 mt-5 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
						{siteConfig.intro}
					</p>
					<p className="animate-rise animate-rise-2 mt-4 inline-flex items-center gap-1.5 text-sm text-mist-500">
						<MapPin
							size={15}
							aria-hidden="true"
							className="text-accent-400"
						/>
						{siteConfig.location}
					</p>

					<div className="animate-rise animate-rise-3 mt-8 flex flex-wrap items-center gap-3">
						<Button href="#projects">
							Explore My Work
							<ArrowRight
								size={17}
								aria-hidden="true"
							/>
						</Button>
						{siteConfig.resumeAvailable ? (
							<Button
								variant="secondary"
								href={siteConfig.resumeFilePath}
								external
								download={siteConfig.resumeFileName}
							>
								<Download
									size={17}
									aria-hidden="true"
								/>
								Download Resume
							</Button>
						) : (
							<Button
								variant="secondary"
								onClick={handleResume}
							>
								<Download
									size={17}
									aria-hidden="true"
								/>
								Download Resume
							</Button>
						)}
					</div>

					<div className="animate-rise animate-rise-3 mt-8">
						<SocialIcons />
					</div>
				</div>

				{/* Portrait */}
				<div className="animate-rise animate-rise-2 relative mx-auto w-full max-w-sm lg:max-w-none">
					<div
						aria-hidden="true"
						className="absolute -inset-3 rounded-4xl bg-linear-to-br from-accent-400/25 via-transparent to-transparent blur-2xl"
					/>
					<div className="animate-float-soft relative overflow-hidden rounded-4xl border border-ink-600 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]">
						<Image
							src="/images/profile/profile.jpg"
							alt={`Portrait of ${siteConfig.name}`}
							width={640}
							height={760}
							priority
							className="aspect-4/5 w-full object-cover"
						/>
						<div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink-950/90 via-ink-950/40 to-transparent p-5 pt-14">
							<p className="font-display text-sm font-bold text-white">
								{siteConfig.name}
							</p>
							<p className="text-xs text-mist-300">
								{siteConfig.designation} · {siteConfig.location}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
