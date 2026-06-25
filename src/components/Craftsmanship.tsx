import Image from "next/image";
import { layers } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Craftsmanship() {
  return (
    <section
      id="craftsmanship"
      className="relative border-y border-border bg-card/30 py-20 sm:py-28"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Five-Layer Construction"
          title={<>Engineered in <span className="text-gold">Layers</span></>}
          sub="Every MATNESS set is built from five purpose-made layers — each one solving a real problem most car mats ignore."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          {/* Cross-section image */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-md border border-border shadow-gold">
              <Image
                src="/layer.jpg"
                alt="Cross-section of a MATNESS mat showing its five layers"
                width={828}
                height={456}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </Reveal>

          {/* Layer list */}
          <div className="order-1 space-y-3 lg:order-2">
            {layers.map((layer, i) => (
              <Reveal key={layer.name} delay={i * 80}>
                <div className="group flex gap-4 rounded-md border border-transparent p-4 transition-colors hover:border-border hover:bg-card/60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{layer.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {layer.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
