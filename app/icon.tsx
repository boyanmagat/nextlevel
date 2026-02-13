import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '8px',
                    position: 'relative',
                }}
            >
                {/* Gradient Background for Border Effect */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '8px',
                        padding: '2px',
                        background: 'linear-gradient(to bottom right, #ec4899, #8b5cf6)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                    }}
                />

                {/* N Shape */}
                <div style={{
                    fontWeight: 900,
                    fontFamily: 'sans-serif',
                    background: 'linear-gradient(to bottom right, #ec4899, #8b5cf6)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    marginTop: '-2px', // Visual alignment
                }}>
                    N
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
