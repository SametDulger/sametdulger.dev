import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const alt = 'Samet Dulger - Full Stack Developer'
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            maxWidth: '900px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#1a202c',
              marginBottom: '20px',
              lineHeight: '1.1',
            }}
          >
            Samet Dulger
          </div>
          <div
            style={{
              fontSize: '36px',
              color: '#4a5568',
              marginBottom: '30px',
              fontWeight: '500',
            }}
          >
            Full Stack Developer
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#667eea',
              fontWeight: '600',
            }}
          >
            .NET • React • TypeScript • C#
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 