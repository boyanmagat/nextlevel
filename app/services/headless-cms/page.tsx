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
                        SANITY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">UNCHAINED</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Stop letting your CMS dictate your design. We decouple your data from your display using Sanity.io.
                    </p>
                </div>
            </section>

            {/* Educational Section - Headless */}
            <section className="py-16 px-4 bg-pink-900/10 border-y border-pink-500/20">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-sm font-bold text-pink-400 tracking-widest uppercase mb-4">New to Headless CMS?</h2>
                    <h3 className="text-3xl font-bold mb-6">The "Headless" Metaphor.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Traditional websites have the "head" (the front-end design) glued to the "body" (the database).
                        If you want to redesign the site, you have to rebuild everything.
                        <br /><br />
                        <strong>We chop the head off.</strong> Your content lives in a separate, secure vault.
                        We can build a Website, an App, or a Storefront that all pull from that same vault. Change your design without touching your data.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto text-center border-t border-pink-500/20 pt-16">
                    <h2 className="text-sm font-bold text-orange-400 tracking-widest uppercase mb-4">New to Sanity?</h2>
                    <h3 className="text-3xl font-bold mb-6">Not just a CMS. A Content Lake.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Most tools treat content as "Pages". Sanity treats content as "Data".
                        This means your product descriptions, team bios, and legal text exist as structured objects—not blobs of HTML.
                        <br /><br />
                        <strong>The Result:</strong> You can push that same content to your Next.js website, your iOS app, and even your in-store kiosks.
                        Plus, the "Sanity Studio" offers real-time collaboration, just like Google Docs for your content team.
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

            {/* Use Cases */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Use Cases</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">More than just a blog.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. Content Apps */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Multi-Platform Content Apps</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                You have a website, an iOS app, and a newsletter. Do you copy-paste your content three times?
                                <br />
                                <strong>The Fix:</strong> We build a "Content App" in Sanity. You write once. We distribute it via API to every platform instantly.
                            </p>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl order-1 md:order-2">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">📱</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Migrating from WP */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">🔄</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Migrating from WordPress</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Tired of plugin conflicts and "Error establishing a database connection"?
                                We write scripts to export all your existing WP posts, authors, and images directly into Sanity. Zero data loss.
                            </p>
                        </div>
                    </div>

                    {/* 3. Visual Editing */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Click-to-Edit Visual Builder</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Marketing teams fear Headless because they lose the "Page Builder". Not with us.
                                <br />
                                We implement <strong>Sanity Presentation Mode</strong> (Overlays). You browse your live website, click any text or image, and edit it right there.
                            </p>
                            <ul className="space-y-2">
                                {["Drag & Drop Page Sections", "Live Real-Time Updates", "Device Preview (Mobile/Desktop)"].map(item => (
                                    <li key={item} className="flex items-center text-orange-400">
                                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl order-1 md:order-2">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">🎨</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Draft Previews */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <div className="bg-black/50 aspect-video rounded-xl border border-white/5 flex items-center justify-center">
                                <span className="text-4xl">👀</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Instant Draft Previews</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Never hit "Publish" and pray again. We set up private preview URLs protected by authentication.
                                Share a link with your boss to review the new landing page exactly as it will appear, before the world sees it.
                            </p>
                        </div>
                    </div>
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
