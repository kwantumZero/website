'use client';

import { useId, useState } from 'react';
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm({ variant = 'default' }) {
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  async function handleSubmit(event) {
    event.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setMessage(data.message || 'You are on the waitlist.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  }

  if (isSuccess) {
    return (
      <div
        className="flex items-center gap-3 rounded-lg border border-accent-green/40 bg-accent-green/10 px-4 py-3.5 text-sm text-primary"
        role="status"
      >
        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent-green" aria-hidden="true" />
        <span>{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            value={email}
            disabled={isLoading}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={status === 'error'}
            aria-describedby={status === 'error' ? `${inputId}-error` : undefined}
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-primary placeholder:text-secondary/70 transition-colors focus:border-accent-green disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`group flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-70 ${
            variant === 'cta'
              ? 'bg-accent-green text-base hover:bg-accent-green/90'
              : 'bg-primary text-base hover:bg-primary/90'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-400" role="alert">
          {message}
        </p>
      )}
      <p className="mt-3 text-xs text-secondary">
        No spam. We will only email you about early access.
      </p>
    </form>
  );
}
