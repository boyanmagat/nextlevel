import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedServiceProps {
    service: {
        title: string;
        slug: string;
        description: string;
    };
}

export default function RelatedService({ service }: RelatedServiceProps) {
    if (!service) return null;

    return (
        <section className="bg-gradient-to-r from-gray-900 via-gray-900 to-black border-y border-white/10 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                            Related Capabilities
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm max-w-lg">
                            {service.description}
                        </p>
                    </div>

                    <Link
                        href={service.slug}
                        className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform"
                    >
                        Explore Service
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
