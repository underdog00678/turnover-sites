import Link from "next/link";
import { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-ink">
            {caseStudy.name}
          </h3>
          <span className="rounded-full border border-border bg-surfaceAlt px-2.5 py-1 text-xs text-zinc-500">
            {caseStudy.type}
          </span>
        </div>
        <p className="text-sm text-muted">{caseStudy.summary}</p>
        <div className="space-y-2 text-xs text-zinc-500">
          <p>
            <span className="font-semibold text-ink">Focus:</span>{" "}
            {caseStudy.focus}
          </p>
          <p>
            <span className="font-semibold text-ink">Outcome:</span>{" "}
            {caseStudy.outcome}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-zinc-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 text-sm font-medium text-ink transition group-hover:text-accent">
        Read case study {"->"}
      </div>
    </Link>
  );
}
