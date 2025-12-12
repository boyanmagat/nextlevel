"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeadlessCMSPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        CONTENT <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">UNCHAINED</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Stop letting your CMS dictate your design. We decouple your data from your display using Sanity.io.
                    </p>
                </div>
            </section>

            {/* Educational Section */}
            <section className="py-16 px-4 bg-pink-900/10 border-y border-pink-500/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-pink-400 tracking-widest uppercase mb-4">New to Headless CMS?</h2>
                    <h3 className="text-3xl font-bold mb-6">The "Headless" Metaphor.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Traditional websites have the "head" (the front-end design) glued to the "body" (the database).
                        If you want to redesign the site, you have to rebuild everything.
                        <br /><br />
                        <strong>We chop the head off.</strong> Your content lives in a separate, secure vault (Sanity).
                        We can build a Website, an App, or a Storefront that all pull from that same vault. Change your design without touching your data.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Structured Content",
                            desc: "We treat content as data. Create once, publish everywhere (Web, App, Watch, Kiosk).",
                            icon: "📦"
                        },
                        {
                            title: "Sanity Studio",
                            desc: "A real-time collaborative editor that your marketing team will actually love using.",
                            icon: "✏️"
                        },
                        {
                            title: "Visual Editing",
                            desc: "Click-to-edit previews directly in the Next.js frontend. No more guessing.",
                            icon: "👁️"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border border-white/10 rounded-2xl bg-black/40"
                        >
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stack Detail */}
            <section className="py-24 px-4 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-6">Why Sanity?</h2>
                        <p className="text-gray-400 mb-6 text-lg">
                            Traditional CMSs (Contentful, Strapi) charge for API calls and limit your schema. Sanity gives us a fully programmable GROQ API and unlimited flexibility.
                        </p>
                        <ul className="space-y-4">
                            {["Real-time Collaboration", "Image Pipeline & Hotspots", "Plugin Ecosystem"].map(feat => (
                                <li key={feat} className="flex items-center text-pink-500 font-bold">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 bg-gray-900 p-8 rounded-2xl border border-white/10 font-mono text-sm text-gray-300">
                        <div className="text-pink-500 mb-2">// schema.ts</div>
                        <pre>
                            {`defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' }
    })
  ]
})`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/contact" className="px-12 py-5 bg-pink-600 rounded-full text-xl font-bold hover:bg-pink-500 transition-colors">
                    Migrate to Headless
                </Link>
            </section>
        </div>
    );
}
