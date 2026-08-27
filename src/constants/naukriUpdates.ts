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
    titleEn: "CTET 2026 Online Application Window Re-opened: Apply Till 01 September",
    titleHi: "CTET २०२६ ऑनलाईन अर्ज पुन्हा सुरू: २२ व्या परीक्षा अर्जास ०१ सप्टेंबर मुदत",
    date: "August 25, 2026",
    badge: "New",
    badgeType: "new",
    link: "/ctet-2026-online-application-reopened",
    description: "CBSE CTET 2026 online application window has been reopened from 25 August to 01 September 2026 per Supreme Court judgment."
  },
  {
    titleEn: "TRTI, BARTI, SARTHI, AMRUT & ARTI Free Coaching CET 2026: Age Limit Relaxed & Extension",
    titleHi: "बार्टी, TRTI व सारथी मोफत परीक्षा पूर्व प्रशिक्षण: वयोमर्यादा शिथिल व मुदतवाढ",
    date: "August 25, 2026",
    badge: "Important",
    badgeType: "important",
    link: "/barti-trti-sarthi-age-relaxation-extension-2026",
    description: "Upper age limit of 30 years relaxed for TRTI, BARTI, SARTHI, AMRUT & ARTI CET exam 2026. Online application extended to 04 September 2026."
  },
  {
    titleEn: "MPSC State Services Main Examination 2025: Written Exam Result & Cutoff Marks Declared",
    titleHi: "MPSC राज्यसेवा मुख्य परीक्षा २०२५: लिखित निकाल व Cutoff जाहीर",
    date: "August 25, 2026",
    badge: "Result Out",
    badgeType: "important",
    link: "/mpsc-rajyaseva-mains-result-2025",
    description: "MPSC State Services Main Exam 2025 written exam result & category-wise cut-off marks published at mpsc.gov.in."
  },
  {
    titleEn: "Chhatrapati Sambhajinagar Municipal Corporation Result 2026: Selection Merit List Released for 5 Posts",
    titleHi: "छत्रपती संभाजीनगर मनपा भरती: ५ पदांचे निकाल व निवड यादी जाहीर",
    date: "August 24, 2026",
    badge: "Result Out",
    badgeType: "important",
    link: "/chhatrapati-sambhajinagar-mahanagarpalika-result-2026",
    description: "Chhatrapati Sambhajinagar Municipal Corporation 5 posts selection merit list released on official website."
  },
  {
    titleEn: "PDCC Bank Peon Hall Ticket 2026 Out: Download Call Letter for 289 Posts",
    titleHi: "पुणे बँक (PDCC Bank) शिपाई २८९ जागा हॉल तिकीट उपलब्ध",
    date: "August 23, 2026",
    badge: "Admit Card",
    badgeType: "new",
    link: "/pdcc-bank-peon-hall-ticket-2026",
    description: "PDCC Bank Peon exam hall ticket released. Download call letter directly."
  },
  {
    titleEn: "IBPS Clerk Recruitment 2026: Apply Online for 11,403 Vacancies (1,051 in Maharashtra)",
    titleHi: "IBPS क्लर्क ११,४०३ जागा भरती: ऑनलाईन अर्जास २८ ऑगस्ट पर्यंत मुदतवाढ",
    date: "August 22, 2026",
    badge: "Extended",
    badgeType: "extended",
    link: "/ibps-csa-clerk-recruitment-2026",
    description: "IBPS Clerk CSA-XVI 11,403 posts application deadline extended to 28 August 2026."
  },
  {
    titleEn: "TMC Thane Hall Ticket 2026 Out: Download Thane Municipal Corporation Admit Card",
    titleHi: "ठाणे महानगरपालिका (TMC) भरती परीक्षा प्रवेशपत्र / हॉलतिकीट उपलब्ध",
    date: "August 22, 2026",
    badge: "Admit Card",
    badgeType: "new",
    link: "/tmc-thane-hall-ticket-2026",
    description: "Thane Municipal Corporation exam admit card released for 7 cadre posts."
  },
  {
    titleEn: "Mahajyoti & VANARTI Free Coaching 2026: Deadline Extended to 26 August",
    titleHi: "महाज्योति व वनार्टी मोफत स्पर्धा परीक्षा प्रशिक्षण मुदतवाढ",
    date: "August 21, 2026",
    badge: "Extended",
    badgeType: "extended",
    link: "/mahajyoti-vanarti-free-coaching-extension-2026",
    description: "Mahajyoti & VANARTI free coaching application extended to 26 August 2026."
  },
  {
    titleEn: "Bank of Baroda LBO Recruitment 2025: Apply Online for 2,500 Local Bank Officer Posts",
    titleHi: "बँक ऑफ बडोदा मध्ये 'लोकल बँक ऑफिसर' २५०० जागांसाठी भरती २०२५: ऑनलाईन अर्ज सुरू",
    date: "August 18, 2026",
    badge: "New",
    badgeType: "new",
    link: "/bank-of-baroda-lbo-recruitment-2025",
    description: "Bank of Baroda (BOB) invites online applications for 2,500 Local Bank Officer (JMG/S-I) posts. Graduation + 1 year officer experience in RBI 2nd Schedule Bank/RRB eligible. Apply online by 7 September 2026."
  },
  {
    titleEn: "Income Tax Pune Recruitment 2026: Apply Online for 85 Sports Quota Vacancies",
    titleHi: "आयकर विभाग पुणे स्पोर्ट्स कोटा भरती २०२६: ८५ जागांसाठी अर्ज सुरू",
    date: "August 15, 2026",
    badge: "New",
    badgeType: "new",
    link: "/pune-income-tax-sports-quota-recruitment-2026",
    description: "Principal Chief Commissioner of Income Tax (Pr.CCIT), Pune invites online applications for 85 vacancies of Stenographer Grade-II, Tax Assistant, and MTS under Sports Quota. Apply online by 15 Sept 2026."
  },
  {
    titleEn: "Bombay High Court Clerk Admit Card 2026: Typing Test Hall Ticket Released",
    titleHi: "बॉम्बे उच्च न्यायालय लिपिक हॉल तिकीट २०२६ प्रसिद्ध!",
    date: "August 15, 2026",
    badge: "Admit Card",
    badgeType: "new",
    link: "/bhc-clerk-admit-card-2026",
    description: "Bombay High Court (BHC) has officially released the Hall Ticket / Admit Card for Clerk Typing Test 2026."
  },
  {
    titleEn: "Sangli DCC Bank Peon Bharti 2026: Apply Online for 79 Vacancies (12th Pass Eligible)",
    titleHi: "सांगली DCC बँक शिपाई भरती २०२६: ७९ जागा जाहीर",
    date: "August 12, 2026",
    badge: "New",
    badgeType: "new",
    link: "/sangli-dcc-bank-peon-bharti-2026",
    description: "Sangli District Central Cooperative Bank Ltd (Sangli DCCB) invites online applications for 79 Peon vacancies. 12th pass eligible, 70 marks offline OMR exam. Apply by 21 August 2026."
  },
  {
    titleEn: "SBI Recruitment 2026: State Bank of India Advertisements, Exam Updates & Apply Links",
    titleHi: "SBI भरती २०२६: सर्व जाहिराती व ऑनलाईन अर्ज एकत्र",
    date: "August 13, 2026",
    badge: "New Hub",
    badgeType: "new",
    link: "/sbi-recruitment",
    description: "Explore all active and upcoming SBI recruitments (Clerk 1,538 posts, PO 2,000+ posts, SO, CBO, Apprentice)."
  },
  {
    titleEn: "SBI Clerk Recruitment 2026: Apply Online for 1,538 Junior Associate Vacancies",
    titleHi: "SBI लिपिक भरती २०२६: १,५३८ जागांसाठी अर्ज सुरू",
    date: "August 08, 2026",
    badge: "New",
    badgeType: "new",
    link: "/sbi-clerk-recruitment-2026",
    description: "State Bank of India (SBI) invites online applications for 1,538 Junior Associate (Clerk) posts. Any graduate eligible. Apply by 27 August 2026."
  },
  {
    titleEn: "PDCC Bank Peon Bharti 2026: Apply Online for 289 Posts (12th Pass Eligible)",
    titleHi: "PDCC बँक शिपाई भरती २०२६: २८९ जागा जाहीर",
    date: "August 06, 2026",
    badge: "New",
    badgeType: "new",
    link: "/pdcc-bank-peon-bharti-2026",
    description: "Pune District Central Cooperative Bank Ltd (PDCC Bank) invites online applications for 289 Peon vacancies. 12th pass eligible, 70 marks offline exam. Apply by 10 August 2026."
  },
  {
    titleEn: "Solapur Mahanagarpalika Bharti 2026: Govt Approves 130 Posts Fill-up via TCS / IBPS",
    titleHi: "सोलापूर मनपा भरती २०२६: १३० जागांना शासन मान्यता",
    date: "August 06, 2026",
    badge: "Govt Order",
    badgeType: "new",
    link: "/solapur-mahanagarpalika-bharti-2026",
    description: "Urban Development Department of Maharashtra approves recruitment for 130 Group-C vacancies in Solapur Municipal Corporation."
  },
  {
    titleEn: "Latur DCC Bank Bharti 2026: Revised Waiting List Released as per GR dated 15.06.2018",
    titleHi: "लातूर DCC बँक भरती: २०% सुधारित प्रतीक्षा यादी प्रसिद्ध",
    date: "August 03, 2026",
    badge: "Revised List",
    badgeType: "important",
    link: "/latur-dcc-bank-revised-waiting-list-2026",
    description: "Latur DCC Bank has officially published the revised waiting list for Lipik, Sevak, and Driver posts."
  },
  {
    titleEn: "Latur DCC Bank Result 2026: Phase 1 Selection List Released for 263 Posts",
    titleHi: "लातूर DCC बँक निकाल २०२६: २६३ उमेदवारांची निवड यादी",
    date: "July 28, 2026",
    badge: "Result",
    badgeType: "important",
    link: "/latur-dcc-bank-result-2026",
    description: "Latur DCC Bank has declared the Phase 1 result & selection list for Clerk, Multipurpose Support Staff, and Driver posts."
  },
  {
    titleEn: "MPSC Group C Bharti 2026: Corrigendum Released for 5,707 Vacancies & Deadline Extended to 10 August",
    titleHi: "MPSC गट-क परीक्षा २०२६: ५,७०७ जागा शुद्धिपत्रक व मुदतवाढ",
    date: "July 22, 2026",
    badge: "New",
    badgeType: "new",
    link: "/mpsc-group-c-bharti-2026",
    description: "MPSC has released a Corrigendum notice updating total vacancies to 5,707 across 11 departments."
  },
  {
    titleEn: "MH SET 2026 Exam Rescheduled: Date Postponed to 27 September",
    titleHi: "MH-SET परीक्षा २०२६ पुढे ढकलली: नवीन तारीख जाहीर",
    date: "July 20, 2026",
    badge: "Rescheduled",
    badgeType: "important",
    link: "/admit-card/maharashtra-set-exam-date-postponed",
    description: "The Savitribai Phule Pune University has postponed the MH-SET 2026 exam to September 27, 2026."
  }
];
