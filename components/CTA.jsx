import { Atom } from 'lucide-react';

const GITHUB_URL = 'https://github.com/kwantumzero/kwantumzero';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-2xl px-6 py-14 text-center shadow-glow sm:px-14">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-green/20 blur-[100px]"
            aria-hidden="true"
          />
          <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent-green/40 bg-base/60 text-accent-green">
            <Atom className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 id="cta-heading" className="relative mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Make your cluster quantum-ready, one finding at a time.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-secondary">
            Follow development, share feedback, or talk about making your cluster quantum-ready.
          </p>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="relative mx-auto mt-8 inline-flex items-center gap-2 rounded-lg bg-accent-green px-5 py-3 text-sm font-semibold text-base transition-colors hover:bg-accent-green/90">
            Explore the project on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
