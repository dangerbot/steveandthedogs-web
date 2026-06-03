/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

type Shot = { src: string; alt: string };

type Product = {
  company: string;
  years: string;
  name: string;
  tagline: string;
  shots: Shot[];
  did: string;
  role: string;
  stat: string;
  statBody: string;
};

const products: Product[] = [
  {
    company: "FluidLogic",
    years: "2024 – 2026",
    name: "FluidLogic",
    tagline:
      "Intelligent hydration for high-performance environments — motorsports, military, and the outdoors.",
    shots: [
      { src: "/products/fluidlogic-store-0.webp", alt: "FluidLogic — the power of intelligent hydration" },
      { src: "/products/fluidlogic-store-1.webp", alt: "FluidLogic performance tracking" },
      { src: "/products/fluidlogic-store-2.webp", alt: "FluidLogic post-activity feedback" },
      { src: "/products/fluidlogic-store-3.webp", alt: "FluidLogic activity history" },
      { src: "/products/fluidlogic-pack.webp", alt: "FluidLogic connected hydration pack paired with the app" },
    ],
    did: "FluidLogic paired with a BLE-connected hydration device to turn raw water intake into personalized, in-the-moment guidance — how much to drink and when, down to the gram — so athletes stayed optimally hydrated through the moments that matter instead of just chugging water and crashing later.",
    role: "First PM hire. I built the consumer app from a blank canvas — no roadmap, backlog, or PM precedent. I owned discovery, the hardware-software dependency map, connected-device onboarding (first-time pairing, firmware updates, offline-first sync), and the shipping cadence that became the team's operating system.",
    stat: "90 days",
    statBody:
      "Shipped 0-to-1 in 90 days to hit the locked hardware launch, starting from zero. Then cut connected-device onboarding drop-off 20% and raised retention 15% with cadence-based personalization.",
  },
  {
    company: "All Points North",
    years: "2023 – 2024",
    name: "All Points North",
    tagline:
      "A companion app for a multi-state behavioral health and substance-abuse practice.",
    shots: [
      { src: "/products/apn-recommendations.png", alt: "APN personalized recommendations based on intake responses" },
      { src: "/products/apn-services.png", alt: "APN virtual services, browse care categories" },
      { src: "/products/apn-therapy.png", alt: "APN individual therapy details and scheduling" },
    ],
    did: "It kept clients connected to care for life. After leaving high-touch treatment, alumni could reach their therapist, take behavioral-health assessments, log how they were doing, and find help the moment they needed it — without ever hunting for where to go. The goal was a daily, trusted relationship, not a tool you only opened in crisis.",
    role: "Led product. I built an AI-powered intake assessment that personalized care recommendations from first contact, designed real-time AI scripts that guided intake specialists through conversations with clients in crisis, and connected the client app to the clinical systems under HIPAA.",
    stat: "+16%",
    statBody:
      "AI-powered intake lifted lead conversion 16% and engagement 25%. Real-time intake scripts helped push client satisfaction to 95%.",
  },
  {
    company: "Bowflex (Nautilus)",
    years: "2021 – 2023",
    name: "JRNY",
    tagline: "Connected-fitness subscription across mobile, web, and Bowflex hardware.",
    shots: [
      { src: "/products/jrny-1.png", alt: "JRNY live workout with real-time coaching metrics on mobile" },
      { src: "/products/jrny-2.png", alt: "JRNY adaptive programs library on mobile" },
      { src: "/products/jrny-3.png", alt: "JRNY workout video library on mobile" },
      { src: "/products/jrny-4.png", alt: "JRNY membership and free trial on mobile" },
      { src: "/products/jrny-hero.png", alt: "JRNY, the adaptive fitness membership that evolves with you" },
    ],
    did: "JRNY delivered Peloton-style coaching on Bowflex equipment, plus a mobile-only plan built to reach the huge strength-training audience that didn't own a bike or treadmill. Adaptive workouts, real-time coaching metrics, and streaming — all tuned to keep people subscribed and coming back.",
    role: "Owned product strategy. I managed 3 PMs and a cross-functional team of 15. I drove subscription pricing and lifecycle, launched the mobile-only plan, integrated Apple Health, Google Fit, Strava, and Fitbit, and made the hard call to prioritize stability and trust over feature velocity.",
    stat: "+21%",
    statBody:
      "Killed the mandatory fitness assessment blocking new users from their first workout — first-session workout starts rose 21%. Subscription revenue grew 21% and 12-week retention 29%.",
  },
  {
    company: "Nike",
    years: "2019 – 2021",
    name: "Nike Training Club",
    tagline:
      "One of the world's most-used fitness apps — turned from a workout utility into a daily habit.",
    shots: [
      { src: "/products/ntc-home.png", alt: "Nike Training Club Home tab, daily engagement content" },
      { src: "/products/ntc-programs.png", alt: "Nike Training Club programs" },
      { src: "/products/ntc-workouts.png", alt: "Nike Training Club workouts library" },
      { src: "/products/ntc-spicy.png", alt: "Nike Training Club in-app achievement moment" },
    ],
    did: "NTC gave millions of people guided workouts. The work was making it matter on the days you don't train — valuable in the other 23 hours — through personalization, fresh content, and daily engagement loops, so the app became part of someone's routine instead of a thing they opened twice a week.",
    role: "Owned daily engagement, subscription conversion, and retention. I shipped AI-powered workout recommendations across millions of users, redesigned the workouts tab for daily habit, and built the free-subscription acquisition playbook that scaled through the pandemic.",
    stat: "2x",
    statBody:
      "Asked what makes the app valuable in the \"other 23 hours\" and redesigned for daily habit — doubling daily engagement and driving 40% more workout starts. A free-subscription promo drove 270% user growth.",
  },
  {
    company: "Adidas",
    years: "2014 – 2019",
    name: "AllDay",
    tagline:
      "Adidas's subscription wellness app — and the most direct ancestor of the connected health work happening now.",
    shots: [
      { src: "/products/allday-collage.png", alt: "AllDay app screen collage" },
      { src: "/products/allday-nutrition.png", alt: "AllDay nutrition screen" },
      { src: "/products/allday-new.png", alt: "AllDay the new experience" },
    ],
    did: "AllDay connected five interrelated pillars of health — nutrition, sleep, activity, recovery, and mindfulness — into one wellness story. People ran small self-experiments (try more greens for a week, see what it does) and watched the impact through one simple, normalized metric — active minutes — so they could feel how small changes compounded across their whole wellbeing. We were years ahead of our time.",
    role: "Lead PM in Adidas Innovation. I took AllDay from a blank whiteboard to launch alongside SmartBall, working with wellness coaches and behavioral psychologists. I defined the active-minutes metric, the self-experiment model, and the hardware-software-content loop across 14 markets.",
    stat: "+44%",
    statBody:
      "Drove daily engagement 44% through the hardware-software-content loop. Members who completed a structured program retained at 2.3x the rate of one-off users, which reshaped how we surfaced programs.",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" as const },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-16">

      {/* ── Page header ──────────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-6">
          Selected Work
        </p>
        <h1 className="text-[clamp(52px,8vw,120px)] font-thin tracking-[-0.03em] text-[#f5f5f5] leading-[0.9] mb-8">
          Products
        </h1>
        <p className="text-lg md:text-xl text-[#888888] font-light leading-relaxed max-w-xl">
          A quick tour of mobile products I&apos;ve built across FluidLogic, All Points North,
          Bowflex, Nike, and Adidas. Different categories, same job: how do you get someone to
          come back tomorrow — not once, but as a habit?
        </p>
        <div className="mt-14 h-px bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent" />
      </section>

      {/* ── Product sections ─────────────────────────────────────────── */}
      {products.map((p, idx) => (
        <section key={p.name} className="px-6 pb-24 max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-3">
              {p.company} · {p.years}
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight text-[#f5f5f5] tracking-tight leading-tight mb-3">
              {p.name}
            </h2>
            <p className="text-[#888888] text-base md:text-lg font-light leading-relaxed max-w-2xl">
              {p.tagline}
            </p>
          </motion.div>

          {/* Screenshot gallery */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-4 items-start mb-10">
            {p.shots.map((shot) => (
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="h-auto max-h-[440px] w-auto max-w-full rounded-2xl border border-[#222222] bg-[#141414]"
              />
            ))}
          </motion.div>

          {/* Copy: what it did + my role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
            <motion.div {...fadeUp(0.1)}>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888]/60 font-light mb-3">
                What it did
              </p>
              <p className="text-[#cfcfcf] text-[15px] md:text-base font-light leading-relaxed">
                {p.did}
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <p className="text-xs tracking-[0.2em] uppercase text-[#888888]/60 font-light mb-3">
                My role
              </p>
              <p className="text-[#cfcfcf] text-[15px] md:text-base font-light leading-relaxed">
                {p.role}
              </p>
            </motion.div>
          </div>

          {/* Proud-of metric callout */}
          <motion.div
            {...fadeUp(0.15)}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 bg-[#141414] border border-[#222222] border-l-2 border-l-[#d4a853] rounded-r-2xl rounded-l-md px-7 py-6"
          >
            <span className="text-4xl md:text-5xl font-bold text-[#d4a853] leading-none shrink-0">
              {p.stat}
            </span>
            <p className="text-[#cfcfcf] text-[15px] md:text-base font-light leading-relaxed">
              {p.statBody}
            </p>
          </motion.div>

          {/* Divider between products (skip after last) */}
          {idx < products.length - 1 && (
            <div className="mt-24 h-px bg-gradient-to-r from-[#d4a853]/40 via-[#222] to-transparent" />
          )}
        </section>
      ))}

    </div>
  );
}
