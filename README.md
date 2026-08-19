# KwantumZero

Post-Quantum Zero Trust Auditing for Kubernetes. KwantumZero is an open-source Go Kubernetes
Operator that audits Ingress Controllers, Gateway API resources, Service Meshes (Istio, Linkerd,
Cilium), TLS certificates, cipher suites, and key exchange mechanisms to protect clusters against
Harvest Now, Decrypt Later attacks and verify NIST-approved post-quantum cryptography such as
ML-KEM (Kyber).

This repository contains the marketing site, built with Next.js 14 (App Router), React 18,
Tailwind CSS, and Lucide React, deployable to Cloudflare Pages. The site uses LinkedIn for contact
and does not collect or store user data.

## Tech stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Lucide React (icons)
- Cloudflare Pages
- `@cloudflare/next-on-pages` (Cloudflare adapter)

No other UI libraries or animation frameworks are used.

## Local development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`. It uses LinkedIn for contact and has no
waitlist, API, database, or email collection.

## Deploying to Cloudflare Pages

### Option A — GitHub integration (recommended)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, create a new Pages project and connect the repository.
3. Set the build command to `npx @cloudflare/next-on-pages` and the output directory to
   `.vercel/output/static`.
4. Deploy.

### Option B — CLI

```bash
npm run deploy
```

## Project structure

```
app/
  layout.jsx               Root layout, metadata, fonts
  page.jsx                 Landing page composition
  opengraph-image.jsx      Dynamic OG image
  twitter-image.jsx        Dynamic Twitter card image
  sitemap.js                Sitemap route
  robots.js                 Robots route
components/
  Navbar.jsx
  Hero.jsx
  Terminal.jsx
  Features.jsx
  CTA.jsx
  Footer.jsx
  BackgroundGrid.jsx
```

## License

Apache 2.0
# website
