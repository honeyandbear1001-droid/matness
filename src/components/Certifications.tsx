import Image from "next/image";
import { certifications, brandStory } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section className="container-px section-y">
      <SectionHeading
        eyebrow="Verified Excellence — Not Promises"
        title={<>Certified to a <span className="text-gold">Higher Standard</span></>}
        sub="Independent certification of our quality systems and the materials that touch your car."
      />

      <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 120}>
            <div className="card-surface flex h-full items-center gap-5 p-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-background/60 p-2">
                <Image
                  src={cert.image}
                  alt={`${cert.name} certification`}
                  fill
                  sizes="80px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-lg italic leading-relaxed text-muted-foreground">
          &ldquo;{brandStory.mission}&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
