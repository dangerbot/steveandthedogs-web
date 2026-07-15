import Link from "next/link";
import ElectricBolt from "@/components/ElectricBolt";
import AnimatedDivider from "@/components/AnimatedDivider";

// ─────────────────────────────────────────────────────────────────────────────
// Playground — the prototype showcase
//
// Each entry is a featured card linking to its own sub-page. To add a new
// prototype: copy a card section below, point it at the new /playground/<slug>
// page, and swap the copy + visual. The bolt experiments (formerly inline
// Experiments 01–05) now live at /playground/lightning-bolts.
// ─────────────────────────────────────────────────────────────────────────────

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
        <AnimatedDivider className="mt-14" />
      </section>

      {/* ── Featured Prototype: ChatGPT Families ─────────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-3">
            Featured Prototype
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            ChatGPT Families
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            A concept for how OpenAI could bring families closer through everyday AI. Landing page,
            prototype, and the thinking behind it.
          </p>
        </div>

        <Link
          href="/playground/openai-families"
          className="group block relative overflow-hidden rounded-2xl border border-[#222222] bg-[#0d0d0d] hover:border-[#333333] transition-all"
        >
          {/* Card content */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
            {/* Left — copy */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#222] text-[#888888] text-[11px] tracking-wide mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Concept · Not affiliated with OpenAI
                </div>
                <h3 className="text-2xl md:text-3xl font-extralight text-[#f5f5f5] tracking-tight leading-tight mb-4">
                  AI that brings the people you love a little closer.
                </h3>
                <p className="text-[#888888] text-[15px] font-light leading-relaxed max-w-md">
                  Built for the dinners, the carpools, the holidays, and the everyday in between.
                  See the landing page, the feature surfaces, and a working Lovable prototype.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-[#d4a853] font-light tracking-wide">
                Open the page
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </div>

            {/* Right — celebration photo with overlay hero treatment */}
            <div
              className="relative flex items-center justify-center min-h-[260px] md:min-h-[320px] overflow-hidden bg-neutral-900"
              style={{
                backgroundImage: "url(/openai-families/hero.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark gradient overlay for text contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)",
                }}
              />
              {/* Subtle warm color cast to feel celebratory */}
              <div
                aria-hidden="true"
                className="absolute inset-0 mix-blend-overlay"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(212,168,83,0.18) 0%, rgba(0,0,0,0) 70%)",
                }}
              />

              {/* Hero overlay — OpenAI mark + ChatGPT Families */}
              <div className="relative z-10 flex flex-col items-center text-center px-6 py-10">
                <svg viewBox="0 0 320 320" width={48} height={48} aria-hidden="true" className="mb-4 drop-shadow-lg">
                  <path
                    fill="#ffffff"
                    d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
                  />
                </svg>
                <p className="text-[10px] tracking-[0.22em] uppercase text-white/70 font-medium mb-2">
                  ChatGPT
                </p>
                <h4
                  className="text-3xl md:text-4xl font-extralight text-white tracking-[-0.02em] leading-none"
                  style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
                >
                  Families
                </h4>
                <div className="mt-5 flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-[10px] tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Concept
                </div>
              </div>

              {/* Bottom corner caption: faint, almost watermark-like */}
              <p className="absolute bottom-3 right-4 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
                A celebration, every day
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Featured Exploration: The Satiation Lag ──────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-3">
            Product Exploration
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            The Satiation Lag
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            An interactive look at why we overeat at meals — and where a product could help people stop on time.
          </p>
        </div>

        <Link
          href="/playground/satiation-lag"
          className="group block relative overflow-hidden rounded-2xl border border-[#222222] bg-[#0d0d0d] hover:border-[#333333] transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
            {/* Left — copy */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#222] text-[#888888] text-[11px] tracking-wide mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
                  Behavior change · Interactive
                </div>
                <h3 className="text-2xl md:text-3xl font-extralight text-[#f5f5f5] tracking-tight leading-tight mb-4">
                  Your body knows it&apos;s had enough before your brain feels it.
                </h3>
                <p className="text-[#888888] text-[15px] font-light leading-relaxed max-w-md">
                  Calories run past a healthy amount while the full feeling catches up. Play the meal, watch the gap, and see where a nudge could land.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-[#d4a853] font-light tracking-wide">
                Open the page
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </div>

            {/* Right — photo thumbnail */}
            <div
              className="relative flex items-end min-h-[240px] md:min-h-[320px] overflow-hidden bg-neutral-900"
              style={{
                backgroundImage: "url(/satiation-lag/eat.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.6) 100%)",
                }}
              />
              <p className="relative z-10 m-5 text-[11px] tracking-[0.2em] uppercase text-white/85 font-medium">
                Play the meal →
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* ── Motion Graphics: Lightning Bolts ─────────────────────────── */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-3">
            Motion Graphics
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-[#f5f5f5] tracking-wide">
            Lightning Bolts
          </h2>
          <p className="text-[#555555] text-sm mt-2 font-light">
            The site&apos;s logo mark as a motion lab — five experiments in AI-driven animation and brand assets.
          </p>
        </div>

        <Link
          href="/playground/lightning-bolts"
          className="group block relative overflow-hidden rounded-2xl border border-[#222222] bg-[#0d0d0d] hover:border-[#333333] transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-stretch">
            {/* Left — copy */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#222] text-[#888888] text-[11px] tracking-wide mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853]" />
                  Brand lab · 5 experiments
                </div>
                <h3 className="text-2xl md:text-3xl font-extralight text-[#f5f5f5] tracking-tight leading-tight mb-4">
                  One SVG path, every personality it can hold.
                </h3>
                <p className="text-[#888888] text-[15px] font-light leading-relaxed max-w-md">
                  Pulse, draw-on, and crackle animations, section dividers, and the LinkedIn
                  brand kit — all motion prompted into existence with AI.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-[#d4a853] font-light tracking-wide">
                Open the page
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </div>

            {/* Right — live bolt animation */}
            <div className="relative flex items-center justify-center min-h-[240px] md:min-h-[320px] overflow-hidden bg-[#0a0a0a]">
              {/* Ambient glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 65% at 50% 50%, #d4a85318 0%, transparent 70%)",
                }}
              />
              <ElectricBolt boltSize={150} className="w-[150px] h-[150px]" />
              <p className="absolute bottom-3 right-4 text-[9px] tracking-[0.18em] uppercase text-white/40 font-medium">
                Live — Electric Crackle
              </p>
            </div>
          </div>
        </Link>
      </section>

    </div>
  );
}
