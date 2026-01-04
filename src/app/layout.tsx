import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Turnover Sites",
    template: "%s | Turnover Sites",
  },
  description:
    "Conversion-focused freelance websites for startups and growing teams that need clarity, speed, and measurable outcomes.",
  metadataBase: new URL("https://turnover-sites.com"),
  openGraph: {
    title: "Turnover Sites",
    description:
      "Minimal, modern sites that turn early interest into confident customer action.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} font-sans antialiased text-ink`}>
        <div className="min-h-screen">
          <Nav />
          {children}
          <footer className="border-t border-border/80 bg-surfaceAlt py-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:px-10">
              <p>
                Copyright {new Date().getFullYear()} Turnover Sites. All rights
                reserved.
              </p>
              <a
                className="text-muted transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                href="mailto:hello@turnoversites.com"
              >
                hello@turnoversites.com
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
