export interface ImportantUpdate {
  id: string;
  title: string;
  link: string;
  date: string;
  expiry?: string;
  show?: boolean; // Set to false to hide item from widget, true or omitted to show
}

export const importantUpdates: ImportantUpdate[] = [
  {
    id: "tmc-thane-hall-ticket-2026",
    title:
      "ठाणे महानगरपालिका (TMC) भरती परीक्षा प्रवेशपत्र / हॉलतिकीट ऑनलाईन उपलब्ध",
    link: "/tmc-thane-hall-ticket-2026",
    date: "August 22, 2026",
    expiry: "2026-09-15T00:00:00.000Z",
    show: true,
  },
  {
    id: "mahajyoti-vanarti-free-coaching-extension-2026",
    title:
      "महाज्योति व वनार्टी मोफत स्पर्धा परीक्षा प्रशिक्षण: अर्ज भरण्यास २६ ऑगस्ट २०२६ पर्यंत मुदतवाढ",
    link: "/mahajyoti-vanarti-free-coaching-extension-2026",
    date: "August 21, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
  },
  {
    id: "mpsc-group-c-divyang-scribe-update-2026",
    title:
      "MPSC गट-क परीक्षा: दिव्यांग उमेदवारांसाठी लेखनिक व भरपाई वेळ परिपत्रक जारी",
    link: "/mpsc-group-c-divyang-scribe-update-2026",
    date: "August 20, 2026",
    show: true,
  },
  {
    id: "pavitra-portal-tait-2025-preference-notice",
    title:
      "पवित्र पोर्टल TAIT-2025: पवित्र पोर्टल वरील Log In Problem बाबतीत सूचना ",
    link: "/pavitra-portal-tait-2025-preference-filling-notice",
    date: "August 08, 2026",
    expiry: "2026-09-30T00:00:00.000Z",
    show: true,
  },
  {
    id: "mpsc-group-c-pesa-update-2026",
    title:
      "MPSC गट-क परीक्षा: पेसा (PESA) रहिवासी व माजी सैनिक आरक्षणाबाबत परिपत्रक जारी",
    link: "/mpsc-group-c-pesa-update-2026",
    date: "August 07, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
  },
  {
    id: "mahajyoti-free-coaching-exam-timetable-2026",
    title: "महाज्योति परीक्षा सुधारित वेळापत्रक",
    link: "/mahajyoti-free-coaching-exam-timetable-2026",
    date: "August 04, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
  },
];
