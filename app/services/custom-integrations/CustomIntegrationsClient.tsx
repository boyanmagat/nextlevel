"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import { NEXT_JS_FAQS } from "@/constants/faq"; // Using General/Next.js FAQs as fallback for now or I should add specific ones
import { ApiMeshGraphic, SyncStatusGraphic } from "@/components/ServiceGraphics";

// Define specific FAQs for Integrations locally if not in global constants yet, or reuse relevant ones.
// For now, I'll create a local set or if I missed adding them to constants/faq.ts, I will define them here.
// Actually, I should probably use a subset or generic ones if specific aren't in faq.ts.
// Let's define some specific ones right here to pass to the FAQ component, 
// matching the pattern of the other files. 
const INTEGRATION_FAQS = [
    {
        question: "Can you connect legal/legacy software?",
        answer: "Yes. If it has an API (SOAP/REST) or even direct database access, we can build a secure bridge to it.",
        category: "Integrations"
    },
    {
        question: "How do you handle rate limits?",
        answer: "We build queuing systems (using Redis or SQS) to throttle requests and ensure your sync never fails, even during peak loads.",
        category: "Integrations"
    },
    {
        question: "Is data synchronized in real-time?",
        answer: "It depends on the API. We support Webhooks for instant real-time sync, or Cron Jobs for scheduled batch updates.",
        category: "Integrations"
    }
];

export default function CustomIntegrationsClient() {
    return (
        <div className="flex flex-col min-h-screen pt-24 text-white">
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center max-w-5xl px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
                    >
                        API <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">ORCHESTRATION</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                        Stop copying data between spreadsheets. We build middleware that connects your CRM, ERP, and payment gateways into one unified system.
                    </p>
                </div>
            </section>

            {/* Educational Section - The Silo Problem */}
            <section className="py-16 px-4 bg-purple-900/10 border-y border-purple-500/20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-sm font-bold text-purple-400 tracking-widest uppercase mb-4">The Problem</h2>
                    <h3 className="text-3xl font-bold mb-6">Data Silos Kill Efficiency.</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Your Sales team lives in Salesforce. Your Warehouse uses NetSuite. Your user data is in Auth0.
                        None of them talk to each other. You're wasting hours on manual CSV exports.
                        <br /><br />
                        <strong>The Solution:</strong> We build "Middleware"—an invisible server that sits in the middle, listening for events and moving data instantly.
                    </p>
                </div>
            </section>

            {/* Right Fit Section */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Is this the right fit for you?
                        </motion.h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Custom integrations are for businesses that have outgrown "Zapier" and need enterprise-grade reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "E-Commerce Logistics",
                                desc: "You need orders from Shopify to automatically push to your 3PL warehouse system and update inventory levels back.",
                                icon: "📦",
                                gradient: "from-blue-500/20 to-cyan-500/20"
                            },
                            {
                                title: "SaaS Platforms",
                                desc: "You need to pull user data from 5 different providers (Stripe, Intercom, AWS) and display it in one dashboard.",
                                icon: "🖥️",
                                gradient: "from-purple-500/20 to-pink-500/20"
                            },
                            {
                                title: "Marketing Automation",
                                desc: "You need precise tracking that attributes a purchase in Stripe back to a specific click in Google Ads.",
                                icon: "🎯",
                                gradient: "from-orange-500/20 to-red-500/20"
                            },
                            {
                                title: "Legacy Migration",
                                desc: "You are moving off a mainframe but need to keep it running in the background while you transition.",
                                icon: "💾",
                                gradient: "from-green-500/20 to-emerald-500/20"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:border-white/30 transition-all hover:scale-[1.02] cursor-default`}
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-purple-500 font-bold tracking-widest uppercase mb-4 text-sm">Capabilities</h2>
                    <h3 className="text-4xl md:text-6xl font-bold">Connecting the Dots.</h3>
                </div>

                <div className="space-y-24">
                    {/* 1. API Mesh */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 order-2 md:order-1">
                            <h4 className="text-3xl font-bold mb-4">The API Mesh</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We create a unified GraphQL or REST API layer that sits in front of all your microservices.
                                Your frontend only ever talks to ONE endpoint. We handle the complexity of routing requests to the right service.
                            </p>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <ApiMeshGraphic />
                        </div>
                    </div>

                    {/* 2. Real-time Sync */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <SyncStatusGraphic />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-3xl font-bold mb-4">Real-Time Sync & Observability</h4>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                We build dashboards that show you exactly what data is moving where.
                                If a sync fails (e.g., Shopify is down), our system automatically retries and alerts you via Slack. No orders lost.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-4 bg-gradient-to-b from-black to-purple-950/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-purple-500 font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">Integration Details.</h3>
                    </div>
                    <FAQ items={INTEGRATION_FAQS} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <Link href="/request-quote" className="px-12 py-5 bg-purple-600 rounded-full text-xl font-bold hover:bg-purple-500 transition-colors">
                    Connect Your Systems
                </Link>
            </section>
        </div>
    );
}
