export default function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
            <div className="max-w-2xl w-full">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center">Say Hello.</h1>
                <form className="space-y-6">
                    <div>
                        <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-pink-500 transition-colors" />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-purple-500 transition-colors" />
                    </div>
                    <div>
                        <textarea rows={4} placeholder="Tell us about your dream" className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                    </div>
                    <button className="w-full bg-white text-black font-bold py-4 rounded-full text-xl hover:bg-gray-200 transition-colors mt-8">
                        Send It
                    </button>
                </form>
            </div>
        </div>
    )
}
