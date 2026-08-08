import { MAHARASHTRA_DISTRICTS } from '../constants/districts';

export async function GET() {
  const siteUrl = 'https://mahasandhi.in';
  
  // District pages
  const districtPages = MAHARASHTRA_DISTRICTS.map(d => `/district/${d.slug}`);
  
  // Static pages
  const staticPages = [
    '',
    '/current-recruitment',
    '/10th-pass-government-jobs-maharashtra',
    '/walk-in-jobs',
    '/bank-recruitment',
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
    '/calculator',
    '/mpsc-age-calculator-marathi',
    '/sgpa-cgpa-calculator'
  ];

  // Dynamically find all articles in src/pages/
  const postFiles = import.meta.glob('/src/pages/**/*.astro');
  const nonArticleFiles = [
    "index.astro",
    "current-recruitment.astro",
    "walk-in-jobs.astro",
    "bank-recruitment.astro",
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
    "mpsc-exam-details-information.astro",
    "calculator.astro",
    "age-calculator.astro",
    "sgpa-cgpa-calculator.astro",
    "admit-card-article-template.astro",
    "article-template.astro"
  ];
  
  const dynamicPages = Object.keys(postFiles)
    .filter((file) => {
      const filename = file.split('/').pop() || "";
      return !nonArticleFiles.includes(filename) && filename !== "index.astro" && !filename.includes("[");
    })
    .map(file => {
      const slug = file.replace('/src/pages/', '').replace('.astro', '');
      return `/${slug}`;
    });

  const allPages = [...staticPages, ...districtPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : (page === '/current-recruitment' || page === '/admit-card' || page === '/answer-key' || page === '/admission') ? '0.9' : dynamicPages.includes(page) ? '0.8' : '0.5'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
