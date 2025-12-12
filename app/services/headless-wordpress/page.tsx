"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeadlessWordPressPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 font-mono text-sm mb-8">
                        Next.js Front • WordPress Back
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        BEST OF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">BOTH WORLDS</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Keep the admin interface your team knows. Get the performance, security, and scalability they dream of.
                    </p>
                </div>
            </section>

            {/* Educational Section */}
            <section className="py-16 px-4 bg-blue-900/10 border-y border-blue-500/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">New to Headless WordPress?</h2>
                    <h3 className="text-3xl font-bold mb-6">Keep the admin, ditch the slow site.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        You love writing posts in WordPress, but you hate how slow and buggy the plugins make your site feel.
                        <br /><br />
                        <strong>Headless solves this.</strong> You keep logging into `wp-admin` just like you always have.
                        But we build a custom, high-speed Ferrari of a website that just <em>reads</em> from your WordPress.
                        Your visitors get speed; your team gets familiarity.
                    </p>
                </div>
            </section>

            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                    <div className="p-8">
                        <h2 className="text-4xl font-bold mb-6 text-blue-400">The WordPress Problem.</h2>
                        <p className="text-gray-400 text-lg mb-6">
                            Monolithic WordPress sites are slow, insecure, and plugin-heavy. Every plugin adds bloat, and PHP rendering holds back your Core Web Vitals.
                        </p>
                    </div>
                    <div className="p-8">
                        <h2 className="text-4xl font-bold mb-6 text-green-400">The Headless Fix.</h2>
                        <p className="text-gray-400 text-lg mb-6">
                            We use WPGraphQL to turn WordPress into a pure data source. The frontend is built in React/Next.js, hosted on the edge. Lightning fast, unhackable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "No More Caching Plugins", desc: "Static generation means pages are pre-built. No database queries on page load." },
                    { title: "Perfect SEO", desc: "We use Yoast SEO data but render it with Next.js head management for total control." },
                    { title: "Future Proof", desc: "Swap out the frontend whenever you want without migrating content." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 border border-white/10 rounded-2xl bg-black/40"
                    >
                        <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            <section className="py-24 text-center">
                <Link href="/contact" className="px-12 py-5 bg-blue-600 rounded-full text-xl font-bold hover:bg-blue-500 transition-colors">
                    Decouple Your WP
                </Link>
            </section>
        </div>
    );
}
