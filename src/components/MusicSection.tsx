'use client';

import { motion } from 'framer-motion';

export default function MusicSection() {
  return (
    <section
      id="musik"
      style={{
        padding: '120px 24px',
        background: 'var(--bg)',
        color: 'var(--text)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '64px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Aktueller Release
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              lineHeight: 1.1,
            }}
          >
            Fuego En El Aire
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '1',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 100px rgba(201, 168, 76, 0.15)',
          }}
        >
          <img
            src="/fuegoenelairecover.png"
            alt="Fuego En El Aire Cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Spotify Play Button Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease',
            }}
          >
            <a
              href="https://open.spotify.com/track/5ENGV48IIP0RtfiRODkGoH?si=e4196e5cc7e64d04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Auf Spotify anhören"
              style={{
                background: '#1DB954',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '50px',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 10px 30px rgba(29, 185, 84, 0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05) translateY(-2px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 40px rgba(29, 185, 84, 0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1) translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(29, 185, 84, 0.3)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Auf Spotify anhören
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
