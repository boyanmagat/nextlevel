import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Start Your Project",
    description: "Ready to build something extraordinary? Contact our team in Vancouver to discuss your Next.js or Sanity project.",
    openGraph: {
        title: "Contact NextLevelDigital",
        description: "Let's talk about your project. We specialize in high-performance web development.",
        url: "https://nextleveldigital.agency/contact",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact NextLevelDigital",
                        "description": "Contact form and details for NextLevelDigital.",
                        "url": "https://nextleveldigital.agency/contact"
                    })
                }}
            />
            <ContactClient />
        </>
    );
}
