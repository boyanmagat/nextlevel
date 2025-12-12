"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useState } from 'react';

const SERVICES = [
    {
        category: "Engineering",
        items: [
            { title: "Next.js Dev", href: "/services/nextjs", icon: "⚡" },
            { title: "Headless CMS", href: "/services/headless-cms", icon: "📦" },
            { title: "Headless WP", href: "/services/headless-wordpress", icon: "📝" },
        ]
    },
    {
        category: "Product",
        items: [
            { title: "Custom Software", href: "/services/custom-software", icon: "🛠️" },
            { title: "Mobile Apps", href: "/services/mobile-app-development", icon: "📱" },
            { title: "Performance", href: "/services/performance-audit", icon: "🚀" },
        ]
    },
    {
        category: "Design",
        items: [
            { title: "Design Systems", href: "/services/design-systems", icon: "🎨" },
        ]
    }
];

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-full z-50 top-4 px-4"
        >
            <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-purple-500/10 relative">
                <div>
                    <Link href="/" className="flex items-center gap-2 group">
                        <Logo size={32} />
                        <span className="text-xl font-bold tracking-tighter group-hover:text-pink-500 transition-colors">
                            NEXT<span className="">LEVEL</span>.
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setHovered('services')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link href="/services" className="text-sm font-medium hover:text-purple-400 transition-colors py-4">
                            SERVICES
                        </Link>

                        <AnimatePresence>
                            {hovered === 'services' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl overflow-hidden grid grid-cols-3 gap-8"
                                >
                                    {SERVICES.map((cat, i) => (
                                        <div key={i}>
                                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">{cat.category}</h4>
                                            <div className="space-y-4">
                                                {cat.items.map((item, j) => (
                                                    <Link href={item.href} key={j} className="flex items-center gap-3 group/item">
                                                        <span className="text-lg group-hover/item:scale-110 transition-transform">{item.icon}</span>
                                                        <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">{item.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Simple CTA in dropdown */}
                                    <div className="col-span-3 mt-4 pt-4 border-t border-white/10 text-center">
                                        <Link href="/services" className="text-xs font-mono text-pink-500 hover:text-white transition-colors">
                                            View All Capabilities →
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/work" className="text-sm font-medium hover:text-pink-400 transition-colors">WORK</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-blue-400 transition-colors">AGENCY</Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-green-400 transition-colors">INSIGHTS</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden md:inline-block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors hover:scale-105 active:scale-95">
                        LET'S TALK
                    </Link>
                    {/* Mobile Menu Toggle could go here */}
                </div>
            </div>
        </motion.nav>
    );
}
