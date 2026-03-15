# CLAUDE.md — Steve Black Personal Brand Website

## About This Project
Personal branding website for Steve Black, Head of Digital Product. Built with Next.js 14+ (App Router), Tailwind CSS, and deployed on Vercel. The design is based on Steve's existing Framer prototype with enhancements.

## Design Philosophy
- Dark, premium aesthetic (near-black backgrounds)
- Bold, confident typography — the name should feel like a statement
- Subtle interactive elements (hover effects, scroll animations, cursor interactions)
- Clean and minimal, but with personality
- Professional enough for Nike/Adidas-level credibility, but not sterile
- Inspired by: luxury brand minimalism meets tech product leader energy

## Color Palette
- Background: #0a0a0a (near-black)
- Primary text: #f5f5f5 (warm white)
- Secondary text: #888888 (muted gray)
- Accent: #d4a853 (warm amber/gold — used for emphasis, hover states, the rotating tagline words)
- Card backgrounds: #141414 (slightly lighter dark)
- Borders/dividers: #222222
- Hover states: accent color or subtle white glow

## Typography
- Primary font: Use a thin/light sans-serif for the hero name (similar to the Framer site's aesthetic) — suggest Inter Thin or a variable font with light weights
- Headings: Bold/Black weight for impact sections
- Body: Regular weight, good line-height for readability
- The hero "Steve Black" text should be enormous (8-12vw on desktop, scaling down for mobile)

## Site Structure (Phase 1)

### Navigation
- Fixed top bar, transparent initially, gains subtle background on scroll
- Left: Lightning bolt logo (⚡ or SVG) + email (steve.and.the.dogs@gmail.com with copy button)
- Right: Hello! | About | Read Me (these are the nav links matching the Framer site)

### Home Page (Hello!)
**Hero Section (full viewport)**
- "Steve Black" in massive thin/light typography (matching Framer)
- "Building What Matters" subtitle
- "Clarity. Creativity. Impact." in italic — these should have a subtle animation (fade/rotate through, or glow effect with the amber accent)
- Scroll indicator at bottom
- Optional: subtle particle effect or cursor-following glow in background (from concept 1 — keep it very subtle, not distracting)

**Values Section**
- Three values with icons (matching Framer): Clarity, Creativity, Impact
- Each has a hand-drawn style icon and italic description
- Animate in on scroll

**Bio/Hello Card**
- Card with slightly lighter background
- Left: Photo (Steve's headshot — use placeholder for now, /images/steve.jpg)
- Right: Bio text:
  "Hello! I help companies build products people love — by setting clear vision, removing blockers, and getting hands-on when it's time to execute.

  With 18+ years building digital products across AI, fitness, health, and connected tech, I've helped Nike, Adidas, Bowflex, and early-stage startups drive engagement, retention, and subscription growth.

  From zero-to-one to scaling what works, I bring clarity, energy, and focus to creating user-centered products that make a real impact."

**What I Can Do For You Section**
- Left side: "What I can do for you"
- Right side: Three items with bold titles and descriptions:
  - Set Vision: "Clear direction. Measurable outcomes. Aligned teams."
  - Build What Matters: "Focus and prioritization that move the business forward."
  - Ship, Learn, Repeat: "Fast cycles. Crisp decisions. Data-driven iteration."

**Expertise Section**
- "I thrive in spaces where digital, physical, and human experience intersect."
- Checklist style items (with checkmark icons):
  - Mobile + Web Apps
  - Connected Hardware & IoT
  - Health, Fitness, Wellness
  - SaaS / Subscription Models
  - B2C / B2B2C Products

**Connect Section**
- Lightning bolt divider
- Links with icons:
  - Connect with me on LinkedIn (https://www.linkedin.com/in/steveandthedogs/)
  - Email me at Steve.and.the.dogs@gmail.com
  - Click to learn more about me (→ About page)
  - Click to read my articles (→ Articles page)

**Footer**
- Email left, nav links right, same as header

### About Page
**Hero area with photo and bio card** (matching Framer layout)
- Bio card includes a "Let's Connect!" link at the bottom that opens LinkedIn profile (https://www.linkedin.com/in/steveandthedogs/)

**Quick Stats card:**
- 18+ years building digital products
- 17 patents in sport, fitness & tech
- 9 products launched across mobile, web & hardware
- Experience in AI, health, wellness & performance
- Data-driven leader driving growth & retention

**Products list:**
- Matter [iOS, Android, Web, Kiosk]
- FluidLogic GPR50 [iOS, Android, Hardware]
- FluidLogic VMR [iOS]
- All Points North Virtual [iOS, Android, Web]
- Bowflex JRNY [iOS, Android, Web, Embedded, Hardware]
- Nike NTC [iOS, Android]
- Adidas AllDay [iOS, Android, Web]
- Adidas SmartBall [iOS, Android, Hardware]
- Adidas Speed Cell [iOS, Android, Hardware]
- Adidas Run Genie [iOS, Android, Web App, Hardware]
- Adidas miCoach Strength [iOS, Android, Web App, Wearables]
- Adidas miCoach Glass [Android, Hardware]
- Adidas miCoach Pacer [Android, Hardware]
- Adidas miCoach [iOS, Android, Web App, Wearables]
- Adidas Track Rabbit [iOS, Web, Hardware]
- Adidas 1 Running [Hardware]

**Experience Timeline:**
- Dec 2025 – Present: Head of Digital Product, Matter
- Oct 2024 – Dec 2025: Principle Product Manager, FluidLogic
- May 2023 – Oct 2024: Principle Product Manager, All Points North
- May 2021 – May 2023: Lead Product Manager, Bowflex
- Dec 2019 – May 2021: Sr. Product Manager, Nike | NTC
- Oct 2014 – Jul 2019: Lead Product Manager, Adidas | AllDay
- Nov 2010 – Oct 2014: Sr Product Manager, Adidas | SmartBall
- Nov 2010 – Oct 2014: Sr Product Manager, Adidas | SmartBall
- Sep 2009 – Nov 2010: Product Manager, Adidas | miCoach
- Aug 2008 – Sep 2009: Director Data Science, Adidas | Innovation Team
- Mar 2007 – Aug 2008: Lead Data Scientist, Adidas | Innovation Team
- Feb 2005 – Mar 2007: Product Developer, Adidas | Innovation Team

**Education:**
- B.S. Physics, University of Oregon

**Skills ticker** (two-row scrolling horizontal marquee):
- Row 1 — Tools (scrolls right): Figma, Framer, Sketch, Photoshop, Illustrator, Claude, Gemini, ChatGPT, Cursor, Lovable, Supabase, GitHub, Jira, Notion
- Row 2 — Skills (scrolls left): UX/UI, Product Strategy, Agile, PRDs, Roadmaps, GTM, Growth, AI/LLM, B2C, B2B, B2B2C, Data Science, User Research, Design Thinking

**Company logos section** (left side): FluidLogic, APN, Adidas logos

### Articles Page (Read Me)
- "Articles" in large thin type (matching Framer)
- "Stories & Insights" subtitle
- "I write about building lovable products, guiding teams through ambiguity, and designing with humanity in mind."
- Category filter pills: All, Strategy & Execution, Innovation & Technology, UX & Behavior, Data-Driven, Hardware & Software, Sport & Wellness, Leadership
- Grid of article cards with images and titles (placeholder for now, will connect to Supabase later)

## Blog / Articles System

Articles are stored as MDX files on the filesystem and rendered server-side via `next-mdx-remote`.

### File Structure
Each article lives in its own folder inside `content/articles/`:
```
content/articles/
└── your-article-slug/
    ├── index.mdx       (required — article content + frontmatter)
    └── images/         (optional — article-specific images)
```

### Frontmatter Fields
Every `index.mdx` file must include these fields at the top:
```yaml
---
title: "Article Title"
date: "YYYY-MM-DD"
category: "Strategy & Execution"   # must match a category pill
description: "One-sentence summary shown on the card."
coverImage: "/articles/your-slug/cover.jpg"   # optional, relative to /public
gradient: "from-[#...] via-[#...] to-[#...]"  # fallback if no coverImage
readTime: "5 min read"             # optional
---
```

### Valid Categories
All, Strategy & Execution, Innovation & Technology, UX & Behavior, Data-Driven, Hardware & Software, Sport & Wellness, Leadership

### How It Works
- `lib/articles.ts` — utility functions using `fs` + `gray-matter` to read all MDX files and return metadata sorted by date
- `app/articles/page.tsx` — server component that calls `getAllArticles()` and passes data to the client `ArticlesGrid` component
- `app/articles/ArticlesGrid.tsx` — client component handling category filter state and card rendering
- `app/articles/[slug]/page.tsx` — server component that reads the full MDX, renders it with `next-mdx-remote/rsc`, and generates static pages via `generateStaticParams`
- Detail pages render at `/articles/[slug]` with full prose-dark typography styling

### Adding a New Article
1. Create a new folder in `content/articles/your-slug/`
2. Add `index.mdx` with the required frontmatter fields
3. Write the article body in MDX below the frontmatter
4. Run `npm run dev` — the article appears automatically on the listing page and at `/articles/your-slug`

### Phase 2 Migration Note
This system may migrate to Supabase in Phase 2 to support richer content management, author metadata, view counts, and a CMS editing interface. The `lib/articles.ts` utility layer is designed to make this migration straightforward — only the data-fetching functions need to change, not the page components.

## Technical Guidelines
- Use Next.js App Router (app/ directory)
- Use Tailwind CSS for all styling
- Use Framer Motion for animations (install: npm install framer-motion)
- Keep components modular — one component per file in /components
- Images go in /public/images
- Use CSS custom properties for the color palette (defined in globals.css)
- Mobile-responsive — design mobile-first, enhance for desktop
- Smooth scroll behavior
- Use next/font for font loading (Inter is a good choice)
- Use next/image for optimized images
- Keep accessibility in mind (semantic HTML, alt text, focus states)

## File Structure
```
steveblack-site/
├── app/
│   ├── layout.tsx          (root layout with nav + footer)
│   ├── page.tsx            (home/hello page)
│   ├── about/
│   │   └── page.tsx        (about page)
│   ├── articles/
│   │   └── page.tsx        (articles page)
│   └── globals.css         (global styles + CSS variables)
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ValuesSection.tsx
│   ├── BioCard.tsx
│   ├── WhatICanDo.tsx
│   ├── ExpertiseSection.tsx
│   ├── ConnectSection.tsx
│   ├── Timeline.tsx
│   ├── QuickStats.tsx
│   ├── ProductsList.tsx
│   ├── SkillsTicker.tsx
│   ├── ArticleGrid.tsx
│   └── CategoryFilter.tsx
├── public/
│   └── images/
│       └── steve.jpg       (headshot — add your photo here)
├── CLAUDE.md               (this file)
└── package.json
```

## Enhancement Ideas (for later)
- Subtle cursor-following glow effect on hero (from concept 1)
- Particle/sparkle effect behind the hero text (very subtle)
- Scroll-triggered animations with Framer Motion
- Dark/light mode toggle
- Blog powered by Supabase
- Contact form with Supabase
- Newsletter signup
- Case study detail pages
- SEO metadata and Open Graph images

## When Making Changes
- Always maintain the dark, premium aesthetic
- Keep animations subtle — enhance, don't distract
- Test on mobile — the site should feel great on phones
- Preserve the content hierarchy from the Framer design
- The amber/gold accent (#d4a853) should be used sparingly for maximum impact
