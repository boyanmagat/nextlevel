export default function Services() {
    return (
        <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
            <h1 className="text-6xl font-bold mb-16">Services</h1>
            <div className="space-y-32">
                {[
                    { name: "Frontend Architecture", desc: "Building robust, reusable component libraries that stand the test of time." },
                    { name: "Content Strategy", desc: "Designing Sanity schemas that empower your editors to tell stories without blockers." },
                    { name: "Performance Engineering", desc: "Squeezing every millisecond out of the Time to Interactive." }
                ].map((s, i) => (
                    <div key={i} className="border-t border-white/20 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-3xl font-mono text-pink-500">0{i + 1}</div>
                        <div>
                            <h2 className="text-4xl font-bold mb-4">{s.name}</h2>
                            <p className="text-xl text-gray-400">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
