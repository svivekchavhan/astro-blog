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
    id: "pavitra-portal-tait-2025-preference-notice",
    title:
      "🔥 पवित्र पोर्टल TAIT-2025: पवित्र पोर्टल वरील Log In Problem बाबतीत सूचना ",
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
