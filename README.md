# Hydra Silicon Valley — React website

Institutional bilingual (French/English) website for Hydra Silicon Valley.

## Stack
- React 19 + Vite
- Responsive layout and accessible navigation
- Client-side French / English switch (no page reload)
- Existing brand assets served from `/ressources`
- Vercel-compatible static production build

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Content
- Public contact: hydrasiliconvalley@gmail.com
- Office: Awae Escalier, Yaoundé, Cameroon
- Sector descriptions are institutional positioning copy, not claims of measured impact.
- No unverified performance statistics are published.

## Deployment
Vercel detects Vite automatically. Build command: `npm run build`; output directory: `dist`. No environment variables are required.