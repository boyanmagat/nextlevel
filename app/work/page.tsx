export default function Work() {
    return (
        <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
            <h1 className="text-6xl font-bold mb-16">Selected Work</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                        <span className="text-2xl font-bold text-gray-600">Project 0{i} Placeholder</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
