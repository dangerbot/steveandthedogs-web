"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SkillsTicker from "@/components/SkillsTicker";

// ─── Data ────────────────────────────────────────────────────────────────────

const bioParagraphs = [
  "Hi! I'm a product leader who has spent 18+ years at the intersection of technology, design, and human behavior — building products that people actually want to use.",
  "My digital career started at Adidas, helping define what connected fitness could look like before the category even existed. From connected shoes and smart balls to the original miCoach ecosystem, I learned how to ship hardware-software products that work in the real world — not just in a pitch deck.",
  "From there, I moved into consumer health and fitness apps, leading product at Nike NTC, Bowflex JRNY, and All Points North — where I partnered with clinical teams, content creators, and engineers to build subscription experiences that drive real engagement and retention.",
  "Most recently I led product at FluidLogic, developing next-generation hydration hardware and connected experiences. Now at Matter, I'm bringing that same zero-to-one energy to a new challenge — clear vision, tight prioritization, and a bias toward shipping.",
  "Whether I'm running discovery, aligning stakeholders, or getting hands-on in Figma, I show up with energy, honesty, and a genuine love for building things that matter.",
];

const stats = [
  { value: "18+", label: "years building digital products" },
  { value: "17", label: "patents in sport, fitness & tech" },
  { value: "15", label: "products launched across mobile, web & hardware" },
  { value: "AI", label: "experience in health, wellness & performance" },
  { value: "↑", label: "data-driven leader driving growth & retention" },
];

const products = [
  { name: "Matter", tags: ["iOS", "Android", "Web", "Kiosk"] },
  { name: "FluidLogic GPR50", tags: ["iOS", "Android", "Hardware"] },
  { name: "FluidLogic VMR", tags: ["iOS"] },
  { name: "All Points North Virtual", tags: ["iOS", "Android", "Web"] },
  { name: "Bowflex JRNY", tags: ["iOS", "Android", "Web", "Embedded", "Hardware"] },
  { name: "Nike NTC", tags: ["iOS", "Android"] },
  { name: "Adidas AllDay", tags: ["iOS", "Android", "Web"] },
  { name: "Adidas SmartBall", tags: ["iOS", "Android", "Hardware"] },
  { name: "Adidas Speed Cell", tags: ["iOS", "Android", "Hardware"] },
  { name: "Adidas Run Genie", tags: ["iOS", "Android", "Web App", "Hardware"] },
  { name: "Adidas miCoach Strength", tags: ["iOS", "Android", "Web App", "Wearables"] },
  { name: "Adidas miCoach Glass", tags: ["Android", "Hardware"] },
  { name: "Adidas miCoach Pacer", tags: ["Android", "Hardware"] },
  { name: "Adidas miCoach", tags: ["iOS", "Android", "Web App", "Wearables"] },
  { name: "Adidas Track Rabbit", tags: ["iOS", "Web", "Hardware"] },
  { name: "Adidas 1 Running", tags: ["Hardware"] },
];

const companies = [
  { name: "Matter", sub: "Dec 2025 – Present" },
  { name: "FluidLogic", sub: "Oct 2024 – Dec 2025" },
  { name: "All Points North", sub: "2023 – 2024" },
  { name: "Bowflex", sub: "2021 – 2023" },
  { name: "Nike", sub: "2019 – 2021" },
  { name: "Adidas", sub: "2005 – 2019" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-4">
      {children}
    </p>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-16">

      {/* ── Hero: Photo + Bio card ─────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-24 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Photo */}
          <motion.div
            {...fadeUp(0)}
            className="w-full lg:w-[320px] xl:w-[360px] lg:flex-shrink-0"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#141414] border border-[#222222]">
              <Image
                src="/images/steve.avif"
                alt="Steve Black"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
            </div>

            {/* Company chips below photo */}
            <div className="mt-6 flex flex-wrap gap-2">
              {companies.map((c) => (
                <div
                  key={c.name}
                  className="px-3 py-1.5 rounded-full border border-[#222222] bg-[#141414]"
                >
                  <span className="text-xs font-light text-[#f5f5f5] tracking-wide">{c.name}</span>
                  <span className="text-xs text-[#888888] ml-1.5">{c.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio card */}
          <motion.div
            {...fadeUp(0.15)}
            className="flex-1 bg-[#141414] border border-[#222222] rounded-2xl px-8 py-10 md:px-10 md:py-12 flex flex-col gap-7"
          >
            <div>
              <SectionLabel>About</SectionLabel>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#f5f5f5] leading-tight tracking-tight">
                Hi, I am<br />
                <span className="text-[#d4a853]">Steve Black</span>
              </h1>
            </div>

            <div className="flex flex-col gap-5">
              {bioParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  {...fadeUp(0.2 + i * 0.1)}
                  className={`leading-relaxed font-light ${
                    i === 0
                      ? "text-[#f5f5f5] text-lg"
                      : "text-[#888888] text-base md:text-[17px]"
                  }`}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Let's connect */}
            <div className="pt-2 flex items-center gap-4 border-t border-[#222222]">
              <div className="w-6 h-px bg-[#d4a853]" />
              <Link
                href="https://www.linkedin.com/in/steveandthedogs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a853] text-sm font-light tracking-widest uppercase hover:opacity-70 transition-opacity"
              >
                Let&apos;s connect! →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Skills ticker ─────────────────────────────────────────────── */}
      <SkillsTicker />

      {/* ── Stats + Products ──────────────────────────────────────────── */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Quick Stats */}
          <motion.div
            {...fadeUp(0)}
            className="lg:w-72 xl:w-80 lg:flex-shrink-0"
          >
            <div className="bg-[#141414] border border-[#222222] rounded-2xl px-8 py-10 h-full">
              <SectionLabel>By the Numbers</SectionLabel>
              <h2 className="text-2xl font-extralight text-[#f5f5f5] mb-8 tracking-tight">
                Quick Stats
              </h2>

              <ul className="flex flex-col gap-0 divide-y divide-[#222222]">
                {stats.map((stat, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp(0.1 + i * 0.08)}
                    className="flex items-start gap-4 py-5 group"
                  >
                    <span className="text-xl font-bold text-[#d4a853] w-10 shrink-0 leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-sm text-[#888888] font-light leading-snug">
                      {stat.label}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Education */}
              <div className="mt-8 pt-8 border-t border-[#222222]">
                <p className="text-xs tracking-[0.2em] uppercase text-[#888888]/50 font-light mb-2">
                  Education
                </p>
                <p className="text-sm text-[#f5f5f5] font-light">B.S. Physics</p>
                <p className="text-sm text-[#888888] font-light">University of Oregon</p>
              </div>
            </div>
          </motion.div>

          {/* Products list */}
          <motion.div {...fadeUp(0.1)} className="flex-1">
            <div className="bg-[#141414] border border-[#222222] rounded-2xl px-8 py-10">
              <SectionLabel>Track Record</SectionLabel>
              <h2 className="text-2xl font-extralight text-[#f5f5f5] mb-8 tracking-tight">
                Products I&apos;ve Built
              </h2>

              <ul className="flex flex-col divide-y divide-[#1e1e1e]">
                {products.map((product, i) => (
                  <motion.li
                    key={product.name}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    {/* Name */}
                    <span className="text-sm md:text-base font-light text-[#f5f5f5] group-hover:text-[#d4a853] transition-colors duration-200 shrink-0">
                      {product.name}
                    </span>

                    {/* Platform tags */}
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wide px-2 py-0.5 rounded-full border border-[#2a2a2a] text-[#888888] font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
