Cloudflare Deployment Notes

Options

1) Cloudflare Pages Functions (recommended for full Next.js app on Pages)
- Deploy your Next.js site to Cloudflare Pages. Use Pages Functions for API endpoints and bind D1 to your Pages project.
- In Pages, add a D1 database and bind it with the variable name `DB`.
- Set the environment variable `NEXT_PUBLIC_WAITLIST_URL` to the Pages Function URL (e.g., `/api/waitlist`) or to an external Worker URL.

2) Cloudflare Worker (recommended if you want a small independent endpoint)
- Use the `workers/waitlist-worker.js` script in this repo as the Worker implementation.
- Bind a D1 database to the Worker with the binding name `DB`.
- Deploy with Wrangler or from the Cloudflare dashboard.

Worker binding example (wrangler.toml)

```toml
name = "kwantumzero-waitlist"
main = "workers/waitlist-worker.js"

[env.production]
workers_dev = false
route = "<your-domain.com>/api/waitlist"

[[d1_databases]]
binding = "DB"
.database_name = "kwantumzero_waitlist"
```

Notes
- The Worker script will create the `waitlist` table if it doesn't exist. For production, prefer running explicit migrations.
- Use Cloudflare's built-in Rate Limiting or a KV-backed counter for strong rate-limiting across instances. The current Next.js API provides a simple in-memory fallback for local testing.
- After deploying a Worker, set `NEXT_PUBLIC_WAITLIST_URL` to the Worker URL so the frontend posts directly to it.

Security
- Protect your endpoint from abuse with Cloudflare Rate Limiting and CAPTCHA if needed.
- For GDPR/CCPA compliance, record consent and unsubscribe flows if you persist personal data.

If you want, I can:
- Add a `wrangler.toml` and Worker build config to this repo.
- Update the frontend to call the Worker URL by default when `NEXT_PUBLIC_WAITLIST_URL` is set.
- Add a migration script for creating the D1 table.
