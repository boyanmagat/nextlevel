"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileDevPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        NATIVE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">EVERYWHERE</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        iOS and Android from a single codebase. React Native driven performance that rivals Swift and Kotlin.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-4 bg-white/5 border-y border-white/10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "One Codebase", desc: "Share up to 90% of code between platforms. Launch faster, maintain less.", icon: "⚡" },
                        { title: "Native Modules", desc: "We bridge native logic when JS isn't enough. Full access to camera, gyro, and bluetooth.", icon: "🔌" },
                        { title: "OTA Updates", desc: "Push hotfixes instantly without waiting for App Store review. CodePush enabled.", icon: "🚀" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 border border-white/10 rounded-2xl bg-black/40"
                        >
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 px-4 max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">The Mobile Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-blue-400">Expo Router</h3>
                        <p className="text-gray-400">File-based routing just like Next.js. Deep linking, universal links, and navigation handled automatically.</p>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-2xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-orange-400">Tamagui / NativeWind</h3>
                        <p className="text-gray-400">Styling that compiles to native optimized code. Smooth animations at 120fps.</p>
                    </div>
                </div>
            </section>

            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-blue-600 rounded-full text-xl font-bold hover:bg-blue-500 transition-colors">
                    Start Your App
                </Link>
            </section>
        </div>
    );
}
