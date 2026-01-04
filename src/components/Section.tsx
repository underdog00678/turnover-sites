import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export default function Section({
  id,
  kicker,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-4">
          {kicker ? (
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              {kicker}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-2xl text-base text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
