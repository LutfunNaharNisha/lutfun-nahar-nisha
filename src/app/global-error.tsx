"use client";

import Link from "next/link";
import { TriangleAlert, House } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0c12",
          color: "#eef1f7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 480, padding: 32, textAlign: "center" }}>
          <TriangleAlert size={32} color="#fbbf24" aria-hidden="true" />
          <h1 style={{ fontSize: 24, margin: "16px 0 8px" }}>Something went wrong</h1>
          <p style={{ color: "#8b94ab", lineHeight: 1.6 }}>
            The application hit a critical error. Please reload the page — your content is safe.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              type="button"
              onClick={reset}
              style={{
                background: "#fbbf24",
                color: "#0a0c12",
                border: "none",
                borderRadius: 12,
                padding: "12px 20px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                border: "1px solid #35415f",
                borderRadius: 12,
                padding: "12px 20px",
                fontWeight: 700,
                color: "#eef1f7",
                textDecoration: "none",
              }}
            >
              <House size={14} aria-hidden="true" style={{ verticalAlign: -2 }} /> Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
