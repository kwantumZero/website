import React from 'react'

export default function Nav() {
  return (
    <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="font-mono text-xl text-slate-100">KwantumZero</span>
        <span className="text-sm text-slate-500">Post-Quantum K8s Auditor</span>
      </div>
      <div>
        <a href="#" aria-label="GitHub" className="inline-flex items-center rounded-md px-3 py-2 text-slate-300 hover:text-white">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.948 0-1.092.39-1.986 1.03-2.685-.103-.254-.447-1.273.098-2.653 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.91-1.296 2.75-1.026 2.75-1.026.546 1.38.202 2.399.1 2.653.64.699 1.03 1.593 1.03 2.685 0 3.846-2.337 4.692-4.565 4.94.36.31.682.923.682 1.861 0 1.343-.012 2.427-.012 2.758 0 .268.18.58.688.481C19.138 20.197 22 16.444 22 12.02 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}
