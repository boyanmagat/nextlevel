"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Delay showing the banner slightly for better entry experience
        const timer = setTimeout(() => {
            const consent = localStorage.getItem("cookie_consent");
            if (!consent) {
                setShow(true);
            } else if (consent === "granted") {
                // If already granted, we ensure gtag gets the update if not already set by default script
                if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
                    (window as any).gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'analytics_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                    });
                }
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie_consent", "granted");
        setShow(false);

        // Update Google Consent Mode
        if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
            (window as any).gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        }
    };

    const declineCookies = () => {
        localStorage.setItem("cookie_consent", "denied");
        setShow(false);
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-8 z-[999] w-[calc(100%-2rem)] sm:max-w-sm bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 backdrop-blur-xl bg-opacity-95"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                                <Cookie size={20} />
                            </div>
                            <h3 className="font-semibold text-white/90 text-lg tracking-tight">Your Privacy</h3>
                        </div>
                        <button
                            onClick={declineCookies}
                            className="text-zinc-500 hover:text-white transition-colors p-1"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                        We use cookies and similar technologies to measure performance and provide standard personalized experiences. By accepting, you consent to our use of Google tools in active mode.
                    </p>

                    <div className="flex gap-3 mt-2">
                        <button
                            onClick={acceptCookies}
                            className="flex-1 bg-white text-black font-semibold py-2.5 px-4 rounded-xl hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
                        >
                            Accept All
                        </button>
                        <button
                            onClick={declineCookies}
                            className="flex-1 bg-zinc-900 text-zinc-300 font-medium py-2.5 px-4 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors"
                        >
                            Decline
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
