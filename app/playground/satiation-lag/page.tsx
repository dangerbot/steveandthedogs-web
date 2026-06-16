"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// The Satiation Lag — product exploration by Steve Black
// Lives at /playground/satiation-lag
//
// Dark aesthetic matching the rest of steveandthedogs.com (amber #d4a853 accent).
// Interactive: a dual-axis chart of calories vs. felt fullness over a meal, with
// a building minute-by-minute timeline. All numbers are illustrative.
// ─────────────────────────────────────────────────────────────────────────────

// ── palette ──
const INK = "#f5f5f5"; // calories line
const AMBER = "#d4a853"; // feeling line + accent
const RED = "#e0795f"; // overshoot / bad

// ── model: C = calories eaten (left axis), F = fullness felt (right axis) ──
type StyleKey = "keepfull" | "planfast" | "planslow";
type Series = { C: number[]; F: number[] };

const DATA: Record<StyleKey, Series> = {
  keepfull: {
    C: [0, 160, 320, 470, 610, 750, 870, 970, 1060, 1140, 1200, 1200, 1200, 1200, 1200, 1200],
    F: [0, 4, 10, 18, 28, 38, 48, 58, 66, 73, 80, 85, 88, 90, 91, 91],
  },
  planfast: {
    C: [0, 140, 290, 430, 560, 680, 750, 750, 750, 750, 750, 750, 750, 750, 750, 750],
    F: [0, 4, 11, 19, 29, 39, 48, 56, 63, 69, 73, 77, 79, 80, 81, 82],
  },
  planslow: {
    C: [0, 60, 130, 200, 280, 360, 440, 520, 600, 670, 720, 745, 750, 750, 750, 750],
    F: [0, 3, 9, 16, 24, 33, 42, 51, 60, 68, 74, 78, 80, 81, 82, 82],
  },
};

type TLItem = { at: number; ic: string; t: string; d: string; k: "" | "warn" | "bad" | "good" | "message" };

const TL: Record<StyleKey, TLItem[]> = {
  keepfull: [
    { at: 0, ic: "🍽️", t: "You start eating.", d: "Fast, no target in mind.", k: "" },
    { at: 10, ic: "⚠️", t: "You've eaten a healthy amount — about 750 calories.", d: "But the full feeling hasn't arrived, so it still feels like you need more.", k: "warn" },
    { at: 10, ic: "💬", t: "The moment a nudge matters.", d: "A light “you're at a good amount” right here could save the next ten minutes of eating.", k: "message" },
    { at: 20, ic: "😣", t: "You finally feel full — at about 1,200 calories.", d: "450 over a healthy meal. The ten-minute gap got paid in food.", k: "bad" },
  ],
  planfast: [
    { at: 0, ic: "🍽️", t: "You start eating.", d: "Fast, but with a 750-calorie target.", k: "" },
    { at: 12, ic: "🎯", t: "You hit your target and stop at 750.", d: "Right amount of food — but you don't feel full yet.", k: "good" },
    { at: 12, ic: "⏳", t: "The wait begins — about 14 minutes.", d: "You've stopped, but the feeling is still catching up. This is the hard part.", k: "warn" },
    { at: 12, ic: "💬", t: "The moment a message matters.", d: "“You're done — the full feeling is about ten minutes out.” Naming the wait is what gets people through it.", k: "message" },
    { at: 26, ic: "😊", t: "Full at 750. No overshoot.", d: "Same hunger solved, 450 fewer calories than eating till you felt it.", k: "good" },
  ],
  planslow: [
    { at: 0, ic: "🐢", t: "You start eating slowly.", d: "Pacing each bite instead of racing.", k: "" },
    { at: 14, ic: "🍃", t: "Calories and the feeling rise together.", d: "Going slow keeps the signal in step with the fork.", k: "" },
    { at: 24, ic: "😊", t: "Full at 750, right on target.", d: "No gap, no overshoot — slow enough that your body cued you in time.", k: "good" },
    { at: 24, ic: "💬", t: "Where the message changes.", d: "Slow eaters need less mid-meal nudging — the win is helping them plan before the first bite.", k: "message" },
  ],
};

// ── geometry ──
const CMAX = 1300, HEALTHY = 750, FEELFULL = 80, NPTS = 15;
const X0 = 74, X1 = 560, Y0 = 30, Y1 = 284;
const xAt = (i: number) => X0 + (i / NPTS) * (X1 - X0);
const yC = (c: number) => Y1 - (c / CMAX) * (Y1 - Y0);
const yF = (f: number) => Y1 - (f / FEELFULL) * (Y1 - yC(HEALTHY));
const reachIndex = (s: StyleKey) => { const C = DATA[s].C; for (let i = 0; i <= NPTS; i++) if (C[i] >= HEALTHY) return i; return NPTS; };
const feelIndex = (s: StyleKey) => { const F = DATA[s].F; for (let i = 0; i <= NPTS; i++) if (F[i] >= FEELFULL) return i; return NPTS; };
const linePath = (arr: number[], n: number, yfn: (v: number) => number) => {
  let d = "";
  for (let i = 0; i <= n; i++) d += (i === 0 ? "M" : "L") + xAt(i).toFixed(1) + " " + yfn(arr[i]).toFixed(1) + " ";
  return d.trim();
};

export default function SatiationLagPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
      <Hero />
      <Body />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative w-full min-h-[460px] h-[66vh] max-h-[740px] flex flex-col justify-end">
      <Image
        src="/satiation-lag/eat.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 55%" }}
      />
      {/* Dark gradient for nav + headline legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.96) 100%)",
        }}
      />
      <div className="relative max-w-[760px] mx-auto w-full px-8 pb-12 md:pb-16">
        <div className="text-[#d4a853] text-[13px] tracking-[0.14em] uppercase mb-5">
          Product Exploration · Behavior Change
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extralight leading-[1.05] tracking-[-0.02em] mb-5">
          The Satiation Lag
        </h1>
        <p className="text-[19px] md:text-[21px] text-[#e2e2e2] font-light leading-[1.4] max-w-[560px]">
          Why we overeat at meals — and where a product could step in to help.
        </p>
        <div className="mt-7 text-[13px] text-white/75 tracking-wide">
          By <span className="text-[#d4a853]">Steve Black</span> · June 2026
        </div>
      </div>
    </section>
  );
}

function Body() {
  return (
    <article className="max-w-[760px] mx-auto px-8 pb-24 text-[17px] leading-[1.7] font-light text-[#c8c8c8]">
      <p className="text-[19px] leading-[1.55] mb-5 text-[#e2e2e2]">
        {`The signal that you've had enough travels from your gut to your brain, and it runs late — by as much as `}
        <em className="not-italic text-[#d4a853]">twenty minutes</em>
        {`. In that gap you still feel like eating, so you slide right past a healthy amount. Understand that gap — what's happening, what to expect, what to do next — and you can plan right through it.`}
      </p>

      <H2>The problem, made visible</H2>
      <p className="mb-5">
        {`The light line is the `}<em className="not-italic text-[#d4a853]">calories</em>{` you've eaten. The amber line is how full you `}<em className="not-italic text-[#d4a853]">feel</em>{`, on its own scale. They're lined up so feeling full sits at the same level as a healthy amount — the dashed line. The two moments that matter are when calories reach that line, and when the feeling does. The space between them is the gap.`}
      </p>

      <Sim />

      <H2>The two moments that matter</H2>
      <p className="mb-6">
        {`The chart marks when calories reach a `}<strong className="text-[#f5f5f5] font-medium">healthy amount</strong>{` and when you actually `}<strong className="text-[#f5f5f5] font-medium">feel full</strong>{`. The gap between them is the problem. Eat till you feel full and you keep eating straight through that gap — calories run past 750 while you wait to feel it. Plan the portion and you stop at 750, but then you sit in the gap feeling hungry. The only way to close the gap is to eat slow enough that the feeling keeps pace with the fork.`}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Card>
          <div className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#e0795f]">Eat till you feel full</div>
          <div className="text-[22px] font-light my-1 text-[#f5f5f5]">≈ 1,200 calories</div>
          <p className="text-[14px] text-[#888888] m-0">{`You stop the instant the feeling arrives — about 450 calories past a healthy meal. The gap got paid in food.`}</p>
        </Card>
        <Card>
          <div className="text-[12px] font-bold uppercase tracking-[0.05em] text-[#6fae7d]">Plan the portion</div>
          <div className="text-[22px] font-light my-1 text-[#f5f5f5]">≈ 750 calories</div>
          <p className="text-[14px] text-[#888888] m-0">{`You stop on target. Either ride out the wait, or eat slow so the feeling catches up as you go. Same hunger solved, far less food.`}</p>
        </Card>
      </div>

      <H2>Directions worth testing</H2>
      <p className="mb-5">{`Sitting with this problem, four product directions stood out as worth exploring.`}</p>
      <Step n={1} t="Set the amount before the first bite">{`Hunger going in is the accelerant. Commit to an amount up front so the decision isn't made mid-overshoot. And eating to a stop only works if you know the stopping amount — so help define it.`}</Step>
      <Step n={2} t="Slow the fork to let the feeling keep up">{`The cheapest fix for the gap is pace. Eat slow enough and your body can cue you to stop on its own — no math required. It's the hardest one to actually do, which is why it needs help.`}</Step>
      <Step n={3} t="Land the message in the moment">{`The whole game is timing a small nudge to the minute it matters — "you're at a good amount" as you pass it, or "the full feeling is about ten minutes out" while you wait. That timing is where the advantage lives.`}</Step>
      <Step n={4} t="Tune the food, not just the amount">{`Fiber and protein pull the feeling up faster and shorten the gap. High-sugar, soft food does the opposite. Composition is part of the answer, not just portion.`}</Step>

      <H2>Assumptions and confidence</H2>
      <p className="mb-5">{`What I feel solid on so far, and what's still an open assumption.`}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-xl overflow-hidden border border-[#222222] mb-4">
        <div className="p-5 bg-[#12150f]">
          <h4 className="m-0 mb-3 text-[12px] uppercase tracking-[0.08em] text-[#d4a853]">{`What I'm fairly confident about`}</h4>
          <ConfList items={[
            "The lag is real, and it's the gut-to-brain signal delay, not willpower, that drives the overshoot.",
            "Pace matters — eat slow and the feeling keeps up; eat fast and you overshoot before it lands.",
            "Going in hungry makes it worse — you eat faster and front-load before the real food.",
          ]} />
        </div>
        <div className="p-5 bg-[#141414]">
          <h4 className="m-0 mb-3 text-[12px] uppercase tracking-[0.08em] text-[#b98a3a]">{`What I'm still unsure of`}</h4>
          <ConfList items={[
            "Whether anyone tolerates a “slow down” or “pause” nudge mid-meal, or if it feels like the app wagging a finger.",
            "How to show “enough” without a percentage — a percent quietly tells people 100 is the goal.",
            "Whether the moment that matters is at the table, or back at the order screen before food exists.",
          ]} />
        </div>
      </div>

      <H2>What is satiation and satiety?</H2>
      <blockquote className="my-5 py-4 px-5 border-l-[3px] border-[#d4a853] bg-[rgba(212,168,83,0.05)] text-[16px] font-light leading-[1.55] text-[#d6d6d6]">
        {`"Satiation … represents the cumulative effect of a variety of inhibitory sensory, cognitive, digestive, and hormonal signals that bring an eating occasion to an end; it is said to control meal size. Satiety … suppresses hunger after an eating occasion and prevents further eating; it is said to control snacking between meals."`}
        <cite className="block mt-3 text-[12.5px] text-[#888888] not-italic">— Sugar Nutrition Resource Centre, summarizing Mandalari (2019)</cite>
      </blockquote>
      <p className="mb-5">
        {`Satiation controls how much you eat `}<em className="not-italic text-[#d4a853]">in the moment</em>{`; satiety is about the hours after. Most nutrition tools chase satiety — what to eat to stay full till dinner. My hypothesis is that `}<strong className="text-[#f5f5f5] font-medium">satiation is the bigger lever</strong>{`, because the moment people overeat is the moment they slide past "enough" before the signal to stop ever lands. Help people nail the stop, and you solve a lot.`}
      </p>
      <p className="mb-5">
        {`The catch is timing. Part of that stop signal travels from the gut to the brain on a delay — which is where the old "give it twenty minutes" rule comes from. That lag is the gap this whole page is about.`}
      </p>

      <H2>Sources</H2>
      <p className="mb-3">{`Calories and curves here are illustrative, not clinical. The ~20-minute figure is a widely cited rule of thumb — real satiety timing varies by person and by food.`}</p>
      <ul className="list-none p-0 m-0 mb-4">
        <Src href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10874559/" title="Satiety: a gut–brain relationship" note="NIH / PMC" />
        <Src href="https://www.sugarnutritionresource.org/news-articles/satiety-how-does-it-work" title="Satiety: how does it work?" note="Sugar Nutrition Resource Centre (satiation vs. satiety, the satiety cascade)" />
        <Src href="https://www.livescience.com/health/food-diet/does-it-really-take-20-minutes-to-realize-youre-full" title="Does it really take 20 minutes to feel full?" note="Live Science" />
        <Src href="https://theappetitedoctor.co.uk/2019/02/05/does-it-really-take-20-minutes-for-your-brain-to-know-youre-full/" title="Does it really take 20 minutes for your brain to know you're full?" note="The Appetite Doctor" />
      </ul>

      <section className="mt-12 pt-8 border-t border-[#222222]">
        <p className="mb-0 text-[15px] text-[#9a9a9a]">
          <strong className="text-[#f5f5f5] font-medium">How this was made.</strong>{` Before jumping into solutions, I wanted to see if I could better visualize the problem — and whether seeing it clearly might surface where the opportunities for a solution are. I used Claude Code to mock up this standalone page from my own research and prompting, then synced it to GitHub and deployed it to Vercel so it lives here on my site.`}
        </p>
        <p className="mt-6 text-[14px] text-[#888888]">
          — Steve Black ·{" "}
          <a href="https://www.steveandthedogs.com" className="text-[#d4a853] no-underline hover:underline">steveandthedogs.com</a>
        </p>
      </section>
    </article>
  );
}

// ── small presentational helpers ──
function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-[24px] md:text-[28px] font-light mt-16 mb-4 tracking-[-0.01em] text-[#f5f5f5]">{children}</h2>;
}
function Card({ children }: { children: ReactNode }) {
  return <div className="bg-[#141414] border border-[#222222] rounded-xl p-5">{children}</div>;
}
function Step({ n, t, children }: { n: number; t: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 py-4 border-t border-[#222222]">
      <div className="flex-none w-8 h-8 rounded-lg bg-[#d4a853] text-[#0a0a0a] font-bold flex items-center justify-center">{n}</div>
      <div>
        <p className="font-medium text-[#f5f5f5] m-0 mb-1">{t}</p>
        <p className="text-[14px] text-[#888888] m-0 leading-[1.55]">{children}</p>
      </div>
    </div>
  );
}
function ConfList({ items }: { items: string[] }) {
  return (
    <ul className="list-none p-0 m-0">
      {items.map((it, i) => (
        <li key={i} className="relative pl-4 mb-2.5 text-[14px] text-[#b8b8b8] leading-[1.5] last:mb-0">
          <span className="absolute left-0 top-[0.55em] w-[5px] h-[5px] rounded-full bg-[#d4a853]" />
          {it}
        </li>
      ))}
    </ul>
  );
}
function Src({ href, title, note }: { href: string; title: string; note: string }) {
  return (
    <li className="py-2.5 border-t border-[#222222] first:border-t-0 text-[14px] text-[#888888]">
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#d4a853] font-medium no-underline hover:underline">{title}</a>
      <span> — {note}</span>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sim — the interactive dual-axis chart + building timeline
// ─────────────────────────────────────────────────────────────────────────────
function Sim() {
  const [style, setStyleState] = useState<StyleKey>("keepfull");
  const [idx, setIdx] = useState(12);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing || idx >= NPTS) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 330);
    return () => clearTimeout(t);
  }, [playing, idx]);

  const d = DATA[style];
  const reachI = reachIndex(style);
  const feelI = feelIndex(style);
  const same = reachI === feelI;
  const gapColor = style === "keepfull" ? "rgba(224,121,95,0.16)" : "rgba(212,168,83,0.13)";
  const gapTextColor = style === "keepfull" ? RED : AMBER;
  const mins = idx * 2;
  const shown = TL[style].filter((e) => e.at <= mins);

  const tabs: { key: StyleKey; label: string }[] = [
    { key: "keepfull", label: "🍽️ Eat till you feel full" },
    { key: "planfast", label: "⏱️ Plan it, eat fast" },
    { key: "planslow", label: "🐢 Plan it, eat slow" },
  ];
  const note =
    style === "keepfull" ? "Eating fast with no target — stopping only when the feeling finally lands."
    : style === "planfast" ? "Eating fast to a 750-calorie target, then waiting for the feeling to catch up."
    : "Eating slow so the feeling rises in step with the calories.";

  return (
    <div className="bg-[#141414] border border-[#222222] rounded-2xl p-4 md:p-5 my-6">
      {/* tabs */}
      <div className="inline-flex flex-wrap gap-1 bg-[#0d0d0d] rounded-full p-1 mb-1">
        {tabs.map((tb) => (
          <button
            key={tb.key}
            onClick={() => setStyleState(tb.key)}
            className={
              "rounded-full px-3.5 py-2 text-[13px] font-medium transition " +
              (style === tb.key ? "bg-[#d4a853] text-[#0a0a0a]" : "text-[#9a9a9a] hover:text-[#d0d0d0]")
            }
          >
            {tb.label}
          </button>
        ))}
      </div>
      <div className="text-[13px] text-[#777777] font-medium my-2.5 min-h-[20px]">{note}</div>

      {/* chart */}
      <svg viewBox="0 0 640 340" className="w-full h-auto block" role="img" aria-label="Calories and fullness over time">
        {/* gap zone */}
        {!same && idx >= reachI && (
          <rect x={xAt(reachI)} y={Y0} width={Math.max(0, xAt(Math.min(idx, feelI)) - xAt(reachI))} height={Y1 - Y0} fill={gapColor} />
        )}
        {/* shared reference line */}
        <line x1={X0} y1={yC(HEALTHY)} x2={X1} y2={yC(HEALTHY)} stroke="#6f6f6f" strokeDasharray="5 5" strokeWidth={1.4} />
        <text x={X0 + 6} y={yC(HEALTHY) - 7} fontSize={11} fill="#9a9a9a" fontWeight={700}>healthy amount · 750 cal</text>
        <text x={X1 - 6} y={yC(HEALTHY) - 7} textAnchor="end" fontSize={11} fill={AMBER} fontWeight={700}>feel full</text>
        {/* axes */}
        <line x1={X0} y1={Y0} x2={X0} y2={Y1} stroke="#2a2a2a" strokeWidth={1.3} />
        <line x1={X1} y1={Y0} x2={X1} y2={Y1} stroke="#2a2a2a" strokeWidth={1.3} />
        <line x1={X0} y1={Y1} x2={X1} y2={Y1} stroke="#2a2a2a" strokeWidth={1.4} />
        {/* left ticks */}
        {[0, 250, 500, 750, 1000, 1250].map((c) => (
          <g key={"l" + c}>
            <line x1={X0 - 4} y1={yC(c)} x2={X0} y2={yC(c)} stroke="#3a3a3a" strokeWidth={1.1} />
            <text x={X0 - 8} y={yC(c) + 3.5} textAnchor="end" fontSize={10} fill="#7a7a7a">{c}</text>
          </g>
        ))}
        {/* right qualitative */}
        <text x={X1 + 8} y={yF(6) + 3.5} fontSize={10} fill="#7a7a7a">empty</text>
        <text x={X1 + 8} y={yF(96) + 3.5} fontSize={10} fill="#7a7a7a">too full</text>
        {/* x ticks */}
        {[0, 10, 20, 30].map((m) => (
          <g key={"x" + m}>
            <line x1={xAt(m / 2)} y1={Y1} x2={xAt(m / 2)} y2={Y1 + 5} stroke="#3a3a3a" strokeWidth={1.2} />
            <text x={xAt(m / 2)} y={Y1 + 19} textAnchor="middle" fontSize={11} fill="#7a7a7a">{m + (m === 30 ? " min" : "")}</text>
          </g>
        ))}
        {/* axis titles */}
        <text x={18} y={(Y0 + Y1) / 2} textAnchor="middle" fontSize={11} fill="#9a9a9a" fontWeight={700} transform={`rotate(-90 18 ${(Y0 + Y1) / 2})`}>calories eaten</text>
        <text x={626} y={(Y0 + Y1) / 2} textAnchor="middle" fontSize={11} fill={AMBER} fontWeight={700} transform={`rotate(90 626 ${(Y0 + Y1) / 2})`}>fullness you feel</text>
        <text x={(X0 + X1) / 2} y={Y1 + 34} textAnchor="middle" fontSize={11} fill="#6a6a6a" fontWeight={600}>time since you started eating</text>
        {/* markers */}
        {idx >= reachI && !same && (
          <>
            <line x1={xAt(reachI)} y1={Y0} x2={xAt(reachI)} y2={Y1} stroke="#9a9a9a" strokeWidth={1.4} strokeDasharray="3 4" opacity={0.55} />
            <text x={xAt(reachI)} y={Y0 + 11} textAnchor="middle" fontSize={10.5} fontWeight={800} fill="#b0b0b0">healthy amount</text>
          </>
        )}
        {idx >= feelI && (
          <>
            <line x1={xAt(feelI)} y1={Y0} x2={xAt(feelI)} y2={Y1} stroke={AMBER} strokeWidth={1.4} strokeDasharray="3 4" opacity={0.6} />
            <text x={xAt(feelI)} y={Y0 + 11} textAnchor="middle" fontSize={10.5} fontWeight={800} fill={AMBER}>{same ? "full · on target" : "feel full"}</text>
          </>
        )}
        {/* gap label */}
        {!same && idx >= feelI && (
          <text x={(xAt(reachI) + xAt(feelI)) / 2} y={Y0 + 26} textAnchor="middle" fontSize={11} fontWeight={800} fill={gapTextColor}>
            {`the gap · ${(feelI - reachI) * 2} min`}
          </text>
        )}
        {/* lines */}
        <path d={linePath(d.C, idx, yC)} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <path d={linePath(d.F, idx, yF)} fill="none" stroke={AMBER} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={xAt(idx)} cy={yC(d.C[idx])} r={5} fill={INK} />
        <circle cx={xAt(idx)} cy={yF(d.F[idx])} r={5} fill={AMBER} />
        {/* overshoot callout */}
        {style === "keepfull" && idx >= 10 && (
          <text x={X1 - 4} y={yC(1200) - 9} textAnchor="end" fontSize={11} fontWeight={800} fill={RED}>≈ 1,200 cal</text>
        )}
      </svg>

      {/* legend */}
      <div className="flex flex-wrap gap-4 mt-2 mb-1 text-[12.5px] text-[#9a9a9a]">
        <span className="inline-flex items-center gap-2"><i className="inline-block w-4 h-[3px] rounded-sm" style={{ background: INK }} /> Calories eaten <span className="text-[#666]">(left)</span></span>
        <span className="inline-flex items-center gap-2"><i className="inline-block w-4 h-[3px] rounded-sm" style={{ background: AMBER }} /> Fullness you feel <span className="text-[#666]">(right)</span></span>
        <span className="inline-flex items-center gap-2"><i className="inline-block w-[18px] border-t-2 border-dashed border-[#777]" /> healthy amount = feel full</span>
      </div>

      {/* controls */}
      <div className="flex items-center gap-3.5 mt-3">
        <button
          onClick={() => { if (idx >= NPTS) { setIdx(0); setPlaying(true); } else { setPlaying((p) => !p); } }}
          aria-label={playing && idx < NPTS ? "Pause" : "Play"}
          className="flex-none w-11 h-11 rounded-full bg-[#b8923f] hover:bg-[#d4a853] text-[#0a0a0a] text-[16px] flex items-center justify-center transition"
        >
          {playing && idx < NPTS ? "❚❚" : "▶"}
        </button>
        <input
          type="range" min={0} max={NPTS} value={idx}
          onChange={(e) => { setPlaying(false); setIdx(Number(e.target.value)); }}
          className="flex-1"
          style={{ accentColor: AMBER }}
        />
        <div className="w-[74px] text-right font-bold text-[14px] text-[#c8c8c8] tabular-nums">{idx * 2} min</div>
      </div>

      {/* timeline */}
      <div className="mt-4 border border-[#222222] rounded-xl px-3.5 pb-2.5 pt-1 bg-[#101010]">
        <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#777] py-2.5">The meal, minute by minute</div>
        <div>
          {shown.map((e) => (
            <div
              key={e.t}
              className={
                "flex gap-3 animate-fade-in-up " +
                (e.k === "message"
                  ? "bg-[rgba(212,168,83,0.07)] rounded-lg my-1.5 px-3 py-2.5"
                  : "py-2.5 border-t border-[#1e1e1e] first:border-t-0")
              }
            >
              <div className="flex-none w-[50px] text-right font-bold text-[13px] text-[#bdbdbd] tabular-nums pt-[1px]">
                {e.k === "message" ? "" : `${e.at} min`}
              </div>
              <div className="flex-none w-5 text-center text-[15px]">{e.ic}</div>
              <div>
                <p className={"font-medium text-[14.5px] m-0 " + titleColor(e.k)}>{e.t}</p>
                {e.d && <p className="text-[13px] text-[#8c8c8c] mt-1 mb-0 leading-[1.5]">{e.d}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function titleColor(k: TLItem["k"]) {
  if (k === "message") return "text-[#d4a853]";
  if (k === "warn") return "text-[#cf9a4a]";
  if (k === "bad") return "text-[#e0795f]";
  if (k === "good") return "text-[#6fae7d]";
  return "text-[#e8e8e8]";
}
