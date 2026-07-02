# AgriQion — Smart Agriculture Automation

> **agriqon.** delivers modular automation systems for irrigation, pump control, and farm monitoring — customized to your land, crops, and water usage. Built to withstand Indian field conditions, power cuts, and low connectivity.

---

## 🌾 Core Features
- **Smart Irrigation Automation**: Eliminates late-night trips to the field by scheduling and routing water based on live soil levels.
- **Pump Control & Status Telemetry**: Live dashboard monitoring of active pump currents, running states, and line pressure.
- **Micro-climate & Soil Tracker**: Multi-zone sensors monitoring soil moisture, ambient temperature, and weather signals.
- **Dynamic Theme Selector**: Responsive Light and Dark mode options. Defaults strictly to Light mode for content clarity, while persisting custom preferences.
- **Branded Error Architectures**: Custom diagnostic architectures ([404.html](404.html) and [500.html](500.html)) designed as interactive control panels with diagnostic terminals and signal recalibration capabilities.
- **Full SEO & Social Optimization**: Compliant HTML5 structure with Open Graph, Twitter Cards, canonical link mapping, and standardized favicon declarations for search indexing.

---

## 📂 Web Structure
The application consists of a fully static, fast-loading architecture:
- `index.html` — The main home page, dashboard preview, and request wizard.
- `solutions.html` — In-depth overview of smart irrigation, weather monitoring, and soil telemetry systems.
- `devices.html` — Catalog of our hardware modules (Gateways, Soil Sensors, Pump Controllers).
- `customization.html` — Guide detailing our site assessment, selector matrix, and support.
- `use-cases.html` — Real-world field reports from small-scale farms, multi-zone plots, and polyhouse setups.
- `contact.html` — Form to request assessments, direct email contacts, and phone assistance.
- `404.html` — Telemetry Off-Grid handler page with a live RF signal scanner simulator.
- `500.html` — System Fault controller page with a simulated reboot sequence and CLI diagnostics tracker.
- `privacy.html` — Branded legal compliance page detailing farm data safety and device telemetry policies.
- `terms.html` — Branded compliance page detailing device installation safety limits and support liabilities.
- `robots.txt` — SEO crawling rule guidelines directing web crawlers and indexers.
- `sitemap.xml` — XML sitemap listing all indexable public pages to optimize search engine crawlers.

---

## 🛠️ Technology Stack & Design System
- **Core**: HTML5 semantic layout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Styling**: Modern CSS3 utilizing strict HSL design tokens, variable CSS variables, and layout media-queries.
- **Logic**: Vanilla ES6 JavaScript for theme persistence, mobile nav drawers, modal controls, and dashboard simulators.
- **Typography**: 
  - *Headings*: **DM Sans** (clean, developer-oriented sans-serif).
  - *Body / Technical Info*: **SFMono-Regular** (monospace for tabular data and numeric telemetry readouts).
- **Base Grid**: Clean layout calculated on a **4px modular grid** with expressive transitions (duration 150-300ms, ease-out/ease-in curves).

---

## 🚀 Running Locally

Since the website is built entirely on native HTML/CSS/JS, it runs directly out-of-the-box without compilation or complex node setups:

1. **Direct file access**: Simply double-click on `index.html` to load the application in any modern web browser.
2. **Local HTTP Server (Recommended)**: To serve correct mime-types and clean paths, spin up a lightweight server from the root directory:
   - Using Node.js: `npx http-server ./`
   - Using Python: `python -m http.server 8000`

---

## ⚡ Production & Cache Busting

To ensure clients always load the latest stylesheet and script files (ignoring proxy and browser caches), the project implements a **Content Hashing** build step.

### How it works:
1. Source assets are maintained in `style.css` and `script.js` for development.
2. When deploying or updating, run the hashing script:
   ```bash
   node hash-assets.js
   ```
3. This script:
   - Computes MD5 content hashes of `style.css` and `script.js`.
   - Cleans up older hashed copies (e.g. `style.[old-hash].css`).
   - Copies source files to `style.[new-hash].css` and `script.[new-hash].js`.
   - Modifies references in all `.html` files dynamically to point to the new hashed files.

*Ensure you run this script and commit/push the modified HTML and hashed assets before publishing updates.*
