"use client";

import { motion } from "framer-motion";
import AnimatedDivider from "@/components/AnimatedDivider";

const items = [
  {
    title: "Set Vision",
    description: "Clear direction. Measurable outcomes. Aligned teams.",
  },
  {
    title: "Build What Matters",
    description: "Focus and prioritization that move the business forward.",
  },
  {
    title: "Ship, Learn, Repeat",
    description: "Fast cycles. Crisp decisions. Data-driven iteration.",
  },
];

export default function WhatICanDo() {
  return (
    <section className="bg-[#0a0a0a] px-6 pb-32">
      <div className="max-w-4xl mx-auto">

        {/* Main content row */}
        <div className="flex flex-col md:flex-row md:gap-20 gap-12">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-64 md:flex-shrink-0 flex flex-col justify-start pt-1"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight text-[#f5f5f5] leading-tight tracking-tight">
              What I can<br />do for you
            </h2>
          </motion.div>

          {/* Right — items */}
          <div className="flex-1 flex flex-col divide-y divide-[#222222]">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="group py-8 first:pt-0 last:pb-0 flex flex-col gap-2"
              >
                {/* Number + title row */}
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-[#888888]/40 font-light tracking-widest w-5 shrink-0">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold italic text-[#f5f5f5] group-hover:text-[#d4a853] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#888888] font-light leading-relaxed text-base md:text-lg pl-9">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated divider line */}
        <AnimatedDivider className="mt-20" />
      </div>
    </section>
  );
}
