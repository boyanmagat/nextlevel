import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://nextleveldigital.ca';
    const pages = [
        '',
        '/about',
        '/contact',
        '/work',
        '/request-quote',
        '/services',
        '/blog',
        '/faq',
        '/team/ivo',
        '/team/julien',
        '/thank-you'
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((path) => {
        return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${path === '' ? 'yearly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    }).join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
