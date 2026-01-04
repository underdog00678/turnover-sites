import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DropScout",
  description:
    "Case study for DropScout: clarifying product positioning and improving demo conversion flow.",
};

export default function DropScoutPage() {
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
            DropScout
          </h1>
          <p className="text-base text-muted sm:text-lg">
            DropScout helps retailers spot emerging products without long
            research cycles. The original site explained features, but did not
            quickly connect the product to the buyer outcome.
          </p>
        </div>

        <div className="mt-10 space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Problem</h2>
            <p className="text-sm text-muted">
              The value proposition was buried in dense copy, and demo requests
              required navigating multiple screens. Conversion rates were flat,
              especially from first-time visitors.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ink">Approach</h2>
            <p className="text-sm text-muted">
              I distilled the core promise into a headline, created a focused
              product narrative, and built a single conversion path that aligned
              with the sales team workflow.
            </p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-ink">Solution</h2>
            <p className="text-sm text-muted">
              A streamlined landing page with fast load times, scannable proof
              points, and a simplified demo form.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li>Rewritten above-the-fold message tied to retailer outcomes.</li>
              <li>Single-page story flow with product proof and short testimonials.</li>
              <li>Reduced demo request friction with fewer required fields.</li>
              <li>Improved performance with lighter assets and optimized layout.</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">Next steps</h2>
            <p className="mt-2 text-sm text-muted">
              Want a similar conversion lift for your site? Start with a quick
              website check.
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
