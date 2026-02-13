"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { MOBILE_APP_FAQS } from "@/constants/faq";
import { CrossPlatformGraphic, NativeModuleGraphic } from "@/components/ServiceGraphics";

export default function MobileAppClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 text-white">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        NATIVE APPS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">ONE CODEBASE</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        We build iOS and Android apps using React Native. Get 95% code sharing, native performance, and half the development cost.
                    </p>
                </div>
            </section>

            {/* Right Fit Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Is this the right fit for you?
                        </motion.h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            React Native is the technology of choice for everyone from startups to the Fortune 500 (Facebook, Microsoft, Shopify).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Startups",
                                desc: "You need to launch on both iOS and Android simultaneously to maximize your reach, but you only have budget for one team.",
                                icon: "🚀",
                                gradient: "from-cyan-500/20 to-blue-500/20"
                            },
                            {
                                title: "E-Commerce",
                                desc: "You have a Shopify store and want a dedicated mobile app to increase customer retention and push notifications.",
                                icon: "🛍️",
                                gradient: "from-purple-500/20 to-pink-500/20"
                            },
                            {
                                title: "SaaS Platforms",
                                desc: "You have a web app and want to offer a companion mobile app for users on the go.",
                                icon: "📱",
                                gradient: "from-blue-500/20 to-indigo-500/20"
                            },
                            {
                                title: "Internal Tools",
                                desc: "Your field workforce needs a custom app to track inventory, scan QR codes, or manage logistics.",
                                icon: "🏭",
                                gradient: "from-slate-500/20 to-gray-500/20"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:border-white/30 transition-all hover:scale-[1.02] cursor-default`}
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4 text-sm">Features</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">Native Power. React Speed.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. Cross Platform */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Write Once. Run Everywhere.</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We write your business logic in TypeScript once. It runs natively on iOS and Android.
                                Updates are faster, testing is easier, and your product remains consistent across all devices.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <CrossPlatformGraphic />
                        </div>
                    </div>

                    {/* 2. Device Features */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <NativeModuleGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Full Hardware Access</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Need to access the Camera? GPS? FaceID? Bluetooth? React Native bridges directly to the native device APIs.
                                There is zero compromise on functionality compared to Swift or Kotlin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-cyan-950/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-cyan-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Mobile Development.</h3>
                    </div>
                    <FAQ items={MOBILE_APP_FAQS} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-cyan-600 rounded-full text-xl font-bold hover:bg-cyan-500 transition-colors">
                    Build Your App
                </Link>
            </section>
        </div>
    );
}
