"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BoltDivider from "@/components/BoltDivider";


const connectItems = [
  {
    id: "linkedin",
    label: "Connect with me on LinkedIn",
    href: "https://www.linkedin.com/in/steveandthedogs/",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email me at Steve.and.the.dogs@gmail.com",
    href: "mailto:steve.and.the.dogs@gmail.com",
    external: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "Click to learn more about me",
    href: "/about",
    external: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "articles",
    label: "Click to read my articles",
    href: "/articles",
    external: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16v16H4z" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
];

export default function ConnectSection() {
  return (
    <section className="bg-[#0a0a0a] px-6 pb-32">
      <div className="max-w-4xl mx-auto">

        {/* Lightning bolt divider */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <BoltDivider />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-4">
            Let&apos;s Talk
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#f5f5f5] tracking-tight">
            Get in touch
          </h2>
        </motion.div>

        {/* Links list */}
        <ul className="flex flex-col divide-y divide-[#1a1a1a] max-w-2xl mx-auto">
          {connectItems.map((item, i) => {
            const Tag = item.external ? "a" : Link;
            const extraProps = item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <Tag
                  href={item.href}
                  {...extraProps}
                  className="group flex items-center justify-between gap-4 py-6 text-[#888888] hover:text-[#f5f5f5] transition-colors duration-300"
                >
                  {/* Icon + label */}
                  <div className="flex items-center gap-4">
                    <span className="text-[#d4a853] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span className="text-base md:text-lg font-light">{item.label}</span>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Tag>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
