import { brands } from "@/lib/site";
import SectionHeading from "./SectionHeading";

export default function Brands() {
  // Duplicate the list so the marquee can loop seamlessly.
  const row = [...brands, ...brands];

  return (
    <section className="border-y border-white/[0.06] bg-card/30 section-y">
      <div className="container-px">
        <SectionHeading
          eyebrow="Fits 30+ Marques"
          title={<>Made for the World&rsquo;s <span className="text-gold">Finest Cars</span></>}
          sub="From hypercars to daily luxury — if you drive it, we can fit it. Don't see yours? Just ask."
        />
      </div>

      <div className="relative mt-12 space-y-4 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee gap-3">
          {row.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/[0.06] bg-background/50 px-5 py-2.5 text-sm font-medium text-muted-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
