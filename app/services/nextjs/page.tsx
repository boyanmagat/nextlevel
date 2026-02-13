import { Metadata } from "next";
import NextJsClient from "./NextJsClient";

export const metadata: Metadata = {
    title: "Next.js Development Agency | Fast & Scalable Typescript Apps",
    description: "Upgrade to Next.js for instant load times, better Google rankings, and a codebase your team will love. We are Vercel Architect experts.",
    openGraph: {
        title: "Next.js Development Agency | NextLevelDigital",
        description: "We build high-performance web apps with Next.js, React, and Sanity.io. Stop fighting your framework and start shipping.",
        url: "https://nextleveldigital.agency/services/nextjs",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function NextJsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Next.js Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Expert Next.js development services focusing on performance, SEO, and scalable architecture. Vercel deployment specialists.",
                        "serviceType": "Web Development",
                        "areaServed": "Global"
                    })
                }}
            />
            <NextJsClient />
        </>
    );
}
