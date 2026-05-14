"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* eslint-disable @next/next/no-img-element */

// ─────────────────────────────────────────────────────────────────────────────
// Two AI Concepts for Babylist — concept page by Steve Black
// Lives at /playground/babylist-ai
//
// Unlisted: not linked from /playground or /articles. Reached only via direct
// link shared in outreach. The page does inherit the site's <Navigation /> and
// <Footer /> from the root layout, so brand consistency stays intact.
//
// Design intent: page uses Babylist's burgundy/pink brand language to mark
// "this is a concept for a different brand," same approach as OpenAI Families.
//
// Images: drop into /public/babylist-ai/
//   - prototype-onboarding-bee.png   (Prototype 01 hero)
//   - prototype-assistant-welcome.png (Prototype 02 hero)
//   - babylist-onboarding.png (10-screen onboarding strip)
//
// Lovable demo links: replace LOVABLE_ONBOARDING_LINK and LOVABLE_ASSISTANT_LINK
// with the real URLs before sharing.
// ─────────────────────────────────────────────────────────────────────────────

const LOVABLE_ONBOARDING_LINK = "https://babylist-onboarding-proto-bee-guided-step.lovable.app";
const LOVABLE_ASSISTANT_LINK = "https://babylist-cool-baby-ai-assistant-v1.lovable.app/";

export default function BabylistAIPage() {
  return (
    <main className="bg-white text-neutral-900 min-h-screen">
      <Hero />
      <WhatISaw />
      <PrototypeOnboarding />
      <PrototypeAssistant />
      <HowIBuiltIt />
      <NoteFromSteve />
      <ConceptDisclaimer />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Babylist heart mark — illustrative use only.
// Simple heart in burgundy as a visual stand-in.
// ─────────────────────────────────────────────────────────────────────────────
function BabylistHeart({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      fill="#5C1633"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO — two phone mockups side by side under the title.
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-28 px-6 pb-0"
      style={{
        background:
          "linear-gradient(180deg, #FFEEF3 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Concept badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
          style={{
            background: "rgba(92, 22, 51, 0.06)",
            border: "1px solid rgba(92, 22, 51, 0.12)",
            color: "#5C1633",
            fontSize: "12.5px",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "#5C1633" }}
          />
          Concept by Steve Black · Not affiliated with Babylist
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-bold leading-[1.05] tracking-tight mb-5 mx-auto"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            color: "#0d0d0d",
            maxWidth: "18ch",
          }}
        >
          Two AI concepts for{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #5C1633 0%, #6E3DAA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Babylist
          </span>
        </motion.h1>

        {/* Lede */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mb-10 font-light leading-relaxed"
          style={{
            fontSize: "clamp(17px, 1.6vw, 20px)",
            color: "#525252",
            maxWidth: "620px",
          }}
        >
          A quick pass on the new-user flow. Two opportunities, two rough
          prototypes — one for onboarding, one for the main app.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          <Link
            href={LOVABLE_ONBOARDING_LINK}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-[14.5px] transition-all"
            style={{ background: "#5C1633", color: "#fff" }}
          >
            Try the onboarding demo
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link
            href={LOVABLE_ASSISTANT_LINK}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-[14.5px] transition-all"
            style={{ background: "#6E3DAA", color: "#fff" }}
          >
            Try the assistant demo
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </motion.div>

        {/* Two prototype phone mockups */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[880px] mx-auto items-end pb-0"
        >
          <PhoneFrame
            tag="Onboarding"
            imgSrc="/babylist-ai/prototype-onboarding-bee.png"
            imgAlt="AI-guided onboarding prototype"
            placeholderIcon="👋"
            placeholderLabel="Onboarding prototype"
            isHero
          />
          <PhoneFrame
            tag="In-app assistant"
            imgSrc="/babylist-ai/prototype-assistant-welcome.png"
            imgAlt="In-app AI assistant prototype"
            placeholderIcon="💬"
            placeholderLabel="Assistant prototype"
            isHero
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Phone frame component with image + graceful placeholder fallback.
// Image uses Next.js Image and an onError to swap to the placeholder visual.
// ─────────────────────────────────────────────────────────────────────────────
function PhoneFrame({
  tag,
  imgSrc,
  imgAlt,
  placeholderIcon,
  placeholderLabel,
  isHero = false,
}: {
  tag: string;
  imgSrc: string;
  imgAlt: string;
  placeholderIcon: string;
  placeholderLabel: string;
  isHero?: boolean;
}) {
  return (
    <div className="relative">
      {/* Tag badge */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20"
        style={{ top: "-14px" }}
      >
        <span
          className="inline-block px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold uppercase tracking-wider whitespace-nowrap"
          style={{
            background: "#fff",
            border: "1px solid rgba(92, 22, 51, 0.15)",
            color: "#5C1633",
            boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          }}
        >
          {tag}
        </span>
      </div>

      {/* Frame */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{
          aspectRatio: "9 / 19",
          borderRadius: isHero ? "24px 24px 0 0" : "20px",
          background: "linear-gradient(135deg, #FCDDE6, #F5C8D5)",
          filter: "drop-shadow(0 24px 48px rgba(92, 22, 51, 0.18))",
        }}
      >
        {/* Placeholder layer (visible while image missing or loading) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-xl"
            style={{ background: "rgba(92, 22, 51, 0.12)" }}
          >
            {placeholderIcon}
          </div>
          <div
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "#5C1633" }}
          >
            {placeholderLabel}
          </div>
          <div
            className="text-[11px] mt-1.5 font-mono"
            style={{ color: "#7C2D4C" }}
          >
            {imgSrc.replace("/babylist-ai/", "")}
          </div>
        </div>

        {/* Actual image — covers the placeholder if it loads */}
        <ImageWithFallback src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Image that gracefully hides itself if the file doesn't exist.
// Uses native img so we can use onError without Next.js complaining about
// missing files at build time. Add to /public/babylist-ai/ when ready.
// ─────────────────────────────────────────────────────────────────────────────
function ImageWithFallback({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="relative z-10 w-full h-full object-cover object-top"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION — What I saw
// ─────────────────────────────────────────────────────────────────────────────
function WhatISaw() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{
        background: "#fafafa",
        borderTop: "1px solid rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <Eyebrow>What I saw</Eyebrow>
        <h2
          className="font-semibold tracking-tight leading-tight mb-5"
          style={{
            fontSize: "clamp(28px, 3.8vw, 42px)",
            color: "#0d0d0d",
            maxWidth: "26ch",
          }}
        >
          Two AI opportunities in the new-user flow.
        </h2>

        <div className="max-w-3xl mt-7 space-y-4">
          <p className="text-[17px] leading-relaxed" style={{ color: "#424242" }}>
            I walked through Babylist as a first-time user and focused on the
            front door — onboarding and the moments right after landing on the
            experience. Both are well-designed. Both also have AI-shaped
            opportunities that felt worth teasing out as quick prototypes.
          </p>

          <p className="text-[17px] leading-relaxed" style={{ color: "#424242" }}>
            <strong style={{ color: "#0d0d0d", fontWeight: 600 }}>
              1. Onboarding is a wizard.
            </strong>{" "}
            About fourteen screens, geared toward one happy path. Beautifully
            built, but rigid — every user gets the same sequence regardless of
            who they are. An AI-guided version could adapt to the person showing
            up.
          </p>

          <p className="text-[17px] leading-relaxed" style={{ color: "#424242" }}>
            <strong style={{ color: "#0d0d0d", fontWeight: 600 }}>
              2. Post-onboarding, there&apos;s a lot to navigate.
            </strong>{" "}
            Countdown, For You, checklist, inspiration categories, guides, the
            registry itself. Each piece is useful. Together they ask a lot of a
            new parent who&apos;s already overwhelmed. A conversational assistant
            could be the shortcut to everything in the app.
          </p>
        </div>

        {/* Current onboarding strip */}
        <div
          className="mt-12 p-6 rounded-2xl bg-white"
          style={{ border: "1px solid #E4E4E4" }}
        >
          <OnboardingStripImage />
          <p
            className="text-center mt-4 italic"
            style={{ fontSize: "12.5px", color: "#888888" }}
          >
            The current onboarding — roughly fourteen screens, optimized for the
            pregnancy happy path.
          </p>
        </div>
      </div>
    </section>
  );
}

function OnboardingStripImage() {
  return (
    <div className="relative w-full">
      <img
        src="/babylist-ai/babylist-onboarding.png"
        alt="The current Babylist onboarding — ten-plus screens of a wizard flow"
        className="w-full rounded-lg block"
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.style.display = "none";
          const sibling = el.nextElementSibling as HTMLElement | null;
          if (sibling) sibling.style.display = "flex";
        }}
      />
      <div
        className="hidden flex-col items-center justify-center text-center py-12 px-6 rounded-lg"
        style={{
          background:
            "linear-gradient(90deg, #FFEEF3 0%, #fff 50%, #FFEEF3 100%)",
        }}
      >
        <div className="text-2xl mb-2">📱</div>
        <div className="text-sm italic" style={{ color: "#888888" }}>
          Onboarding screenshot strip goes here
        </div>
        <div className="text-xs mt-1 font-mono" style={{ color: "#7C2D4C" }}>
          /public/babylist-ai/babylist-onboarding.png
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROTOTYPE 01 — Onboarding (left copy, right phone)
// ─────────────────────────────────────────────────────────────────────────────
function PrototypeOnboarding() {
  return (
    <section className="px-6 py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <span
            className="inline-block px-3 py-1 rounded-full text-[11.5px] font-bold uppercase tracking-wider mb-4"
            style={{
              background: "rgba(92, 22, 51, 0.08)",
              color: "#5C1633",
            }}
          >
            Prototype 01 · Onboarding
          </span>
          <h3
            className="font-semibold tracking-tight leading-tight mb-5"
            style={{ fontSize: "clamp(24px, 2.6vw, 32px)", color: "#0d0d0d" }}
          >
            An AI guide that adapts to who&apos;s showing up.
          </h3>
          <p className="text-[16px] leading-relaxed mb-4" style={{ color: "#525252" }}>
            Instead of a fixed wizard, a friendly guide opens the conversation:{" "}
            <em>
              &ldquo;Whether you&apos;re starting a new registry or hopping
              onto someone else&apos;s, I&apos;ll get you set up in a couple of
              minutes.&rdquo;
            </em>
          </p>
          <p className="text-[16px] leading-relaxed mb-4" style={{ color: "#525252" }}>
            One first question branches the path. Pregnant person? Partner?
            Grandparent? Already had the baby? The guide gets you to the same
            ready-to-register end-state in a third of the steps — and learns
            useful context along the way.
          </p>
          <p className="text-[16px] leading-relaxed mb-2" style={{ color: "#525252" }}>
            <strong style={{ color: "#0d0d0d", fontWeight: 600 }}>
              Rough on purpose.
            </strong>{" "}
            A clickable concept, not the final design.
          </p>
          <Link
            href={LOVABLE_ONBOARDING_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 mt-3 font-semibold text-[14.5px] pb-[2px] border-b"
            style={{ color: "#5C1633", borderColor: "#5C1633" }}
          >
            Try the onboarding demo →
          </Link>
        </div>
        <div className="max-w-[380px] mx-auto w-full">
          <PhoneFrame
            tag="Onboarding"
            imgSrc="/babylist-ai/prototype-onboarding-bee.png"
            imgAlt="Onboarding prototype: meet Bee"
            placeholderIcon="👋"
            placeholderLabel="Bee — onboarding"
          />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROTOTYPE 02 — In-app assistant (left phone, right copy)
// ─────────────────────────────────────────────────────────────────────────────
function PrototypeAssistant() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #FFEEF3 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="max-w-[380px] mx-auto w-full md:order-1 order-2">
          <PhoneFrame
            tag="In-app assistant"
            imgSrc="/babylist-ai/prototype-assistant-welcome.png"
            imgAlt="In-app assistant welcome screen"
            placeholderIcon="💬"
            placeholderLabel="Assistant welcome"
          />
        </div>
        <div className="md:order-2 order-1">
          <span
            className="inline-block px-3 py-1 rounded-full text-[11.5px] font-bold uppercase tracking-wider mb-4"
            style={{
              background: "rgba(92, 22, 51, 0.08)",
              color: "#5C1633",
            }}
          >
            Prototype 02 · In-app assistant
          </span>
          <h3
            className="font-semibold tracking-tight leading-tight mb-5"
            style={{ fontSize: "clamp(24px, 2.6vw, 32px)", color: "#0d0d0d" }}
          >
            One button. Find AND do. Right inside the chat.
          </h3>
          <p className="text-[16px] leading-relaxed mb-4" style={{ color: "#525252" }}>
            A floating assistant on the home screen that&apos;s the shortcut to
            anything in the app.{" "}
            <strong style={{ color: "#0d0d0d", fontWeight: 600 }}>
              State-aware starters
            </strong>{" "}
            — finish your Hello Baby Box, get newborn essentials picked for
            you, ask &ldquo;best bottles?&rdquo; — that surface curated answers
            and take action without leaving the chat.
          </p>
          <p className="text-[16px] leading-relaxed mb-2" style={{ color: "#525252" }}>
            The same guide pattern from onboarding, now persistent. It knows
            where you are, what&apos;s done, and what&apos;s next — and offers
            the action, not just the link.
          </p>
          <Link
            href={LOVABLE_ASSISTANT_LINK}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 mt-3 font-semibold text-[14.5px] pb-[2px] border-b"
            style={{ color: "#5C1633", borderColor: "#5C1633" }}
          >
            Try the assistant demo →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOW I BUILT IT — 5-step process row
// ─────────────────────────────────────────────────────────────────────────────
function HowIBuiltIt() {
  const steps = [
    {
      num: "01",
      label: "Walk the app",
      title: "Use the product as a real user",
      body: "Go through onboarding. Notice what's overwhelming. Take screenshots.",
    },
    {
      num: "02",
      label: "Find the pattern",
      title: "Spot the cross-surface friction",
      body: "The unifying observation: wayfinding has become the job. A guide solves the meta-problem.",
    },
    {
      num: "03",
      label: "Sketch with AI",
      title: "Pressure-test fast",
      body: "Use Claude to argue with the premise, brainstorm starter prompts, decide the tone.",
    },
    {
      num: "04",
      label: "Build to learn",
      title: "Ship a clickable demo",
      body: "Stop arguing about the idea. Start clicking on it. Rough is the point.",
    },
    {
      num: "05",
      label: "Decide",
      title: "Keep what feels true",
      body: "Some surfaces feel right immediately. Others only reveal gaps once you can interact.",
    },
  ];

  return (
    <section
      id="how-i-built-it"
      className="px-6 py-20 md:py-28"
      style={{
        background: "#FFFBF7",
        borderTop: "1px solid rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <Eyebrow>Product thinking · field notes</Eyebrow>
          <h2
            className="font-semibold tracking-tight leading-tight mb-4 mx-auto"
            style={{
              fontSize: "clamp(28px, 3.8vw, 42px)",
              color: "#0d0d0d",
              maxWidth: "26ch",
            }}
          >
            From{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #5C1633 0%, #C04568 50%, #E67A95 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              question
            </span>{" "}
            to{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #5C1633 0%, #C04568 50%, #E67A95 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              prototype
            </span>{" "}
            in an afternoon.
          </h2>
          <p
            className="mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(16px, 1.4vw, 18px)",
              color: "#525252",
              maxWidth: "620px",
            }}
          >
            An AI-native PM workflow for turning a fuzzy opportunity into
            something clickable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 mb-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-5 rounded-2xl bg-white"
              style={{ border: "1px solid rgba(92, 22, 51, 0.08)" }}
            >
              <div
                className="italic text-[13px] mb-1.5"
                style={{
                  color: "#5C1633",
                  fontFamily: "Georgia, serif",
                  letterSpacing: "0.06em",
                }}
              >
                {s.num}
              </div>
              <div
                className="text-[10.5px] font-bold uppercase mb-2.5"
                style={{
                  color: "#5C1633",
                  letterSpacing: "0.1em",
                }}
              >
                {s.label}
              </div>
              <h4
                className="text-[15px] font-semibold mb-2 leading-tight"
                style={{ color: "#0d0d0d" }}
              >
                {s.title}
              </h4>
              <p className="text-[13px] leading-relaxed" style={{ color: "#525252" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="max-w-2xl mx-auto mt-10 p-7 bg-white italic leading-snug"
          style={{
            borderLeft: "4px solid #5C1633",
            borderRadius: "0 12px 12px 0",
            fontFamily: "Georgia, serif",
            fontSize: "20px",
            color: "#0d0d0d",
          }}
        >
          &ldquo;The point was not to prove the answer. It was to make the
          question concrete enough to evaluate.&rdquo;
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// NOTE FROM STEVE
// ─────────────────────────────────────────────────────────────────────────────
function NoteFromSteve() {
  return (
    <section className="px-6 py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto">
        <div
          className="flex items-center gap-4 mb-7 pb-5"
          style={{ borderBottom: "1px solid #E4E4E4" }}
        >
          <div
            className="w-13 h-13 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{
              width: "52px",
              height: "52px",
              background:
                "linear-gradient(135deg, #5C1633, #7C2D4C)",
            }}
          >
            SB
          </div>
          <div>
            <div className="font-semibold text-base" style={{ color: "#0d0d0d" }}>
              Steve Black
            </div>
            <div className="text-[13px]" style={{ color: "#525252" }}>
              Product · 15+ years · 9 shipped apps · still curious
            </div>
          </div>
        </div>

        <div className="space-y-4 text-[16.5px] leading-relaxed" style={{ color: "#424242" }}>
          <p>
            Hi, I&apos;m Steve. I applied for{" "}
            <strong style={{ color: "#0d0d0d", fontWeight: 600 }}>
              Director, Product Management — Registry
            </strong>{" "}
            and{" "}
            <strong style={{ color: "#0d0d0d", fontWeight: 600 }}>
              Staff PM, AI Builder
            </strong>{" "}
            at Babylist last week. Instead of waiting around, I spent an
            afternoon walking through the product and built these two prototypes
            to make my thinking concrete.
          </p>
          <p>
            15+ years building consumer products at Nike, Adidas, Bowflex, plus
            digital health and connected-tech startups. The thread across all
            of it: figure out what people are doing in their lives, build
            something that makes it easier and more meaningful. Babylist
            already does that better than anyone for new parents. The question
            I kept asking: how does an AI-native layer extend what&apos;s
            already great without replacing the parent voice that makes the
            brand work?
          </p>
          <p>
            <strong style={{ color: "#0d0d0d", fontWeight: 600 }}>
              This isn&apos;t a pitch. It&apos;s an exploration.
            </strong>{" "}
            Rough on purpose. The whole thing — page, two prototypes, this note
            — went from &ldquo;what if?&rdquo; to &ldquo;click on it&rdquo; in
            a weekend. If any of it resonates, I&apos;d love a chat.
          </p>
        </div>

        <div className="mt-8 text-[14.5px]" style={{ color: "#525252" }}>
          — Steve
          <br />
          <strong style={{ color: "#0d0d0d" }}>
            steve.and.the.dogs@gmail.com
          </strong>{" "}
          · Laguna Beach, CA
          <br />
          <Link
            href="https://www.steveandthedogs.com"
            style={{ color: "#5C1633" }}
          >
            www.steveandthedogs.com
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONCEPT DISCLAIMER (just above site footer)
// ─────────────────────────────────────────────────────────────────────────────
function ConceptDisclaimer() {
  return (
    <section
      className="px-6 py-12 text-center"
      style={{ background: "#0d0d0d", color: "#888" }}
    >
      <p className="text-[12.5px] mb-1.5">
        Two AI Concepts for Babylist is a concept by Steve Black — not a
        product, not affiliated with Babylist.
      </p>
      <p className="text-[12.5px]">
        Babylist® is a trademark of Babylist, Inc. Used here for illustrative
        concept purposes only.
      </p>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-semibold uppercase mb-4"
      style={{
        fontSize: "12.5px",
        color: "#5C1633",
        letterSpacing: "0.08em",
      }}
    >
      {children}
    </div>
  );
}
