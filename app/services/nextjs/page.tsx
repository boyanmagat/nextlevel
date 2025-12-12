"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NextJsServicePage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>

                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-white mb-8"
                    >
                        <span className="w-2 h-2 bg-black rounded-full inline-block mr-2 animate-pulse"></span>
                        Vercel Architect Experts
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        NEXT<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">.JS</span> <br />
                        MASTERY
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
                    >
                        We don't just use Next.js; we push it to the edge.
                        Server Actions, PPR, and zero-compromise performance.
                    </motion.p>
                </div>
            </section>

            {/* Educational Section */}
            <section className="py-16 px-4 bg-blue-900/10 border-y border-blue-500/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">New to Next.js?</h2>
                    <h3 className="text-3xl font-bold mb-6">It's React, but <span className="text-white">Professional</span>.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Imagine if your website was pre-printed before the user asked for it, instead of being drawn from scratch every time they clicked.
                        That's Next.js. It handles the heavy lifting on our global servers so your users get instant interactions, better SEO, and longer battery life on their phones.
                    </p>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "App Router Natives",
                                desc: "We abandoned the `pages` directory years ago. We build exclusively with the modern App Router for nested layouts and streaming.",
                                icon: "⚡"
                            },
                            {
                                title: "Server Actions",
                                desc: "Forget API routes. We write type-safe functions that execute on the server and return data directly to your components.",
                                icon: "🔒"
                            },
                            {
                                title: "Edge Ready",
                                desc: "Your users are everywhere. Your code should be too. We deploy to Vercel's Edge Network for sub-millisecond latency.",
                                icon: "🌍"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 border border-white/10 rounded-2xl bg-black/40 hover:border-white/30 transition-colors"
                            >
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases - What we can build */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Use Cases</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">What can we build?</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. Landing Pages */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">High-Conversion Landing Pages</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Stopped paying for Unbounce or Instapage? We build hard-coded marketing pages that load instantly.
                                <br />
                                <strong>Why this makes sense:</strong> 0.1s delay = 1% lost revenue. Our landing pages score 100/100 on Lighthouse, ensuring your ad spend isn't wasted on bounces.
                            </p>
                            <ul className="space-y-2">
                                {["A/B Testing Ready", "Instant Analytics Integration", "Zero Layout Shift"].map(item => (
                                    <li key={item} className="flex items-center text-pink-400">
                                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl order-1 md:order-2">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">🚀</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Custom Forms */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">📝</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Complex React Forms</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Typeform is great, but sometimes you need real logic. Multi-step wizards, file uploads, conditional branching, and direct integration with your CRM (HubSpot, Salesforce).
                            </p>
                            <ul className="space-y-2">
                                {["Zod Schema Validation", "Save Progress Locally", "GDPR Compliant"].map(item => (
                                    <li key={item} className="flex items-center text-blue-400">
                                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 3. Pure Code MVP */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Pure Code (No CMS) MVP</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Just starting out? You don't need a CMS yet. We build a "Pure Website" where content is hard-coded but structured.
                                <br />
                                <strong>The Benefit:</strong> Extremely fast to build, zero maintenance costs, hack-proof. When you're ready, we can plug in a CMS later without a rewrite.
                            </p>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl order-1 md:order-2">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">💎</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Dashboards (Bonus) */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">📊</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">SaaS Dashboards</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Need to show data to your users? We build interactive, client-side dashboards using SWR or React Query. Real-time charts, data tables, and user management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 px-4 max-w-7xl mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-4xl font-bold mb-6">How we help.</h2>
                        <p className="text-gray-400">
                            Whether you're migrating from a legacy React app or building the next big SaaS, our engineering standards are non-negotiable.
                        </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 gap-4">
                        {[
                            { name: "React to Next.js Migration", tags: ["SEO Lift", "Performance"] },
                            { name: "Codebase Audits", tags: ["Security", "Best Practices"] },
                            { name: "Vercel Deployment Optimization", tags: ["Cost Reduction", "Speed"] },
                            { name: "Headless Integration", tags: ["Sanity", "Shopify"] }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-between p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
                            >
                                <span className="text-xl font-bold">{service.name}</span>
                                <div className="flex items-center gap-4">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded hidden sm:inline-block">
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="text-white group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center px-4 bg-gradient-to-b from-transparent to-black">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Stop fighting your framework.</h2>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-white text-black rounded-full text-xl font-bold hover:scale-105 transition-transform">
                        Book an Audit
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
