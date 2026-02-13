import Link from "next/link";

interface Post {
    slug: string;
    title: string;
}

interface BlogNavigationProps {
    olderPost?: Post;
    newerPost?: Post;
}

export default function BlogNavigation({ olderPost, newerPost }: BlogNavigationProps) {
    return (
        <nav className="border-t border-white/10 bg-black pt-16 pb-24">
            <div className="max-w-6xl mx-auto px-4">
                {/* Back to Blog */}
                <div className="flex justify-center mb-16">
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Blog
                    </Link>
                </div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    {/* Older Post (Left) */}
                    <div>
                        {olderPost ? (
                            <Link href={`/blog/${olderPost.slug}`} className="group block text-left">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 block group-hover:text-pink-500 transition-colors">Previous Post</span>
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:underline decoration-pink-500 underline-offset-4 decoration-2">
                                    {olderPost.title}
                                </h3>
                            </Link>
                        ) : (
                            <div aria-hidden="true" />
                        )}
                    </div>

                    {/* Newer Post (Right) */}
                    <div className="text-left md:text-right">
                        {newerPost ? (
                            <Link href={`/blog/${newerPost.slug}`} className="group block">
                                <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 block group-hover:text-pink-500 transition-colors">Next Post</span>
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:underline decoration-pink-500 underline-offset-4 decoration-2">
                                    {newerPost.title}
                                </h3>
                            </Link>
                        ) : (
                            <div aria-hidden="true" />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
