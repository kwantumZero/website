import { ShieldAlert, Sparkles } from 'lucide-react';
import BackgroundGrid from './BackgroundGrid';
import Terminal from './Terminal';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24" aria-labelledby="hero-heading">
      <BackgroundGrid />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-secondary">
            <Sparkles className="h-3.5 w-3.5 text-accent-green" aria-hidden="true" />
            Open source &middot; Go &middot; Kubernetes Operator
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            Post-Quantum Zero Trust Auditing for Kubernetes
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-secondary sm:text-lg">
            KwantumZero protects your Kubernetes infrastructure from{' '}
            <span className="text-primary">Harvest Now, Decrypt Later</span> attacks. It automatically
            discovers legacy TLS, audits Ingress Controllers, inspects Service Meshes, and verifies
            enforcement of NIST-approved post-quantum cryptography &mdash; including{' '}
            <span className="text-primary">ML-KEM (Kyber)</span>.
          </p>

          <div className="mt-8 flex items-center gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 text-sm text-yellow-400/90">
            <ShieldAlert className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span>Encrypted traffic captured today can be decrypted once quantum computers mature.</span>
          </div>

          <div className="mt-8 max-w-lg">
            <WaitlistForm />
          </div>
        </div>

        <div className="relative">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
