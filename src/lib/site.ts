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
  eyebrow: "Bespoke · Laser-Measured · Hand-Stitched",
  headline: "Floor Mats Worthy of the Car You Drive",
  // One-line dream outcome — what they actually get.
  promise:
    "The first thing you see when the door opens. The last detail your car was missing.",
  sub: "Bespoke dual-layer leather mats — laser-measured to your exact make, model and year, then hand-stitched to order. The fit is flawless. The feel is first-class.",
  primaryCta: "Get My Free Quote on WhatsApp",
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

/* --- Hard proof stats (all verifiable / truthful) ------------------------ */
export const proofStats = [
  { value: "30+", label: "Luxury marques fitted" },
  { value: "5-Layer", label: "Bespoke construction" },
  { value: "5–7 Days", label: "Hand-made to order" },
  { value: "2×", label: "Independent certifications" },
] as const;

/* --- Problem → Agitation (Sabri Suby PAS) -------------------------------
 *  The hidden cost of what most drivers settle for. All claims are generic,
 *  observable truths about cheap/universal mats — nothing fabricated.
 * ------------------------------------------------------------------------- */
export const problem = {
  eyebrow: "The Uncomfortable Truth",
  title: "You spent a fortune on the car. Then dressed the floor like an afterthought.",
  sub: "Universal mats are the single fastest way to cheapen a beautiful interior — and most owners never notice until a passenger does.",
  pains: [
    {
      title: "They slide toward the pedals",
      desc: "Generic mats bunch and creep while you drive — an annoyance at best, a hazard at worst.",
    },
    {
      title: "The gaps trap grit & water",
      desc: "One-size-fits-most leaves your carpet exposed exactly where mud, salt and spills do the most damage.",
    },
    {
      title: "They look — and smell — aftermarket",
      desc: "Thin rubber and chemical odour announce themselves the second the door opens. Your guests notice.",
    },
    {
      title: "They quietly age the car",
      desc: "Worn, mismatched mats drag down resale value and the whole feel of a cabin you paid premium money for.",
    },
  ],
  closer:
    "The floor is the one surface in your car you touch every single drive. It deserves better than a compromise.",
} as const;

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
    image2: "/classic-black-2.jpg",
  },
  {
    name: "Bordeaux Red",
    tone: "Dark Bordeaux",
    hex: "#5c0700",
    desc: "A deep, wine-dark red with a genuine sense of occasion.",
    image: "/bordeaux-red-1.jpg",
    image2: "/bordeaux-red-2.jpg",
  },
  {
    name: "Magma Red",
    tone: "Burgundy Wine",
    hex: "#561029",
    desc: "Deep, luxurious burgundy with subtle purple undertones.",
    image: "/magma-red-1.jpg",
    image2: "/magma-red-2.jpg",
  },
  {
    name: "Ruby Red",
    tone: "Signature Red",
    hex: "#dc2626",
    desc: "Bold, confident red for an interior that loves to be noticed.",
    image: "/ruby-red-1.jpg",
    image2: "/ruby-red-2.jpg",
  },
  {
    name: "Mocca Brown",
    tone: "Rich Espresso",
    hex: "#583400",
    desc: "Warm, sophisticated brown with rich amber undertones.",
    image: "/mocca-brown-1.jpg",
    image2: "/mocca-brown-2.jpg",
  },
  {
    name: "Canyon Tan",
    tone: "Sunset Gold",
    hex: "#a96800",
    desc: "Vibrant warm gold with copper undertones.",
    image: "/canyon-tan-1.jpg",
    image2: "/canyon-tan-2.jpg",
  },
  {
    name: "Silk Beige",
    tone: "Warm Beige",
    hex: "#d4a574",
    desc: "Soft, warm beige for the lightest luxury interiors.",
    image: "/silk-beige-1.jpg",
    image2: "/silk-beige-2.jpg",
  },
] as const;

/* --- Customisation options ----------------------------------------------- */
export const customisation = [
  { label: "Leather colours", detail: "A full palette to match or contrast your cabin." },
  { label: "Stitching colours", detail: "Contrast or tonal thread, your choice." },
  { label: "Design patterns", detail: "Quilted, diamond, hex and more." },
  { label: "Embroidery & logos", detail: "Add your initials or vehicle marque." },
] as const;

/* --- The MATNESS Difference (unique mechanism — the "turn" after PAS) ----- */
export const valueProps = [
  {
    title: "Laser-Measured Perfect Fit",
    desc: "Every set is cut to your exact make, model and year — edge-to-edge coverage with no gaps, no trimming, no compromise. This is the mechanism universal mats can't copy.",
  },
  {
    title: "An Interior Upgrade, Not Just a Mat",
    desc: "Five engineered layers — leather, memory foam, secure fastening, structural base and an anti-slip bottom — turn a floor mat into a genuine interior upgrade system.",
  },
  {
    title: "Verified Craftsmanship",
    desc: "ISO 9001:2015 quality management and OEKO-TEX® certified leather. Independently verified excellence — not marketing promises.",
  },
  {
    title: "Hand-Made to Order in 5–7 Days",
    desc: "Hand-stitched to your spec and delivered across Malaysia & Singapore, typically within 5–7 working days. Then fitted in minutes, no tools.",
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

/* --- The Offer / value stack (everything included in a bespoke set) ------
 *  Real deliverables only — no invented dollar figures. Framed so the quote
 *  reads as a complete transformation rather than "a pair of mats".
 * ------------------------------------------------------------------------- */
export const offer = {
  eyebrow: "What's Included",
  title: "Every MATNESS commission is a complete interior transformation",
  sub: "Not a product off a shelf — a bespoke set built around your car and only your car. Here's everything that comes standard with every quote.",
  includes: [
    {
      item: "Laser-measured bespoke fit",
      desc: "Cut to your exact make, model and year for true edge-to-edge coverage.",
    },
    {
      item: "Full-grain leather, your colour",
      desc: "Seven signature leathers — or any shade, matched to your cabin.",
    },
    {
      item: "Five-layer engineered build",
      desc: "Leather, memory foam, secure fastening, structural base and anti-slip bottom.",
    },
    {
      item: "Custom stitching & pattern",
      desc: "Contrast or tonal thread; quilted, diamond, hex and more — your choice.",
    },
    {
      item: "Optional embroidery & logo",
      desc: "Your initials or vehicle marque, hand-finished into the set.",
    },
    {
      item: "Anti-slip safety system",
      desc: "Hook-and-loop plus silicone base keeps everything locked away from the pedals.",
    },
    {
      item: "Delivered & drop-in fitted",
      desc: "Arrives ready to install in minutes — no tools, no trimming, no fuss.",
    },
    {
      item: "Certified, defect-backed quality",
      desc: "ISO 9001:2015 & OEKO-TEX® materials, covered by our craftsmanship guarantee.",
    },
  ],
  cta: "Get My Personalised Quote",
  // Tasteful, truthful scarcity for a hand-made-to-order atelier.
  // TODO(client): confirm this reflects real capacity before running ads.
  scarcity:
    "Because every set is hand-made to order, we take on a limited number of new commissions each week to protect our finish and lead times.",
} as const;

/* --- Risk reversal / guarantee (built from the real warranty terms) ------ */
export const guarantee = {
  eyebrow: "Order With Zero Risk",
  title: "The Perfect-Fit Promise",
  body: "We laser-measure to your exact vehicle, so your set is guaranteed to fit. Every commission is covered against manufacturing defects, and if anything about the fitment isn't right, tell us within 48 hours of delivery and we'll make it right — remake or repair. Because each set is custom-made to your spec, that's how we stand behind the craft.",
  points: [
    "Guaranteed precise fit — laser-measured to your make, model & year",
    "Covered against manufacturing defects",
    "48-hour fitment check — not right, we make it right",
  ],
} as const;

/* --- Social proof — testimonials -----------------------------------------
 *  ⚠️ PLACEHOLDER CONTENT ⚠️
 *  These are illustrative examples written to demonstrate the layout. They
 *  are NOT real customer reviews. Replace every entry with genuine, verifiable
 *  testimonials (ideally with permission + real names) BEFORE going live or
 *  running ads — publishing fabricated reviews is misleading and, in many
 *  markets, unlawful. Same applies to `testimonialRating` below.
 * ------------------------------------------------------------------------- */
export const testimonials = [
  {
    quote:
      "The fit is unreal — edge to edge, like the car came with them. First thing every passenger comments on now.",
    attribution: "Bentley Continental GT · Kuala Lumpur",
  },
  {
    quote:
      "I've bought 'custom' mats before that were anything but. These actually are. The leather and stitching feel factory-fitted.",
    attribution: "Porsche Cayenne · Singapore",
  },
  {
    quote:
      "Quoted on WhatsApp in minutes, delivered in under a week, dropped straight in. Effortless from start to finish.",
    attribution: "Range Rover Sport · Johor Bahru",
  },
] as const;

/** ⚠️ PLACEHOLDER rating — replace with a real, verifiable figure or remove. */
export const testimonialRating = {
  stars: 5,
  label: "Loved by drivers across Malaysia & Singapore",
} as const;

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
  "Koenigsegg",
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
  eyebrow: "Your Car Is Waiting",
  headline: "Give the Floor the Same Standard as the Drive",
  sub: "Send your vehicle details on WhatsApp for a free, no-obligation quote — most replies within minutes during business hours. No deposit to get a price.",
  cta: "Get My Free Quote on WhatsApp",
  reassurance: "Free quote · Guaranteed fit · Hand-made in 5–7 days",
  message:
    "Hi MATNESS! I'm interested in custom leather car mats. Can you send me a quote? My vehicle is: ",
} as const;
