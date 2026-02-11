"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";
import { POSTS } from "../data";
import BuildersTrap from "../posts/BuildersTrap";
import BanThemeForest from "../posts/BanThemeForest";
import RevenueRule from "../posts/RevenueRule";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = POSTS.find(p => p.slug === slug);

    // If it's one of our special "Visual Essay" posts, render the custom component
    if (slug === "unlimited-trap-builders-vs-custom") {
        return <BuildersTrap />;
    }
    if (slug === "why-we-should-ban-themeforest") {
        return <BanThemeForest />;
    }
    if (slug === "100ms-revenue-rule") {
        return <RevenueRule />;
    }

    // Default Layout for other posts
    return (
        <article className="min-h-screen pt-32 pb-24">
            {/* Article Header */}
            <header className="max-w-4xl mx-auto px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-pink-500 mb-6"
                >
                    <span>{post?.category || "Blog"}</span>
                    <span>•</span>
                    <span>{post?.date || "Today"}</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-8"
                >
                    {post?.title || "Blog Post Not Found"}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    {post?.excerpt}
                </motion.p>
            </header>

            {/* Featured Image */}
            <div className="max-w-6xl mx-auto px-4 mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="aspect-video bg-gray-900 rounded-3xl border border-white/10 flex items-center justify-center text-gray-500"
                >
                    {/* Placeholder for real image */}
                    <span>Featured Image: {post?.image}</span>
                </motion.div>
            </div>

            {/* Article Body */}
            <div className="max-w-3xl mx-auto px-4 prose prose-invert prose-lg prose-pink">
                <p className="lead">
                    This is a placeholder for standard blog content. For the "Visual Essay" examples, please check the specific posts in the Insights section.
                </p>
            </div>

            {/* Footer / More */}
            <footer className="max-w-4xl mx-auto px-4 mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">← Back to Blog</Link>
                <div className="flex gap-4">
                    <button className="text-gray-400 hover:text-white">Share on Twitter</button>
                    <button className="text-gray-400 hover:text-white">Share on LinkedIn</button>
                </div>
            </footer>
        </article>
    );
}
