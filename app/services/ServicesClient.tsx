"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesClient() {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Ambient Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
                    >
                        DRIVING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">GROWTH</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        We engineer high-performance platforms that capture revenue and scale seamlessly.
                        Choose the strategy that perfectly aligns with your business goals.
                    </motion.p>
                </div>
            </section>

            {/* The Two Paths Strategy */}
            <section className="py-24 px-4 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                        {/* Path 1: Next.js + Sanity */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-6xl">🚀</span>
                            </div>
                            <h3 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Strategy A</h3>
                            <h2 className="text-4xl font-bold mb-6">The Hyper-Scale Stack.</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed h-[80px]">
                                Next.js + Sanity.io. The ultimate choice for ambitious brands that need lightning-fast load times to maximize conversions, unparalleled creative freedom, and instant global reach.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {["Next.js 15", "Sanity Studio", "Vercel Edge", "React Server Components"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-blue-400">{tech}</span>
                                ))}
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center text-white">
                                    <Link href="/services/nextjs" className="flex items-center group/link w-full">
                                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover/link:bg-blue-500 transition-colors">→</span>
                                        <span className="font-bold border-b border-transparent group-hover/link:border-white transition-colors">Next.js Development</span>
                                    </Link>
                                </li>
                                <li className="flex items-center text-white">
                                    <Link href="/services/headless-cms" className="flex items-center group/link w-full">
                                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover/link:bg-blue-500 transition-colors">→</span>
                                        <span className="font-bold border-b border-transparent group-hover/link:border-white transition-colors">Headless CMS (Sanity)</span>
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Path 2: Headless WordPress */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative p-10 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-6xl">📝</span>
                            </div>
                            <h3 className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-sm">Strategy B</h3>
                            <h2 className="text-4xl font-bold mb-6">The Flexible Classic.</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed h-[80px]">
                                Next.js + WordPress. Keep the familiar interface your marketing team loves, while supercharging your frontend for drastically higher conversion rates and bullet-proof security.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {["WordPress API", "ACF Pro", "WP GraphQL", "Next.js Frontend"].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-blue-400">{tech}</span>
                                ))}
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center text-white">
                                    <Link href="/services/headless-wordpress" className="flex items-center group/link w-full">
                                        <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 group-hover/link:bg-blue-500 transition-colors">→</span>
                                        <span className="font-bold border-b border-transparent group-hover/link:border-white transition-colors">Headless WordPress Development</span>
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specialized Capabilities Grid */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold">Specialized Capabilities</h2>
                        <p className="text-gray-400 mt-4">Targeted solutions for specific growth barriers.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Custom Software",
                                href: "/services/custom-software",
                                desc: "Bespoke SaaS platforms and internal tools that automate logic, save labor hours, and drive recurring revenue.",
                                icon: "⚡"
                            },
                            {
                                title: "Mobile Apps",
                                href: "/services/mobile-app-development",
                                desc: "Engaging mobile experiences that build loyalty and put your brand directly in your customers' pockets.",
                                icon: "📱"
                            },
                            {
                                title: "Performance Audits",
                                href: "/services/performance-audit",
                                desc: "Deep-dive analysis to eliminate bottlenecks and optimize your platform for peak SEO and conversion performance.",
                                icon: "🔍"
                            },
                            {
                                title: "Design Systems",
                                href: "/services/design-systems",
                                desc: "Premium, scalable interface libraries that establish brand trust and ensure a frictionless customer journey.",
                                icon: "🎨"
                            },
                            {
                                title: "API Integrations",
                                href: "/services/custom-integrations",
                                desc: "Seamlessly connect your ERP, CRM, and Marketing tools to eliminate data silos and accelerate workflows.",
                                icon: "🔗"
                            }
                        ].map((item, i) => (
                            <Link href={item.href} key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="h-full p-8 rounded-2xl bg-black border border-white/10 hover:bg-white/5 hover:border-pink-500/50 transition-all group"
                                >
                                    <div className="text-4xl mb-6 bg-white/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-pink-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to scale your revenue?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Whether you choose the Hyper-Scale Stack or the Flexible Classic, we deliver platforms expressly built to convert.
                    </p>
                    <Link href="/request-quote" className="inline-block px-12 py-5 bg-white text-black rounded-full text-xl font-bold hover:bg-gray-200 transition-colors transform hover:scale-105">
                        Start Your Project
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
