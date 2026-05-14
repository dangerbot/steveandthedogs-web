# Babylist AI — Image Assets

Drop screenshot PNGs into this folder before publishing the page at `/playground/babylist-ai`.

## Required images

| Filename | What it is | Used at |
|---|---|---|
| `prototype-onboarding-bee.png` | Onboarding prototype hero — meet Bee | Hero (left phone) + Prototype 01 section |
| `prototype-assistant-welcome.png` | In-app assistant welcome screen | Hero (right phone) + Prototype 02 section |
| `babylist-onboarding.png` | Strip of ~10 current Babylist onboarding screenshots | "What I saw" section |

## Sizing notes

- **Phone mockups** are rendered in a 9:19 aspect ratio container. PNG dimensions don't matter strictly, but ~750×1580 or similar mobile screenshot resolution works well. Image is `object-cover object-top` so the top of the image gets emphasis.
- **Onboarding strip** is full-width. Wide PNG that's 5-10× wider than tall works best (the original screenshot strip is ~2000×570 — perfect).

## If an image is missing

The page renders styled placeholders automatically so it won't look broken in dev. Just drop the file in and refresh.

## Two more things before publishing

1. Open `app/playground/babylist-ai/page.tsx` and replace both `LOVABLE_ONBOARDING_LINK` and `LOVABLE_ASSISTANT_LINK` constants at the top with the real Lovable demo URLs.
2. Confirm the page is reachable at `/playground/babylist-ai` after `npm run dev`. It is NOT linked from the playground index — it's unlisted, accessible only by direct link.
