"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AnimatedDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ scaleX: 1 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent ${className}`}
      initial={{ scaleX: 0 }}
      animate={controls}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
    />
  );
}
