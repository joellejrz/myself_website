'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const EarthGlobe = dynamic(() => import('./EarthGlobe'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-dim)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '30px',
          height: '30px',
          border: '2px solid var(--border)',
          borderTopColor: 'var(--accent)',
          borderRadius: '50%',
        }}
      />
    </div>
  ),
});

const tourDates = [
  {
    date: '24',
    month: 'April',
    year: '2026',
    city: 'Darmstadt',
    venue: 'Centralstation',
    status: 'available' as const,
  },
  {
    date: '25',
    month: 'April',
    year: '2026',
    city: 'Frankfurt',
    venue: 'Batschkapp',
    status: 'available' as const,
  },
  {
    date: '26',
    month: 'April',
    year: '2026',
    city: 'Odenwald',
    venue: 'Kommt bald',
    status: 'soon' as const,
  },
];

export default function TourSection() {
  return (
    <section
      id="tour"
      style={{
        padding: '120px 0',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
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
            Live erleben
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
            T<span style={{ color: 'var(--accent)' }}>O</span>UR
          </h2>
        </motion.div>

        {/* Content grid */}
        <div
          id="tour-grid"
          style={{
            display: 'grid',
            gap: '60px',
          }}
        >
          {/* Tour Dates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {tourDates.map((show, index) => (
              <motion.div
                key={`${show.city}-${show.date}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '28px 0',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    'rgba(201, 168, 76, 0.03)';
                  (e.currentTarget as HTMLElement).style.paddingLeft = '16px';
                  (e.currentTarget as HTMLElement).style.paddingRight = '16px';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    'transparent';
                  (e.currentTarget as HTMLElement).style.paddingLeft = '0';
                  (e.currentTarget as HTMLElement).style.paddingRight = '0';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  {/* Date */}
                  <div style={{ minWidth: '80px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: 'var(--accent)',
                        lineHeight: 1,
                      }}
                    >
                      {show.date}
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.75rem',
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {show.month}
                    </p>
                  </div>

                  {/* City & Venue */}
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {show.city}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        color: 'var(--text-dim)',
                      }}
                    >
                      {show.venue}
                    </p>
                  </div>
                </div>

                {/* Ticket Button */}
                {show.status === 'available' ? (
                  <a
                    href="#"
                    style={{
                      padding: '10px 24px',
                      background: 'transparent',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      cursor: 'none',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        'var(--accent)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--bg)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        'transparent';
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                    }}
                  >
                    Tickets
                  </a>
                ) : (
                  <span
                    style={{
                      padding: '10px 24px',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Bald verfügbar
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '400px',
            }}
          >
            <Suspense fallback={null}>
              <EarthGlobe />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
