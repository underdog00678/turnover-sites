import Link from "next/link";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur"
      aria-label="Primary"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-ink"
        >
          Turnover Sites
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-5 text-sm text-muted md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/start"
            className="rounded-full border border-accent bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          >
            Get a Website Check
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 border-t border-border/70 px-6 py-2 text-xs text-zinc-500 md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
