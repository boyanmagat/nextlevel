import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-8">
                            <Logo size={60} />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                            Let's build <br /> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">unimaginable</span>.
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-lg">
                        <div>
                            <h3 className="font-bold text-gray-500 mb-4 uppercase text-sm tracking-widest">Explore</h3>
                            <ul className="space-y-2">
                                <li><Link href="/work" className="hover:text-pink-500 transition-colors">Work</Link></li>
                                <li><Link href="/services" className="hover:text-purple-500 transition-colors">Services</Link></li>
                                <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-500 mb-4 uppercase text-sm tracking-widest">Connect</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-pink-500 transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-purple-500 transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} NextLevelDigital.ca. All rights reserved.</p>
                    <p>Designed for the bold.</p>
                </div>
            </div>
        </footer>
    );
}
