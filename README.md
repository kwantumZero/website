# KwantumZero

Post-Quantum Zero Trust Auditing for Kubernetes. KwantumZero is an open-source Go Kubernetes
Operator that audits Ingress Controllers, Gateway API resources, Service Meshes (Istio, Linkerd,
Cilium), TLS certificates, cipher suites, and key exchange mechanisms to protect clusters against
Harvest Now, Decrypt Later attacks and verify NIST-approved post-quantum cryptography such as
ML-KEM (Kyber).

This repository contains the marketing site, built with Next.js 14 (App Router), React 18,
Tailwind CSS, and Lucide React, deployable as a static export behind Caddy. The site uses LinkedIn for contact
and does not collect or store user data.

## Tech stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Lucide React (icons)
- Static Next.js export
- Caddy web server

No other UI libraries or animation frameworks are used.

## Local development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`. It uses LinkedIn for contact and has no
waitlist, API, database, or email collection.

## Deploying to an Oracle VM

Build the static site:

```bash
npm run build
```

The generated files are in `out/`. Caddy can serve them directly:

```caddy
yourdomain.com {
    root * /path/to/kwantumZero-website/out
    file_server
    try_files {path} {path}/ /index.html
}
```

Caddy handles HTTPS automatically when your domain points to the VM and ports 80 and 443 are open.

## Project structure

```
app/
  layout.jsx               Root layout, metadata, fonts
  page.jsx                 Landing page composition
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
