"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomSoftwarePage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        BESPOKE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">ENGINEERING</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        SaaS platforms, Internal Tools, and Automations. When off-the-shelf software isn't enough.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="group">
                            <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-500 transition-colors">SaaS Development</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Multi-tenant architecture, subscription billing (Stripe), and role-based access control. We build scalable platforms ready for Series A scaling.
                            </p>
                        </div>
                        <div className="group">
                            <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-500 transition-colors">Internal Tools</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Stop running your business on spreadsheets. We build custom admin panels and dashboards that automate your unique workflows.
                            </p>
                        </div>
                    </div>

                    {/* Visual Representation of Tech */}
                    <div className="grid grid-cols-2 gap-4">
                        {["PostgreSQL", "NextAuth", "Prisma", "Redis", "Docker", "AWS"].map((tech) => (
                            <div key={tech} className="bg-black border border-white/10 rounded-xl flex items-center justify-center p-8 font-mono font-bold text-gray-500 hover:text-white hover:border-purple-500 transition-colors">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <Link href="/contact" className="px-12 py-5 bg-purple-600 rounded-full text-xl font-bold hover:bg-purple-500 transition-colors">
                    Build Your Vision
                </Link>
            </section>
        </div>
    );
}
