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
              <strong>Isabel Stadelmann</strong><br />
              Ulrichstrasse 100<br />
              50226 frechen
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Kontakt</h2>
            <p>
              Telefon: +49 1573 1081363<br />
              E-Mail: contact@myself-official.com
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
