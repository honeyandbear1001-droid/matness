/* eslint-disable @next/next/no-img-element */
import { brands } from "@/lib/site";
import SectionHeading from "./SectionHeading";

// Display name -> logo filename. Mirrors the slugify used when the logos were
// pulled from filippofilip95/car-logos-dataset into /public/brand-logos.
const logoSrc = (brand: string) =>
  `/brand-logos/${brand
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.png`;

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: readonly string[];
  reverse?: boolean;
}) {
  // Duplicate so translateX(-50%) loops seamlessly. Spacing lives on each item
  // (mx) rather than flex gap so both halves stay exactly equal width.
  const row = [...items, ...items];
  return (
    <div
      className={`flex w-max animate-marquee items-center hover:[animation-play-state:paused] ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {row.map((brand, i) => (
        <span
          key={`${brand}-${i}`}
          className="mx-6 flex shrink-0 items-center sm:mx-9"
        >
          <img
            src={logoSrc(brand)}
            alt={`${brand} logo`}
            loading="lazy"
            decoding="async"
            className="h-7 w-auto opacity-50 [filter:brightness(0)_invert(1)] transition duration-500 hover:opacity-100 hover:[filter:none] sm:h-9"
          />
        </span>
      ))}
    </div>
  );
}

export default function Brands() {
  const mid = Math.ceil(brands.length / 2);
  return (
    <section className="border-y border-white/[0.06] bg-card/30 section-y">
      <div className="container-px">
        <SectionHeading
          eyebrow="Fits 30+ Marques"
          title={<>Made for the World&rsquo;s <span className="text-gold">Finest Cars</span></>}
          sub="From hypercars to daily luxury — if you drive it, we can fit it. Don't see yours? Just ask."
        />
      </div>

      <div className="relative mt-14 space-y-8 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <MarqueeRow items={brands.slice(0, mid)} />
        <MarqueeRow items={brands.slice(mid)} reverse />
      </div>
    </section>
  );
}
