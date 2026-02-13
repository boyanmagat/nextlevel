"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeamIndexClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">MINDS</span>.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We are a collective of obsessive engineers and designers.
                        <br />Meet the team behind the code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mx-auto mb-24">
                    {[
                        { name: "Julien F.", role: "Managing Director", stack: "Growth", image: "/team/julien_v3.png", link: "/team/julien" },
                        { name: "Ivo N.", role: "Tech Director", stack: "Next.js", image: "/team/ivo.png", link: "/team/ivo" }
                    ].map((member, i) => (
                        <Link href={member.link} key={i} className="block w-full">
                            <motion.div
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
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
