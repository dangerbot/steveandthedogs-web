"use client";

import { motion } from "framer-motion";

const BOLT_SVG_PATH = "M11 1L2 16H9L7 27L16 12H9L11 1Z";
const LOOP = 7; // total loop duration in seconds

const t = (s: number) => s / LOOP;

// One bolt that flickers then snaps on at `onAt` seconds within the loop.
function LightUpBolt({ onAt }: { onAt: number }) {
  const flickerDuration = 0.38;
  const f = onAt - flickerDuration;
  const flickerStep = flickerDuration / 4;

  const colorKeyframes = [
    "#1a1a1a",
    "#1a1a1a",
    "#3a2e14",
    "#0d0d0d",
    "#5a4520",
    "#0d0d0d",
    "#d4a853",
    "#d4a853",
    "#d4a853",
    "#1a1a1a",
    "#1a1a1a",
    "#1a1a1a",
  ];

  const glowKeyframes = [
    "drop-shadow(0 0 0px transparent)",
    "drop-shadow(0 0 0px transparent)",
    "drop-shadow(0 0 2px #3a2e1440)",
    "drop-shadow(0 0 0px transparent)",
    "drop-shadow(0 0 3px #5a452040)",
    "drop-shadow(0 0 0px transparent)",
    "drop-shadow(0 0 8px #d4a853bb) drop-shadow(0 0 18px #d4a85344)",
    "drop-shadow(0 0 10px #d4a853cc) drop-shadow(0 0 22px #d4a85355)",
    "drop-shadow(0 0 8px #d4a853bb) drop-shadow(0 0 18px #d4a85344)",
    "drop-shadow(0 0 0px transparent)",
    "drop-shadow(0 0 0px transparent)",
    "drop-shadow(0 0 0px transparent)",
  ];

  const times = [
    t(0),
    t(f),
    t(f + flickerStep * 0.8),
    t(f + flickerStep * 1.5),
    t(f + flickerStep * 2.5),
    t(f + flickerStep * 3.3),
    t(onAt),
    t(2.5),
    t(3.8),
    t(4.2),
    t(4.8),
    t(LOOP),
  ];

  return (
    <motion.svg
      width="18"
      height="28"
      viewBox="0 0 18 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      animate={{
        color: colorKeyframes,
        filter: glowKeyframes,
      }}
      transition={{
        duration: LOOP,
        repeat: Infinity,
        times,
        ease: "linear",
      }}
    >
      <path
        d={BOLT_SVG_PATH}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.svg>
  );
}

export default function BoltDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0 ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-[#222222]" />
      <div className="flex items-center gap-3 px-6">
        <LightUpBolt onAt={0.7} />
        <LightUpBolt onAt={1.4} />
        <LightUpBolt onAt={2.1} />
      </div>
      <div className="flex-1 h-px bg-[#222222]" />
    </div>
  );
}
