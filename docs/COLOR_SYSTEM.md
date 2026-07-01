# Luminyx Color Palette

Inspired by ServiceNow-style enterprise design systems, adapted with a purple-first identity for Luminyx.

---

## Primary Palette

| Tailwind Token | Hex | Usage |
|---|---|---|
| `primary-brand` | `#6D28D9` | Our primary brand color. Represents innovation, intelligence and premium enterprise trust. |
| `primary-dark` | `#2E1065` | Used for headings, backgrounds and strong visual elements. |
| `primary-light` | `#EDE9FE` | Used for backgrounds, highlights and subtle sections. |
| `accent-purple` | `#A78BFA` | Used for accents, icons, CTAs and important highlights. |
| `white` | `#FFFFFF` | Used for clean backgrounds and content areas. |

## Secondary Palette

| Tailwind Token | Hex | Usage |
|---|---|---|
| `navy` | `#1E1B4B` | Used for text, headers and dark sections. |
| `slate` | `#475569` | Used for body text, icons and neutral elements. |
| `light-gray` | `#E5E7EB` | Used for borders, dividers and subtle backgrounds. |
| `violet-accent` | `#7C3AED` | Used for infographics, charts and data visualization. |
| `indigo-accent` | `#4F46E5` | Used for links, interactive elements and accents. |
| `amber` | `#F59E0B` | Used for alerts, warnings and important notices. |
| `red` | `#EF4444` | Used for critical alerts, errors and high-priority items. |

## Gradient Usage

| Tailwind Token | Gradient | Use Case |
|---|---|---|
| `gradient-primary-brand` | `#6D28D9 → #A78BFA` | Hero sections, primary CTAs |
| `gradient-violet` | `#7C3AED → #4F46E5` | Charts, data visualization, secondary accents |
| `gradient-dark` | `#1E1B4B → #3B0764` | Dark feature sections, footers |

---

## Accessibility & Contrast

All primary text pairings tested against WCAG 2.1 on white (`#FFFFFF`) backgrounds.

| Pairing | Contrast Ratio | WCAG Level |
|---|---|---|
| `primary-dark` (`#2E1065`) on White | **15.24 : 1** | ✅ AAA |
| `primary-brand` (`#6D28D9`) on White | **7.10 : 1** | ✅ AAA |
| `navy` (`#1E1B4B`) on White | **15.99 : 1** | ✅ AAA |
| `slate` (`#475569`) on White | **7.58 : 1** | ✅ AAA |
| `violet-accent` (`#7C3AED`) on White | **5.70 : 1** | ✅ AA |
| `accent-purple` (`#A78BFA`) on White | **2.72 : 1** | ⚠️ Decorative only |

> **Note:** `accent-purple` does not meet WCAG AA for normal text. Use it only for decorative elements (icon fills, glow blobs, badge backgrounds where text is not displayed in accent-purple).
>
> WCAG 2.1 thresholds: AA requires ≥ 4.5 : 1 for normal text, AAA requires ≥ 7 : 1.

---

## Color Usage Principles

- **Consistent** — Use brand tokens across all touchpoints. Do not use arbitrary hex values in JSX; always reference a token.
- **Accessible** — `primary-dark`, `primary-brand`, `navy` and `slate` are all safe for body and heading text on white. Never use `accent-purple` as text color.
- **Purposeful** — Use color to create hierarchy: `primary-brand` for interactive elements, `navy` for headings, `slate` for secondary text, `primary-light` for section backgrounds.
- **Memorable** — Our purple-first palette reflects innovation, trust and African enterprise excellence.

---

## Mapping from Previous System

| Old Token | New Token | Notes |
|---|---|---|
| `primary` / `primary-600` | `primary-brand` | Same hex `#6D28D9` |
| `primary-900` | `primary-dark` | Was `#3B0764`, now `#2E1065` (deeper) |
| `primary-50` / `primary-soft` | `primary-light` | Same role, `#EDE9FE` |
| `violet` / `primary-400` | `accent-purple` | `#A78BFA` |
| `dark` (text) | `navy` | Was `#111827`, now `#1E1B4B` |
| `dark-secondary` | `slate` | Was `#4B5563`, now `#475569` |
| `primary-100` / borders | `light-gray` | `#E5E7EB` |
| `gradient-primary` | `gradient-primary-brand` | 2-stop: brand → accent |
| `gradient-hero` | `gradient-dark` | Dark: navy → deep purple |
| `info` | `indigo-accent` | `#4F46E5` |
| `surface` | `white` | Near-white section backgrounds |
| `surface-section` | `primary-light` | Lavender-tinted alternate sections |
