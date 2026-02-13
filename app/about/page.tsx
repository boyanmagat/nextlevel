import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About Us | NextLevelDigital",
    description: "We are a team of obsessive engineers and designers. We believe the web has lost its soul to generic templates. We're here to bring it back.",
    openGraph: {
        title: "About NextLevelDigital | The Collective",
        description: "Meet the team behind the code. We are engineers, designers, and problem solvers obsessed with performance.",
        url: "https://nextleveldigital.agency/about",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About NextLevelDigital",
                        "description": "We are a team of obsessive engineers and designers.",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "NextLevelDigital",
                            "location": {
                                "@type": "Place",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Vancouver",
                                    "addressRegion": "BC",
                                    "addressCountry": "CA"
                                }
                            }
                        }
                    })
                }}
            />
            <AboutClient />
        </>
    );
}
