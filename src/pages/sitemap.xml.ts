export async function GET() {
  const siteUrl = 'https://techfixsteps.com';
  
  // Static pages
  const staticPages = [
    '',
    '/latest-job',
    '/admit-card',
    '/answer-key',
    '/admission',
    '/blog',
    '/result',
    '/contact',
    '/about',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/sitemap'
  ];

  // Dynamically find all articles in src/pages/
  const postFiles = import.meta.glob('/src/pages/*.astro');
  const mainSlugs = ['index', 'blog', 'latest-job', 'result', 'admit-card', 'answer-key', 'admission', 'about', 'contact', 'sitemap', 'privacy', 'terms', 'disclaimer'];
  
  const dynamicPages = Object.keys(postFiles)
    .map(file => {
      const slug = file.split('/').pop()?.replace('.astro', '');
      return `/${slug}`;
    })
    .filter(page => page && !mainSlugs.includes(page.replace('/', '')));

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : (page === '/latest-job' || page === '/admit-card' || page === '/answer-key' || page === '/admission') ? '0.9' : dynamicPages.includes(page) ? '0.8' : '0.5'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
