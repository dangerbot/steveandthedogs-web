"use client";

import { motion } from "framer-motion";

const values = [
  {
    id: "clarity",
    label: "Clarity",
    description:
      "Cutting through the noise to set direction that teams can rally around — so everyone knows what matters and why.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M8 36 C16 20, 56 20, 64 36 C56 52, 16 52, 8 36 Z"
          stroke="#f5f5f5"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="36" cy="36" r="9" stroke="#f5f5f5" strokeWidth="1.8" fill="none" />
        <circle cx="36" cy="36" r="2.5" fill="#d4a853" />
        <path d="M21 28 L18 23" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M36 22 L36 17" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M51 28 L54 23" stroke="#d4a853" strokeWidth="1.4" />
      </svg>
    ),
    // icon animation: slow continuous rotation on hover
    iconHover: { rotate: 15, scale: 1.1 },
  },
  {
    id: "creativity",
    label: "Creativity",
    description:
      "Finding the unexpected angle — the idea that makes a product genuinely memorable and worth talking about.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M36 14 C25 14, 18 22, 18 31 C18 39, 23 44, 28 47 L28 52 L44 52 L44 47 C49 44, 54 39, 54 31 C54 22, 47 14, 36 14 Z"
          stroke="#f5f5f5"
          strokeWidth="1.8"
          fill="none"
        />
        <path d="M29 55 L43 55" stroke="#f5f5f5" strokeWidth="1.8" />
        <path d="M31 58 L41 58" stroke="#f5f5f5" strokeWidth="1.8" />
        <path d="M36 22 L33 32 L38 32 L34 42" stroke="#d4a853" strokeWidth="1.8" />
        <path d="M12 18 L15 21" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M8 28 L12 28" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M60 18 L57 21" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M64 28 L60 28" stroke="#d4a853" strokeWidth="1.4" />
        <path d="M36 8 L36 12" stroke="#d4a853" strokeWidth="1.4" />
      </svg>
    ),
    // icon animation: pulse scale on hover
    iconHover: { scale: 1.15, y: -4 },
  },
  {
    id: "impact",
    label: "Impact",
    description:
      "Building things that move the needle and genuinely improve people's lives — not just ship features, but create real change.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="36" cy="36" r="28" stroke="#f5f5f5" strokeWidth="1.4" strokeDasharray="3 4" />
        <circle cx="36" cy="36" r="19" stroke="#f5f5f5" strokeWidth="1.6" />
        <circle cx="36" cy="36" r="10" stroke="#f5f5f5" strokeWidth="1.8" />
        <circle cx="36" cy="36" r="4" fill="#d4a853" />
        <path d="M52 20 L38 34" stroke="#d4a853" strokeWidth="1.8" />
        <path d="M52 20 L45 21 M52 20 L51 27" stroke="#d4a853" strokeWidth="1.8" />
      </svg>
    ),
    // icon animation: slight scale + rotate on hover
    iconHover: { scale: 1.1, rotate: -8 },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.18,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function ValuesSection() {
  return (
    <section className="bg-[#0a0a0a] min-h-[80vh] flex flex-col justify-center py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs tracking-[0.3em] uppercase text-[#888888] font-light mb-14"
        >
          What I Stand For
        </motion.p>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.id}
              custom={i}
              variants={cardVariants}
              whileHover="hovered"
              className="group relative flex flex-col items-start p-8 rounded-2xl border border-[#222222] bg-white/[0.02] backdrop-blur-sm cursor-default overflow-hidden transition-all duration-300 hover:border-[#d4a853]/40 hover:bg-white/[0.04] hover:shadow-[0_0_32px_-8px_rgba(212,168,83,0.15)]"
            >
              {/* Subtle amber corner glow — appears on hover */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#d4a853]/0 group-hover:bg-[#d4a853]/6 transition-all duration-500 blur-2xl" />

              {/* Index number */}
              <span className="text-xs tracking-[0.3em] text-[#888888]/30 uppercase font-light mb-6">
                0{i + 1}
              </span>

              {/* Icon — animate on hover */}
              <motion.div
                className="mb-7"
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                whileHover={value.iconHover}
              >
                {value.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-tight mb-3 group-hover:text-[#d4a853] transition-colors duration-300">
                {value.label}
              </h3>

              {/* Amber rule — expands on hover */}
              <div className="w-6 h-px bg-[#d4a853]/50 mb-4 group-hover:w-12 group-hover:bg-[#d4a853] transition-all duration-500" />

              {/* Description */}
              <p className="text-sm md:text-base italic font-light text-[#888888] leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
