import Image from "next/image";
import { customisation, hero } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

export default function Customise() {
  return (
    <section
      id="customise"
      className="relative border-y border-border bg-card/30 py-20 sm:py-28"
    >
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        {/* Portrait image */}
        <Reveal>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-md border border-border shadow-gold">
            <Image
              src="/canyon-tan-2.jpg"
              alt="Custom MATNESS leather mats with quilted stitching and embroidered emblem"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Options */}
        <div>
          <SectionHeading
            center={false}
            eyebrow="Made Your Way"
            title={<>Built to <span className="text-gold">Your</span> Spec</>}
            sub="Match your cabin or make a statement. Every detail is yours to choose."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {customisation.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="rounded-md border border-border bg-background/40 p-5">
                  <h3 className="font-semibold text-primary">{item.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-10">
            <WhatsAppButton
              location="customise"
              message={`Hi MATNESS! I'd like to customise a set of mats (colour, stitching, pattern). My vehicle is: `}
            >
              Design My Set
            </WhatsAppButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
