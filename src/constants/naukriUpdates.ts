export interface NaukriUpdate {
  titleEn: string;
  titleHi: string;
  date: string;
  badge: string;
  badgeType: "new" | "extended" | "important" | string;
  link: string;
  description: string;
  show?: boolean; // Set to false to hide item from widgets & page, true/omitted to show
}

export const naukriUpdates: NaukriUpdate[] = [
  {
    titleEn: "Sangli DCC Bank Peon Bharti 2026: Apply Online for 79 Vacancies (12th Pass Eligible)",
    titleHi: "सांगली जिल्हा मध्यवर्ती बँक शिपाई पदभरती २०२६: ७९ जागांसाठी जाहिरात प्रसिद्ध (अंतिम तारीख २१ ऑगस्ट)",
    date: "August 12, 2026",
    badge: "New",
    badgeType: "new",
    link: "/sangli-dcc-bank-peon-bharti-2026",
    description: "Sangli District Central Cooperative Bank Ltd (Sangli DCCB) invites online applications for 79 Peon vacancies. 12th pass eligible, 70 marks offline OMR exam. Apply by 21 August 2026."
  },
  {
    titleEn: "Mumbai Police Constable Bharti 2024-25: Final Selection List Out for 3,521 Vacancies",
    titleHi: "मुंबई पोलीस शिपाई भरती २०२४-२५: ३,५२१ पदांची अंतिम निवड यादी कट-ऑफसह जाहीर",
    date: "August 07, 2026",
    badge: "Result Out",
    badgeType: "important",
    link: "/mumbai-police-constable-final-selection-list-2026",
    description: "Brihanmumbai Police Commissionerate has officially published the Final Selection List & Waiting List with Cut-Off for 3,521 Police Constable posts."
  },
  {
    titleEn: "SBI Clerk Recruitment 2026: Apply Online for 1,538 Junior Associate Vacancies",
    titleHi: "भारतीय स्टेट बँकेत (SBI) लिपिक १५३८ जागांसाठी भरती २०२६: ऑनलाईन अर्ज सुरू",
    date: "August 08, 2026",
    badge: "New",
    badgeType: "new",
    link: "/sbi-clerk-recruitment-2026",
    description: "State Bank of India (SBI) invites online applications for 1,538 Junior Associate (Clerk) posts. Any graduate eligible. Apply by 27 August 2026."
  },
  {
    titleEn: "PDCC Bank Peon Bharti 2026: Apply Online for 289 Posts (12th Pass Eligible)",
    titleHi: "पुणे जिल्हा मध्यवर्ती सहकारी बँक भरती २०२६: शिपाई २८९ पदांची सरळसेवा भरती जाहीर (अर्ज मुदत १० ऑगस्ट)",
    date: "August 06, 2026",
    badge: "New",
    badgeType: "new",
    link: "/pdcc-bank-peon-bharti-2026",
    description: "Pune District Central Cooperative Bank Ltd (PDCC Bank) invites online applications for 289 Peon vacancies. 12th pass eligible, 70 marks offline exam. Apply by 10 August 2026."
  },
  {
    titleEn: "Solapur Mahanagarpalika Bharti 2026: Govt Approves 130 Posts Fill-up via TCS / IBPS",
    titleHi: "सोलापूर महानगरपालिका भरती २०२६: १३० जागांच्या पदभरतीस शासन मान्यता जाहीर (नगर विकास विभाग)",
    date: "August 06, 2026",
    badge: "Govt Order",
    badgeType: "new",
    link: "/solapur-mahanagarpalika-bharti-2026",
    description: "Urban Development Department of Maharashtra approves recruitment for 130 Group-C vacancies in Solapur Municipal Corporation (including 41 Clerk Typists & 30 JE Civil posts) via TCS/IBPS."
  },
  {
    titleEn: "Latur DCC Bank Bharti 2026: Revised Waiting List Released as per GR dated 15.06.2018",
    titleHi: "लातूर जिल्हा मध्यवर्ती बँक भरती २०२६: संवर्गनिहाय २०% सुधारीत प्रतीक्षा यादी (Revised Waiting List) प्रसिद्ध",
    date: "August 03, 2026",
    badge: "Revised List",
    badgeType: "important",
    link: "/latur-dcc-bank-revised-waiting-list-2026",
    description: "Latur DCC Bank has officially published the revised waiting list (20% category merit quota) for Lipik, Sevak, and Driver posts valid for 365 days as per GR directives."
  },
  {
    titleEn: "Latur DCC Bank Result 2026: Phase 1 Selection List Released for 263 Posts",
    titleHi: "लातूर जिल्हा मध्यवर्ती बँक निकाल २०२६: ३७५ पदांपैकी २६३ उमेदवारांची Phase 1 निवड यादी प्रसिद्ध",
    date: "July 28, 2026",
    badge: "Result",
    badgeType: "important",
    link: "/latur-dcc-bank-result-2026",
    description: "Latur DCC Bank has declared the Phase 1 result & selection list for Clerk, Multipurpose Support Staff, and Driver posts. Selected candidates must report on 14 August 2026."
  },
  {
    titleEn: "MPSC Group C Bharti 2026: Corrigendum Released for 5,707 Vacancies & Deadline Extended to 10 August",
    titleHi: "MPSC गट-क संयुक्त परीक्षा २०२६: ५,७०७ जागांसाठी शुद्धिपत्रक प्रसिद्ध, ऑनलाईन अर्ज मुदतवाढ (१० ऑगस्ट २०२६)",
    date: "July 22, 2026",
    badge: "New",
    badgeType: "new",
    link: "/mpsc-group-c-bharti-2026",
    description: "MPSC has released a Corrigendum notice updating total vacancies to 5,707 across 11 departments (including 1,539 Talathi & 3,197 Clerk-Typist posts). Last date to apply extended to 10 August 2026."
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
