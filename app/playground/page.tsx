"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ElectricBolt from "@/components/ElectricBolt";
import AnimatedDivider from "@/components/AnimatedDivider";
import BoltDivider from "@/components/BoltDivider";

// Replays animations when the user scrolls, with a cooldown long enough
// for all animations to finish before a new replay can trigger.
// cooldownMs (2500) > longest animation (Shimmer at 0.9s delay + 1.4s = 2.3s).
function useScrollReplay(cooldownMs = 2500) {
  const [replayKey, setReplayKey] = useState(0);
  const { scrollY } = useScroll();
  const lastReplayRef = useRef<number>(-cooldownMs); // allow immediate first trigger

  useMotionValueEvent(scrollY, "change", () => {
    const now = Date.now();
    if (now - lastReplayRef.current >= cooldownMs) {
      lastReplayRef.current = now;
      setReplayKey((k) => k + 1);
    }
  });

  return replayKey;
}

// ─────────────────────────────────────────────
// Shared bolt constants (used by Variations 1 & 2)
// ─────────────────────────────────────────────
const BOLT_PATH = "M 13 2 L 3 14 L 12 14 L 11 22 L 21 10 L 12 10 Z";

// ─────────────────────────────────────────────
// Variation 1 — Pulse Glow
// ─────────────────────────────────────────────
function BoltPulseGlow() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="h-[220px] flex items-center justify-center">
        <motion.svg
          viewBox="0 0 24 24"
          width={200}
          height={200}
          style={{ overflow: "visible" }}
          animate={{
            filter: [
              "drop-shadow(0 0 2px #d4a85330) drop-shadow(0 0 6px #d4a85318)",
              "drop-shadow(0 0 10px #d4a853bb) drop-shadow(0 0 22px #d4a85366) drop-shadow(0 0 42px #d4a85330)",
              "drop-shadow(0 0 2px #d4a85330) drop-shadow(0 0 6px #d4a85318)",
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d={BOLT_PATH} fill="#d4a853" />
        </motion.svg>
      </div>
      <div className="text-center">
        <p className="text-[#888888] text-xs tracking-widest uppercase mb-1">Variation 1</p>
        <p className="text-[#f5f5f5] text-base font-light tracking-wide">Pulse Glow</p>
        <p className="text-[#555555] text-xs mt-2 max-w-[160px] leading-relaxed">
          Breathes in and out with an amber glow on a continuous loop.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Variation 2 — Draw On
// ─────────────────────────────────────────────
function BoltDrawOn() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="h-[220px] flex items-center justify-center">
        <svg viewBox="0 0 24 24" width={200} height={200} style={{ overflow: "visible" }}>
          <motion.path
            d={BOLT_PATH}
            fill="#d4a853"
            animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times: [0, 0.40, 0.55, 0.65, 0.82, 1],
              ease: "easeOut",
            }}
          />
          <motion.path
            d={BOLT_PATH}
            fill="none"
            stroke="#d4a853"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0 0 3px #d4a853aa)" }}
            animate={{
              pathLength: [0, 1, 1, 1, 1, 0],
              opacity:    [1, 1, 1, 0, 0, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times: [0, 0.40, 0.55, 0.60, 0.82, 1],
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-[#888888] text-xs tracking-widest uppercase mb-1">Variation 2</p>
        <p className="text-[#f5f5f5] text-base font-light tracking-wide">Draw On</p>
        <p className="text-[#555555] text-xs mt-2 max-w-[160px] leading-relaxed">
          Outline traces itself, then fills with amber. Loops with a pause.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Variation 3 — Electric Crackle (uses shared component)
// ─────────────────────────────────────────────
function BoltElectricCrackle() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="h-[220px] flex items-center justify-center">
        <ElectricBolt boltSize={200} className="w-[200px] h-[200px]" />
      </div>
      <div className="text-center">
        <p className="text-[#888888] text-xs tracking-widest uppercase mb-1">Variation 3</p>
        <p className="text-[#f5f5f5] text-base font-light tracking-wide">Electric Crackle</p>
        <p className="text-[#555555] text-xs mt-2 max-w-[160px] leading-relaxed">
          Sparks flicker from the bolt edges at staggered random intervals.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Experiment 05 — LinkedIn Banner (static)
// ─────────────────────────────────────────────

const STATIC_BOLT_PATH = "M 13 2 L 3 14 L 12 14 L 11 22 L 21 10 L 12 10 Z";

// Static amber bolt with CSS glow — no animation
function StaticBolt({ size = 80 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      style={{
        filter:
          "drop-shadow(0 0 8px #d4a853bb) drop-shadow(0 0 20px #d4a85355)",
        flexShrink: 0,
      }}
    >
      <path d={STATIC_BOLT_PATH} fill="#d4a853" />
    </svg>
  );
}

const BANNER_BASE =
  "w-full rounded-xl overflow-hidden border border-[#222222]";
const BANNER_INNER =
  "relative w-full h-full bg-[#0a0a0a] flex";

// Shared ambient glow + decorative lines
function BannerChrome() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, #d4a85318 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a85340] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a85340] to-transparent" />
    </>
  );
}

// Variation A — Centered stack: bolt above, tagline below
function LinkedInBannerA() {
  return (
    <div>
      <div className={BANNER_BASE} style={{ aspectRatio: "1584 / 396" }}>
        <div className={`${BANNER_INNER} items-center justify-center`}>
          <BannerChrome />
          <div className="relative z-10 flex flex-col items-center gap-[3%]">
            <StaticBolt size={90} />
            <p
              className="text-[#d4a853] font-light italic tracking-[0.22em]"
              style={{ fontSize: "clamp(10px, 2vw, 26px)" }}
            >
              Building What Matters
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs tracking-widest uppercase text-[#555555] font-light">
        Variation A — Centered Stack
      </p>
    </div>
  );
}

// Variation B — Horizontal split: bolt left, tagline right
function LinkedInBannerB() {
  return (
    <div>
      <div className={BANNER_BASE} style={{ aspectRatio: "1584 / 396" }}>
        <div className={`${BANNER_INNER} items-center`}>
          <BannerChrome />
          {/* Left — bolt */}
          <div className="relative z-10 flex items-center justify-center w-[30%] h-full">
            <StaticBolt size={100} />
          </div>
          {/* Divider */}
          <div className="relative z-10 w-px self-stretch my-[15%] bg-[#d4a85330]" />
          {/* Right — tagline */}
          <div className="relative z-10 flex items-center w-[70%] pl-[4%]">
            <p
              className="text-[#d4a853] font-extralight italic tracking-[0.18em] leading-tight"
              style={{ fontSize: "clamp(12px, 2.8vw, 38px)" }}
            >
              Building What Matters
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs tracking-widest uppercase text-[#555555] font-light">
        Variation B — Horizontal Split
      </p>
    </div>
  );
}

// Variation C — Bolt as hero: bolt very large, tagline small beneath
function LinkedInBannerC() {
  return (
    <div>
      <div className={BANNER_BASE} style={{ aspectRatio: "1584 / 396" }}>
        <div className={`${BANNER_INNER} items-center justify-center`}>
          <BannerChrome />
          {/* Extra glow behind the large bolt */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 30% 90% at 50% 50%, #d4a85328 0%, transparent 65%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-[2%]">
            <StaticBolt size={140} />
            <p
              className="text-[#d4a853] font-light italic tracking-[0.3em] uppercase"
              style={{ fontSize: "clamp(8px, 1.3vw, 17px)" }}
            >
              Building What Matters
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs tracking-widest uppercase text-[#555555] font-light">
        Variation C — Bolt as Hero
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Experiment 04 — LinkedIn Thumbnail
// ─────────────────────────────────────────────

function LinkedInThumbnail() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-[#222222]"
      style={{ aspectRatio: "1200 / 627" }}
    >
      {/* Card — matches LinkedIn 1200×627 ratio */}
      <div className="relative w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center gap-0">

        {/* Ambient glow layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 42%, #d4a85322 0%, transparent 70%)",
          }}
        />

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a85330] to-transparent" />
        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a85330] to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-[2.5%]">

          {/* Lightning bolt */}
          <ElectricBolt boltSize={120} className="w-[120px] h-[120px]" />

          {/* Name */}
          <h1
            className="font-thin text-[#f5f5f5] tracking-[0.18em] uppercase leading-none"
            style={{ fontSize: "clamp(28px, 6vw, 80px)" }}
          >
            Steve Black
          </h1>

          {/* Tagline */}
          <p
            className="text-[#d4a853] font-light italic tracking-widest"
            style={{ fontSize: "clamp(11px, 1.6vw, 22px)" }}
          >
            Building What Matters
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Experiment 03 — Bolt Light-Up Divider
// ─────────────────────────────────────────────

function BoltLightUpDivider() {
  return (
    <div className="border border-[#1e1e1e] rounded-2xl p-8 md:p-10 bg-[#0d0d0d]">
      {/* Mock heading */}
      <div className="mb-6">
        <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-3">
          Chapter One
        </p>
        <h3 className="text-xl md:text-2xl font-light text-[#f5f5f5] tracking-wide">
          Building What Matters
        </h3>
      </div>

      {/* The animated divider — shared component */}
      <BoltDivider />

      {/* Mock body text */}
      <div className="mt-6 flex flex-col gap-2.5">
        <div className="h-2 rounded-full bg-[#1a1a1a] w-full" />
        <div className="h-2 rounded-full bg-[#1a1a1a] w-5/6" />
        <div className="h-2 rounded-full bg-[#1a1a1a] w-4/6" />
      </div>

      {/* Label */}
      <div className="mt-8 pt-5 border-t border-[#1a1a1a] flex items-center gap-3">
        <div className="w-4 h-px bg-[#d4a853]" />
        <p className="text-[#555555] text-xs tracking-widest uppercase">Experiment 03 — Bolt Light-Up</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Experiment 02 — Animated Divider
// ─────────────────────────────────────────────

// Wraps each variation in a realistic mock section so you can see
// how the divider reads in actual page context
function MockSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border border-[#1e1e1e] rounded-2xl p-8 md:p-10 bg-[#0d0d0d]">
      {/* Mock heading */}
      <div className="mb-6">
        <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-3">
          Chapter One
        </p>
        <h3 className="text-xl md:text-2xl font-light text-[#f5f5f5] tracking-wide">
          Building What Matters
        </h3>
      </div>

      {/* The animated divider lives here */}
      {children}

      {/* Mock body text (placeholder bars) */}
      <div className="mt-6 flex flex-col gap-2.5">
        <div className="h-2 rounded-full bg-[#1a1a1a] w-full" />
        <div className="h-2 rounded-full bg-[#1a1a1a] w-5/6" />
        <div className="h-2 rounded-full bg-[#1a1a1a] w-4/6" />
      </div>

      {/* Variation label */}
      <div className="mt-8 pt-5 border-t border-[#1a1a1a] flex items-center gap-3">
        <div className="w-4 h-px bg-[#d4a853]" />
        <p className="text-[#555555] text-xs tracking-widest uppercase">{label}</p>
      </div>
    </div>
  );
}

// Variation A — "Draw On"
// Grows left-to-right on a scaleX transform when it scrolls into view.
function DividerDrawOn() {
  return (
    <MockSection label="Variation A — Draw On">
      <motion.div
        className="h-px bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, margin: "-40px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
    </MockSection>
  );
}

// Variation B — "Bolt Flash"
// Draws on fast, then a bright white spark shoots left-to-right across it.
function DividerBoltFlash() {
  return (
    <MockSection label="Variation B — Bolt Flash">
      <div className="relative h-px overflow-hidden">
        {/* Base line draws quickly */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.25, ease: [0.2, 0, 0.6, 1] }}
          style={{ transformOrigin: "left" }}
        />
        {/* Spark travels along the line */}
        <motion.div
          className="absolute top-0 h-px w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          initial={{ x: "-10%" }}
          whileInView={{ x: "110%" }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.25, ease: "easeIn" }}
        />
      </div>
    </MockSection>
  );
}

// Variation C — "Shimmer"
// Draws on scroll, then a soft amber glow continuously sweeps across on a loop.
function DividerShimmer() {
  return (
    <MockSection label="Variation C — Shimmer">
      <div className="relative h-px overflow-hidden">
        {/* Base line */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
        {/* Single-pass shimmer sweep — replays on remount */}
        <motion.div
          className="absolute top-0 h-px w-32 bg-gradient-to-r from-transparent via-[#d4a853]/60 to-transparent"
          initial={{ x: "-10%" }}
          whileInView={{ x: "110%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeInOut" }}
        />
      </div>
    </MockSection>
  );
}

// ─────────────────────────────────────────────
// Playground Page
// ─────────────────────────────────────────────
export default function PlaygroundPage() {
  const replayKey = useScrollReplay();

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

      {/* ── Featured Prototype: ChatGPT Families ─────────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-3">
            Featured Prototype
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            ChatGPT Families
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            A concept for how OpenAI could bring families closer through everyday AI. Landing page,
            prototype, and the thinking behind it.
          </p>
        </div>

        <Link
          href="/playground/openai-families"
          className="group block relative overflow-hidden rounded-2xl border border-[#222222] bg-[#0d0d0d] hover:border-[#333333] transition-all"
        >
          {/* Card content */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
            {/* Left — copy */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#222] text-[#888888] text-[11px] tracking-wide mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Concept · Not affiliated with OpenAI
                </div>
                <h3 className="text-2xl md:text-3xl font-extralight text-[#f5f5f5] tracking-tight leading-tight mb-4">
                  AI that brings the people you love a little closer.
                </h3>
                <p className="text-[#888888] text-[15px] font-light leading-relaxed max-w-md">
                  Built for the dinners, the carpools, the holidays, and the everyday in between.
                  See the landing page, the feature surfaces, and a working Lovable prototype.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-[#d4a853] font-light tracking-wide">
                Open the page
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </div>

            {/* Right — celebration photo with overlay hero treatment */}
            <div
              className="relative flex items-center justify-center min-h-[260px] md:min-h-[320px] overflow-hidden bg-neutral-900"
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
                <svg viewBox="0 0 320 320" width={48} height={48} aria-hidden="true" className="mb-4 drop-shadow-lg">
                  <path
                    fill="#ffffff"
                    d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
                  />
                </svg>
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/70 font-medium mb-2">
                  ChatGPT
                </p>
                <h4
                  className="text-3xl md:text-4xl font-extralight text-white tracking-[-0.02em] leading-none"
                  style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
                >
                  Families
                </h4>
                <div className="mt-5 flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-[10px] tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Concept
                </div>
              </div>

              {/* Bottom corner caption: faint, almost watermark-like */}
              <p className="absolute bottom-3 right-4 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
                A celebration, every day
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Experiment: Lightning Bolt Animations ────────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#555555] font-light mb-3">
            Experiment 01
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            Lightning Bolt Animations
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            Three variations of the site&apos;s logo mark — exploring different animation personalities.
          </p>
        </div>

        {/* Three variations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          <BoltPulseGlow />
          <BoltDrawOn />
          <BoltElectricCrackle />
        </div>
      </section>

      {/* ── Experiment 03: Bolt Light-Up Divider ─────────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#555555] font-light mb-3">
            Experiment 03
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            Bolt Light-Up Divider
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            Three bolts flicker on sequentially like lightbulbs, hold, then go dark and loop.
          </p>
        </div>

        <BoltLightUpDivider />
      </section>

      {/* ── Experiment 04: LinkedIn Thumbnail ───────────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#555555] font-light mb-3">
            Experiment 04
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            LinkedIn Thumbnail
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            1200 × 627 — screenshot this card for LinkedIn post images. Zoom out (Cmd –) for full resolution.
          </p>
        </div>

        <LinkedInThumbnail />
      </section>

      {/* ── Experiment 02: Animated Divider ──────────────────────────── */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#555555] font-light mb-3">
            Experiment 02
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            Animated Divider
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            Three motion treatments for the amber gradient rule used across the site. Each replays when you start scrolling again.
          </p>
        </div>

        {/* Three variations stacked — dividers are horizontal so they need full width */}
        <div className="flex flex-col gap-6">
          <DividerDrawOn   key={`draw-${replayKey}`} />
          <DividerBoltFlash key={`bolt-${replayKey}`} />
          <DividerShimmer  key={`shimmer-${replayKey}`} />
        </div>
      </section>

      {/* ── Experiment 05: LinkedIn Banner ───────────────────────────── */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#555555] font-light mb-3">
            Experiment 05
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            LinkedIn Banner
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            1584 × 396 — three layout variations. Screenshot whichever you prefer. Zoom out (Cmd –) for maximum resolution.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <LinkedInBannerA />
          <LinkedInBannerB />
          <LinkedInBannerC />
        </div>
      </section>

    </div>
  );
}
