"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";
import { POSTS } from "../../data";
import { BuilderThumbnail, ThemeForestThumbnail, RevenueThumbnail, DefaultThumbnail } from "../../thumbnails";

const renderThumbnail = (slug: string) => {
    switch (slug) {
        case "unlimited-trap-builders-vs-custom": return <BuilderThumbnail />;
        case "why-we-should-ban-themeforest": return <ThemeForestThumbnail />;
        case "100ms-revenue-rule": return <RevenueThumbnail />;
        default: return <DefaultThumbnail />;
    }
};

export default function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = use(params);
    const categoryslug = category.toLowerCase();
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    // Filter posts that match the category
    // Note: We need to handle case-insensitive matching carefully. 
    // In page.tsx we used specific casing "Strategy", "Agency", "Performance".
    // "Performance" slug is "performance". 
    // Let's ensure the matching logic is robust. 
    const filteredPosts = POSTS.filter(post => post.category.toLowerCase() === categoryslug);

    return (
        <div className="flex flex-col min-h-screen pt-32 px-4">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-16">
                    <Link href="/blog" className="text-gray-500 hover:text-white mb-4 inline-block font-mono text-sm">← All Categories</Link>
                    <h1 className="text-5xl md:text-7xl font-black capitalize mb-8">{categoryName} <span className="text-gray-600">Insights</span></h1>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, i) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug}>
                                <motion.div
                                    className="group cursor-pointer h-full flex flex-col"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="aspect-video bg-gray-900 rounded-xl mb-6 overflow-hidden border border-white/10 relative">
                                        <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
                                            {renderThumbnail(post.slug)}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3 text-xs font-bold uppercase tracking-wider">
                                            <span className="text-pink-500">{post.category}</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="text-gray-500">{post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-500 transition-colors">{post.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="py-24 text-center border border-white/10 rounded-2xl bg-white/5">
                        <h2 className="text-2xl font-bold mb-4">No posts found in this category.</h2>
                        <p className="text-gray-400 mb-8">Try looking for something else or browse all posts.</p>
                        <Link href="/blog" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                            View All Posts
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
