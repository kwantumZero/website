"use client"

import React, { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (e) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    try {
      const endpoint = process.env.NEXT_PUBLIC_WAITLIST_URL || '/api/waitlist'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (res.ok) {
        setSuccess("Access secured. You're on the waitlist.")
        setEmail('')
        console.log('Waitlist signup:', email)
      } else {
        const body = await res.json()
        setError(body?.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-50">Post-Quantum Zero Trust Auditing for Kubernetes</h1>
          <p className="mt-4 text-slate-300 max-w-xl">Protect your cloud infrastructure from "Harvest Now, Decrypt Later" attacks. Automatically scan your clusters, detect legacy TLS, and enforce quantum-safe encryption (ML-KEM/Kyber).</p>

          <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              disabled={loading}
              className="flex-1 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyber-green disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center rounded-md bg-gradient-to-r from-cyber-green to-cyber-blue px-4 py-2 font-medium text-black disabled:opacity-60"
            >
              {loading ? (
                <svg className="animate-spin h-4 w-4 mr-2 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : null}
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>

          {success ? (
            <div className="toast" role="status">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm text-cyber-green">{success}</span>
            </div>
          ) : null}
          {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}

          <p className="mt-4 text-slate-500 text-sm">We respect your privacy — no spam. Open-source and free for operators.</p>
        </div>

        <div>
          <div className="terminal">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <pre className="whitespace-pre-wrap">$ kwantumzero audit --cluster prod-1
... initializing scanners
... inspecting ingress controllers
... verifying TLS key-exchange algorithms
STATUS: Vulnerability Detected (Legacy TLS 1.2)</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
