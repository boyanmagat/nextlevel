"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomIntegrationsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero */}
            <section className="px-4 mb-24 md:mb-32">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase">System Architecture</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black mb-8 tracking-tighter"
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CONNECTIVE</span> <br />
                        TISSUE.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light"
                    >
                        Your tools shouldn't be islands. We architect custom API integrations that eliminate silos, automate drudgery, and synchronize your truth.
                    </motion.p>
                </div>
            </section>

            {/* The Problem */}
            <section className="px-4 py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">The "Silo" Problem.</h2>
                        <p className="text-gray-400 text-lg mb-6">
                            You have marketing data in GA4, sales data in HubSpot, and financial data in QuickBooks. None of them talk to each other.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Manual data entry errors",
                                "Fragmented customer views",
                                "Delayed reporting",
                                "Wasted team hours"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative aspect-video bg-gray-900 rounded-2xl border border-white/10 p-8 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-sm opacity-50">
                            <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                            <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                            <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                            <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-red-500/20 text-red-500 px-6 py-3 rounded-full font-bold border border-red-500/50 backdrop-blur-md">
                                DISCONNECTED
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Spectrum */}
            <section className="px-4 py-32 max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Unified Ecology.</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">We don't rely on fragile Zapier zaps. We build robust, error-handled server-side integrations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            category: "Marketing Intelligence",
                            icon: "📊",
                            tools: ["Google Analytics 4", "Search Console", "Google Ads", "Speed Insights"],
                            desc: "Unify your traffic, ad spend, and performance metrics into a single source of truth."
                        },
                        {
                            category: "SEO & Data",
                            icon: "🔍",
                            tools: ["SERP Data API", "Keyword Tracking", "Competitor Analysis"],
                            desc: "Programmatic SEO tracking. Monitor thousands of keywords without manual checking."
                        },
                        {
                            category: "CRM & Sales",
                            icon: "🤝",
                            tools: ["HubSpot", "Salesforce", "Pipedrive"],
                            desc: "Bi-directional sync between your marketing site and your sales pipeline."
                        },
                        {
                            category: "Business Ops",
                            icon: "⚙️",
                            tools: ["Asana", "ClickUp", "Notion", "Slack"],
                            desc: "Automate project creation and status updates based on real-world triggers."
                        },
                        {
                            category: "Financial Systems",
                            icon: "💰",
                            tools: ["Stripe", "QuickBooks", "Xero"],
                            desc: "Reconcile payments automatically. Sync customer data from checkout to ledger."
                        }
                    ].map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors group"
                        >
                            <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {section.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{section.category}</h3>
                            <p className="text-gray-400 text-sm mb-6 min-h-[3rem]">{section.desc}</p>

                            <div className="space-y-2">
                                {section.tools.map(tool => (
                                    <div key={tool} className="flex items-center text-sm font-mono text-cyan-400 bg-cyan-950/30 px-3 py-1.5 rounded-md border border-cyan-900/50">
                                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The Middleware Advantage */}
            <section className="px-4 py-24 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Reliability Engineering</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">The Middleware <br />Advantage.</h3>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Amateurs connect tools directly. Professionals build middleware.
                            <br /><br />
                            Direct API connections are brittle. If one service goes down, your data is lost. We architect a custom <span className="text-white font-bold">Resilience Layer</span> that sits between your tools to ensure 100% data integrity.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Queue Management", desc: "If Salesforce is down, we hold the data and retry automatically. Zero dropped leads." },
                                { title: "Rate Limiting", desc: "We respect API quotas with exponential backoff so your accounts never get blocked." },
                                { title: "Data Normalization", desc: "We transform messy inputs into clean, structured schemas before they hit your database." },
                                { title: "Security First", desc: "Encrypted keys, verified webhooks, and IP whitelisting. Your data is never exposed." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-white/10 text-cyan-500 font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Link href="/request-quote" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors group">
                                Schedule Architecture Review
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 aspect-square md:aspect-[4/5] flex items-center justify-center p-8"
                    >
                        {/* Abstract Representation of Middleware */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black"></div>

                        <div className="relative z-10 w-full max-w-sm">
                            {/* Input Nodes */}
                            <div className="flex justify-between mb-12">
                                <div className="w-16 h-16 bg-gray-800 rounded-xl border border-white/10 flex items-center justify-center text-2xl">⚡</div>
                                <div className="w-16 h-16 bg-gray-800 rounded-xl border border-white/10 flex items-center justify-center text-2xl">💰</div>
                                <div className="w-16 h-16 bg-gray-800 rounded-xl border border-white/10 flex items-center justify-center text-2xl">👥</div>
                            </div>

                            {/* Middleware Core */}
                            <div className="h-32 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(8,145,178,0.3)] border border-cyan-400/30 relative overflow-hidden mb-12">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>
                                <span className="font-mono font-bold text-lg tracking-widest text-white z-10">MIDDLEWARE</span>
                            </div>

                            {/* Output (Database) */}
                            <div className="w-full h-16 bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-mono text-sm text-gray-400">DATABASE_SYNCED</span>
                            </div>

                            {/* Connecting Lines (CSS only for simplicity) */}
                            <div className="absolute top-16 left-8 w-px h-12 bg-gradient-to-b from-gray-700 to-cyan-500"></div>
                            <div className="absolute top-16 right-8 w-px h-12 bg-gradient-to-b from-gray-700 to-cyan-500"></div>
                            <div className="absolute top-16 left-1/2 -ml-px w-px h-12 bg-gradient-to-b from-gray-700 to-cyan-500"></div>
                            <div className="absolute bottom-28 left-1/2 -ml-px w-px h-12 bg-gradient-to-b from-cyan-500 to-gray-700"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Universal Translation Protocol */}
            <section className="px-4 py-24 max-w-7xl mx-auto">
                <div className="mb-16 md:flex md:justify-between md:items-end">
                    <div className="max-w-3xl">
                        <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Protocol Agnostic</h2>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">Universal <br /><span className="text-gray-500">Translation.</span></h3>
                        <p className="text-xl text-gray-300">
                            We don't shy away from complexity. Whether it's a modern GraphQL endpoint or a legacy SOAP service from 2005, we build the bridge.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { title: "REST API", desc: "Standard JSON payloads", color: "border-blue-500/30 text-blue-400" },
                        { title: "GraphQL", desc: "Precise data fetching", color: "border-pink-500/30 text-pink-400" },
                        { title: "SOAP / XML", desc: "Legacy enterprise support", color: "border-orange-500/30 text-orange-400" },
                        { title: "Webhooks", desc: "Real-time event triggers", color: "border-green-500/30 text-green-400" },
                        { title: "SQL / NoSQL", desc: "Direct database sync", color: "border-purple-500/30 text-purple-400" },
                        { title: "gRPC", desc: "High-performance microservices", color: "border-cyan-500/30 text-cyan-400" },
                        { title: "FTP / SFTP", desc: "Batch file processing", color: "border-yellow-500/30 text-yellow-400" },
                        { title: "Custom SDKs", desc: "Proprietary vendor integration", color: "border-gray-500/30 text-gray-400" }
                    ].map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className={`p-6 rounded-xl border bg-white/5 hover:bg-white/10 transition-colors ${tech.color}`}
                        >
                            <div className="font-mono font-bold text-lg mb-2">{tech.title}</div>
                            <div className="text-xs text-gray-400">{tech.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-cyan-600 rounded-full text-xl font-bold hover:bg-cyan-500 transition-colors">
                    Architect Your Workflow
                </Link>
            </section>

        </div>
    );
}
