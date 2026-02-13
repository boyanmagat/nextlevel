import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Next.js Development Agency | Speed & Performance Experts'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#030712',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #1f2937 2%, transparent 0%), radial-gradient(circle at 75px 75px, #1f2937 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                    position: 'relative',
                }}
            >
                {/* Glow Effects */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '20%',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(59, 130, 246, 0.15)',
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '20%',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '40px',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            padding: '8px 24px',
                            borderRadius: '50px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: '#9ca3af',
                            fontSize: 24,
                            fontFamily: 'sans-serif',
                            marginBottom: 40,
                        }}
                    >
                        NextLevel Digital
                    </div>

                    <div
                        style={{
                            fontSize: 84,
                            fontStyle: 'normal',
                            fontWeight: 900,
                            color: 'white',
                            lineHeight: 1,
                            marginBottom: 20,
                            display: 'flex',
                            fontFamily: 'sans-serif',
                        }}
                    >
                        NEXT.JS
                        <span
                            style={{
                                marginLeft: 10,
                                backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6)',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            MASTERY
                        </span>
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: '#d1d5db',
                            maxWidth: '900px',
                            lineHeight: 1.5,
                            fontFamily: 'sans-serif',
                        }}
                    >
                        Delight your users with a website that feels like a native app. Instant load times, better Google and AI rankings.
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
