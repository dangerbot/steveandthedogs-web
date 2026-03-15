"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BoltDivider from "@/components/BoltDivider";

const bios = [
  "Hello! I help companies build products people love — by setting clear vision, removing blockers, and getting hands-on when it's time to execute.",
  "With 18+ years building digital products across AI, fitness, health, and connected tech, I've helped Nike, Adidas, Bowflex, and early-stage startups drive engagement, retention, and subscription growth.",
  "From zero-to-one to scaling what works, I bring clarity, energy, and focus to creating user-centered products that make a real impact.",
];

export default function BioCard() {
  return (
    <section className="bg-[#0a0a0a] pb-32 px-6">
      {/* Lightning bolt divider row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <BoltDivider />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="max-w-4xl mx-auto bg-[#141414] border border-[#222222] rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Photo — left side */}
          <div className="relative w-full md:w-[280px] md:flex-shrink-0 aspect-[3/4] md:aspect-auto md:min-h-[420px] bg-[#1a1a1a]">
            <Image
              src="/images/steve.avif"
              alt="Steve Black"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle gradient overlay at bottom for blend */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#141414] to-transparent md:hidden" />
          </div>

          {/* Bio text — right side */}
          <div className="flex flex-col justify-center px-8 py-10 md:px-10 md:py-12 gap-6">
            {/* Hello label */}
            <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light">
              Hello
            </p>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-5">
              {bios.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.12,
                    ease: "easeOut",
                  }}
                  className={`leading-relaxed font-light ${
                    i === 0
                      ? "text-[#f5f5f5] text-lg md:text-xl"
                      : "text-[#888888] text-base md:text-lg"
                  }`}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Decorative accent line */}
            <div className="mt-2 flex items-center gap-3">
              <div className="w-8 h-px bg-[#d4a853]" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#888888]/60 font-light">
                Head of Digital Product
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
