/* ============================================================================
 *  Analytics & conversion tracking
 *  Every WhatsApp click is the conversion event for Google Ads. This module
 *  centralises firing that event to both Google Ads and GA4 (if configured).
 * ========================================================================== */

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "";
export const GOOGLE_ADS_WHATSAPP_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";

export const analyticsEnabled = Boolean(GOOGLE_ADS_ID || GA4_ID);

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fire the WhatsApp-inquiry conversion. Call this the instant a CTA is
 * clicked, before navigation. Safe to call even if analytics isn't set up.
 *
 * @param location  Where on the page the click happened (hero, sticky, etc.)
 *                  so we can see which CTA converts best.
 */
export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  // Google Ads conversion
  if (GOOGLE_ADS_ID && GOOGLE_ADS_WHATSAPP_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_WHATSAPP_LABEL}`,
    });
  }

  // GA4 custom event (also useful as a GA4-imported Ads conversion)
  window.gtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: location,
    cta_location: location,
  });
}
