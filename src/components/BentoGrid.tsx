'use client';

import { motion } from 'framer-motion';

const bentoItems = [
  {
    id: 'about',
    title: 'Über mich',
    content:
      'Es gibt Tausende Stimmen, aber nur ein Gesicht, das du nie wieder vergisst. Ich bin Mysélf und ich passe in keine deiner Schubladen.',
    size: 'large' as const,
    accent: true,
    image: '/myselfISA2.png',
  },
  {
    id: 'single',
    title: 'Neue Single',
    subtitle: 'Kommt bald',
    content: null,
    size: 'medium' as const,
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    accent: false,
  },
  {
    id: 'spotify',
    title: 'Auf Spotify',
    content: null,
    href: 'https://open.spotify.com/artist/1qFgNQVC16sNRtFR3bQdk8?si=RK0JqETfQTepbmmeyDlU4A',
    size: 'small' as const,
    image: '/aufspotify.png',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent)">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    accent: false,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    content: '@thisismyselfmusic',
    href: 'https://www.instagram.com/thisismyselfmusic',
    size: 'small' as const,
    image: '/instagramISA.png',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    accent: false,
  },
  {
    id: 'quote',
    title: null,
    content: 'In einer Welt voller Kopien ist mysélf das Original, das man nicht übersehen kann.',
    size: 'small' as const,
    accent: true,
  },
];

const gridItemStyles: Record<string, React.CSSProperties> = {
  large: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },
  medium: {
    gridColumn: 'span 1',
    gridRow: 'span 1',
  },
  small: {
    gridColumn: 'span 1',
    gridRow: 'span 1',
  },
};

export default function BentoGrid() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        background: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '12px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Mehr entdecken
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              lineHeight: 1,
              color: 'var(--text)',
            }}
          >
            MYS<span style={{ color: 'var(--accent)' }}>É</span>LF
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: 'minmax(200px, auto)',
            gap: '16px',
          }}
          className="bento-grid"
        >
          {bentoItems.map((item, index) => {
            const Component = item.href ? motion.a : motion.div;
            return (
              <Component
                href={item.href}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                key={item.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{
                ...gridItemStyles[item.size],
                background: item.accent
                  ? 'linear-gradient(135deg, rgba(201, 168, 76, 0.08) 0%, rgba(201, 168, 76, 0.02) 100%)'
                  : 'var(--bg-card)',
                border: `1px solid ${item.accent ? 'rgba(201, 168, 76, 0.2)' : 'var(--border)'}`,
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(201, 168, 76, 0.4)';
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 0 30px rgba(201, 168, 76, 0.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = item.accent
                  ? 'rgba(201, 168, 76, 0.2)'
                  : 'var(--border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Image background for single */}
              {item.image && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title || ''}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.4,
                      filter: 'grayscale(50%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.8) 100%)',
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: item.size === 'large' ? '40px' : '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: item.id === 'quote' ? 'center' : 'flex-end',
                  height: '100%',
                }}
              >
                {item.icon && (
                  <div style={{ marginBottom: '16px' }}>{item.icon}</div>
                )}

                {item.title && (
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: item.size === 'large' ? '1.5rem' : '1rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                )}

                {item.subtitle && (
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.7rem',
                      color: 'var(--accent)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}
                  >
                    {item.subtitle}
                  </p>
                )}

                {item.content && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:
                        item.id === 'quote'
                          ? '1.3rem'
                          : item.size === 'large'
                            ? '1rem'
                            : '0.85rem',
                      color:
                        item.id === 'quote' ? 'var(--accent)' : 'var(--text-dim)',
                      lineHeight: 1.7,
                      fontStyle: item.id === 'quote' ? 'italic' : 'normal',
                      fontWeight: item.id === 'quote' ? 300 : 400,
                    }}
                  >
                    {item.content}
                  </p>
                )}

              </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}


