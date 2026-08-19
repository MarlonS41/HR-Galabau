# AGENTS.md

Welcome to the **HR-Galabau** project repository! This document provides guidance, standards, and workflow rules for AI agents and developer tools working within this codebase.

---

## 🌿 Project Overview

**HR-Galabau** is a modern, responsive website built for *HÖRNSCHEMEYER u. RIEPE Garten - Landschaftsbau GmbH* in Osnabrück using **Astro.js** (SSG - Static Site Generation).

- **Framework:** Astro.js (`^4.16.18`)
- **Styling:** Custom CSS with CSS variables in [src/styles/global.css](file:///Users/kevin/Developer/repos/HR-Galabau/src/styles/global.css)
- **Language:** HTML / CSS / JavaScript / TypeScript / Astro components

---

## 📁 Key Directories & Architecture

- [src/pages/](file:///Users/kevin/Developer/repos/HR-Galabau/src/pages): Route definitions (`index.astro`, `leistungen.astro`, `referenzen.astro`, `karriere.astro`, `kontakt.astro`, `impressum.astro`, `datenschutz.astro`).
- [src/components/](file:///Users/kevin/Developer/repos/HR-Galabau/src/components): Modular UI components (Header, Footer, Gallery, Lightbox, Forms, etc.).
- [src/layouts/](file:///Users/kevin/Developer/repos/HR-Galabau/src/layouts): Main `Layout.astro` file defining general HTML structure, meta tags, and global script imports.
- [src/styles/](file:///Users/kevin/Developer/repos/HR-Galabau/src/styles): Global styling and CSS system rules (`global.css`).
- [public/](file:///Users/kevin/Developer/repos/HR-Galabau/public): Static assets including images, icons, and fonts.

---

## 🛠️ CLI Commands & Development Workflows

Run commands using `npm`:

```bash
# Start local development server (http://localhost:4321)
npm run dev

# Build static production bundle into dist/
npm run build

# Preview local production build
npm run preview
```

---

## 📋 Guidelines for AI Agents

1. **Static Site Optimization:** Keep JavaScript lightweight. Rely on Astro's zero-JS-by-default architecture where possible.
2. **Design System & Styling:** Respect existing CSS custom properties and theme colors defined in [global.css](file:///Users/kevin/Developer/repos/HR-Galabau/src/styles/global.css).
3. **Component Consistency:** Ensure reusable UI logic is encapsulated into clean `.astro` components inside `src/components/`.
4. **Verification & Testing:** Always run `npm run build` to verify that edits do not introduce TypeScript errors or broken Astro syntax before declaring success.
5. **Preserve Content & Legal Compliance:** Maintain proper legal structures (Impressum § 5 TMG, DSGVO compliance) and business context when editing content.
