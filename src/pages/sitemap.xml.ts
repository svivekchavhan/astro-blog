import { MAHARASHTRA_DISTRICTS } from '../constants/districts';
import { articlesRegistry } from '../constants/articles';
import { QUALIFICATION_OPTIONS, SECTOR_OPTIONS } from '../constants/jobFilterData';

export async function GET() {
  const siteUrl = 'https://mahasandhi.in';
  
  // District pages
  const districtPages = MAHARASHTRA_DISTRICTS.map(d => `/district/${d.slug}`);

  // Category pages
  const categoryPages = [...QUALIFICATION_OPTIONS, ...SECTOR_OPTIONS]
    .filter(opt => opt.slug !== "all")
    .map(opt => `/category/${opt.slug}`);
  
  // Static pages
  const staticPages = [
    '',
    '/current-recruitment',
    '/10th-pass-government-jobs-maharashtra',
    '/walk-in-jobs',
    '/bank-recruitment',
    '/sbi-recruitment',
    '/naukri-updates',
    '/mega-recruitment',
    '/admit-card',
    '/answer-key',
    '/admission',
    '/blog',
    '/result',
    '/contact-us',
    '/about-us',
    '/privacy-policy',
    '/terms-of-service',
    '/disclaimer',
    '/sitemap',
    '/mpsc',
    '/mpsc/mpsc-current-affairs',
    '/mpsc/mpsc-group-c-syllabus-2026',
    '/mpsc/mpsc-exam-details-information',
    '/calculator',
    '/mpsc-age-calculator-marathi',
    '/sgpa-cgpa-calculator',
    '/maharashtra-10th-ssc-board',
    '/maharashtra-12th-hsc-board'
  ];

  // Article Pages from central articlesRegistry (automatically includes every new post)
  const articleSlugs = articlesRegistry.map((art) => art.slug);

  // Dynamic Astro pages fallback for any page files in src/pages
  const postFiles = import.meta.glob('/src/pages/**/*.astro');
  const nonArticleFiles = [
    "index.astro",
    "current-recruitment.astro",
    "walk-in-jobs.astro",
    "bank-recruitment.astro",
    "sbi-recruitment.astro",
    "naukri-updates.astro",
    "mega-recruitment.astro",
    "result.astro",
    "admit-card.astro",
    "answer-key.astro",
    "admission.astro",
    "about-us.astro",
    "contact-us.astro",
    "sitemap.astro",
    "privacy-policy.astro",
    "terms-of-service.astro",
    "disclaimer.astro",
    "blog.astro",
    "404.astro",
    "mpsc.astro",
    "calculator.astro",
    "sgpa-cgpa-calculator.astro",
    "maharashtra-10th-ssc-board.astro",
    "maharashtra-12th-hsc-board.astro",
    "admit-card-article-template.astro",
    "article-template.astro"
  ];
  
  const additionalAstroPages = Object.keys(postFiles)
    .filter((file) => {
      const filename = file.split('/').pop() || "";
      return !nonArticleFiles.includes(filename) && !filename.includes("[");
    })
    .map(file => {
      const slug = '/' + file.replace('/src/pages/', '').replace('.astro', '');
      return slug;
    });

  // Combine and deduplicate all pages
  const allArticlePages = Array.from(new Set([...articleSlugs, ...additionalAstroPages]));
  const allPages = Array.from(new Set([...staticPages, ...categoryPages, ...districtPages, ...allArticlePages]));

  const nowIso = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${page === '' ? `${siteUrl}/` : `${siteUrl}${page}`}</loc>
    <lastmod>${nowIso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : (page === '/current-recruitment' || page === '/admit-card' || page === '/answer-key' || page === '/admission') ? '0.9' : allArticlePages.includes(page) ? '0.8' : '0.5'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
