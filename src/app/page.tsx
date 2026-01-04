import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import Section from "@/components/Section";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Minimal, conversion-focused websites for startups and small teams ready to improve customer turnover.",
};

export default function Home() {
  return (
    <main>
      <section className="pt-28 pb-20">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="space-y-6">
              <img
                src="/me.jpg"
                alt="Photo of Jeremy"
                className="mx-auto h-24 w-24 rounded-full border border-border bg-surface object-cover ring-2 ring-accent/20 ring-offset-2 ring-offset-white sm:h-28 sm:w-28 lg:hidden"
              />
              <p className="mt-2 text-center text-sm text-muted lg:hidden">
                Jeremy, freelance web designer
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Freelance front-end website creator
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Conversion-focused websites for small teams that want more
                customers.
              </h1>
              <p className="text-lg text-muted sm:text-xl">
                I design and build fast, modern front-end websites for startups
                and small-to-mid firms - built for clarity, trust, and action.
              </p>
              <p className="text-sm text-zinc-500">
                Speed, structure, and credibility - done without template vibes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/start"
                  className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                >
                  Get a Website Check
                </Link>
                <Link
                  href="/#work"
                  className="text-sm font-medium text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                >
                  See work
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-zinc-500">
                <span>Strategy</span>
                <span>Design</span>
                <span>Front-end build</span>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <img
                src="/me.jpg"
                alt="Photo of Jeremy"
                className="hidden h-24 w-24 rounded-full border border-border bg-surface object-cover ring-2 ring-accent/20 ring-offset-2 ring-offset-white lg:block lg:self-start"
              />
              <p className="mt-2 hidden text-sm text-muted lg:block lg:text-left">
                Jeremy, freelance web designer
              </p>
              <div className="mt-0 w-full rounded-3xl border border-border bg-surface p-6 shadow-sm lg:mt-3">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Conversion checkpoints
                </p>
                <ul className="mt-4 space-y-4 text-sm text-muted">
                  <li>Clear positioning and the right promise above the fold.</li>
                  <li>Frictionless CTA path with a single obvious next step.</li>
                  <li>Speed and accessibility defaults that protect trust.</li>
                </ul>
                <div className="mt-6 border-t border-border/80 pt-6 text-sm text-zinc-500">
                  Typical turnaround: 2-4 weeks, depending on scope.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="process"
        kicker="What you get"
        title="A conversion-ready foundation, not just a redesign."
        description="Everything is built to move visitors from curiosity to a clear action, with flexibility for future growth."
        className="bg-surfaceAlt"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Conversion-first messaging and layout strategy.",
            "Responsive, accessible front-end build with clean handoff.",
            "Performance tuning and Lighthouse-friendly defaults.",
            "Editable sections for future launches and campaigns.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="Why solo"
        title="Why go with a solo web designer over DIY or Squarespace?"
        description="You get strategy, clarity, and direct collaboration without a one-size-fits-all template."
        className="bg-surfaceAlt"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Strategy, not a template",
              copy: "Custom positioning and messaging build credibility fast and make your value easy to grasp.",
            },
            {
              title: "Designed for action",
              copy: "Clear CTA paths reduce friction and guide visitors toward your highest-value next step.",
            },
            {
              title: "Performance control",
              copy: "Lean builds load faster, improving engagement and reducing bounce from slow pages.",
            },
            {
              title: "Long-term flexibility",
              copy: "Scalable components make future pages and campaigns easier to launch without a rebuild.",
            },
            {
              title: "Direct collaboration",
              copy: "You work directly with the builder, so feedback loops stay tight and decisions move fast.",
            },
            {
              title: "No template vibe",
              copy: "A distinctive layout keeps your brand from blending in with everyone else using the same blocks.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            Want a quick, low-risk review before you decide?
          </p>
          <Link
            href="/start"
            className="text-sm font-semibold text-accent transition hover:text-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          >
            Get a Website Check
          </Link>
        </div>
      </Section>

      <Section
        kicker="Why this matters"
        title="Small improvements compound into real revenue."
        description="Research consistently shows that clarity and speed impact how people decide to engage."
        className="bg-surface"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "First impressions form in under a second, making above-the-fold clarity critical.",
            "Pages that load in 1-2 seconds retain significantly more conversions than 5+ second loads.",
            "Streamlined CTAs reduce decision fatigue and increase form completion.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="work"
        kicker="Case studies"
        title="Proof of process across real and fictional launches."
        description="Two recent projects that show how I approach messaging, flow, and measurable outcomes."
        className="bg-surfaceAlt"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Designer vs Squarespace"
        title="Template speed vs. tailored conversion strategy."
        description="Both can be valid choices. The key is knowing what each option optimizes for."
        className="bg-surface"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">
              Designer-built site
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Custom conversion flow aligned to your audience goals.</li>
              <li>Performance, SEO, and accessibility tuned beyond templates.</li>
              <li>Scalable components ready for new pages and experiments.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">
              Squarespace site
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Fast launch with templates and bundled hosting.</li>
              <li>Great for simple brochure sites and basic updates.</li>
              <li>Less flexibility for deeper testing and conversion changes.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="faq"
        kicker="FAQ"
        title="Common questions, clear answers."
        description="If you have a different timeline or scope, I can adapt."
        className="bg-surfaceAlt"
      >
        <div className="space-y-4">
          {[
            {
              q: "How long does a typical website take?",
              a: "Most projects run 2-4 weeks after kickoff. Smaller builds can move faster when content is ready.",
            },
            {
              q: "Do you work with existing branding?",
              a: "Yes. I can align to current brand guidelines or provide light visual refinement for consistency.",
            },
            {
              q: "What happens after launch?",
              a: "You get a clean handoff, analytics setup guidance, and an optional optimization plan for iterative improvements.",
            },
            {
              q: "Can you work with a Squarespace site?",
              a: "Absolutely. I can audit, redesign, or rebuild on a faster stack depending on your goals.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-surface p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30">
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-surface pb-20">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-surface p-8 shadow-sm sm:flex-row sm:items-center">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Ready to improve turnover?
              </p>
              <h2 className="text-2xl font-semibold text-ink">
                Get a quick, no-pressure website check.
              </h2>
              <p className="text-sm text-muted">
                I will review your current site and share three high-impact
                conversion improvements within 48 hours.
              </p>
            </div>
            <Link
              href="/start"
              className="rounded-full border border-accent bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            >
              Start the check
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
