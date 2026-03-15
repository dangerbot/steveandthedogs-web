"use client";

import { motion } from "framer-motion";

const BOLT_PATH = "M 13 2 L 3 14 L 12 14 L 11 22 L 21 10 L 12 10 Z";

const SPARKS = [
  { x1: 4,  y1: 11, x2: -1, y2: 10,  delay: 0.0  },
  { x1: 3,  y1: 14, x2: -1, y2: 16,  delay: 0.55 },
  { x1: 5,  y1: 9,  x2: 2,  y2: 7,   delay: 1.05 },
  { x1: 20, y1: 10, x2: 25, y2: 9,   delay: 0.25 },
  { x1: 21, y1: 11, x2: 26, y2: 13,  delay: 0.75 },
  { x1: 20, y1: 8,  x2: 24, y2: 6,   delay: 1.30 },
  { x1: 13, y1: 2,  x2: 11, y2: -3,  delay: 0.40 },
  { x1: 14, y1: 3,  x2: 18, y2: -1,  delay: 0.90 },
  { x1: 11, y1: 22, x2: 8,  y2: 27,  delay: 0.15 },
  { x1: 12, y1: 22, x2: 15, y2: 27,  delay: 0.65 },
  { x1: 10, y1: 13, x2: 6,  y2: 11,  delay: 0.50 },
  { x1: 14, y1: 9,  x2: 18, y2: 7,   delay: 1.10 },
];

interface SparkProps {
  x1: number; y1: number;
  x2: number; y2: number;
  delay: number;
}

function Spark({ x1, y1, x2, y2, delay }: SparkProps) {
  return (
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="#d4a853"
      strokeWidth="0.7"
      strokeLinecap="round"
      style={{ filter: "drop-shadow(0 0 2px #d4a853)" }}
      animate={{ opacity: [0, 0, 1, 0.6, 0, 0, 0] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        delay,
        times: [0, 0.05, 0.12, 0.18, 0.25, 0.6, 1],
        ease: "easeOut",
      }}
    />
  );
}

interface ElectricBoltProps {
  /** Size of the SVG in px. Default: 100 */
  boltSize?: number;
  /**
   * Extra classes on the outer container div.
   * Use this to set the aspect ratio, background, border-radius, etc.
   * e.g. "w-full aspect-[16/9] bg-[#0d0d0d]"
   */
  className?: string;
}

export default function ElectricBolt({
  boltSize = 100,
  className = "",
}: ElectricBoltProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Subtle amber ambient glow centred behind the bolt */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, #d4a85314 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 24 24"
        width={boltSize}
        height={boltSize}
        style={{ overflow: "visible", position: "relative", zIndex: 1 }}
        aria-label="Lightning bolt animation"
      >
        {/* Main bolt — flickers to near-white on each crackle */}
        <motion.path
          d={BOLT_PATH}
          animate={{
            fill: ["#d4a853", "#d4a853", "#ffe8a0", "#d4a853", "#d4a853"],
            filter: [
              "drop-shadow(0 0 4px #d4a85350)",
              "drop-shadow(0 0 4px #d4a85350)",
              "drop-shadow(0 0 18px #d4a853ff) drop-shadow(0 0 8px #fff5)",
              "drop-shadow(0 0 8px #d4a85370)",
              "drop-shadow(0 0 4px #d4a85350)",
            ],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            times: [0, 0.25, 0.32, 0.40, 1],
            ease: "easeOut",
          }}
        />

        {/* Spark lines radiating outward from bolt edges */}
        {SPARKS.map((s, i) => (
          <Spark key={i} {...s} />
        ))}

        {/* Dot flashes at bolt tip and base */}
        <motion.circle cx={13} cy={1} r={0.8} fill="#ffe8a0"
          animate={{ opacity: [0, 0, 1, 0, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: 0.30, times: [0, 0.28, 0.33, 0.38, 1] }}
        />
        <motion.circle cx={11} cy={23} r={0.8} fill="#ffe8a0"
          animate={{ opacity: [0, 0, 1, 0, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: 0.80, times: [0, 0.28, 0.33, 0.38, 1] }}
        />
      </svg>
    </div>
  );
}
