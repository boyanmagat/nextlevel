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

            <div className="max-w-3xl mx-auto px-4 prose prose-invert prose-lg prose-pink">
                <p className="lead text-2xl font-light leading-relaxed mb-12">
                    The pitch is seductive: "Drag and drop anything, anywhere. No code required." But in software, freedom without constraints is chaos.
                </p>

                <h2>The Illusion of Choice</h2>
                <p>
                    Page builders like Elementor, Divi, or Wix operate on a principle of "universal possibility." To allow you to put any element inside any other element with any possible styling override, they must generate a generic HTML wrapper structure capable of handling every edge case.
                </p>
                <p>
                    This results in what developers call "Div Soup"—nested structures 15 layers deep just to display a simple headline.
                </p>

                <h3>Why it matters:</h3>
                <ul>
                    <li><strong>Performance:</strong> The browser has to parse and render 10x the nodes. This kills your Lighthouse score and drains mobile battery.</li>
                    <li><strong>Maintenance:</strong> Global style changes become impossible because every element has inline overrides.</li>
                    <li><strong>Accessibility:</strong> Semantic HTML (nav, aside, main) is often lost in a sea of generic divs, making your site invisible to screen readers.</li>
                </ul>

                <h2>The Custom Philosophy</h2>
                <p>
                    We don't sell "unlimited." We sell "exact."
                </p>
                <p>
                    When we build a component, we define its strict constraints. A "Hero Section" allows a title, a subtitle, and a CTA. It does not allow you to drag a pricing table into the H1 tag. By constraining the inputs, we guarantee the output is always performant, accessible, and brand-consistent.
                </p>
                <p>
                    Constraints are not limitations. They are guardrails for quality.
                </p>
            </div>
        </article>
    );
}
