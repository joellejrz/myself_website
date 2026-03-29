import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz | Mysélf',
  description: 'Datenschutzerklärung der offiziellen Website von Mysélf.',
};

export default function DatenschutzPage() {
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
          Datenschutz
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
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>1. Datenschutz auf einen Blick</h2>
            <p>
              <strong>Allgemeine Hinweise</strong><br />
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>2. Datenerfassung auf dieser Website</h2>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p style={{ marginTop: '16px' }}>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular oder bei der Newsletter-Anmeldung eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>3. Cookies</h2>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
            </p>
            <p style={{ marginTop: '16px' }}>
              Sie haben die Möglichkeit, über das Cookie-Banner beim ersten Besuch der Seite Ihre Präferenzen (Essenziell, Analyse, Marketing) selbst zu bestimmen und jederzeit anzupassen.
            </p>
          </section>

          <section>
            <h2 style={{ color: 'var(--text)', marginBottom: '12px', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>4. Newsletter</h2>
            <p>
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Die Verarbeitung dieser Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
