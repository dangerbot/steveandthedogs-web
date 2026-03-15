import { motion } from "framer-motion";
import { getAllArticles } from "@/lib/articles";
import ArticlesGrid from "./ArticlesGrid";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-16">

      {/* ── Page header ─────────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-6">
            Read Me
          </p>
          <h1 className="text-[clamp(52px,8vw,120px)] font-thin tracking-[-0.03em] text-[#f5f5f5] leading-[0.9] mb-8">
            Articles
          </h1>
          <p className="text-lg md:text-xl text-[#888888] font-light leading-relaxed max-w-xl">
            Stories &amp; Insights
          </p>
        </div>

        <p className="mt-4 text-base text-[#888888]/70 font-light italic leading-relaxed max-w-2xl">
          I write about building lovable products, guiding teams through ambiguity, and designing with humanity in mind.
        </p>

        {/* Divider */}
        <div className="mt-14 h-px bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent" />
      </section>

      {/* ── Filtered grid (client component) ────────────────────────── */}
      <ArticlesGrid articles={articles} />
    </div>
  );
}
