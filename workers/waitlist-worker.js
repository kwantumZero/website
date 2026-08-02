// Cloudflare Worker to persist waitlist emails into a D1 database.
// Bind your D1 database to this Worker as `DB` in the Cloudflare dashboard or wrangler.toml.

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request, globalThis))
})

async function handleRequest(request, env) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } })
  }

  try {
    const body = await request.json()
    const email = (body.email || '').toString().trim().toLowerCase()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
    }

    // Ensure the waitlist table exists (idempotent). For production, run migrations separately.
    await DB.prepare(`CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      created_at TEXT
    )`).run()

    // Check deduplication
    const select = await DB.prepare('SELECT id FROM waitlist WHERE email = ?').bind(email).all()
    if (select.results && select.results.length > 0) {
      return new Response(JSON.stringify({ ok: true, email, message: 'Already registered' }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    }

    // Insert the email
    await DB.prepare('INSERT INTO waitlist (email, created_at) VALUES (?, ?)').bind(email, new Date().toISOString()).run()

    return new Response(JSON.stringify({ ok: true, email }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error', detail: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
