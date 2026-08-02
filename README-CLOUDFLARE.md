Cloudflare Deployment Notes

Options


Cloudflare Deployment (OpenNext)

This repo now targets Cloudflare's current OpenNext deployment flow. Key points:

1) OpenNext / Cloudflare Pages
- Use `@cloudflare/open-next` to deploy the Next.js App Router app to Cloudflare Pages with support for D1, Functions, and Assets.
- Bind a D1 database to your Pages project and name the binding `DB`.

2) Worker (optional)
- Alternatively, use the `workers/waitlist-worker.js` standalone Worker and bind D1 as `DB`.

Configuration
- A sample `wrangler.jsonc` has been added with a `DB` d1 binding example. Edit it with your account and route details.

Deploying
- Locally, use the included npm script (requires Node and Wrangler/OpenNext):

```bash
npm ci
npm run build
npm run deploy:open-next
```

This runs `@cloudflare/open-next` and deploys the app to Pages with D1 bindings.

Notes
- The worker script will create the `waitlist` table if it doesn't exist. For production, prefer running explicit migrations.
- Use Cloudflare's Rate Limiting or a KV-backed counter for strong global rate-limiting.
- Remove the `.npmrc` that forced legacy peer deps — we've upgraded dependencies instead.

If you'd like, I can add a `wrangler.toml` variant, automatic migrations, or CI deployment steps targeting Cloudflare Pages. 

Security
- Protect your endpoint from abuse with Cloudflare Rate Limiting and CAPTCHA if needed.
- For GDPR/CCPA compliance, record consent and unsubscribe flows if you persist personal data.

If you want, I can:
- Add a `wrangler.toml` and Worker build config to this repo.
- Update the frontend to call the Worker URL by default when `NEXT_PUBLIC_WAITLIST_URL` is set.
- Add a migration script for creating the D1 table.
