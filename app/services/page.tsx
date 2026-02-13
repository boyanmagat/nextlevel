import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
    title: "Our Capabilities | Next.js, Sanity & Headless WordPress",
    description: "We offer two powerful strategies: The Hyper-Scale Stack (Next.js + Sanity) and The Flexible Classic (Headless WordPress). Choose your path.",
    openGraph: {
        title: "Capabilities & Services | NextLevelDigital",
        description: "Explore our engineering services: Next.js, Headless CMS, Mobile Apps, and Design Systems.",
        url: "https://nextleveldigital.agency/services",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function ServicesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Web Development Services",
                        "serviceType": "Headless Web Architecture",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Engineering Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Next.js Development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Headless CMS Implementation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Headless WordPress"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <ServicesClient />
        </>
    );
}
