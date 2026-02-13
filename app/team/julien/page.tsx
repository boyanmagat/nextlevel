
import { Metadata } from 'next';
import JulienProfileClient from './JulienProfileClient';

export const metadata: Metadata = {
    title: 'Julien F. - Creative Director & Brand Strategist',
    description: "Meet Julien F., our Creative Director specializing in brand strategy, UI/UX design, and digital storytelling.",
    openGraph: {
        title: 'Julien F. - Creative Director & Brand Strategist',
        description: "Meet Julien F., our Creative Director specializing in brand strategy, UI/UX design, and digital storytelling.",
        images: [
            {
                url: '/team/julien.png',
                width: 1200,
                height: 630,
                alt: 'Julien F. - Creative Director',
            },
        ],
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Julien F. - Creative Director & Brand Strategist',
        description: "Meet Julien F., our Creative Director specializing in brand strategy, UI/UX design, and digital storytelling.",
        images: ['/team/julien.png'],
    },
};

export default function JulienProfilePage() {
    return <JulienProfileClient />;
}
