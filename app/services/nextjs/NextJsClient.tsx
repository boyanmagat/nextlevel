"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { NEXT_JS_FAQS } from "@/constants/faq";
import { LandingPageGraphic, FormGraphic, CodeGraphic, DashboardGraphic } from "@/components/ServiceGraphics";

export default function NextJsClient() {
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
                        Delight your users with a website that feels like a native app. Instant load times, better Google and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">AI</span> rankings, and a content editor your marketing team will love.
                    </motion.p>
                </div>
            </section>

            {/* Educational Section */}
            <section className="py-16 px-4 bg-blue-900/10 border-y border-blue-500/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">New to Next.js?</h2>
                    <h3 className="text-3xl font-bold mb-6">It's React, but <span className="text-white">Built for Business</span>.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Instead of your website loading slowly piece-by-piece, Next.js pre-builds your platform so it loads instantly the moment a customer clicks.
                        This eliminates the loading screens that cause buyers to bounce, dramatically improves your Google rankings, and secures your platform against enterprise-level traffic spikes.
                    </p>
                </div>
            </section>

            {/* Target Audience / Right Place Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-purple-900/5"></div>
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
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            Next.js is powerful, but it's most effective for teams who care deeply about user experience.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Founders & Startups",
                                desc: "You're building something new and want it to be fast, secure, and ready to scale from day one.",
                                icon: "🚀",
                                gradient: "from-blue-500/20 to-cyan-500/20"
                            },
                            {
                                title: "Marketing Teams",
                                desc: "You need the freedom to launch landing pages and update content instantly without waiting on developers.",
                                icon: "✍️",
                                gradient: "from-pink-500/20 to-rose-500/20"
                            },
                            {
                                title: "eCommerce Brands",
                                desc: "You want a store that loads instantly, because you know that speed creates trust and drives sales.",
                                icon: "🛍️",
                                gradient: "from-amber-500/20 to-orange-500/20"
                            },
                            {
                                title: "Product Owners",
                                desc: "You want your web app to feel smooth, responsive, and premium—just like a native mobile app.",
                                icon: "✨",
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

            {/* Value Props */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Instant Conversions",
                                desc: "We utilize modern routing and streaming to ensure your pages load instantly, eliminating the friction that causes users to abandon their shopping carts.",
                                icon: "⚡"
                            },
                            {
                                title: "Bulletproof Security",
                                desc: "By handling complex logic on the server rather than the browser, your proprietary data and customer information remain completely secure and out of reach.",
                                icon: "🔒"
                            },
                            {
                                title: "Global Scale",
                                desc: "Your customers are everywhere. We deploy your platform to edge networks, ensuring sub-millisecond load times whether your user is in New York or Tokyo.",
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
                        <div className="flex-1 order-1 md:order-2">
                            <LandingPageGraphic />
                        </div>
                    </div>

                    {/* 2. Custom Forms */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <FormGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">High-Fidelity Lead Forms</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Off-the-shelf forms kill conversions. We build custom, multi-step wizards equipped with conditional logic that seamlessly route qualified leads directly into your HubSpot or Salesforce CRM.
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
                            <h4 className="text-3xl font-bold mb-4">Rapid Revenue MVPs</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Validating a new business model? We build hyper-fast, hard-coded platforms to get you to market immediately.
                                <br />
                                <strong>The Benefit:</strong> Launch weeks faster, eliminate maintenance costs, and capture your first customers. When you're ready to scale, we integrate a CMS seamlessly.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <CodeGraphic />
                        </div>
                    </div>

                    {/* 4. Dashboards (Bonus) */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <DashboardGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">SaaS Dashboards</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Turn your data into a premium product. We build deeply interactive, real-time client dashboards that keep your subscribers engaged and reduce churn.
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
                            Whether you're migrating an aging application or building a new revenue channel, our engineering accelerates your timeline.
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

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-slate-950">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">You ask. We answer.</h3>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Transitioning to a modern stack is a big decision. Here's what our clients usually want to know before diving in.
                        </p>
                    </div>

                    <FAQ items={NEXT_JS_FAQS} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center px-4 bg-gradient-to-b from-transparent to-black">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Stop losing customers to slow platforms.</h2>
                    <Link href="/request-quote" className="inline-block px-12 py-5 bg-white text-black rounded-full text-xl font-bold hover:scale-105 transition-transform">
                        Book an Audit
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
