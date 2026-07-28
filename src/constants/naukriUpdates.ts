export interface NaukriUpdate {
  titleEn: string;
  titleHi: string;
  date: string;
  badge: string;
  badgeType: "new" | "extended" | "important" | string;
  link: string;
  description: string;
}

export const naukriUpdates: NaukriUpdate[] = [
  {
    titleEn: "MPSC Group C Bharti 2026: Corrigendum Released for 3,088 Vacancies & Deadline Extended to 31 July",
    titleHi: "MPSC गट-क संयुक्त परीक्षा २०२६: ३,०८८ जागांसाठी शुद्धिपत्रक प्रसिद्ध, ऑनलाईन अर्ज मुदतवाढ",
    date: "July 22, 2026",
    badge: "New",
    badgeType: "new",
    link: "/mpsc/mpsc-group-c-bharti-2026",
    description: "MPSC has released a Corrigendum notice updating total vacancies to 3,088 across 9 departments (including 1,539 Talathi & 1,213 Clerk-Typist posts). Last date to apply extended to 31 July 2026."
  },
  {
    titleEn: "MH SET 2026 Exam Rescheduled: Date Postponed to 27 September",
    titleHi: "महाराष्ट्र सेट परीक्षा (MH-SET) २०२६ पुढे ढकलली, नवीन तारीख जाहीर",
    date: "July 20, 2026",
    badge: "Rescheduled",
    badgeType: "important",
    link: "/admit-card/maharashtra-set-exam-date-postponed",
    description: "The Savitribai Phule Pune University has postponed the MH-SET 2026 exam to September 27, 2026 due to a clash with the CTET exam. Read official notice."
  },
  {
    titleEn: "Maharashtra Arogya Bharti 2026: Recruitment Announced for 7,195 Posts",
    titleHi: "महाराष्ट्र आरोग्य विभाग भरती २०२६: ७,१९५ रिक्त जागांची मेगा भरती जाहीर",
    date: "July 12, 2026",
    badge: "New",
    badgeType: "new",
    link: "/arogya-bharti-2026",
    description: "Maharashtra Public Health Department announces 7,195 vacancies for Group C (5,307 posts) and Group D (1,888 posts). Testing is recommended via MPSC or TCS."
  },
  {
    titleEn: "MH SET 2026 Application Date Extended & Exam Postponed",
    titleHi: "महाराष्ट्र सेट परीक्षा (MH-SET) २०२६: अर्ज मुदतवाढ आणि सुधारित परीक्षा तारीख जाहीर",
    date: "July 12, 2026",
    badge: "Latest",
    badgeType: "important",
    link: "/maharashtra-set-exam-2026",
    description: "The online registration with a late fee has been extended from July 13 to July 23, 2026. The exam is tentatively rescheduled to September 6, 2026."
  },
  {
    titleEn: "MPSC WRD Mechanical Recruitment Rules 2026 Notification Released",
    titleHi: "एमपीएससी जलसंपदा विभाग (WRD) मेकॅनिकल भरती नियम २०२६ प्रसिद्ध",
    date: "July 10, 2026",
    badge: "New",
    badgeType: "new",
    link: "/mpsc-wrd-recruitment-rules-2026-mechanical",
    description: "Check the latest recruitment rules, age criteria, and qualification standards for WRD Mechanical Engineering positions."
  }
];
