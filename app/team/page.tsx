import { Metadata } from "next";
import TeamIndexClient from "./TeamIndexClient";

export const metadata: Metadata = {
    title: "Our Team | NextLevelDigital",
    description: "Meet the obsessive engineers and designers behind NextLevelDigital. Experts in Next.js, Sanity, and Headless Architecture.",
    openGraph: {
        title: "The Team | NextLevelDigital",
        description: "Meet the obsessive engineers and designers behind NextLevelDigital.",
        url: "https://nextleveldigital.agency/team",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function TeamIndexPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "Our Team",
                        "description": "Directory of NextLevelDigital team members.",
                        "url": "https://nextleveldigital.agency/team"
                    })
                }}
            />
            <TeamIndexClient />
        </>
    );
}
