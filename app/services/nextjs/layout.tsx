import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js Development Agency | Speed & Performance Experts",
    description: "Delight your users with a website that feels like a native app. We build high-performance Next.js sites with Sanity CMS that boost SEO and conversion.",
    keywords: ["Next.js Agency", "React Development", "Headless CMS", "Sanity.io", "Vercel Experts", "Web Performance", "NextLevel Digital"],
    openGraph: {
        title: "Next.js Development Agency | Speed & Performance Experts",
        description: "Delight your users with a website that feels like a native app. We build high-performance Next.js sites with Sanity CMS that boost SEO and conversion.",
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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Next.js Development",
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
    };

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
