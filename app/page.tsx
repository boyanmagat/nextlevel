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
            We craft digital experiences that defy expectations.
            Headless architecture meets limitless creativity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
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

      {/* NEW: Featured Case Study */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900 aspect-video md:aspect-[21/9] group cursor-pointer"
        >
          {/* Placeholder Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 to-black opacity-80 group-hover:scale-105 transition-transform duration-700"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="text-pink-500 font-bold tracking-widest uppercase mb-4 text-sm">Featured Project</div>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Neon Commerce <br /> Replatforming</h3>
            <div className="flex flex-wrap gap-8 text-gray-300">
              <motion.div whileHover={{ y: -5 }} className="transition-transform">
                <span className="block text-3xl font-bold text-white">400%</span>
                <span className="text-sm">Faster Load Time</span>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="transition-transform">
                <span className="block text-3xl font-bold text-white">99/100</span>
                <span className="text-sm">Lighthouse Score</span>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="transition-transform">
                <span className="block text-3xl font-bold text-white">35%</span>
                <span className="text-sm">Conversion Lift</span>
              </motion.div>
            </div>
            <div className="mt-8 flex items-center text-white font-bold group-hover:text-pink-500 transition-colors">
              View Case Study <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </motion.div>
      </section>

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
          We don't just write code. <br />
          We architect <span className="text-purple-400">futures</span>.
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Headless Commerce", desc: "Blazing fast storefronts that convert." },
            { title: "Immersive 3D", desc: "WebGL experiences that captivate." },
            { title: "Content Systems", desc: "Sanity studios that editors actually love." }
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
                We've bet our reputation on the "Next.js + Sanity" combo. It's the only architecture that satisfies both developers and marketing teams.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Next.js 16", desc: "Server Actions and PPR for instant interactions." },
                  { title: "Sanity.io", desc: "Structured content that treats your data as an API." },
                  { title: "Vercel", desc: "Edge network delivery at the speed of light." }
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

      {/* NEW: Process Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-16"
        >
          How We Build
        </motion.h2>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", name: "Discovery", desc: "We map your goals to technical requirements." },
              { step: "02", name: "Architect", desc: "Designing the content model and component systems." },
              { step: "03", name: "Build", desc: "Rapid development with Next.js & Tailwind." },
              { step: "04", name: "Launch", desc: "Automated testing and Vercel deployment." }
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative bg-black p-6 border border-white/10 rounded-xl z-10 hover:border-pink-500 transition-colors"
              >
                <div className="text-sm font-bold text-pink-500 mb-2">PHASE {phase.step}</div>
                <h3 className="text-2xl font-bold mb-3">{phase.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
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
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Pixel Perfect <br /> Execution.</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We don't rely on guesswork. Our team is certified in the <span className="text-white font-bold">Epic Web "Pixel Perfect Figma to Tailwind"</span> workflow.
              </p>
              <ul className="space-y-4 mb-8">
                {["1:1 Design to Code Accuracy", "Advanced Tailwind Architecture", "Responsive Precision"].map((item) => (
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
                desc: "Multi-tenant architectures that scale to millions.",
                icon: "🚀",
                features: ["Auth & RBAC", "Subscription Billing", "Real-time Data"]
              },
              {
                title: "Internal Tools",
                desc: "Dashboards that automate your business logic.",
                icon: "⚡",
                features: ["Admin Panels", "Workflow Automation", "Data Visualization"]
              },
              {
                title: "Mobile Native",
                desc: "React Native apps that feel truly native.",
                icon: "📱",
                features: ["iOS & Android", "Offline First", "Push Notifications"]
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

      {/* NEW: Team Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 w-full">
        <h2 className="text-4xl font-bold mb-12">The Minds.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {[
            { name: "Julien F.", role: "Co-Founder & Managing Director", stack: "Growth", image: "/team/julien_v3.png" },
            { name: "Ivo N.", role: "Co-Founder & Tech Director", stack: "Next.js", image: "/team/ivo.png" }
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
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to disrupt?</h2>
          <Link href="/contact" className="inline-block px-12 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xl font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95">
            Launch Project
          </Link>
        </motion.div>
      </section>
    </div >
  );
}
