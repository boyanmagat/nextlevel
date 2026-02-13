"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Calendar, Rocket, Search } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Review",
        description: "Our team is analyzing your requirements to ensure we're the perfect match.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        icon: Calendar,
        title: "Connect",
        description: "We'll reach out within 24 hours to schedule a discovery call.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20"
    },
    {
        icon: Rocket,
        title: "Launch",
        description: "We align on the vision and start building your future.",
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    }
];

export default function ThankYouPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 pt-24 overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl w-full relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 12 }}
                        className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20"
                    >
                        <CheckCircle className="w-12 h-12 text-green-500" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        RECEIVED<span className="text-pink-500">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Success. We've got your details. Here is exactly what happens next.
                    </motion.p>
                </div>

                {/* Timeline Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (index * 0.2) }}
                            className={`p-8 rounded-3xl border ${step.border} ${step.bg} backdrop-blur-sm relative group overflow-hidden`}
                        >
                            <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <step.icon size={100} />
                            </div>

                            <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center mb-6 border ${step.border}`}>
                                <step.icon className={`w-6 h-6 ${step.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center mt-20"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-pink-500 pb-1"
                    >
                        Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
