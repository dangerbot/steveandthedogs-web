"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  "All",
  "Strategy & Execution",
  "Innovation & Technology",
  "UX & Behavior",
  "Data-Driven",
  "Hardware & Software",
  "Sport & Wellness",
  "Leadership",
] as const;

type Category = (typeof categories)[number];

interface Article {
  id: number;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  gradient: string; // placeholder card color
  readTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "A Human-Centered Approach to Designing Strategy",
    subtitle: "How treating strategy like a product unlocks better outcomes for teams and users alike.",
    category: "Strategy & Execution",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "FluidLogic, Hydration for Race Day!",
    subtitle: "Inside the product thinking behind a next-generation connected hydration system for endurance athletes.",
    category: "Hardware & Software",
    gradient: "from-[#0d1b2a] via-[#1b263b] to-[#415a77]",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Nike Training Club",
    subtitle: "What I learned building one of the world's most-used fitness apps — and how we kept millions of users coming back.",
    category: "Sport & Wellness",
    gradient: "from-[#1a0a00] via-[#2d1b00] to-[#5c3600]",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Adidas AllDay",
    subtitle: "Designing a subscription fitness experience that bridged content, community, and hardware at global scale.",
    category: "UX & Behavior",
    gradient: "from-[#0a0a14] via-[#12122a] to-[#1e1e4a]",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Adidas SmartBall",
    subtitle: "From patent to product — how we shipped connected sports hardware before IoT was a mainstream category.",
    category: "Innovation & Technology",
    gradient: "from-[#0a1a0a] via-[#0f2d0f] to-[#1a4a1a]",
    readTime: "6 min read",
  },
];

// ─── Placeholder image card ───────────────────────────────────────────────────

function ArticlePlaceholderImage({
  gradient,
  category,
}: {
  gradient: string;
  category: string;
}) {
  return (
    <div className={`w-full aspect-[16/9] bg-gradient-to-br ${gradient} flex items-end p-4 relative overflow-hidden`}>
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Category badge */}
      <span className="relative z-10 text-[10px] tracking-[0.2em] uppercase font-light text-white/60 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {category}
      </span>
    </div>
  );
}

// ─── Article card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-[#141414] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#333333] transition-colors duration-300 cursor-pointer flex flex-col"
    >
      {/* Image area */}
      <div className="overflow-hidden">
        <div className="group-hover:scale-[1.02] transition-transform duration-500">
          <ArticlePlaceholderImage
            gradient={article.gradient}
            category={article.category}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="text-base md:text-lg font-light text-[#f5f5f5] leading-snug group-hover:text-[#d4a853] transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-sm text-[#888888] font-light leading-relaxed flex-1">
          {article.subtitle}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e]">
          <span className="text-xs text-[#888888]/60 font-light tracking-wide">
            {article.readTime}
          </span>
          <span className="text-xs text-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 font-light">
            Read →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlesPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-16">

      {/* ── Page header ─────────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4a853] font-light mb-6">
            Read Me
          </p>
          <h1 className="text-[clamp(52px,8vw,120px)] font-thin tracking-[-0.03em] text-[#f5f5f5] leading-[0.9] mb-8">
            Articles
          </h1>
          <p className="text-lg md:text-xl text-[#888888] font-light leading-relaxed max-w-xl">
            Stories & Insights
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-base text-[#888888]/70 font-light italic leading-relaxed max-w-2xl"
        >
          I write about building lovable products, guiding teams through ambiguity, and designing with humanity in mind.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{ originX: 0 }}
          className="mt-14 h-px bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent"
        />
      </section>

      {/* ── Category filter pills ────────────────────────────────────── */}
      <section className="px-6 pb-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter articles by category"
        >
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full text-sm font-light tracking-wide transition-all duration-250 border ${
                  isActive
                    ? "bg-[#d4a853] text-[#0a0a0a] border-[#d4a853]"
                    : "bg-transparent text-[#888888] border-[#222222] hover:border-[#444] hover:text-[#f5f5f5]"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className={`ml-1.5 text-xs ${isActive ? "text-[#0a0a0a]/60" : "text-[#888888]/50"}`}>
                    {articles.filter((a) => a.category === cat).length}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── Article grid ─────────────────────────────────────────────── */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center"
            >
              <p className="text-[#888888] font-light text-lg">
                No articles in this category yet.
              </p>
              <button
                onClick={() => setActive("All")}
                className="mt-4 text-sm text-[#d4a853] hover:opacity-70 transition-opacity"
              >
                View all articles →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Future Supabase note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center text-xs text-[#888888]/30 font-light tracking-widest uppercase"
        >
          More articles coming soon
        </motion.p>
      </section>
    </div>
  );
}
