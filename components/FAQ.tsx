"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    limit?: number;
    showLink?: boolean;
    className?: string;
}

export default function FAQ({ items, limit, showLink = true, className = "" }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const displayedItems = limit ? items.slice(0, limit) : items;

    return (
        <div className={`w-full max-w-4xl mx-auto ${className}`}>
            <div className="space-y-4">
                {displayedItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`group border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-colors ${openIndex === index ? "border-pink-500/50 bg-white/10" : "hover:border-white/20"
                            }`}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className={`text-lg font-medium pr-8 transition-colors ${openIndex === index ? "text-pink-400" : "text-white group-hover:text-pink-200"
                                }`}>
                                {item.question}
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                                {openIndex === index ? (
                                    <Minus className="w-6 h-6" />
                                ) : (
                                    <Plus className="w-6 h-6" />
                                )}
                            </span>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {showLink && (
                <div className="mt-12 text-center">
                    <Link
                        href="/faq"
                        className="inline-flex items-center gap-2 text-pink-500 hover:text-white transition-colors font-medium group"
                    >
                        View all Frequently Asked Questions
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            )}
        </div>
    );
}
