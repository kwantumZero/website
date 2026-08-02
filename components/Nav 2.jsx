import React from 'react'
import { GitHub } from 'lucide-react'

export default function Nav() {
  return (
    <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="font-mono text-xl text-slate-100">KwantumZero</span>
        <span className="text-sm text-slate-500">Post-Quantum K8s Auditor</span>
      </div>
      <div>
        <a href="#" aria-label="GitHub" className="inline-flex items-center rounded-md px-3 py-2 text-slate-300 hover:text-white">
          <GitHub className="h-5 w-5" />
        </a>
      </div>
    </nav>
  )
}
