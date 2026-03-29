'use client';

import { motion } from 'framer-motion';

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      style={{
        padding: '100px 0',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: 'var(--text)',
              marginBottom: '16px',
              letterSpacing: '0.05em',
            }}
          >
            Newsletter
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-dim)',
              marginBottom: '40px',
            }}
          >
            Sei die Erste, die von neuen Releases und Events erfährt.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              style={{
                width: '100%',
                padding: '16px 24px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
              }}
              onFocus={(e) => {
                (e.target as HTMLInputElement).style.borderColor = 'var(--accent)';
              }}
              onBlur={(e) => {
                (e.target as HTMLInputElement).style.borderColor = 'var(--border)';
              }}
            />
            <button
              type="submit"
              className="btn-outline"
              style={{
                width: '100%',
                justifyContent: 'center',
                background: 'var(--accent)',
                color: 'var(--bg)',
                borderColor: 'var(--accent)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.color = 'var(--bg)';
              }}
            >
              Abonnieren
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
