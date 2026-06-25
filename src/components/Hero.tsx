import { hero, trustPoints } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background video — clean cinematic loop; poster paints instantly for LCP */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* Cinematic grading: darken bottom for copy, vignette the edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/45 to-transparent" />
        <div className="absolute inset-0 [box-shadow:inset_0_0_220px_60px_hsl(28_18%_3%_/_0.9)]" />
      </div>

      <div className="container-px relative flex min-h-[100svh] flex-col justify-center pb-24 pt-32 sm:pt-36">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-in">{hero.eyebrow}</p>

          <h1 className="mt-6 text-balance text-[2.7rem] font-bold leading-[1.02] tracking-tightest sm:text-6xl lg:text-[5.25rem]">
            Floor Mats Worthy
            <br className="hidden sm:block" /> of the{" "}
            <span className="text-gold">Car You Drive</span>
          </h1>

          <p className="mt-6 max-w-xl font-serif text-lg italic leading-snug text-foreground/70 sm:text-xl">
            {hero.promise}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.sub}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton location="hero" message={hero.quoteMessage}>
              {hero.primaryCta}
            </WhatsAppButton>
            <a href="#craftsmanship" className="btn-outline">
              {hero.secondaryCta}
            </a>
          </div>

          {/* Trust micro-row */}
          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-2.5">
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
      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-fade-in sm:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
