import { problem } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ProblemAgitation() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 section-y">
      {/* faint warm haze, slightly off the gold to signal "tension" */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(18_40%_18%/0.25),transparent_70%)]" />

      <div className="container-px">
        <SectionHeading
          eyebrow={problem.eyebrow}
          title={problem.title}
          sub={problem.sub}
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2">
          {problem.pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 80}>
              <div className="flex h-full gap-4 rounded-2xl border border-white/[0.06] bg-background/40 p-6 transition-colors hover:border-white/15">
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted-foreground"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                  >
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{pain.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {pain.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-balance font-serif text-xl italic leading-snug text-foreground/85 sm:text-2xl">
            {problem.closer}
          </p>
          <div className="gold-rule mx-auto mt-8 h-px w-24" />
        </Reveal>
      </div>
    </section>
  );
}
