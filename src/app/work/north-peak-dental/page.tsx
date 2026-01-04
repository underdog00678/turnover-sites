import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "North Peak Dental",
  description:
    "Fictional case study: building trust and bookings for a local dental practice.",
};

export default function NorthPeakDentalPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        <Link
          href="/"
          className="text-sm text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
        >
          Back to Home
        </Link>
        <div className="mt-6 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Case study
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            North Peak Dental
          </h1>
          <p className="text-base text-muted sm:text-lg">
            North Peak Dental is a fictional family practice that needed a
            modern site to compete with larger clinics and convert new patient
            inquiries.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Problem</h2>
            <p className="text-sm text-muted">
              The existing site felt outdated and lacked the trust signals new
              patients expect. Visitors could not quickly find appointment
              availability or insurance details.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Approach</h2>
            <p className="text-sm text-muted">
              I focused on reassurance and clarity: warm visuals, a simple
              service breakdown, and a booking CTA that stays visible on mobile.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink">Solution</h2>
            <p className="text-sm text-muted">
              A calm, patient-first website with structured content and an
              easy-to-complete appointment request.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>Clear service cards with pricing transparency cues.</li>
              <li>Trust-building highlights for reviews, credentials, and care.</li>
              <li>Mobile-first CTA bar guiding appointment requests.</li>
              <li>Local SEO structure for location-driven searches.</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">Next steps</h2>
            <p className="mt-2 text-sm text-muted">
              If you want a site that builds trust fast, start with a website
              check.
            </p>
            <Link
              href="/start"
              className="mt-4 inline-flex rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            >
              Get a Website Check
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
