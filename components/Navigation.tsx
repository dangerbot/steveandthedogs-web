"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const email = "steve.and.the.dogs@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  };

  const navLinks = [
    { label: "Hello!", href: "/" },
    { label: "About", href: "/about" },
    { label: "Read Me", href: "/articles" },
    { label: "Playground", href: "/playground" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Left: Logo + Email */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-[#d4a853] text-xl leading-none hover:scale-110 transition-transform"
            aria-label="Home"
          >
            ⚡
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-[#888888] text-sm font-light tracking-wide">
              {email}
            </span>
            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="text-[#888888] hover:text-[#d4a853] transition-colors p-1 rounded"
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#d4a853]"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
            {copied && (
              <span className="text-xs text-[#d4a853] animate-fade-in-up">
                Copied!
              </span>
            )}
          </div>
        </div>

        {/* Right: Nav Links */}
        <ul className="flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-light tracking-wide transition-colors rounded-sm ${
                    isActive
                      ? "text-[#d4a853]"
                      : "text-[#888888] hover:text-[#f5f5f5]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
