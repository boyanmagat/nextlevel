"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { FigmaSyncGraphic, StorybookGraphic } from "@/components/ServiceGraphics";

const DESIGN_SYSTEM_FAQS = [
    {
        question: "Do you work with Figma?",
        answer: "Yes. We treat Figma as the source of truth. We use tokens (variables) to sync colors, spacing, and typography directly to CSS.",
        category: "Design Systems"
    },
    {
        question: "What is Storybook?",
        answer: "Storybook is a workshop for building UI components in isolation. It allows your designers to verify that the code matches the design perfectly.",
        category: "Design Systems"
    },
    {
        question: "Why do we need a Design System?",
        answer: "Consistency and Speed. Without one, every new feature requires reinventing the wheel. With one, developers just drag-and-drop pre-built Lego blocks.",
        category: "Design Systems"
    }
];

export default function DesignSystemsClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 text-white">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        CHAOS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">tamed</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Bridge the gap between Design and Engineering. We build living component libraries that ensure pixel-perfect consistency at scale.
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
                            A Design System is an investment. It pays off when you have multiple teams working on the same product.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Scaling Startups",
                                desc: "You just hired 5 new engineers and they are all implementing buttons differently. You need a single source of truth.",
                                icon: "📈",
                                gradient: "from-pink-500/20 to-rose-500/20"
                            },
                            {
                                title: "Enterprise Products",
                                desc: "You have 3 different web apps and a mobile app that all look slightly different. You want to unify your brand.",
                                icon: "🏢",
                                gradient: "from-purple-500/20 to-indigo-500/20"
                            },
                            {
                                title: "Rebranding",
                                desc: "You are going through a rebrand and dread the idea of manually updating hex codes across 500 different files.",
                                icon: "🎨",
                                gradient: "from-orange-500/20 to-amber-500/20"
                            },
                            {
                                title: "Efficiency Seekers",
                                desc: "You want to ship features faster by reusing pre-tested, accessible components instead of writing CSS from scratch.",
                                icon: "⚡",
                                gradient: "from-blue-500/20 to-cyan-500/20"
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
                    <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">Design to Code. Instantly.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. Figma Sync */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">Figma Token Sync</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We automate the handoff. When a designer changes the primary color in Figma, a GitHub Action runs and updates your CSS variables automatically.
                                No more "Can you make this blue slightly darker?" messages.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <FigmaSyncGraphic />
                        </div>
                    </div>

                    {/* 2. Storybook */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <StorybookGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Storybook Documentation</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We document every component in Storybook. Your team can browse a live catalog of buttons, inputs, and cards.
                                Every component typically includes controls to test different states (Loading, Error, Disabled).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-pink-950/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Systemizing Design.</h3>
                    </div>
                    <FAQ items={DESIGN_SYSTEM_FAQS} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-pink-600 rounded-full text-xl font-bold hover:bg-pink-500 transition-colors">
                    Unify Your UI
                </Link>
            </section>
        </div>
    );
}
