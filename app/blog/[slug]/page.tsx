"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    // Mock content based on slug could go here
    return (
        <article className="min-h-screen pt-32 pb-24">
            {/* Article Header */}
            <header className="max-w-4xl mx-auto px-4 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-pink-500 mb-6"
                >
                    <span>Engineering</span>
                    <span>•</span>
                    <span>Oct 24, 2024</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-8"
                >
                    Why We Moved From Redux to React Query
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    State management doesn't have to be painful. Here is how we reduced our boilerplate by 80% and improved user experience.
                </motion.p>
            </header>

            {/* Featured Image */}
            <div className="max-w-6xl mx-auto px-4 mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="aspect-video bg-gray-900 rounded-3xl border border-white/10"
                ></motion.div>
            </div>

            {/* Article Body */}
            <div className="max-w-3xl mx-auto px-4 prose prose-invert prose-lg prose-pink">
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <h2>The Problem with Global State</h2>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote>
                    "Client state and server state are inherently different. Treating them the same is the root of all evil."
                </blockquote>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
                </p>
                <h3>Enter React Query</h3>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <pre>
                    <code>
                        const {'{ data, isLoading }'} = useQuery(['todos'], fetchTodos);
                    </code>
                </pre>
                <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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
