import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js Development Agency | Speed & Performance Experts",
    description: "Delight your users with a website that feels like a native app. Instant load times, better Google and AI rankings, and a content editor your marketing team will love.",
    keywords: ["Next.js Agency", "React Development", "Headless CMS", "Sanity.io", "Vercel Experts", "Web Performance", "NextLevel Digital"],
    openGraph: {
        title: "Next.js Development Agency | Speed & Performance Experts",
        description: "Delight your users with a website that feels like a native app. Instant load times, better Google and AI rankings, and a content editor your marketing team will love.",
        url: "https://nextleveldigital.ca/services/nextjs",
        siteName: "NextLevel Digital",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Next.js Development Agency | Speed & Performance Experts",
        description: "Delight your users with a website that feels like a native app. We build high-performance Next.js sites with Sanity CMS that boost SEO and conversion.",
    },
    alternates: {
        canonical: "https://nextleveldigital.ca/services/nextjs",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Next.js Development Agency",
            "provider": {
                "@type": "Organization",
                "name": "NextLevel Digital",
                "url": "https://nextleveldigital.ca"
            },
            "description": "High-performance React and Next.js development services specialized in headless architecture and Vercel deployment.",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Next.js Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Next.js Migration"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Headless CMS Integration"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Performance Audits"
                        }
                    }
                ]
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Will switching to Next.js negatively impact my SEO?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, quite the opposite. Next.js is designed precisely for performance and SEO dominance. Features like Server-Side Rendering (SSR) ensure search engines can crawl your full content immediately, unlike standard React apps. Plus, faster load times (Core Web Vitals) directly improve your Google rankings."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why choose Next.js over WordPress?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Speed, Security, and Scalability. WordPress relies on a heavy ecosystem of plugins that often slow you down and introduce security vulnerabilities. Next.js sends pre-built, optimized pages to your users instantly. It's the engineering difference between a family sedan and a Formula 1 car."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is it hard for my marketing team to manage content?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not at all. We pair Next.js with Sanity CMS. Your team gets a visual, real-time editor that feels like a website builder (drag-and-drop, live previews), but it produces clean, enterprise-grade code in the background. You get the best of both worlds."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Next.js handle complex e-commerce?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It is the industry standard for modern e-commerce. From Nike to TikTok, big brands use Next.js. You get instant page transitions, dynamic product availability, and a checkout flow that never lags, which directly increases conversion rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does it cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Projects typically range from $5k to $50k+. But the real question is ROI. Our high-performance sites lower ad costs and boost conversions, often paying for themselves within the first year. It's an investment, not an expense."
                    }
                }
            ]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
