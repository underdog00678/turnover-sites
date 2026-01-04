import type { Metadata } from "next";
import StartForm from "@/components/StartForm";

export const metadata: Metadata = {
  title: "Website Check",
  description:
    "Request a conversion-focused website check and receive actionable insights within 48 hours.",
};

export default function StartPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Website check
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get a Website Check
          </h1>
          <p className="text-base text-muted sm:text-lg">
            Send your site and email - I will review it and reply with 3-5
            actionable improvements to increase clarity and conversions.
          </p>
        </div>
        <div className="mt-10">
          <StartForm />
        </div>
      </div>
    </main>
  );
}
