"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BanThemeForest() {
    const [pluginCount, setPluginCount] = useState(11);

    const health = Math.max(0, 100 - (pluginCount * 2));
    const conflicts = Math.min(100, Math.pow(pluginCount, 1.5) / 5);

    // Calculate percentage for slider background
    const percentage = (pluginCount / 50) * 100;
    const sliderColor = pluginCount > 30 ? '#EF4444' : pluginCount > 15 ? '#EAB308' : '#10B981';

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

            {/* Interactive Warning: Plugin Bloat Simulator */}
            <section className="max-w-6xl mx-auto px-4 mb-24">
                <div className="bg-gray-900 rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
                    {/* Background Glow */}
                    <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(circle at center, ${pluginCount > 30 ? 'rgba(239, 68, 68, 0.2)' : pluginCount > 15 ? 'rgba(234, 179, 8, 0.2)' : 'rgba(16, 185, 129, 0.2)'} 0%, transparent 70%)`
                        }}
                    ></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Controls & Metrics */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">The "Just One More" Trap</h3>
                                <p className="text-gray-400 text-sm">Add plugins to see how they impact stability.</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-gray-500">
                                    <span>Active Plugins</span>
                                    <span className="text-white">{pluginCount}</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="50"
                                    value={pluginCount}
                                    onChange={(e) => setPluginCount(parseInt(e.target.value))}
                                    style={{
                                        background: `linear-gradient(to right, ${sliderColor} 0%, ${sliderColor} ${percentage}%, #374151 ${percentage}%, #374151 100%)`
                                    }}
                                    className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-white"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-black/30 p-6 rounded-xl border border-white/10">
                                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Site Health</div>
                                    <div className={`text-3xl font-mono font-bold ${health < 50 ? 'text-red-500' : 'text-green-500'}`}>
                                        {health.toFixed(0)}%
                                    </div>
                                    <div className="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-300 ${health < 50 ? 'bg-red-500' : 'bg-green-500'}`}
                                            style={{ width: `${health}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="bg-black/30 p-6 rounded-xl border border-white/10">
                                    <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Conflict Risk</div>
                                    <div className={`text-3xl font-mono font-bold ${conflicts > 50 ? 'text-red-500' : 'text-gray-300'}`}>
                                        {conflicts.toFixed(1)}%
                                    </div>
                                    <div className="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-300 ${conflicts > 50 ? 'bg-red-500' : 'bg-blue-500'}`}
                                            style={{ width: `${Math.min(100, conflicts)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Stack */}
                        <div className="h-[400px] bg-black/50 rounded-2xl border border-white/5 p-8 relative flex flex-col justify-end overflow-hidden">
                            {/* Plugin Container: Fills space above core, wraps columns upwards */}
                            <div className="flex-1 w-full flex flex-col-reverse flex-wrap content-center gap-1 pb-4 overflow-hidden">
                                {[...Array(pluginCount)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        layout
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            x: i % 2 === 0 ? Math.random() * -2 : Math.random() * 2,
                                            rotate: Math.random() * (pluginCount / 10) * (Math.random() > 0.5 ? 1 : -1)
                                        }}
                                        className={`
                                            h-8 rounded border border-white/10 w-[48%] bg-opacity-80 shrink-0
                                            ${i < 5 ? 'bg-green-900 border-green-500/30' :
                                                i < 15 ? 'bg-yellow-900 border-yellow-500/30' :
                                                    'bg-red-900 border-red-500/30'}
                                        `}
                                    ></motion.div>
                                ))}
                            </div>

                            {/* Base: Fixed at bottom */}
                            <motion.div
                                className="w-full h-12 bg-gray-800 rounded border border-white/10 flex items-center justify-center font-bold text-gray-500 shrink-0 relative z-10"
                            >
                                WordPress Core
                            </motion.div>

                            {/* Collapse Overlay */}
                            {conflicts > 80 && (
                                <div className="absolute inset-0 bg-red-500/20 backdrop-blur-sm flex items-center justify-center z-20 animate-pulse">
                                    <div className="bg-red-600 text-white font-bold px-6 py-3 rounded-full shadow-xl">
                                        CRITICAL ERROR
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: The Trap */}
            <section className="max-w-4xl mx-auto px-4 mb-32">
                <p className="text-2xl md:text-3xl text-center font-light leading-relaxed mb-24 max-w-3xl mx-auto text-gray-200">
                    It costs $59. It looks perfect in the demo. It has 400 pre-built layouts. <span className="text-red-500 font-bold">What could go wrong?</span>
                </p>

                <div className="bg-yellow-900/10 border border-yellow-500/20 p-8 rounded-3xl relative overflow-hidden mb-24">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <svg className="w-24 h-24 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-yellow-500 mb-6">The "Lock-in" Effect</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6 max-w-2xl">
                            ThemeForest themes are not just styles; they are massive applications that hijack WordPress. To generate those 400 layouts, they bundle heavy plugins like Visual Composer and Slider Revolution directly into the theme logic.
                        </p>
                        <div className="bg-black/50 p-6 rounded-xl font-mono text-sm text-yellow-200/70 border border-yellow-500/10">
                            <p className="mb-2">// What happens when you try to switch themes:</p>
                            <p className="text-gray-500">[vc_row][vc_column width="1/2"][vc_column_text] <br /> ...content is trapped in proprietary shortcodes... <br /> [/vc_column_text][/vc_column][/vc_row]</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Performance <br /><span className="text-gray-600">Black Hole</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            To support every possible feature for every possible buyer, these themes load thousands of lines of CSS and JS on every page.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✕</span>
                                <span className="text-gray-300"><strong>Unused CSS:</strong> Most sites use 5% of the theme's CSS but load 100% of it.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✕</span>
                                <span className="text-gray-300"><strong>Dependency Hell:</strong> You can't update one plugin without breaking the theme.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center">
                        <div className="w-48 h-48 rounded-full border-8 border-red-900/30 flex items-center justify-center relative mb-6">
                            <div className="absolute inset-0 border-8 border-red-500 rounded-full border-l-transparent border-b-transparent -rotate-45"></div>
                            <span className="text-5xl font-black text-white">12s</span>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Avg. Mobile Load</p>
                    </div>
                </div>
            </section>

            {/* Section 3: The Solution */}
            <section className="bg-gradient-to-b from-gray-900 to-black py-24 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-12">
                        The Agency Standard
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        We believe in decoupling. Your content should live in the database, pure and portable (Sanity). Your frontend should be a lightweight view layer (Next.js).
                    </p>
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500">
                        <div className="bg-black rounded-full px-8 py-4">
                            <span className="font-bold text-white">If you want to redesign, just swap the frontend.</span>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
