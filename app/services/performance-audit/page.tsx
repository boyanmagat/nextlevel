"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PerformanceAuditPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        NEED FOR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">SPEED</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Core Web Vitals determine your SEO rank. We turn red scores into green across the board.
                    </p>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { metric: "LCP", label: "Largest Contentful Paint", target: "< 2.5s", desc: "How fast does the main content load?" },
                        { metric: "FID", label: "First Input Delay", target: "< 100ms", desc: "Is the site responsive to clicks?" },
                        { metric: "CLS", label: "Cumulative Layout Shift", target: "< 0.1", desc: "Does things jump around while loading?" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/10 rounded-2xl bg-black/40 text-center"
                        >
                            <div className="text-5xl font-black text-green-500 mb-2">{item.target}</div>
                            <div className="text-xl font-bold mb-2">{item.metric}</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">{item.label}</div>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-4 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">Our Audit Process</h2>
                <div className="space-y-6">
                    {[
                        "Full Lighthouse & PageSpeed Insights Analysis",
                        "React Profiler Component Rendering Audit",
                        "Bundle Size Optimization (Webpack/Turbo)",
                        "Third-party Script Impact Assessment",
                        "Font & Image Loading Strategy"
                    ].map((step, i) => (
                        <div key={i} className="flex items-center p-4 border border-white/10 rounded-lg bg-white/5">
                            <span className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold mr-4">{i + 1}</span>
                            <span className="text-lg">{step}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 text-center">
                <Link href="/contact" className="px-12 py-5 bg-green-600 rounded-full text-xl font-bold hover:bg-green-500 transition-colors">
                    Get Your Free Audit
                </Link>
            </section>
        </div>
    );
}
