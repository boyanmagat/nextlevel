"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const POSTS = [
    {
        title: "Why We Moved From Redux to React Query",
        excerpt: "State management doesn't have to be painful. Here is how we reduced our boilerplate by 80%.",
        category: "Engineering",
        slug: "redux-to-react-query",
        date: "Oct 24, 2024",
        readTime: "5 min read",
        image: "/blog/post1.jpg" // Placeholder path
    },
    {
        title: "The Ultimate Guide to Next.js 14 Server Actions",
        excerpt: "Mutations directly in your components? Yes, please. A deep dive into the new mental model.",
        category: "Next.js",
        slug: "nextjs-server-actions",
        date: "Nov 12, 2024",
        readTime: "8 min read",
        image: "/blog/post2.jpg"
    },
    {
        title: "Design Tokens: Scaling Figma to 100+ Screens",
        excerpt: "How to structure your variables for dark mode, density, and multi-brand support.",
        category: "Design",
        slug: "design-tokens-scaling",
        date: "Dec 01, 2024",
        readTime: "6 min read",
        image: "/blog/post3.jpg"
    },
    {
        title: "Headless Shopify: The 2025 Architecture",
        excerpt: "Stop using Liquid. Build a custom storefront that converts better and loads faster.",
        category: "Strategy",
        slug: "headless-shopify-architecture",
        date: "Dec 08, 2024",
        readTime: "10 min read",
        image: "/blog/post4.jpg"
    }
];

export default function BlogIndexPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24 px-4">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <section className="mb-24 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
                    >
                        INSIGHTS
                    </motion.h1>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["All", "Engineering", "Design", "Strategy", "Next.js"].map((cat) => (
                            <Link href={cat === "All" ? "/blog" : `/blog/category/${cat.toLowerCase()}`} key={cat} className="px-6 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors text-sm font-bold">
                                {cat}
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Featured Post (First item) */}
                <section className="mb-24">
                    <Link href={`/blog/${POSTS[0].slug}`}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-video md:aspect-[21/9] bg-gray-900 rounded-3xl overflow-hidden group border border-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80"></div>
                            {/* Placeholder for real image */}
                            <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-4xl">
                                <div className="flex items-center gap-4 mb-4 text-sm font-bold">
                                    <span className="text-pink-500 uppercase tracking-widest">{POSTS[0].category}</span>
                                    <span className="text-gray-400">{POSTS[0].date}</span>
                                </div>
                                <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight group-hover:text-pink-100 transition-colors">{POSTS[0].title}</h2>
                                <p className="text-xl text-gray-300 line-clamp-2 md:line-clamp-none">{POSTS[0].excerpt}</p>
                            </div>
                        </motion.div>
                    </Link>
                </section>

                {/* Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {POSTS.slice(1).map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer h-full flex flex-col"
                            >
                                <div className="aspect-video bg-gray-900 rounded-xl mb-6 overflow-hidden border border-white/10">
                                    <div className="w-full h-full bg-gray-800 group-hover:scale-110 transition-transform duration-500"></div>
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
                </section>

                {/* Subscribe */}
                <section className="py-24 border-t border-white/10 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Stay in the loop.</h2>
                    <p className="text-gray-400 mb-8">Join 5,000+ developers getting our weekly deep dives.</p>
                    <form className="flex gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-pink-500 transition-colors" />
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">Subscribe</button>
                    </form>
                </section>

            </div>
        </div>
    );
}
