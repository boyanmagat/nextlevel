import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Route segment config
export const alt = 'Next Level Digital';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

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
                    backgroundColor: '#000000',
                    fontFamily: 'Inter, "San Francisco", sans-serif',
                    fontWeight: 900,
                    lineHeight: 1.1,
                }}
            >
                {/* Background glow effects to match NextLevel bubbles */}
                <div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '20%',
                        width: '400px',
                        height: '400px',
                        backgroundColor: 'rgba(219, 39, 119, 0.15)', // pink-600 roughly
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        right: '20%',
                        width: '400px',
                        height: '400px',
                        backgroundColor: 'rgba(147, 51, 234, 0.15)', // purple-600
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '400px',
                        height: '400px',
                        backgroundColor: 'rgba(37, 99, 235, 0.15)', // blue-600
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />

                {/* Text Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Top Row: NEXTLEVEL */}
                    <div style={{ display: 'flex', fontSize: 160, letterSpacing: '-0.04em' }}>
                        <span style={{ color: '#ffffff' }}>NEXT</span>
                        <span style={{ color: '#ec4899' /* Fallback */, backgroundImage: 'linear-gradient(to right, #ec4899, #a855f7, #3b82f6)', backgroundClip: 'text', color: 'transparent' }}>
                            LEVEL
                        </span>
                    </div>

                    {/* Bottom Row: DIGITAL */}
                    <div style={{ display: 'flex', fontSize: 160, letterSpacing: '-0.04em', color: '#ffffff', marginTop: -20 }}>
                        DIGITAL
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', marginTop: '60px' }}>
                        <div style={{
                            display: 'flex',
                            padding: '20px 40px',
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            fontWeight: 700,
                            borderRadius: '9999px',
                            fontSize: '24px',
                            letterSpacing: '0.05em'
                        }}>
                            START PROJECT
                        </div>
                        <div style={{
                            display: 'flex',
                            padding: '20px 40px',
                            border: '2px solid rgba(255, 255, 255, 0.15)',
                            color: '#ffffff',
                            fontWeight: 700,
                            borderRadius: '9999px',
                            fontSize: '24px',
                            letterSpacing: '0.05em'
                        }}>
                            VIEW WORK
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
