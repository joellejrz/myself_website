import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KI-Nutzungsbedingungen | Mysélf',
  description: 'Nutzungsbedingungen für Text und Data Mining für KI-Zwecke.',
};

export default function KINutzungsbedingungenPage() {
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
          KI-Nutzungsbedingungen
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
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Vorbehalt der Nutzung für Text und Data Mining</h2>
            <p>
              Ein maschinelles Auslesen, Analysieren oder „Scrapen“ dieser Website sowie der darauf enthaltenen Inhalte (wie z. B. Texte, Fotos, Artworks, Grafiken, Logos, Videos, Audios) für das Text und Data Mining sowie insbesondere zu Zwecken des Trainierens, der Entwicklung oder der Anpassung von Modellen der Künstlichen Intelligenz („KI“) ist ausdrücklich <strong>untersagt</strong>.
            </p>
            <p style={{ marginTop: '16px' }}>
              Wir behalten uns eine Nutzung der über diese Website zugänglichen Inhalte für das Text und Data Mining im Sinne von § 44b UrhG ausdrücklich vor.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Ausnahmen</h2>
            <p>
              Etwaige automatisierte Downloads, Zugriffe oder Nutzungen unserer Inhalte für solche Zwecke sind nur auf Grundlage der expliziten und vorher abgewickelten Vergabe einer entsprechenden Lizenz zulässig.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Kontakt</h2>
            <p>
              Falls Sie Fragen bezüglich möglicher Lizenzierungen oder Ausnahmen von diesen Bedingungen haben, kontaktieren Sie uns bitte unter unserer offiziellen E-Mail Adresse, die Sie im Impressum oder auf der Kontakt-Seite finden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
