export interface ImportantUpdate {
  id: string;
  title: string;
  link: string;
  date: string;
  expiry?: string;
  show: boolean; // Must be true to show in Important Updates sidebar
  badge?: string;
  badgeType: "cutoff" | "admit" | "answer-key" | "result" | string;
  category?: "cutoff" | "admit-card" | "answer-key" | "result" | string;
}

export const importantUpdates: ImportantUpdate[] = [
  {
    id: "mpsc-bailiff-cum-clerk-cutoff-2026",
    title:
      "🎯 MPSC बेलिफ तथा लिपिक गट-क परीक्षा २०२६: अधिकृत शिफारस कट-ऑफ (Cutoff Marks) जाहीर (जाहिरात ०१५/२०२६)",
    link: "/mpsc-bailiff-cum-clerk-cutoff-2026",
    date: "October 19, 2026",
    expiry: "2026-11-25T00:00:00.000Z",
    show: true,
    badge: "Cutoff",
    badgeType: "cutoff",
    category: "cutoff",
  },
];
