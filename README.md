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

```
src/
  data/content.ts      all site text
  components/          Header, Hero, Skills, Projects, Contact, Footer
  App.tsx              page composition
  index.css            Tailwind import + design tokens
public/                favicon, robots.txt, sitemap.xml
```
