"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { hero } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { href: "#craftsmanship", label: "Craftsmanship" },
  { href: "#customise", label: "Customise" },
  { href: "#process", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2" aria-label="MATNESS home">
          <Image
            src="/logo.png"
            alt="MATNESS"
            width={150}
            height={54}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton
          location="header"
          message={hero.quoteMessage}
          className="!px-4 !py-2.5 !text-sm"
        >
          <span className="hidden sm:inline">Get a Quote</span>
          <span className="sm:hidden">Quote</span>
        </WhatsAppButton>
      </div>
    </header>
  );
}
