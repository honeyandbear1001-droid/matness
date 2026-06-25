/* ============================================================================
 *  MATNESS — central site configuration
 *  All copy, products, FAQ and brand data live here so the page is easy to
 *  tune for ad campaigns without touching component code.
 * ========================================================================== */

/* ----------------------------------------------------------------------------
 *  ⚠️  THE #1 THING TO SET BEFORE GOING LIVE  ⚠️
 *  This is the WhatsApp number every CTA on the site points to. The whole
 *  funnel (Google Ads → landing page → WhatsApp inquiry) dies if it's wrong.
 *  Set NEXT_PUBLIC_WHATSAPP_NUMBER in the environment. International format,
 *  digits only (e.g. Malaysian +60 12-345 6789 -> "60123456789").
 *  The fallback below is a PLACEHOLDER — replace before running ads.
 * ------------------------------------------------------------------------- */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^0-9]/g, "") ||
  "60123456789"; // TODO(client): real MATNESS WhatsApp number

/** Default message pre-filled when a visitor opens WhatsApp. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi MATNESS! I'd like a quote for custom-fit leather car mats for my vehicle.";

/**
 * Build a wa.me deep link with a pre-filled message. Centralised so every
 * button is consistent and tracked the same way.
 */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "MATNESS",
  legalName: "MATNESS",
  tagline: "Bespoke Dual-Layer Leather Car Mats",
  domain: "matness.co",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://matness.co",
  description:
    "Hand-crafted, custom-fit dual-layer leather car mats engineered for the world's finest automobiles. Laser-measured to your vehicle, hand-stitched to order. Malaysia & Singapore.",
  regions: ["Malaysia", "Singapore"],
  email: "", // add when available
  metaTitle: "MATNESS — Bespoke Leather Car Mats for Luxury Vehicles",
  metaDescription:
    "Custom-fit dual-layer leather car mats, laser-measured to your exact vehicle and hand-stitched to order. ISO 9001 & OEKO-TEX certified. Get a quote on WhatsApp.",
} as const;

/* --- Hero ---------------------------------------------------------------- */
export const hero = {
  eyebrow: "Premium · Custom-Fit · Hand-Stitched",
  headline: "Floor Mats Worthy of the Car You Drive",
  sub: "Bespoke dual-layer leather mats — laser-measured to your exact vehicle and hand-stitched to order. Built for protection. Designed for comfort.",
  primaryCta: "Get My Quote on WhatsApp",
  secondaryCta: "See the Craftsmanship",
  quoteMessage:
    "Hi MATNESS! I'd like a quote for custom leather mats. My vehicle is: ",
} as const;

/* --- Trust bar (above the fold, fast credibility) ------------------------ */
export const trustPoints = [
  "Custom-fit to 30+ luxury marques",
  "ISO 9001:2015 certified",
  "OEKO-TEX® certified leather",
  "Hand-stitched, made to order",
  "Ships across Malaysia & Singapore",
] as const;

/* --- The 5-layer construction (core product story) ----------------------- */
export const layers = [
  {
    name: "Full-Grain Cowhide Leather",
    desc: "A premium top surface that looks and feels like the interior of a flagship car — durable, breathable and easy to wipe clean.",
  },
  {
    name: "High-Density Memory Foam",
    desc: "A cushioned core that absorbs road vibration and adds genuine underfoot comfort on every drive.",
  },
  {
    name: "Hook-and-Loop Fastening",
    desc: "Secure Velcro mounting keeps mats locked in place — no sliding, no bunching, no pedal interference.",
  },
  {
    name: "Eco-Friendly XPE Base",
    desc: "A lightweight, water-resistant structural layer that holds the mat's precise shape for years.",
  },
  {
    name: "Silicone Anti-Slip Bottom",
    desc: "Grips the cabin floor so the set stays exactly where it was fitted — safe around the pedals.",
  },
] as const;

/* --- Leather colour range (real MATNESS showcase styles) -----------------
 *  Images and colour data sourced from matness.co's own product library so
 *  the gallery shows exactly what the client offers.
 * ------------------------------------------------------------------------- */
export const showcaseStyles = [
  {
    name: "Classic Black",
    tone: "Timeless Black",
    hex: "#2b2b2b",
    desc: "Deep, understated black that disappears into any cabin — the quiet upgrade.",
    image: "/classic-black-1.jpg",
  },
  {
    name: "Bordeaux Red",
    tone: "Dark Bordeaux",
    hex: "#5c0700",
    desc: "A deep, wine-dark red with a genuine sense of occasion.",
    image: "/bordeaux-red-1.jpg",
  },
  {
    name: "Magma Red",
    tone: "Burgundy Wine",
    hex: "#561029",
    desc: "Deep, luxurious burgundy with subtle purple undertones.",
    image: "/magma-red-1.jpg",
  },
  {
    name: "Ruby Red",
    tone: "Signature Red",
    hex: "#dc2626",
    desc: "Bold, confident red for an interior that loves to be noticed.",
    image: "/ruby-red-1.jpg",
  },
  {
    name: "Mocca Brown",
    tone: "Rich Espresso",
    hex: "#583400",
    desc: "Warm, sophisticated brown with rich amber undertones.",
    image: "/mocca-brown-1.jpg",
  },
  {
    name: "Canyon Tan",
    tone: "Sunset Gold",
    hex: "#a96800",
    desc: "Vibrant warm gold with copper undertones.",
    image: "/canyon-tan-1.jpg",
  },
  {
    name: "Silk Beige",
    tone: "Warm Beige",
    hex: "#d4a574",
    desc: "Soft, warm beige for the lightest luxury interiors.",
    image: "/silk-beige-1.jpg",
  },
] as const;

/* --- Customisation options ----------------------------------------------- */
export const customisation = [
  { label: "Leather colours", detail: "A full palette to match or contrast your cabin." },
  { label: "Stitching colours", detail: "Contrast or tonal thread, your choice." },
  { label: "Design patterns", detail: "Quilted, diamond, hex and more." },
  { label: "Embroidery & logos", detail: "Add your initials or vehicle marque." },
] as const;

/* --- Why MATNESS (value props for ad traffic) ---------------------------- */
export const valueProps = [
  {
    title: "Laser-Measured Perfect Fit",
    desc: "Every set is cut to your exact make, model and year — edge-to-edge coverage with no gaps, no trimming, no compromise.",
  },
  {
    title: "An Interior Upgrade, Not Just a Mat",
    desc: "MATNESS isn't a floor mat — it's an interior upgrade system designed to redefine the luxury driving experience.",
  },
  {
    title: "Verified Craftsmanship",
    desc: "ISO 9001:2015 and OEKO-TEX® certified materials and processes. Verified excellence — not promises.",
  },
  {
    title: "Made to Order in 5–7 Days",
    desc: "Hand-stitched to order and delivered across Malaysia & Singapore, typically within 5–7 working days.",
  },
] as const;

/* --- Process steps ------------------------------------------------------- */
export const processSteps = [
  {
    step: "01",
    title: "Tell us your vehicle",
    desc: "Send your make, model and year on WhatsApp. We confirm the exact fitment for your car.",
  },
  {
    step: "02",
    title: "Choose your finish",
    desc: "Pick leather edition, colours, stitching and any embroidery. We share a final spec and quote.",
  },
  {
    step: "03",
    title: "Hand-made to order",
    desc: "Your set is laser-cut and hand-stitched — typically ready in 5–7 working days.",
  },
  {
    step: "04",
    title: "Delivered & fitted",
    desc: "Mats arrive ready to drop in. Installation takes minutes, no tools required.",
  },
] as const;

/* --- Certifications ------------------------------------------------------ */
export const certifications = [
  {
    name: "ISO 9001:2015",
    desc: "Certified quality-management standard across our production.",
    image: "/cert-iso.png",
  },
  {
    name: "OEKO-TEX® Standard",
    desc: "Tested for harmful substances — safe materials, inside and out.",
    image: "/cert-oeko.png",
  },
] as const;

/* --- Supported marques (brand wall = instant credibility) ---------------- */
export const brands = [
  "Aston Martin",
  "Ferrari",
  "Lamborghini",
  "Porsche",
  "Bentley",
  "Rolls-Royce",
  "Maserati",
  "McLaren",
  "Bugatti",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Lexus",
  "Tesla",
  "Range Rover",
  "Land Rover",
  "Jaguar",
  "Volvo",
  "Lotus",
  "Genesis",
  "Cadillac",
  "Alfa Romeo",
  "Mini",
  "Volkswagen",
  "Toyota",
  "Honda",
  "Mazda",
  "Nissan",
  "Hyundai",
  "Kia",
] as const;

/* --- FAQ (verbatim from matness.co, lightly tightened) ------------------- */
export const faqs = [
  {
    q: "Are the mats custom-made for my car?",
    a: "Yes. Every MATNESS set is laser-measured and cut to your exact make, model and year for precise, edge-to-edge fitment — never a universal one-size mat.",
  },
  {
    q: "Are they safe around the pedals?",
    a: "Absolutely. The silicone anti-slip base and hook-and-loop fastening lock each mat in place so nothing shifts toward the pedals while you drive.",
  },
  {
    q: "What materials are used?",
    a: "A five-layer build: full-grain cowhide leather, high-density memory foam, hook-and-loop fastening, an eco-friendly XPE base and a silicone anti-slip bottom.",
  },
  {
    q: "Are the mats waterproof?",
    a: "The surface is water-resistant and wipes clean easily, protecting your cabin floor from spills, mud and daily wear.",
  },
  {
    q: "Can I customise the design?",
    a: "Yes — choose your leather edition, leather colour, stitching colour, design pattern and optional embroidery or logo.",
  },
  {
    q: "How long does production take?",
    a: "Because each set is hand-made to order, production typically takes about 5–7 working days before dispatch.",
  },
  {
    q: "Where do you deliver?",
    a: "We deliver across Malaysia and Singapore, usually within 5–7 working days. International orders are available by inquiry on WhatsApp.",
  },
  {
    q: "How do I install and clean them?",
    a: "Installation takes minutes and needs no tools — just drop them in. To clean, wipe with a damp cloth or a leather-safe cleaner; the top layer is detachable.",
  },
  {
    q: "What's your warranty and return policy?",
    a: "Every set is covered against manufacturing defects. If there's a fitment issue, contact us within 48 hours of delivery. As items are custom-made, they aren't returnable for change of mind.",
  },
  {
    q: "How do I order?",
    a: "The fastest way is WhatsApp — send us your vehicle details and we'll guide you through fitment, finish and a quote. You can also order via the website or our authorised dealers.",
  },
] as const;

/* --- Brand mission / vision (for footer + about strip) ------------------- */
export const brandStory = {
  vision:
    "To become a leading premium automotive lifestyle brand, setting the standard for refined comfort, craftsmanship and elevated driving experiences.",
  mission:
    "To craft custom-fit leather car mats with precision, quality materials and thoughtful detailing — enhancing comfort and elevating every drive.",
} as const;

/* --- Final CTA ----------------------------------------------------------- */
export const finalCta = {
  headline: "Your Car Deserves a Perfect Fit",
  sub: "Send us your vehicle details on WhatsApp and get a personalised quote — most replies within minutes during business hours.",
  cta: "Message Us on WhatsApp",
  message:
    "Hi MATNESS! I'm interested in custom leather car mats. Can you send me a quote? My vehicle is: ",
} as const;
