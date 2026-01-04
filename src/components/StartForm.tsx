"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const STORAGE_KEY = "website_check_submissions";

type FormErrors = {
  url?: string;
  email?: string;
};

function isValidUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function StartForm() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    const trimmedUrl = url.trim();
    const trimmedEmail = email.trim();

    if (!trimmedUrl || !isValidUrl(trimmedUrl)) {
      nextErrors.url = "Enter a valid URL starting with http or https.";
    }

    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    // TODO: Replace localStorage with Supabase insert once backend is ready.
    const entry = {
      url: trimmedUrl,
      email: trimmedEmail,
      createdAt: new Date().toISOString(),
    };

    const stored = localStorage.getItem(STORAGE_KEY);
    let submissions: typeof entry[] = [];

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          submissions = parsed;
        }
      } catch {
        submissions = [];
      }
    }

    submissions.unshift(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));

    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-3xl border border-border bg-surface p-8 shadow-sm"
        role="status"
        aria-live="polite"
      >
        <h2 className="text-2xl font-semibold text-ink">
          Got it - I will take a look.
        </h2>
        <p className="mt-3 text-sm text-muted">
          Next: you will get a short response with priority fixes and quick
          wins. If it makes sense, I will include an optional build
          recommendation.
        </p>
        <ul className="mt-6 space-y-2 text-sm text-muted">
          <li>Look for an email request if I need access or context.</li>
          <li>You will receive a summary and priority checklist.</li>
          <li>We can schedule a follow-up call if you want a rebuild.</li>
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface p-8 shadow-sm"
      noValidate
    >
      <div className="grid gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-ink" htmlFor="url">
            Website URL
          </label>
          <input
            id="url"
            name="url"
            type="url"
            inputMode="url"
            placeholder="https://yourwebsite.com"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            aria-invalid={Boolean(errors.url)}
            aria-describedby={errors.url ? "url-error" : undefined}
            required
          />
          {errors.url ? (
            <p id="url-error" className="text-xs text-red-600">
              {errors.url}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium text-ink"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
        <ul className="space-y-1 text-sm text-zinc-500">
          <li>
            No obligation. If we are not a fit, you will still get useful
            feedback.
          </li>
          <li>You will hear from me directly (not an automated pitch).</li>
          <li>I do not share your info. This stays private.</li>
        </ul>
        <button
          type="submit"
          className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          Send my site
        </button>
        <p className="text-xs text-zinc-500">
          (Supabase integration can be added later)
        </p>
      </div>
    </form>
  );
}
