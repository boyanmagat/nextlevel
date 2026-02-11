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

            {/* Section 2: The Data */}
            <section className="max-w-6xl mx-auto px-4 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <p className="text-2xl font-light leading-relaxed mb-8 text-gray-200">
                            Amazon found that every <span className="text-cyan-400 font-bold">100ms of latency cost them 1% in sales</span>. Google found an extra 500ms in search results generation dropped traffic by 20%.
                        </p>
                        <p className="text-gray-400 text-lg">
                            The data is clear: Human attention span is the most competitive resource on earth.
                        </p>
                    </div>
                    <div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-6">The 3-Second Cliff</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>1 Second Load</span>
                                        <span className="text-green-400">7% Bounce</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="w-[7%] h-full bg-green-500"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>3 Seconds Load</span>
                                        <span className="text-yellow-400">53% Bounce</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="w-[53%] h-full bg-yellow-500"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>5 Seconds Load</span>
                                        <span className="text-red-400">90% Bounce</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="w-[90%] h-full bg-red-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Core Web Vitals */}
            <section className="max-w-6xl mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Core Web Vitals</h2>
                    <p className="text-xl text-gray-400">Google doesn't just measure speed; they measure user frustration.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-cyan-900/10 border border-cyan-500/20 p-8 rounded-2xl hover:bg-cyan-900/20 transition-colors group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                        <h3 className="text-xl font-bold text-white mb-2">LCP</h3>
                        <p className="text-sm font-mono text-cyan-400 mb-4">Largest Contentful Paint</p>
                        <div className="h-px w-full bg-cyan-500/20 mb-4"></div>
                        <p className="text-gray-400 text-sm">How long until the main content is visible?</p>
                        <p className="mt-4 font-bold text-green-400 text-sm">Target: &lt; 2.5s</p>
                    </div>

                    <div className="bg-purple-900/10 border border-purple-500/20 p-8 rounded-2xl hover:bg-purple-900/20 transition-colors group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📐</div>
                        <h3 className="text-xl font-bold text-white mb-2">CLS</h3>
                        <p className="text-sm font-mono text-purple-400 mb-4">Cumulative Layout Shift</p>
                        <div className="h-px w-full bg-purple-500/20 mb-4"></div>
                        <p className="text-gray-400 text-sm">Does the page jump around while loading?</p>
                        <p className="mt-4 font-bold text-green-400 text-sm">Target: 0</p>
                    </div>

                    <div className="bg-pink-900/10 border border-pink-500/20 p-8 rounded-2xl hover:bg-pink-900/20 transition-colors group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👆</div>
                        <h3 className="text-xl font-bold text-white mb-2">INP</h3>
                        <p className="text-sm font-mono text-pink-400 mb-4">Interaction to Next Paint</p>
                        <div className="h-px w-full bg-pink-500/20 mb-4"></div>
                        <p className="text-gray-400 text-sm">When I click, does the interface freeze?</p>
                        <p className="mt-4 font-bold text-green-400 text-sm">Target: &lt; 200ms</p>
                    </div>
                </div>
            </section>

            {/* Section 4: Architecture */}
            <section className="bg-white/5 border-y border-white/10 py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Approach: Structural Speed</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                        We don't optimize after the fact. We architect for speed. By using <span className="text-white font-bold">Static Site Generation (SSG)</span> and Edge Caching, we ensure your site is delivered instantly from a CDN close to your user, not generated on a slow server halfway across the world.
                    </p>
                </div>
            </section>
        </article>
    );
}
