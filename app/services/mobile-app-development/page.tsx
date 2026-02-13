import { Metadata } from "next";
import MobileAppClient from "./MobileAppClient";

export const metadata: Metadata = {
    title: "React Native Mobile App Development | iOS & Android",
    description: "Build high-quality iOS and Android apps from a single codebase. We use React Native to deliver native performance at half the cost of traditional development.",
    openGraph: {
        title: "React Native App Development | NextLevelDigital",
        description: "Native iOS and Android apps, built with React Native. Speed to market, code reuse, and uncompromised performance.",
        url: "https://nextleveldigital.agency/services/mobile-app-development",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function MobileAppPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Mobile App Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Cross-platform mobile application development using React Native. Delivering native iOS and Android experiences from a single codebase.",
                        "serviceType": "Mobile Development",
                        "areaServed": "Global"
                    })
                }}
            />
            <MobileAppClient />
        </>
    );
}
