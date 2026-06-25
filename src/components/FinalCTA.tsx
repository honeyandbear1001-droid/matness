import Image from "next/image";
import { finalCta, trustPoints } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="quote" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bordeaux-red-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-radial-gold" />
      </div>

      <div className="container-px text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight sm:text-5xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            {finalCta.sub}
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton
              location="final-cta"
              message={finalCta.message}
              className="animate-pulse-glow !px-9 !py-5 !text-lg"
            >
              {finalCta.cta}
            </WhatsAppButton>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {trustPoints.slice(1, 4).map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
