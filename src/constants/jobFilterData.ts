import { articlesRegistry } from "./articles";
import { getPostsByEducation } from "../utils/postUtils";

export interface FilterOption {
  slug: string;
  nameMr: string;
  nameEn: string;
  type: "qualification" | "sector";
  icon?: string;
}

export const QUALIFICATION_OPTIONS: FilterOption[] = [
  { slug: "all", nameMr: "सर्व शिक्षण पात्रता", nameEn: "All Qualifications", type: "qualification", icon: "🎓" },
  { slug: "10th", nameMr: "१०वी पास (10th Pass)", nameEn: "10th Pass", type: "qualification", icon: "🎓" },
  { slug: "12th", nameMr: "१२वी पास (12th Pass)", nameEn: "12th Pass", type: "qualification", icon: "📜" },
  { slug: "iti", nameMr: "आयटीआय / डिप्लोमा (ITI / Diploma)", nameEn: "ITI / Diploma", type: "qualification", icon: "🛠️" },
  { slug: "degree", nameMr: "पदवीधर (Graduation Degree)", nameEn: "Graduation Degree", type: "qualification", icon: "🎓" },
  { slug: "pg", nameMr: "पदव्युत्तर (Post Graduation / Master)", nameEn: "Post Graduation", type: "qualification", icon: "🎓" },
  { slug: "engg", nameMr: "इंजिनिअरिंग (Engineering B.E/B.Tech)", nameEn: "Engineering", type: "qualification", icon: "⚙️" },
  { slug: "medical", nameMr: "वैद्यकीय (Medical / Health / Nursing)", nameEn: "Medical & Health", type: "qualification", icon: "🏥" },
  { slug: "law", nameMr: "कायदा / टंकलेखक (Law / Shorthand)", nameEn: "Law & Shorthand", type: "qualification", icon: "⚖️" },
  { slug: "sports", nameMr: "खेळाडू (Sports Quota)", nameEn: "Sports Quota", type: "qualification", icon: "🏆" },
];

export const SECTOR_OPTIONS: FilterOption[] = [
  { slug: "all", nameMr: "सर्व संवर्ग", nameEn: "All Sectors", type: "sector", icon: "💼" },
  { slug: "central", nameMr: "केंद्र शासन भरती (Central Govt)", nameEn: "Central Govt Jobs", type: "sector", icon: "🏛️" },
  { slug: "state", nameMr: "राज्य शासन भरती (State Govt)", nameEn: "State Govt Jobs", type: "sector", icon: "🚩" },
  { slug: "bank", nameMr: "बँक भरती (Bank Jobs)", nameEn: "Bank Jobs", type: "sector", icon: "🏦" },
  { slug: "clerk", nameMr: "लिपिक / टंकलेखक (Clerk / Typist)", nameEn: "Clerk & Typist", type: "sector", icon: "📝" },
  { slug: "mpsc", nameMr: "एमपीएससी परीक्षा (MPSC Exams)", nameEn: "MPSC Exams", type: "sector", icon: "📖" },
  { slug: "district", nameMr: "जिल्हा भरती (District Bharti)", nameEn: "District Bharti", type: "sector", icon: "🏢" },
  { slug: "coaching", nameMr: "मोफत पूर्व प्रशिक्षण (Free CET)", nameEn: "Free CET Coaching", type: "sector", icon: "📚" },
];

export interface JobItem {
  id: string;
  title: string;
  titleEn?: string;
  link: string;
  organisation: string;
  qualification: string;
  category: string;
  vacancies: string;
  lastDate: string;
  extendedDate?: string;
  status: "apply-now" | "closed" | "upcoming";
  summaryMr?: string;
}

export const ALL_JOB_POSTS: JobItem[] = articlesRegistry.map((art) => ({
  id: art.slug.replace(/^\//, ""),
  title: art.titleMr || art.titleEn,
  titleEn: art.titleEn,
  link: art.slug,
  organisation: art.organisation || art.postName || art.category,
  qualification: art.educationTags?.join(" / ") || art.postName || "Graduate / 10th / 12th",
  category: art.category,
  vacancies: art.vacancies || "पहा",
  lastDate: art.lastDate || "लवकरच",
  extendedDate: art.extendedDate,
  status: (art.status as any) || (art.extendedDate || art.lastDate ? "apply-now" : "closed"),
  summaryMr: art.descriptionMr,
}));

export function getPostsForSlug(slug: string): JobItem[] {
  const matchingArticles = getPostsByEducation(slug);
  return matchingArticles.map((art) => ({
    id: art.slug.replace(/^\//, ""),
    title: art.titleMr || art.titleEn,
    titleEn: art.titleEn,
    link: art.slug,
    organisation: art.organisation || art.postName || art.category,
    qualification: art.educationTags?.join(" / ") || art.postName || "Graduate / 10th / 12th",
    category: art.category,
    vacancies: art.vacancies || "पहा",
    lastDate: art.lastDate || "लवकरच",
    extendedDate: art.extendedDate,
    status: (art.status as any) || (art.extendedDate || art.lastDate ? "apply-now" : "closed"),
    summaryMr: art.descriptionMr,
  }));
}

export function getFilterOptionBySlug(slug: string): FilterOption | undefined {
  const allOptions = [...QUALIFICATION_OPTIONS, ...SECTOR_OPTIONS];
  return allOptions.find((o) => o.slug.toLowerCase() === slug.toLowerCase());
}
