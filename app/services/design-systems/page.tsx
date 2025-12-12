"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DesignSystemsPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        ORDER FROM <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">CHAOS</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Scalable UI kits and component libraries. Bridge the gap between Figma and Code.
                    </p>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">The Disconnected Workflow.</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Designers update Figma. Developers miss the memo. The product drifts. We fix this by treating your Design System as a product itself.
                            </p>
                            <ul className="space-y-4">
                                {["Figma Variables Sync", "Storybook Documentation", "Automated Regression Testing"].map(item => (
                                    <li key={item} className="flex items-center text-purple-400 font-bold">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-black border border-white/10 rounded-xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
                            <div className="flex gap-4">
                                <div className="w-20 h-20 bg-purple-500 rounded-lg animate-pulse"></div>
                                <div className="w-20 h-20 bg-pink-500 rounded-full animate-bounce"></div>
                                <div className="w-20 h-20 border-4 border-blue-500 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <Link href="/contact" className="px-12 py-5 bg-purple-600 rounded-full text-xl font-bold hover:bg-purple-500 transition-colors">
                    Standardize Design
                </Link>
            </section>
        </div>
    );
}
