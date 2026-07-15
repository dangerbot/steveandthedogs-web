import type { ReactNode } from "react";
import Link from "next/link";
import ElectricBolt from "@/components/ElectricBolt";
import AnimatedDivider from "@/components/AnimatedDivider";

// ─────────────────────────────────────────────────────────────────────────────
// Playground — the prototype showcase
//
// Every prototype is an entry in the `prototypes` array below and renders as
// one self-contained card: category, title, description, then the purpose
// framework (the question → what I found → what's next), plus a visual.
//
// To add a prototype: build its page at /playground/<slug>, then add an
// object to the array. The card renders automatically.
// ─────────────────────────────────────────────────────────────────────────────

type Prototype = {
  href: string;
  category: string; // eyebrow label, e.g. "Concept Prototype"
  title: string;
  badge: { label: string; dotClass: string };
  description: string; // one or two lines max
  question: string; // why I built this — the question or hypothesis
  found: string; // what I learned, one line
  next: string; // what happens next, one line
  visual: ReactNode; // right-side panel content
};

const prototypes: Prototype[] = [
  {
    href: "/articles/project-sub-three",
    category: "Passion Project",
    title: "Project Sub Three",
    badge: { label: "Live product · Early days", dotClass: "bg-emerald-500" },
    description:
      "A standalone AI training companion for runners chasing a sub-three marathon — a full product with accounts, a Supabase backend, and Claude doing the coaching. Decades in the making.",
    question:
      "Could AI finally crack what heuristic training plans never could — real coaching from messy, incomplete runner data — and how far can I take a full AI-native build solo?",
    found:
      "Separate the brains from the machinery: Claude holds the conversation and makes the coaching decisions; a deterministic plan engine rebuilds the entire 56-week plan in milliseconds via tool use.",
    next:
      "Sync real running data (Strava, Garmin, Apple Health) and split the single model into specialists — chat, context, coach, reasoner.",
    visual: (
      <div
        className="relative flex items-end min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: "url(/images/articles/project-sub-three.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <p className="relative z-10 m-5 text-[11px] tracking-[0.2em] uppercase text-white/85 font-medium">
          Join the chase →
        </p>
        <p className="absolute bottom-3 right-4 z-10 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          2:59:59
        </p>
      </div>
    ),
  },
  {
    href: "/articles/hoop-rhythm",
    category: "Rapid Prototype",
    title: "Hoop Rhythm",
    badge: { label: "In testing · 4 summer games", dotClass: "bg-[#d4a853]" },
    description:
      "A one-handed basketball stat tracker and a post-game report coaches open minutes after the buzzer — born from a season of pen-and-paper versions at my son's JV games.",
    question:
      "Could I track the stats coaches actually want — turnovers, rebounds, possessions — without taking my eyes off the game, and get a useful report into their hands before they leave the gym?",
    found:
      "The possession-by-possession view is the unlock — runs, momentum, and control jump out in ways a scorebook never shows. Four games in, the coaches keep asking for it.",
    next:
      "A few more games of testing. If it sticks, automate the manual workflow — now a known gap I can design to instead of a guess.",
    visual: (
      <div
        className="relative flex items-end min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: "url(/images/articles/hoop-rhythm/scoreboard.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* bottom-weighted darkening so the white captions stay readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <p className="relative z-10 m-5 text-[11px] tracking-[0.2em] uppercase text-white/85 font-medium">
          Live from the bench →
        </p>
        <p className="absolute bottom-3 right-4 z-10 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          Hoop Rhythm Tracker
        </p>
      </div>
    ),
  },
  {
    href: "/articles/looks-like-prototype",
    category: "Concept Test",
    title: "AI-First Onboarding",
    badge: { label: "Looks-like · User tested", dotClass: "bg-[#d4a853]" },
    description:
      "A chat-first onboarding concept for a baby registry, built in a day with Lovable and the AI fully mocked — smoke and mirrors on purpose, to test the concept before the tech.",
    question:
      "Can a conversation replace the one-size-fits-all onboarding wizard — meeting people where they are instead of forcing every edge case down a happy path?",
    found:
      "Parents, non-parents, people with no kids at all — everyone flowed through. Some went deep, some bailed early, both fine. And testing exposed a path I'd missed: starting a registry for someone else.",
    next:
      "Clear signal — it earned a works-like feasibility pass, where response speed and tuned suggested answers are the make-or-break.",
    visual: (
      <div
        className="relative flex items-end min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: "url(/images/articles/looks-like-prototype-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* bottom-weighted darkening so the white captions stay readable on the bright photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <p className="relative z-10 m-5 text-[11px] tracking-[0.2em] uppercase text-white/85 font-medium">
          Say hi to Bee →
        </p>
        <p className="absolute bottom-3 right-4 z-10 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          AI mocked · On purpose
        </p>
      </div>
    ),
  },
  {
    href: "/articles/one-sensor-two-prototypes",
    category: "Technology Exploration",
    title: "NIR Skin Intelligence",
    badge: { label: "Concept test · Skin vs. kitchen", dotClass: "bg-[#d4a853]" },
    description:
      "Near-infrared sensors are shrinking toward consumer devices. Two quick Lovable concepts — a skin analyzer and a food analyzer — went hunting for the use case before the tech was even ready.",
    question:
      "Where would a consumer actually want an NIR sensor in their routine — on their skin or on their plate — and is either worth pursuing?",
    found:
      "Skin won, decisively. Testers tied collagen, dryness, and sun damage straight to product decisions and wanted it at home, not in a store. The food analyzer never found a place in anyone's routine.",
    next:
      "The sensor hardware isn't ready for a works-like pass — but when it is, the direction is already picked: skin care, at home, connected to the products you buy.",
    visual: (
      <div
        className="relative flex items-end min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: "url(/images/articles/one-sensor-two-prototypes-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* bottom-weighted darkening so the white captions stay readable on the bright photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <p className="relative z-10 m-5 text-[11px] tracking-[0.2em] uppercase text-white/85 font-medium">
          Scan, then decide →
        </p>
        <p className="absolute bottom-3 right-4 z-10 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          Skin age · 36.2
        </p>
      </div>
    ),
  },
  {
    href: "/articles/one-button-one-light",
    category: "Internal Tool",
    title: "Squirtle Light Lab",
    badge: { label: "Firmware sim · Hallway tested", dotClass: "bg-[#d4a853]" },
    description:
      "One button and one multicolor LED had to communicate power, pairing, connection, errors, and resets. A browser simulator — built with the firmware engineer, carried around on an iPad — became the spec.",
    question:
      "Could we tune every LED color, blink, and press behavior — and catch what confuses people — before the firmware was written or the hardware existed?",
    found:
      "Walking an iPad around beat iterating in firmware: colors, timing, and messaging tuned live, and testing surfaced cases nobody specced — like an extra-long press for a full hardware reset.",
    next:
      "The tuned spec went straight to firmware, built once with confidence — and the simulator-first pattern is now the template for the next weakest link.",
    visual: (
      <div
        className="relative flex items-end min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: "url(/images/articles/one-button-one-light-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <p className="relative z-10 m-5 text-[11px] tracking-[0.2em] uppercase text-white/85 font-medium">
          Enter the simulator →
        </p>
        <p className="absolute bottom-3 right-4 z-10 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          One button · One LED
        </p>
      </div>
    ),
  },
  {
    href: "/playground/openai-families",
    category: "Concept Prototype",
    title: "ChatGPT Families",
    badge: { label: "Concept · Not affiliated with OpenAI", dotClass: "bg-emerald-500" },
    description:
      "A concept for how OpenAI could bring families closer through everyday AI — a landing page, the feature surfaces, and a working Lovable prototype.",
    question:
      "Could ChatGPT feel like it belongs to a whole family — shared memory, shared moments — instead of one person at a time?",
    found:
      "Framing AI around the family unit unlocked surfaces an individual assistant never suggests — shared memory, carpools, celebrations.",
    next:
      "Published as a build-in-public walkthrough of how I prototype, from first prompt to working demo.",
    visual: (
      <div
        className="relative flex items-center justify-center min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: "url(/openai-families/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay for text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        {/* Subtle warm color cast to feel celebratory */}
        <div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,168,83,0.18) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Hero overlay — OpenAI mark + ChatGPT Families */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
          <svg viewBox="0 0 320 320" width={44} height={44} aria-hidden="true" className="mb-4 drop-shadow-lg">
            <path
              fill="#ffffff"
              d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
            />
          </svg>
          <p className="text-[10px] tracking-[0.22em] uppercase text-white/70 font-medium mb-2">
            ChatGPT
          </p>
          <p
            className="text-3xl md:text-4xl font-extralight text-white tracking-[-0.02em] leading-none"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            Families
          </p>
        </div>

        {/* Bottom corner caption: faint, almost watermark-like */}
        <p className="absolute bottom-3 right-4 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          A celebration, every day
        </p>
      </div>
    ),
  },
  {
    href: "/playground/satiation-lag",
    category: "Product Exploration",
    title: "The Satiation Lag",
    badge: { label: "Behavior change · Interactive", dotClass: "bg-[#d4a853]" },
    description:
      "An interactive look at why we overeat at meals — calories outrun the feeling of fullness, and the gap between them is the product opportunity.",
    question:
      "Why do we overshoot at meals, and where in the timeline could a nudge actually help someone stop on time?",
    found:
      "Making the 20-minute lag visible reframes overeating from a willpower failure to a timing problem — the nudge has to land mid-meal, not after.",
    next:
      "Explore what real-world signal could trigger the nudge — meal timers, eating pace, or a wearable.",
    visual: (
      <div
        className="relative flex items-end min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-neutral-900"
        style={{
          backgroundImage: "url(/satiation-lag/eat.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.6) 100%)",
          }}
        />
        <p className="relative z-10 m-5 text-[11px] tracking-[0.2em] uppercase text-white/85 font-medium">
          Play the meal →
        </p>
      </div>
    ),
  },
  {
    href: "/playground/lightning-bolts",
    category: "Motion Graphics",
    title: "Lightning Bolts",
    badge: { label: "Brand lab · 5 experiments", dotClass: "bg-[#d4a853]" },
    description:
      "The site's logo mark as a motion lab — five experiments in AI-driven animation, section dividers, and brand assets.",
    question:
      "Could I art-direct motion design with prompts alone — no keyframes, no After Effects?",
    found:
      "Yes — the crackle animation shipped site-wide as a reusable component, and the LinkedIn assets are in real use today.",
    next:
      "More animated article covers — each new cover type extends the same pattern.",
    visual: (
      <div className="relative flex items-center justify-center min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-[#0a0a0a]">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 50%, #d4a85318 0%, transparent 70%)",
          }}
        />
        <ElectricBolt boltSize={140} className="w-[140px] h-[140px]" />
        <p className="absolute bottom-3 right-4 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          Live — Electric Crackle
        </p>
      </div>
    ),
  },
  {
    href: "/articles/what-rebuilding-my-website-with-ai-taught-me",
    category: "Living Prototype",
    title: "This Website",
    badge: { label: "Live · You're inside it", dotClass: "bg-emerald-500" },
    description:
      "The site you're on right now. After years of Bluehost and Squarespace templates, rebuilt as a hand-built Next.js product — designed, written, and shipped with AI.",
    question:
      "How far past template builders could I take a personal site with AI — and could the workflow keep it genuinely current?",
    found:
      "The workflow evolved with the tools: Claude Code inside Cursor at first, now a Cowork loop — talk it through, build, review locally, ship. Updating the site went from chore to fun.",
    next:
      "It's never done — every new prototype, article, and experiment lands here first.",
    visual: (
      <div className="relative flex flex-col min-h-[240px] md:min-h-full md:h-full overflow-hidden bg-[#0a0a0a]">
        {/* Faux browser chrome */}
        <div className="relative z-10 flex items-center gap-2 px-4 h-9 bg-[#141414] border-b border-[#222222] shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
          <p className="flex-1 text-center text-[10px] tracking-wide text-[#555555] font-light truncate pr-8">
            www.steveandthedogs.com
          </p>
        </div>
        {/* Mini live hero */}
        <div className="relative flex-1 flex items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 45%, #d4a85312 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
            <p
              className="font-thin text-[#f5f5f5] tracking-[-0.03em] leading-[0.92]"
              style={{ fontSize: "clamp(34px, 4vw, 52px)" }}
            >
              Steve Black
            </p>
            <p className="text-[10px] font-light text-[#888888] tracking-[0.15em] uppercase mt-3">
              Building What Matters
            </p>
            <p className="text-xs italic font-light text-[#d4a853] tracking-wide mt-2">
              Clarity. Creativity. Impact.
            </p>
          </div>
        </div>
        <p className="absolute bottom-3 right-4 z-10 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
          The site, in the site
        </p>
      </div>
    ),
  },
];

// One row of the purpose framework: micro-label + one-line answer
function PurposeRow({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#d4a853] font-light sm:w-28 shrink-0 sm:pt-[3px]">
        {label}
      </p>
      <p className="text-[#888888] text-[13.5px] font-light leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default function PlaygroundPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-16">

      {/* ── Page header ──────────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-6">
            Playground
          </p>
          <h1 className="text-[clamp(52px,8vw,120px)] font-thin tracking-[-0.03em] text-[#f5f5f5] leading-[0.9] mb-8">
            Playground
          </h1>
          <p className="text-lg md:text-xl text-[#888888] font-light leading-relaxed max-w-xl">
            Experiments, prototypes, and things I&apos;m tinkering with.
          </p>
        </div>

        {/* Divider */}
        <AnimatedDivider className="mt-14" />
      </section>

      {/* ── Why I prototype ──────────────────────────────────────────── */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-6">
          Why I Prototype
        </p>
        <div className="max-w-3xl flex flex-col gap-5">
          <p className="text-[#f5f5f5] text-lg md:text-xl font-light leading-relaxed">
            I&apos;ve always believed in prototypes. The fastest way to answer a product
            question isn&apos;t a document or a debate — it&apos;s the smallest build that
            lets you feel the answer. And with AI in the toolkit, that build has never
            been faster or cheaper.
          </p>
          <p className="text-[#888888] text-[15px] font-light leading-relaxed">
            But I don&apos;t prototype for prototyping&apos;s sake. Every build starts with
            a purpose — a question to answer, a hypothesis to test, a technology to size
            up, a friction point to understand. Choosing what to make always carries the
            cost of what you don&apos;t make, so each prototype stays deliberately small,
            gets in front of real people, and earns its next decision: push forward,
            change course, or stop.
          </p>
          <p className="text-[#888888] text-[15px] font-light leading-relaxed">
            That&apos;s why every prototype below shows its question, what I found, and
            what happened next.
          </p>
        </div>
      </section>

      {/* ── Prototype cards ──────────────────────────────────────────── */}
      <section className="px-6 pb-32 max-w-6xl mx-auto flex flex-col gap-12">
        {prototypes.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group block relative overflow-hidden rounded-2xl border border-[#222222] bg-[#0d0d0d] hover:border-[#333333] transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
              {/* Left — copy */}
              <div className="p-8 md:p-10 flex flex-col gap-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-4">
                    <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light">
                      {p.category}
                    </p>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#222] text-[#888888] text-[11px] tracking-wide">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.badge.dotClass}`} />
                      {p.badge.label}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide mb-3">
                    {p.title}
                  </h2>
                  <p className="text-[#888888] text-[15px] font-light leading-relaxed max-w-md">
                    {p.description}
                  </p>
                </div>

                {/* Purpose framework */}
                <div className="flex flex-col gap-3 border-t border-[#1a1a1a] pt-5">
                  <PurposeRow label="The Question" text={p.question} />
                  <PurposeRow label="What I Found" text={p.found} />
                  <PurposeRow label="What's Next" text={p.next} />
                </div>

                <div className="inline-flex items-center gap-2 text-sm text-[#d4a853] font-light tracking-wide mt-auto">
                  Open the page
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>

              {/* Right — visual */}
              {p.visual}
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
}
