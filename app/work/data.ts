export interface CaseStudy {
    slug: string;
    client: string;
    industry: string;
    service: string;
    challenge: string;
    solution: string;
    results: { label: string; value: string }[];
    techStack: string[];
    images: { hero: string; }
    // Add more fields as needed for rich content
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "wordpress-vs-nextjs",
        client: "Clash of Tech",
        industry: "Commercial Strategy",
        service: "Technical Strategy & Audit",
        challenge: "Quantifying the commercial impact and revenue loss associated with maintaining a legacy WordPress architecture versus adopting a modern Next.js framework.",
        solution: "A head-to-head architectural analysis demonstrating how infrastructure choices directly dictate conversion rates, organic search rankings, and user retention.",
        results: [
            { label: "Mobile Bounce Rate Reduction", value: "-41%" },
            { label: "Next.js Mobile Output", value: "78" },
            { label: "WP Mobile Output", value: "52" }
        ],
        techStack: ["Technical Strategy", "Performance Audit", "Conversion Optimization"],
        images: {
            hero: "/work/clash_hero.png"
        }
    }
];
