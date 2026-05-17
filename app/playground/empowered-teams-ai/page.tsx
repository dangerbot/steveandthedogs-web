import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// Empowered Teams + AI — article page by Steve Black
// Lives at /playground/empowered-teams-ai
//
// Dark aesthetic matching the rest of steveandthedogs.com.
// Hero image lives at /public/empowered-teams-ai/hero.jpg
// ─────────────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "AI doesn't replace your team. It expands what they can do. — Steve Black",
  description:
    "What happens when an empowered product team adopts AI. Same team. Bigger reach. Richer overlap.",
};

export default function EmpoweredTeamsAIPage() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
      <Hero />
      <ArticleBody />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO — full-bleed black-and-white photo of a hockey bench, headline overlay
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full min-h-[540px] h-[78vh] max-h-[820px] flex flex-col justify-end">
      <Image
        src="/empowered-teams-ai/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 60%" }}
      />
      {/* Dark gradient for headline legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.92) 100%)",
        }}
      />
      <div className="relative max-w-[720px] mx-auto w-full px-8 pb-14 md:pb-16">
        <div className="text-[#d4a853] text-[13px] tracking-[0.12em] uppercase mb-6">
          Article · Product Leadership
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extralight leading-[1.05] tracking-[-0.02em] mb-6">
          AI doesn&apos;t replace your team. It expands what they can do.
        </h1>
        <p className="text-[19px] md:text-[21px] text-[#d0d0d0] font-light leading-[1.4] max-w-[600px]">
          What happens when an empowered product team adopts AI.
        </p>
        <div className="mt-8 text-[13px] text-white/70 tracking-wide">
          By <span className="text-[#d4a853]">Steve Black</span> · May 2026
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE BODY — narrow column with prose, Venn diagram visual, pull quote
// ─────────────────────────────────────────────────────────────────────────────
function ArticleBody() {
  return (
    <article className="max-w-[720px] mx-auto px-8 py-16 md:py-24 text-[17px] leading-[1.6] font-light">
      <p className="text-[19px] leading-[1.55] mb-6">
        Something exciting is happening on empowered product teams adopting AI:
        each person on the team is getting more capable, and the overlap between
        roles is growing. Same team. Bigger reach. Richer overlap.
      </p>

      <p className="mb-6">
        On every empowered product team I work with, the pattern is the same.
        The team doesn&apos;t change — what each person on it can do does.
        Product managers clarify faster. Engineers implement faster. Designers
        stay in the creative loop longer. And the ground the team can cover
        together grows.
      </p>

      <p className="mb-6">
        The metaphor I keep coming back to is hockey. Imagine putting bigger,
        faster, stronger players on a junior team. Same positions on the ice.
        Same set plays. But suddenly the team can compete at a level it
        couldn&apos;t before. That&apos;s what AI is doing for product,
        engineering, and design — when the team is empowered to use it well.
      </p>

      <VennDiagram />

      <p className="my-6">
        AI didn&apos;t add a fourth circle. The team didn&apos;t grow. What grew
        is what each person on the team is capable of doing — and how much
        shared territory the team can cover together.
      </p>

      <h2 className="text-[28px] font-light mt-14 mb-5 tracking-[-0.01em]">
        What changes for each role
      </h2>

      <ul className="my-6 list-none p-0">
        <RoleRow
          role="Product"
          change="Clarifies faster. Drafts specs faster. Prototypes before pixels are touched. Spends more time with customers and less time formatting documents."
        />
        <RoleRow
          role="Engineering"
          change="Implements faster. Pair-programs with an AI that already knows the codebase. A mid-junior engineer ships at senior speed because the senior is in the editor with them."
        />
        <RoleRow
          role="Design"
          change="Stays in the creative loop longer. AI handles the rote — first-pass screens, copy variants, asset prep — so design spends time on the parts that need human taste."
        />
      </ul>

      <h2 className="text-[28px] font-light mt-14 mb-5 tracking-[-0.01em]">
        What doesn&apos;t change
      </h2>

      <p className="mb-6">
        The fundamentals. We still need to know{" "}
        <em className="not-italic text-[#d4a853] font-normal">why</em>{" "}
        we&apos;re building something.{" "}
        <em className="not-italic text-[#d4a853] font-normal">Who</em>{" "}
        we&apos;re building it for.{" "}
        <em className="not-italic text-[#d4a853] font-normal">What problem</em>{" "}
        we&apos;re solving. AI doesn&apos;t answer those questions — it just
        helps the team execute on them faster.
      </p>

      <p className="mb-6">
        That&apos;s why the multiplier only works when the team is already
        empowered. If a team is grinding through a backlog of feature tickets
        with no clear connection to outcomes, AI just makes them grind faster.
        If a team owns its outcomes — knows what it&apos;s trying to move and
        why — AI is the most capable colleague that team has ever had.
      </p>

      <blockquote className="my-14 py-6 px-8 border-l-[3px] border-[#d4a853] bg-[rgba(212,168,83,0.04)] text-[22px] font-light leading-[1.4]">
        AI isn&apos;t your team&apos;s replacement. It&apos;s the most capable
        colleague your team has ever had. Lead empowered teams accordingly.
      </blockquote>

      <h2 className="text-[28px] font-light mt-14 mb-5 tracking-[-0.01em]">
        The empowered-team test
      </h2>

      <p className="mb-6">
        If you want to know whether your team is ready to compound with AI or
        just churn faster with it, ask three questions:
      </p>

      <p className="mb-6">
        <strong className="font-medium text-[#f5f5f5]">
          Does the team understand the why?
        </strong>{" "}
        Not the feature list. The actual outcomes we&apos;re trying to move and
        why they matter to the business and the user.
      </p>

      <p className="mb-6">
        <strong className="font-medium text-[#f5f5f5]">
          Does the team own outcomes, not output?
        </strong>{" "}
        When a ticket ships, is the question &quot;did we close it&quot; or
        &quot;did it move the metric we thought it would&quot;?
      </p>

      <p className="mb-6">
        <strong className="font-medium text-[#f5f5f5]">
          Can the team act without waiting in a telephone chain?
        </strong>{" "}
        When a designer has a question about a product decision, can they answer
        it themselves — or do they wait for a meeting?
      </p>

      <p className="mb-6">
        If all three answers are yes, AI is going to multiply that team. If any
        answer is no, fix that first. The tool isn&apos;t the problem — the
        operating model is.
      </p>

      <section className="mt-20 pt-10 border-t border-[#222222]">
        <p className="mb-6">
          I lead empowered product teams that ship consumer products people come
          back to. AI is the most exciting thing to happen to that work in 20
          years — not because it changes who&apos;s on the ice, but because it
          changes how fast they can play.
        </p>
        <p className="mt-8 text-[14px] text-[#888888]">
          — Steve Black ·{" "}
          <a
            href="https://www.steveandthedogs.com"
            className="text-[#d4a853] no-underline hover:underline"
          >
            steveandthedogs.com
          </a>
        </p>
      </section>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VENN DIAGRAM — side-by-side before/after circles, the article's hero visual
// ─────────────────────────────────────────────────────────────────────────────
function VennDiagram() {
  return (
    <section className="my-16 p-8 md:p-12 bg-[#141414] border border-[#222222] rounded-xl">
      <div className="text-center text-[12px] tracking-[0.16em] uppercase text-[#d4a853] mb-2">
        The Shift
      </div>
      <div className="text-center text-[22px] font-light tracking-[-0.01em] mb-10">
        Same circles. Bigger reach. Richer overlap.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <VennCell
          stateLabel="Before"
          caption="Three teams. Limited capability. Narrow overlap. Telephone-chain between disciplines."
          radius={50}
          opacity="0.18"
          stroke={1.5}
          positions={{
            product: { cx: 100, cy: 90 },
            engineering: { cx: 180, cy: 90 },
            design: { cx: 140, cy: 155 },
          }}
        />
        <VennCell
          stateLabel="With AI as multiplier"
          caption="Same three teams. Bigger capability per role. Bigger overlap. AI fills the space between disciplines."
          radius={72}
          opacity="0.28"
          stroke={2}
          positions={{
            product: { cx: 105, cy: 85 },
            engineering: { cx: 175, cy: 85 },
            design: { cx: 140, cy: 150 },
          }}
        />
      </div>
    </section>
  );
}

type Pos = { cx: number; cy: number };
type Positions = { product: Pos; engineering: Pos; design: Pos };

function VennCell({
  stateLabel,
  caption,
  radius,
  opacity,
  stroke,
  positions,
}: {
  stateLabel: string;
  caption: string;
  radius: number;
  opacity: string;
  stroke: number;
  positions: Positions;
}) {
  // Label positions tuned to sit above (PM/ENG) or below (DESIGN) each circle.
  const labels = {
    product: { x: positions.product.cx - radius * 0.65, y: positions.product.cy - radius - 8 },
    engineering: {
      x: positions.engineering.cx - radius * 0.65,
      y: positions.engineering.cy - radius - 8,
    },
    design: { x: positions.design.cx - radius * 0.5, y: positions.design.cy + radius + 18 },
  };
  return (
    <div className="text-center">
      <div className="text-[13px] tracking-[0.12em] uppercase text-[#888888] mb-4">
        {stateLabel}
      </div>
      <svg viewBox="0 0 280 260" className="w-full max-w-[280px] h-[260px] mx-auto block">
        <circle
          cx={positions.product.cx}
          cy={positions.product.cy}
          r={radius}
          fill={`rgba(212, 168, 83, ${opacity})`}
          stroke="#d4a853"
          strokeWidth={stroke}
        />
        <circle
          cx={positions.engineering.cx}
          cy={positions.engineering.cy}
          r={radius}
          fill={`rgba(212, 168, 83, ${opacity})`}
          stroke="#d4a853"
          strokeWidth={stroke}
        />
        <circle
          cx={positions.design.cx}
          cy={positions.design.cy}
          r={radius}
          fill={`rgba(212, 168, 83, ${opacity})`}
          stroke="#d4a853"
          strokeWidth={stroke}
        />
        <text
          x={labels.product.x}
          y={labels.product.y}
          fill="#f5f5f5"
          fontSize="11"
          fontFamily="-apple-system, sans-serif"
          fontWeight="500"
        >
          PRODUCT
        </text>
        <text
          x={labels.engineering.x}
          y={labels.engineering.y}
          fill="#f5f5f5"
          fontSize="11"
          fontFamily="-apple-system, sans-serif"
          fontWeight="500"
        >
          ENGINEERING
        </text>
        <text
          x={labels.design.x}
          y={labels.design.y}
          fill="#f5f5f5"
          fontSize="11"
          fontFamily="-apple-system, sans-serif"
          fontWeight="500"
        >
          DESIGN
        </text>
      </svg>
      <div className="mt-4 text-[14px] text-[#888888] leading-[1.5]">{caption}</div>
    </div>
  );
}

function RoleRow({ role, change }: { role: string; change: string }) {
  return (
    <li className="py-4 border-b border-[#222222] last:border-b-0 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-6 md:items-baseline">
      <span className="font-medium text-[#d4a853] tracking-wider text-[14px] uppercase">
        {role}
      </span>
      <span className="text-[#f5f5f5] text-[17px] leading-[1.5]">{change}</span>
    </li>
  );
}
