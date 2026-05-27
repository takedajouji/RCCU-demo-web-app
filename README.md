# RCCU Digital Hub

Portfolio demo for **AmFirst-style** web developer roles: a fictional multi-property credit union site (main, mortgage, wealth) built with Next.js.

**Status:** Phase 2 complete — content-driven products, rates, news, locations, member help, partners, and property sub-pages.

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open:

- [http://localhost:3000/](http://localhost:3000/) — main RCCU site
- [http://localhost:3000/mortgage](http://localhost:3000/mortgage) — mortgage property
- [http://localhost:3000/wealth](http://localhost:3000/wealth) — wealth property

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run lint` | ESLint |

## Project structure

- `content/properties.ts` — nav, CTAs, and paths per property
- `components/layout/PropertyShell.tsx` — header, footer, alert, `data-property` theming
- `app/(main)/` — `/`
- `app/(mortgage)/mortgage/` — `/mortgage`
- `app/(wealth)/wealth/` — `/wealth`

## Roadmap

| Phase | Scope |
|-------|--------|
| 1 | Scaffold |
| 2 | Content pages, rates, news, member help (this release) |
| 3 | Forms + email |
| 4 | SEO lib, sitemap, GA4 |
| 5 | Security, improvements, maintainer docs |
| 6 | Vercel deploy + Lighthouse |
