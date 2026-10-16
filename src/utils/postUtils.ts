import { articlesRegistry, type ArticleMeta, type PostType, type EducationTag } from "../constants/articles";
import { parseDateString } from "./dateUtils";

export function sortByDateDesc(posts: ArticleMeta[]): ArticleMeta[] {
  return [...posts].sort((a, b) => {
    const timeA = (a.date ? (parseDateString(a.date) || new Date(a.date))?.getTime() : 0) || 0;
    const timeB = (b.date ? (parseDateString(b.date) || new Date(b.date))?.getTime() : 0) || 0;
    return timeB - timeA;
  });
}

export function inferPostType(post: ArticleMeta): PostType {
  if (post.postType) return post.postType;
  const category = (post.category || "").toLowerCase();
  const slug = (post.slug || "").toLowerCase();
  const title = `${post.titleEn || ""} ${post.titleMr || ""}`.toLowerCase();

  // 1. Result detection (Strictly routed away from Homepage / Current / Mega)
  if (
    category.includes("result") ||
    slug.includes("/result/") ||
    slug.includes("-result-") ||
    slug.endsWith("-result-2026") ||
    slug.endsWith("-selection-list-2026") ||
    slug.endsWith("-waiting-list-2026") ||
    title.includes("result") ||
    title.includes("निकाल") ||
    title.includes("merit list") ||
    title.includes("waiting list") ||
    title.includes("निवड यादी") ||
    title.includes("प्रतीक्षा यादी") ||
    title.includes("गुणपत्रक") ||
    title.includes("marksheet")
  ) {
    return "result";
  }

  // 2. Admit Card detection (Strictly routed away from Homepage / Current / Mega)
  if (
    category.includes("admit card") ||
    category.includes("hall ticket") ||
    slug.includes("/admit-card/") ||
    slug.includes("-hall-ticket-") ||
    slug.includes("-admit-card-") ||
    title.includes("admit card") ||
    title.includes("hall ticket") ||
    title.includes("प्रवेशपत्र") ||
    title.includes("हॉल तिकीट") ||
    title.includes("कॉल लेटर") ||
    title.includes("call letter")
  ) {
    return "admit-card";
  }

  // 3. Admission detection (Strictly routed away from Homepage / Current / Mega)
  if (
    category.includes("admission") ||
    slug.includes("/admission/") ||
    slug.includes("-admission-") ||
    title.includes("admission") ||
    title.includes("प्रवेश प्रक्रिया") ||
    title.includes("counselling") ||
    title.includes("समुपदेशन") ||
    title.includes("cap round") ||
    title.includes("प्रवेश फेरी") ||
    title.includes("प्रवेश अर्ज") ||
    title.includes("iti admission") ||
    title.includes("cet counselling")
  ) {
    return "admission";
  }

  // 4. Answer Key detection (Strictly routed away from Homepage / Current / Mega)
  if (
    category.includes("answer key") ||
    slug.includes("/answer-key/") ||
    slug.includes("-answer-key-") ||
    title.includes("answer key") ||
    title.includes("उत्तरतालिका") ||
    title.includes("उत्तरपत्रिका") ||
    title.includes("omr sheet") ||
    title.includes("objection tracker") ||
    title.includes("मॉडेल आन्सर")
  ) {
    return "answer-key";
  }

  // 5. Notice / Circular / Syllabus detection
  if (
    category.includes("notice") ||
    category.includes("update") ||
    category.includes("syllabus") ||
    category.includes("study material") ||
    category.includes("rules") ||
    category.includes("free coaching") ||
    slug.includes("-syllabus-") ||
    slug.includes("-notice-") ||
    slug.includes("-circular-") ||
    slug.includes("-postponed-") ||
    title.includes("notice") ||
    title.includes("शुद्धिपत्रक") ||
    title.includes("परिपत्रक") ||
    title.includes("नियम") ||
    title.includes("अभ्यासक्रम") ||
    title.includes("syllabus") ||
    title.includes("timetable") ||
    title.includes("वेळापत्रक") ||
    title.includes("चालू घडामोडी") ||
    title.includes("current affairs") ||
    title.includes("मार्गदर्शक") ||
    title.includes("study notes")
  ) {
    return "notice";
  }

  return "recruitment";
}

export function inferIsImportant(post: ArticleMeta): boolean {
  if (post.isImportant !== undefined) return post.isImportant;
  if (post.priority === "important" || post.priority === "mega") return true;

  if (post.extendedDate) return true;
  const vacNum = parseInt((post.vacancies || "").replace(/[^0-9]/g, ""), 10);
  if (!isNaN(vacNum) && vacNum >= 1000) return true;

  const text = `${post.titleMr} ${post.titleEn} ${post.category}`.toLowerCase();
  if (
    text.includes("🚨") ||
    text.includes("🔥") ||
    text.includes("मेगा") ||
    text.includes("मुदतवाढ") ||
    text.includes("हॉल तिकीट") ||
    text.includes("निकाल") ||
    text.includes("निकाल जाहीर") ||
    text.includes("जाहिरात प्रसिद्ध")
  ) {
    return true;
  }

  return false;
}

export function getAllPosts(): ArticleMeta[] {
  return sortByDateDesc(articlesRegistry);
}

export function getRecruitmentPosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => inferPostType(post) === "recruitment")
  );
}

export function getResultPosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => inferPostType(post) === "result")
  );
}

export function getAdmitCardPosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => inferPostType(post) === "admit-card")
  );
}

export function getAdmissionPosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => inferPostType(post) === "admission")
  );
}

export function getAnswerKeyPosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => inferPostType(post) === "answer-key")
  );
}

export function getNoticePosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => inferPostType(post) === "notice")
  );
}

export function getImportantPosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => inferIsImportant(post))
  );
}

export function getMegaPosts(): ArticleMeta[] {
  return sortByDateDesc(
    articlesRegistry.filter((post) => {
      // Mega posts must strictly be recruitment articles
      if (inferPostType(post) !== "recruitment") return false;
      if (post.priority === "mega") return true;
      const vacNum = parseInt((post.vacancies || "").replace(/[^0-9]/g, ""), 10);
      return !isNaN(vacNum) && vacNum >= 1000;
    })
  );
}

export function getPostsByEducation(slug: string): ArticleMeta[] {
  const s = slug.toLowerCase().trim();
  const recruitments = getRecruitmentPosts();
  if (!s || s === "all") return recruitments;

  return recruitments.filter((post) => {
    if (post.educationTags && post.educationTags.length > 0) {
      if (post.educationTags.some((tag) => tag.toLowerCase() === s)) return true;
    }

    const searchable = `${post.titleEn} ${post.titleMr} ${post.descriptionMr || ""} ${post.postName || ""} ${post.category}`.toLowerCase();
    
    if (s === "10th" && (searchable.includes("10th") || searchable.includes("१०वी") || searchable.includes("matriculation"))) return true;
    if (s === "12th" && (searchable.includes("12th") || searchable.includes("१२वी") || searchable.includes("hsc"))) return true;
    if (s === "iti" && (searchable.includes("iti") || searchable.includes("डिप्लोमा") || searchable.includes("diploma") || searchable.includes("आयटीआय"))) return true;
    if (s === "degree" && (searchable.includes("graduate") || searchable.includes("degree") || searchable.includes("पदवी") || searchable.includes("b.ed") || searchable.includes("d.el.ed") || searchable.includes("csa"))) return true;
    if (s === "pg" && (searchable.includes("post graduate") || searchable.includes("master") || searchable.includes("पदव्युत्तर") || searchable.includes("mba") || searchable.includes("m.sc") || searchable.includes("ph.d") || searchable.includes("md") || searchable.includes("ms"))) return true;
    if (s === "engg" && (searchable.includes("engineering") || searchable.includes("b.e") || searchable.includes("b.tech") || searchable.includes("इंजिनिअरिंग") || searchable.includes("je") || searchable.includes("dms"))) return true;
    if (s === "medical" && (searchable.includes("medical") || searchable.includes("वैद्यकीय") || searchable.includes("nursing") || searchable.includes("pharmacist") || searchable.includes("md") || searchable.includes("ms"))) return true;
    if (s === "law" && (searchable.includes("law") || searchable.includes("कायदा") || searchable.includes("shorthand") || searchable.includes("typist") || searchable.includes("टंकलेखक") || searchable.includes("pa") || searchable.includes("spa"))) return true;
    if (s === "sports" && (searchable.includes("sports") || searchable.includes("खेळाडू"))) return true;

    return searchable.includes(s);
  });
}

export function getPostsByDistrict(districtSlug: string): ArticleMeta[] {
  const s = districtSlug.toLowerCase().trim();
  const allPosts = getRecruitmentPosts();
  if (!s || s === "all") return allPosts;

  return allPosts.filter((post) => {
    if (post.districts && post.districts.length > 0) {
      if (post.districts.some((d) => d.toLowerCase() === s || d.toLowerCase() === "all-maharashtra")) return true;
    }

    const searchable = `${post.titleEn} ${post.titleMr} ${post.slug} ${post.category} ${post.descriptionMr || ""}`.toLowerCase();
    const slugWithoutHyphen = s.replace(/-/g, " ");
    return searchable.includes(s) || searchable.includes(slugWithoutHyphen);
  });
}

