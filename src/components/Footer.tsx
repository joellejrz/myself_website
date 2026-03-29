'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';

const footerLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'KI-Nutzungsbedingungen', href: '/ki-nutzungsbedingungen' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/thisismyselfmusic' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/1qFgNQVC16sNRtFR3bQdk8?si=RK0JqETfQTepbmmeyDlU4A' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ThisIsMyselfMusic' },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: '80px 0 40px',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '60px',
            marginBottom: '60px',
          }}
        >
          {/* Logo & About */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/myselflogo1.png"
                alt="Mysélf"
                style={{
                  height: '36px',
                  width: 'auto',
                  filter: 'brightness(1.1)',
                }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                maxWidth: '280px',
              }}
            >
              Newcomer-Sängerin aus Deutschland. Musik, die bewegt und
              inspiriert.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '20px',
              }}
            >
              Navigation
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                { label: 'Musik', href: '#musik' },
                { label: 'Shop', href: '#shop' },
                { label: 'Tour', href: '#tour' },
                { label: 'Über mich', href: '#about' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    cursor: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--text)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--text-dim)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '20px',
              }}
            >
              Folge mir
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    cursor: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--text-dim)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '20px',
              }}
            >
              Rechtliches
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    cursor: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--text-dim)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--text-dim)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            paddingTop: '30px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
            }}
          >
            © 2026 Mysélf. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
