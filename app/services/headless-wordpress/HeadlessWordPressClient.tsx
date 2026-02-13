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
                        Keep the admin dashboard you love. Ditch the slow, insecure frontend. We promote WordPress from a monolith to a high-performance Content API.
                    </p>
                </div>
            </section>

            {/* Educational Section */}
            <section className="py-16 px-4 bg-blue-900/10 border-y border-blue-500/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Why Headless WordPress?</h2>
                    <h3 className="text-3xl font-bold mb-6">The best of both worlds.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        You don't have to retrain your marketing team. They can keep using WP Admin, Yoast SEO, and ACF.
                        Meanwhile, we stick a Ferrari engine (Next.js) on the frontend.
                        <br /><br />
                        <strong>Result:</strong> A site that loads in 0.8s, never gets hacked, and scales infinitely.
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
                                title: "Publishers & Media",
                                desc: "You have 10,000+ posts and a team of 20 editors who refuse to learn a new CMS.",
                                icon: "📰",
                                gradient: "from-blue-500/20 to-indigo-500/20"
                            },
                            {
                                title: "Marketing Sites",
                                desc: "You need a site that scores 100/100 on Core Web Vitals to boost your ad quality score and SEO.",
                                icon: "📈",
                                gradient: "from-cyan-500/20 to-teal-500/20"
                            },
                            {
                                title: "Plugin Victims",
                                desc: "Your current site is held together by 45 plugins and crashes whenever you update one.",
                                icon: "🧟",
                                gradient: "from-red-500/20 to-orange-500/20"
                            },
                            {
                                title: "Enterprise Security",
                                desc: "You can't afford another SQL injection vulnerability. Headless completely hides your WP Admin from the public web.",
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
                            <h4 className="text-3xl font-bold mb-4">Keep the Admin. Lose the Lag.</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We use <strong>WPGraphQL</strong> to turn your WordPress install into a robust API.
                                Your editors log into the same familiar dashboard. They hit "Publish".
                                Our servers catch the data and build a static, lightning-fast React page.
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
                            <h4 className="text-3xl font-bold mb-4">Direct Database Optimization</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Standard WordPress queries are slow. We implement custom caching layers using Redis and streamline your database queries.
                                We often see query times drop from 1.5s to 50ms.
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
                    Upgrade to Headless WP
                </Link>
            </section>
        </div>
    );
}
