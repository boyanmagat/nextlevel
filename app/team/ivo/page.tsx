
import { Metadata } from 'next';
import IvoProfileClient from './IvoProfileClient';

export const metadata: Metadata = {
    title: 'Ivo N. - Tech Director & Systems Architect',
    description: "Meet Ivo N., our Tech Director and Systems Architect. Specializing in Next.js, Sanity CMS, and turning mountains of analytics data into actionable insights.",
    openGraph: {
        title: 'Ivo N. - Tech Director & Systems Architect',
        description: "Meet Ivo N., our Tech Director and Systems Architect. Specializing in Next.js, Sanity CMS, and turning mountains of analytics data into actionable insights.",
        images: [
            {
                url: '/team/ivo.png',
                width: 1200,
                height: 630,
                alt: 'Ivo N. - Tech Director',
            },
        ],
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ivo N. - Tech Director & Systems Architect',
        description: "Meet Ivo N., our Tech Director and Systems Architect. Specializing in Next.js, Sanity CMS, and turning mountains of analytics data into actionable insights.",
        images: ['/team/ivo.png'],
    },
};

export default function IvoProfilePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Ivo N.",
                        "jobTitle": "Tech Director",
                        "image": "https://nextleveldigital.agency/team/ivo.png",
                        "url": "https://nextleveldigital.agency/team/ivo",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "NextLevelDigital"
                        },
                        "sameAs": [
                            "https://github.com/ivoneu",
                            "https://linkedin.com/in/ivoneu"
                        ]
                    })
                }}
            />
            <IvoProfileClient />
        </>
    );
}
