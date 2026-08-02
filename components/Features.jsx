import { Radar, KeyRound, Boxes } from 'lucide-react';

const FEATURES = [
  {
    icon: Radar,
    accent: 'green',
    title: 'Automated Cluster Auditing',
    description:
      'KwantumZero continuously scans your Kubernetes clusters, Ingress Controllers, Service Meshes, Gateway API resources, TLS certificates, and cryptographic configurations to identify security weaknesses within seconds.'
  },
  {
    icon: KeyRound,
    accent: 'blue',
    title: 'Post-Quantum Enforcement',
    description:
      'Verify adoption of NIST-approved post-quantum cryptographic algorithms, including ML-KEM (Kyber), hybrid TLS key exchange, and TLS 1.3, across every workload and load balancer in your environment.'
  },
  {
    icon: Boxes,
    accent: 'green',
    title: 'Kubernetes Native',
    description:
      'Built entirely in Go and deployed as a lightweight, read-only Kubernetes Operator using standard CRDs. No sidecars, no application changes, no disruption to existing workloads.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            How KwantumZero works
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">
            One Operator. Full visibility into your cluster&apos;s readiness for the post-quantum era.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const accentClass = feature.accent === 'blue' ? 'text-accent-blue border-accent-blue/30' : 'text-accent-green border-accent-green/30';

            return (
              <div
                key={feature.title}
                className="glass-card flex flex-col rounded-xl p-7 transition-colors hover:border-border/0"
              >
                <span className={`flex h-11 w-11 items-center justify-center rounded-lg border bg-base/60 ${accentClass}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
