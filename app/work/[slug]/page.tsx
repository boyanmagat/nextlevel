"use client";

import { use } from "react";
import { CASE_STUDIES } from "../data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import WpvNextJs from "../posts/WpvNextJs";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const study = CASE_STUDIES.find((s) => s.slug === slug);

    if (slug === "wordpress-vs-nextjs") {
        return <WpvNextJs />;
    }

    if (!study) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/work" className="text-pink-500 hover:underline">
                        Return to Work
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-black text-white pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Back Link */}
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>

                {/* Header */}
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12"
                    >
                        <div>
                            <div className="flex items-center gap-4 text-pink-500 font-bold uppercase tracking-widest text-sm mb-4">
                                <span>{study.industry}</span>
                                <span>•</span>
                                <span>{study.service}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                                {study.client}
                            </h1>
                        </div>
                        <div className="flex gap-4">
                            {study.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 bg-white/5"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </header>

                {/* Stats Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {study.results.map((result, index) => (
                        <motion.div
                            key={result.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-gray-900 border border-white/10 p-8 rounded-2xl"
                        >
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">
                                {result.value}
                            </div>
                            <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">
                                {result.label}
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Content Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-pink-500">The Problem</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {study.challenge}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-green-500">The Solution</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {study.solution}
                        </p>
                    </div>
                </section>

                {/* Visual Placeholder */}
                <div className="aspect-video bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center text-gray-600 mb-24">
                    <div className="text-center">
                        <p className="text-lg font-bold mb-2">Project Visuals</p>
                        <p className="text-sm font-mono">{study.images.hero}</p>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center border-t border-white/10 pt-24">
                    <h3 className="text-3xl font-bold mb-8">Ready to engineer your revenue growth?</h3>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/request-quote"
                            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            Book an Audit
                        </Link>
                        <Link
                            href="/work"
                            className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                        >
                            View All Work
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
