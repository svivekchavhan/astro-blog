export async function GET() {
  const siteUrl = 'https://techfixsteps.com';
  
  // Static pages
  const staticPages = [
    '',
    '/blog',
    '/result',
    '/contact',
    '/about',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/sitemap'
  ];

  // Dynamically find all blog posts in src/pages/blog/
  const postFiles = import.meta.glob('/src/pages/blog/*.astro');
  const dynamicPages = Object.keys(postFiles).map(file => {
    const name = file.split('/').pop()?.replace('.astro', '');
    return `/blog/${name}`;
  });

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/blog/') ? '0.8' : '0.5'}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
