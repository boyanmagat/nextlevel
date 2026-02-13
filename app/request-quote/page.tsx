import { Metadata } from "next";
import RequestQuoteClient from "./RequestQuoteClient";

export const metadata: Metadata = {
    title: "Start Your Project | Request a Quote",
    description: "Tell us about your project. Next.js, Sanity, and custom software development services.",
    openGraph: {
        title: "Start Your Project | NextLevelDigital",
        description: "Ready to build? Fill out our project inquiry form.",
        url: "https://nextleveldigital.agency/request-quote",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function RequestQuotePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Request a Quote",
                        "url": "https://nextleveldigital.agency/request-quote"
                    })
                }}
            />
            <RequestQuoteClient />
        </>
    );
}
