import React, { useState } from 'react'
import { Terminal } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    console.log('Waitlist signup:', email)
    setEmail('')
    alert('Thanks — you\'re on the waitlist! (console.log simulated)')
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
              className="flex-1 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyber-green"
            />
            <button className="rounded-md bg-gradient-to-r from-cyber-green to-cyber-blue px-4 py-2 font-medium text-black">Join Waitlist</button>
          </form>

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
