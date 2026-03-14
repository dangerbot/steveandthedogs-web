"use client";

import { motion } from "framer-motion";

const values = [
  {
    id: "clarity",
    label: "Clarity",
    description:
      "Cutting through the noise to set direction that teams can rally around — so everyone knows what matters and why.",
    icon: (
      // Hand-drawn style eye / lens — represents seeing clearly
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer eye shape */}
        <path
          d="M8 36 C16 20, 56 20, 64 36 C56 52, 16 52, 8 36 Z"
          stroke="#f5f5f5"
          strokeWidth="1.8"
          fill="none"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="0"
        />
        {/* Iris */}
        <circle cx="36" cy="36" r="9" stroke="#f5f5f5" strokeWidth="1.8" fill="none" />
        {/* Pupil dot */}
        <circle cx="36" cy="36" r="2.5" fill="#d4a853" />
        {/* Lash-like accent strokes */}
        <path d="M21 28 L18 23" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M36 22 L36 17" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M51 28 L54 23" stroke="#d4a853" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "creativity",
    label: "Creativity",
    description:
      "Finding the unexpected angle — the idea that makes a product genuinely memorable and worth talking about.",
    icon: (
      // Hand-drawn style spark / lightbulb — represents creative energy
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Bulb body */}
        <path
          d="M36 14 C25 14, 18 22, 18 31 C18 39, 23 44, 28 47 L28 52 L44 52 L44 47 C49 44, 54 39, 54 31 C54 22, 47 14, 36 14 Z"
          stroke="#f5f5f5"
          strokeWidth="1.8"
          fill="none"
        />
        {/* Base lines */}
        <path d="M29 55 L43 55" stroke="#f5f5f5" strokeWidth="1.8" />
        <path d="M31 58 L41 58" stroke="#f5f5f5" strokeWidth="1.8" />
        {/* Inner spark / filament */}
        <path d="M36 22 L33 32 L38 32 L34 42" stroke="#d4a853" strokeWidth="1.8" />
        {/* Sparkle accents */}
        <path d="M12 18 L15 21" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M8 28 L12 28" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M60 18 L57 21" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M64 28 L60 28" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M36 8 L36 12" stroke="#d4a853" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    id: "impact",
    label: "Impact",
    description:
      "Building things that move the needle and genuinely improve people's lives — not just ship features, but create real change.",
    icon: (
      // Hand-drawn style ripple / target — represents meaningful impact
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer ripple */}
        <circle cx="36" cy="36" r="28" stroke="#f5f5f5" strokeWidth="1.4" strokeDasharray="3 4" />
        {/* Middle ripple */}
        <circle cx="36" cy="36" r="19" stroke="#f5f5f5" strokeWidth="1.6" />
        {/* Inner ring */}
        <circle cx="36" cy="36" r="10" stroke="#f5f5f5" strokeWidth="1.8" />
        {/* Center dot — accent */}
        <circle cx="36" cy="36" r="4" fill="#d4a853" />
        {/* Arrow coming in from top-right */}
        <path d="M52 20 L38 34" stroke="#d4a853" strokeWidth="1.8" />
        <path d="M52 20 L45 21 M52 20 L51 27" stroke="#d4a853" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function ValuesSection() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center text-xs tracking-[0.3em] uppercase text-[#888888] font-light mb-24"
      >
        What I Stand For
      </motion.p>

      {/* Values list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-lg mx-auto flex flex-col items-center gap-24"
      >
        {values.map((value, index) => (
          <motion.div
            key={value.id}
            variants={itemVariants}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon */}
            <div className="mb-7 opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform">
              {value.icon}
            </div>

            {/* Value number — subtle */}
            <span className="text-xs tracking-[0.3em] text-[#888888]/50 uppercase font-light mb-3">
              0{index + 1}
            </span>

            {/* Value name */}
            <h3 className="text-3xl md:text-4xl font-light text-[#f5f5f5] tracking-tight mb-5">
              {value.label}
            </h3>

            {/* Amber divider line */}
            <div className="w-8 h-px bg-[#d4a853] mb-5 group-hover:w-16 transition-all duration-500" />

            {/* Description */}
            <p className="text-base md:text-lg italic font-light text-[#888888] leading-relaxed max-w-sm">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
