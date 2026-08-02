import React from 'react'
import { ShieldCheck, Lock, Terminal } from 'lucide-react'

function Card({ Icon, title, children }) {
  return (
    <div className="rounded-xl border border-slate-800 p-6 bg-slate-900">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-slate-800 text-cyber-green">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      </div>
      <p className="mt-3 text-slate-400">{children}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-semibold text-slate-100">How it Works</h2>
      <p className="mt-2 text-slate-400 max-w-2xl">KwantumZero inspects clusters and certs to ensure your TLS stacks are quantum-safe.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card Icon={ShieldCheck} title="Automated Cluster Auditing">Scans Ingress controllers, Service Meshes, and Certificates to detect cryptographic vulnerabilities in seconds.</Card>
        <Card Icon={Lock} title="Post-Quantum Enforcement">Verifies the implementation of NIST-approved algorithms like ML-KEM (Kyber) for TLS 1.3 key exchanges.</Card>
        <Card Icon={Terminal} title="Kubernetes Native">Built entirely in Go. Deploys as a lightweight, read-only operator using standard Custom Resource Definitions (CRDs).</Card>
      </div>
    </section>
  )
}
