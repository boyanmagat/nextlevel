"use client";


import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed w-full z-50 top-4 px-4"
        >
            <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-purple-500/10">
                <div>
                    <Link href="/" className="flex items-center gap-2 group">
                        <Logo size={32} />
                        <span className="text-xl font-bold tracking-tighter group-hover:text-pink-500 transition-colors">
                            NEXT<span className="">LEVEL</span>.
                        </span>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-sm font-medium hover:text-pink-400 transition-colors">WORK</Link>
                    <Link href="/services" className="text-sm font-medium hover:text-purple-400 transition-colors">SERVICES</Link>
                    <Link href="/about" className="text-sm font-medium hover:text-blue-400 transition-colors">AGENCY</Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-pink-400 transition-colors">CONTACT</Link>
                </div>
                <div>
                    <Link href="/contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors hover:scale-105 active:scale-95 inline-block">
                        LET'S TALK
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
