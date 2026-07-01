import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-red-400",
    "border-emerald-400",
    "bg-red-50",
    "bg-emerald-50",
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary Palette (5 swatches) ──────────────────────────────────────
        'primary-brand':  '#6D28D9',  // hero brand color — innovation & enterprise trust
        'primary-dark':   '#2E1065',  // headings, backgrounds, strong visual elements
        'primary-light':  '#EDE9FE',  // backgrounds, highlights, subtle sections
        'accent-purple':  '#A78BFA',  // accents, icons, CTAs, important highlights
        white:            '#FFFFFF',  // clean backgrounds and content areas

        // ── Secondary Palette (7 swatches) ────────────────────────────────────
        navy:             '#1E1B4B',  // text, headers and dark sections
        slate:            '#475569',  // body text, icons and neutral elements
        'light-gray':     '#E5E7EB',  // borders, dividers and subtle backgrounds
        'violet-accent':  '#7C3AED',  // infographics, charts and data visualization
        'indigo-accent':  '#4F46E5',  // links, interactive elements and accents
        amber:            '#F59E0B',  // alerts, warnings and important notices
        red:              '#EF4444',  // critical alerts, errors and high-priority items

        // ── Utility (system states, not in brand tier) ────────────────────────
        success:          '#22C55E',
        black:            '#000000',

        // ── Light theme backgrounds ───────────────────────────────────────────
        'bg-base':        '#FFFFFF',
        'bg-subtle':      '#FAFAFC',
        'bg-tint':        '#F5F3FF',

        // ── Text on light background ──────────────────────────────────────────
        'ink':            '#111827',
        'ink-muted':      '#4B5563',
        'ink-faint':      '#6B7280',
      },
      fontFamily: {
        display: ["var(--font-hanken)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-lg": ["56px", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["44px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["36px", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" }],
        "headline-md": ["28px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["22px", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" }],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.375rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
      spacing: {
        "section": "4rem",
        "section-lg": "6rem",
        "gutter": "1.5rem",
      },
      backgroundImage: {
        // ── Gradient Usage (3 brand gradients) ────────────────────────────────
        'gradient-primary-brand': 'linear-gradient(135deg, #6D28D9, #A78BFA)',        // hero sections, primary CTAs
        'gradient-violet':        'linear-gradient(135deg, #7C3AED, #4F46E5)',        // charts, data viz, secondary accents
        'gradient-dark':          'linear-gradient(135deg, #1E1B4B, #3B0764)',        // dark feature sections, footers
        // ── Utility gradients ─────────────────────────────────────────────────
        'gradient-card':   'linear-gradient(180deg, #FFFFFF, #EDE9FE)',
        'grid-pattern':    'linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)',
        // ── Ambient wash utilities (light theme) ─────────────────────────────
        'wash-hero':       'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(109,40,217,0.08), transparent)',
        'wash-section':    'linear-gradient(180deg, rgba(167,139,250,0.06) 0%, transparent 100%)',
        'wash-cta':        'linear-gradient(135deg, rgba(237,233,254,0.85), rgba(196,181,253,0.35), rgba(255,255,255,0.9))',
      },
      boxShadow: {
        'card-soft': '0 4px 24px -4px rgba(109, 40, 217, 0.08)',
        'card-hover': '0 12px 32px -8px rgba(109, 40, 217, 0.16)',
        'elevated': '0 20px 48px -12px rgba(109, 40, 217, 0.18)',
        'focus-ring': '0 0 0 3px #8B5CF6',
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
