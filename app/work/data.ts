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
        industry: "Performance",
        service: "Technical Audit",
        challenge: "Determining the true performance delta between an optimized legacy WordPress setup and a standard Next.js implementation.",
        solution: "A head-to-head comparison builds using identical design and structure to isolate the impact of the underlying architectural choices.",
        results: [
            { label: "Mobile Speed Index", value: "-41%" },
            { label: "Next.js Mobile", value: "78" },
            { label: "WP Mobile", value: "52" }
        ],
        techStack: ["WordPress", "Next.js", "PHP", "Node.js"],
        images: {
            hero: "/work/clash_hero.png"
        }
    }
];
