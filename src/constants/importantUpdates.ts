export interface ImportantUpdate {
  id: string;
  title: string;
  link: string;
  date: string;
  expiry?: string;
  show?: boolean; // Set to false to hide item from widget, true or omitted to show
  badge?: string;
  badgeType?: "new" | "extended" | "important" | "result" | "admit" | string;
}

export const importantUpdates: ImportantUpdate[] = [
  {
    id: "india-post-gds-recruitment-2026",
    title:
      "भारतीय डाक विभागात GDS पदांच्या २३,७५७ जागांसाठी मेगाभरती! (२१ सप्टेंबर २०२६ अर्ज मुदत)",
    link: "/india-post-gds-recruitment-2026",
    date: "September 01, 2026",
    expiry: "2026-09-22T00:00:00.000Z",
    show: true,
    badge: "Mega Bharti",
    badgeType: "new",
  },
  {
    id: "ctet-2026-online-application-reopened",
    title:
      "CTET २०२६: २२ व्या केंद्रीय शिक्षक पात्रता परीक्षेचे ऑनलाईन अर्ज पुन्हा सुरू (०१ सप्टेंबर पर्यंत मुदतवाढ)",
    link: "/ctet-2026-online-application-reopened",
    date: "August 25, 2026",
    expiry: "2026-09-05T00:00:00.000Z",
    show: true,
    badge: "Reopened",
    badgeType: "extended",
  },
  {
    id: "barti-trti-sarthi-free-coaching-extension-2026",
    title:
      "BARTI, TRTI, SARTHI, AMRUT & ARTI मोफत परीक्षा पूर्व प्रशिक्षण २०२६: वयोमर्यादा शिथिल व अर्जास मुदतवाढ",
    link: "/barti-trti-sarthi-age-relaxation-extension-2026",
    date: "August 25, 2026",
    expiry: "2026-09-10T00:00:00.000Z",
    show: true,
    badge: "Free CET",
    badgeType: "important",
  },
  {
    id: "mpsc-rajyaseva-mains-result-2025",
    title:
      "MPSC राज्यसेवा मुख्य परीक्षा २०२५: लेखी परीक्षेचा निकाल व अधिकृत कट-ऑफ (Cutoff Marks) जाहीर",
    link: "/mpsc-rajyaseva-mains-result-2025",
    date: "August 25, 2026",
    expiry: "2026-09-30T00:00:00.000Z",
    show: true,
    badge: "Result Out",
    badgeType: "result",
  },
  {
    id: "pdcc-bank-peon-hall-ticket-2026",
    title:
      "पुणे बँक (PDCC Bank) शिपाई २८९ जागा पदांचे हॉल तिकीट / प्रवेशपत्र उपलब्ध",
    link: "/pdcc-bank-peon-hall-ticket-2026",
    date: "August 23, 2026",
    expiry: "2026-09-20T00:00:00.000Z",
    show: true,
    badge: "Admit Card",
    badgeType: "admit",
  },
  {
    id: "ibps-csa-clerk-recruitment-2026",
    title:
      "IBPS क्लर्क (CSA) ११,४०३ जागा भरती: ऑनलाईन अर्जास २८ ऑगस्ट २०२६ पर्यंत मुदतवाढ",
    link: "/ibps-csa-clerk-recruitment-2026",
    date: "August 22, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
    badge: "Extended",
    badgeType: "extended",
  },
  {
    id: "tmc-thane-hall-ticket-2026",
    title:
      "ठाणे महानगरपालिका (TMC) भरती परीक्षा प्रवेशपत्र / हॉलतिकीट ऑनलाईन उपलब्ध",
    link: "/tmc-thane-hall-ticket-2026",
    date: "August 22, 2026",
    expiry: "2026-09-15T00:00:00.000Z",
    show: true,
    badge: "Admit Card",
    badgeType: "admit",
  },
  {
    id: "mahajyoti-vanarti-free-coaching-extension-2026",
    title:
      "महाज्योति व वनार्टी मोफत स्पर्धा परीक्षा प्रशिक्षण: अर्ज भरण्यास २६ ऑगस्ट २०२६ पर्यंत मुदतवाढ",
    link: "/mahajyoti-vanarti-free-coaching-extension-2026",
    date: "August 21, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
    badge: "Extended",
    badgeType: "extended",
  },
  {
    id: "mpsc-group-c-divyang-scribe-update-2026",
    title:
      "MPSC गट-क परीक्षा: दिव्यांग उमेदवारांसाठी लेखनिक व भरपाई वेळ परिपत्रक जारी",
    link: "/mpsc-group-c-divyang-scribe-update-2026",
    date: "August 20, 2026",
    show: true,
    badge: "Notice",
    badgeType: "important",
  },
  {
    id: "pavitra-portal-tait-2025-preference-notice",
    title:
      "पवित्र पोर्टल TAIT-2025: पवित्र पोर्टल वरील Log In Problem बाबतीत सूचना ",
    link: "/pavitra-portal-tait-2025-preference-filling-notice",
    date: "August 08, 2026",
    expiry: "2026-09-30T00:00:00.000Z",
    show: true,
    badge: "Notice",
    badgeType: "important",
  },
  {
    id: "mpsc-group-c-pesa-update-2026",
    title:
      "MPSC गट-क परीक्षा: पेसा (PESA) रहिवासी व माजी सैनिक आरक्षणाबाबत परिपत्रक जारी.",
    link: "/mpsc-group-c-pesa-update-2026",
    date: "August 07, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
    badge: "Notice",
    badgeType: "important",
  },
  {
    id: "mahajyoti-free-coaching-exam-timetable-2026",
    title: "महाज्योति परीक्षा सुधारित वेळापत्रक",
    link: "/mahajyoti-free-coaching-exam-timetable-2026",
    date: "August 04, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
    badge: "Timetable",
    badgeType: "important",
  },
];
