"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
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

    </div>
  );
}
