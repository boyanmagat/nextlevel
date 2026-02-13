"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { CUSTOM_SOFTWARE_FAQS } from "@/constants/faq";
import { SaaSArchitectureGraphic, AdminPanelGraphic } from "@/components/ServiceGraphics";

export default function CustomSoftwareClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 text-white">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        BESPOKE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">SOFTWARE</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        We build SaaS platforms and internal tools that your competitors can't buy off the shelf. Own your technology.
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
                            Off-the-shelf software (SaaS) is great until it isn't. When you hit the ceiling of what generic tools can do, we build the solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "SaaS Founders",
                                desc: "You have a validated idea and need an MVP that scales. You don't want a 'no-code' prototype that you'll have to throw away in 6 months.",
                                icon: "🦄",
                                gradient: "from-green-500/20 to-emerald-500/20"
                            },
                            {
                                title: "Operations Teams",
                                desc: "You're running a $10M business on a fragile spreadsheet. You need a custom internal dashboard to manage orders, staff, and inventory.",
                                icon: "📊",
                                gradient: "from-blue-500/20 to-indigo-500/20"
                            },
                            {
                                title: "Niche Industries",
                                desc: "Generic CRM software doesn't fit your specific workflow. You need a tool tailored exactly to how your business operates.",
                                icon: "🎯",
                                gradient: "from-purple-500/20 to-violet-500/20"
                            },
                            {
                                title: "Data Heavy",
                                desc: "You have massive datasets and need robust analytics, visualization, and reporting features that standard tools choke on.",
                                icon: "📉",
                                gradient: "from-orange-500/20 to-red-500/20"
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
                    <h2 className="text-green-500 font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">Built for Scale.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. Multi-tenant SaaS */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Multi-Tenant SaaS Architecture</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We build scalable platforms where one codebase serves thousands of customers, but their data remains strictly isolated.
                                Includes subscription billing (Stripe), team management, and role-based access control out of the box.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <SaaSArchitectureGraphic />
                        </div>
                    </div>

                    {/* 2. Admin Panels */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <AdminPanelGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Internal Tools & Dashboards</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Stop using Excel. We build secure, web-based admin panels that give your team superpowers.
                                Automate workflows, visualize KPIs, and manage your business from anywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-green-950/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-green-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Software Development.</h3>
                    </div>
                    <FAQ items={CUSTOM_SOFTWARE_FAQS} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-green-600 rounded-full text-xl font-bold hover:bg-green-500 transition-colors">
                    Build Your Solution
                </Link>
            </section>
        </div>
    );
}
