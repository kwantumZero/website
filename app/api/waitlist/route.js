import { NextResponse } from 'next/server'

// NOTE: This file uses in-memory maps for rate-limiting and deduplication
// for demo/local purposes. In production you should replace these with a
// durable store (Redis, Cloudflare D1, Cloudflare Workers KV, etc.).

const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 5 // max requests per IP per window

// In-memory stores (ephemeral)
const ipCounts = new Map()
const registeredEmails = new Set()

function getIp(req) {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

export async function POST(req) {
  try {
    const ip = getIp(req)

    // Rate limiting
    const now = Date.now()
    const entry = ipCounts.get(ip) || { count: 0, firstAt: now }
    if (now - entry.firstAt > RATE_LIMIT_WINDOW_MS) {
      entry.count = 0
      entry.firstAt = now
    }
    entry.count += 1
    ipCounts.set(ip, entry)

    if (entry.count > RATE_LIMIT_MAX) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429, headers: { 'Retry-After': '60' } })
    }

    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Simulate network / DB delay for demo purposes
    await new Promise((r) => setTimeout(r, 1000))

    // Deduplication: check if email is already registered
    if (registeredEmails.has(email.toLowerCase())) {
      return NextResponse.json({ ok: true, email, message: 'Already registered' }, { status: 200 })
    }

    // TODO: Replace the in-memory set with a persistent DB insertion.
    // Example Cloudflare D1 integration would go here when deployed on Cloudflare.
    registeredEmails.add(email.toLowerCase())

    return NextResponse.json({ ok: true, email }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

