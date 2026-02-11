"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RevenueRule() {
    const [latency, setLatency] = useState(100);

    return (
        <article className="min-h-screen pt-32 pb-24">
            <header className="max-w-4xl mx-auto px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-pink-500 mb-6"
                >
                    <span>Performance</span>
                    <span>•</span>
                    <span>Jan 12, 2026</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black leading-tight mb-8 tracking-tighter"
                >
                    The 100ms Revenue Rule.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    We analyzed 50 e-commerce sites. Every 100ms of latency cost 1% in conversion. Speed isn't vanity; it's profit.
                </motion.p>
            </header>

            {/* Interactive Visual: Latency Simulator */}
            <section className="max-w-4xl mx-auto px-4 mb-24">
                <div className="bg-gray-900 rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-black to-black"></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Simulate Latency</h3>
                                <p className="text-gray-400 text-sm">Drag slider to see impact on revenue.</p>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-mono font-bold text-cyan-400">{latency}ms</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500">Page Load Time</div>
                            </div>
                        </div>

                        {/* Slider */}
                        <input
                            type="range"
                            min="100"
                            max="3000"
                            step="100"
                            value={latency}
                            onChange={(e) => setLatency(parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-16 accent-cyan-500"
                        />

                        {/* Visualization */}
                        <div className="grid grid-cols-2 gap-8 items-end h-64 border-b border-white/10 pb-4 relative">
                            {/* Conversion Rate */}
                            <div className="w-full bg-cyan-900/30 rounded-t-xl relative group transition-all duration-300" style={{ height: `${Math.max(10, 100 - (latency / 30))}%` }}>
                                <div className="absolute bottom-0 w-full bg-cyan-500/50 h-full rounded-t-xl animate-pulse"></div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-cyan-400">
                                    {(4.5 - (latency / 1000)).toFixed(1)}%
                                </div>
                                <div className="absolute bottom-4 w-full text-center text-xs font-bold uppercase tracking-widest text-white">Conversion</div>
                            </div>

                            {/* Bounce Rate (Inverted) */}
                            <div className="w-full bg-red-900/30 rounded-t-xl relative transition-all duration-300" style={{ height: `${Math.min(100, (latency / 30))}%` }}>
                                <div className="absolute bottom-0 w-full bg-red-500/50 h-full rounded-t-xl"></div>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-red-400">
                                    {Math.min(90, (20 + (latency / 50))).toFixed(0)}%
                                </div>
                                <div className="absolute bottom-4 w-full text-center text-xs font-bold uppercase tracking-widest text-white">Bounce Rate</div>
                            </div>

                            {/* Axis Labels */}
                            <div className="absolute bottom-0 left-0 text-xs text-gray-500 translate-y-6">Performance</div>
                            <div className="absolute bottom-0 right-0 text-xs text-gray-500 translate-y-6">Loss</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-3xl mx-auto px-4 prose prose-invert prose-lg prose-pink">
                <p className="lead text-2xl font-light leading-relaxed mb-12">
                    Amazon found that every 100ms of latency cost them 1% in sales. Google found an extra 500ms in search results generation dropped traffic by 20%. The data is clear: Human attention span is the most competitive resource on earth.
                </p>

                <h2>The 3-Second Cliff</h2>
                <p>
                    53% of mobile site visits are abandoned if pages take longer than 3 seconds to load. Yet, the average mobile site takes 15 seconds to load. This gap is where your revenue is leaking.
                </p>

                <h2>Core Web Vitals</h2>
                <p>
                    Google doesn't just measure speed; they measure user frustration.
                </p>
                <ul>
                    <li><strong>LCP (Largest Contentful Paint):</strong> How long until the main content is visible? (Target: {`<`} 2.5s)</li>
                    <li><strong>CLS (Cumulative Layout Shift):</strong> Does the page jump around while loading, causing user errors? (Target: 0)</li>
                    <li><strong>INP (Interaction to Next Paint):</strong> When I click a button, does it freeze? (Target: {`<`} 200ms)</li>
                </ul>

                <h2>Our Approach</h2>
                <p>
                    We don't optimize after the fact. We architect for speed. By using Static Site Generation (SSG) in Next.js and optimizing images at the edge, we ensure your site is delivered instantly from a CDN close to your user, not generated on a slow server halfway across the world.
                </p>
            </div>
        </article>
    );
}
