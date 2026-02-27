"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { HEADLESS_CMS_FAQS } from "@/constants/faq";
import { ContentAppGraphic, MigrationGraphic, VisualEditingGraphic } from "@/components/ServiceGraphics";

export default function HeadlessCMSClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 text-white">
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
                        Stop letting your CMS dictate your design or throttle your speed. We empower your marketing team to manage content effortlessly while delivering lightning-fast digital experiences.
                    </p>
                </div>
            </section>

            {/* Educational Section - Headless */}
            <section className="py-16 px-4 bg-pink-900/10 border-y border-pink-500/20">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-sm font-bold text-pink-400 tracking-widest uppercase mb-4">New to Headless CMS?</h2>
                    <h3 className="text-3xl font-bold mb-6">The "Headless" Advantage.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Traditional websites lock your content and code together. This makes redesigns painful, site speeds sluggish, and security updates a constant headache.
                        <br /><br />
                        <strong>We decouple your content.</strong> Your data lives in a secure, centralized vault. We can push that content instantly to your website, mobile app, or retail kiosks—allowing your marketing team to scale without ever waiting on IT.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto text-center border-t border-pink-500/20 pt-16">
                    <h2 className="text-sm font-bold text-orange-400 tracking-widest uppercase mb-4">New to Sanity?</h2>
                    <h3 className="text-3xl font-bold mb-6">The Ultimate Marketing Engine.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Most platforms force your team to manage content page-by-page. Sanity creates a centralized "Content Lake" for your entire business.
                        <br /><br />
                        <strong>The Result:</strong> Total omnichannel control. Update a product price or campaign banner once, and it instantly syncs across your website, iOS app, and sales channels. Add in real-time collaboration (like Google Docs), and your marketing velocity will skyrocket.
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
                            Headless isn't for everyone. It's for teams who need scale, flexibility, and a premium editorial experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Media Publishers",
                                desc: "You publish 50+ articles a week and need custom workflows, authors, and real-time collaboration.",
                                icon: "📰",
                                gradient: "from-pink-500/20 to-rose-500/20"
                            },
                            {
                                title: "Global Brands",
                                desc: "You need multi-language support (i18n) and content distribution across different regions.",
                                icon: "🌍",
                                gradient: "from-orange-500/20 to-amber-500/20"
                            },
                            {
                                title: "Omnichannel Retail",
                                desc: "You sell on Web, Mobile App, and POS. You need one product database that feeds them all.",
                                icon: "🛍️",
                                gradient: "from-purple-500/20 to-blue-500/20"
                            },
                            {
                                title: "Marketing Teams",
                                desc: "You hate waiting for developers to change a banner. You want a Visual Page Builder that just works.",
                                icon: "🎨",
                                gradient: "from-green-500/20 to-emerald-500/20"
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

            {/* Features/Use Cases */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Use Cases</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">More than just a blog.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. Content Apps */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Omnichannel Content Distribution</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Stop paying your team to copy-paste the same blog post into three different platforms.
                                <br />
                                <strong>The Fix:</strong> We build a centralized content hub in Sanity. Your team writes a campaign once, and we automatically publish it to your website, app, and newsletters simultaneously.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <ContentAppGraphic />
                        </div>
                    </div>

                    {/* 2. Migrating from WP */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <MigrationGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Seamless Legacy Migration</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Tired of dealing with broken plugins, server crashes, and security vulnerabilities that cost you sales?
                                We guarantee a zero-data-loss migration. We seamlessly export years of your legacy WordPress data into a modern, secure, and lightning-fast Sanity architecture.
                            </p>
                        </div>
                    </div>

                    {/* 3. Visual Editing */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Empower Your Marketing Team</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                The biggest fear of upgrading your tech stack is losing your intuitive visual page builder. Not with our setup.
                                <br />
                                We integrate native visual editing. Your marketing team simply browses the live website, clicks on any image or copy, and edits it directly on the page—no developer required.
                            </p>
                            <ul className="space-y-2">
                                {["Drag & Drop Page Sections", "Live Real-Time Updates", "Device Preview (Mobile/Desktop)"].map(item => (
                                    <li key={item} className="flex items-center text-orange-400">
                                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <VisualEditingGraphic />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-pink-950/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Sanity & Headless Explained.</h3>
                    </div>
                    <FAQ items={HEADLESS_CMS_FAQS} />
                </div>
            </section>

            {/* Stack Detail */}
            <section className="py-24 px-4 max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-6">Why Sanity?</h2>
                        <p className="text-gray-400 mb-6 text-lg">
                            Legacy platforms trap your data and charge exorbitant hidden fees as you scale. Sanity gives your business ultimate ownership, complete structural flexibility, and an editing experience your team will actually love using.
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
                <Link href="/request-quote" className="px-12 py-5 bg-pink-600 rounded-full text-xl font-bold hover:bg-pink-500 transition-colors">
                    Accelerate Your Content Workflow
                </Link>
            </section>
        </div>
    );
}
