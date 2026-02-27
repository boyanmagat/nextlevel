"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // Parallax / Scroll hooks could go here for advanced effects

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none"
          >
            NEXT<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">LEVEL</span> <br />
            DIGITAL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light"
          >
            Stop losing sales to slow WooCommerce checkouts and inflexible platforms. We build blazing-fast, high-converting digital experiences that drive real revenue and scale your business seamlessly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link href="/request-quote" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              START PROJECT
            </Link>
            <Link href="/work" className="px-8 py-4 border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-colors">
              VIEW WORK
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee / Clients */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-10 border-y border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden"
      >
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-4xl font-bold mx-8 text-gray-700">NEXT.JS</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">SANITY.IO</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">FIGMA</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">TYPESCRIPT</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">TAILWIND</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">FRAMER MOTION</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">REACT</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">NEXT.JS</span>
          <span className="text-4xl font-bold mx-8 text-gray-700">SANITY.IO</span>
        </div>
      </motion.section>



      {/* Capabilities Overview */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-pink-500 tracking-widest uppercase mb-4"
        >
          Capabilities
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 leading-tight"
        >
          Stop fighting your tech stack. <br />
          We build platforms that <span className="text-purple-400">drive growth</span>.
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "High-Performance Websites",
              desc: "Is your current platform holding back your sales? We build blazing-fast headless commerce and marketing sites that drastically reduce bounce rates, boost SEO, and increase your conversion rates."
            },
            {
              title: "Bespoke Software",
              desc: "Tired of patching together generic plugins? We engineer custom platforms and internal tools tailored to your unique business logic. Automate your workflows, own your data, and save your team hundreds of hours."
            },
            {
              title: "Interactive Design Systems",
              desc: "First impressions equal revenue. We design premium, scalable interfaces that build trust from the first click, ensuring your brand stands out and your customers enjoy a frictionless journey."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-gray-600 group-hover:text-white transition-colors">0{i + 1}</div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* High-Impact Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      {/* NEW: AI Efficiency / Velocity Section */}
      <section className="relative py-32 overflow-hidden bg-black border-y border-white/5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8">
                The AI Multiplier
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight flex flex-wrap items-center gap-6">
                SMARTER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-6xl md:text-8xl italic">VELOCITY.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-light">
                We've re-engineered our development lifecycle using AI. This means you get enterprise-grade digital platforms delivered weeks faster, significantly lowering your build costs without ever sacrificing quality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-blue-500/30 transition-colors">
                  <div className="text-4xl font-black text-blue-400 mb-2">30%</div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">Faster Cycles</div>
                  <p className="text-xs text-gray-500">Accelerated prototyping and automated unit testing means earlier launches.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-emerald-500/30 transition-colors">
                  <div className="text-4xl font-black text-emerald-400 mb-2">40%</div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">Cost Savings</div>
                  <p className="text-xs text-gray-500">Efficiency gains passed directly to you. Premium quality, competitive pricing.</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">AI</div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 italic font-mono">
                  &gt; development_engine --optimized --ai-boost
                </p>
              </div>
            </motion.div>

            {/* Interactive Graph Display with Flow-based AI Badge */}
            <div className="flex flex-col items-center gap-12">
              {/* Vibrant AI Branding Circle sitting in the flow */}
              <div className="relative pointer-events-none select-none">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 40px rgba(236,72,153,0.3)",
                      "0 0 80px rgba(236,72,153,0.5)",
                      "0 0 40px rgba(236,72,153,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-pink-500 bg-black/40 backdrop-blur-md flex items-center justify-center"
                >
                  <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    AI
                  </span>
                </motion.div>

                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 bg-pink-500/10 rounded-full blur-3xl scale-150 animate-pulse"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full relative aspect-square md:aspect-[4/3] bg-gray-900/50 rounded-[2.5rem] border border-white/10 p-8 md:p-12 overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">Metrics_Output</div>
                    <div className="text-2xl font-bold">Efficiency Delta</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-mono animate-pulse">
                    LIVE_SYNC
                  </div>
                </div>

                <div className="flex-1 flex items-end gap-6 md:gap-12 pb-12 pt-20">
                  {/* Traditional Bar */}
                  <div className="flex-1 flex flex-col items-center gap-4 h-full justify-end group/bar">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "60%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="w-full max-w-[60px] bg-gray-800 rounded-t-xl group-hover:bg-gray-700 transition-colors relative"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2 text-[10px] text-gray-500 font-mono">10 Weeks</div>
                    </motion.div>
                    <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-center">Standard <br /> Agency</div>
                  </div>

                  {/* AI-Optimized Bar */}
                  <div className="flex-1 flex flex-col items-center gap-4 h-full justify-end group/bar">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "42%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="w-full max-w-[60px] bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] relative"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2 text-[10px] text-blue-400 font-bold font-mono">7 Weeks</div>
                    </motion.div>
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest text-center italic">AI-Engine <br /> (Us)</div>
                  </div>

                  {/* Quality Bar */}
                  <div className="flex-1 flex flex-col items-center gap-4 h-full justify-end group/bar">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "90%" }}
                      transition={{ duration: 1, delay: 1.1 }}
                      viewport={{ once: true }}
                      className="w-full max-w-[60px] bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] relative"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2 text-[10px] text-emerald-400 font-bold font-mono">98%</div>
                    </motion.div>
                    <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest text-center">Testing <br /> Coverage</div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex gap-4 overflow-x-auto no-scrollbar relative z-10">
                  {["Automation", "Deep Analysis", "Agentic QA", "Synthetic Data"].map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Under the Hood (Tech Stack) */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8">The <span className="text-blue-500">Perfect</span> Stack.</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We've bet our reputation on the "Next.js + Sanity" combo. It's the only architecture that empowers your marketing team while delivering unmatched performance.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Next.js 16", desc: "Lightning-fast load times that drastically reduce mobile bounce rates." },
                  { title: "Sanity.io", desc: "An intuitive CMS that empowers marketing to publish instantly without developers." },
                  { title: "Vercel", desc: "Edge network delivery ensuring 100% uptime during global traffic spikes." },
                  { title: "TypeScript", desc: "Enterprise-grade reliability that minimizes bugs, crashes, and downtime." }
                ].map((tech, i) => (
                  <motion.li
                    key={tech.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 mt-1 mr-4"></div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{tech.title}</h4>
                      <p className="text-gray-400">{tech.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/services" className="inline-flex items-center text-white font-bold group">
                  <span className="border-b-2 border-pink-500 pb-1 group-hover:border-white transition-colors">Explore Stack Services</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  <span className="text-pink-500 font-bold">Alternative:</span> Prefer a more traditional approach?
                  We also offer <span className="text-white font-bold">Headless WordPress</span> solutions for teams that want to keep the familiar admin interface.
                </p>
                <div className="mt-4">
                  <Link href="/services" className="text-sm text-gray-500 hover:text-white transition-colors inline-flex items-center">
                    View WordPress Options <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {["NEXT", "SNTY", "TS", "VRCL"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
                  className={`bg-black border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center aspect-square transition-colors ${i === 1 || i === 2 ? 'mt-12' : ''} ${i === 2 ? '-mt-12' : ''}`}
                >
                  <div className="text-4xl font-bold">{tech}</div>
                  <div className="text-xs text-gray-500 mt-2">TECH</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Custom Software / Bespoke Solutions */}
      <section className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm"
            >
              Beyond the Browser
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold"
            >
              Bespoke <span className="text-blue-500">Software</span>.
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Platforms",
                desc: "Fast-to-market subscription products built for recurring revenue growth.",
                icon: "🚀",
                features: ["Secure User Management", "Automated Billing", "Real-time Analytics"]
              },
              {
                title: "Internal Tools",
                desc: "Custom operations software designed to eliminate manual data entry and save hours of labor.",
                icon: "⚡",
                features: ["Process Automation", "Centralized Dashboards", "Data Visibility"]
              },
              {
                title: "Mobile Native",
                desc: "Engaging mobile experiences that put your brand directly into your customers' pockets.",
                icon: "📱",
                features: ["Cross-Platform Reach", "Offline Capabilities", "Direct Engagement"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-black/40 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group"
              >
                <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-gray-400 mb-6 min-h-[3rem]">{item.desc}</p>
                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Code Snippet Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-900 rounded-xl overflow-hidden border border-white/10 font-mono text-sm shadow-2xl"
          >
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-gray-500">middleware.ts</div>
            </div>
            <div className="p-6 text-gray-300 overflow-x-auto">
              <pre>
                <code>
                  <span className="text-pink-500">export default</span> <span className="text-blue-400">async function</span> <span className="text-yellow-300">middleware</span>(req) {"{"}
                  {"\n  "}<span className="text-purple-400">const</span> session = <span className="text-blue-400">await</span> getSession(req);
                  {"\n  "}<span className="text-pink-500">if</span> (!session.isEnterprise) <span className="text-pink-500">return</span> redirect(<span className="text-green-400">"/upgrade"</span>);
                  {"\n  "}<span className="text-gray-500">// Enterprise logic verified</span>
                  {"\n  "}<span className="text-pink-500">return</span> NextResponse.next();
                  {"\n"}{"}"}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Performance Showcase */}
      <section className="relative py-32 overflow-hidden bg-[#030303] border-y border-white/5">
        {/* Subtle Background Detail */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 text-xs font-bold tracking-widest uppercase mb-8">
              Case Study
            </div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter">
              NEED FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">SPEED</span>.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 max-w-4xl mx-auto gap-12">
            {[
              {
                client: "Clash of Tech",
                slug: "wordpress-vs-nextjs",
                title: "CLASH OF TECH.",
                desc: "WordPress vs Next.js: A professional head-to-head comparison between legacy architecture and the modern web.",
                color: "from-pink-500 to-purple-600",
                image: "/work/clash_hero.png"
              }
            ].map((caseStudy, i) => (
              <Link href={`/work/${caseStudy.slug}`} key={i} className="group block space-y-12">
                {/* Premium Image Container */}
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-square shadow-2xl bg-gray-900 mx-auto max-w-2xl">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.client}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />

                  {/* Subtle Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Content */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px w-12 bg-pink-500"></div>
                    <div className="text-pink-500 font-mono text-xs font-bold uppercase tracking-[0.4em]">
                      Selected Case Study
                    </div>
                    <div className="h-px w-12 bg-pink-500"></div>
                  </div>

                  <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white group-hover:text-pink-500 transition-colors">
                    {caseStudy.title}
                  </h3>

                  <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                    {caseStudy.desc}
                  </p>

                  <div className="inline-flex items-center gap-3 text-white font-bold text-xl border-b-2 border-pink-500 pb-2 hover:gap-6 transition-all duration-300">
                    <span>Explore Technical Audit</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Process Section (Git Pipeline) */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="px-4 md:px-8 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-4xl md:text-5xl font-bold mb-20"
          >
            The <span className="font-mono text-green-500">&lt;Pipeline /&gt;</span>
          </motion.h2>

          <div className="relative">
            {/* Vertical Pipeline Line */}
            <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-16">
              {[
                {
                  step: "git init discovery",
                  title: "Blueprint",
                  desc: "We map your revenue goals to technical requirements. No coding starts until we have a strategy explicitly designed to convert.",
                  icon: "📄"
                },
                {
                  step: "git checkout -b build",
                  title: "Development",
                  desc: "Rapid component development using our internal libraries. We focus on scalability and bullet-proof security from day one.",
                  icon: "🏗️"
                },
                {
                  step: "git commit -m 'launch'",
                  title: "Deployment",
                  desc: "Seamless global deployment via Edge networks. Your site goes live on world-class infrastructure ensuring 100% uptime.",
                  icon: "🚀"
                },
                {
                  step: "git push origin growth",
                  title: "Scale",
                  desc: "Post-launch optimization. We monitor live performance and leverage A/B testing data to continually improve your ROI.",
                  icon: "📈"
                }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Node on Line */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[60px] h-[60px] rounded-full bg-black border-4 border-gray-900 flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-white animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-[80px] md:ml-0 md:w-1/2 pl-0 md:px-12">
                    <div className="bg-gray-900/50 border border-white/10 p-6 rounded-xl relative hover:border-blue-500 transition-colors">
                      {/* Terminal Header */}
                      <div className="font-mono text-xs text-green-400 mb-2 border-b border-white/5 pb-2 flex gap-2">
                        <span className="text-gray-500">$</span> {phase.step}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                        <span>{phase.icon}</span> {phase.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Mastery / Certification */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 md:p-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Mastery</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Premium Brand <br /> Execution.</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We translate your brand vision into reality. Our certified design-to-code workflow ensures your digital presence looks premium and identical to the vision across every device.
              </p>
              <ul className="space-y-4 mb-8">
                {["1:1 Design to Code Accuracy", "Enterprise Brand Consistency", "Responsive Precision"].map((item) => (
                  <li key={item} className="flex items-center text-gray-400">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-pink-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Certified Expert
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video bg-black/50 rounded-xl border border-white/10 flex items-center justify-center p-8 group hover:border-purple-500/50 transition-colors"
            >
              {/* Decorative UI elements mimicking Figma/Code */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,51,122,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_infinite]"></div>

              <div className="text-center relative">
                <div className="text-6xl md:text-8xl mb-4">💎</div>
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                  PIXEL PERFECT
                </div>
                <div className="text-xs text-gray-500 mt-2 font-mono">FIGMA &rarr; TAILWIND</div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>





      {/* NEW: Team Section */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto border-t border-white/10 w-full">
        <h2 className="text-4xl font-bold mb-12">The Minds.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {[
            { name: "Julien F.", role: "Managing Director", stack: "Growth", image: "/team/julien_v3.png", link: "/team/julien" },
            { name: "Ivo N.", role: "Tech Director", stack: "Next.js", image: "/team/ivo.png", link: "/team/ivo" }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900 border border-white/10 w-full"
            >
              <Link href={member.link} key={i} className="block w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-300">{member.role}</p>
                  <div className="mt-6 inline-block px-4 py-2 rounded-full text-sm font-bold bg-white/10 border border-white/20 backdrop-blur-md">
                    Loves {member.stack}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual Statement */}
      <section className="h-[60vh] md:h-[80vh] bg-gradient-to-br from-purple-900 via-black to-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-black to-black"></div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative z-10 text-6xl md:text-9xl font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent opacity-80"
        >
          MAKE IT <br /> REAL
        </motion.h2>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to accelerate your growth?</h2>
          <Link href="/request-quote" className="inline-block px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95">
            Launch Project
          </Link>
        </motion.div>
      </section>
    </div >
  );
}
