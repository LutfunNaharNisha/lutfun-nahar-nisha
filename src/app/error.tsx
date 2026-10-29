"use client";

import Link from "next/link";
import { useEffect } from "react";
import { TriangleAlert, RotateCcw, House } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log for debugging — never shown to visitors.
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent-400/30 bg-accent-400/10"
      >
        <TriangleAlert size={28} className="text-accent-400" />
      </span>
      <h1 className="mt-8 font-display text-2xl font-bold text-white">Something went wrong</h1>
      <p className="mt-3 max-w-md text-base leading-relaxed text-mist-300">
        This section hit an unexpected error. Nothing you did caused it — try again,
        or head back home and continue from there.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-300"
        >
          <RotateCcw size={16} aria-hidden="true" />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-ink-600 bg-ink-800/60 px-5 py-3 text-sm font-semibold text-mist-100 transition-colors hover:border-mist-500"
        >
          <House size={16} aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
