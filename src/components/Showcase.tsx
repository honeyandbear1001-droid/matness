import Image from "next/image";
import { editions } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Showcase() {
  return (
    <section className="container-px py-20 sm:py-28">
      <SectionHeading
        eyebrow="Leather Editions"
        title={<>Choose Your <span className="text-gold">Finish</span></>}
        sub="Two signature leathers, each tanned and finished to last the life of your car."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {/* Feature image */}
        <Reveal className="lg:col-span-3">
          <div className="relative h-72 overflow-hidden rounded-md border border-border sm:h-96 lg:h-full">
            <Image
              src="/slide2.jpg"
              alt="MATNESS premium leather car mat detail"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Hand-stitched
              </p>
              <p className="mt-1 max-w-sm text-lg font-medium">
                Precision tailoring, edge to edge — finished by hand, never mass-produced.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Edition cards */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {editions.map((edition, i) => (
            <Reveal key={edition.name} delay={i * 120} className="flex-1">
              <div className="card-surface flex h-full flex-col justify-center p-7">
                <h3 className="text-2xl font-semibold">{edition.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {edition.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
