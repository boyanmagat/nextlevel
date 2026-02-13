"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
                    >
                        FREQUENTLY ASKED <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">QUESTIONS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400"
                    >
                        Deep dives into our tech, process, and pricing.
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <FAQ
                        showLink={false}
                        items={[
                            {
                                question: "Will switching to Next.js negatively impact my SEO?",
                                answer: "No. In fact, moving to Next.js is one of the best things you can do for SEO. Unlike standard React apps (SPAs) that search engines struggle to read, Next.js uses Server-Side Rendering (SSR). This means we send a fully formed HTML page to Googlebot effectively instantly. Combined with Vercel's global CDN and automatic image optimization, your Core Web Vitals (speed metrics) will likely turn green, directly boosting your ranking."
                            },
                            {
                                question: "Why should I choose Next.js over WordPress?",
                                answer: "It comes down to Speed, Security, and Scalability. WordPress was built for blogging in 2003. It relies on a stack of heavy plugins that slow down your site and open up security holes. Next.js is a modern framework used by Netflix, TikTok, and Nike. It separates your content (Sanity CMS) from your code, meaning your site loads instantly, can't be hacked via plugins, and can scale to millions of users without crashing."
                            },
                            {
                                question: "How does the Content Management System (Sanity) work?",
                                answer: "We use Sanity.io, a 'Headless CMS'. For your marketing team, it looks just like a modern website builder. You get a real-time preview of your changes, drag-and-drop page building, and image cropping. But under the hood, it stores your content as pure data, which allows us to feed it into your website, mobile app, or any other platform instantly. It's the best editor experience on the market."
                            },
                            {
                                question: "Can Next.js handle complex e-commerce?",
                                answer: "Absolutely. Next.js is the gold standard for high-performance e-commerce (\"Composable Commerce\"). We build custom storefronts that connect to Shopify or any other backend. This gives you the inventory management of Shopify but with a frontend that is 10x faster and distinctively yours. No more generic themes."
                            },
                            {
                                question: "How much does a project cost?",
                                answer: "We don't do cookie-cutter pricing because we don't do cookie-cutter work. A high-end marketing site normally lands between $5k - $15k. Complex web applications or large-scale e-commerce migrations start at $20k and can go up to $50k+. We provide fixed-price quotes so you know exactly what the investment is upfront. We focus on ROI—building a tool that pays for itself through higher conversions."
                            },
                            {
                                question: "How long does a typical project take?",
                                answer: "A focused landing page or marketing site can be live in 2-4 weeks. Larger migrations or custom web apps typically take 6-12 weeks. We work in 2-week sprints and give you a live demo link at the end of every sprint so you can see progress in real-time."
                            },
                            {
                                question: "What happens after the website is launched?",
                                answer: "We don't disappear. We offer monthly retainer packages for updates, new features, and performance monitoring. Alternatively, since we build on modern standards, you own the code. Any React developer can pick it up. We also provide training videos for your team on how to use the CMS."
                            }
                        ]}
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
}
