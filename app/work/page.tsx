import { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
    title: "Our Work | Case Studies & Projects",
    description: "A collection of high-performance digital experiences. Next.js, Sanity, and headless commerce implementations for global brands.",
    openGraph: {
        title: "Selected Work | NextLevelDigital",
        description: "Explore our portfolio of high-performance websites and applications.",
        url: "https://nextleveldigital.agency/work",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function WorkPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Our Work",
                        "description": "Portfolio of NextLevelDigital projects.",
                        "url": "https://nextleveldigital.agency/work"
                    })
                }}
            />
            <WorkClient />
        </>
    );
}
