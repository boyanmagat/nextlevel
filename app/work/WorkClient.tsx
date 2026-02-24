"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

            <div className="grid grid-cols-1 max-w-4xl mx-auto gap-24">
                {[
                    {
                        client: "Clash of Tech",
                        slug: "wordpress-vs-nextjs",
                        title: "CLASH OF TECH.",
                        role: "Technical Audit",
                        desc: "A head-to-head performance showdown between WordPress and Next.js, analyzed through a modern architectural lens.",
                        tags: ["WordPress", "Next.js", "Performance"],
                        color: "from-pink-500 to-indigo-900",
                        image: "/work/clash_hero.png"
                    }
                ].map((project, i) => (
                    <Link href={`/work/${project.slug || '#'}`} key={i} className="group block space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[3rem] overflow-hidden bg-gray-900 border border-white/10 shadow-2xl"
                        >
                            {/* Background Image */}
                            <Image
                                src={project.image}
                                alt={project.client}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Hover Arrow */}
                            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-[-45deg] z-20">
                                <span className="text-white text-3xl">→</span>
                            </div>
                        </motion.div>

                        {/* Content below image */}
                        <div className="px-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-pink-500 text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap">
                                    {project.role}
                                </div>
                                <div className="h-px w-full bg-gradient-to-r from-pink-500/30 to-transparent"></div>
                            </div>

                            <h3 className="text-4xl md:text-6xl font-black mb-6 text-white group-hover:text-pink-500 transition-colors tracking-tighter">
                                {project.title}
                            </h3>

                            <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 group-hover:border-pink-500/30 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-gray-500">More case studies coming soon.</p>
            </div>
        </div>
    )
}
