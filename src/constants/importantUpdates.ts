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
    id: "mahajyoti-free-coaching-exam-timetable-2026",
    title: "महाज्योति परीक्षा सुधारित वेळापत्रक",
    link: "/mahajyoti-free-coaching-exam-timetable-2026",
    date: "August 04, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
  },
  {
    id: "mpsc-group-c-last-date-extended-2026",
    title:
      "MPSC गट-क संयुक्त पूर्व परीक्षा २०२६: मुदतवाढ शुद्धिपत्रक प्रसिद्ध! १० ऑगस्ट २०२६ पर्यंत अर्ज करण्यास मुदतवाढ",
    link: "/mpsc-group-c-last-date-extended-2026",
    date: "August 05, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
  },
  {
    id: "latur-dcc-revised-waiting-list",
    title:
      "लातूर जिल्हा मध्यवर्ती बँक भरती २०२६: सुधारीत प्रतीक्षा यादी (Revised Waiting List) प्रसिद्ध",
    link: "/latur-dcc-bank-revised-waiting-list-2026",
    date: "August 03, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
  },
];
