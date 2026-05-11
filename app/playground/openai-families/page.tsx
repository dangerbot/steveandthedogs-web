"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// ChatGPT Families — concept page by Steve Black
// Lives at /playground/openai-families
//
// Design intent: this page intentionally uses OpenAI's white/minimal brand
// language, in contrast to the dark Steve-and-the-Dogs site. The departure
// reinforces "this is a concept for a different brand."
//
// Photos: drop family photos into /public/openai-families/photos/
// Filenames 1.jpg through 9.jpg (jpg/jpeg/png all work). The collage will
// auto-pick them up.
// ─────────────────────────────────────────────────────────────────────────────

export default function OpenAIFamiliesPage() {
  return (
    <main className="bg-white text-neutral-900 min-h-screen">
      <Hero />
      <Moments />
      <DesignRules />
      <Prototype />
      <HowItGotMade />
      <Closing />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// OpenAI mark — official path, used here only for concept/illustrative purposes.
// ─────────────────────────────────────────────────────────────────────────────
function OpenAIFlower({ size = 64, color = "#0d0d0d" }: { size?: number; color?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="OpenAI"
      role="img"
    >
      <path
        fill={color}
        d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO — full-bleed family photo with overlay text. Visual continuity with
// the playground card thumbnail (same hero.jpg).
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-[780px] md:min-h-[875px] pt-24 pb-20 md:pt-28 md:pb-32 px-6">
      {/* Background photo */}
      <Image
        src="/openai-families/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
      />

      {/* Dark gradient overlay — darker top + bottom for text legibility,
          lighter middle so the photo can breathe */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 28%, rgba(0,0,0,0.40) 72%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* Subtle warm cinematic glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,168,83,0.15) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/85 text-xs font-medium tracking-wide mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Concept by Steve Black · Not affiliated with OpenAI
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <OpenAIFlower size={56} color="#ffffff" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-[11px] md:text-[12px] tracking-[0.28em] uppercase text-white/75 font-medium mb-3"
        >
          ChatGPT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white font-extralight tracking-[-0.03em] leading-[0.95] mb-8"
          style={{
            fontSize: "clamp(64px, 13vw, 156px)",
            textShadow: "0 4px 32px rgba(0,0,0,0.35)",
          }}
        >
          Families
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[clamp(17px,2vw,21px)] text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-light"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.4)" }}
        >
          AI that brings the people you love a little closer.
          Built for the dinners, the carpools, the holidays, and the everyday in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#prototype"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all shadow-lg"
          >
            Try the prototype
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#pov"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 text-white text-sm font-medium hover:bg-white/15 transition-all"
          >
            Read the thinking
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MOMENTS — animated photo collage
// ─────────────────────────────────────────────────────────────────────────────
type TileSpec = {
  label: string;
  ico: string;
  cls: string;
  gradient: string;
  delay: number;
  /** CSS object-position value to bias photo crop. Defaults to "center". */
  objectPosition?: string;
};

const TILES: TileSpec[] = [
  { label: "Birthdays",         ico: "🎂",  cls: "col-span-5 row-span-3", gradient: "from-amber-200 to-amber-400",     delay: 0,   objectPosition: "center 35%" },
  { label: "Snow days",         ico: "⛷️",  cls: "col-span-4 row-span-2", gradient: "from-sky-200 to-sky-400",         delay: 1.2, objectPosition: "center 30%" },
  { label: "Walks with the dog",ico: "🐕",  cls: "col-span-3 row-span-2", gradient: "from-rose-200 to-rose-400",       delay: 2.4, objectPosition: "center 30%" },
  { label: "Holidays",          ico: "🎄",  cls: "col-span-4 row-span-2", gradient: "from-emerald-200 to-emerald-400", delay: 0.6, objectPosition: "center 30%" },
  { label: "Trips together",    ico: "✈️",  cls: "col-span-3 row-span-3", gradient: "from-orange-200 to-orange-400",   delay: 1.8, objectPosition: "center 35%" },
  { label: "Game day",          ico: "🏀",  cls: "col-span-5 row-span-2", gradient: "from-violet-200 to-violet-400",   delay: 3.0, objectPosition: "center 22%" },
  { label: "Milestones",        ico: "🎓",  cls: "col-span-4 row-span-2", gradient: "from-teal-200 to-teal-400",       delay: 0.4, objectPosition: "center 30%" },
  { label: "Family dinner",     ico: "🍽️", cls: "col-span-4 row-span-2", gradient: "from-pink-200 to-pink-400",       delay: 2.0, objectPosition: "center 30%" },
  { label: "Sunset moments",    ico: "🌅",  cls: "col-span-4 row-span-2", gradient: "from-yellow-200 to-yellow-400",   delay: 1.0, objectPosition: "center 35%" },
  { label: "Themed parties",    ico: "🪩",  cls: "col-span-4 row-span-2", gradient: "from-fuchsia-200 to-purple-400",  delay: 2.6, objectPosition: "center 30%" },
];

function Tile({ tile, index }: { tile: TileSpec; index: number }) {
  // Try to load /openai-families/photos/{index+1}.{ext}.
  // First successful load swaps the placeholder for a real photo.
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const exts = ["jpg", "jpeg", "png", "webp"];
    let cancelled = false;
    const tryNext = (i: number) => {
      if (cancelled || i >= exts.length) return;
      const url = `/openai-families/photos/${index + 1}.${exts[i]}`;
      const test = new window.Image();
      test.onload = () => { if (!cancelled) setPhotoUrl(url); };
      test.onerror = () => tryNext(i + 1);
      test.src = url;
    };
    tryNext(0);
    return () => { cancelled = true; };
  }, [index]);

  return (
    <motion.div
      className={`relative ${tile.cls} rounded-2xl overflow-hidden shadow-sm`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.04 }}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${tile.gradient}`}
        animate={{ y: [0, -4, 0], scale: [1, 1.01, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: tile.delay }}
      />
      {photoUrl ? (
        <Image
          src={photoUrl}
          alt={tile.label}
          fill
          className="object-cover"
          style={{ objectPosition: tile.objectPosition ?? "center" }}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-neutral-700/80">
          <span className="text-2xl md:text-3xl" aria-hidden="true">{tile.ico}</span>
          <span className="text-xs md:text-sm font-medium px-3 text-center">{tile.label}</span>
        </div>
      )}
    </motion.div>
  );
}

function Moments() {
  return (
    <section className="bg-[#fafaf7] border-y border-neutral-100 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-5">
          Why family
        </p>
        <h2 className="text-[clamp(36px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-6 max-w-4xl">
          Family is important.
          <span className="block">Here are some moments from mine.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
          Birthdays. Carpools. Soccer practice. Holidays. The text from grandma at 7am.
          The big moments. The small ones. The ones in between.
        </p>

        <div className="grid grid-cols-12 gap-3 md:gap-3.5 mt-14 auto-rows-[80px] md:auto-rows-[100px]">
          {TILES.map((tile, i) => (
            <Tile key={i} tile={tile} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN RULES — what it could feel like (replaces Thesis + Features)
// ─────────────────────────────────────────────────────────────────────────────
type Rule = {
  num: string;
  title: string;
  body: string;
};

const RULES: Rule[] = [
  {
    num: "01",
    title: "Shared context.",
    body: "Knows who's home, who's vegetarian, what's on the calendar Thursday. Without that memory, it's just a thinner Siri.",
  },
  {
    num: "02",
    title: "Mutual trust.",
    body: "Family products only earn their way in if they feel safe and mutual. Anything that hints at one-way surveillance fails before it starts.",
  },
];

function DesignRules() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-5">
          What it could feel like
        </p>
        <h2 className="text-[clamp(36px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-6 max-w-4xl">
          Useful, not impressive.
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
          Two things made the design click. Both are easy to underestimate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-14">
          {RULES.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 md:p-9 rounded-2xl border border-neutral-200 bg-[#fafaf7] hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div
                className="text-3xl text-neutral-300 mb-4 italic"
                style={{ fontFamily: "'Newsreader', Georgia, serif" }}
              >
                {r.num}
              </div>
              <h3 className="text-[24px] md:text-[28px] font-semibold tracking-[-0.01em] mb-3 text-neutral-900 leading-snug">
                {r.title}
              </h3>
              <p className="text-[16px] md:text-[17px] text-neutral-600 leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 max-w-3xl text-[18px] md:text-[20px] text-neutral-700 leading-relaxed italic" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
          The point isn&apos;t to automate family life. It&apos;s to create more space inside it.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROTOTYPE — dark CTA + chat mock
// ─────────────────────────────────────────────────────────────────────────────
function Prototype() {
  const lovableUrl = "https://steveandthedogs-openai-family-demo.lovable.app";

  return (
    <section id="prototype" className="bg-neutral-950 text-white py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-neutral-400 mb-5">
          See it running
        </p>
        <h2 className="text-[clamp(36px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-6 max-w-3xl mx-auto">
          A working prototype, not just a deck.
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          A clickable Lovable build. The system already knows who&apos;s home, who&apos;s vegetarian,
          and who hates olives — so the conversation is about coordination, not administration.
        </p>

        {/* Real screenshot from the Lovable prototype */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14 mb-10 p-3 md:p-4 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 max-w-5xl mx-auto shadow-2xl"
        >
          <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-900">
            <Image
              src="/openai-families/prototype/pizza-chat.png"
              alt="ChatGPT Families prototype: pizza order coordinated across Steve, Lora, and Jacob with shared context and a place suggestion"
              width={1994}
              height={2484}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </motion.div>

        <a
          href={lovableUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition-all"
        >
          Open the prototype
          <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
        </a>
        <p className="mt-4 text-xs text-neutral-500 tracking-wide">
          Built in Lovable · Opens in a new tab
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WorkflowGraphic — ported from Steve's Lovable build (AI Family Flow)
// 5-step "Question → Prototype → Truth" workflow with insight callout
// ─────────────────────────────────────────────────────────────────────────────

// Brand colors lifted from the Lovable design tokens
const INK        = "hsl(220 22% 14%)";
const INK_SOFT   = "hsl(220 12% 38%)";
const INK_MUTED  = "hsl(220 10% 55%)";
const PAPER      = "hsl(36 33% 97%)";
const PAPER_WARM = "hsl(32 40% 94%)";
const LINE       = "hsl(220 14% 88%)";
const BRAND_BLUE   = "hsl(218 75% 56%)";
const BRAND_VIOLET = "hsl(268 60% 60%)";
const BRAND_CORAL  = "hsl(12 82% 66%)";
const GRADIENT_FLOW = `linear-gradient(90deg, ${BRAND_BLUE} 0%, ${BRAND_VIOLET} 55%, ${BRAND_CORAL} 100%)`;
const SHADOW_SOFT = "0 1px 2px hsl(220 22% 14% / 0.03), 0 6px 20px -10px hsl(220 22% 14% / 0.08)";
const SHADOW_CARD = "0 1px 2px hsl(220 22% 14% / 0.04), 0 12px 32px -12px hsl(220 22% 14% / 0.12)";

// Lucide icon paths (HelpCircle, Sparkles, MousePointer2, LayoutTemplate, Filter)
const Icons = {
  HelpCircle: (
    <g fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </g>
  ),
  Sparkles: (
    <g fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </g>
  ),
  MousePointer2: (
    <g fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
    </g>
  ),
  LayoutTemplate: (
    <g fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9"  height="7" x="3" y="14" rx="1" />
      <rect width="5"  height="7" x="16" y="14" rx="1" />
    </g>
  ),
  Filter: (
    <g fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </g>
  ),
} as const;

type WorkflowStep = {
  n: string;
  label: string;
  title: string;
  body: string;
  iconKey: keyof typeof Icons;
  accent: string;
};

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    n: "01",
    label: "Question",
    title: "Start with the human question",
    body: "What could AI actually do for families that group texts and shared calendars cannot? What is the unmet job of family software?",
    iconKey: "HelpCircle",
    accent: BRAND_BLUE,
  },
  {
    n: "02",
    label: "Explore",
    title: "Map the opportunity space with AI",
    body: "Use ChatGPT to pressure-test the premise, brainstorm widely, cluster ideas, argue with what feels forced, and keep what feels true.",
    iconKey: "Sparkles",
    accent: BRAND_VIOLET,
  },
  {
    n: "03",
    label: "Prototype",
    title: "Convert ideas into interfaces",
    body: "Lovable turns abstract product ideas into clickable surfaces. Stop arguing about the idea and start clicking on it.",
    iconKey: "MousePointer2",
    accent: BRAND_VIOLET,
  },
  {
    n: "04",
    label: "Frame",
    title: "Build the surface that holds the story",
    body: "Use Cursor, Next.js, Claude, and real family photos to create the landing page — a writing-to-think pass grounded in something honest.",
    iconKey: "LayoutTemplate",
    accent: BRAND_CORAL,
  },
  {
    n: "05",
    label: "Learn",
    title: "Separate what feels true from what feels forced",
    body: "Render the ideas, then judge them. Some surfaces feel right immediately; others only reveal their problems once you can see them.",
    iconKey: "Filter",
    accent: BRAND_CORAL,
  },
];

function WorkflowGraphic() {
  return (
    <figure
      className="not-prose my-14 md:my-16 -mx-2 md:-mx-12 px-5 md:px-12 py-12 md:py-16 rounded-3xl relative overflow-hidden"
      style={{ background: PAPER, color: INK, fontFamily: "'Inter', sans-serif" }}
    >
      {/* Ambient gradient backdrop, very subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.55,
          background:
            `radial-gradient(60% 40% at 15% 10%, ${BRAND_BLUE.replace(")", " / 0.10)")}, transparent 60%),` +
            `radial-gradient(50% 35% at 85% 20%, ${BRAND_CORAL.replace(")", " / 0.10)")}, transparent 60%),` +
            `radial-gradient(50% 40% at 50% 100%, ${BRAND_VIOLET.replace(")", " / 0.08)")}, transparent 60%)`,
        }}
      />

      <div className="relative">
        {/* Flow — header removed; the section h2 above carries the title */}
        <div className="relative">
          {/* Desktop connecting line behind cards */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[58px] hidden lg:block"
          >
            <div
              className="mx-auto h-px w-[92%]"
              style={{ background: `linear-gradient(to right, transparent, ${LINE}, transparent)` }}
            />
            <div
              className="mx-auto -mt-px h-px w-[80%]"
              style={{ background: GRADIENT_FLOW, opacity: 0.5 }}
            />
          </div>

          <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5 list-none p-0 m-0">
            {WORKFLOW_STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative flex"
              >
                {/* Mobile vertical line between stacked cards */}
                {i < WORKFLOW_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[34px] top-full h-6 w-px lg:hidden"
                    style={{ background: LINE }}
                  />
                )}

                <article
                  className="group relative flex w-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: `1px solid ${LINE}`,
                    boxShadow: SHADOW_SOFT,
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = SHADOW_CARD)}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = SHADOW_SOFT)}
                >
                  {/* Number + icon row */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="relative">
                      <div
                        className="absolute inset-0 -z-10 rounded-full blur-md"
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(218 75% 56% / 0.08), hsl(268 60% 60% / 0.06), hsl(12 82% 66% / 0.08))",
                        }}
                      />
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-full"
                        style={{ background: PAPER, border: `1px solid ${LINE}`, color: s.accent }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                          {Icons[s.iconKey]}
                        </svg>
                      </div>
                    </div>
                    <span
                      className="text-xs font-medium uppercase tracking-[0.22em]"
                      style={{ fontFamily: "'Newsreader', Georgia, serif", color: INK_MUTED }}
                    >
                      {s.n}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.accent }} />
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: INK_SOFT }}
                    >
                      {s.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-medium leading-snug"
                    style={{ fontFamily: "'Newsreader', Georgia, serif", color: INK, fontSize: "21px" }}
                  >
                    {s.title}
                  </h3>

                  {/* Desktop arrow connector (between cards) */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 top-12 hidden h-6 w-6 items-center justify-center rounded-full lg:flex"
                      style={{ background: PAPER, border: `1px solid ${LINE}`, color: INK_MUTED }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M1 5h8m0 0L5.5 1.5M9 5L5.5 8.5"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </article>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Insight callout */}
        <aside className="mx-auto mt-14 md:mt-16 max-w-3xl">
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10"
            style={{ background: PAPER_WARM, border: `1px solid ${LINE}`, boxShadow: SHADOW_SOFT }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: GRADIENT_FLOW, opacity: 0.8 }}
            />
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div
                className="text-sm uppercase tracking-[0.22em] shrink-0"
                style={{ fontFamily: "'Newsreader', Georgia, serif", color: INK_MUTED }}
              >
                Insight
              </div>
              <p
                className="leading-snug"
                style={{ fontFamily: "'Newsreader', Georgia, serif", color: INK, fontSize: "clamp(18px, 2vw, 24px)" }}
              >
                &ldquo;The point was not to prove the answer. It was to make the question concrete
                enough to evaluate.&rdquo;
              </p>
            </div>
          </div>
        </aside>
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOW IT GOT MADE — workflow graphic standalone section
// ─────────────────────────────────────────────────────────────────────────────
function HowItGotMade() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-5">
          How this got made
        </p>
        <h2 className="text-[clamp(36px,5.5vw,64px)] font-semibold tracking-[-0.03em] leading-[1.05] mb-6 max-w-4xl">
          From Question{" "}
          <span className="text-neutral-400">→</span>{" "}
          Prototype{" "}
          <span className="text-neutral-400">→</span>{" "}
          <span style={{ fontFamily: "'Newsreader', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            Truth
          </span>
          .
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
          This whole thing — landing page, prototype, workflow — went from rough idea to live in a
          weekend.
        </p>

        <WorkflowGraphic />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CLOSING — lightweight invite + concept disclaimer
// ─────────────────────────────────────────────────────────────────────────────
function Closing() {
  return (
    <section className="bg-[#fafaf7] border-t border-neutral-200 py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-neutral-500 mb-5">
          One more thing
        </p>
        <h2
          className="text-[clamp(28px,4.5vw,42px)] font-medium leading-[1.2] tracking-[-0.02em] mb-7 text-neutral-900"
          style={{ fontFamily: "'Newsreader', Georgia, serif" }}
        >
          What would your family use this for?
        </h2>
        <p className="text-[17px] md:text-lg text-neutral-600 leading-relaxed mb-9">
          I&apos;d love to hear what resonated, what missed, or what you&apos;d build instead.
          The whole reason for putting this on the internet is to learn from the people who see it.
        </p>

        <a
          href="mailto:steve.and.the.dogs@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm"
        >
          steve.and.the.dogs@gmail.com
          <span aria-hidden="true">→</span>
        </a>

        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-neutral-500">
          <p>
            Built by Steve Black with ChatGPT, Cursor, Claude, and Lovable.
          </p>
          <Link
            href="/playground"
            className="group inline-flex items-center gap-1.5 hover:text-neutral-900 transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            Back to Playground
          </Link>
        </div>

        <p className="mt-6 text-[11px] text-neutral-400 leading-relaxed max-w-md mx-auto">
          ChatGPT Families is a concept — not a product, not affiliated with OpenAI.
          OpenAI® and ChatGPT® are trademarks of OpenAI. Used here for illustrative concept purposes only.
        </p>
      </div>
    </section>
  );
}
