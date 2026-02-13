"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { LighthouseScoreGraphic, BundleSizeGraphic } from "@/components/ServiceGraphics";

const PERFORMANCE_FAQS = [
    {
        question: "How long does an audit take?",
        answer: "Typically 3-5 days. We perform a deep analysis of your codebase, server configuration, and third-party scripts.",
        category: "Performance"
    },
    {
        question: "Do you fix the issues you find?",
        answer: "Yes. We offer two packages: 'Audit Only' (Report) and 'Audit + Fix' (Implementation). Most clients choose the latter.",
        category: "Performance"
    },
    {
        question: "Will this improve my Google ranking?",
        answer: "Yes. Core Web Vitals (Speed) are a confirmed ranking factor. Faster sites rank higher and repel fewer users.",
        category: "Performance"
    }
];

export default function PerformanceAuditClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 text-white">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        SPEED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">KILLS</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Slow websites kill conversion rates. We audit, analyze, and optimize your Next.js application for maximum velocity.
                    </p>
                </div>
            </section>

            {/* Right Fit Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Is this the right fit for you?
                        </motion.h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            If you are losing customers because your site takes 5 seconds to load, this is for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "E-Commerce",
                                desc: "Amazon found that every 100ms of latency cost them 1% in sales. You cannot afford a slow checkout.",
                                icon: "🛒",
                                gradient: "from-red-500/20 to-orange-500/20"
                            },
                            {
                                title: "SaaS Apps",
                                desc: "Users expect your web app to feel like separate desktop software. Laggy interactions lead to churn.",
                                icon: "⚡",
                                gradient: "from-blue-500/20 to-cyan-500/20"
                            },
                            {
                                title: "SEO Driven",
                                desc: "You create great content but are losing traffic to competitors because they pass Core Web Vitals and you don't.",
                                icon: "🔍",
                                gradient: "from-green-500/20 to-emerald-500/20"
                            },
                            {
                                title: "Legacy Codebases",
                                desc: "Your app has grown over 3 years and now includes 5MB of unused JavaScript that slows everything down.",
                                icon: "🕸️",
                                gradient: "from-slate-500/20 to-gray-500/20"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:border-white/30 transition-all hover:scale-[1.02] cursor-default`}
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">Optimization Engineering.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. Core Web Vitals */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Core Web Vitals Optimization</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We target the metrics that Google cares about: LCP (Loading), INP (Interactivity), and CLS (Visual Stability).
                                We optimize images, deliver critical CSS, and defer non-essential scripts.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <LighthouseScoreGraphic />
                        </div>
                    </div>

                    {/* 2. Bundle Analysis */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <BundleSizeGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Bundle Size Reduction</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We analyze your webpack/Turbo bundle to find heavy dependencies.
                                We implement tree-shaking and code-splitting so users only download the code they actually need for the current page.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-red-950/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-red-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Faster is Better.</h3>
                    </div>
                    <FAQ items={PERFORMANCE_FAQS} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-red-600 rounded-full text-xl font-bold hover:bg-red-500 transition-colors">
                    Speed Up My Site
                </Link>
            </section>
        </div>
    );
}
