# Sahej Kaur — Portfolio

A single-page portfolio for a digital marketer, graphic designer, and content
creator. Mobile-first, dark pastel purple, built to drive contact-form
enquiries from a business-card QR code.

**Stack:** React 18 · Vite · Tailwind CSS · Framer Motion · Lenis smooth scroll

## Run it

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Three things to fill in

1. **Google Form link** — open `src/lib/constants.js` and replace
   `https://forms.gle/YOUR_FORM_LINK` with your real form URL. Every CTA on
   the site (hero, nav, sticky mobile button, contact section) uses this one
   constant.

2. **Your photo** — save it as `public/assets/sahej.jpg` (4:5 portrait crop,
   ~800×1000px, under 300 KB).

3. **Work samples** — drop images into `public/assets/work/` as
   `work-1.jpg` … `work-8.jpg`, then edit the `projects` array at the top of
   `src/components/Work.jsx` to set real titles and categories. Cards show a
   styled placeholder until an image exists, so the site never looks broken.

Also update the social profile links in `src/components/Footer.jsx`, and if
you deploy to a domain other than `sahejkaur.com`, search-and-replace that
domain in `index.html`, `public/robots.txt`, and `public/sitemap.xml`.

## Project structure

```
index.html                  ← SEO: meta, OG/Twitter cards, JSON-LD, fonts
public/
  assets/sahej.jpg          ← your photo (you add this)
  assets/work/              ← work sample images (you add these)
  favicon.svg  robots.txt  sitemap.xml
src/
  lib/constants.js          ← Google Form URL + contact details
  lib/useLenis.js           ← smooth scroll (auto-disabled for reduced motion)
  lib/motion.js             ← shared animation variants
  components/
    Nav / Hero / Ticker / Work / Services / About / Contact / Footer
    StickyCTA               ← mobile floating "Let's work together" button
    MagneticButton          ← primary CTA with magnetic hover (desktop only)
tailwind.config.js          ← the purple design tokens (plum/wisteria/lilac/mauve)
```

## Design system

- **Backgrounds:** `plum-800 → plum-950` (#3B2E4D → #2E2440), matte with film grain
- **Accents:** wisteria `#B79FD4`, lilac `#C9B6E4`, rose-mauve glow `#D9A8C4`
- **Text:** parchment `#F0EAF6` / dim `#C9C0D8` — never pure white
- **Type:** Fraunces (display, italic = emphasis voice) + Instrument Sans (body)
- **Motion:** staggered mask reveals, slow craft ticker, magnetic CTA — all
  respect `prefers-reduced-motion`
