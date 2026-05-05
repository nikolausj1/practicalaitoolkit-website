# Practical AI Toolkit

Companion site for the **Practical AI** talk by Justin Nikolaus. Live at [practicalaitoolkit.com](https://practicalaitoolkit.com).

## Stack

- **Astro 5** (static output, zero JS by default)
- **Tailwind CSS** (utility classes + a small global stylesheet)
- **TypeScript** (strict)
- **Vercel** (deploy target)
- **Google Analytics** `G-618YCL4R4R`

## Local development

```bash
nvm use            # Node 20+
npm install
npm run dev        # http://localhost:4321
npm run build      # static build to ./dist
npm run preview    # serve the built site locally
```

## Project layout

```
src/
├── layouts/Base.astro            # <html>, head meta, GA, animated background
├── components/                   # reusable UI (Hero, Footer, SectionNav, ...)
├── sections/                     # one .astro per talk section
├── pages/index.astro             # composes everything into a single-page scroll
└── styles/global.css             # design tokens, base styles, components
```

`_deck-assets/` holds raw images and slide XML extracted from the source `.pptx`. It is gitignored — curated images for the site live in `public/images/`.

## Design

Aesthetic mirrors [practicalaiservices.com](https://practicalaiservices.com): navy background, brand-blue accents, single-page scroll with anchored sections, animated geometric grid + pulsing dot network behind the content.

Color tokens (CSS vars on `:root` in `src/styles/global.css`):
- `--brand-blue: #0066CC`
- `--dark-blue: #001F3F`
- `--light-blue: #E6F2FF`
- `--surface-light: #f5f7fa`

## Deploy

Pushed to GitHub → Vercel rebuilds on every push to `main`. Production URL: `practicalaitoolkit.com`.
