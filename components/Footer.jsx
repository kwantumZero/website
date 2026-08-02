import { Github, ShieldCheck, ScrollText } from 'lucide-react';

const GITHUB_URL = 'https://github.com/kwantumzero/kwantumzero';
const LICENSE_URL = 'https://www.apache.org/licenses/LICENSE-2.0';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-accent-green/40 bg-surface text-accent-green">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-base font-semibold text-primary">
                Kwantum<span className="text-accent-green">Zero</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-secondary">
              Open-source cloud security for the post-quantum era.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
            >
              <ScrollText className="h-4 w-4" aria-hidden="true" />
              Apache 2.0 License
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-secondary">
          &copy; {year} KwantumZero. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
