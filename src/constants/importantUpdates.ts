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
    id: "ugc-net-december-2026",
    title:
      "🎓 UGC NET डिसेंबर २०२६: JRF, सहाय्यक प्राध्यापक व थेट PhD प्रवेशासाठी ऑनलाईन अर्ज सुरू (१४-१९ Dec परीक्षा)",
    link: "/ugc-net-december-2026",
    date: "October 28, 2026",
    expiry: "2026-11-20T00:00:00.000Z",
    show: true,
    badge: "UGC NET",
    badgeType: "exam",
    category: "exam",
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
  {
    id: "rrb-station-master-recruitment-2026",
    title:
      "🔔 RRB स्टेशन मास्टर भरती २०२६: १,२१५ पदांसाठी ऑनलाईन अर्ज सुरू; थेट लिंक व संपूर्ण माहिती",
    link: "/rrb-station-master-recruitment-2026",
    date: "October 27, 2026",
    expiry: "2026-11-26T00:00:00.000Z",
    show: true,
    badge: "New",
    badgeType: "new",
    category: "recruitment",
  },
];
