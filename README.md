# MATNESS — Conversion-Optimized Landing Page

A high-converting **Next.js 15** landing page for [MATNESS](https://matness.co) —
bespoke dual-layer leather car mats for luxury vehicles. Purpose-built to turn
**Google Ads** traffic into **WhatsApp inquiries**.

## The conversion funnel

```
Google Ads  →  this landing page  →  WhatsApp inquiry (the conversion)
```

Every CTA on the page is a WhatsApp deep link with a pre-filled message, and
every click fires a Google Ads + GA4 conversion event.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v3** — warm-black + gold theme matching the MATNESS brand
- Server-rendered, image-optimized, zero client JS beyond small interactive bits

## Conversion-rate-optimization built in

- **Message match** — headline + visuals reflect "premium custom leather car mats"
- **One goal, one action** — every CTA leads to WhatsApp, nothing competes
- **Sticky WhatsApp CTA** — full-width bar on mobile, floating button on desktop
- **Above-the-fold trust** — certifications + fitment claims in the hero
- **Fast** — optimized images (AVIF/WebP), system fonts swap, minimal JS
- **Mobile-first** — most ad traffic + most WhatsApp users are on mobile
- **Structured data** — Organization + FAQ JSON-LD for rich results
- **Conversion tracking** — gtag events on every WhatsApp click, tagged by location

## ⚙️ Configuration (do this before running ads)

All tunable content lives in [`src/lib/site.ts`](src/lib/site.ts). Set these
environment variables (see [`.env.example`](.env.example)):

| Variable | What it is | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | The MATNESS WhatsApp number, digits only (e.g. `60123456789`) | **YES — the whole funnel depends on it** |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads conversion ID (`AW-XXXXXXXXXX`) | For ad tracking |
| `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL` | Conversion label for the WhatsApp action | For ad tracking |
| `NEXT_PUBLIC_GA4_ID` | GA4 measurement ID (`G-XXXXXXXXXX`) | Optional |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | Optional |

> ⚠️ Until `NEXT_PUBLIC_WHATSAPP_NUMBER` is set to the real number, CTAs point to
> a placeholder. **Set it before spending on ads.**

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build                # production build
```

## Deployment

Deployed on **Vercel**. Set the environment variables above in the Vercel project
settings (Production + Preview). Pushes to `main` deploy automatically.

## Project structure

```
src/
  app/            layout, page, thank-you, robots, sitemap, globals.css
  components/     Hero, Craftsmanship, Customise, FAQ, FinalCTA, StickyWhatsApp, …
  lib/
    site.ts       ← all copy, products, FAQ, brands, WhatsApp config
    analytics.ts  ← Google Ads / GA4 conversion tracking
public/           real MATNESS imagery + certification badges
```

---

Built for performance, conversion, and easy iteration on ad campaigns.
