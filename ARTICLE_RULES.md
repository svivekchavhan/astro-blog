# MahaSandhi Article Display & Publishing Rules

This document defines the official business logic rules for publishing, categorizing, and displaying articles across the website.

---

## 📌 Rule 1: Mega Recruitment Page Display Rule (> 1,000 Posts)

- **Criteria**: If a recruitment notification or article announces **greater than 1,000 total vacancies** (`vacancies > 1000`), it **MUST** be displayed on the **Mega Recruitment** page (`/mega-recruitment`).
- **Exclusion**: If a recruitment campaign has **1,000 or fewer vacancies** (`vacancies <= 1000`), it **MUST NOT** be displayed on the Mega Recruitment page.
- **Example**:
  - ✅ **MPSC Group C Bharti 2026** (3,088 Vacancies) -> **SHOW on `/mega-recruitment`**
  - ✅ **Arogya Bharti 2026** (7,195 Vacancies) -> **SHOW on `/mega-recruitment`**
  - ❌ **HPCL Recruitment 2026** (116 Vacancies) -> Filtered out / Not shown on Mega Recruitment page.
  - ❌ **BSNL Bharti 2026** (100 Vacancies) -> Filtered out / Not shown on Mega Recruitment page.

---

## 📌 Rule 2: Article Route & Location Rule (Root Page URL)

- **Main Recruitment Articles**: Must be created at the **root route** under `src/pages/[article-slug].astro` (e.g., `/mpsc-group-c-bharti-2026`, `/bsnl-bharti-2026`).
- **Category Informational Guides**: Sub-category syllabus/exam guides remain in sub-folders (e.g., `/mpsc/mpsc-group-c-exam-details`).

---

## 📌 Rule 3: Registry Synchronization

Whenever a new recruitment article is created, it must be registered in the following central lists:
1. `src/constants/articles.ts` (`articlesRegistry` array)
2. `src/data/dummy-data.json` (`latestJobs`, `naukriUpdates`, `articles`, `urgentUpdates`)
3. `src/pages/index.astro` (`latestJobs` array)
4. `src/pages/current-recruitment.astro` (`latestJobs` array)
5. `src/pages/blog.astro` (`posts` array)
6. `src/pages/mega-recruitment.astro` (`recruitments` array, subject to **Rule 1**).

---

## 📌 Rule 4: Bilingual Symmetrical Content Standard

- **Strict Content Symmetry**: When writing any article, both **Marathi** and **English** versions **MUST contain identical/symmetrical content** adapted into their respective languages.
- **No Omissions**: Neither language version should omit sections, tables, eligibility criteria, schedule dates, application fees, FAQs, or official download links that are present in the other version.
- **Matching Structure**: Both language sections must include:
  1. Main Keyword Heading & Introduction
  2. Highlights Summary Grid
  3. Official Notification Overview & Vacancy Details Table
  4. Eligibility Criteria, Educational Qualification & Age Limit
  5. Fee Details & Schedule Dates (Registration start, closure, editing closure, print date, fee payment dates)
  6. Official PDF Download & Direct Application Links Table (Includes 'Age Calculator' button linking to `/mpsc-age-calculator-marathi`)
  7. Symmetrical Google SEO FAQ Section (matching questions & answers in both Marathi & English)

---

## 📌 Rule 5: Sidebar Display Standard

- All standard article pages must display the right-hand sidebar by omitting `hideSidebar` or setting `hideSidebar={false}` on the `<Layout>` component.

---

## 📌 Rule 6: District-Specific Article Auto-Association Rule

- **Criteria**: If an article or recruitment post mentions a specific district or city (e.g., Pune / पुणे, Mumbai / मुंबई, Thane / ठाणे, Nagpur / नागपूर, Chhatrapati Sambhajinagar / छत्रपती संभाजीनगर, etc.) in its title (`titleEn` or `titleMr`), slug, category, or metadata, it **MUST automatically be matched and displayed** under that district's page (`/district/[district-slug]`).
- **Mechanism**: The dynamic district route (`src/pages/district/[district].astro`) automatically filters `articlesRegistry` against `currentDistrict.nameEn`, `currentDistrict.nameMr`, and `currentDistrict.slug`.
- **Example**:
  - An article with title *"NMMC Navi Mumbai Hall Ticket Download 2026"* automatically appears under **Navi Mumbai** (`/district/navi-mumbai`).
  - An article with title *"Pune Mahanagarpalika Bharti 2026"* automatically appears under **Pune** (`/district/pune`).

---

## 📌 Rule 7: Symmetrical Bilingual FAQ & Google SEO Standard

- **Matching Symmetrical Content**: Every recruitment article **MUST include a dedicated FAQ section in both Marathi and English versions** with identical core questions and answers.
- **Google SEO Optimization**:
  - **Keyword-Rich Questions**: Structure questions targeting high-volume user search queries (e.g., last date to apply, qualification, age limit, application print date, prelims/mains exam dates).
  - **Concise & Direct Answers**: Keep answers clear, accurate, and direct without filler text for optimal Google search indexing and featured snippets.
  - **Structured Heading Hierarchy**: Use standard `<h2 id="faq">` for section titles and `<h3>` tags for each question to help search crawlers easily parse Q&A structures.

---

## 📌 Rule 8: Article Clean Layout Standard

- **Clean Header Layout**: Social share buttons are omitted to maintain a clean, distraction-free reading experience for users across desktop and mobile devices.

---

## 📌 Rule 9: No Table of Contents (Table of Contents Block Prohibition)

- **No Table of Contents Blocks**: Do **NOT** add "Table of Contents" or "या लेखातील महत्त्वाचे मुद्दे / मुख्य मुद्दे (Table of Contents)" blocks to any articles.
- **Streamlined Layout**: Articles must jump directly from the header/summary banner into the Quick Highlights table, detailed content sections, and FAQs without redundant link box clutter, ensuring a fast, mobile-friendly reading experience.

---

## 📌 Rule 10: Category Page Synchronization Rule (Admit Card, Result, Syllabus, Admission, Bank Job, Answer Key)

- **Category Mapping**: Every newly published article **MUST** be mapped and displayed on its dedicated category page:
  - **Admit Card Articles** (`category: "Admit Card"`) -> **MUST appear on `/admit-card`** (`src/pages/admit-card/index.astro`).
  - **Result Articles** (`category: "Result"`) -> **MUST appear on `/result`** (`src/pages/result/index.astro`).
  - **Syllabus Articles** (`category: "Syllabus"`) -> **MUST appear on `/syllabus`** (`src/pages/syllabus.astro`).
  - **Admission Articles** (`category: "Admission"`) -> **MUST appear on `/admission`** (`src/pages/admission/index.astro`).
  - **Answer Key Articles** (`category: "Answer Key"`) -> **MUST appear on `/answer-key`** (`src/pages/answer-key/index.astro`).
  - **Bank Job Articles** (`category: "Bank Job"`) -> **MUST appear on `/bank-recruitment`** (`src/pages/bank-recruitment/index.astro`).
- **Synchronization Standard**: When creating or updating any article, verify that both the central `articlesRegistry` (`src/constants/articles.ts`) and the dedicated category listing page array (e.g., `admitCards` on `/admit-card`, `results` on `/result`) are updated with the new item.

