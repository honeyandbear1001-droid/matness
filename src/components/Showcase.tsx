import Image from "next/image";
import { showcaseStyles } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

export default function Showcase() {
  return (
    <section id="finishes" className="container-px py-20 sm:py-28">
      <SectionHeading
        eyebrow="The Colour Range"
        title={<>Choose Your <span className="text-gold">Finish</span></>}
        sub="Seven signature leathers, each laser-cut to your exact cabin and hand-stitched to order. Don't see your shade? We tailor any colour, stitching and pattern to spec."
      />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {showcaseStyles.map((style, i) => (
          <Reveal key={style.name} delay={i * 70}>
            <figure className="group relative h-full overflow-hidden rounded-md border border-border">
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={style.image}
                  alt={`MATNESS ${style.name} leather car mat fitted in a vehicle`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full ring-1 ring-white/30"
                    style={{ backgroundColor: style.hex }}
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">
                    {style.tone}
                  </p>
                </div>
                <h3 className="mt-1 text-lg font-semibold sm:text-xl">{style.name}</h3>
                <p className="mt-1 hidden text-sm leading-snug text-muted-foreground sm:block">
                  {style.desc}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}

        {/* 8th tile — fills the 4×2 grid and turns the gallery into a CTA */}
        <Reveal delay={showcaseStyles.length * 70}>
          <div className="flex h-full min-h-[200px] flex-col items-center justify-center rounded-md border border-primary/40 bg-gradient-radial-gold p-6 text-center">
            <p className="text-base font-semibold sm:text-lg">Don&apos;t see your shade?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Colour, stitching &amp; pattern — tailored to your exact spec.
            </p>
            <WhatsAppButton
              location="showcase"
              message="Hi MATNESS! I'd like a custom colour/finish for my mats. My vehicle is: "
              className="mt-5 !px-5 !py-3 !text-sm"
            >
              Ask About Custom
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
