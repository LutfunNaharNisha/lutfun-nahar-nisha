"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Lock body scroll while the mobile panel is open + close on Escape.
	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 border-b transition-colors duration-200",
				scrolled
					? "border-ink-700 bg-ink-950/85 backdrop-blur-md"
					: "border-transparent bg-ink-950/40",
			)}
		>
			<nav
				aria-label="Primary"
				className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
			>
				<Link
					href="#home"
					className="flex items-center gap-2.5"
					aria-label={`${siteConfig.name} — home`}
					onClick={() => setOpen(false)}
				>
					<span
						aria-hidden="true"
						className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-400 font-display text-sm font-bold text-ink-950"
					>
						LN
					</span>
					<span className="font-display text-base font-bold tracking-tight text-white">
						{siteConfig.name}
						<span className="text-accent-400">.</span>
					</span>
				</Link>

				<ul className="hidden items-center gap-1 lg:flex">
					{navItems.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								className="rounded-lg px-3.5 py-2 text-sm font-medium text-mist-300 transition-colors hover:bg-ink-800 hover:text-white"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<div className="hidden lg:block">
					<Link
						href="#contact"
						className="inline-flex items-center rounded-xl bg-accent-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
					>
						Let&apos;s talk
					</Link>
				</div>

				<button
					type="button"
					className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-700 bg-ink-900 text-mist-100 lg:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					{open ? (
						<X
							size={20}
							aria-hidden="true"
						/>
					) : (
						<Menu
							size={20}
							aria-hidden="true"
						/>
					)}
				</button>
			</nav>

			{/* Mobile panel */}
			<div
				id="mobile-menu"
				className={cn(
					"overflow-hidden border-ink-700 transition-[max-height,opacity] duration-250 lg:hidden",
					open
						? "max-h-120 border-t opacity-100"
						: "max-h-0 opacity-0",
				)}
			>
				<ul className="space-y-1 bg-ink-950/95 px-4 py-4 backdrop-blur-md">
					{navItems.map((item) => (
						<li key={item.href}>
							<Link
								href={item.href}
								onClick={() => setOpen(false)}
								className="block rounded-xl px-4 py-3 text-base font-medium text-mist-100 transition-colors hover:bg-ink-800 hover:text-accent-300"
							>
								{item.label}
							</Link>
						</li>
					))}
					<li className="pt-2">
						<Link
							href="#contact"
							onClick={() => setOpen(false)}
							className="block rounded-xl bg-accent-400 px-4 py-3 text-center text-base font-semibold text-ink-950"
						>
							Let&apos;s talk
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
