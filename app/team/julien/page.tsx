
import { Metadata } from 'next';
import JulienProfileClient from './JulienProfileClient';

export const metadata: Metadata = {
    title: 'Julien F. - Managing Director & Growth Strategist',
    description: "Meet Julien F., our Managing Director specializing in global strategy, operational excellence, and business growth.",
    openGraph: {
        title: 'Julien F. - Managing Director & Growth Strategist',
        description: "Meet Julien F., our Managing Director specializing in global strategy, operational excellence, and business growth.",
        images: [
            {
                url: '/team/julien.png',
                width: 1200,
                height: 630,
                alt: 'Julien F. - Managing Director',
            },
        ],
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Julien F. - Managing Director & Growth Strategist',
        description: "Meet Julien F., our Managing Director specializing in global strategy, operational excellence, and business growth.",
        images: ['/team/julien.png'],
    },
};

export default function JulienProfilePage() {
    return <JulienProfileClient />;
}
