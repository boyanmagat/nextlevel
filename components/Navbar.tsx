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
            { title: "Integrations", href: "/services/custom-integrations", icon: "🔗" },
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
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-full z-60 top-4 px-4"
        >
            <div className={`max-w-6xl mx-auto backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-purple-500/10 relative z-50 transition-colors duration-300 ${isMobileOpen ? 'bg-black/90' : 'bg-white/10'}`}>
                <div className="z-50 relative">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileOpen(false)}>
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

                    <Link href="/work" className="text-sm font-medium hover:text-pink-400 transition-colors">CASE STUDIES</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-blue-400 transition-colors">AGENCY</Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-green-400 transition-colors">INSIGHTS</Link>
                    <Link href="/faq" className="text-sm font-medium hover:text-orange-400 transition-colors">FAQ</Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-yellow-400 transition-colors">CONTACT</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/request-quote" className="hidden md:inline-block bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors hover:scale-105 active:scale-95">
                        LET'S TALK
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50 relative"
                    >
                        <motion.span
                            animate={{ rotate: isMobileOpen ? 45 : 0, y: isMobileOpen ? 8 : 0 }}
                            className="w-6 h-0.5 bg-white origin-center"
                        />
                        <motion.span
                            animate={{ opacity: isMobileOpen ? 0 : 1 }}
                            className="w-6 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={{ rotate: isMobileOpen ? -45 : 0, y: isMobileOpen ? -8 : 0 }}
                            className="w-6 h-0.5 bg-white origin-center"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-3xl z-40 flex flex-col pt-32 px-8 md:hidden"
                    >
                        <div className="flex flex-col space-y-8 text-3xl font-bold">
                            <Link href="/services" onClick={() => setIsMobileOpen(false)} className="hover:text-purple-500 transition-colors">Services</Link>
                            <Link href="/work" onClick={() => setIsMobileOpen(false)} className="hover:text-pink-500 transition-colors">Case Studies</Link>
                            <Link href="/about" onClick={() => setIsMobileOpen(false)} className="hover:text-blue-500 transition-colors">Agency</Link>
                            <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="hover:text-green-500 transition-colors">Insights</Link>
                            <Link href="/faq" onClick={() => setIsMobileOpen(false)} className="hover:text-orange-500 transition-colors">FAQ</Link>
                            <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="hover:text-yellow-500 transition-colors">Contact</Link>
                            <Link href="/request-quote" onClick={() => setIsMobileOpen(false)} className="hover:text-white transition-colors text-pink-500">Start Project</Link>
                        </div>

                        <div className="mt-auto mb-16 border-t border-white/10 pt-8">
                            <p className="text-gray-500 text-sm">
                                HEADLESS SANITY CREATIVE <br />
                                SAN FRANCISCO, CA
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
