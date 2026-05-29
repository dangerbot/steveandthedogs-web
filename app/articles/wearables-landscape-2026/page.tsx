import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ThreatsGrid from "./ThreatsGrid";
import ProductExplorer from "./ProductExplorer";
import { ShareChart, FormFactorChart, GrowthChart } from "./Charts";
import MedicalIcon from "./MedicalIcon";
import TocSidebar from "./TocSidebar";
import {
  HERO_STATS,
  HEADLINES,
  POV_CARDS,
  SUB_ROWS,
  NARRATIVES,
  MEDICAL_CARDS,
  BETS,
  TIMELINE,
  MILESTONE_NOTES,
  FIELD_NOTES,
  REFERENCES,
} from "./data";

// ─────────────────────────────────────────────────────────────────────────────
// The State of Wearables, 2026 — interactive report
// Lives at /articles/wearables-landscape-2026.
//
// Design intent: this page departs from the dark Steve-and-the-Dogs site
// aesthetic and uses a warm light-mode palette (#fafaf7 base, #d4a853 amber
// accent) to feel like a published research piece. The site nav still renders
// above (it's global in the root layout).
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "The State of Wearables, 2026 — Steve Black",
  description:
    "A field map of every wearable that matters in 2026. Smartwatches, rings, bands, CGMs, EMS, neurostim, smart glasses. Built by Steve Black.",
};

export default function WearablesLandscape2026() {
  return (
    <main
      id="top"
      className="bg-[#fafaf7] text-[#0a0a0a] min-h-screen pt-16 font-[family-name:var(--font-sans)] selection:bg-[#fdf6e8] selection:text-[#0a0a0a]"
    >
      <div className="lg:flex lg:items-start">
        <TocSidebar />
        <div className="flex-1 min-w-0">
          <Hero />
          <HeroPoster />
          <HeroStats />
          <RecentHeadlines />
          <CompetitiveLandscape />
          <PointOfView />
          <ProductExplorerSection />
          <Subscriptions />
          <CategoryNarratives />
          <MedicalFringe />
          <ClosingPov />
          <ChartsSection />
          <Timeline />
          <FieldNotes />
          <References />
          <Author />
          <ReportFooter />
        </div>
      </div>
    </main>
  );
}

// ─── Shared bits ────────────────────────────────────────────────────────────

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-[#e8e6df] first:border-t-0 scroll-mt-24 ${className}`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-20 md:py-24">
        {children}
      </div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] tracking-[0.22em] uppercase font-semibold text-[#d4a853] mb-4">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight leading-[1.1] text-[#0a0a0a] mb-4 max-w-3xl">
      {children}
    </h2>
  );
}

function SectionLede({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[17px] md:text-[19px] font-light leading-relaxed text-[#4a4a48] max-w-3xl mb-12">
      {children}
    </p>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="mt-10 pl-6 border-l-2 border-[#d4a853] text-[17px] md:text-[20px] font-light italic leading-relaxed text-[#0a0a0a] max-w-3xl">
      {children}
    </blockquote>
  );
}

function FootnoteRef({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      className="ml-1 inline-block text-[10px] font-semibold text-[#d4a853] align-super no-underline hover:text-[#9a6e0c] transition-colors"
    >
      [{label}]
    </a>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <header className="max-w-[1240px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-12">
      <div className="flex items-center gap-3 flex-wrap text-[11px] tracking-[0.2em] uppercase text-[#8a8a85] font-medium mb-8">
        <span>
          <span className="text-[#d4a853] font-semibold">01</span>
          &nbsp;&nbsp;MARKET RESEARCH
        </span>
        <span>·</span>
        <span>MAY 2026</span>
        <span>·</span>
        <span>WEARABLES</span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-[88px] font-extralight tracking-[-0.035em] leading-[1.02] text-[#0a0a0a] mb-8 max-w-5xl">
        The State of{" "}
        <em className="not-italic font-light italic text-[#d4a853]">
          Wearables
        </em>
        , 2026
      </h1>

      <p className="text-[19px] md:text-[22px] font-light leading-[1.5] text-[#4a4a48] max-w-3xl mb-10">
        Hardware became the funnel. AI coaching and subscription value became
        the product. A field map of every device that matters — who&apos;s playing
        where, how we got here, and what makes someone wear it again the next
        day.
      </p>

      <div className="flex items-center gap-4 flex-wrap text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] font-medium">
        <span>BY STEVE BLACK</span>
        <span>·</span>
        <span>SOURCES: PUBLIC AS OF MAY 2026</span>
      </div>
    </header>
  );
}

// ─── Hero poster (the punk-zine cover image) ────────────────────────────────

function HeroPoster() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 md:px-10 pb-12">
      <figure className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] rounded-2xl overflow-hidden border border-[#e8e6df] bg-[#0a0a0a] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
        <Image
          src="/wearables-2026-hero/steve_black_wearables_2026_hero.png"
          alt="Hand-painted poster reading 'The State of Wearables 2026' taped to a telephone pole, with brand logos and a punk illustration"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1240px"
          className="object-cover"
        />
      </figure>
      <figcaption className="mt-3 text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] font-medium text-center">
        The State of Wearables 2026 · Inspired and prompted by Steve, generated by Gemini
      </figcaption>
    </div>
  );
}

// ─── Hero stats ─────────────────────────────────────────────────────────────

function HeroStats() {
  return (
    <div className="max-w-[1240px] mx-auto px-6 md:px-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#e8e6df] bg-[#e8e6df] gap-px rounded-xl overflow-hidden">
        {HERO_STATS.map((s) => (
          <div
            key={s.num}
            className="bg-white p-7 md:p-8 flex flex-col gap-3"
          >
            <div className="text-[40px] md:text-[44px] font-light tracking-tight leading-none text-[#0a0a0a]">
              {s.num}
              {s.suffix && (
                <span className="text-[18px] text-[#8a8a85] font-light ml-0.5">
                  {s.suffix}
                </span>
              )}
              <FootnoteRef id={s.refId} label={s.refLabel} />
            </div>
            <div className="text-[13.5px] text-[#4a4a48] font-light leading-relaxed">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Recent headlines ───────────────────────────────────────────────────────

function RecentHeadlines() {
  return (
    <Section id="recent">
      <Eyebrow>02 · The last six months</Eyebrow>
      <SectionTitle>What&apos;s actually happening, right now.</SectionTitle>
      <SectionLede>
        A live feed of the announcements shaping the next chapter. Newest
        first. Last updated May 28, 2026.
      </SectionLede>

      <div className="flex flex-col">
        {HEADLINES.map((h, i) => (
          <div
            key={h.title}
            className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-7 ${
              i === 0 ? "border-t border-[#e8e6df]" : ""
            } border-b border-[#e8e6df]`}
          >
            <div className="flex flex-col gap-1 text-[11px] tracking-[0.18em] uppercase font-medium">
              <span className="text-[#0a0a0a]">{h.date}</span>
              <span className="text-[#d4a853] font-semibold">{h.brand}</span>
            </div>
            <div>
              {h.badge && (
                <span className="inline-block mb-2 text-[10px] tracking-[0.18em] uppercase font-semibold text-[#9a6e0c] bg-[#fdf6e8] border border-[#e8d9a8] px-2 py-1 rounded">
                  {h.badge}
                </span>
              )}
              <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#0a0a0a] mb-2 leading-snug">
                {h.title}
              </h3>
              <p
                className="text-[15px] text-[#4a4a48] font-light leading-relaxed mb-3"
                dangerouslySetInnerHTML={{ __html: h.desc }}
              />
              <a
                href={h.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.15em] uppercase font-medium text-[#8a8a85] hover:text-[#d4a853] transition-colors"
              >
                {h.sourceLabel} ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Competitive landscape ──────────────────────────────────────────────────

function CompetitiveLandscape() {
  return (
    <Section id="landscape">
      <div className="relative">
        <Image
          src="/wearables-2026-hero/punk-dancer-bottom.png"
          alt=""
          aria-hidden="true"
          width={432}
          height={853}
          sizes="100px"
          className="hidden md:block absolute right-0 -top-6 w-[88px] lg:w-[100px] h-auto opacity-95 rotate-[5deg] pointer-events-none"
        />
        <Eyebrow>03 · The players</Eyebrow>
        <SectionTitle>
          Who matters in wearables, and where each one is vulnerable.
        </SectionTitle>
        <SectionLede>
          Nine companies shape how the next eighteen months play out. Market
          share is estimated consumer wearables, all categories combined
          (smartwatches, bands, rings, hearables, glasses).
          <FootnoteRef id="ref-5" label="5" /> Reorder the grid by what matters
          most.
        </SectionLede>
      </div>
      <ThreatsGrid />
    </Section>
  );
}

// ─── POV ────────────────────────────────────────────────────────────────────

function PointOfView() {
  return (
    <Section id="pov">
      <Eyebrow>04 · Point of view</Eyebrow>
      <SectionTitle>Five strategic axes everyone is now playing on.</SectionTitle>
      <SectionLede>
        The wearables category bifurcated quietly in 2024–2025. Hardware is
        increasingly the gateway. The real product is software, AI, and
        recurring revenue. Five axes describe where the brands diverge.
      </SectionLede>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {POV_CARDS.map((card) => (
          <div
            key={card.num}
            className="bg-white border border-[#e8e6df] rounded-xl p-6 flex flex-col gap-3 transition-colors hover:border-[#d4a853]/60"
          >
            <span className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-[#d4a853]">
              {card.num}
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-[#0a0a0a] leading-tight tracking-tight">
              {card.title}
            </h3>
            <p className="text-[14.5px] text-[#4a4a48] font-light leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </div>

      <PullQuote>
        The wearables category is at the inflection point where AI coaching
        becomes the product, not the watch. Everyone is converging on the same
        sensor stack — heart rate, SpO2, sleep, ECG soon. What differentiates
        is whether the device gives you a daily reason to come back.
        That&apos;s a software problem now.
      </PullQuote>
    </Section>
  );
}

// ─── Product explorer ──────────────────────────────────────────────────────

function ProductExplorerSection() {
  return (
    <Section id="explorer">
      <Eyebrow>05 · Product explorer</Eyebrow>
      <SectionTitle>Every wearable that matters, in one place.</SectionTitle>
      <SectionLede>
        Filter by category, brand, or feature. Sort any column. Search by
        name. The list is current as of May 2026 and covers 50+ products from
        $40 fitness bands to $3,500 mixed reality headsets.
      </SectionLede>
      <ProductExplorer />
    </Section>
  );
}

// ─── Subscriptions ─────────────────────────────────────────────────────────

function Subscriptions() {
  return (
    <Section id="subscriptions">
      <div className="relative">
        <Image
          src="/wearables-2026-hero/punk-mohawk.png"
          alt=""
          aria-hidden="true"
          width={1374}
          height={1152}
          sizes="130px"
          className="hidden md:block absolute right-0 -top-4 w-[110px] lg:w-[130px] h-auto opacity-90 -rotate-[5deg] pointer-events-none"
        />
        <Eyebrow>06 · Subscription economics</Eyebrow>
        <SectionTitle>The real business model is recurring.</SectionTitle>
        <SectionLede>
          Apple Fitness+ defined $9.99/mo. Google matched it. Whoop charges
          2–3x that and requires it. Oura&apos;s $5.99 add-on is now the most
          vulnerable model in the category — Galaxy Ring and Ultrahuman both
          ship with zero subscription.
        </SectionLede>
      </div>

      <div className="overflow-x-auto bg-white border border-[#e8e6df] rounded-xl">
        <table className="w-full border-collapse text-[14px] min-w-[720px]">
          <thead>
            <tr className="border-b border-[#e8e6df] bg-[#f5f4ef]">
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Service
              </th>
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Monthly
              </th>
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Annual
              </th>
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                What you get
              </th>
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Required?
              </th>
            </tr>
          </thead>
          <tbody>
            {SUB_ROWS.map((row) => (
              <tr
                key={row.service}
                className="border-b border-[#f0eee7] last:border-b-0 hover:bg-[#faf9f5] transition-colors"
              >
                <td className="px-4 py-4 font-semibold text-[#0a0a0a]">
                  {row.service}
                </td>
                <td className="px-4 py-4 font-medium text-[#0a0a0a] tabular-nums">
                  {row.monthly}
                </td>
                <td className="px-4 py-4 font-medium text-[#0a0a0a] tabular-nums">
                  {row.annual}
                </td>
                <td className="px-4 py-4 text-[13.5px] text-[#4a4a48] font-light">
                  {row.what}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block text-[10.5px] tracking-[0.14em] uppercase font-semibold px-2 py-1 rounded border ${
                      row.reqStyle === "required"
                        ? "text-[#9a6e0c] bg-[#fdf6e8] border-[#e8d9a8]"
                        : "text-[#4a4a48] bg-[#f5f4ef] border-[#e8e6df]"
                    }`}
                  >
                    {row.required}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PullQuote>
        Price competition is converging, with Apple, Google, and Strava all
        settling in at $9.99/mo. The real fight is who delivers a coaching
        experience users actually open every day.
      </PullQuote>
    </Section>
  );
}

// ─── Category narratives ───────────────────────────────────────────────────

function CategoryNarratives() {
  return (
    <Section id="narratives">
      <Eyebrow>07 · Category narratives</Eyebrow>
      <SectionTitle>Who&apos;s winning where, and why.</SectionTitle>
      <SectionLede>
        Eight major categories. Each at a different stage. Each with a
        different dynamic. The strategic edge is reading where the next move
        comes from.
      </SectionLede>

      <div className="flex flex-col gap-10 max-w-3xl">
        {NARRATIVES.map((n) => (
          <div
            key={n.anchor}
            className="border-l-2 border-[#e8d9a8] pl-6 md:pl-8"
          >
            <span className="block text-[10.5px] tracking-[0.18em] uppercase font-semibold text-[#d4a853] mb-2">
              {n.anchor}
            </span>
            <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#0a0a0a] mb-3 leading-snug">
              {n.title}
            </h3>
            {n.body.map((para, i) => (
              <p
                key={i}
                className="text-[15.5px] text-[#4a4a48] font-light leading-relaxed mb-3 last:mb-0"
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Medical / fringe ───────────────────────────────────────────────────────

function MedicalFringe() {
  return (
    <Section id="medical">
      <div className="relative">
        <Image
          src="/wearables-2026-hero/punk-dancer-top.png"
          alt=""
          aria-hidden="true"
          width={409}
          height={789}
          sizes="100px"
          className="hidden md:block absolute right-0 -top-6 w-[88px] lg:w-[100px] h-auto opacity-95 -rotate-[6deg] pointer-events-none"
        />
        <Eyebrow>08 · The medical & fringe layer</Eyebrow>
        <SectionTitle>
          Where the next platform shift is coming from.
        </SectionTitle>
        <SectionLede>
          The medical-fringe layer used to be invisible to consumer wearables.
          CGMs went OTC in 2024 and broke that boundary. Migraine devices, EMS,
          EEG, and bed-as-platform are all proving small but defensible
          direct-to-consumer health hardware models.
        </SectionLede>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MEDICAL_CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-white border border-[#e8e6df] rounded-xl p-6 flex flex-col gap-3 transition-colors hover:border-[#d4a853]/60"
          >
            <h4 className="flex items-center gap-3 text-lg font-semibold text-[#0a0a0a] tracking-tight">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fdf6e8] text-[#9a6e0c] border border-[#e8d9a8] shrink-0">
                <MedicalIcon icon={card.icon} />
              </span>
              <span className="leading-tight">{card.title}</span>
            </h4>
            <p
              className="text-[14.5px] text-[#4a4a48] font-light leading-relaxed"
              dangerouslySetInnerHTML={{ __html: card.body }}
            />
            <div className="mt-2 pt-4 border-t border-[#f0eee7] text-[13px] leading-[1.85]">
              {card.products.map((p) => (
                <div key={p.name}>
                  <strong className="text-[#0a0a0a] font-semibold">
                    {p.name}
                  </strong>
                  <span className="text-[#8a8a85] font-light"> {p.meta}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Closing POV — 3 bets ──────────────────────────────────────────────────

function ClosingPov() {
  return (
    <Section id="bets">
      <Eyebrow>09 · Where it&apos;s going</Eyebrow>
      <SectionTitle>Three bets to watch over the next 18 months.</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {BETS.map((b) => (
          <div
            key={b.num}
            className="bg-white border border-[#e8e6df] rounded-xl p-6 flex flex-col gap-3"
          >
            <span className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-[#d4a853]">
              {b.num}
            </span>
            <h3 className="text-lg md:text-xl font-semibold text-[#0a0a0a] leading-tight tracking-tight">
              {b.title}
            </h3>
            <p className="text-[14.5px] text-[#4a4a48] font-light leading-relaxed">
              {b.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Charts ────────────────────────────────────────────────────────────────

function ChartsSection() {
  return (
    <Section id="charts">
      <div className="relative">
        <Image
          src="/wearables-2026-hero/punk-mohawk.png"
          alt=""
          aria-hidden="true"
          width={1374}
          height={1152}
          sizes="140px"
          className="hidden lg:block absolute right-0 -top-4 w-[130px] h-auto opacity-90 rotate-[4deg] pointer-events-none"
        />
        <Eyebrow>10 · The shape of the market</Eyebrow>
        <SectionTitle>
          Smartwatch share is concentrated. New form factors are rising.
        </SectionTitle>
        <SectionLede>
        Two views. The first: who dominates the global{" "}
        <strong className="font-semibold text-[#0a0a0a]">smartwatch</strong>{" "}
        category by shipment volume (Counterpoint Q4 2025). The second: which
        form factors across the broader wearables space are gaining momentum
        vs. saturating. Total consumer wearables share — including earbuds,
        bands, and rings — is a different metric, used on the player cards
        above.
        <FootnoteRef id="ref-5" label="5" />
      </SectionLede>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white border border-[#e8e6df] rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-[#0a0a0a] tracking-tight mb-1">
            Global smartwatch vendor share
            <FootnoteRef id="ref-5" label="5" />
          </h3>
          <p className="text-[13px] text-[#8a8a85] font-light leading-relaxed mb-6">
            Q4 2025 shipment share — Counterpoint Research. Smartwatches only —
            excludes earbuds, bands, rings. &quot;Other&quot; = long tail of
            vivo, OPPO, Realme, Mobvoi, smaller Chinese white-labels.
          </p>
          <ShareChart />
        </div>

        <div className="bg-white border border-[#e8e6df] rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-[#0a0a0a] tracking-tight mb-1">
            Form factor momentum
          </h3>
          <p className="text-[13px] text-[#8a8a85] font-light leading-relaxed mb-6">
            Each form factor&apos;s growth signal in 2025–2026 — sorted by tier.{" "}
            <span className="text-[#d4a853] font-semibold">
              Amber = breakout
            </span>{" "}
            (new category surging) ·{" "}
            <span className="text-[#0a0a0a] font-semibold">Dark = growing</span>{" "}
            (meaningful momentum) ·{" "}
            <span className="text-[#8a8a85] font-semibold">
              Gray = mature or niche
            </span>
            . Qualitative — hover any bar for what&apos;s driving it.
          </p>
          <FormFactorChart />
        </div>
      </div>
      </div>
    </Section>
  );
}

// ─── Timeline ──────────────────────────────────────────────────────────────

function Timeline() {
  return (
    <Section id="timeline">
      <Eyebrow>11 · How we got here</Eyebrow>
      <SectionTitle>From clip-on to AI Coach in seventeen years.</SectionTitle>
      <SectionLede>
        The arc of consumer wearables — the moments that defined each chapter.
        Scroll right to walk the category forward.
      </SectionLede>

      <div className="relative -mx-6 md:-mx-10 px-6 md:px-10 overflow-x-auto pb-6 [scrollbar-color:#d4d2c8_transparent]">
        <div className="relative flex gap-5 min-w-max pt-2 pb-4">
          {/* horizontal line */}
          <div className="absolute left-0 right-0 top-[58px] h-px bg-[#e8e6df]" />
          {TIMELINE.map((t) => (
            <div
              key={t.year}
              className="relative w-[260px] shrink-0 bg-white border border-[#e8e6df] rounded-xl p-5"
            >
              <div className="text-[24px] font-light tracking-tight text-[#d4a853] leading-none mb-2">
                {t.year}
              </div>
              <div className="absolute left-7 -top-1.5 w-3 h-3 rounded-full bg-[#d4a853] border-2 border-[#fafaf7]" />
              <h4 className="text-[15px] font-semibold text-[#0a0a0a] tracking-tight mb-2 mt-1 leading-snug">
                {t.title}
              </h4>
              <p className="text-[13px] text-[#4a4a48] font-light leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[11px] tracking-[0.18em] uppercase text-[#a3a39a] font-medium text-center mt-2">
        ← SCROLL →
      </p>

      <div className="mt-16 bg-white border border-[#e8e6df] rounded-xl p-6 md:p-8">
        <h4 className="text-lg font-semibold text-[#0a0a0a] tracking-tight mb-1">
          Annual unit shipments — wearables vs. smartphones
          <FootnoteRef id="ref-6" label="6" />
        </h4>
        <p className="text-[13px] text-[#8a8a85] font-light leading-relaxed mb-6 max-w-3xl">
          Smartphones peaked at 1.47B in 2016, slid to 1.17B in 2023,
          recovering modestly to 1.25B in 2025. Wearables grew 21× over the
          same window. Macro milestones marked above.
        </p>
        <GrowthChart />

        <div className="mt-6 p-4 bg-[#fdf6e8] border border-[#e8d9a8] rounded-lg relative">
          <div className="text-[16px] font-semibold text-[#0a0a0a] mb-1 pr-20 sm:pr-24">
            29M → 614M wearables · 21× growth in 12 years.
          </div>
          <div className="text-[13px] text-[#4a4a48] font-light pr-20 sm:pr-24">
            Smartphones peaked in 2016 and have hovered near 1.2B since.
            Wearables grew from ~2% of smartphone unit volume in 2014 to ~50%
            in 2026.
          </div>
          <Image
            src="/wearables-2026-hero/punk-dancer-top.png"
            alt=""
            aria-hidden="true"
            width={409}
            height={789}
            sizes="90px"
            className="absolute right-2 -top-6 sm:-top-8 w-[72px] sm:w-[90px] h-auto -rotate-[4deg] pointer-events-none"
          />
        </div>

        <p className="text-[12px] text-[#8a8a85] font-light italic mt-4">
          Source: IDC Worldwide Wearable Device Tracker & IDC Worldwide
          Quarterly Mobile Phone Tracker — figures via IDC press releases and
          Statista summaries.{" "}
          <a
            href="#ref-6"
            className="text-[#9a6e0c] hover:text-[#d4a853] transition-colors not-italic font-medium"
          >
            See reference 6 for full citations.
          </a>
        </p>

        <div className="mt-8 pt-6 border-t border-[#e8e6df]">
          <h5 className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#4a4a48] mb-4">
            What the markers mean
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MILESTONE_NOTES.map((m) => (
              <div
                key={m.year}
                className="border-l-2 border-[#e8d9a8] pl-4"
              >
                <div className="text-[12px] tracking-[0.12em] uppercase font-semibold text-[#d4a853] mb-1">
                  {m.year}
                </div>
                <p className="text-[13.5px] text-[#4a4a48] font-light leading-relaxed">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Field notes ───────────────────────────────────────────────────────────

function FieldNotes() {
  return (
    <Section id="fieldnotes">
      <Eyebrow>12 · Field notes</Eyebrow>
      <SectionTitle>What I see in the field.</SectionTitle>
      <SectionLede>
        I stay grounded in this category by continuously interviewing the
        people around me — at the gym, on the pickleball court, on training
        runs, and on group rides. Three communities, three very different
        relationships with wearables. Here&apos;s what I&apos;m actually seeing on
        wrists, chests, fingers, and bike bars in 2026.
      </SectionLede>

      <div className="overflow-x-auto bg-white border border-[#e8e6df] rounded-xl">
        <table className="w-full border-collapse text-[14px] min-w-[920px]">
          <thead>
            <tr className="border-b border-[#e8e6df] bg-[#f5f4ef]">
              <th className="w-[180px] text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Community
              </th>
              <th className="w-[130px] text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                Engagement
              </th>
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                What gets worn
              </th>
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                App layer
              </th>
              <th className="text-left px-4 py-3 text-[11px] tracking-[0.12em] uppercase text-[#4a4a48] font-semibold">
                What I&apos;m reading into it
              </th>
            </tr>
          </thead>
          <tbody>
            {FIELD_NOTES.map((row) => {
              const engClass =
                row.engagementLevel === "very-high"
                  ? "bg-[#d4a853] text-[#0a0a0a] border-[#d4a853]"
                  : row.engagementLevel === "high"
                    ? "bg-[#fdf6e8] text-[#9a6e0c] border-[#e8d9a8]"
                    : "bg-[#f5f4ef] text-[#4a4a48] border-[#e8e6df]";
              return (
                <tr
                  key={row.community}
                  className="border-b border-[#f0eee7] last:border-b-0 align-top hover:bg-[#faf9f5] transition-colors"
                >
                  <td className="px-4 py-5 font-semibold text-[#0a0a0a]">
                    {row.community}
                  </td>
                  <td className="px-4 py-5">
                    <span
                      className={`inline-block text-[10.5px] tracking-[0.14em] uppercase font-semibold px-2 py-1 rounded border ${engClass}`}
                    >
                      {row.engagement}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-[13.5px] text-[#4a4a48] font-light leading-relaxed">
                    {row.worn}
                  </td>
                  <td className="px-4 py-5 text-[13.5px] text-[#4a4a48] font-light leading-relaxed">
                    {row.app}
                  </td>
                  <td
                    className="px-4 py-5 text-[13.5px] text-[#4a4a48] font-light leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: row.reading }}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="relative">
        <PullQuote>
          Three communities. Three different relationships with wearables. The
          gap between <em>known</em> and <em>adopted</em> is where the next
          products win.
        </PullQuote>
        <Image
          src="/wearables-2026-hero/punk-dancer-top.png"
          alt=""
          aria-hidden="true"
          width={409}
          height={789}
          sizes="120px"
          className="hidden md:block absolute -right-2 -bottom-4 lg:-right-10 w-[96px] lg:w-[120px] h-auto opacity-95 -rotate-[5deg] pointer-events-none"
        />
      </div>
    </Section>
  );
}

// ─── References ────────────────────────────────────────────────────────────

function References() {
  return (
    <Section id="references">
      <Eyebrow>13 · References</Eyebrow>
      <SectionTitle>Where the numbers come from.</SectionTitle>
      <SectionLede>
        Every statistic cited in the hero and charts links here. Primary
        sources used wherever possible — IDC&apos;s wearable device tracker,
        Counterpoint Research&apos;s smartwatch market reports, and direct
        vendor pricing pages.
      </SectionLede>

      <ol className="flex flex-col gap-6 max-w-3xl">
        {REFERENCES.map((ref, i) => (
          <li
            key={ref.id}
            id={ref.id}
            className="grid grid-cols-[36px_1fr] gap-4 scroll-mt-24"
          >
            <span className="text-[24px] font-extralight text-[#d4a853] leading-none pt-1 tabular-nums">
              {i + 1}
            </span>
            <div
              className="text-[14px] text-[#4a4a48] font-light leading-relaxed [&_a]:text-[#9a6e0c] [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[#e8d9a8] [&_a:hover]:text-[#d4a853] [&_strong]:text-[#0a0a0a] [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: ref.body }}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}

// ─── Author ────────────────────────────────────────────────────────────────

function Author() {
  return (
    <Section id="author">
      <div className="max-w-[820px] mx-auto">
        <Eyebrow>14 · A note from the author</Eyebrow>
        <SectionTitle>Why I care about this space.</SectionTitle>

        <figure className="my-10 flex justify-center -rotate-[1.5deg]">
          <Image
            src="/wearables-2026-hero/punk-mohawk.png"
            alt="Punk illustration of a mohawked figure holding up a sketched chart of a jagged growth line"
            width={1374}
            height={1152}
            className="w-full max-w-[460px] h-auto"
            sizes="(max-width: 640px) 90vw, 460px"
          />
        </figure>

        <div className="text-[16.5px] text-[#0a0a0a] font-light leading-[1.75] flex flex-col gap-5">
          <p>I love this space. I&apos;ve spent most of my career in it.</p>

          <p>
            I started early. Pre-ordered the first Fitbit in 2009, before it
            hit retail. Backed the very first Pebble on Kickstarter in 2012.
            And I&apos;ve been lucky enough to ship inside this category from
            the inside ever since.
          </p>

          <p>
            At Adidas, I spent fifteen years building wearables before
            &ldquo;wearables&rdquo; was the word. We shipped{" "}
            <strong className="font-semibold">miCoach</strong> — the running
            coach, strength coach, and pacer that became the connected fitness
            platform for one of the largest sports brands in the world. Around
            it we built the{" "}
            <strong className="font-semibold">Speed Cell foot pod</strong>, the{" "}
            <strong className="font-semibold">Run Genie</strong> in-store
            running gait sensor, and the{" "}
            <strong className="font-semibold">Adidas SmartBall</strong> — a
            soccer ball with sensors that measured kick force, spin, and
            trajectory. The{" "}
            <strong className="font-semibold">Adidas 1 Running</strong> shoe
            had a heel-strike sensor and adjustable midsole. We built coaching
            audio interfaces for iPods because that&apos;s what people had in
            their pockets before iPhones existed. And we shipped the very
            first{" "}
            <strong className="font-semibold">Adidas miCoach Glass</strong>{" "}
            coaching app, on Google Glass dev kits almost no one outside
            Mountain View had ever touched.
          </p>

          <p>
            After Adidas: <strong className="font-semibold">Nike NTC</strong>,{" "}
            <strong className="font-semibold">Bowflex JRNY</strong>, and{" "}
            <strong className="font-semibold">FluidLogic</strong> — where we
            pushed a hydration pack with embedded sensing into a category that
            didn&apos;t ask for it. The ultimate wearable for motorsports,
            racing, extreme mountain biking, military, and industrial use.
            Subscription coaches. AI experiences. Next-generation connected
            hardware. Seventeen patents in sport, fitness, and technology along
            the way.
          </p>

          <div className="my-2 p-5 bg-white border border-[#e8e6df] rounded-xl text-[15.5px] leading-relaxed">
            <strong className="font-semibold text-[#0a0a0a]">
              What I wear today:
            </strong>{" "}
            Whoop (900-day streak and counting), Oura Ring, Apple Watch, Pixel
            Watch. I rotate them depending on what I&apos;m training for and
            what I want to learn. They all tell me something slightly
            different about the same body.
          </div>

          <p>
            The thing I love about wearables is that they connect digital
            technology to the real moments of a life. The morning run when you
            don&apos;t feel like going. The walk after dinner. The night you
            didn&apos;t sleep well and woke up feeling like the day was
            already against you. Wearables are inside all of it. The potential
            to help people — not just count steps, but actually live longer,
            recover faster, sleep better, think more clearly — is enormous.
          </p>

          <p>We&apos;re still early.</p>

          <h3 className="text-2xl md:text-3xl font-extralight tracking-tight text-[#0a0a0a] mt-6">
            How I built this.
          </h3>

          <p>
            I built this with Claude and Gemini as research partners. Claude
            pulled current market data from IDC, Counterpoint, vendor press
            releases, and trade publications, then turned it into the
            interactive report you&apos;re reading. Gemini cross-checked the
            analysis and pushed back where the framing was off. The Section 04
            distinction between smartwatch-only and total wearables share, for
            example, is a direct result of Gemini&apos;s pushback.
          </p>

          <p>
            This is another example of AI as an amplifier. Not writing for us,
            but helping us research more sources, validate findings across
            multiple platforms, and organize what matters into something a
            person can actually absorb. My intention here was to stay grounded
            in solid market data, but stay above it. The point isn&apos;t to
            drown in product specs. It&apos;s to see the bigger picture, the
            bigger trends, the bigger opportunities.
          </p>

          <p>
            That&apos;s the work I love. And the kind of work I think AI is
            going to make more of us capable of doing.
          </p>

          <div className="mt-4 flex items-end justify-between gap-6">
            <p className="text-[12px] tracking-[0.18em] uppercase font-semibold text-[#8a8a85]">
              — STEVE BLACK ·{" "}
              <Link
                href="/"
                className="text-[#9a6e0c] hover:text-[#d4a853] transition-colors"
              >
                steveandthedogs.com
              </Link>
            </p>
            <Image
              src="/wearables-2026-hero/punk-dancer-bottom.png"
              alt=""
              aria-hidden="true"
              width={432}
              height={853}
              className="w-[64px] sm:w-[80px] h-auto opacity-90 rotate-[6deg] shrink-0"
              sizes="80px"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Report footer (in-page, sits above the global site footer) ─────────────

function ReportFooter() {
  return (
    <section className="border-t border-[#e8e6df] bg-[#f5f4ef]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-14">
        <h3 className="text-xl font-semibold text-[#0a0a0a] tracking-tight mb-3">
          About this map
        </h3>
        <p className="text-[14.5px] text-[#4a4a48] font-light leading-relaxed max-w-3xl mb-3">
          This is a market-research field map of the consumer wearable
          category as of late May 2026. Compiled from public reporting, vendor
          specs, and IDC / Counterpoint shipment estimates. Pricing and
          feature claims are accurate to the best of public sourcing at time
          of publication and may shift as the year continues.
        </p>
        <p className="text-[14.5px] text-[#4a4a48] font-light leading-relaxed">
          Built by <strong className="font-semibold">Steve Black</strong> ·{" "}
          <Link
            href="/articles"
            className="text-[#9a6e0c] hover:text-[#d4a853] transition-colors underline underline-offset-2 decoration-[#e8d9a8]"
          >
            Back to all articles
          </Link>{" "}
          ·{" "}
          <a
            href="https://www.linkedin.com/in/steveandthedogs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9a6e0c] hover:text-[#d4a853] transition-colors underline underline-offset-2 decoration-[#e8d9a8]"
          >
            LinkedIn
          </a>
        </p>

        <div className="mt-8 flex items-center gap-3 flex-wrap text-[11px] tracking-[0.18em] uppercase text-[#8a8a85] font-medium">
          <span>© 2026 STEVE BLACK</span>
          <span>·</span>
          <span>PUBLISHED MAY 2026</span>
          <span>·</span>
          <span>LAST UPDATED MAY 28, 2026</span>
        </div>
      </div>
    </section>
  );
}
