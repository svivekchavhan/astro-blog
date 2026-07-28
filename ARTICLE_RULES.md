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

## 📌 Rule 4: Bilingual Quality Standard

- Articles must provide **fully detailed, matching content in both Marathi and English**.
- Both language sections must include complete vacancy breakdown tables, eligibility criteria, key dates, and direct action links.

---

## 📌 Rule 5: Sidebar Display Standard

- All standard article pages must display the right-hand sidebar by omitting `hideSidebar` or setting `hideSidebar={false}` on the `<Layout>` component.
