import { Metadata } from "next";
import CustomIntegrationsClient from "./CustomIntegrationsClient";

export const metadata: Metadata = {
    title: "API Integrations & Middleware Development | System Architects",
    description: "Eliminate data silos. We build custom middleware to sync data between your CRM, ERP, and payment gateways. Enterprise-grade API orchestration.",
    openGraph: {
        title: "API Integrations & Middleware | NextLevelDigital",
        description: "Connect your disjointed systems. Real-time data sync, error handling, and robust API orchestration for scaling businesses.",
        url: "https://nextleveldigital.agency/services/custom-integrations",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function CustomIntegrationsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Custom API Integrations",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Development of custom middleware, API integrations, and data synchronization pipelines for enterprise systems.",
                        "serviceType": "Software Integration",
                        "areaServed": "Global"
                    })
                }}
            />
            <CustomIntegrationsClient />
        </>
    );
}
