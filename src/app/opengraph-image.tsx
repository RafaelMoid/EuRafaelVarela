import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #030817 0%, #071225 48%, #111036 100%)',
          color: '#f8fafc',
          fontFamily: 'Inter, Arial, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '-80px',
            bottom: '-120px',
            width: '760px',
            height: '260px',
            borderRadius: '50%',
            background: 'linear-gradient(90deg, rgba(56,189,248,0.36), rgba(124,58,237,0.42))',
            filter: 'blur(36px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-120px',
            top: '-120px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'rgba(124,58,237,0.26)',
            filter: 'blur(42px)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative' }}>
          <div
            style={{
              width: '88px',
              height: '88px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '22px',
              border: '1px solid rgba(96,165,250,0.42)',
              background: 'rgba(7,18,37,0.78)',
              boxShadow: '0 0 32px rgba(59,130,246,0.28)',
              fontSize: '42px',
              fontWeight: 900,
              color: '#60a5fa',
            }}
          >
            RV
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: '#93c5fd', fontSize: '24px', fontWeight: 800 }}>
              Rafael Varela
            </span>
            <span style={{ color: '#cbd5e1', fontSize: '20px' }}>
              Desenvolvedor Web • WordPress/PHP • Front-end
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
          <h1
            style={{
              maxWidth: '920px',
              margin: 0,
              fontSize: '76px',
              lineHeight: 0.96,
              letterSpacing: '-1px',
              fontWeight: 900,
            }}
          >
            Portfolio Hub
          </h1>
          <p
            style={{
              maxWidth: '860px',
              margin: 0,
              color: '#cbd5e1',
              fontSize: '30px',
              lineHeight: 1.28,
            }}
          >
            Projetos, experiencia profissional, curriculo e contato em um portfolio moderno focado em performance, SEO e acessibilidade.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '14px', position: 'relative' }}>
          {['Next.js', 'React', 'WordPress', 'PHP', 'SEO tecnico'].map((item) => (
            <span
              key={item}
              style={{
                padding: '12px 18px',
                borderRadius: '999px',
                border: '1px solid rgba(96,165,250,0.28)',
                background: 'rgba(37,99,235,0.18)',
                color: '#dbeafe',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  );
}
