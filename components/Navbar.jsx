import Link from 'next/link';
import { Github, ShieldCheck, BookOpen } from 'lucide-react';

const GITHUB_URL = 'https://github.com/kwantumzero/kwantumzero';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-base/70 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md text-primary transition-opacity hover:opacity-80"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent-green/40 bg-surface text-accent-green">
            <ShieldCheck className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Kwantum<span className="text-accent-green">Zero</span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#docs"
            className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-secondary transition-colors hover:text-primary sm:flex"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Docs
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-accent-green/50 hover:text-accent-green"
            aria-label="View KwantumZero on GitHub (opens in a new tab)"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
