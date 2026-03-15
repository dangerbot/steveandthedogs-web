"use client";

import { motion } from "framer-motion";

const items = [
  "Mobile + Web Apps",
  "Connected Hardware & IoT",
  "Health, Fitness, Wellness",
  "SaaS / Subscription Models",
  "B2C / B2B2C Products",
];

export default function ExpertiseSection() {
  return (
    <section className="bg-[#0a0a0a] px-6 pb-32">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:gap-20 gap-12">

        {/* Left — label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-64 md:flex-shrink-0 flex flex-col justify-start pt-1"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-[#f5f5f5] leading-tight tracking-tight">
            Where I<br />thrive
          </h2>
        </motion.div>

        {/* Right — intro + checklist */}
        <div className="flex-1 flex flex-col gap-10">

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-lg md:text-xl font-light text-[#888888] leading-relaxed"
          >
            I thrive in spaces where{" "}
            <span className="text-[#f5f5f5]">digital, physical, and human experience</span>{" "}
            intersect.
          </motion.p>

          {/* Checklist */}
          <ul className="flex flex-col gap-0 divide-y divide-[#1a1a1a]">
            {items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                className="group flex items-center gap-5 py-5"
              >
                {/* Checkmark */}
                <span className="shrink-0 w-6 h-6 rounded-full border border-[#d4a853]/40 flex items-center justify-center group-hover:border-[#d4a853] group-hover:bg-[#d4a853]/10 transition-all duration-300">
                  <svg
                    width="11"
                    height="9"
                    viewBox="0 0 11 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 4L4 7.5L10 1"
                      stroke="#d4a853"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {/* Item text */}
                <span className="text-xl md:text-2xl font-bold text-[#f5f5f5] tracking-tight group-hover:text-[#d4a853] transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
