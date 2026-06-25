import Image from "next/image";
import { site, brandStory, brands } from "@/lib/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="MATNESS" width={160} height={58} className="h-8 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {brandStory.vision}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Serving {site.regions.join(" & ")} · International by inquiry
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#craftsmanship" className="transition-colors hover:text-foreground">Craftsmanship</a></li>
              <li><a href="#customise" className="transition-colors hover:text-foreground">Customise</a></li>
              <li><a href="#process" className="transition-colors hover:text-foreground">How It Works</a></li>
              <li><a href="#faq" className="transition-colors hover:text-foreground">FAQ</a></li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get a Quote
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              The fastest way to order is a quick WhatsApp message.
            </p>
            <div className="mt-4">
              <WhatsAppButton location="footer" className="!px-5 !py-3 !text-sm">
                Message MATNESS
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground/70">
            Compatible with {brands.slice(0, 12).join(", ")} and more.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            © {site.name}. All rights reserved. · Bespoke custom-fit leather car mats.
          </p>
        </div>
      </div>
    </footer>
  );
}
