import { articlesRegistry, type ArticleMeta, type PostType, type EducationTag } from "../constants/articles";

export function inferPostType(post: ArticleMeta): PostType {
  if (post.postType) return post.postType;
  const category = (post.category || "").toLowerCase();
  const slug = (post.slug || "").toLowerCase();
  const title = `${post.titleEn} ${post.titleMr}`.toLowerCase();

  if (category.includes("result") || title.includes("result") || title.includes("निकाल")) return "result";
  if (category.includes("admit card") || title.includes("admit card") || title.includes("hall ticket") || title.includes("प्रवेशपत्र") || title.includes("हॉल तिकीट")) return "admit-card";
  if (category.includes("notice") || title.includes("notice") || title.includes("शुद्धिपत्रक") || title.includes("परिपत्रक") || title.includes("update") || title.includes("नियम")) return "notice";
  
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
  return articlesRegistry;
}

export function getRecruitmentPosts(): ArticleMeta[] {
  return articlesRegistry.filter((post) => inferPostType(post) === "recruitment");
}

export function getResultPosts(): ArticleMeta[] {
  return articlesRegistry.filter((post) => inferPostType(post) === "result");
}

export function getAdmitCardPosts(): ArticleMeta[] {
  return articlesRegistry.filter((post) => inferPostType(post) === "admit-card");
}

export function getNoticePosts(): ArticleMeta[] {
  return articlesRegistry.filter((post) => inferPostType(post) === "notice");
}

export function getImportantPosts(): ArticleMeta[] {
  return articlesRegistry.filter((post) => inferIsImportant(post));
}

export function getMegaPosts(): ArticleMeta[] {
  return articlesRegistry.filter((post) => {
    if (post.priority === "mega") return true;
    const vacNum = parseInt((post.vacancies || "").replace(/[^0-9]/g, ""), 10);
    return !isNaN(vacNum) && vacNum >= 1000;
  });
}

export function getPostsByEducation(slug: string): ArticleMeta[] {
  const s = slug.toLowerCase().trim();
  if (!s || s === "all") return articlesRegistry;

  return articlesRegistry.filter((post) => {
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
  if (!s || s === "all") return articlesRegistry;

  return articlesRegistry.filter((post) => {
    if (post.districts && post.districts.length > 0) {
      if (post.districts.some((d) => d.toLowerCase() === s || d.toLowerCase() === "all-maharashtra")) return true;
    }

    const searchable = `${post.titleEn} ${post.titleMr} ${post.slug} ${post.category} ${post.descriptionMr || ""}`.toLowerCase();
    const slugWithoutHyphen = s.replace(/-/g, " ");
    return searchable.includes(s) || searchable.includes(slugWithoutHyphen);
  });
}
