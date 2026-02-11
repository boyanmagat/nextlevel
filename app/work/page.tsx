"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Work() {
    return (
        <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 text-center"
            >
                <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                    SELECTED <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">WORK</span>.
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    A collection of high-performance digital experiences.
                    <br />Built with Next.js, Sanity, and a lot of caffeine.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {[
                    {
                        client: "Neon Commerce",
                        role: "Replatforming",
                        desc: "Migrating a legacy Magento site to a high-performance Composable Commerce stack.",
                        tags: ["Next.js", "Sanity", "Shopify Plus"],
                        color: "from-pink-500 to-purple-900"
                    },
                    {
                        client: "Vogue Living",
                        role: "Digital Publication",
                        desc: "Interactive storytelling platform with immersive scroll-driven animations.",
                        tags: ["React", "WebGL", "Framer Motion"],
                        color: "from-blue-600 to-black"
                    },
                    {
                        client: "TechFlow SaaS",
                        role: "Product Design",
                        desc: "Enterprise dashboard design system focusing on data visualization and clarity.",
                        tags: ["Figma", "Tailwind", "D3.js"],
                        color: "from-purple-600 to-indigo-900"
                    },
                    {
                        client: "Future Finance",
                        role: "Web App",
                        desc: "Real-time trading platform with sub-millisecond data updates.",
                        tags: ["WebSocket", "Node.js", "Redis"],
                        color: "from-green-600 to-emerald-900"
                    },
                    {
                        client: "Art Basel",
                        role: "Virtual Showroom",
                        desc: "3D virtual gallery experience optimized for mobile devices.",
                        tags: ["Three.js", "R3F", "Blender"],
                        color: "from-yellow-600 to-orange-900"
                    },
                    {
                        client: "Sound & Vision",
                        role: "Brand Site",
                        desc: "Sonic branding agency portfolio with audio-reactive visuals.",
                        tags: ["Web Audio API", "Canvas", "GSAP"],
                        color: "from-red-600 to-rose-900"
                    }
                ].map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 cursor-pointer"
                    >
                        {/* Background & Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="text-pink-500 text-xs font-bold tracking-widest uppercase mb-2">
                                    {project.role}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                    {project.client}
                                </h3>
                                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Hover Arrow */}
                        <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-[-45deg]">
                            <span className="text-white text-xl">→</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-gray-500">More case studies coming soon.</p>
            </div>
        </div>
    )
}
