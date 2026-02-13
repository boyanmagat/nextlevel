import { Metadata } from "next";
import DesignSystemsClient from "./DesignSystemsClient";

export const metadata: Metadata = {
    title: "Design Systems & UI Kits | React Component Libraries",
    description: "Scale your design and development with a custom Design System. We build pixel-perfect React component libraries documented in Storybook.",
    openGraph: {
        title: "Design Systems & UI Kits | NextLevelDigital",
        description: "Bridge the gap between design and code. Custom React component libraries, Figma token sync, and Storybook documentation.",
        url: "https://nextleveldigital.agency/services/design-systems",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function DesignSystemsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Design Systems Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Creation and maintenance of design systems, UI component libraries (React/Vue), and documentation sites using Storybook.",
                        "serviceType": "Web Design",
                        "areaServed": "Global"
                    })
                }}
            />
            <DesignSystemsClient />
        </>
    );
}
