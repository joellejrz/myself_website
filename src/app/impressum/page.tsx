import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Mysélf',
  description: 'Impressum der offiziellen Website von Mysélf.',
};

export default function ImpressumPage() {
  return (
    <div
      style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        minHeight: '100vh',
        background: 'var(--bg)',
        color: 'var(--text)',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            marginBottom: '40px',
            color: 'var(--text)',
            letterSpacing: '0.05em',
          }}
        >
          Impressum
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-dim)',
            lineHeight: 1.8,
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Mysélf Music</strong><br />
              [Musterstraße 1]<br />
              [12345 Musterstadt]
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Kontakt</h2>
            <p>
              Telefon: [+49 (0) 123 44 55 66]<br />
              E-Mail: [hello@myselfmusic.com]
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
