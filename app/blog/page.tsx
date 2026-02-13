import { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
    title: "Insights | Engineering & Design Blog",
    description: "Deep dives into Next.js, Sanity, Headless CMS architecture, and performance optimization.",
    openGraph: {
        title: "Insights | NextLevelDigital Blog",
        description: "Read our latest thoughts on web development, design systems, and headless architecture.",
        url: "https://nextleveldigital.agency/blog",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "NextLevelDigital Insights",
                        "description": "A blog about web engineering and design.",
                        "url": "https://nextleveldigital.agency/blog"
                    })
                }}
            />
            <BlogClient />
        </>
    );
}
