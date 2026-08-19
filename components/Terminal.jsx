'use client';

import { useEffect, useRef, useState } from 'react';
import { CircleAlert, CircleCheck, TerminalSquare } from 'lucide-react';

const LINES = [
  { type: 'command', text: 'kwantumzero audit --cluster production' },
  { type: 'success', text: 'Connecting to Kubernetes...' },
  { type: 'success', text: 'Discovering Cluster Resources...' },
  { type: 'success', text: 'Inspecting Ingress Controllers...' },
  { type: 'success', text: 'Detecting Gateway API...' },
  { type: 'success', text: 'Detecting Istio Service Mesh...' },
  { type: 'success', text: 'Auditing TLS Certificates...' },
  { type: 'success', text: 'Analyzing Cipher Suites...' },
  { type: 'success', text: 'Verifying Key Exchange...' },
  { type: 'success', text: 'Checking mTLS Configuration...' },
  { type: 'warning', text: 'Legacy TLS 1.2 detected' },
  { type: 'warning', text: 'RSA Key Exchange detected' },
  { type: 'warning', text: 'Harvest Now, Decrypt Later Risk Identified' },
  { type: 'heading', text: 'Recommendations' },
  { type: 'success', text: 'Upgrade to TLS 1.3' },
  { type: 'success', text: 'Enable Hybrid TLS' },
  { type: 'success', text: 'Adopt ML-KEM (Kyber)' },
  { type: 'success', text: 'Quantum Safe Configuration Verified' }
];

const LINE_DELAY_MS = 420;
const RESTART_DELAY_MS = 3200;

export default function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    function scheduleNext(count) {
      if (count > LINES.length) {
        timeoutId = setTimeout(() => setVisibleCount(0), RESTART_DELAY_MS);
        return;
      }
      timeoutId = setTimeout(() => setVisibleCount(count), count === 0 ? 500 : LINE_DELAY_MS);
    }

    scheduleNext(visibleCount + 1);

    return () => clearTimeout(timeoutId);
  }, [visibleCount]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleCount]);

  const rendered = LINES.slice(0, visibleCount);
  const isRunning = visibleCount < LINES.length;

  return (
    <div className="glass-card w-full rounded-xl shadow-glow" role="group" aria-label="Simulated KwantumZero audit terminal output">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-accent-green/70" aria-hidden="true" />
        <div className="ml-2 flex items-center gap-1.5 text-xs text-secondary">
          <TerminalSquare className="h-3.5 w-3.5" aria-hidden="true" />
          kwantumzero — audit preview
        </div>
      </div>
      <div
        ref={containerRef}
        className="h-[360px] overflow-y-auto px-5 py-4 font-mono text-[13px] leading-6 sm:text-sm"
        aria-live="polite"
      >
        <div className="mb-3 border-b border-border/70 pb-3 text-xs text-secondary">
          Planned audit workflow · product preview
        </div>
        {rendered.map((line, index) => (
          <TerminalLine key={index} line={line} />
        ))}
        {isRunning && <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent-green" aria-hidden="true" />}
      </div>
    </div>
  );
}

function TerminalLine({ line }) {
  if (line.type === 'command') {
    return (
      <div className="mb-1 flex gap-2 text-primary">
        <span className="text-accent-green">$</span>
        <span>{line.text}</span>
      </div>
    );
  }

  if (line.type === 'heading') {
    return <div className="mb-1 mt-3 font-semibold text-primary">{line.text}</div>;
  }

  if (line.type === 'warning') {
    return (
      <div className="mb-1 flex items-center gap-2 text-yellow-400">
        <CircleAlert className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
        <span>{line.text}</span>
      </div>
    );
  }

  return (
    <div className="mb-1 flex items-center gap-2 text-secondary">
      <CircleCheck className="h-3.5 w-3.5 flex-shrink-0 text-accent-green" aria-hidden="true" />
      <span>{line.text}</span>
    </div>
  );
}
