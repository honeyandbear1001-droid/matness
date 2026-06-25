import Image from "next/image";
import { finalCta } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="quote" className="relative isolate overflow-hidden section-y">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bordeaux-red-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/88" />
        <div className="absolute inset-0 bg-gradient-radial-gold" />
      </div>

      <div className="container-px text-center">
        <Reveal>
          <p className="eyebrow justify-center">{finalCta.eyebrow}</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-[2rem] font-bold leading-[1.08] sm:text-4xl lg:text-[3.25rem]">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {finalCta.sub}
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton
              location="final-cta"
              message={finalCta.message}
              className="!px-9 !py-5 !text-lg"
            >
              {finalCta.cta}
            </WhatsAppButton>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {finalCta.reassurance}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
