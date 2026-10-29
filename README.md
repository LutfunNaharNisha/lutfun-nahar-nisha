# Lutfun Nahar Nisha — Developer Portfolio

A premium, dark-themed personal portfolio built with **Next.js 16 (App Router)**,
**TypeScript (strict)**, **Tailwind CSS v4**, **Lucide icons**, and **Sonner** toasts.
Deployed on **Vercel**.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

## Personalize (everything lives in 2 files)

**`src/config/site.ts`** — name, designation, intro, location, availability,
email, phone, WhatsApp, social URLs, resume flags, SEO title/description,
production URL.

**`src/data/portfolio.ts`** — skills, education, experience, and projects
(including live/repo URLs and case-study text). Leave a field empty/omitted and
the UI hides it — nothing fake is ever rendered.

## Replace assets

| Asset | Path | Notes |
|---|---|---|
| Profile photo | `public/images/profile/profile.jpg` | 4:5 portrait works best; keep the same filename or update `Hero.tsx` |
| Project screenshots | `public/images/projects/<slug>.png` | 16:9 (1200×675). Current files are clearly-labeled placeholders — replace with real screenshots, keep filenames |
| Resume | `public/resume.pdf` | See below |

### Resume behavior

- `resumeAvailable: false` (current) → the hero button shows a polite
  "Resume coming soon" toast. No fake download is ever claimed.
- To publish: drop the real PDF at `public/resume.pdf`, then set
  `resumeAvailable: true` in `src/config/site.ts`. The button then downloads it
  as `Lutfun-Nahar-Nisha-Resume.pdf`.

## Add / edit a project

1. Add an entry to `projects` in `src/data/portfolio.ts` with a unique `slug`.
2. Drop a screenshot at `public/images/projects/<slug>.png` and set `image`.
3. The card on the homepage and the page at `/projects/<slug>` render from the
   same entry automatically. Unknown slugs show the custom 404.

## Project structure

```text
public/
  images/profile/profile.jpg
  images/projects/*.png
src/
  app/
    layout.tsx  page.tsx  globals.css
    not-found.tsx  error.tsx  global-error.tsx
    sitemap.ts  robots.ts
    projects/[slug]/page.tsx
  components/
    layout/ (Navbar, Footer+SocialIcons)
    sections/ (Hero, About, Skills, Qualifications, Contact)
    projects/ (ProjectCard + Projects grid)
    ui/ (Button, Primitives)
  config/site.ts
  data/portfolio.ts
  lib/utils.ts
  types/index.ts
```

## Deploy to Vercel

1. Push this folder to GitHub (e.g. repo `lutfun-nahar-nisha`).
2. On [vercel.com/new](https://vercel.com/new), **Add New → Project → Import** the repo.
3. Framework preset: **Next.js**. Build command `npm run build`, output `.next` (defaults).
4. No environment variables are required.
5. Deploy, then set `productionUrl` in `src/config/site.ts` to the live URL and redeploy (fixes canonical/OG URLs).

## Still needed from Nisha

- Real resume PDF (`public/resume.pdf` + flip `resumeAvailable`)
- Academic education entries (currently a placeholder)
- Phone / WhatsApp numbers (optional — currently hidden)
- X / Facebook / personal website URLs (optional — currently hidden)
- Real project screenshots (placeholders in place now)
- Production domain (set `productionUrl` after deploying)
