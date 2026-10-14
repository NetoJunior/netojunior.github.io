# zehblack.com

Personal site built with React, TypeScript, Vite and Tailwind CSS v4. Deployed to GitHub Pages by GitHub Actions.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # output in dist/
npm run preview  # serve the production build
```

## Edit the content

All text lives in `src/data/content.ts` (profile, skills, projects). Search for `TODO` to find placeholders.
Colors and fonts are tokens in `src/index.css`.

## Deploy

1. Delete the old Jekyll files from the repo root (`_config.yml`, `index.md`).
2. Repo Settings > Pages > Build and deployment > Source: **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` lints, builds and publishes.
4. Settings > Pages > Custom domain: `zehblack.com`. When publishing from Actions, no `CNAME` file is needed.

## Structure

```
src/
  data/content.ts      all site text
  components/          Header, Hero, Skills, Projects, Contact, Footer
  App.tsx              page composition
  index.css            Tailwind import + design tokens
public/                favicon, robots.txt, sitemap.xml
```
