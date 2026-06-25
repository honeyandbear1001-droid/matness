import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemAgitation from "@/components/ProblemAgitation";
import ValueProps from "@/components/ValueProps";
import Craftsmanship from "@/components/Craftsmanship";
import Showcase from "@/components/Showcase";
import Customise from "@/components/Customise";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import Certifications from "@/components/Certifications";
import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { site, brands } from "@/lib/site";

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    areaServed: site.regions,
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Bespoke Custom-Fit Leather Car Mats",
        description: site.description,
        brand: { "@type": "Brand", name: site.name },
      },
    },
    knowsAbout: brands.map((b) => `${b} car mats`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemAgitation />
        <ValueProps />
        <Craftsmanship />
        <Showcase />
        <Customise />
        <Testimonials />
        <Process />
        <Offer />
        <Guarantee />
        <Certifications />
        <Brands />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
