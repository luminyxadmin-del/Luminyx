# Luminyx — One Ecosystem. Endless Opportunities.

A premium, production-ready Next.js 14 + TypeScript marketing site for **Luminyx**, the enterprise ecosystem bridging frontier AI with the vibrant potential of the African continent.

Built end-to-end from the original Stitch design audit — every navbar dropdown becomes its own dedicated page, the visual identity adapts a ServiceNow-style palette organization (with **Royal Indigo** replacing green as the primary brand color), and every page is wired with glassmorphic UI, Framer Motion micro-interactions and curated imagery.

---

## ✨ What's inside

- **11 fully-built pages** — Home, About, Africa, Ecosystem overview, Technology, Advisory, Talent, Mobility, Education, Partners, Contact.
- **Premium design system** — Hanken Grotesk + Inter typography, 24px radius glass surfaces, soft elevation shadows, gradient text, custom utilities.
- **Custom color palette** based on ServiceNow's structure but with a non-green identity:
  - **Primary** — Royal Indigo `#4F46E5`
  - **Accent** — Violet `#8B5CF6`, Cyan `#06B6D4`
  - **Secondary** — Sky, Teal, Amber, Rose, Dark Navy
- **Animated reveals** with Framer Motion (`<Reveal>` component).
- **Reusable building blocks** — `PageHero`, `SectionHeading`, `CTASection`, `Navbar` (with multi-level dropdown), `Footer`.
- **Fully responsive** — mobile-first layouts, glass mobile menu, bento grids that gracefully reflow.
- **TypeScript strict** mode, fully typed.
- **SEO-ready** — per-page metadata, OpenGraph + Twitter cards.

---

## 🚀 Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

---

## 📁 Project structure

```
luminyx-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout + fonts + SEO
│   │   ├── globals.css             # Tailwind + custom utilities
│   │   ├── page.tsx                # Home
│   │   ├── about/page.tsx
│   │   ├── africa/page.tsx
│   │   ├── partners/page.tsx
│   │   ├── contact/page.tsx
│   │   └── ecosystem/
│   │       ├── page.tsx            # Ecosystem overview
│   │       ├── technology/page.tsx
│   │       ├── advisory/page.tsx
│   │       ├── talent/page.tsx
│   │       ├── mobility/page.tsx
│   │       └── education/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky glass nav with dropdown
│   │   ├── Footer.tsx              # Dark footer with newsletter
│   │   ├── PageHero.tsx            # Reusable hero
│   │   ├── SectionHeading.tsx
│   │   ├── CTASection.tsx
│   │   └── Reveal.tsx              # Framer Motion scroll reveal
│   └── lib/
│       ├── constants.ts            # Site config, nav, images
│       └── utils.ts                # cn() helper
├── tailwind.config.ts              # Custom design tokens
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Design system reference

| Token              | Value                                |
| ------------------ | ------------------------------------ |
| Primary            | `#4F46E5` (Royal Indigo)             |
| Primary-Dark       | `#1E1B4B`                            |
| Primary-Light      | `#EEF2FF`                            |
| Accent-Violet      | `#8B5CF6`                            |
| Accent-Cyan        | `#06B6D4`                            |
| Dark Surface       | `#0F172A`                            |
| Display font       | Hanken Grotesk                       |
| Body font          | Inter                                |
| Card radius        | 24px (`rounded-3xl`)                 |
| Section spacing    | `py-section` / `py-section-lg`       |

Custom utilities available in `globals.css`: `.glass`, `.glass-dark`, `.gradient-text`, `.btn-primary`, `.btn-secondary`, `.card`, `.card-hover`, `.chip`, `.grid-pattern-bg`.

---

## 🧩 Navbar dropdown → dedicated pages

Per the brief, every navbar dropdown item is its own page:

- **Ecosystem** dropdown → `/ecosystem/technology`, `/ecosystem/advisory`, `/ecosystem/talent`, `/ecosystem/mobility`, `/ecosystem/education`
- Top-level routes → `/about`, `/africa`, `/partners`, `/contact`

---

## 📦 Tech stack

- **Next.js 14.2** (App Router)
- **React 18** + **TypeScript 5** (strict)
- **Tailwind CSS 3.4** with custom theme
- **Framer Motion 11** for animations
- **Lucide React** for icons
- **next/font/google** for Hanken Grotesk + Inter

---

## 📝 License

Built bespoke for Luminyx. All rights reserved.
