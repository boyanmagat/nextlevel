"use client";

import { motion } from "framer-motion";

export default function BanThemeForest() {
    return (
        <article className="min-h-screen pt-32 pb-24">
            <header className="max-w-4xl mx-auto px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-pink-500 mb-6"
                >
                    <span>Agency</span>
                    <span>•</span>
                    <span>Jan 24, 2026</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter"
                >
                    Why We Should Ban ThemeForest.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Technical debt is real debt. We stopped buying cheap templates when we realized our clients were paying 10x in 'interest' later.
                </motion.p>
            </header>

            {/* Visual: The Dependency Tower */}
            <section className="max-w-4xl mx-auto px-4 mb-24">
                <div className="bg-gray-900 rounded-3xl border border-white/10 p-12 flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black"></div>

                    <div className="relative z-10 flex flex-col-reverse items-center gap-1">
                        {/* Base */}
                        <motion.div
                            className="w-64 h-12 bg-gray-800 rounded border border-white/20 flex items-center justify-center font-bold text-gray-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: 256 }}
                        >
                            WordPress Core
                        </motion.div>

                        {/* Plugins */}
                        {[
                            { name: "Avada Theme", color: "bg-green-800", delay: 0.1 },
                            { name: "Fusion Builder", color: "bg-blue-800", delay: 0.2 },
                            { name: "Slider Revolution", color: "bg-red-800", delay: 0.3 },
                            { name: "Mega Menu Pro", color: "bg-purple-800", delay: 0.4 },
                            { name: "LayerSlider", color: "bg-orange-800", delay: 0.5 },
                            { name: "Contact Form 7", color: "bg-cyan-800", delay: 0.6 },
                            { name: "WooCommerce", color: "bg-pink-800", delay: 0.7 },
                            { name: "Custom CSS Override", color: "bg-yellow-800", delay: 0.8 },
                        ].map((block, i) => (
                            <motion.div
                                key={i}
                                className={`w-48 h-10 ${block.color} rounded border border-white/20 flex items-center justify-center text-sm font-bold shadow-lg`}
                                initial={{ y: -500, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: block.delay, type: "spring", stiffness: 100 }}
                                whileHover={{ x: i % 2 === 0 ? 20 : -20, rotate: i % 2 === 0 ? 5 : -5 }}
                            >
                                {block.name}
                            </motion.div>
                        ))}

                        {/* The Breaking Point */}
                        <motion.div
                            className="absolute top-0 right-0 p-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                                ⚠️ Update Required
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 prose prose-invert prose-lg prose-pink">
                <p className="lead text-2xl font-light leading-relaxed mb-12">
                    It costs $59. It looks perfect in the demo. It has 400 pre-built layouts. What could go wrong? Everything.
                </p>

                <h2>The "Lock-in" Effect</h2>
                <p>
                    ThemeForest themes are not just styles; they are massive applications that hijack the core functionality of WordPress. To generate those 400 layouts, they bundle heavy plugins like Visual Composer, Slider Revolution, and custom post types directly into the theme logic.
                </p>
                <p>
                    The moment you activate that theme, you are locked in. You cannot switch themes later without losing all your content, because your content is wrapped in proprietary shortcodes `[vc_row][vc_column]...` that only that specific theme understands.
                </p>

                <h2>Performance Black Hole</h2>
                <p>
                    To support every possible feature for every possible buyer, these themes load thousands of lines of CSS and JS on every page.
                </p>
                <ul>
                    <li><strong>Unused CSS:</strong> Most sites use 5% of the theme's CSS, but load 100% of it.</li>
                    <li><strong>Plugin Dependency:</strong> You can't update one plugin without breaking the theme, or vice versa. You are stuck in version purgatory.</li>
                </ul>

                <h2>The Agency Standard</h2>
                <p>
                    We believe in decoupling. Your content should live in the database, pure and portable (like with headless Sanity). Your frontend should be a lightweight view layer (Next.js). If you want to redesign in 3 years, you just swap the frontend. Your content remains untouched.
                </p>
                <p>
                    A $59 theme is like a payday loan. It solves a problem today, but charges you exorbitant interest in maintenance forever.
                </p>
            </div>
        </article>
    );
}
