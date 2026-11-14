# MAGADH INFRA — Official Business Website

A modern, production-ready corporate website for **MAGADH INFRA**, built with React 18, TypeScript, Tailwind CSS, and Vite. Designed with a premium industrial & infrastructure visual identity, responsive layouts, centralized configuration, and direct communication integrations.

---

## 🏢 Business Overview

- **Business Name:** MAGADH INFRA
- **Operational Coverage:** All India Permit
- **Headquarters / Registered Address:**
  RAWATPURA COLONY PHASE 2, NEAR SAI MANDIR, MATHPURENA, RAIPUR, CHHATTISGARH – 492013, INDIA
- **GST Number (GSTIN):** `22HRXPK5087E1Z9`
- **Direct Phone Numbers:**
  - `+91 94242 54090` (Main Enquiry)
  - `+91 78801 04441` (Support & Coordination)
  - `+91 94792 52524` (Direct Line)
- **Official Email:** `magadhinfra.cg@gmail.com`

---

## ⚙️ Tech Stack & Key Libraries

- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Custom industrial color palette: Deep Navy `#10243A`, Industrial Blue `#174A70`, Steel Grey `#64748B`, Accent Orange `#F28C28`)
- **Typography:** Inter (Body) & Manrope (Headings) via Google Fonts
- **Icons:** Lucide React & Authentic SVG Brand Icons
- **Form Validation:** React Hook Form + Zod (`@hookform/resolvers`)
- **SEO & Structured Data:** Semantic HTML5, React Helmet Async, OpenGraph tags, and LocalBusiness JSON-LD schema

---

## 📁 Project Structure

```
magadh-infra/
├── index.html                   # HTML entry point with meta tags & LocalBusiness JSON-LD schema
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Custom corporate & industrial theme tokens
├── tsconfig.json                # TypeScript project configuration
├── vite.config.ts               # Vite configuration with path aliases
└── src/
    ├── main.tsx                 # React DOM root entry point
    ├── App.tsx                  # Root app layout & global providers
    ├── index.css                # Global stylesheet & scrollbar settings
    ├── config/
    │   └── business.ts          # ⭐ CENTRALIZED BUSINESS CONFIGURATION
    ├── components/
    │   ├── Button.tsx           # Reusable button with multiple corporate variants
    │   ├── ContactCard.tsx      # Verified details card with one-click GST copy
    │   ├── EnquiryForm.tsx      # Zod-validated WhatsApp enquiry generator
    │   ├── Footer.tsx           # Multi-column footer with GST and legal info
    │   ├── Logo.tsx             # Text & geometric monogram brand logo
    │   ├── Navbar.tsx           # Sticky navbar with mobile navigation drawer
    │   ├── QuickFloatActions.tsx # Floating WhatsApp/Phone buttons + Back-to-Top
    │   ├── SectionHeading.tsx   # Reusable section title and badge component
    │   └── WhatsAppButton.tsx   # WhatsApp link generator with encoded message
    ├── sections/
    │   ├── Hero.tsx             # Hero with verified badges and CTAs
    │   ├── About.tsx            # About section with two-column profile layout
    │   ├── Services.tsx         # Configurable services section with consultation prompt
    │   ├── Coverage.tsx         # ALL INDIA PERMIT vector map & Raipur central hub
    │   ├── WhyChooseUs.tsx      # 4 verified corporate pillars
    │   └── Contact.tsx          # Contact section with click-to-call & enquiry form
    └── pages/
        └── Home.tsx             # Main landing page
```

---

## 🛠️ Centralized Configuration (`src/config/business.ts`)

All business details are isolated in `src/config/business.ts` so you can update them in one place without touching UI components:

- **Adding Services:** Add items to `BUSINESS_CONFIG.services.categories: [{ id, title, description }]`. When empty, the site displays a professional consultation notice inviting visitors to connect.
- **Configuring WhatsApp:** Set `BUSINESS_CONFIG.whatsapp.activeNumber` to any confirmed WhatsApp phone number (with country code, e.g., `'919424254090'`).
- **Editing Contact Information:** Update phone numbers, emails, addresses, or tax IDs seamlessly.

---

## 🚀 Running the Project

### Development Server
```bash
npm install
npm run dev
```
The site runs locally at `http://localhost:5173/`.

### Production Build
```bash
npm run build
```
Creates an optimized, tree-shaken static production bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```
