import { Metadata } from "next";
import PerformanceAuditClient from "./PerformanceAuditClient";

export const metadata: Metadata = {
    title: "Next.js Performance Optimization | Core Web Vitals Audit",
    description: "Speed kills conversion. We audit your Next.js application, optimize Core Web Vitals (LCP, INP, CLS), and reduce bundle size for maximum performance.",
    openGraph: {
        title: "Performance Optimization & Audits | NextLevelDigital",
        description: "Expert performance audits for Next.js apps. Improve your Google ranking and user experience with sub-second load times.",
        url: "https://nextleveldigital.agency/services/performance-audit",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function PerformanceAuditPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Website Performance Audit",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Comprehensive performance auditing and optimization services for web applications, focusing on Core Web Vitals and load speed.",
                        "serviceType": "Technical Audit",
                        "areaServed": "Global"
                    })
                }}
            />
            <PerformanceAuditClient />
        </>
    );
}
