import { Radar, KeyRound, Boxes, ArrowDown, Check } from 'lucide-react';

const FEATURES = [
  {
    icon: Radar,
    accent: 'green',
    title: 'Automated Cluster Auditing',
    description:
      'The planned Operator will inspect Kubernetes clusters, Ingress Controllers, Service Meshes, Gateway API resources, TLS certificates, and cryptographic configurations.'
  },
  {
    icon: KeyRound,
    accent: 'blue',
    title: 'Post-Quantum Enforcement',
    description:
      'The roadmap includes checks for NIST-approved post-quantum algorithms, including ML-KEM (Kyber), hybrid TLS key exchange, and TLS 1.3.'
  },
  {
    icon: Boxes,
    accent: 'green',
    title: 'Kubernetes Native',
    description:
      'The planned architecture is a lightweight, read-only Kubernetes Operator written in Go, using standard CRDs with no sidecars or application changes.'
  }
];

export default function Features() {
  return (
    <section id="how-it-works" className="relative border-t border-border/70 py-20 sm:py-28" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent-green">A focused security loop</p>
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            From cluster inventory to a clear remediation plan.
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            The first release is being designed to give platform teams a living view of where encryption is strong, outdated, or unverified.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-center gap-3 rounded-2xl border border-border bg-surface/50 p-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:p-6">
          {['Discover', 'Audit', 'Act'].map((step, index) => (
            <div key={step} className="contents">
              <div className="rounded-xl border border-border/80 bg-base/70 p-4">
                <p className="font-mono text-xs text-accent-green">0{index + 1}</p>
                <p className="mt-2 font-semibold text-primary">{step}</p>
                <p className="mt-1 text-xs leading-5 text-secondary">
                  {index === 0 ? 'Map ingress, mesh, gateway, and certificate paths.' : index === 1 ? 'Flag legacy TLS and quantum-vulnerable key exchange.' : 'Prioritize fixes with evidence your team can act on.'}
                </p>
              </div>
              {index < 2 && <ArrowDown className="mx-auto h-4 w-4 text-border sm:rotate-[-90deg]" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const accentClass = feature.accent === 'blue' ? 'text-accent-blue border-accent-blue/30' : 'text-accent-green border-accent-green/30';

            return (
              <div
                key={feature.title}
                className="glass-card flex flex-col rounded-xl p-7 transition-all hover:-translate-y-1 hover:border-accent-green/30 hover:shadow-glow"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-lg border bg-base/60 ${accentClass}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{feature.description}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary/80">
                  <Check className="h-3.5 w-3.5 text-accent-green" aria-hidden="true" /> Read-only by design
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
