import { Metadata } from "next";
import CustomSoftwareClient from "./CustomSoftwareClient";

export const metadata: Metadata = {
    title: "Custom SaaS & Internal Tool Development | Bespoke Software",
    description: "We build custom software, SaaS platforms, and internal tools that scale. Own your code, own your data, and outpace the competition.",
    openGraph: {
        title: "Custom Software Development | NextLevelDigital",
        description: "Bespoke SaaS and Internal Tools. Secure, scalable, and built specifically for your business logic. 100% code ownership.",
        url: "https://nextleveldigital.agency/services/custom-software",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function CustomSoftwarePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Custom Software Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Full-cycle custom software development services including SaaS architecture, internal tools, and legacy system modernization.",
                        "serviceType": "Software Development",
                        "areaServed": "Global"
                    })
                }}
            />
            <CustomSoftwareClient />
        </>
    );
}
