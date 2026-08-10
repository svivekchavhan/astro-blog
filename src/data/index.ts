import dummyData from "./dummy-data.json

export interface DemoMetadata {
  siteName: string;
  domain: string;
  contactEmail: string;
  isDemoDataMode: boolean;
  note: string;
}

export interface DemoNaukriUpdate {
  id: string;
  titleHi: string;
  titleEn: string;
  link: string;
  badge: string;
  badgeType: string;
  date: string;
}

export interface DemoUrgentUpdate {
  id: string;
  title: string;
  link: string;
  expiry: string;
}

export interface DemoJob {
  id: string;
  category: string;
  status: string;
  title: string;
  titleEn: string;
  link: string;
  organisation: string;
  qualification: string;
  vacancies: string;
  lastDate: string;
}

export interface DemoArticle {
  id: string;
  titleEn: string;
  titleMr: string;
  slug: string;
  category: string;
  date: string;
  image: string;
}

// Export pre-parsed JSON data collections
export const metadata: DemoMetadata = dummyData.metadata;
export const naukriUpdates: DemoNaukriUpdate[] = dummyData.naukriUpdates;
export const urgentUpdates: DemoUrgentUpdate[] = dummyData.urgentUpdates;
export const latestJobs: DemoJob[] = dummyData.latestJobs;
export const walkInJobs = dummyData.walkInJobs;
export const articles: DemoArticle[] = dummyData.articles;
export const admitCards = dummyData.admitCards;
export const results = dummyData.results;

export default dummyData;
