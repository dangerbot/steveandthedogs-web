"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Hello!", href: "/" },
  { label: "About", href: "/about" },
  { label: "Read Me", href: "/articles" },
];

const email = "steve.and.the.dogs@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  const commitHash = process.env.NEXT_PUBLIC_COMMIT_HASH ?? "dev";

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">

        {/* Left — email + copy */}
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-[#888888] text-sm font-light tracking-wide truncate hidden sm:block">
            {email}
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy email address"
            className="shrink-0 text-[#888888] hover:text-[#d4a853] transition-colors p-1 rounded"
          >
            {copied ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#d4a853]">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
          {copied && (
            <span className="text-xs text-[#d4a853] animate-fade-in-up shrink-0">
              Copied!
            </span>
          )}
        </div>

        {/* Right — nav links + build hash */}
        <div className="flex items-center gap-4 md:gap-6">
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-1 md:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-3 py-1.5 text-sm font-light tracking-wide text-[#888888] hover:text-[#f5f5f5] transition-colors rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <span
            className="hidden sm:block text-[11px] font-mono text-[#555] tracking-wide select-none"
            title="Build commit hash"
          >
            build {commitHash}
          </span>
        </div>
      </div>
    </footer>
  );
}
