"use client";

import { motion } from "framer-motion";
import ElectricBolt from "@/components/ElectricBolt";

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
// Playground Page
// ─────────────────────────────────────────────
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
        <div className="mt-14 h-px bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent" />
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

    </div>
  );
}
