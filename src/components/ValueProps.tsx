import { valueProps, proofStats } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ValueProps() {
  return (
    <section className="container-px section-y">
      <SectionHeading
        eyebrow="The MATNESS Difference"
        title={
          <>
            Why Owners Choose <span className="text-gold">Bespoke</span>
          </>
        }
        sub="Universal mats are made to fit everything — which means they fit nothing properly. This is the mechanism a one-size mat can never copy."
      />

      {/* Hard proof — verifiable credibility, not marketing fluff */}
      <Reveal>
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-4">
          {proofStats.map((stat) => (
            <div key={stat.label} className="bg-card/60 px-4 py-8 text-center">
              <dt className="font-serif text-3xl font-bold text-gold sm:text-[2.5rem]">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((prop, i) => (
          <Reveal key={prop.title} delay={i * 90}>
            <div className="card-surface h-full p-7">
              <span className="text-sm font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{prop.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {prop.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
