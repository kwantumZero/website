import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KwantumZero — Post-Quantum Zero Trust Auditing for Kubernetes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#020617',
          backgroundImage:
            'linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          fontFamily: 'sans-serif'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            padding: '18px 36px',
            borderRadius: 16,
            border: '1px solid #1E293B',
            backgroundColor: 'rgba(15, 23, 42, 0.7)'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 12,
              backgroundColor: '#0F172A',
              border: '1px solid #22C55E',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              color: '#22C55E'
            }}
          >
            K0
          </div>
          <div style={{ display: 'flex', fontSize: 44, color: '#F8FAFC', fontWeight: 700 }}>
            KwantumZero
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            fontSize: 54,
            color: '#F8FAFC',
            fontWeight: 700,
            textAlign: 'center',
            padding: '0 80px'
          }}
        >
          Post-Quantum Zero Trust Auditing for Kubernetes
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 28,
            fontSize: 28,
            color: '#94A3B8',
            textAlign: 'center',
            padding: '0 140px'
          }}
        >
          Detect legacy TLS. Verify ML-KEM. Stop Harvest Now, Decrypt Later.
        </div>
      </div>
    ),
    { ...size }
  );
}
