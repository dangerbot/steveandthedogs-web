import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  coverImage?: string;
  gradient?: string;
  readTime?: string;
}

export interface Article {
  meta: ArticleMeta;
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];

  const slugs = fs
    .readdirSync(articlesDir)
    .filter((name) =>
      fs.existsSync(path.join(articlesDir, name, "index.mdx"))
    );

  return slugs
    .map((slug) => {
      const filePath = path.join(articlesDir, slug, "index.mdx");
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      return { slug, ...data } as ArticleMeta;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getArticle(slug: string): Article {
  const filePath = path.join(articlesDir, slug, "index.mdx");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...data } as ArticleMeta, content };
}
