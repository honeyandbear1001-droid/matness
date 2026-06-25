import { faqs, hero } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

export default function FAQ() {
  return (
    <section id="faq" className="container-px section-y">
      <SectionHeading
        eyebrow="Questions, Answered"
        title={<>Everything You <span className="text-gold">Need to Know</span></>}
        sub="Still unsure about fitment or finish? Message us — we reply fast."
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={Math.min(i * 50, 300)}>
            <details className="group card-surface overflow-hidden [&_summary]:list-none">
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-medium">
                <span>{faq.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </div>
            </details>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150} className="mt-10 text-center">
        <p className="mb-4 text-muted-foreground">Have a different question?</p>
        <WhatsAppButton location="faq" message={hero.quoteMessage} variant="outline">
          Ask Us on WhatsApp
        </WhatsAppButton>
      </Reveal>

      {/* FAQ structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
