"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
    const services = [
        {
            category: "Core Engineering",
            items: [
                { title: "Next.js Development", href: "/services/nextjs", desc: "Server Actions, PPR, and Vercel scalability." },
                { title: "Headless CMS & Sanity", href: "/services/headless-cms", desc: "Structured content modeling and studio customization." },
                { title: "Headless WordPress", href: "/services/headless-wordpress", desc: "The familiarity of WP with the power of Next.js." }
            ]
        },
        {
            category: "Product & Scale",
            items: [
                { title: "Custom Software", href: "/services/custom-software", desc: "SaaS platforms and internal business tools." },
                { title: "Mobile Development", href: "/services/mobile-app-development", desc: "React Native apps that feel truly native." },
                { title: "Performance Audits", href: "/services/performance-audit", desc: "Core Web Vitals and architecture optimization." },
                { title: "Custom API Integrations", href: "/services/custom-integrations", desc: "Unified ecology for Marketing, Ops, and Finance tools." },
            ]
        },
        {
            category: "Design & Brand",
            items: [
                { title: "Design Systems", href: "/services/design-systems", desc: "Scalable Figma-to-code workflows." },
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen pt-24 px-4">
            <div className="max-w-7xl mx-auto w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-black mb-20 tracking-tighter"
                >
                    CAPABILITIES
                </motion.h1>

                <div className="space-y-32 mb-32">
                    {services.map((section, idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h2 className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-12 border-b border-pink-500/20 pb-4 inline-block">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.items.map((item, i) => (
                                    <Link href={item.href} key={i} className="group block">
                                        <div className="h-full p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-2 hover:border-pink-500/30">
                                            <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
                                                {item.title}
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45">→</span>
                                            </h3>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>
        </div>
    );
}
