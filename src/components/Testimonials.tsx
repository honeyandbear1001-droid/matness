import { testimonials, testimonialRating } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-primary"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.348 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30 section-y">
      <div className="container-px">
        <SectionHeading
          eyebrow="The Verdict From the Driver's Seat"
          title={
            <>
              Owners Don&rsquo;t Go <span className="text-gold">Back</span>
            </>
          }
        />

        <Reveal className="mt-6 flex flex-col items-center gap-3">
          <Stars count={testimonialRating.stars} />
          <p className="text-sm text-muted-foreground">{testimonialRating.label}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.attribution} delay={i * 100}>
              <figure className="card-surface flex h-full flex-col p-7">
                <span
                  className="font-serif text-5xl leading-none text-primary/50"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-3 flex-1 text-[1.05rem] leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <Stars count={5} />
                  <span className="text-sm font-medium text-muted-foreground">
                    {t.attribution}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
