import Link from "next/link";
import { SearchX, ArrowLeft, FolderOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-400/30 bg-accent-400/10"
      >
        <SearchX size={28} className="text-accent-400" />
      </span>
      <p className="mt-8 font-display text-7xl font-extrabold tracking-tight text-white">
        404
      </p>
      <h1 className="mt-3 font-display text-2xl font-bold text-white">
        This page wandered off
      </h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-mist-300">
        The page you&apos;re looking for doesn&apos;t exist — it may have moved,
        or the link may contain a typo.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to home
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-800/60 px-5 py-3 text-sm font-semibold text-mist-100 transition-colors hover:border-mist-500"
        >
          <FolderOpen size={16} aria-hidden="true" />
          Browse projects
        </Link>
      </div>
    </div>
  );
}
