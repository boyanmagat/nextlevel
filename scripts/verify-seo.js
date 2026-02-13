// Node 18+ has native fetch
const { fetch } = global;
// Given the environment, 'fetch' is likely available (Next.js project).

const BASE_URL = 'http://localhost:3000';
const PATHS = [
    '/',
    '/about',
    '/work',
    '/contact',
    '/blog',
    '/request-quote',
    '/team',
    '/team/ivo',
    '/team/julien',
    '/services',
    '/services/nextjs',
    '/services/headless-cms',
    '/services/headless-wordpress',
    '/services/mobile-app-development',
    '/services/custom-integrations',
    '/services/custom-software',
    '/services/design-systems',
    '/services/performance-audit',
    '/faq'
];

async function checkPage(path) {
    try {
        const res = await fetch(`${BASE_URL}${path}`);
        const html = await res.text();

        const titleMatch = html.match(/<title>(.*?)<\/title>/);
        const descMatch = html.match(/<meta name="description" content="(.*?)"/);
        const ogTitleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
        const schemaMatch = html.includes('application/ld+json');

        console.log(`\n--- checking ${path} ---`);
        console.log(`Status: ${res.status}`);
        console.log(`Title: ${titleMatch ? '✅ ' + titleMatch[1].substring(0, 50) + '...' : '❌ MISSING'}`);
        console.log(`Desc:  ${descMatch ? '✅ ' + descMatch[1].substring(0, 50) + '...' : '❌ MISSING'}`);
        console.log(`OG:    ${ogTitleMatch ? '✅ ' + ogTitleMatch[1].substring(0, 50) + '...' : '❌ MISSING'}`);
        console.log(`Schema:${schemaMatch ? '✅ FOUND' : '❌ MISSING'}`);

        if (!titleMatch || !descMatch || !ogTitleMatch || !schemaMatch) {
            console.log('⚠️  WARNING: Some tags are missing!');
        }

    } catch (e) {
        console.error(`❌ Error fetching ${path}:`, e.message);
    }
}

async function main() {
    console.log("Starting SEO Verification...");
    for (const path of PATHS) {
        await checkPage(path);
    }
}

main();
