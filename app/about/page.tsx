"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero */}
            <section className="px-4 pb-24 relative">
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

                {/* Scroll Indicator / Visual Connection */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-50"></div>
            </section>

            {/* We Are Solvers */}
            <section className="relative px-4 py-32 bg-gradient-to-b from-zinc-900/40 to-black text-center text-white border-t border-white/5">
                {/* Decorative background element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black mb-12 tracking-tighter"
                    >
                        WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">SOLVERS</span>.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light space-y-8 text-left md:text-center"
                    >
                        <p>
                            We’ve spent 15 years in this reality, and we know the problem intimately. There are endless tools that do endless things, but when you have a specific need, the available options are almost always... "almost" right. <span className="text-white font-bold">But "almost" never truly cuts it.</span>
                        </p>
                        <p>
                            We know the fatigue of settling—of bending your workflow to fit a tool rather than the other way around. But we also know the feeling of finally having something that just <em>works</em>. That’s the feeling we build for our clients. We don't just build websites; we solve the gap between what is available and what you actually need.
                        </p>
                    </motion.div>
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
            <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/10 w-full">
                <h2 className="text-4xl font-bold mb-16">The Minds.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                    {[
                        { name: "Julien F.", role: "Managing Director", stack: "Growth", image: "/team/julien_v3.png" },
                        { name: "Ivo N.", role: "Tech Director", stack: "Next.js", image: "/team/ivo.png" }
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900 border border-white/10 w-full"
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-lg text-gray-300">{member.role}</p>
                                <div className="mt-6 inline-block px-4 py-2 rounded-full text-sm font-bold bg-white/10 border border-white/20 backdrop-blur-md">
                                    Loves {member.stack}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
