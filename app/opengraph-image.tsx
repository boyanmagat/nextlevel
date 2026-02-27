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
    // We use a base64 encoded SVG for the background to get around Satori's lack of support for CSS filters and radial gradients.
    const bgSvgBase64 = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjYzMCI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJwIiBjeD0iMCUiIGN5PSIwJSIgcj0iNzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZWM0ODk5IiBzdG9wLW9wYWNpdHk9IjAuMiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImIiIGN4PSIxMDAlIiBjeT0iMTAwJSIgcj0iNzAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjM2I4MmY2IiBzdG9wLW9wYWNpdHk9IjAuMiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSIjMDAwMDAwIi8+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSJ1cmwoI3ApIi8+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjMwIiBmaWxsPSJ1cmwoI2IpIi8+PC9zdmc+';

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
                    fontFamily: '"Inter", "San Francisco", sans-serif',
                }}
            >
                {/* Background glow using guaranteed SVG */}
                <img
                    src={`data:image/svg+xml;base64,${bgSvgBase64}`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '1200px', height: '630px' }}
                    alt="bg"
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                    }}
                >
                    {/* Top Row: NEXTLEVEL */}
                    <div style={{ display: 'flex', fontSize: 130, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>
                        <span style={{ color: '#ffffff' }}>NEXT</span>
                        {/* 
                          We color each letter individually because Satori (the OG image renderer Next.js uses)
                          does not support CSS background-clip: text or linear-gradient on text!
                          This ensures the gradient perfectly renders on all platforms without breaking into a solid fallback block. 
                        */}
                        <span style={{ color: '#ec4899' }}>L</span>
                        <span style={{ color: '#d946ef' }}>E</span>
                        <span style={{ color: '#c026d3' }}>V</span>
                        <span style={{ color: '#a855f7' }}>E</span>
                        <span style={{ color: '#8b5cf6' }}>L</span>
                    </div>

                    {/* Bottom Row: DIGITAL */}
                    <div style={{ display: 'flex', fontSize: 140, fontWeight: 900, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1, marginTop: -10 }}>
                        DIGITAL
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', marginTop: '70px' }}>
                        <div style={{
                            display: 'flex',
                            padding: '24px 54px',
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            fontWeight: 700,
                            borderRadius: '9999px',
                            fontSize: '20px',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
                        }}>
                            START PROJECT
                        </div>
                        <div style={{
                            display: 'flex',
                            padding: '24px 54px',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            color: '#ffffff',
                            fontWeight: 700,
                            borderRadius: '9999px',
                            fontSize: '20px',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase'
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
