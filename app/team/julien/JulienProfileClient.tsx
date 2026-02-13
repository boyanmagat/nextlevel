"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Palette, PenTool, Layout, Globe, ArrowLeft, Lightbulb } from "lucide-react";

export default function JulienProfileClient() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const galleryItems = [
        {
            src: "/team/ivo/antelope.jpg", // Placeholder
            alt: "Design Exploration",
            title: "Visual Research",
            className: "md:col-span-2 md:row-span-2",
            sizes: "(max-width: 768px) 100vw, 50vw",
            titleSize: "text-2xl",
            delay: 0
        },
        {
            src: "/team/ivo/kayak.jpg", // Placeholder
            alt: "Brand Strategy Workshop",
            title: "Strategy Session",
            className: "md:col-span-2",
            sizes: "(max-width: 768px) 100vw, 50vw",
            titleSize: "text-xl",
            delay: 0.1
        },
        {
            src: "/team/ivo/meditation.jpg", // Placeholder
            alt: "Creative Focus",
            title: "Deep Work",
            className: "",
            sizes: "(max-width: 768px) 100vw, 25vw",
            titleSize: "text-xl",
            delay: 0.2
        },
        {
            src: "/team/ivo/ski.jpg", // Placeholder
            alt: "Inspiration",
            title: "Fresh Perspectives",
            className: "",
            sizes: "(max-width: 768px) 100vw, 25vw",
            titleSize: "text-xl",
            delay: 0.25
        },
        {
            src: "/team/ivo/brusel.jpg", // Placeholder
            alt: "Architecture",
            title: "Structure & Form",
            className: "",
            sizes: "(max-width: 768px) 100vw, 25vw",
            titleSize: "text-xl",
            delay: 0.3
        },
        {
            src: "/team/ivo/family.jpg", // Placeholder
            alt: "Team Collaboration",
            title: "Collaboration",
            className: "",
            sizes: "(max-width: 768px) 100vw, 25vw",
            titleSize: "text-xl",
            delay: 0.35
        },
        {
            src: "/team/ivo/swiss.jpg", // Placeholder
            alt: "Global Influences",
            title: "Global Design",
            className: "md:col-span-2 md:row-span-2",
            sizes: "(max-width: 768px) 100vw, 50vw",
            titleSize: "text-2xl",
            delay: 0.4
        },
        {
            src: "/team/ivo/hike.jpg", // Placeholder
            alt: "User Journey Mapping",
            title: "Journey Mapping",
            className: "md:col-span-2",
            sizes: "(max-width: 768px) 100vw, 50vw",
            titleSize: "text-xl",
            delay: 0.5
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            {/* Navigation */}
            <nav className="fixed top-15 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
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
                        src="/team/julien.png"
                        alt="Julien F. - Creative Director"
                        fill
                        className="object-cover opacity-60 scale-105 object-[50%_20%]"
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
                            JULIEN F.
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl md:text-2xl font-light text-gray-300">
                            <span className="flex items-center gap-2">
                                <Palette className="w-6 h-6 text-purple-500" />
                                Creative Director
                            </span>
                            <span className="hidden md:block w-px h-8 bg-white/20" />
                            <span className="flex items-center gap-2">
                                <Layout className="w-6 h-6 text-pink-500" />
                                Brand Strategist
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Backstory */}
            <section className="py-32 px-4 bg-black relative z-10 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-black mb-20 tracking-tighter"
                    >
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">BACKSTORY.</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                        {/* Left Column: The Narrative */}
                        <div className="md:col-span-7 space-y-16 text-lg md:text-xl leading-relaxed text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-3">
                                    <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-400 font-mono tracking-widest">v1.0 • ORIGIN</span>
                                </h3>
                                <p>
                                    Julien's journey began with a <strong className="text-white">Fine Arts degree</strong> and an insatiable curiosity for visual storytelling. While others were learning code syntax, he was mastering the language of color, composition, and human emotion.
                                </p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-3">
                                    <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-400 font-mono tracking-widest">v2.0 • EVOLUTION</span>
                                </h3>
                                <p>
                                    After <strong className="text-white">years in top-tier ad agencies</strong>, he realized that traditional advertising was losing its pulse. He shifted focus to digital experiences, believing that a brand is not just what you see, but how you feel when you interact with it.
                                </p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                                <h3 className="text-white font-bold mb-4 flex items-center gap-3">
                                    <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-gray-400 font-mono tracking-widest">v3.0 • CURRENT STATE</span>
                                </h3>
                                <p>
                                    Today, Julian leads our <strong className="text-white">creative vision</strong>, ensuring every pixel serves a purpose. He bridges the gap between abstract concepts and tangible interfaces, translating business goals into compelling visual narratives that resonate on a human level.
                                </p>
                            </motion.div>
                        </div>

                        {/* Right Column: The "Offline" optimized block */}
                        <div className="md:col-span-5 relative">
                            <div className="sticky top-32">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                                            <Lightbulb className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Creative Daemon</div>
                                            <div className="text-white font-bold">Inspiration Engine</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 italic mb-6 text-sm leading-relaxed">
                                        "When he's not refining design systems or critiquing typography, he's likely exploring obscure art galleries or capturing street photography in monochrome."
                                    </p>
                                    <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                            className="h-full w-1/3 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                        />
                                    </div>
                                    <div className="mt-3 flex justify-between text-xs font-mono text-gray-500">
                                        <span>PID: 1985</span>
                                        <span>Status: FLOWING</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Arsenal */}
            <section className="py-24 border-y border-white/5 bg-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-xs font-bold text-gray-500 tracking-[0.2em] mb-12 uppercase text-center">Design Arsenal</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "Figma", level: "Elite", icon: "🎨" },
                            { name: "Adobe CC", level: "Master", icon: "✨" },
                            { name: "UI/UX", level: "Expert", icon: "🖥️" },
                            { name: "Branding", level: "Visionary", icon: "🔥" },
                            { name: "Strategy", level: "Advanced", icon: "♟️" },
                            { name: "Motion", level: "Pro", icon: "🎬" },
                            { name: "Typography", level: "Obsessive", icon: "Aa" },
                            { name: "Webflow", level: "Fluent", icon: "🕸️" },
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
                            <h3 className="text-4xl md:text-5xl font-bold mb-4">Life in Full Color.</h3>
                            <p className="text-gray-400 max-w-md">Exploring the world through a lens of curiosity, capturing moments that inspire the next big idea.</p>
                        </div>
                        <div className="flex gap-4">
                            {/* Decorative tags */}
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">📷 Photography</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">🎨 Art</span>
                            <span className="px-4 py-2 rounded-full border border-white/10 text-sm hover:bg-white/10 transition-colors cursor-default">🌎 Culture</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: item.delay }}
                                viewport={{ margin: "-50px" }}
                                className={`relative rounded-3xl overflow-hidden group ${item.className}`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    sizes={item.sizes}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className={`text-white font-bold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ${item.titleSize}`}>{item.title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Link */}
            <section className="py-24 text-center">
                <Link href="/contact" className="inline-block relative group">
                    <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-white group-hover:to-gray-500 transition-all duration-500">
                        LET'S CREATE
                    </span>
                    <div className="h-2 w-full bg-white/10 mt-4 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                </Link>
            </section>
        </div>
    );
}
