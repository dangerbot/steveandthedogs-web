import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticle } from "@/lib/articles";

// ─── Static params for Vercel build ──────────────────────────────────────────

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { meta } = getArticle(slug);
    return {
      title: `${meta.title} — Steve Black`,
      description: meta.description,
    };
  } catch {
    return { title: "Article — Steve Black" };
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let article;
  try {
    article = getArticle(slug);
  } catch {
    notFound();
  }

  const { meta, content } = article;

  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-16">

      {/* ── Article header ─────────────────────────────────────────── */}
      <header className="px-6 pt-16 pb-12 max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#f5f5f5] transition-colors mb-12 group"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-0.5 transition-transform"
            aria-hidden="true"
          >
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          All Articles
        </Link>

        {/* Category + date */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs tracking-[0.25em] uppercase font-light text-[#d4a853]">
            {meta.category}
          </span>
          <span className="text-[#333]">·</span>
          <span className="text-xs text-[#888888] font-light">{formattedDate}</span>
          {meta.readTime && (
            <>
              <span className="text-[#333]">·</span>
              <span className="text-xs text-[#888888] font-light">{meta.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#f5f5f5] leading-tight tracking-tight mb-6">
          {meta.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-[#888888] font-light leading-relaxed italic">
          {meta.description}
        </p>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-[#d4a853] via-[#333] to-transparent" />
      </header>

      {/* ── Cover image (real photo or gradient fallback) ──────────── */}
      <div className="px-6 mb-12 max-w-3xl mx-auto">
        {meta.coverImage ? (
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-[#222222]">
            <Image
              src={meta.coverImage}
              alt={meta.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        ) : meta.gradient ? (
          <div
            className={`w-full aspect-[21/9] rounded-2xl bg-gradient-to-br ${meta.gradient} border border-[#222222] relative overflow-hidden`}
          >
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
              }}
            />
          </div>
        ) : null}
      </div>

      {/* ── MDX body ───────────────────────────────────────────────── */}
      <article className="px-6 pb-32 max-w-3xl mx-auto">
        <div className="prose-dark">
          <MDXRemote source={content} />
        </div>

        {/* End rule */}
        <div className="mt-16 pt-12 border-t border-[#222222] flex items-center justify-between gap-4 flex-wrap">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-[#888888] hover:text-[#d4a853] transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to Articles
          </Link>
          <span className="text-xs text-[#888888]/30 font-light tracking-widest uppercase">
            Steve Black
          </span>
        </div>
      </article>
    </div>
  );
}
