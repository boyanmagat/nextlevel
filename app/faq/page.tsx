import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import { ALL_FAQS } from "@/constants/faq";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | NextLevelDigital",
    description: "Common questions about Headless CMS, Next.js, and our development process.",
    openGraph: {
        title: "Frequently Asked Questions | NextLevelDigital",
        description: "Everything you need to know about our process, technology (Next.js, Sanity), and pricing.",
        url: "https://nextleveldigital.agency/faq",
        siteName: "NextLevelDigital",
        locale: "en_US",
        type: "website",
    },
};

export default function FAQPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 px-4 bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": ALL_FAQS.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.detailedAnswer || faq.answer
                            }
                        }))
                    })
                }}
            />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Frequently Asked <span className="text-pink-500">Questions</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Everything you need to know about our process, technology, and pricing.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* AI & Efficiency */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 border-b border-blue-900/30 pb-4">
                            AI & Efficiency
                        </h2>
                        <FAQ items={ALL_FAQS.filter(q => q.category === "AI Efficiency")} showLink={false} />
                    </section>

                    {/* General / Next.js */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 text-blue-400 border-b border-blue-900/30 pb-4">Next.js & Process</h2>
                        <FAQ items={ALL_FAQS.filter(q => q.category === "Next.js" || q.category === "General")} showLink={false} />
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-8 text-pink-400 border-b border-pink-900/30 pb-4">Headless CMS (Sanity)</h2>
                        <FAQ items={ALL_FAQS.filter(q => q.category === "Headless CMS")} showLink={false} />
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-8 text-blue-400 border-b border-blue-900/30 pb-4">Headless WordPress</h2>
                        <FAQ items={ALL_FAQS.filter(q => q.category === "Headless WordPress")} showLink={false} />
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-8 text-cyan-400 border-b border-cyan-900/30 pb-4">Mobile App Development</h2>
                        <FAQ items={ALL_FAQS.filter(q => q.category === "Mobile")} showLink={false} />
                    </section>
                </div>
            </div>
        </div>
    );
}
