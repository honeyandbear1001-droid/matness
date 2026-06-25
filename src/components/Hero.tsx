import Image from "next/image";
import { hero, trustPoints } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/slide1.jpg"
          alt="Bespoke MATNESS leather car mat fitted in a luxury vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="container-px flex min-h-[100svh] flex-col justify-center pb-16 pt-28 sm:pt-32">
        <div className="max-w-2xl">
          <p className="eyebrow animate-fade-in">{hero.eyebrow}</p>

          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Floor Mats Worthy of the{" "}
            <span className="text-gold">Car You Drive</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              location="hero"
              message={hero.quoteMessage}
              className="animate-pulse-glow"
            >
              {hero.primaryCta}
            </WhatsAppButton>
            <a href="#craftsmanship" className="btn-outline">
              {hero.secondaryCta}
            </a>
          </div>

          {/* Trust micro-row */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.slice(0, 3).map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-fade-in sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
