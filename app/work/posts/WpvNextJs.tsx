"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Database,
    Gauge,
    Trophy,
    Info,
    Cpu,
    Layout,
    Smartphone,
    Monitor,
    Truck,
    Car
} from "lucide-react";

const PSI_DATA = {
    wp: {
        mobile: { score: 52, fcp: "4.1s", lcp: "9.9s", tbt: "420ms", index: "5.6s" },
        desktop: { score: 95, fcp: "0.6s", lcp: "1.7s", tbt: "160ms", index: "0.9s" }
    },
    nextjs: {
        mobile: { score: 78, fcp: "2.7s", lcp: "4.7s", tbt: "20ms", index: "3.3s" },
        desktop: { score: 98, fcp: "0.6s", lcp: "1.1s", tbt: "60ms", index: "0.8s" }
    }
};

export default function WpvNextJs() {
    return (
        <article className="min-h-screen bg-black text-white selection:bg-pink-500/30">
            {/* --- HERO SECTION --- */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_70%)]"></div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-500 text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Zap className="w-4 h-4" /> Performance Case Study
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none"
                    >
                        CLASH OF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                            TECH.
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-xl mx-auto mb-12"
                    >
                        <div className="relative p-6 md:p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                            {/* WordPress Side */}
                            <div className="flex flex-col items-center gap-3 group">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <Database className="w-8 h-8 text-blue-400" />
                                </div>
                                <span className="text-xl font-bold uppercase tracking-tighter text-blue-400">WordPress</span>
                            </div>

                            {/* VS Badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-black border border-white/10 items-center justify-center z-10">
                                <span className="text-xs font-light italic text-gray-400">vs</span>
                            </div>
                            <div className="md:hidden text-gray-600 font-light italic">vs</div>

                            {/* Next.js Side */}
                            <div className="flex flex-col items-center gap-3 group">
                                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                                    <Zap className="w-8 h-8 text-pink-500" />
                                </div>
                                <span className="text-xl font-bold uppercase tracking-tighter text-pink-500">Next.js</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        An honest head-to-head between a legacy giant and a modern contender.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to build</span>
                    <div className="w-px h-12 bg-gradient-to-b from-pink-500 to-transparent"></div>
                </motion.div>
            </header>

            {/* --- INTRO: WORDPRESS LOVE --- */}
            <section className="max-w-6xl mx-auto px-4 py-32 border-b border-white/10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Respecting the <br /><span className="text-blue-400 uppercase">Giant</span>.</h2>
                        <div className="space-y-6 text-xl text-gray-400 leading-relaxed max-w-xl">
                            <p>
                                WordPress powers 43% of the internet. It democratized publishing and remains the gold standard for simplicity and community-driven extensibility.
                            </p>
                            <p>
                                For over two decades, it has been the backbone of the digital world, providing a low barrier to entry for millions of creators and businesses.
                            </p>
                            <blockquote className="border-l-4 border-pink-500 pl-6 italic text-gray-200 py-4 bg-white/5 rounded-r-2xl pr-8">
                                "We all really appreciate WP for its simplicity and ease of use. There was a moment when it was one of the most innovative and front-looking technology."
                            </blockquote>
                        </div>
                    </motion.div>

                    <div className="relative">
                        {/* Upgraded Legacy Engine Graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[3rem] bg-zinc-950 border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl"
                        >
                            {/* Orbiting Elements */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="w-[80%] h-[80%] border border-blue-500/10 rounded-full border-dashed"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-[60%] h-[60%] border border-white/5 rounded-full"
                                />
                            </div>

                            {/* Central Core: The WP Monolith */}
                            <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full"
                                />
                                <div className="space-y-1 text-center">
                                    <Database className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                                    <div className="text-4xl font-black text-white/90 tracking-tighter">WP.CORE</div>
                                    <div className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em]">Legacy Monolith</div>
                                </div>
                            </div>

                            {/* Floating Plugin Nodes */}
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="absolute w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg hover:border-blue-500/50 transition-colors"
                                    style={{
                                        top: `${50 + 35 * Math.sin(angle * (Math.PI / 180))}%`,
                                        left: `${50 + 35 * Math.cos(angle * (Math.PI / 180))}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" />
                                </motion.div>
                            ))}

                            {/* Data Streams */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                            </div>
                        </motion.div>

                        {/* Stats Badge */}
                        <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-blue-900/20 border border-blue-500/30 backdrop-blur-xl shadow-2xl z-20">
                            <div className="text-3xl font-black text-white">43%</div>
                            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Market Control</div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- TECH COMPARISON --- */}
            <section className="py-32 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">The Engine Room.</h2>
                        <p className="text-xl text-gray-300 font-light leading-relaxed italic border-l-2 border-white/10 pl-8">
                            "If we compare PHP and Node.js, we can see that Node.js is much faster and more efficient than PHP."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* WP Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-gray-900 border border-white/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <Cpu className="w-24 h-24" />
                            </div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs">WP</span>
                                PHP + MySQL
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Execution Model</div>
                                    <div className="font-mono text-sm">Server-side rendering on every request</div>
                                </div>
                                <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Concurrency</div>
                                    <div className="font-mono text-sm">Thread-based / Blocking I/O</div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Efficiency Baseline: 1.0x</span>
                            </div>
                        </motion.div>

                        {/* Next.js Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-white/5 border border-pink-500/20 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <Zap className="w-24 h-24 text-pink-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-pink-500">
                                <span className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-xs text-white">NX</span>
                                Node.js + React
                            </h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                                    <div className="text-xs text-pink-500/50 uppercase tracking-widest mb-1">Execution Model</div>
                                    <div className="font-mono text-sm">Hybrid: Pre-rendered Static + Server</div>
                                </div>
                                <div className="p-4 rounded-xl bg-black/50 border border-white/10">
                                    <div className="text-xs text-pink-500/50 uppercase tracking-widest mb-1">Concurrency</div>
                                    <div className="font-mono text-sm">Event-driven / Non-blocking I/O</div>
                                </div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                <span className="text-xs text-pink-500 font-bold uppercase tracking-widest">Efficiency Baseline: 4.8x +</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- STUDY SETUP (PREREQUISITES) --- */}
            <section className="py-24 bg-zinc-950 border-y border-white/5">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="p-8 md:p-16 rounded-[3rem] bg-black border border-white/10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Info className="w-64 h-64" />
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 flex items-center justify-center">
                                <Layout className="w-6 h-6 text-pink-500" />
                            </div>
                            Study Setup
                        </h3>

                        <div className="space-y-12 text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
                            <div className="border-l-4 border-pink-500 pl-8 bg-white/5 py-8 rounded-r-3xl">
                                <p className="max-w-3xl">
                                    For the purpose of this case study, I built a Next.js site which is a complete copy of my WordPress site. It uses the same design, content, and structure. It is a Headless WordPress architecture.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="font-bold text-white uppercase text-xs tracking-[0.3em] text-blue-400">The WordPress Site</h4>
                                    <p className="text-base text-gray-400 leading-relaxed">
                                        Custom theme using ACF and custom post types. Based on an HTML theme from ThemeForest (equivalent to half the sites worldwide). Fairly optimized using WP Litespeed for caching and Image optimization. It is using Cloudflare for CDN. This is an <strong>above average</strong> optimized WP site.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="font-bold text-white uppercase text-xs tracking-[0.3em] text-pink-500">The Next.js Site</h4>
                                    <p className="text-base text-gray-400 leading-relaxed">
                                        To keep it as close as possible to the original, I kept Bootstrap CSS for the Next.js site. Hosted on Vercel, it is by all means an <strong>average site</strong> by Next.js standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PERFORMANCE SHOWDOWN --- */}
            <section className="py-32 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter">THE SCORES.</h2>
                    <div className="text-gray-500 uppercase tracking-widest text-sm font-bold">PageSpeed Insights Audit</div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* MOBILE Comparison */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                            <Smartphone className="w-6 h-6 text-pink-500" />
                            <h3 className="text-2xl font-bold uppercase tracking-widest">Mobile Comparison</h3>
                        </div>

                        {/* Chart Area */}
                        <div className="bg-gray-900/50 p-8 rounded-3xl border border-white/5 relative">
                            <div className="space-y-12">
                                {/* WP BAR */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <span className="font-bold text-gray-400">WordPress (Optimized)</span>
                                        <span className="font-black text-2xl">52</span>
                                    </div>
                                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "52%" }}
                                            className="h-full bg-red-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 mt-4 text-[10px] uppercase font-bold text-gray-500">
                                        <div>FCP: {PSI_DATA.wp.mobile.fcp}</div>
                                        <div>LCP: {PSI_DATA.wp.mobile.lcp}</div>
                                        <div>TBT: {PSI_DATA.wp.mobile.tbt}</div>
                                        <div>Index: {PSI_DATA.wp.mobile.index}</div>
                                    </div>
                                </div>

                                {/* NEXTJS BAR */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <span className="font-bold text-pink-500">Next.js (Standard)</span>
                                        <span className="font-black text-2xl text-pink-500">83</span>
                                    </div>
                                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "83%" }}
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 mt-4 text-[10px] uppercase font-bold text-pink-500/50">
                                        <div>FCP: {PSI_DATA.nextjs.mobile.fcp}</div>
                                        <div>LCP: {PSI_DATA.nextjs.mobile.lcp}</div>
                                        <div>TBT: {PSI_DATA.nextjs.mobile.tbt}</div>
                                        <div>Index: {PSI_DATA.nextjs.mobile.index}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-200 text-sm text-center font-bold">
                                Next.js is 50% faster on total mobile performance.
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP Comparison */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                            <Monitor className="w-6 h-6 text-gray-400" />
                            <h3 className="text-2xl font-bold uppercase tracking-widest">Desktop Comparison</h3>
                        </div>

                        <div className="bg-gray-900/50 p-8 rounded-3xl border border-white/5">
                            <div className="space-y-12">
                                {/* WP BAR */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <span className="font-bold text-gray-400">WordPress (Optimized)</span>
                                        <span className="font-black text-2xl">95</span>
                                    </div>
                                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "95%" }}
                                            className="h-full bg-emerald-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 mt-4 text-[10px] uppercase font-bold text-gray-500">
                                        <div>FCP: {PSI_DATA.wp.desktop.fcp}</div>
                                        <div>LCP: {PSI_DATA.wp.desktop.lcp}</div>
                                        <div>TBT: {PSI_DATA.wp.desktop.tbt}</div>
                                        <div>Index: {PSI_DATA.wp.desktop.index}</div>
                                    </div>
                                </div>

                                {/* NEXTJS BAR */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <span className="font-bold text-pink-500">Next.js (Standard)</span>
                                        <span className="font-black text-2xl text-pink-500">98</span>
                                    </div>
                                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "98%" }}
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 mt-4 text-[10px] uppercase font-bold text-gray-500">
                                        <div>FCP: {PSI_DATA.nextjs.desktop.fcp}</div>
                                        <div>LCP: {PSI_DATA.nextjs.desktop.lcp}</div>
                                        <div>TBT: {PSI_DATA.nextjs.desktop.tbt}</div>
                                        <div>Index: {PSI_DATA.nextjs.desktop.index}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 p-4 text-gray-400 text-center text-sm">
                                On high-performance desktop connections, the gap narrows—but the architecture footprint remains visible.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DEVELOPMENT EXPERIENCE --- */}
            <section className="py-32 bg-zinc-950 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                                    <h4 className="font-bold text-white uppercase text-xs tracking-widest text-blue-400">WordPress</h4>
                                    <p className="text-sm text-gray-400">Plugin-first. Quick visual edits. Massive community for pre-built solutions.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                                    <h4 className="font-bold text-white uppercase text-xs tracking-widest text-pink-500">Next.js</h4>
                                    <p className="text-sm text-gray-400">Code-first. Component-driven. Built for version control and CI/CD pipelines.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <h2 className="text-4xl font-bold mb-6">Workflow & <span className="text-pink-500">Evolution</span>.</h2>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                Choosing a stack isn't just about speed; it's about how your team works. WordPress provides an all-in-one ecosystem for non-technical users, while Next.js offers an engineering-first playground for building proprietary value.
                            </p>
                            <p className="text-gray-500 italic text-sm">
                                "The best tool is the one that solves your business problem without creating a bottleneck."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THE ANALOGY --- */}
            <section className="py-48 bg-zinc-950 overflow-hidden relative">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-7xl font-black mb-24 tracking-tighter">THE LIFESTYLE.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        {/* Camper Van (WordPress) */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="p-12 rounded-[4rem] bg-gray-900 border border-white/5 relative group overflow-hidden"
                        >
                            {/* Abstract Van Graphic */}
                            <div className="relative h-48 mb-12 flex items-center justify-center">
                                <motion.div
                                    className="w-48 h-24 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl relative"
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Windows */}
                                    <div className="absolute top-2 left-2 w-12 h-8 bg-blue-400/20 rounded-md"></div>
                                    <div className="absolute top-2 left-16 w-20 h-8 bg-blue-400/20 rounded-md"></div>

                                    {/* Interior 'Everything Included' elements */}
                                    <div className="absolute bottom-2 left-4 w-8 h-4 bg-white/10 rounded-sm"></div> {/* Bed */}
                                    <div className="absolute bottom-2 left-14 w-4 h-4 bg-blue-500/40 rounded-full"></div> {/* Sink/Water */}

                                    {/* Wheels */}
                                    <div className="absolute -bottom-3 left-6 w-8 h-8 bg-zinc-800 rounded-full border-2 border-zinc-700"></div>
                                    <div className="absolute -bottom-3 right-6 w-8 h-8 bg-zinc-800 rounded-full border-2 border-zinc-700"></div>

                                    {/* Roof Rack / Plugins */}
                                    <div className="absolute -top-4 inset-x-4 h-4 bg-white/5 border border-white/10 rounded-t-lg flex justify-around items-center px-4">
                                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                                    </div>
                                </motion.div>
                                <div className="absolute -bottom-4 text-[10px] font-mono text-blue-500/50 uppercase tracking-widest flex gap-4">
                                    <span>Built-in Kitchen</span>
                                    <span>Sleeps 4</span>
                                    <span>All-in-One</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-4">The Camper Van</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Great for a family trip. It has beds, kitchen, bathroom, everything included. Comfortable and reliable—but its weight means it won't win a race.
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-blue-500/50"></span>
                                <div className="text-xs font-bold uppercase tracking-widest text-blue-400">WordPress Experience</div>
                            </div>
                        </motion.div>

                        {/* Sports Car (Next.js) */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="p-12 rounded-[4rem] bg-white/5 border border-pink-500/20 relative group overflow-hidden"
                        >
                            {/* Abstract Sports Car Graphic */}
                            <div className="relative h-48 mb-12 flex items-center justify-center">
                                <motion.div
                                    className="w-56 h-16 bg-pink-500/5 border-2 border-pink-500/40 rounded-full relative"
                                    style={{ borderRadius: '100px 300px 50px 50px' }}
                                    whileHover={{ x: 10 }}
                                >
                                    {/* Cockpit */}
                                    <div className="absolute -top-4 left-12 w-24 h-12 bg-pink-500/20 border border-pink-500/30 rounded-t-full"></div>

                                    {/* Glow Engine */}
                                    <motion.div
                                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-pink-500 blur-xl rounded-full"
                                    ></motion.div>

                                    {/* Wheels */}
                                    <div className="absolute -bottom-2 left-10 w-10 h-10 bg-zinc-900 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-pink-500/20 rounded-full animate-spin"></div>
                                    </div>
                                    <div className="absolute -bottom-2 right-12 w-10 h-10 bg-zinc-900 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                                        <div className="w-4 h-4 bg-pink-500/20 rounded-full animate-spin"></div>
                                    </div>

                                    {/* Speed Lines */}
                                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                                        <motion.div animate={{ x: [-10, 0, -10] }} transition={{ repeat: Infinity }} className="w-8 h-px bg-pink-500/30"></motion.div>
                                        <motion.div animate={{ x: [-20, 0, -20] }} transition={{ repeat: Infinity, delay: 0.1 }} className="w-12 h-px bg-pink-500/50"></motion.div>
                                        <motion.div animate={{ x: [-15, 0, -15] }} transition={{ repeat: Infinity, delay: 0.2 }} className="w-10 h-px bg-pink-500/30"></motion.div>
                                    </div>
                                </motion.div>
                                <div className="absolute -bottom-4 text-[10px] font-mono text-pink-500/50 uppercase tracking-widest flex gap-4">
                                    <span>Aerodynamic</span>
                                    <span>0-100 in 2.1s</span>
                                    <span>Race Ready</span>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold mb-4 text-pink-500">The Sports Car</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Built for pure velocity. Lightweight, aerodynamic, and high-performance. Every gram is optimized for speed, but requires specialized handling.
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-pink-500/50"></span>
                                <div className="text-xs font-bold uppercase tracking-widest text-pink-500">Next.js Experience</div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-20 max-w-2xl mx-auto"
                    >
                        <p className="text-xl md:text-3xl font-bold italic text-gray-300">
                            "If you are going on a family trip, choose the van. But if you are competing to win, you're driving the wrong vehicle."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- FINAL VERDICT --- */}
            <section className="py-32 px-4 max-w-4xl mx-auto text-center">
                <div className="w-20 h-20 bg-pink-500 rounded-2xl mx-auto mb-12 flex items-center justify-center rotate-3 border-4 border-white shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                    <Trophy className="text-white w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">THE VERDICT.</h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-12">
                    As always, there is no one size fits all solution. It depends on your needs and expectations.
                </p>
                <p className="text-xl text-gray-400 leading-relaxed mb-12">
                    Next.js is consistently faster, even when comparing a standard setup to a highly optimized WordPress site. Speed isn't just a number—it's the foundation of modern user experiences.
                </p>

                <div className="bg-gray-900 border border-white/10 p-12 rounded-[2.5rem]">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">When to choose what</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div className="space-y-4">
                            <h5 className="font-bold text-white flex items-center gap-2">
                                <Info className="w-4 h-4 text-blue-400" /> Stick with WP:
                            </h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Simple content publishing</li>
                                <li>• No internal dev resources</li>
                                <li>• Ecosystem of 50k+ plugins</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h5 className="font-bold text-white flex items-center gap-2">
                                <Zap className="w-4 h-4 text-pink-500" /> Switch to Next.js:
                            </h5>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Conversion-critical commerce</li>
                                <li>• High-performance branding</li>
                                <li>• Complex interactivity & scale</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}

