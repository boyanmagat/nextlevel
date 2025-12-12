"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero */}
            <section className="px-4 mb-32">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black mb-12 tracking-tighter"
                    >
                        THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">COLLECTIVE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-300 max-w-3xl leading-relaxed font-light"
                    >
                        We are a team of obsessesive engineers and designers. We believe the web has lost its soul to generic templates and bloated frameworks. We're here to bring it back.
                    </motion.p>
                </div>
            </section>

            {/* Values */}
            <section className="px-4 py-24 border-y border-white/10 bg-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    {[
                        { title: "No Templates", desc: "Every line of code is written with purpose. We don't copy-paste; we architect." },
                        { title: "Performance First", desc: "If it doesn't load in under 100ms, it's a bug. Speed is our primary feature." },
                        { title: "Radical Transparency", desc: "You see our git commits. You join our internal Slack. We work as your internal team." }
                    ].map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-white border-l-2 border-pink-500 pl-4">{val.title}</h3>
                            <p className="text-gray-400 pl-4.5">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="px-4 py-32 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16">The Minds.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Julien F.", role: "Managing Director", image: "/team/julien_v3.png" },
                        { name: "Ivo N.", role: "Tech Director", image: "/team/ivo.png" },
                        { name: "Sarah K.", role: "Head of Design", image: "/team/julien_v3.png" }, // Placeholder image
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900 border border-white/10"
                        >
                            {/* Using same images for demo purposes */}
                            <div className="absolute inset-0 bg-gray-800"></div> {/* Fallback color */}
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                                <h3 className="text-2xl font-bold">{member.name}</h3>
                                <p className="text-pink-500 text-sm font-mono">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
