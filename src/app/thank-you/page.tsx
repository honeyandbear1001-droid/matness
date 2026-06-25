import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import { hero } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You — MATNESS",
  description: "Thanks for reaching out to MATNESS.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <Image src="/logo.png" alt="MATNESS" width={180} height={65} className="h-9 w-auto" />

      <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 text-primary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="mt-8 text-3xl font-bold sm:text-4xl">
        Thanks — we&rsquo;ve got you.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        If your WhatsApp didn&rsquo;t open automatically, tap below and we&rsquo;ll
        help you choose the perfect set for your car.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4">
        <WhatsAppButton location="thank-you" message={hero.quoteMessage}>
          Open WhatsApp
        </WhatsAppButton>
        <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
