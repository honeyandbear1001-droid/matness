import { offer } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

function Check() {
  return (
    <span
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold-sm"
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

export default function Offer() {
  return (
    <section id="offer" className="container-px section-y">
      <SectionHeading eyebrow={offer.eyebrow} title={offer.title} sub={offer.sub} />

      <Reveal className="mx-auto mt-16 max-w-4xl">
        <div className="glass rounded-2xl p-7 shadow-luxe sm:p-10">
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {offer.includes.map((inc) => (
              <li key={inc.item} className="flex gap-3.5">
                <Check />
                <div>
                  <p className="font-semibold leading-snug">{inc.item}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {inc.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-sm italic leading-relaxed text-muted-foreground">
          {offer.scarcity}
        </p>
        <div className="mt-7 flex justify-center">
          <WhatsAppButton
            location="offer"
            message={offer.cta + " — my vehicle is: "}
            className="!px-9 !py-5 !text-base"
          >
            {offer.cta}
          </WhatsAppButton>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          Free quote · No deposit · Reply in minutes
        </p>
      </Reveal>
    </section>
  );
}
