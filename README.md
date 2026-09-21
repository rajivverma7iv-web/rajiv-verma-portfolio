# Rajiv Verma — Personal Portfolio Website

A premium, modern creative developer portfolio built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Three.js**.

Designed specifically for **Rajiv Verma**, Diploma in Computer Engineering student (5th Semester, expected graduation 2027) based in Delhi, India.

---

## 🌟 Key Features

1. **Editorial Aesthetic & Alternating Color Flow**:
   - Monochromatic fatigue is eliminated by cycling through carefully curated architectural tones:
     - **Hero**: Dark Charcoal (`#111215`) & studio lighting
     - **About**: Warm Off-White (`#FAF9F6`) & stone accents
     - **Skills**: Soft Neutral Light Gray (`#EEEEEC`)
     - **Services**: Dark Slate Graphite (`#14161A`)
     - **Projects**: Light Warm Stone (`#FAF9F6`)
     - **Process**: Architectural Neutral Gray (`#EFEFED`)
     - **CTA**: Deep Charcoal (`#111215`)
     - **Contact**: Clean Warm Off-White (`#FAF9F6`)
     - **Footer**: Dark Graphite (`#0E0F12`)

2. **Abstract 3D Kinetic Visual (Three.js)**:
   - Interactive architectural parametric torus knot sculpture in brushed champagne-gold and cool titanium, housing an internal frosted glass core with floating orbital rings and subtle micro-motes.
   - Smooth mouse parallax and touch interaction with 60fps performance.
   - Fallback protection for devices without WebGL.

3. **Authentic Content & Zero Fabrication**:
   - Academic Profile: Diploma in Computer Engineering, 5th Semester, graduating 2027, Delhi, India.
   - Verified Technical Stack: HTML, CSS, JavaScript, React, Git, GitHub, Responsive Web Design, AI-Assisted Development, Google AI Studio.
   - Services: Business Websites, Landing Pages, Portfolio Websites.
   - Projects:
     - **Seth Furniture Gallery** (Live: `https://rajivverma7iv-web.github.io/seth-furniture-gallery/`)
     - **PHYSIO WORLD** (Healthcare Website Concept — clearly labeled as concept)
     - **Student Productivity Dashboard** (Application Concept)
     - **More Projects Coming Soon** (Interactive Teaser)

4. **Contact & Customization**:
   - Placeholders: `[YOUR WHATSAPP NUMBER]` and `[YOUR EMAIL]`.
   - Single-click copy buttons with toast notifications.
   - Interactive message inquiry form with validation.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 5 with code splitting
- **Styling**: Tailwind CSS with custom architectural color palette
- **3D Visuals**: Three.js
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Syne*, *Cormorant Garamond*, *JetBrains Mono*)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm or pnpm

### Run Locally
```bash
# 1. Navigate to the project folder
cd rajiv-verma-portfolio

# 2. Start the development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## 📝 Customizing Placeholders

To replace your contact placeholders with your actual email and phone number, simply edit `src/data/portfolioData.ts`:

```ts
export const PERSONAL_INFO = {
  // ...
  contact: {
    emailPlaceholder: "your-actual-email@example.com",
    whatsappPlaceholder: "+91 98765 43210",
    location: "Delhi, India",
    // ...
  }
};
```
All sections (Hero, CTA, Contact form, Footer, and Copy buttons) will automatically reflect your new contact information.
