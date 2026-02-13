import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "NextLevelDigital | Headless CMS & Next.js Agency",
  description: "We build high-performance headless websites with Next.js and Sanity.io. Faster, more secure, and easier to manage than WordPress.",
  openGraph: {
    title: "NextLevelDigital | Headless websites with Next.js",
    description: "We are a creative engineering agency specializing in Next.js, Sanity.io, and high-performance web applications.",
    url: "https://nextleveldigital.agency",
    siteName: "NextLevelDigital",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NextLevelDigital",
            "url": "https://nextleveldigital.agency",
            "logo": "https://nextleveldigital.agency/logo.png",
            "sameAs": [
              "https://twitter.com/nextleveldigital",
              "https://linkedin.com/company/nextleveldigital"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-555-5555",
              "contactType": "coders"
            }
          })
        }}
      />
      <HomeClient />
    </>
  );
}
