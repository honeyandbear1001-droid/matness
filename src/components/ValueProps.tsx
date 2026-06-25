import { valueProps } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ValueProps() {
  return (
    <section className="container-px py-20 sm:py-28">
      <SectionHeading
        eyebrow="Why MATNESS"
        title={<>An Upgrade You Feel <span className="text-gold">Every Drive</span></>}
        sub="Most mats are an afterthought. Ours are engineered to match the car they sit in."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((prop, i) => (
          <Reveal key={prop.title} delay={i * 90}>
            <div className="card-surface h-full p-7 transition-transform duration-300 hover:-translate-y-1">
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
