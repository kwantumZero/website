import { ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import BackgroundGrid from './BackgroundGrid';
import Terminal from './Terminal';

const LINKEDIN_URL = 'https://www.linkedin.com/in/harishsudalaimani/';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24" aria-labelledby="hero-heading">
      <BackgroundGrid />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-secondary">
            <Sparkles className="h-3.5 w-3.5 text-accent-green" aria-hidden="true" />
            Open source &middot; In active development
          </div>

          <h1
            id="hero-heading"
            className="mt-6 max-w-2xl text-4xl font-bold tracking-[-0.03em] text-primary sm:text-6xl sm:leading-[1.02]"
          >
            Find the encryption risks hiding in your clusters.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-secondary sm:text-lg">
            KwantumZero is an open-source Kubernetes security auditor being built for the post-quantum era. It will help
            teams prepare for <span className="text-primary">Harvest Now, Decrypt Later</span> attacks by
            finding legacy TLS, mapping exposure across the traffic edge, and showing teams what to fix before
            encrypted data becomes readable.{' '}
            The first release is being built in Go as a Kubernetes Operator, with planned support for NIST-approved algorithms &mdash; including{' '}
            <span className="text-primary">ML-KEM (Kyber)</span>.
          </p>

          <div className="mt-8 flex items-center gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/5 px-4 py-3 text-sm text-yellow-400/90">
            <ShieldAlert className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span>Encrypted traffic captured today can be decrypted once quantum computers mature.</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-secondary">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-base transition-transform hover:-translate-y-0.5">
              Contact me on LinkedIn
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#how-it-works" className="rounded-lg px-2 py-3 font-medium transition-colors hover:text-primary">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
