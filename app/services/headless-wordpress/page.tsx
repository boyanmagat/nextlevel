import { Metadata } from "next";
import HeadlessWordPressClient from "./HeadlessWordPressClient";

export const metadata: Metadata = {
    title: "Headless WordPress Development | Next.js Frontend + WP Backend",
    description: "Keep the WordPress admin you love, but get the speed and security of Next.js. We specialize in high-performance Headless WordPress architectures using WPGraphQL.",
    openGraph: {
        title: "Headless WordPress Development | NextLevelDigital",
        description: "Transform your WordPress site into a modern, lightning-fast web app. Zero layout shift, instant transitions, and familiar content editing.",
        url: "https://nextleveldigital.agency/services/headless-wordpress",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function HeadlessWordPressPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Headless WordPress Development",
                        "provider": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "description": "Expert Headless WordPress development using Next.js, Faust.js, and WPGraphQL. Modernizing legacy WordPress sites without changing the editorial workflow.",
                        "serviceType": "Web Development",
                        "areaServed": "Global"
                    })
                }}
            />
            <HeadlessWordPressClient />
        </>
    );
}
