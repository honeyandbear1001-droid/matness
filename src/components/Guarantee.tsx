import { guarantee } from "@/lib/site";
import Reveal from "./Reveal";

function Seal() {
  return (
    <span className="relative flex h-16 w-16 items-center justify-center">
      <span className="absolute inset-0 rounded-full bg-gradient-radial-gold blur-md" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-gradient-gold-soft">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-7 w-7 text-primary"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 19.3 5 15.4 5 11V6l7-3z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5l2 2 4-4" />
        </svg>
      </span>
    </span>
  );
}

export default function Guarantee() {
  return (
    <section className="container-px pb-24 sm:pb-32 lg:pb-40">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass relative overflow-hidden rounded-2xl p-8 text-center shadow-luxe sm:p-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="flex justify-center">
            <Seal />
          </div>

          <p className="eyebrow mt-6 justify-center">{guarantee.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            {guarantee.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            {guarantee.body}
          </p>

          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-1">
            {guarantee.points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm leading-relaxed text-foreground/90">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
