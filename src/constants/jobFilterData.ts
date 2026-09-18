import { articlesRegistry } from "./articles";

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

// Unified job dataset combining articlesRegistry and live openings
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

export const ALL_JOB_POSTS: JobItem[] = [
  {
    id: "mecl-nagpur-recruitment-2026",
    title: "MECL नागपूर भरती २०२६: मिनेरल्स एक्सप्लोरेशन अँड कन्सल्टन्सी लि. मध्ये १२२ जागांसाठी भरती जाहीर!",
    link: "/mecl-nagpur-recruitment-2026",
    organisation: "MECL Nagpur (Miniratna-I CPSE, Ministry of Mines)",
    qualification: "10th Pass / ITI / Diploma / Graduation Degree",
    category: "Central Govt",
    vacancies: "122",
    lastDate: "11 Oct 2026",
    status: "apply-now"
  },
  {
    id: "delhi-high-court-spa-pa-recruitment-2026",
    title: "दिल्ली उच्च न्यायालय भरती २०२६: सिनियर पर्सनल असिस्टंट (SPA) व पर्सनल असिस्टंट (PA) १५० जागांसाठी ऑनलाईन अर्ज सुरू!",
    link: "/delhi-high-court-spa-pa-recruitment-2026",
    organisation: "High Court of Delhi (दिल्ली उच्च न्यायालय)",
    qualification: "Graduate Degree + English Shorthand & Typewriting",
    category: "Central Govt",
    vacancies: "150",
    lastDate: "05 Oct 2026",
    status: "apply-now"
  },
  {
    id: "sindhudurg-dcc-bank-clerk-recruitment-2026",
    title: "सिंधुदुर्ग जिल्हा मध्यवर्ती बँक लिपिक पदभरती २०२६: ६७ जागांसाठी जाहिरात प्रसिद्ध (Sindhudurg DCCB Bharti)",
    link: "/sindhudurg-dcc-bank-clerk-recruitment-2026",
    organisation: "The Sindhudurg District Central Co-operative Bank Ltd",
    qualification: "Graduate in any discipline (min 40% marks) + 10th Marathi",
    category: "Bank Job",
    vacancies: "67",
    lastDate: "17 Sep 2026",
    status: "apply-now"
  },
  {
    id: "india-post-gds-recruitment-2026",
    title: "भारतीय डाक विभागात GDS पदांच्या २३,७५७ जागांसाठी मेगाभरती २०२६: ऑनलाईन अर्ज सुरू (India Post GDS Bharti)",
    link: "/india-post-gds-recruitment-2026",
    organisation: "Department of Posts (India Post)",
    qualification: "10th Pass (Matriculation with Maths & English)",
    category: "Central Govt",
    vacancies: "23,757",
    lastDate: "21 Sep 2026",
    status: "apply-now"
  },
  {
    id: "ctet-2026-online-application-reopened",
    title: "CTET २०२६ ऑनलाईन अर्ज पुन्हा सुरू: २२ व्या केंद्रीय शिक्षक पात्रता परीक्षेसाठी ०१ सप्टेंबर पर्यंत मुदतवाढ",
    link: "/ctet-2026-online-application-reopened",
    organisation: "Central Board of Secondary Education (CBSE)",
    qualification: "D.El.Ed / B.Ed / Graduation (Paper I & II)",
    category: "Exam Alert",
    vacancies: "Eligibility Test",
    lastDate: "01 Sep 2026",
    status: "apply-now"
  },
  {
    id: "barti-trti-sarthi-age-relaxation-extension-2026",
    title: "बार्टी, TRTI, सारथी, अमृत व आर्टी मोफत स्पर्धा परीक्षा पूर्व प्रशिक्षण चाळणी परीक्षा २०२६: वयोमर्यादा शिथिल व मुदतवाढ",
    link: "/barti-trti-sarthi-age-relaxation-extension-2026",
    organisation: "TRTI, BARTI, SARTHI, AMRUT & ARTI Maharashtra",
    qualification: "Degree / Graduate in any discipline (Category Specific)",
    category: "Free Coaching",
    vacancies: "Free CET Coaching",
    lastDate: "04 Sep 2026",
    status: "apply-now"
  },
  {
    id: "ibps-csa-clerk-recruitment-2026",
    title: "IBPS भरती २०२६: क्लर्क (CSA-XVI) ११,४०३ जागांची भरती, ऑनलाईन अर्जास २८ ऑगस्ट मुदतवाढ (IBPS Clerk Bharti)",
    link: "/ibps-csa-clerk-recruitment-2026",
    organisation: "Institute of Banking Personnel Selection (IBPS)",
    qualification: "Graduation in any discipline + Computer Knowledge + Local Language",
    category: "Bank Job",
    vacancies: "11,403 (Maha: 1,051)",
    lastDate: "21 Aug 2026",
    extendedDate: "28 Aug 2026",
    status: "closed"
  },
  {
    id: "isro-recruitment-2026",
    title: "ISRO भरती २०२६: भारतीय अंतराळ संशोधन संस्थेत २६७ जागांसाठी भरती जाहीर (ISRO Recruitment 2026)",
    link: "/isro-recruitment-2026",
    organisation: "Indian Space Research Organisation (ISRO)",
    qualification: "Degree in any discipline (min 60% marks) / Diploma",
    category: "Central Govt",
    vacancies: "267",
    lastDate: "16 Aug 2026",
    extendedDate: "20 Aug 2026",
    status: "closed"
  },
  {
    id: "bank-of-baroda-lbo-recruitment-2025",
    title: "बँक ऑफ बडोदा मध्ये 'लोकल बँक ऑफिसर' २५०० जागांसाठी भरती २०२५: ऑनलाईन अर्ज सुरू (BOB LBO Bharti)",
    link: "/bank-of-baroda-lbo-recruitment-2025",
    organisation: "Bank of Baroda (BOB)",
    qualification: "Degree in any discipline + 1 Year Officer Experience",
    category: "Bank Job",
    vacancies: "2,500",
    lastDate: "07 Sep 2026",
    status: "apply-now"
  },
  {
    id: "pune-income-tax-sports-quota-recruitment-2026",
    title: "आयकर विभाग पुणे भरती २०२६: खेळाडूंसाठी ८५ जागांवर ऑनलाईन अर्ज सुरू (Income Tax Pune Sports Quota Bharti)",
    link: "/pune-income-tax-sports-quota-recruitment-2026",
    organisation: "Income Tax Department, Pune (Pr.CCIT Pune)",
    qualification: "10th Pass / 12th Pass / Graduate Degree + Sports Certificate",
    category: "Central Govt",
    vacancies: "85",
    lastDate: "15 Sep 2026",
    status: "apply-now"
  },
  {
    id: "gmc-gondia-assistant-professor-recruitment-2026",
    title: "GMC Gondia भरती २०२६: शासकीय वैद्यकीय महाविद्यालय गोंदिया सहाय्यक प्राध्यापक १३ जागांसाठी जाहिरात प्रसिद्ध",
    link: "/gmc-gondia-assistant-professor-recruitment-2026",
    organisation: "Government Medical College, Gondia (GMC Gondia)",
    qualification: "MD / MS / DNB in relevant subject / M.Sc. + Ph.D. Statistics",
    category: "State Govt",
    vacancies: "13",
    lastDate: "20 Aug 2026",
    status: "closed"
  },
  {
    id: "rrb-je-dms-recruitment-2026",
    title: "RRB JE / DMS Recruitment 2026: रेल्वे भरती बोर्डात ३,९९३ जागांसाठी भरती (CEN 04/2026)",
    link: "/rrb-je-dms-recruitment-2026",
    organisation: "Railway Recruitment Boards (RRB)",
    qualification: "Diploma / Degree in Engineering",
    category: "Central Govt",
    vacancies: "3,993",
    lastDate: "13 Sep 2026",
    status: "apply-now"
  },
  {
    id: "sangli-dcc-bank-peon-bharti-2026",
    title: "सांगली जिल्हा मध्यवर्ती बँक शिपाई पदभरती २०२६: ७९ जागांसाठी जाहिरात प्रसिद्ध",
    link: "/sangli-dcc-bank-peon-bharti-2026",
    organisation: "Sangli District Central Cooperative Bank Ltd (Sangli DCCB)",
    qualification: "12th Pass (HSC)",
    category: "Bank Job",
    vacancies: "79",
    lastDate: "21 Aug 2026",
    status: "closed"
  },
  {
    id: "pdcc-bank-peon-bharti-2026",
    title: "पुणे जिल्हा मध्यवर्ती सहकारी बँक भरती २०२६: शिपाई २८९ पदांची सरळसेवा भरती जाहिरात प्रसिद्ध",
    link: "/pdcc-bank-peon-bharti-2026",
    organisation: "Pune District Central Cooperative Bank Ltd (PDCC)",
    qualification: "12th Pass (HSC) / Diploma",
    category: "Bank Job",
    vacancies: "289",
    lastDate: "10 Aug 2026",
    status: "closed"
  },
  {
    id: "solapur-mahanagarpalika-bharti-2026",
    title: "सोलापूर महानगरपालिका भरती २०२६: १३० जागांच्या पदभरतीस शासन मान्यता जाहीर (शासन निर्णय)",
    link: "/solapur-mahanagarpalika-bharti-2026",
    organisation: "Solapur Municipal Corporation & Urban Development Dept",
    qualification: "Degree / Diploma / 10th / 12th / ITI",
    category: "State Govt",
    vacancies: "130",
    lastDate: "Notification Soon",
    status: "apply-now"
  },
  {
    id: "mpsc-group-c-bharti-2026",
    title: "MPSC गट-क सेवा संयुक्त पूर्व परीक्षा २०२६: ५,७०७ जागांसाठी शुद्धिपत्रक प्रसिद्ध, अर्ज मुदतवाढ",
    link: "/mpsc-group-c-bharti-2026",
    organisation: "MPSC (Maharashtra Public Service Commission)",
    qualification: "Degree in any discipline / B.F.Sc.",
    category: "State Govt",
    vacancies: "5,707",
    lastDate: "10 August 2026",
    status: "closed"
  },
  {
    id: "ssc-je-recruitment-2026",
    title: "SSC JE भरती २०२६: स्टाफ सिलेक्शन कमिशन कडून ज्युनिअर इंजिनिअर १,७६३ जागांसाठी भरती जाहिरात",
    link: "/ssc-je-recruitment-2026",
    organisation: "Staff Selection Commission (SSC)",
    qualification: "Diploma / Degree in Civil / Electrical / Mechanical Engineering",
    category: "Central Govt",
    vacancies: "1,763",
    lastDate: "18 Sep 2026",
    status: "apply-now"
  }
];

// Helper to filter posts matching a given category or qualification slug
export function getPostsForSlug(slug: string): JobItem[] {
  const s = slug.toLowerCase().trim();
  if (!s || s === "all") return ALL_JOB_POSTS;

  return ALL_JOB_POSTS.filter((job) => {
    const qual = job.qualification.toLowerCase();
    const title = job.title.toLowerCase();
    const category = job.category.toLowerCase();
    const org = job.organisation.toLowerCase();

    // Match Qualification Slugs
    if (s === "10th" && (qual.includes("10th") || qual.includes("matriculation") || title.includes("10th"))) return true;
    if (s === "12th" && (qual.includes("12th") || qual.includes("hsc") || title.includes("12th"))) return true;
    if (s === "iti" && (qual.includes("iti") || qual.includes("diploma") || title.includes("iti"))) return true;
    if (s === "degree" && (qual.includes("graduate") || qual.includes("degree") || qual.includes("graduation") || qual.includes("b.ed") || qual.includes("d.el.ed"))) return true;
    if (s === "pg" && (qual.includes("post graduate") || qual.includes("master") || qual.includes("mba") || qual.includes("m.sc") || qual.includes("ph.d") || qual.includes("md") || qual.includes("ms"))) return true;
    if (s === "engg" && (qual.includes("engineering") || qual.includes("b.e") || qual.includes("b.tech") || qual.includes("diploma") || title.includes("engineer") || title.includes("je") || title.includes("dms"))) return true;
    if (s === "medical" && (qual.includes("md") || qual.includes("ms") || qual.includes("dnb") || qual.includes("m.sc") || qual.includes("medical") || qual.includes("nursing") || qual.includes("ph.d"))) return true;
    if (s === "law" && (qual.includes("shorthand") || qual.includes("typewriting") || qual.includes("law") || qual.includes("lawyer") || title.includes("pa") || title.includes("spa"))) return true;
    if (s === "sports" && (qual.includes("sports") || title.includes("sports"))) return true;

    // Match Sector / Category Slugs
    if (s === "central" && (category.includes("central") || title.includes("central") || org.includes("post") || org.includes("rrb") || org.includes("high court") || org.includes("mecl") || org.includes("isro") || org.includes("income tax"))) return true;
    if (s === "state" && (category.includes("state") || title.includes("state") || org.includes("maharashtra") || org.includes("mpsc") || org.includes("mahagenco") || org.includes("gmc") || org.includes("barti") || org.includes("solapur"))) return true;
    if (s === "bank" && (category.includes("bank") || title.includes("bank") || title.includes("ibps") || title.includes("bob") || org.includes("dcc"))) return true;
    if (s === "clerk" && (title.includes("clerk") || title.includes("लिपिक") || qual.includes("clerk") || title.includes("spa") || title.includes("pa"))) return true;
    if (s === "mpsc" && (category.includes("mpsc") || title.includes("mpsc") || org.includes("mpsc"))) return true;
    if (s === "district" && (title.includes("जिल्हा") || org.includes("district") || org.includes("dcc") || title.includes("महानगरपालिका") || org.includes("municipal"))) return true;
    if (s === "coaching" && (category.includes("free coaching") || title.includes("कोचिंग") || title.includes("प्रशिक्षण") || org.includes("trti") || org.includes("barti") || org.includes("sarthi"))) return true;

    // General fallback search match
    return (qual.includes(s) || category.includes(s) || title.includes(s) || org.includes(s));
  });
}

// Find filter option metadata by slug
export function getFilterOptionBySlug(slug: string): FilterOption | undefined {
  const allOptions = [...QUALIFICATION_OPTIONS, ...SECTOR_OPTIONS];
  return allOptions.find((o) => o.slug.toLowerCase() === slug.toLowerCase());
}
