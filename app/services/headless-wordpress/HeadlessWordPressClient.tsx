"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { HEADLESS_WORDPRESS_FAQS } from "@/constants/faq";
import { WPAdminGraphic, DatabaseGraphic } from "@/components/ServiceGraphics";

export default function HeadlessWordPressClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 text-white">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        WORDPRESS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">REINVENTED</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Keep the WordPress interface your team loves, while we transform your frontend into a blazing-fast, highly secure engine that drives enterprise-level conversions.
                    </p>
                </div>
            </section>

            {/* Educational Section */}
            <section className="py-16 px-4 bg-blue-900/10 border-y border-blue-500/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Why Headless WordPress?</h2>
                    <h3 className="text-3xl font-bold mb-6">The best of both worlds.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        You don't have to retrain your marketing team. They can safely keep using WP Admin, Yoast SEO, and ACF.
                        Meanwhile, we attach a modern rendering engine (Next.js) to the front.
                        <br /><br />
                        <strong>Result:</strong> A frictionless customer experience with instant load times that maximize sales, enterprise-grade security, and architecture that scales for major traffic events without crashing.
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
                            Headless WordPress is the perfect bridge for organizations deeply rooted in the WP ecosystem but desperate for modern performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Media Empires",
                                desc: "You possess thousands of articles and require your editorial team to maintain their current workflow without interrupting publishing.",
                                icon: "📰",
                                gradient: "from-blue-500/20 to-indigo-500/20"
                            },
                            {
                                title: "Growth Marketing",
                                desc: "You need perfect Core Web Vitals to slash your customer acquisition costs (CAC) and dominate organic search.",
                                icon: "📈",
                                gradient: "from-cyan-500/20 to-teal-500/20"
                            },
                            {
                                title: "Legacy Rescues",
                                desc: "Your current build is suffocating under heavy plugins, leading to slow load times and lost revenue during critical sales periods.",
                                icon: "🧟",
                                gradient: "from-red-500/20 to-orange-500/20"
                            },
                            {
                                title: "Enterprise Security",
                                desc: "You cannot risk a data breach or downtime. A headless architecture physically separates your database from the public, virtually eliminating hack vectors.",
                                icon: "🛡️",
                                gradient: "from-purple-500/20 to-violet-500/20"
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
                    <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">Modern Tech. Classic Admin.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. WP Admin */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Zero Retraining, Maximum Output</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We utilize <strong>WPGraphQL</strong> to turn your WordPress install into a robust data provider.
                                Your editors log into the exact same familiar dashboard. When they hit "Publish", our decoupled architecture automatically renders a high-performance, conversion-optimized page—instantly.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <WPAdminGraphic />
                        </div>
                    </div>

                    {/* 2. Direct Database Access */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <DatabaseGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Sub-Millisecond Data Delivery</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Standard WordPress queries are notoriously slow and cost you buyers. We implement custom edge-caching layers to streamline how your data is delivered.
                                This means no more spinning wheels at checkout and immediate content loading for your users.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-blue-950/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">WordPress De-mystified.</h3>
                    </div>
                    <FAQ items={HEADLESS_WORDPRESS_FAQS} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-blue-600 rounded-full text-xl font-bold hover:bg-blue-500 transition-colors">
                    Accelerate Your WordPress
                </Link>
            </section>
        </div>
    );
}
