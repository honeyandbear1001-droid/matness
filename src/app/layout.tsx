import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import { GA4_ID, GOOGLE_ADS_ID } from "@/lib/analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.metaTitle,
  description: site.metaDescription,
  keywords: [
    "custom car mats",
    "leather car mats",
    "luxury car mats",
    "bespoke floor mats",
    "car mats Malaysia",
    "car mats Singapore",
    "MATNESS",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0d0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtagId = GOOGLE_ADS_ID || GA4_ID;

  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body>
        {children}

        {/* Google tag (gtag.js) — loads only if an Ads or GA4 ID is set */}
        {gtagId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
                ${GA4_ID ? `gtag('config', '${GA4_ID}');` : ""}
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
