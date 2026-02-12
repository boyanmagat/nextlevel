import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://nextleveldigital.ca';
    const services = [
        'custom-integrations',
        'custom-software',
        'design-systems',
        'headless-cms',
        'headless-wordpress',
        'mobile-app-development',
        'nextjs',
        'performance-audit',
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${services.map((service) => {
        return `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }).join('')}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
