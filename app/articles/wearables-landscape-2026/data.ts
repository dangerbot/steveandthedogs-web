// ─────────────────────────────────────────────────────────────────────────────
// Data for the Wearables Landscape 2026 interactive report.
// Extracted from the original standalone HTML page and ported verbatim.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Hero stats ─────────────────────────────────────────────────────────────

export const HERO_STATS = [
  {
    num: "614M",
    suffix: "/yr",
    refId: "ref-1",
    refLabel: "1",
    label:
      "Wearable devices projected to ship in 2026, up 2.2% year over year. Growth is constrained by memory-supply pressure.",
  },
  {
    num: "32%",
    refId: "ref-2",
    refLabel: "2",
    label:
      "Apple's smartwatch shipment share in Q4 2025. Huawei second at 13%, following its 2025 surge.",
  },
  {
    num: "$9.99",
    suffix: "/mo",
    refId: "ref-3",
    refLabel: "3",
    label:
      "Apple Fitness+ and Google Health Premium both price here. The new converging subscription tier.",
  },
  {
    num: "31%",
    refId: "ref-4",
    refLabel: "4",
    label:
      "China's share of advanced smartwatches in 2025 — surpassed North America for the first time.",
  },
];

// ─── Recent headlines ───────────────────────────────────────────────────────

export interface Headline {
  date: string;
  brand: string;
  badge?: string;
  title: string;
  desc: string; // may contain inline <strong> tags
  sourceLabel: string;
  sourceUrl: string;
}

export const HEADLINES: Headline[] = [
  {
    date: "MAY 28, 2026",
    brand: "OURA",
    badge: "Just announced",
    title: "Oura Ring 5 — the world's smallest smart ring.",
    desc: "40% smaller than Gen 4 (6.09mm wide vs. 7.99mm, 2.28mm thick vs. 2.88mm). Adds <strong>Blood Pressure Signals</strong> and <strong>Nighttime Breathing</strong> under a new \"Health Radar\" framework. Hypertension and sleep apnea detection now on a ring. $399 starting (Silver/Black), $499 for premium finishes. Pre-orders open today, ships June 4.",
    sourceLabel: "SOURCE: BUSINESSWIRE / OURA",
    sourceUrl:
      "https://www.businesswire.com/news/home/20260528686853/en/URA-Introduces-The-Worlds-Smallest-Smart-Ring-Oura-Ring-5",
  },
  {
    date: "MAY 26, 2026",
    brand: "GOOGLE",
    title: "Fitbit Air ships.",
    desc: "The $99 screenless tracker hits retail. 7-day battery, AFib detection, SpO2, HRV, sleep, skin temp. Pebble-shaped, removable from the band. Pairs with Google Health AI Coach. Three months of Google Health Premium included. Stephen Curry edition at $129.99.",
    sourceLabel: "SOURCE: GOOGLE BLOG",
    sourceUrl:
      "https://blog.google/products-and-platforms/devices/fitbit/fitbit-air/",
  },
  {
    date: "MAY 21, 2026",
    brand: "APPLE",
    title: "Apple expands health features to 160+ countries.",
    desc: "Apple Watch sleep apnea notifications and AirPods Pro hearing test now available in India and dozens of new markets. Clinical-grade pure-tone audiometry from a $249 consumer earbud — the global scale of the OTC hearing-aid play.",
    sourceLabel: "SOURCE: APPLE NEWSROOM",
    sourceUrl:
      "https://www.apple.com/in/newsroom/2026/05/groundbreaking-health-features-available-today-on-apple-watch-and-airpods-pro/",
  },
  {
    date: "MAY 19, 2026",
    brand: "GOOGLE",
    title: "Google Health rebrand + AI Coach launches.",
    desc: "The Fitbit app becomes Google Health. Gemini-powered conversational AI Coach goes live at $9.99/mo (or $99/yr), combining fitness coach, sleep expert, and wellness advisor in one experience. Bundled free with Google AI Pro and Ultra. The platform play.",
    sourceLabel: "SOURCE: GOOGLE BLOG",
    sourceUrl:
      "https://blog.google/products-and-platforms/products/google-health/google-health-coach/",
  },
  {
    date: "MAY 12, 2026",
    brand: "APPLE",
    title: "Hypertension alerts + AirPods hearing aid expand globally.",
    desc: "Apple Watch hypertension alerts (US-launched 2024) and the AirPods Pro 2 OTC hearing aid feature now rolling out to more than 100 countries. The regulatory-feature global scale-up that quietly competes with Pixel Watch and Galaxy Watch on the same axis.",
    sourceLabel: "SOURCE: MACRUMORS",
    sourceUrl:
      "https://www.macrumors.com/2026/05/12/apple-health-features-more-countries/",
  },
  {
    date: "MAY 8, 2026",
    brand: "WHOOP",
    title: "Whoop becomes a clinical health platform.",
    desc: "Introduces on-demand live video consultations with licensed clinicians (US launch summer 2026), EHR syncing via HealthEx, and new AI features: <strong>My Memory</strong> (personalized context the AI Coach uses) and <strong>Proactive Check-Ins</strong> (the Coach reaches out at the right moments). Whoop is no longer a fitness band — it's positioning as a full health platform.",
    sourceLabel: "SOURCE: WHOOP PRESS",
    sourceUrl:
      "https://www.whoop.com/us/en/press-center/whoop-expands-health-platform-with-on-demand-clinician-access-and-new-ai-features/",
  },
  {
    date: "MAY 7, 2026",
    brand: "GOOGLE",
    title: "Fitbit Air announced — the screenless category bet.",
    desc: "$99.99 pebble tracker, designed for 24/7 wear, talks to the Gemini AI Coach. The flank attack on Whoop. Same form factor, no required subscription, AI Coach in the box. Sets up the May 26 ship date.",
    sourceLabel: "SOURCE: 9TO5GOOGLE",
    sourceUrl: "https://9to5google.com/2026/05/07/fitbit-air-launch/",
  },
  {
    date: "APRIL 2026",
    brand: "OURA",
    title: "Oura acquires GalenAI.",
    desc: "AI-powered co-pilot for medical students and professionals. Signals a deeper push into clinical AI capabilities — Oura is preparing to make Oura Advisor more medically sophisticated. Foreshadows the Health Radar framework announced today with Ring 5.",
    sourceLabel: "SOURCE: TRACXN",
    sourceUrl:
      "https://tracxn.com/d/acquisitions/acquisitions-by-oura/__O4ZdUJgzwqammTRVNeu0BgQ6od302-vz1qnvUlqqgoc",
  },
  {
    date: "MARCH 31, 2026",
    brand: "SAMSUNG",
    title: "Galaxy Watch blood pressure launches in the US.",
    desc: "Cuffless blood pressure estimation from the wrist, finally available to US users after a long international-only run. Direct shot at Apple Watch (which still doesn't have BP) and Whoop MG (which has BP insights only at the $359/yr Life tier).",
    sourceLabel: "SOURCE: GADGETS & WEARABLES",
    sourceUrl:
      "https://gadgetsandwearables.com/2026/03/31/samsung-galaxy-watch-blood-pressure-us/",
  },
  {
    date: "FEBRUARY 2026",
    brand: "ULTRAHUMAN",
    title: "Ultrahuman Ring Pro announced.",
    desc: "$479 third-generation flagship. <strong>15-day battery life</strong> — nearly double Oura Ring 4's 8 days. Sets a new category benchmark and pressures Oura on a metric where they had a comfortable lead. No subscription required.",
    sourceLabel: "SOURCE: THE5KRUNNER",
    sourceUrl: "https://the5krunner.com/2026/05/06/ultrahuman-ring-pro/",
  },
  {
    date: "JANUARY 2026",
    brand: "SAMSUNG · CES",
    title: "Samsung unveils AI \"Brain Health\" for Galaxy Watch + Ring.",
    desc: "On-device AI detects early dementia signs via speech, gait, and sleep analysis. Galaxy Watch 8 and Galaxy Ring will register subtle changes in mobility, speech, and engagement that can indicate long-term cognitive change — flagging anomalies and prompting users or caregivers when patterns shift. The next frontier of consumer health credentialing.",
    sourceLabel: "SOURCE: WEBPRONEWS",
    sourceUrl:
      "https://www.webpronews.com/samsung-unveils-ai-brain-health-for-galaxy-watch-ring-at-ces-2026/",
  },
];

// ─── Threats grid (competitive landscape) ───────────────────────────────────

export interface Threat {
  defaultOrder: number;
  shareScore: number;
  subScore: number;
  sharePill: string;
  brand: string;
  position: string;
  body: string; // contains inline <strong> tags
}

export const THREATS: Threat[] = [
  {
    defaultOrder: 1,
    shareScore: 28,
    subScore: 2,
    sharePill: "~28% SHARE",
    brand: "Apple",
    position: "ECOSYSTEM LEADER",
    body: "Owns the deepest ecosystem moat in consumer tech. Watch + iPhone + AirPods + Health + Fitness+ work as one. AirPods Pro hearing aid was a regulatory masterclass. <strong>Vulnerable on:</strong> closed platform, weaker AI coaching, no ring, slower public posture on consumer health beyond Watch.",
  },
  {
    defaultOrder: 2,
    shareScore: 5,
    subScore: 3,
    sharePill: "~5% SHARE",
    brand: "Google (Fitbit + Pixel)",
    position: "PLATFORM CONVERGENCE BET",
    body: "Owns Fitbit + Pixel Watch + Google Health Premium. Just shipped Fitbit Air ($99 screenless) and the Gemini-powered AI Coach (May 2026). Cross-platform support for Apple, Garmin, Whoop, Oura promised in 2026 — the open-platform play no one else is making. <strong>Vulnerable on:</strong> Pixel Watch install base under 2% globally, no ring yet, no smart glasses, no hearing-aid story, ecosystem doesn't lock together as tightly as Apple.",
  },
  {
    defaultOrder: 3,
    shareScore: 9,
    subScore: 7,
    sharePill: "~9% SHARE",
    brand: "Samsung",
    position: "FULL ANDROID LINEUP",
    body: "Galaxy AI + Galaxy Ring + Galaxy Watch Ultra is a full lineup. Galaxy Ring with no subscription is a direct shot at Oura that Google didn't take. <strong>Vulnerable on:</strong> Android-only constraint caps reach, Wear OS partner-but-competitor dynamic, less integrated health story than Apple.",
  },
  {
    defaultOrder: 4,
    shareScore: 1.5,
    subScore: 1,
    sharePill: "<2% SHARE",
    brand: "Whoop",
    position: "SUBSCRIPTION LEADER",
    body: "Strongest subscription business in wearables. Whoop MG with FDA-cleared ECG + BP insights is the most clinical sub-$50/mo wearable. AI Coach is mature. <strong>Vulnerable on:</strong> Fitbit Air is the direct flank attack at $99.99. Same form factor, no required subscription, AI Coach in the box.",
  },
  {
    defaultOrder: 5,
    shareScore: 2,
    subScore: 4,
    sharePill: "~2% SHARE",
    brand: "Oura",
    position: "RING CATEGORY LEADER",
    body: "Defined the ring category. Oura Advisor (AI) launched. Strong design and brand. Independent — privately held, Finnish-founded, not Amazon-owned. <strong>Vulnerable on:</strong> the $5.99/mo subscription when Galaxy Ring and Ultrahuman both ship with zero subscription. Hardware margin compresses if subscription erodes.",
  },
  {
    defaultOrder: 6,
    shareScore: 4,
    subScore: 6,
    sharePill: "~4% SHARE",
    brand: "Garmin",
    position: "SPORTS LOYALTY MOAT",
    body: "Sports loyalty + no subscription + open platform = the anti-Apple. Entered subscriptions in 2025 with Connect+. <strong>Vulnerable on:</strong> if AI Coach defines the category, Garmin needs to ship one that matches their training-data depth. They have the data; they don't have the AI brand.",
  },
  {
    defaultOrder: 7,
    shareScore: 1,
    subScore: 5,
    sharePill: "<1% SHARE",
    brand: "Meta",
    position: "SMART GLASSES DEFAULT",
    body: "Owns smart glasses (~85% of the category). LLAMA 4 onboard the Ray-Ban Gen 2. Sales strong enough to make Meta the de-facto leader in a category Google and Apple don't ship in. <strong>Vulnerable on:</strong> no health story, no subscription, depends on Ray-Ban brand partnership.",
  },
  {
    defaultOrder: 8,
    shareScore: 22,
    subScore: 9,
    sharePill: "~22% COMBINED",
    brand: "Xiaomi · Huawei · Amazfit",
    position: "CHINA VOLUME LEADERS",
    body: "China-led volume. $39–$170 watches with surprisingly capable sensors. Compete on price, win on volume. Drove China to 31% of global advanced smartwatches in 2025. <strong>Vulnerable on:</strong> health credentialing — no FDA-cleared features, hardware-only model, weaker AI.",
  },
  {
    defaultOrder: 9,
    shareScore: 0.5,
    subScore: 8,
    sharePill: "<1% SHARE",
    brand: "Ultrahuman",
    position: "CHALLENGER RING + GLUCOSE",
    body: "Best example of \"open platform ring done right.\" No subscription. Integrates with Stelo for glucose insights — the partnership play Apple and Google should both study. <strong>Vulnerable on:</strong> small brand, limited US retail, ecosystem depth lags Oura.",
  },
];

// ─── POV cards (5 strategic axes — actually 6 in the source) ────────────────

export interface PovCard {
  num: string;
  title: string;
  body: string;
}

export const POV_CARDS: PovCard[] = [
  {
    num: "01 — AI AS THE PRODUCT",
    title: "The coach replaces the screen.",
    body: "Whoop, Oura, Ultrahuman, and now Google's Gemini-powered Health Coach have all shipped conversational, personalized coaching. Apple's is rumored. Differentiation moves from \"do you have it\" to \"is it good.\" Hallucination risk is the regulatory edge.",
  },
  {
    num: "02 — SUBSCRIPTION ECONOMICS",
    title: "Hardware is the funnel. ARPU is the franchise.",
    body: "$9.99/mo is the new gravity well. Apple, Google, Strava all sit there. Whoop and Oura still demand subscription for full features. Garmin entered the game in 2025 with Connect+. Hardware ASPs are flattening — recurring revenue is where the next decade of growth lives.",
  },
  {
    num: "03 — FORM FACTOR EXPANSION",
    title: "The wrist isn't the only chassis anymore.",
    body: "Smart rings (Oura, Galaxy Ring, Ultrahuman), screenless trackers (Fitbit Air, Whoop), smart glasses (Meta Ray-Ban), and hearables-as-medical-devices (AirPods Pro). The wrist is now one of four valid surfaces, and most users will wear more than one.",
  },
  {
    num: "04 — HEALTH CREDENTIALING",
    title: "FDA clearance is the new moat.",
    body: "ECG, AFib, sleep apnea, hypertension alerts, OTC hearing aid, FDA-cleared CGM. Each clearance is years of regulatory work and a defensible feature against the $50 Chinese watch. Apple's AirPods-as-hearing-aid is the masterclass — soft-launch a regulatory feature on an existing product.",
  },
  {
    num: "05 — OPEN VS. CLOSED PLATFORM",
    title: "Apple walls. Google opens. Garmin agnostic.",
    body: "Apple's ecosystem is the deepest moat in consumer tech. Google's counter-bet: open Google Health to Apple Watch, Garmin, Whoop, Oura data in 2026. Garmin has always been platform-agnostic. The strategic question for every wearable brand is whether the data lake matters more than the hardware.",
  },
  {
    num: "06 — THE MEDICAL CROSSOVER",
    title: "OTC CGM changed everything.",
    body: "Dexcom Stelo and Abbott Lingo moved continuous glucose monitoring from prescription-only diabetes care to consumer wellness in 2024. Counterpoint flagged non-invasive blood glucose in the watch chassis as a 2026 growth catalyst. Whoever ships it first defines the next five years of the category.",
  },
];

// ─── Subscription economics table ───────────────────────────────────────────

export interface SubRow {
  service: string;
  monthly: string;
  annual: string;
  what: string;
  required: string;
  reqStyle: "optional" | "required";
}

export const SUB_ROWS: SubRow[] = [
  {
    service: "Apple Fitness+",
    monthly: "$9.99",
    annual: "$79.99",
    what: "Workouts, Time to Walk, Artist Spotlight",
    required: "Optional",
    reqStyle: "optional",
  },
  {
    service: "Google Health Premium",
    monthly: "$9.99",
    annual: "$99.00",
    what: "AI Coach (Gemini), adaptive plans, sleep + fitness insights",
    required: "Optional · 3 mo free with Fitbit Air",
    reqStyle: "optional",
  },
  {
    service: "Whoop One",
    monthly: "$16.58",
    annual: "$199.00",
    what: "Sleep, strain, recovery, VO2 max + Whoop 5.0 hardware",
    required: "Required",
    reqStyle: "required",
  },
  {
    service: "Whoop Peak",
    monthly: "$19.92",
    annual: "$239.00",
    what: "+ Healthspan, real-time stress, Whoop 5.0 hardware",
    required: "Required",
    reqStyle: "required",
  },
  {
    service: "Whoop Life",
    monthly: "$29.92",
    annual: "$359.00",
    what: "+ FDA-cleared ECG, BP insights (beta), MG hardware",
    required: "Required",
    reqStyle: "required",
  },
  {
    service: "Oura Membership",
    monthly: "$5.99",
    annual: "$71.88",
    what: "Full features + Oura Advisor AI (ring purchased separately)",
    required: "Required for full features",
    reqStyle: "required",
  },
  {
    service: "Eight Sleep Pod",
    monthly: "$16.58",
    annual: "$199.00",
    what: "Active Grid temperature + sleep tracking",
    required: "Required for core features",
    reqStyle: "required",
  },
  {
    service: "Strava Premium",
    monthly: "$11.99",
    annual: "$79.99",
    what: "Segments, training plans, Athlete Intelligence",
    required: "Optional",
    reqStyle: "optional",
  },
  {
    service: "Garmin Connect+",
    monthly: "~$6.99",
    annual: "~$70",
    what: "AI insights, training suggestions (launched 2025)",
    required: "Optional",
    reqStyle: "optional",
  },
];

// ─── Category narratives ────────────────────────────────────────────────────

export interface Narrative {
  anchor: string;
  title: string;
  body: string[]; // paragraphs with inline <strong>
}

export const NARRATIVES: Narrative[] = [
  {
    anchor: "PREMIUM SMARTWATCH",
    title: "Apple's category, Garmin's loyalty.",
    body: [
      "Apple owns the premium tier. The Ultra 3 at $799 adds satellite SOS — the same play Garmin pioneered with inReach. Garmin keeps the sport and adventure faithful with the Fenix 8 AMOLED, the Fenix 8 Pro (microLED + LTE), and what looks like a \"Garmin Pro\" satellite line forming for 2026.",
      "<strong>Garmin's moat is depth.</strong> Multi-sport, training load, navigation, battery, and an honest no-subscription posture. Samsung Galaxy Watch Ultra ($649.99) is the underrated entrant — sapphire glass, titanium, 100m waterproof, and it has BP, AFib, and sleep apnea. But Wear OS means Android-only, which caps reach against Apple.",
    ],
  },
  {
    anchor: "MAINSTREAM SMARTWATCH",
    title: "Google's main battleground, finally competitive.",
    body: [
      "Pixel Watch 4 is now a credible product. Repairable (a strategic hardware shift), 3000-nit Actua 360 display, Snapdragon W5 Gen 2, 40-hour battery on the 45mm. Apple SE 3 at $249 is the lowest-friction iOS path. Galaxy Watch 7 at $299.99 is the Android default outside Pixel. Garmin's mid-tier Forerunner 265 and Venu 4 keep capturing the \"I run, I have a real workout life\" buyer.",
      "<strong>The race here is which AI Coach delivers daily, observable value to a mainstream user.</strong> Pixel Watch needs install base to compound. Apple SE wins on inertia. Galaxy Watch 7 wins on price-to-features.",
    ],
  },
  {
    anchor: "FITNESS BANDS + SCREENLESS",
    title: "Google's biggest bet just shipped.",
    body: [
      "Fitbit Air at $99.99 is the screenless, all-day pebble — explicitly designed to talk to the Gemini-powered AI Coach. The strategic logic: most users don't need a wrist screen. Fitness band sales were sliding (Fitbit lost relevance after the acquisition). Whoop proved that screenless + subscription works.",
      "<strong>Fitbit Air takes the form factor, ditches the subscription requirement (3 months free, optional after), and gives Google Health a hardware funnel at under $100.</strong> Charge 6, Inspire 3, Sense 2, and Versa 4 remain in the line but feel legacy. The real product is now Fitbit Air + Google Health Premium.",
    ],
  },
  {
    anchor: "SMART RINGS",
    title: "Fastest-growing form factor. Pixel Ring still missing.",
    body: [
      "Oura was the only meaningful brand until 2024. Now it's a real market. Galaxy Ring at $399 with no subscription is the direct shot at Oura's $349 + $5.99/mo model. Ultrahuman Ring Air ($349) and Ring PRO ($479, 15-day battery) compete on no-subscription positioning. RingConn Gen 2 ($299) is the budget play. Circular Ring 2 has FDA-cleared ECG — no other ring does at this maturity.",
      "<strong>The strategic question: why hasn't Google or Apple shipped a ring?</strong> Both are rumored. Apple has patents going back years. If the wrist becomes the workout device and the ring becomes continuous biometrics, that's a portfolio play, not a competing product.",
    ],
  },
  {
    anchor: "RECOVERY / SUBSCRIPTION-FIRST",
    title: "Whoop's category, now under direct attack.",
    body: [
      "Whoop 5.0 and Whoop MG launched May 2025. MG adds FDA-cleared ECG and BP insights (beta) but locks it behind the $359/yr Life tier. Whoop's pricing change was controversial — the consumer backlash was loud. Battery jumped from 4–5 days to 14, which is the real product win.",
      "<strong>The bet:</strong> Whoop is making itself a health platform, not a fitness band. AI Coach quality + on-demand ECG are the differentiators. <strong>The risk:</strong> Fitbit Air at $99.99 with 3 months free Google Health Premium is the direct flank attack. Same form factor, same screenless ethos, no required subscription, AI Coach in the box.",
    ],
  },
  {
    anchor: "HEARABLES AS MEDICAL DEVICES",
    title: "Apple's quiet flex changed the rules.",
    body: [
      "AirPods Pro 2 and Pro 3 are now FDA-cleared OTC hearing aids. $249 vs. $4,000+ for traditional hearing aids. Battery life (5–6 hr) is the constraint vs. dedicated hearing aids (12–13 hr) — but the price-to-value collapses the comparison.",
      "<strong>Apple turned a $1.4B accessory category into a medical-device category overnight.</strong> This is the playbook to study — soft-launch a regulatory-cleared feature on an existing product to define a new category. Google doesn't have an analog. Pixel Buds Pro 2 has health features but nothing FDA-cleared. This is the most obvious gap in Google's portfolio.",
    ],
  },
  {
    anchor: "SMART GLASSES",
    title: "Meta's lane. Apple stalled. Google still on the bench.",
    body: [
      "Meta Ray-Ban Gen 2 ($379) is reportedly the surprise hit of 2025–2026 consumer hardware. LLAMA 4 onboard, 12MP ultra-wide, 3K video, two-way translation. Sales are strong enough that Meta is the de-facto leader in wearable glasses. Apple Vision Pro ($3,499) is a separate category — AR/VR headset, not glasses.",
      "<strong>Google has Gemini Live and Project Astra demos, but no shipping consumer glasses yet.</strong> If wearables shift from wrist to face — and Meta's volume says they're starting to — this becomes the most strategically expensive gap in the portfolio.",
    ],
  },
  {
    anchor: "HYBRID + SLEEP",
    title: "Niche categories with durable economics.",
    body: [
      "Withings ScanWatch Nova ($599.95) and ScanWatch 2 are the \"watch that doesn't look like a smartwatch\" buyers. 30-day battery, AFib detection, SpO2, temp, sleep. Small but loyal market. Important strategically because Withings sits across iOS and Android with no platform agenda — they survive by being the device for people who don't want to participate in the tech-watch race.",
      "Eight Sleep Pod 4 at $2,799 plus $199/yr is a sleep furniture category. Cult following among performance optimizers. <strong>Sleep is the highest-ROI health intervention, and hardware-as-furniture unlocks a price point watches can't reach.</strong> Worth watching as a model for how to sell premium continuous health hardware.",
    ],
  },
];

// ─── Medical + fringe ───────────────────────────────────────────────────────

export interface MedicalCard {
  icon: "dot" | "square-dot" | "neuro" | "ems" | "eeg" | "bed" | "handheld" | "boot";
  title: string;
  body: string;
  products: { name: string; meta: string }[];
}

export const MEDICAL_CARDS: MedicalCard[] = [
  {
    icon: "dot",
    title: "Continuous glucose monitors",
    body: "CGM moved from prescription-only diabetes management to over-the-counter consumer wellness. Both Stelo and Lingo are subscription patches in the $50–$100/mo range. <strong>Counterpoint flagged non-invasive glucose in the watch as a 2026 growth catalyst</strong> — whoever ships first wins the next five years.",
    products: [
      { name: "Dexcom Stelo", meta: "· $89–$99/mo · 15-day sensors · OTC" },
      { name: "Abbott Lingo", meta: "· $49–$249 tiers · 14-day sensors · OTC" },
      {
        name: "Levels Health",
        meta: "· $199/mo · software layer over Dexcom/Abbott",
      },
    ],
  },
  {
    icon: "square-dot",
    title: "Automated insulin delivery",
    body: "The medical-grade end of glucose management. Tubeless patch pumps (Omnipod), micro-pumps (Tandem Mobi), and adaptive bionic-pancreas systems (iLet) are all closed-loop with CGM data. Insurance-funded, large markets, but the boundary with consumer wearables is finally porous via CGM integration.",
    products: [
      { name: "Omnipod 5", meta: "· tubeless · Dexcom G6/G7, Libre 2 Plus" },
      { name: "Tandem Mobi", meta: "· smallest AID · iPhone-controlled" },
      { name: "Beta Bionics iLet", meta: "· adaptive bionic pancreas" },
      { name: "Medtronic 780G", meta: "· legacy AID leader" },
    ],
  },
  {
    icon: "neuro",
    title: "Migraine + neuromodulation",
    body: "FDA-cleared electrical and magnetic stimulation devices. Real category with real outcomes — migraine alone is a $30B+ market. The pattern repeats for sleep apnea, depression, back pain. Regulatory-grade health hardware sold direct works.",
    products: [
      { name: "Cefaly Dual", meta: "· $499 · OTC, no prescription" },
      { name: "Nerivio", meta: "· $600/12 treatments · prescription" },
      { name: "GammaCore", meta: "· vagus nerve stim · prescription" },
    ],
  },
  {
    icon: "ems",
    title: "EMS / muscle stim",
    body: "Wireless app-controlled electrical muscle stimulation for recovery and performance. Premium DTC, sold through specialty channels and athletic teams. Therabody's PowerDot is the consumer-friendly leader; Compex stays sport-professional.",
    products: [
      {
        name: "Therabody PowerDot 2.0 Duo",
        meta: "· ~$349 · wireless NMES + TENS",
      },
      { name: "Compex Sport Elite 3.0", meta: "· <$500 · targeted NMES" },
      { name: "Compex Wireless 2.0", meta: "· $1,000+ · clinical-grade" },
    ],
  },
  {
    icon: "eeg",
    title: "EEG / mental wellness",
    body: "Brain-sensing headbands and vibration wearables for meditation, sleep, and focus. Smaller niche than CGM but proven business models. Muse pivoted from meditation into sleep and continues to launch (Athena adds fNIRS). Apollo Neuro succeeded by being a wearable that adjusts you, not measures you.",
    products: [
      {
        name: "Muse S Athena",
        meta: "· $399 · EEG + fNIRS, sleep + meditation",
      },
      { name: "Neurosity Crown", meta: "· $1,499 · 8-channel EEG, focus" },
      { name: "Apollo Neuro", meta: "· $349–$399 · vibration HRV" },
      { name: "Mendi, Sens.ai", meta: "· fNIRS neurofeedback" },
    ],
  },
  {
    icon: "bed",
    title: "Sleep tech",
    body: "Eight Sleep proved the bed-as-platform model works at $2,799 + $199/yr. Cult following among performance optimizers. Sleep is the highest-ROI health intervention. Hardware-as-furniture unlocks price points watches can't reach.",
    products: [
      {
        name: "Eight Sleep Pod 4",
        meta: "· $2,799 + $199/yr · active grid cooling",
      },
      {
        name: "Eight Sleep Pod 5 Ultra",
        meta: "· $3,299+ · upgraded sensor stack",
      },
    ],
  },
  {
    icon: "handheld",
    title: "Handheld + on-demand",
    body: "Single-purpose medical-grade devices that don't strap to a body part. KardiaMobile pioneered the pocket ECG category. No subscription. FDA-cleared. Pop it out when you need a reading. The simplest possible health hardware.",
    products: [
      {
        name: "KardiaMobile 6L",
        meta: "· $129 · 6-lead ECG, no subscription",
      },
      { name: "KardiaMobile (1-lead)", meta: "· $89 · entry ECG" },
    ],
  },
  {
    icon: "boot",
    title: "Recovery + light",
    body: "Direct-to-consumer recovery hardware that didn't exist 10 years ago — heat boots, compression sleeves, smart goggles, red light panels. Hyperice and Therabody are the consumer leaders. The category is small individually but signals a real change in how people spend on personal wellness.",
    products: [
      {
        name: "Hyperice × Nike Hyperboot",
        meta: "· $899 · heat + air compression",
      },
      { name: "Normatec Elite", meta: "· ~$899 · compression boots" },
      {
        name: "Therabody SmartGoggles G2",
        meta: "· ~$199 · eye massage + heat",
      },
      { name: "Joovv (red light)", meta: "· $599–$5,995 · home panels" },
    ],
  },
];

// ─── Three bets to watch ─────────────────────────────────────────────────────

export const BETS: PovCard[] = [
  {
    num: "BET 01",
    title: "Non-invasive glucose",
    body: "Apple, Samsung, and Google have all been working on no-needle glucose sensing for years. Counterpoint named this as a 2026 catalyst. Whoever ships first integrates the most valuable single biomarker into the watch chassis. The first launch redefines premium smartwatch.",
  },
  {
    num: "BET 02",
    title: "The Pixel Ring (and beyond)",
    body: "Google and Apple both have ring patents. The form factor is proven, the margins are good, and the workout/biometric portfolio split between wrist and ring is natural. The bigger question: do Google or Apple ship a ring in 2026? And how does each one position it against Watch?",
  },
  {
    num: "BET 03",
    title: "Glasses become real",
    body: "Meta Ray-Ban is the highest-momentum wearable category most analysts aren't watching. If Gemini Live ships in a Google glasses form factor — or Apple opens AirPods' on-face sibling — the wrist becomes one of three surfaces, not the dominant one. The portfolio question for every wearable brand changes.",
  },
];

// ─── Timeline events ────────────────────────────────────────────────────────

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2009",
    title: "First Fitbit ships",
    desc: "The clip-on tracker that started the consumer fitness wearables category.",
  },
  {
    year: "2012",
    title: "Pebble crowdfunds the smartwatch",
    desc: "Kickstarter raises $10.2M. The first proof of a real smartwatch market.",
  },
  {
    year: "2015",
    title: "Apple Watch ships",
    desc: "April 2015. The launch that defined the wrist-worn computer.",
  },
  {
    year: "2018",
    title: "Apple Watch ECG",
    desc: "Series 4. First FDA-cleared consumer ECG on the wrist. The medical-grade era begins.",
  },
  {
    year: "2020",
    title: "Whoop proves subscription",
    desc: "Screenless band, subscription-only. Validates recurring revenue as a real wearables business model.",
  },
  {
    year: "2021",
    title: "Google acquires Fitbit",
    desc: "$2.1B deal closes. Sets up the Google Health platform consolidation that ships five years later.",
  },
  {
    year: "2022",
    title: "Oura Ring Gen 3",
    desc: "The ring becomes a real category. New form factor for continuous biometrics.",
  },
  {
    year: "2024",
    title: "The medical inflection",
    desc: "Dexcom Stelo (first OTC CGM). AirPods Pro hearing aid FDA-cleared. Galaxy Ring ships. Vision Pro launches.",
  },
  {
    year: "2025",
    title: "Whoop MG goes clinical",
    desc: "FDA-cleared ECG and BP insights in a sub-$50/mo wearable. Recovery becomes clinical.",
  },
  {
    year: "2026",
    title: "Fitbit Air + AI Coach",
    desc: "$99 screenless tracker. Gemini-powered conversational coaching. The AI-first era begins.",
  },
];

export const MILESTONE_NOTES = [
  {
    year: "2015 · Apple Watch ships",
    body: "April 2015 launch. Defines the wrist-worn computer category and the modern smartwatch era.",
  },
  {
    year: "2020 · COVID pandemic",
    body: "Macro health interest spiked wearable demand. Smartphone shipments dipped to 1.29B — the first sign that the smartphone peak was real.",
  },
  {
    year: "2024 · Medical inflection",
    body: "Three FDA-cleared consumer-health milestones in one quarter: Dexcom Stelo (first OTC CGM, August), AirPods Pro 2 hearing aid (September), Apple Watch sleep apnea detection (September). Plus Galaxy Ring shipped in July, broadening the ring category.",
  },
  {
    year: "2026 · AI Coach scales",
    body: "The conversational-coaching model goes mainstream. Whoop Coach (2023+) and Oura Advisor (late 2024) defined the category; Ultrahuman shipped its coach in 2024. Google Health AI Coach (May 2026, Gemini-powered) brings it to mainstream consumers at $9.99/mo, paired with the $99 Fitbit Air.",
  },
];

// ─── Field notes table ──────────────────────────────────────────────────────

export interface FieldNoteRow {
  community: string;
  engagement: string;
  engagementLevel: "low" | "high" | "very-high";
  worn: string;
  app: string;
  reading: string;
}

export const FIELD_NOTES: FieldNoteRow[] = [
  {
    community: "Pickleball club + general gym",
    engagement: "Low–medium",
    engagementLevel: "low",
    worn: "Apple Watch on a handful of wrists. Most people have nothing on the wrist at all. Oura is known but rarely adopted. Whoop barely registers in conversation.",
    app: "Phone health apps if anything. No real platform allegiance.",
    reading:
      "The category is <em>known</em> but not <em>adopted</em>. This is a real gap. Fitbit Air's $99 price + zero-friction subscription model is built for exactly this crowd. If Google markets it as a habit, not a feature set, this is the conversion bet.",
  },
  {
    community: "Running club",
    engagement: "High",
    engagementLevel: "high",
    worn: "Garmin owns the runners' wrist (Forerunner mostly, some Fenix). Apple Watch — often Ultra — is the second wave. Many layer in Whoop or Oura for recovery on top.",
    app: "Strava is universal. Garmin Connect for the Garmin owners. Strava is where the social signaling actually happens.",
    reading:
      "Garmin's moat is real here. The depth of running metrics and the multi-week battery life keep this crowd locked in. Apple Watch is the alternative for runners who don't want a dedicated training watch. If you don't have either, it's a phone with Strava.",
  },
  {
    community: "Cycling team",
    engagement: "Very high",
    engagementLevel: "very-high",
    worn: "Garmin or Wahoo computer on the bars. Power meter on the cranks. Heart rate strap (chest or arm). Whoop frequently layered in on top. Some wear a Garmin on the wrist too, but the bike computer is the primary read.",
    app: "Strava is universal. TrainingPeaks for the serious ones. Garmin Connect or Wahoo's ecosystem app for the device data.",
    reading:
      "Multi-device stack is already the default — this crowd wears 3+ things simultaneously without thinking about it. They already pay attention to watts, heart rate, recovery, and sleep. They're the first market where AI insights and integrated coaching land — they already use the metrics; they want better synthesis.",
  },
];

// ─── References ─────────────────────────────────────────────────────────────

export interface ReferenceEntry {
  id: string;
  body: string; // HTML with <strong>, <a>, <br>, <em>
}

export const REFERENCES: ReferenceEntry[] = [
  {
    id: "ref-1",
    body: '<strong>614M units / +2.2% YoY (2026 forecast)</strong> · IDC Worldwide Wearable Device Tracker, December 2024 forecast: "Wearables to Face Continued Growth While Giving Way to New Form Factors." Total worldwide shipments projected at 614.1 million units in 2026, growth constrained by memory-related supply limitations.<br><a href="https://www.businesswire.com/news/home/20241216855749/en/Wearables-to-Face-Continued-Growth-While-Giving-Way-to-New-Form-Factors-According-to-IDC" target="_blank" rel="noopener">BusinessWire · IDC press release</a> · <a href="https://www.idc.com/promo/wearablevendor/" target="_blank" rel="noopener">IDC Wearable Devices Market Insights</a>',
  },
  {
    id: "ref-2",
    body: '<strong>32% Apple smartwatch share, Q4 2025</strong> · Counterpoint Research: "Global Smartwatch Shipments Swing to Growth in 2025 Led by China." Apple led shipments with 32% share, Huawei second at 13%. Global smartwatch shipments grew 4% YoY in 2025.<br><a href="https://counterpointresearch.com/en/insights/Global-Smartwatch-Shipments-Swing-to-Growth-in-2025-Led-by-China" target="_blank" rel="noopener">Counterpoint Research analysis</a>',
  },
  {
    id: "ref-3",
    body: '<strong>$9.99/mo subscription tier</strong> · Confirmed against vendor pricing pages. Apple Fitness+ is $9.99/mo or $79.99/yr. Google Health Premium is $9.99/mo or $99/yr (price increase announced May 2026 with the Google Health rebrand).<br><a href="https://www.apple.com/apple-fitness-plus/" target="_blank" rel="noopener">Apple Fitness+ pricing</a> · <a href="https://store.google.com/us/product/google_health_premium" target="_blank" rel="noopener">Google Health Premium store page</a> · <a href="https://www.androidauthority.com/google-health-premium-price-inclusions-features-3664507/" target="_blank" rel="noopener">Google Health Premium pricing analysis — Android Authority</a>',
  },
  {
    id: "ref-4",
    body: '<strong>31% China share of advanced smartwatches (2025)</strong> · Counterpoint Research. China\'s share of the global advanced smartwatch market rose from ~25% in 2024 to ~31% in 2025, the first year it surpassed North America. Driven by Huawei, Xiaomi, and kids-watch brand Imoo, with consumer demand supported by government subsidy programmes.<br><a href="https://counterpointresearch.com/en/insights/Global-Smartwatch-Shipments-Swing-to-Growth-in-2025-Led-by-China" target="_blank" rel="noopener">Counterpoint Research analysis</a>',
  },
  {
    id: "ref-5",
    body: '<strong>Two distinct market-share metrics on this page — both deliberately scoped.</strong><br><br><strong>(a) Smartwatch shipment share</strong> · Used in the hero stat (Apple 32%) and the smartwatch share donut chart. Source: Counterpoint Research, Q4 2025 Global Smartwatch Shipments. This metric counts <em>only</em> smart wrist devices running advanced operating systems (Apple Watch, Galaxy Watch, Pixel Watch, Huawei Watch GT lines, Imoo kids\' watches, etc.). In this category, Apple led at 32%, Huawei second at 13% following its 2025 surge.<br><a href="https://counterpointresearch.com/en/insights/Global-Smartwatch-Shipments-Swing-to-Growth-in-2025-Led-by-China" target="_blank" rel="noopener">Counterpoint: "Global Smartwatch Shipments Swing to Growth in 2025 Led by China"</a> · <a href="https://counterpointresearch.com/en/insights/global-smartwatch-shipments-market-share" target="_blank" rel="noopener">Counterpoint Global Smartwatch Shipments Market Share (quarterly tracker)</a><br><br><strong>(b) Total consumer wearables share</strong> · Used in the player card pills (Apple ~28%, Xiaomi/Huawei/Amazfit ~22% combined, etc.). Source: IDC Worldwide Wearable Device Tracker. This metric counts <em>everything</em>: smartwatches, fitness bands, smart rings, hearables (including wireless earbuds), and smart glasses. In this broader market, Apple drops from 32% to ~28% because hundreds of millions of wireless earbuds enter the volume. Niche players like Garmin and Pixel Watch register as small single-digit slices.<br><a href="https://www.idc.com/tracker/showproductinfo.jsp?containerId=IDC_P31315" target="_blank" rel="noopener">IDC Worldwide Quarterly Wearable Device Tracker</a> · <a href="https://www.idc.com/promo/wearablevendor/" target="_blank" rel="noopener">IDC Wearable Devices Market Insights</a><br><br><em>Why two metrics?</em> The donut chart and "Apple owns the smartwatch" headline focus on the wrist-screen battle — that\'s a smartwatch-only question. The player card percentages compare strategic players across the full wearables landscape, including those that don\'t make smartwatches at all (Whoop\'s screenless band, Oura\'s ring, Meta\'s glasses, Apple\'s hearables). Different lenses, different scope, both labeled.',
  },
  {
    id: "ref-6",
    body: '<strong>Annual unit shipments — wearables vs. smartphones (2014–2026)</strong><br><em>Wearables data</em> from IDC Worldwide Wearable Device Tracker (smartwatches, wristbands, earbuds, rings, and other wearables combined). 2014: ~29M; 2020: ~445M; 2024: ~543M; 2025: ~611M; 2026: 614.1M (IDC forecast). The 2022 dip reflects post-pandemic correction.<br><em>Smartphone data</em> from IDC Worldwide Quarterly Mobile Phone Tracker, verified against IDC press releases. <strong>Peak: 1.47B units in 2016.</strong> Slow decline 2017–2019. Trough at <strong>1.17B in 2023</strong> after two years of decline. <strong>Recovery: +6.4% to 1.24B in 2024</strong> (IDC press release Jan 2025), <strong>+1.5% to ~1.25B in 2025</strong> (IDC forecast). 2026 figure is author estimate based on IDC\'s stated low single-digit growth outlook (~2.6% CAGR through 2028).<br>Macro milestone annotations on the chart (Apple Watch ships 2015, COVID 2020, Medical inflection 2024, AI Coach era 2026) are author-curated.<br><br><strong>Primary sources:</strong><br>• <a href="https://my.idc.com/getdoc.jsp?containerId=prUS53072325" target="_blank" rel="noopener">IDC: "Worldwide Smartphone Shipments Grew 6.4% in 2024" (Jan 2025 press release)</a><br>• <a href="https://my.idc.com/getdoc.jsp?containerId=prUS53767725" target="_blank" rel="noopener">IDC: "Worldwide Smartphone Market Forecast to Grow 1% in 2025" (forecast update)</a><br>• <a href="https://www.statista.com/statistics/271491/worldwide-shipments-of-smartphones-since-2009/" target="_blank" rel="noopener">Smartphone shipments worldwide 2009–2023 — Statista summary of IDC data</a><br>• <a href="https://www.statista.com/chart/12798/global-smartphone-shipments/" target="_blank" rel="noopener">"Have We Passed the Peak of the Smartphone Era?" — Statista chart based on IDC data</a><br>• <a href="https://www.statista.com/statistics/437871/wearables-worldwide-shipments/" target="_blank" rel="noopener">Wearable device unit shipments worldwide, 2014–2029 — Statista summary of IDC data</a><br>• <a href="https://www.businesswire.com/news/home/20241216855749/en/Wearables-to-Face-Continued-Growth-While-Giving-Way-to-New-Form-Factors-According-to-IDC" target="_blank" rel="noopener">IDC: "Wearables to Face Continued Growth" (Dec 2024 press release)</a><br>• <a href="https://www.idc.com/promo/wearablevendor/" target="_blank" rel="noopener">IDC Wearable Devices Market Insights</a>',
  },
];

// ─── Chart data ─────────────────────────────────────────────────────────────

export const SHARE_CHART = {
  labels: [
    "Apple",
    "Huawei",
    "Samsung",
    "Xiaomi",
    "Indian brands (Noise, BoAt, Fire-Boltt)",
    "Imoo (kids)",
    "Garmin",
    "Google / Fitbit",
    "Honor",
    "Other",
  ],
  data: [32, 13, 9, 7, 8, 5, 4, 3, 3, 16],
};

export const FORM_CHART: Array<{
  label: string;
  tier: 1 | 2 | 3;
  score: number;
  driver: string;
}> = [
  {
    label: "Smart rings",
    tier: 1,
    score: 92,
    driver:
      "Oura Ring 5 (May 2026), Galaxy Ring (2024), Ultrahuman Ring PRO (Feb 2026). Multiple new entrants, no dominant winner yet.",
  },
  {
    label: "Smart glasses",
    tier: 1,
    score: 88,
    driver:
      "Meta Ray-Ban Gen 2 ($379) is the surprise hit of 2025–26. LLAMA 4 onboard. No Apple or Google answer yet.",
  },
  {
    label: "CGM (consumer)",
    tier: 1,
    score: 86,
    driver:
      "Dexcom Stelo and Abbott Lingo went OTC in 2024–25. First time glucose data is consumer wellness, not just diabetes.",
  },
  {
    label: "Screenless trackers",
    tier: 2,
    score: 74,
    driver:
      "Fitbit Air ($99, May 2026) creates the category at scale. Whoop continues expanding subscription model.",
  },
  {
    label: "Hearables (medical)",
    tier: 2,
    score: 70,
    driver:
      "AirPods Pro hearing aid FDA-cleared (Sept 2024), now expanding to 160+ countries in 2026.",
  },
  {
    label: "Smartwatches",
    tier: 3,
    score: 52,
    driver:
      "Largest wearable category by volume (~40% of total shipments) but mature. +4% YoY in 2025 — saturated leader.",
  },
  {
    label: "Sleep tech",
    tier: 3,
    score: 38,
    driver:
      "Eight Sleep ($2,799 + $199/yr) defined the bed-as-platform model. Cult following, durable economics, small footprint.",
  },
  {
    label: "EEG / mental wellness",
    tier: 3,
    score: 28,
    driver:
      "Muse, Apollo Neuro, Neurosity — established but small. Hard to scale beyond enthusiast buyers.",
  },
];

export const GROWTH_CHART = {
  labels: [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
  ],
  wearables: [29, 82, 102, 115, 172, 346, 445, 534, 492, 504, 543, 611, 614],
  smartphones: [
    1301, 1437, 1473, 1465, 1403, 1371, 1292, 1355, 1205, 1170, 1240, 1255,
    1275,
  ],
  milestones: [
    { year: "2015", label: "Apple Watch ships" },
    { year: "2020", label: "COVID pandemic" },
    { year: "2024", label: "Medical inflection" },
    { year: "2026", label: "AI Coach scales" },
  ],
};

// ─── Product explorer data ──────────────────────────────────────────────────

export type FormFactor =
  | "watch"
  | "ring"
  | "band"
  | "pebble"
  | "earbud"
  | "glasses"
  | "bed"
  | "headband";

export interface Product {
  name: string;
  brand: string;
  category: string;
  form: FormFactor;
  price: number;
  priceDisp: string;
  batteryHours: number;
  batteryDisp: string;
  features: string[];
  fda: string[];
  hasAI: boolean;
  sub: string;
  subReq: boolean;
  platform: string;
  stevesPick?: boolean;
}

export const PRODUCTS: Product[] = [
  // Premium smartwatch
  { name: "Apple Watch Ultra 3", brand: "Apple", category: "Smartwatch · Premium", form: "watch", price: 799, priceDisp: "$799", batteryHours: 36, batteryDisp: "36 hr", features: ["ECG","SpO2","AFib","Sleep Apnea","Hypertension","Satellite SOS","Dive"], fda: ["ECG","AFib","Sleep Apnea","Hypertension"], hasAI: false, sub: "Fitness+ optional", subReq: false, platform: "iOS only", stevesPick: true },
  { name: "Apple Watch Series 11", brand: "Apple", category: "Smartwatch · Premium", form: "watch", price: 399, priceDisp: "$399", batteryHours: 24, batteryDisp: "~24 hr", features: ["ECG","SpO2","AFib","Sleep Apnea","Hypertension","5G"], fda: ["ECG","AFib","Sleep Apnea","Hypertension"], hasAI: false, sub: "Fitness+ optional", subReq: false, platform: "iOS only" },
  { name: "Garmin Fenix 8 AMOLED", brand: "Garmin", category: "Smartwatch · Premium", form: "watch", price: 1000, priceDisp: "~$1,000", batteryHours: 696, batteryDisp: "29 days", features: ["ECG","SpO2","Multi-sport","Offline maps","Dive"], fda: ["ECG"], hasAI: false, sub: "Connect+ optional", subReq: false, platform: "iOS + Android", stevesPick: true },
  { name: "Garmin Fenix 8 Pro", brand: "Garmin", category: "Smartwatch · Premium", form: "watch", price: 1200, priceDisp: "$1,200+", batteryHours: 360, batteryDisp: "15 days", features: ["microLED","LTE","ECG","SpO2","Multi-sport"], fda: ["ECG"], hasAI: false, sub: "Connect+ optional", subReq: false, platform: "iOS + Android" },
  { name: "Garmin Forerunner 970", brand: "Garmin", category: "Smartwatch · Premium", form: "watch", price: 750, priceDisp: "~$750", batteryHours: 360, batteryDisp: "15 days", features: ["ECG","Running economy","Titanium"], fda: ["ECG"], hasAI: false, sub: "Connect+ optional", subReq: false, platform: "iOS + Android" },
  { name: "Garmin Venu 4", brand: "Garmin", category: "Smartwatch · Premium", form: "watch", price: 550, priceDisp: "$550", batteryHours: 288, batteryDisp: "12 days", features: ["AMOLED","GPS","NFC","Voice calls"], fda: [], hasAI: false, sub: "Connect+ optional", subReq: false, platform: "iOS + Android" },
  { name: "Samsung Galaxy Watch Ultra", brand: "Samsung", category: "Smartwatch · Premium", form: "watch", price: 650, priceDisp: "$649.99", batteryHours: 48, batteryDisp: "48 hr", features: ["ECG","AFib","Sleep Apnea","BP","100m waterproof"], fda: ["ECG","AFib","Sleep Apnea"], hasAI: true, sub: "Galaxy AI free", subReq: false, platform: "Android only" },
  { name: "Polar Vantage V3", brand: "Polar", category: "Smartwatch · Premium", form: "watch", price: 599, priceDisp: "$599", batteryHours: 61, batteryDisp: "61 hr GPS", features: ["ECG","AMOLED","Dual-band GPS","Offline maps"], fda: ["ECG"], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Suunto Vertical 2", brand: "Suunto", category: "Smartwatch · Premium", form: "watch", price: 799, priceDisp: "$799–$1,099", batteryHours: 65, batteryDisp: "65 hr GPS", features: ["Solar","Offline maps","Multi-sport"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Withings ScanWatch Nova", brand: "Withings", category: "Smartwatch · Premium", form: "watch", price: 600, priceDisp: "$599.95", batteryHours: 720, batteryDisp: "30 days", features: ["Hybrid analog","AFib","SpO2","Temp","Sleep"], fda: ["AFib"], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },

  // Mainstream smartwatch
  { name: "Apple Watch Series 10", brand: "Apple", category: "Smartwatch · Mainstream", form: "watch", price: 399, priceDisp: "$399", batteryHours: 18, batteryDisp: "18 hr", features: ["ECG","SpO2","AFib","Sleep Apnea"], fda: ["ECG","AFib","Sleep Apnea"], hasAI: false, sub: "Fitness+ optional", subReq: false, platform: "iOS only" },
  { name: "Apple Watch SE 3", brand: "Apple", category: "Smartwatch · Mainstream", form: "watch", price: 249, priceDisp: "$249", batteryHours: 18, batteryDisp: "18 hr", features: ["Heart rate","Sleep","Fall detection"], fda: [], hasAI: false, sub: "Fitness+ optional", subReq: false, platform: "iOS only" },
  { name: "Pixel Watch 4 (41mm)", brand: "Google", category: "Smartwatch · Mainstream", form: "watch", price: 349, priceDisp: "$349 / $449 LTE", batteryHours: 30, batteryDisp: "30 hr", features: ["ECG","AFib","SpO2","Skin temp","Sleep","AI Coach"], fda: ["ECG","AFib"], hasAI: true, sub: "Google Health Premium $9.99/mo", subReq: false, platform: "Android-first" },
  { name: "Pixel Watch 4 (45mm)", brand: "Google", category: "Smartwatch · Mainstream", form: "watch", price: 399, priceDisp: "$399 / $499 LTE", batteryHours: 40, batteryDisp: "40 hr", features: ["ECG","AFib","SpO2","Skin temp","Sleep","AI Coach"], fda: ["ECG","AFib"], hasAI: true, sub: "Google Health Premium $9.99/mo", subReq: false, platform: "Android-first", stevesPick: true },
  { name: "Samsung Galaxy Watch 7", brand: "Samsung", category: "Smartwatch · Mainstream", form: "watch", price: 300, priceDisp: "$299.99–$379.99", batteryHours: 40, batteryDisp: "40 hr", features: ["ECG","AFib","BP","Sleep Apnea","BIA"], fda: ["ECG","AFib","Sleep Apnea"], hasAI: true, sub: "Galaxy AI free", subReq: false, platform: "Android-first" },
  { name: "Garmin Forerunner 265", brand: "Garmin", category: "Smartwatch · Mainstream", form: "watch", price: 300, priceDisp: "$300–$450", batteryHours: 312, batteryDisp: "13 days", features: ["Multi-band GPS","AMOLED","Training load"], fda: [], hasAI: false, sub: "Connect+ optional", subReq: false, platform: "iOS + Android" },
  { name: "Garmin Instinct 3 AMOLED", brand: "Garmin", category: "Smartwatch · Mainstream", form: "watch", price: 450, priceDisp: "~$450", batteryHours: 432, batteryDisp: "18 days", features: ["Rugged","Multi-band GPS","10 ATM"], fda: [], hasAI: false, sub: "Connect+ optional", subReq: false, platform: "iOS + Android" },
  { name: "Coros Pace Pro", brand: "Coros", category: "Smartwatch · Mainstream", form: "watch", price: 349, priceDisp: "$349", batteryHours: 30, batteryDisp: "30 hr GPS", features: ["AMOLED","Dual-band GPS","Navigation"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Suunto Race S", brand: "Suunto", category: "Smartwatch · Mainstream", form: "watch", price: 399, priceDisp: "$399", batteryHours: 40, batteryDisp: "40 hr GPS", features: ["Lightweight","Dual-band GPS"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },

  // Fitness bands + screenless
  { name: "Fitbit Air", brand: "Google", category: "Fitness band · Screenless", form: "pebble", price: 100, priceDisp: "$99.99", batteryHours: 168, batteryDisp: "7 days", features: ["24/7 HR","AFib","SpO2","HRV","Sleep","Skin temp","AI Coach"], fda: ["AFib"], hasAI: true, sub: "3 mo free, then $9.99/mo", subReq: false, platform: "iOS + Android", stevesPick: true },
  { name: "Fitbit Charge 6", brand: "Google", category: "Fitness band · Wrist", form: "band", price: 160, priceDisp: "$159.95", batteryHours: 168, batteryDisp: "7 days", features: ["ECG","EDA stress","SpO2","GPS","40+ workouts"], fda: ["ECG"], hasAI: false, sub: "Premium optional", subReq: false, platform: "iOS + Android" },
  { name: "Fitbit Inspire 3", brand: "Google", category: "Fitness band · Wrist", form: "band", price: 100, priceDisp: "$99.95", batteryHours: 240, batteryDisp: "10 days", features: ["HR","Sleep","Stress","Active Zone Minutes"], fda: [], hasAI: false, sub: "Premium optional", subReq: false, platform: "iOS + Android" },
  { name: "Fitbit Sense 2", brand: "Google", category: "Smartwatch · Mainstream", form: "watch", price: 300, priceDisp: "$299.95", batteryHours: 144, batteryDisp: "6+ days", features: ["ECG","EDA","Skin temp","Stress","SpO2"], fda: ["ECG"], hasAI: false, sub: "Premium optional", subReq: false, platform: "iOS + Android" },
  { name: "Fitbit Versa 4", brand: "Google", category: "Smartwatch · Mainstream", form: "watch", price: 230, priceDisp: "$229.95", batteryHours: 144, batteryDisp: "6+ days", features: ["GPS","NFC","Voice assistant","Workouts","Sleep"], fda: [], hasAI: false, sub: "Premium optional", subReq: false, platform: "iOS + Android" },
  { name: "Amazfit Active Edge", brand: "Amazfit", category: "Fitness band · Wrist", form: "watch", price: 170, priceDisp: "$169.99", batteryHours: 384, batteryDisp: "16 days", features: ["Rugged","GPS","130+ sports modes"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Amazfit T-Rex 3", brand: "Amazfit", category: "Smartwatch · Premium", form: "watch", price: 280, priceDisp: "$279.99", batteryHours: 648, batteryDisp: "27 days", features: ["Rugged","Dual-band GPS","AI insights"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Amazfit T-Rex Ultra 2", brand: "Amazfit", category: "Smartwatch · Premium", form: "watch", price: 550, priceDisp: "$549.99", batteryHours: 720, batteryDisp: "30 days", features: ["Rugged","Dual-band GPS","Multi-week battery"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Xiaomi Smart Band 9", brand: "Xiaomi", category: "Fitness band · Wrist", form: "band", price: 40, priceDisp: "$39.99", batteryHours: 504, batteryDisp: "21 days", features: ["HR","Sleep","SpO2","150+ workouts"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Huawei Band 9", brand: "Huawei", category: "Fitness band · Wrist", form: "band", price: 70, priceDisp: "$69.99", batteryHours: 336, batteryDisp: "14 days", features: ["HR","Sleep","SpO2","Stress"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },

  // Smart rings
  { name: "Oura Ring 4", brand: "Oura", category: "Smart ring", form: "ring", price: 349, priceDisp: "$349–$499", batteryHours: 192, batteryDisp: "8 days", features: ["HR","HRV","SpO2","Temp","Sleep stages","AFib (add-on)","AI Advisor"], fda: ["AFib"], hasAI: true, sub: "$5.99/mo required", subReq: true, platform: "iOS + Android", stevesPick: true },
  { name: "Samsung Galaxy Ring", brand: "Samsung", category: "Smart ring", form: "ring", price: 399, priceDisp: "$399", batteryHours: 168, batteryDisp: "7 days", features: ["HR","Sleep","Energy score","SpO2","Skin temp"], fda: [], hasAI: true, sub: "Galaxy AI free", subReq: false, platform: "Android only", stevesPick: true },
  { name: "Ultrahuman Ring Air", brand: "Ultrahuman", category: "Smart ring", form: "ring", price: 349, priceDisp: "$349", batteryHours: 144, batteryDisp: "6 days", features: ["HR","HRV","Glucose insights","Temp","AI Coach"], fda: [], hasAI: true, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Ultrahuman Ring PRO", brand: "Ultrahuman", category: "Smart ring", form: "ring", price: 479, priceDisp: "$479", batteryHours: 360, batteryDisp: "15 days", features: ["HR","HRV","Glucose insights","Temp","Extended battery"], fda: [], hasAI: true, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "RingConn Gen 2", brand: "RingConn", category: "Smart ring", form: "ring", price: 299, priceDisp: "$299", batteryHours: 288, batteryDisp: "12+ days", features: ["HR","Sleep","SpO2","Stress"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Circular Ring 2", brand: "Circular", category: "Smart ring", form: "ring", price: 380, priceDisp: "~$380", batteryHours: 120, batteryDisp: "5 days", features: ["ECG","HR","Sleep"], fda: ["ECG"], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },

  // Recovery / subscription-first
  { name: "Whoop 5.0 (One)", brand: "Whoop", category: "Recovery · Subscription", form: "pebble", price: 199, priceDisp: "$199/yr", batteryHours: 336, batteryDisp: "14 days", features: ["Strain","Recovery","Sleep","VO2 max","Coach"], fda: [], hasAI: true, sub: "$199/yr required", subReq: true, platform: "iOS + Android" },
  { name: "Whoop 5.0 (Peak)", brand: "Whoop", category: "Recovery · Subscription", form: "pebble", price: 239, priceDisp: "$239/yr", batteryHours: 336, batteryDisp: "14 days", features: ["Healthspan","Whoop Age","Real-time stress","Coach"], fda: [], hasAI: true, sub: "$239/yr required", subReq: true, platform: "iOS + Android" },
  { name: "Whoop MG (Life)", brand: "Whoop", category: "Recovery · Subscription", form: "pebble", price: 359, priceDisp: "$359/yr", batteryHours: 336, batteryDisp: "14 days", features: ["ECG","BP insights (beta)","Healthspan","Coach"], fda: ["ECG"], hasAI: true, sub: "$359/yr required", subReq: true, platform: "iOS + Android", stevesPick: true },

  // Hearables
  { name: "Apple AirPods Pro 3", brand: "Apple", category: "Hearables", form: "earbud", price: 249, priceDisp: "$249", batteryHours: 6, batteryDisp: "5–6 hr", features: ["Hearing aid (FDA)","Hearing test","Media Assist","ANC"], fda: ["Hearing aid"], hasAI: true, sub: "None", subReq: false, platform: "iOS only", stevesPick: true },
  { name: "Apple AirPods Pro 2", brand: "Apple", category: "Hearables", form: "earbud", price: 199, priceDisp: "$199", batteryHours: 6, batteryDisp: "5–6 hr", features: ["Hearing aid (FDA)","Hearing test","ANC"], fda: ["Hearing aid"], hasAI: false, sub: "None", subReq: false, platform: "iOS only" },

  // Smart glasses
  { name: "Meta Ray-Ban Gen 2", brand: "Meta", category: "Smart glasses", form: "glasses", price: 379, priceDisp: "$379", batteryHours: 5, batteryDisp: "5 hr music", features: ["12MP camera","3K video","LLAMA 4 AI","Translation"], fda: [], hasAI: true, sub: "None", subReq: false, platform: "iOS + Android", stevesPick: true },
  { name: "Meta Ray-Ban Gen 1", brand: "Meta", category: "Smart glasses", form: "glasses", price: 299, priceDisp: "$299", batteryHours: 4, batteryDisp: "4 hr music", features: ["Camera","Calls","Meta AI"], fda: [], hasAI: true, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Apple Vision Pro", brand: "Apple", category: "Smart glasses", form: "glasses", price: 3499, priceDisp: "$3,499", batteryHours: 2, batteryDisp: "2 hr", features: ["AR/VR","Gestural UI","Biometrics","Apple Intelligence"], fda: [], hasAI: true, sub: "None", subReq: false, platform: "iOS only" },

  // Sleep beds
  { name: "Eight Sleep Pod 4", brand: "Eight Sleep", category: "Sleep tech", form: "bed", price: 2799, priceDisp: "$2,799 + $199/yr", batteryHours: 99999, batteryDisp: "AC powered", features: ["Active grid cooling","Sleep stages","HRV"], fda: [], hasAI: false, sub: "$199/yr required", subReq: true, platform: "iOS + Android" },

  // Mental wellness / EEG
  { name: "Muse S Athena", brand: "Muse", category: "EEG · Mental wellness", form: "headband", price: 399, priceDisp: "$399", batteryHours: 20, batteryDisp: "20 hr", features: ["EEG","fNIRS","Sleep","Meditation"], fda: [], hasAI: false, sub: "Muse+ optional", subReq: false, platform: "iOS + Android" },
  { name: "Neurosity Crown", brand: "Neurosity", category: "EEG · Mental wellness", form: "headband", price: 1499, priceDisp: "$1,499", batteryHours: 12, batteryDisp: "~12 hr", features: ["8-channel EEG","Focus tracking"], fda: [], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
  { name: "Apollo Neuro", brand: "Apollo", category: "EEG · Mental wellness", form: "band", price: 349, priceDisp: "$349–$399", batteryHours: 168, batteryDisp: "~7 days", features: ["HRV","Vibration calm","Sleep mode"], fda: [], hasAI: false, sub: "Apollo+ optional", subReq: false, platform: "iOS + Android" },

  // Handheld
  { name: "KardiaMobile 6L", brand: "AliveCor", category: "Handheld · Medical", form: "pebble", price: 129, priceDisp: "$129", batteryHours: 99999, batteryDisp: "1 yr coin cell", features: ["6-lead ECG","AFib","Bradycardia","Tachycardia"], fda: ["ECG","AFib"], hasAI: false, sub: "None", subReq: false, platform: "iOS + Android" },
];

export const CATEGORIES = [
  "Smartwatch · Premium",
  "Smartwatch · Mainstream",
  "Fitness band · Wrist",
  "Fitness band · Screenless",
  "Smart ring",
  "Recovery · Subscription",
  "Hearables",
  "Smart glasses",
  "Sleep tech",
  "EEG · Mental wellness",
  "Handheld · Medical",
];

export const FEATURE_FILTERS = [
  { id: "ECG", label: "ECG" },
  { id: "AFib", label: "AFib detection" },
  { id: "SpO2", label: "SpO2" },
  { id: "Sleep Apnea", label: "Sleep apnea" },
  { id: "Hypertension", label: "Hypertension" },
  { id: "Hearing aid (FDA)", label: "Hearing aid" },
  { id: "AI", label: "AI coach" },
  { id: "NoSub", label: "No subscription required" },
  { id: "FDA", label: "FDA-cleared feature" },
];
