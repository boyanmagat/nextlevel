import { NextResponse } from 'next/server';
import { CASE_STUDIES } from '../work/data';

export async function GET() {
    const baseUrl = 'https://nextleveldigital.ca';

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${CASE_STUDIES.map((study) => {
        return `
  <url>
    <loc>${baseUrl}/work/${study.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    }).join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
