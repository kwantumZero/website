# KwantumZero

Post-Quantum Zero Trust Auditing for Kubernetes. KwantumZero is an open-source Go Kubernetes
Operator that audits Ingress Controllers, Gateway API resources, Service Meshes (Istio, Linkerd,
Cilium), TLS certificates, cipher suites, and key exchange mechanisms to protect clusters against
Harvest Now, Decrypt Later attacks and verify NIST-approved post-quantum cryptography such as
ML-KEM (Kyber).

This repository contains the marketing/waitlist site, built with Next.js 14 (App Router), React 18,
Tailwind CSS, and Lucide React, deployable to Cloudflare Pages with a Cloudflare D1-backed waitlist.

## Tech stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Lucide React (icons)
- Cloudflare Pages + Cloudflare D1
- `@cloudflare/next-on-pages` (Cloudflare adapter)

No other UI libraries or animation frameworks are used.

## Local development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`. Note that `next dev` does not provide
Cloudflare bindings, so the `/api/waitlist` route will respond with a 503 ("service not configured")
until you run it through Wrangler (see below).

## Setting up Cloudflare D1

1. Create the database:

   ```bash
   npx wrangler d1 create kwantumzero-db
   ```

2. Copy the `database_id` returned by the command into `wrangler.toml` (replace
   `REPLACE_WITH_YOUR_D1_DATABASE_ID`).

3. Apply the schema:

   ```bash
   npm run db:migrate:local   # local D1 (used by `wrangler pages dev`)
   npm run db:migrate:remote  # production D1
   ```

The schema lives in `schema.sql` and creates a `waitlist` table with `id`, `email` (unique), and
`created_at` columns.

## Running the full stack locally (with D1)

```bash
npm run preview
```

This builds the app with `@cloudflare/next-on-pages` and serves it with `wrangler pages dev`,
giving the API route access to the local D1 binding defined in `wrangler.toml`.

## Deploying to Cloudflare Pages

### Option A — GitHub integration (recommended)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard, create a new Pages project and connect the repository.
3. Set the build command to `npx @cloudflare/next-on-pages` and the output directory to
   `.vercel/output/static`.
4. Add a D1 binding named `DB` pointing to the `kwantumzero-db` database in the Pages project
   settings.
5. Deploy.

### Option B — CLI

```bash
npm run deploy
```

## Project structure

```
app/
  api/waitlist/route.js   Waitlist API (edge runtime, D1)
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
  WaitlistForm.jsx
  Features.jsx
  CTA.jsx
  Footer.jsx
  BackgroundGrid.jsx
lib/
  db.js                     D1 access helpers
  validate.js                Email validation helpers
schema.sql                   D1 schema
wrangler.toml                Cloudflare Pages + D1 configuration
```

## License

Apache 2.0
