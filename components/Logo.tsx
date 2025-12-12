"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
    const strokeWidth = 4;

    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prev => prev + 1);
        }, 10000); // Restart every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                <defs>
                    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" /> {/* Pink-500 */}
                        <stop offset="100%" stopColor="#8b5cf6" /> {/* Violet-500 */}
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* N Shape - Single Continuous Path */}
                <motion.path
                    key={key}
                    d="M12 42 V12 L38 42 V12"
                    stroke="url(#neonGradient)"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    filter="url(#glow)"
                />


            </svg>
        </div>
    );
}
