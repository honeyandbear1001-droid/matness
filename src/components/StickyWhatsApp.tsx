"use client";

import { useEffect, useState } from "react";
import { hero } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Always-available conversion path. On mobile it's a full-width bottom bar; on
 * desktop it's a floating action button. Appears once the user scrolls past the
 * hero so it never competes with the hero CTA.
 */
export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 sm:inset-x-auto sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      {/* Mobile bar */}
      <div className="border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
        <WhatsAppButton
          location="sticky-mobile"
          message={hero.quoteMessage}
          className="w-full"
        >
          {hero.primaryCta}
        </WhatsAppButton>
      </div>

      {/* Desktop floating button */}
      <div className="hidden sm:block">
        <WhatsAppButton
          location="sticky-desktop"
          message={hero.quoteMessage}
          className="animate-pulse-glow shadow-gold"
        >
          Get a Quote
        </WhatsAppButton>
      </div>
    </div>
  );
}
