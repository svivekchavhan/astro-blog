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
    id: "latur-dcc-revised-waiting-list",
    title:
      "लातूर जिल्हा मध्यवर्ती बँक भरती २०२६: सुधारीत प्रतीक्षा यादी (Revised Waiting List) प्रसिद्ध",
    link: "/latur-dcc-bank-revised-waiting-list-2026",
    date: "August 03, 2026",
    expiry: "2026-08-30T00:00:00.000Z",
    show: true,
  },
];
