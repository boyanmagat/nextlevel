import { Metadata } from "next";
import HeadlessCMSClient from "./HeadlessCMSClient";

export const metadata: Metadata = {
    title: "Sanity.io Headless CMS Developers | Content Lake Architecture",
    description: "We decouple your content from your display using Sanity.io. Build a future-proof content lake that feeds your website, app, and marketing channels.",
    openGraph: {
        title: "Sanity.io Headless CMS Developers",
        description: "Scale your content operations with a headless architecture. Real-time collaboration, visual editing, and instant API distribution.",
        url: "https://nextleveldigital.agency/services/headless-cms",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function HeadlessCMSPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Headless CMS Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Enterprise-grade headless CMS implementation using Sanity.io. Features visual editing, content modeling, and migration services.",
                        "serviceType": "Web Development",
                        "areaServed": "Global"
                    })
                }}
            />
            <HeadlessCMSClient />
        </>
    );
}
