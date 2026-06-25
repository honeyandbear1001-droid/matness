import { processSteps } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="container-px py-20 sm:py-28">
      <SectionHeading
        eyebrow="How It Works"
        title={<>From Inquiry to <span className="text-gold">Installed</span></>}
        sub="A simple, guided process — most of it happens over a single WhatsApp chat."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.step} delay={i * 100}>
            <div className="relative h-full">
              <div className="card-surface h-full p-7">
                <span className="text-4xl font-bold text-gold">{step.step}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="absolute right-[-13px] top-1/2 z-10 hidden -translate-y-1/2 text-primary lg:block">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
