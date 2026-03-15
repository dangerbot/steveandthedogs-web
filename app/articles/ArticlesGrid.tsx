"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { ArticleMeta } from "@/lib/articles";

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

// ─── Placeholder image ────────────────────────────────────────────────────────

function ArticlePlaceholderImage({
  gradient,
  category,
}: {
  gradient: string;
  category: string;
}) {
  return (
    <div
      className={`w-full aspect-[16/9] bg-gradient-to-br ${gradient} flex items-end p-4 relative overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />
      <span className="relative z-10 text-[10px] tracking-[0.2em] uppercase font-light text-white/60 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {category}
      </span>
    </div>
  );
}

// ─── Article card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="group bg-[#141414] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#333333] transition-colors duration-300 flex flex-col h-full"
      >
        {/* Image area */}
        <div className="overflow-hidden">
          <div className="group-hover:scale-[1.02] transition-transform duration-500">
            {article.coverImage ? (
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <ArticlePlaceholderImage
                gradient={article.gradient ?? "from-[#141414] to-[#222222]"}
                category={article.category}
              />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-6 flex-1">
          <h3 className="text-base md:text-lg font-light text-[#f5f5f5] leading-snug group-hover:text-[#d4a853] transition-colors duration-300">
            {article.title}
          </h3>
          <p className="text-sm text-[#888888] font-light leading-relaxed flex-1">
            {article.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-[#1e1e1e]">
            <span className="text-xs text-[#888888]/60 font-light tracking-wide">
              {article.readTime ?? ""}
            </span>
            <span className="text-xs text-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 font-light">
              Read →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ─── Grid + filter ────────────────────────────────────────────────────────────

export default function ArticlesGrid({ articles }: { articles: ArticleMeta[] }) {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Category filter pills */}
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
            const count =
              cat === "All"
                ? null
                : articles.filter((a) => a.category === cat).length;
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
                {count !== null && (
                  <span
                    className={`ml-1.5 text-xs ${isActive ? "text-[#0a0a0a]/60" : "text-[#888888]/50"}`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* Article grid */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((article) => (
                <ArticleCard key={article.slug} article={article} />
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
    </>
  );
}
