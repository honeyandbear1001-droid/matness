import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "calc(var(--radius) + 8px)",
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 6px)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      backgroundImage: {
        /* Metallic champagne gold — alternating light/dark stops fake a sheen */
        "gradient-gold":
          "linear-gradient(135deg, hsl(42 48% 80%) 0%, hsl(38 56% 58%) 28%, hsl(40 44% 72%) 52%, hsl(34 52% 48%) 78%, hsl(46 64% 82%) 100%)",
        "gradient-gold-soft":
          "linear-gradient(135deg, hsl(40 40% 70% / 0.18), hsl(36 45% 50% / 0.08))",
        "gradient-radial-gold":
          "radial-gradient(circle at 50% 50%, hsl(40 55% 60% / 0.22), transparent 70%)",
        "gradient-card":
          "linear-gradient(160deg, hsl(34 14% 11%) 0%, hsl(28 14% 6.5%) 100%)",
      },
      boxShadow: {
        /* Soft cinematic dark shadows for depth */
        luxe: "0 1px 0 hsl(40 40% 90% / 0.03) inset, 0 24px 60px -30px hsl(0 0% 0% / 0.8)",
        "luxe-hover":
          "0 1px 0 hsl(40 40% 90% / 0.05) inset, 0 36px 90px -28px hsl(0 0% 0% / 0.85)",
        /* Warm gold glow for the money buttons */
        gold: "0 18px 50px -18px hsl(40 60% 55% / 0.5)",
        "gold-hover": "0 26px 70px -16px hsl(40 65% 58% / 0.62)",
        "gold-sm": "0 8px 24px -8px hsl(40 60% 55% / 0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 hsl(40 60% 58% / 0.45)" },
          "50%": { boxShadow: "0 0 0 16px hsl(40 60% 58% / 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in": "fade-in 0.9s ease-out forwards",
        marquee: "marquee 45s linear infinite",
        "pulse-glow": "pulse-glow 2.6s ease-out infinite",
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
