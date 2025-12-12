"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
    const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);

    return (
        <div className="flex flex-col min-h-screen pt-24 px-4">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-16">
                    <Link href="/blog" className="text-gray-500 hover:text-white mb-4 inline-block">← All Categories</Link>
                    <h1 className="text-6xl font-bold capitalize">{categoryName} <span className="text-gray-600">Insights</span></h1>
                </div>

                {/* Grid Reuse (simplified for brevity) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <Link href="/blog/sample-post" key={i}>
                            <motion.div
                                className="group cursor-pointer"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="aspect-video bg-gray-900 rounded-xl mb-4 border border-white/10"></div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-500 transition-colors">Example {categoryName} Article {i}</h3>
                                <p className="text-gray-400">This is a placeholder for a filtered list of articles belonging to the {categoryName} category.</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
