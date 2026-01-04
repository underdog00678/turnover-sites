export type CaseStudy = {
  slug: "dropscout" | "north-peak-dental";
  name: string;
  type: "Real" | "Fictional";
  summary: string;
  focus: string;
  outcome: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dropscout",
    name: "DropScout",
    type: "Real",
    summary:
      "A discovery platform helping retailers spot emerging products without expensive research cycles.",
    focus: "Clarify positioning and shorten the path to a qualified demo request.",
    outcome: "Reduced the decision flow from four screens to two and made value props scannable.",
    tags: ["Messaging clarity", "Lead capture", "Performance tuning"],
  },
  {
    slug: "north-peak-dental",
    name: "North Peak Dental",
    type: "Fictional",
    summary:
      "A local dental practice that needed a modern site to earn trust and drive new patient bookings.",
    focus: "Build confidence quickly while guiding patients to a simple booking request.",
    outcome: "Stronger local SEO signals and a clearer appointment flow for busy families.",
    tags: ["Trust design", "Local SEO", "Conversion flow"],
  },
];
