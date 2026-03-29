import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt | Mysélf',
  description: 'Kontaktiere Mysélf für Booking, Presse und Fan-Anfragen.',
};

export default function KontaktPage() {
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
          Kontakt
        </h1>

        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--text-dim)',
            lineHeight: 1.8,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
          }}
        >
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <section>
              <h2 style={{ color: 'var(--accent)', marginBottom: '12px', fontSize: '0.8rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Allgemeine Anfragen</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text)' }}>
                contact@myself-official.com
              </p>
            </section>

            <section>
              <h2 style={{ color: 'var(--accent)', marginBottom: '12px', fontSize: '0.8rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Booking & Management</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text)' }}>
                booking@myself-official.com
              </p>
            </section>
            <section>
              <h2 style={{ color: 'var(--accent)', marginBottom: '12px', fontSize: '0.8rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Presse</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text)' }}>
                press@myself-official.com
              </p>
            </section>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
