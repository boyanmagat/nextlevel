"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Code2, Terminal, Cpu, Globe, ArrowLeft } from "lucide-react";

export default function IvoProfile() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-pink-500/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
                <Link href="/about" className="flex items-center gap-2 hover:opacity-70 transition-opacity group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold tracking-widest text-sm">BACK TO TEAM</span>
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/team/ivo.png" // Ensure this image exists or use a placeholder
                        alt="Ivo N. - Tech Director"
                        fill
                        className="object-cover opacity-40 scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none mb-6 mix-blend-overlay">
                            IVO N.
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light text-gray-300">
                            <span className="flex items-center gap-2">
                                <Terminal className="w-6 h-6 text-pink-500" />
                                Tech Director
                            </span>
                            <span className="hidden md:block w-px h-8 bg-white/20" />
                            <span className="flex items-center gap-2">
                                <Cpu className="w-6 h-6 text-purple-500" />
                                Systems Architect
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bio & Intro */}
            <section className="py-24 px-4 bg-black relative z-10">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold mb-12 leading-tight"
                    >
                        I don't just write code. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                            I engineer reality.
                        </span>
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-400 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Obsessed with performance since 2010. I believe that a website should feel instantaneous, fluid, and alive. If there is a millisecond of lag, I take it personally.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            My approach combines rigorous engineering discipline with creative freedom. I build systems that allow brands to scale without losing their soul.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 border-y border-white/5 bg-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-xs font-bold text-gray-500 tracking-[0.2em] mb-12 uppercase text-center">Technical Arsenal</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Next.js", level: "Elite", icon: "⚡" },
                            { name: "React", level: "Expert", icon: "⚛️" },
                            { name: "TypeScript", level: "Native", icon: "📘" },
                            { name: "Sanity", level: "Partner", icon: "🤯" },
                            { name: "Node.js", level: "Advanced", icon: "🟢" },
                            { name: "AWS", level: "Architect", icon: "☁️" },
                            { name: "GraphQL", level: "Fluent", icon: "◈" },
                            { name: "Vercel", level: "Pro", icon: "▲" },
                        ].map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                className="p-6 rounded-2xl bg-black border border-white/10 flex flex-col items-center justify-center gap-4 group cursor-default transition-colors"
                            >
                                <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">{skill.icon}</span>
                                <div className="text-center">
                                    <div className="font-bold text-white">{skill.name}</div>
                                    <div className="text-xs text-gray-500 font-mono mt-1">{skill.level}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifestyle Gallery */}
            <section className="py-32 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4">Offline Mode.</h3>
                            <p className="text-gray-400 max-w-md">When I'm not deploying to production, I'm usually lost in the mountains or exploring new cultures.</p>
                        </div>
                        <div className="flex gap-4">
                            {/* Decorative tags */}
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">⛷️ Skiing</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">🏔️ Hiking</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">✈️ Travel</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                        {/* 1. Antelope Canyon (2x2) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-50px" }}
                            className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/antelope.jpg"
                                alt="Antelope Canyon"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-2xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Light & Shadow</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ margin: "-50px" }}
                            className="relative md:col-span-2 rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/kayak.jpg"
                                alt="Kayaking Adventure"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">On The Water</span>
                            </div>
                        </motion.div>

                        {/* 2. Kayak (2x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ margin: "-50px" }}
                            className="relative rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/kayak.jpg"
                                alt="Kayaking Adventure"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">On The Water</span>
                            </div>
                        </motion.div>

                        {/* 3. Meditation (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ margin: "-50px" }}
                            className="relative rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/meditation.jpg"
                                alt="Meditation"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Quiet Mind</span>
                            </div>
                        </motion.div>

                        {/* 4. Skiing (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            viewport={{ margin: "-50px" }}
                            className="relative rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/skiing.jpg"
                                alt="Skiing"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Alpine Focus</span>
                            </div>
                        </motion.div>

                        {/* 5. Brussels (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ margin: "-50px" }}
                            className="relative rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/atomium.jpg"
                                alt="Brussels Atomium"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Design</span>
                            </div>
                        </motion.div>

                        {/* 6. Family (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            viewport={{ margin: "-50px" }}
                            className="relative rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/family.jpg"
                                alt="Family"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">My Team</span>
                            </div>
                        </motion.div>

                        {/* 8. Swiss (2x2) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ margin: "-50px" }}
                            className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/swiss.jpg"
                                alt="Switzerland"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-2xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Swiss Alps</span>
                            </div>
                        </motion.div>

                        {/* 9. Hike (2x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ margin: "-50px" }}
                            className="relative md:col-span-2 rounded-3xl overflow-hidden group"
                        >
                            <Image
                                src="/team/ivo/hike.jpg"
                                alt="Hiking Adventure"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-white font-bold text-xl drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">The Ascent</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Link */}
            <section className="py-24 text-center">
                <Link href="/contact" className="inline-block relative group">
                    <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-500">
                        LET'S BUILD
                    </span>
                    <div className="h-2 w-full bg-white/10 mt-4 rounded-full overflow-hidden">
                        <div className="h-full bg-pink-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                </Link>
            </section>
        </div>
    );
}
