# SITE_CONTEXT.md — Current State Snapshot

> What the site actually is today, based on a repo review on 2026-07-15.
> CLAUDE.md is the design spec/instructions; this file tracks reality where the two have drifted.

## Overview
Personal branding site for Steve Black, Head of Digital Product. Dark, premium aesthetic (#0a0a0a bg, #d4a853 amber accent), lightning-bolt brand mark. Hosted on Vercel, repo on GitHub (`main`, ~58 commits, last commit 2026-06-15). Working tree clean.

## Stack
- Next.js 16.1.6, App Router, TypeScript, React 19.2.3
- Tailwind CSS v4 (via @tailwindcss/postcss)
- Framer Motion 12 for animation
- MDX articles: next-mdx-remote v6 + gray-matter, filesystem-based (`content/articles/`)
- Chart.js + react-chartjs-2 (used by the wearables interactive report)
- @vercel/analytics on all pages (including hidden prototypes)
- Fonts: Inter via next/font
- `next.config.ts` injects `NEXT_PUBLIC_COMMIT_HASH` and defines rewrites for hidden static prototypes

## Routes
| Route | What it is |
|---|---|
| `/` | Home — Hero, Values, BioCard, WhatICanDo, Expertise, Connect |
| `/about` | Bio, Quick Stats, Products list, Experience timeline, Skills ticker (sections inlined in page, not separate components) |
| `/products` | **Not in CLAUDE.md** — mobile product portfolio with screenshots: FluidLogic, All Points North, JRNY, Nike Training Club, AllDay |
| `/articles` | MDX listing with category filter pills (server page + client `ArticlesGrid`) |
| `/articles/[slug]` | MDX detail pages; honors `customHref` frontmatter redirect |
| `/articles/wearables-landscape-2026` | Fully custom interactive report page (own components: Charts, ProductExplorer, ThreatsGrid, TocSidebar, data.ts) |
| `/playground` | Prototype showcase — featured cards only (ChatGPT Families, Satiation Lag, Lightning Bolts) |
| `/playground/lightning-bolts` | Bolt motion-graphics lab: experiments 01–05 (bolt animations, animated divider, bolt light-up, LinkedIn thumbnail, LinkedIn banner) |
| `/playground/openai-families` | ChatGPT for Families concept page |
| `/playground/babylist-ai` | Babylist AI concepts |
| `/playground/empowered-teams-ai` | Empowered Teams + AI page |
| `/playground/satiation-lag` | Interactive satiation exploration |

Nav: Hello! | About | Products | Read Me | Playground (Products link added since CLAUDE.md was written).

## Hidden prototype pages (static HTML in /public, served via rewrites — unlisted, no nav links)
- `/meet-kelby`, `/meet-sage` — intro/prototype pages
- `/gardyn-onboarding`, `/gardyn-review` — Gardyn concept work (gardyn-review has its own deck-stage.js)
- `/envorso-vision` — private vision deck (10 sections)
- `/public/wearables-2026-hero/` — hero assets incl. standalone index.html

## Articles system
- 14 articles in `content/articles/[slug]/index.mdx`; frontmatter: title, date, category, description, coverImage, gradient, readTime, `animatedCover` ("electric-bolt"), `customHref` (card links elsewhere, e.g. a playground page — detail route redirects)
- Cover priority: animatedCover → coverImage → gradient
- Categories in use: Strategy & Execution, Innovation & Technology, UX & Behavior, Hardware & Software, Sport & Wellness, Leadership, About Me
- `lib/articles.ts` = data layer (fs + gray-matter); designed for future Supabase swap

## Components (`/components`)
Navigation, Footer, Hero, ValuesSection, BioCard, WhatICanDo, ExpertiseSection, ConnectSection, SkillsTicker, ElectricBolt, AnimatedDivider, BoltDivider.
Note: CLAUDE.md lists Timeline/QuickStats/ProductsList as components, but those live inline in `app/about/page.tsx`.

## Local-only folders (gitignored)
`Demo_Screenshots/`, `Steve_Family_Phtoso_For_OpenAI/` — raw working files; web-optimized versions live in `/public`.

## Known drift / cleanup candidates
- CLAUDE.md predates: /products page + nav link, playground experiments 02–05 and sub-pages, wearables custom article page, `customHref`, hidden prototype rewrites
- README.md is still default create-next-app boilerplate
- Duplicate "Adidas | SmartBall" entry in CLAUDE.md timeline spec

## Up next
- **Playground is the prototype showcase** (decided 2026-07-15; no separate /prototypes page). Lightning bolt experiments moved to `/playground/lightning-bolts` (done). Next: decide how to organize/add more prototypes to the card stack — candidates include surfacing hidden prototypes (meet-kelby, meet-sage, gardyn-*).
