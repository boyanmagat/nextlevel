"use client";

import { motion } from "framer-motion";

export default function BuildersTrap() {
    return (
        <article className="min-h-screen pt-32 pb-24">
            <header className="max-w-4xl mx-auto px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-pink-500 mb-6"
                >
                    <span>Strategy</span>
                    <span>•</span>
                    <span>Feb 10, 2026</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter"
                >
                    The "Unlimited" Trap: <br /> Why Builders Fail.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Page builders promise unlimited possibilities but deliver limited performance. We build custom solutions that do exactly what you need—nothing more, nothing less.
                </motion.p>
            </header>

            {/* Visual: The DOM Tree Comparison */}
            <section className="max-w-6xl mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Builder Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-3xl border border-red-500/20 p-8 overflow-hidden relative"
                    >
                        <div className="absolute top-4 right-4 text-red-500 font-mono text-xs uppercase tracking-widest border border-red-500/50 px-2 py-1 rounded">Page Builder</div>
                        <h3 className="text-2xl font-bold mb-8 text-red-400">The Nesting Hell</h3>

                        <div className="space-y-4 font-mono text-xs text-gray-500 opacity-70">
                            <div className="pl-4 border-l border-white/10">{`<div> wrapper`}</div>
                            <div className="pl-8 border-l border-white/10">{`<div> section-inner`}</div>
                            <div className="pl-12 border-l border-white/10">{`<div> column-wrap`}</div>
                            <div className="pl-16 border-l border-white/10">{`<div> widget-container`}</div>
                            <div className="pl-20 border-l border-white/10">{`<div> element-wrapper`}</div>
                            <div className="pl-24 text-white bg-red-500/10 p-2 rounded border border-red-500/30 animate-pulse">
                                {`<h1>Hello World</h1>`}
                            </div>
                            <div className="pl-20 border-l border-white/10">{`</div>`}</div>
                            <div className="pl-16 border-l border-white/10">{`</div>`}</div>
                            <div className="pl-12 border-l border-white/10">{`</div>`}</div>
                            <div className="pl-8 border-l border-white/10">{`</div>`}</div>
                            <div className="pl-4 border-l border-white/10">{`</div>`}</div>
                        </div>
                        <div className="mt-8 text-center text-red-400 font-bold">
                            DOM Nodes: 1,402
                        </div>
                    </motion.div>

                    {/* Custom Code Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-3xl border border-green-500/20 p-8 overflow-hidden relative"
                    >
                        <div className="absolute top-4 right-4 text-green-500 font-mono text-xs uppercase tracking-widest border border-green-500/50 px-2 py-1 rounded">Custom Code</div>
                        <h3 className="text-2xl font-bold mb-8 text-green-400">Pure Semantics</h3>

                        <div className="space-y-4 font-mono text-xs text-gray-500">
                            <div className="pl-4 text-white bg-green-500/10 p-2 rounded border border-green-500/30">
                                {`<h1>Hello World</h1>`}
                            </div>
                        </div>
                        <div className="mt-40 text-center text-green-400 font-bold">
                            DOM Nodes: 1
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: The Illusion of Choice */}
            <section className="max-w-6xl mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            The Illusion of <span className="text-red-500">Choice</span>.
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Page builders like Elementor or Divi operate on a principle of "universal possibility." To allow you to put any element inside any other element, they must generate a generic HTML wrapper structure capable of handling every edge case.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            This guarantees what developers call <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">Div Soup</span>—nested structures 15 layers deep just to display a simple headline.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                Performance
                            </h3>
                            <p className="text-gray-400 text-sm">The browser parses 10x the nodes. This kills Lighthouse scores and drains mobile battery.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                Maintenance
                            </h3>
                            <p className="text-gray-400 text-sm">Global style changes become impossible because every element has specific inline overrides.</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-red-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                Accessibility
                            </h3>
                            <p className="text-gray-400 text-sm">Semantic HTML is lost in a sea of generic divs, making the site invisible to screen readers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Philosophy */}
            <section className="max-w-4xl mx-auto px-4 text-center mb-24">
                <div className="relative py-24">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <span className="text-[20vw] font-black text-white leading-none">EXACT</span>
                    </div>

                    <h2 className="relative z-10 text-4xl md:text-6xl font-black mb-12">
                        We don't sell "unlimited." <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">We sell exact.</span>
                    </h2>

                    <p className="relative z-10 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
                        A "Hero Section" should allow a title, subtitle, and CTA. <strong className="text-white">It should not allow you to drag a pricing table into the H1 tag.</strong>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div className="p-6 rounded-xl bg-red-900/10 border border-red-500/20 text-red-200">
                            <strong>Constraint = Restriction</strong>
                            <p className="text-sm opacity-70 mt-2">The Amateur View</p>
                        </div>
                        <div className="p-6 rounded-xl bg-green-900/10 border border-green-500/20 text-green-200">
                            <strong>Constraint = Quality</strong>
                            <p className="text-sm opacity-70 mt-2">The Engineering View</p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
