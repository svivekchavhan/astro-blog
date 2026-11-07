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
    id: "mpsc-group-c-recruitment-2026-16717-posts",
    title:
      "🔥 MPSC गट-क सेवा संयुक्त परीक्षा २०२६: १६,७१७ जागांसाठी मेगा भरती जाहीर (नवीन अर्ज तारखा व परीक्षा २४ जानेवारी २०२७)",
    link: "/mpsc-group-c-recruitment-2026-16717-posts",
    date: "November 07, 2026",
    expiry: "2027-01-24T00:00:00.000Z",
    show: true,
    badge: "16,717 पदे",
    badgeType: "new",
    category: "recruitment",
  },
  {
    id: "je-civil-result-2025",
    title:
      "🏆 BMC कनिष्ठ अभियंता (स्थापत्य) निकाल २०२५: मुंबई मनपा JE Civil गुणवत्ता यादी व गुण जाहीर; थेट रोल नंबरनुसार तपासा",
    link: "/bmc-je-civil-result-2025",
    date: "October 24, 2026",
    expiry: "2026-11-30T00:00:00.000Z",
    show: true,
    badge: "Result",
    badgeType: "result",
    category: "result",
  },
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
