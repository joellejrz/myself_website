'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default strictly true for autoplay policies
  const sectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setIsExpanded(false);
        e.preventDefault();
      } else if (!isExpanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.001;
        const newProgress = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setIsExpanded(true);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;

      if (isExpanded && deltaY < -20 && window.scrollY <= 5) {
        setIsExpanded(false);
        e.preventDefault();
      } else if (!isExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const newProgress = Math.min(
          Math.max(scrollProgress + deltaY * factor, 0),
          1
        );
        setScrollProgress(newProgress);
        if (newProgress >= 1) setIsExpanded(true);
        setTouchStartY(e.touches[0].clientY);
      }
    };

    const handleScroll = () => {
      if (!isExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', () => setTouchStartY(0));

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [scrollProgress, isExpanded, touchStartY]);

  const videoWidth = 280 + scrollProgress * (isMobile ? 700 : 1300);
  const videoHeight = 350 + scrollProgress * (isMobile ? 250 : 500);
  const textOpacity = 1 - scrollProgress * 2;
  const overlayOpacity = 0.6 - scrollProgress * 0.4;

  return (
    <div ref={sectionRef} style={{ overflowX: 'hidden' }}>
      <section
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100dvh',
          background: 'var(--bg)',
        }}
      >
        {/* Background grain texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Video container */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${videoWidth}px`,
            height: `${videoHeight}px`,
            maxWidth: '98vw',
            maxHeight: '90vh',
            borderRadius: scrollProgress > 0.9 ? '0px' : '16px',
            overflow: 'hidden',
            boxShadow:
              scrollProgress < 0.9
                ? '0 0 80px rgba(201, 168, 76, 0.1), 0 0 160px rgba(0, 0, 0, 0.5)'
                : 'none',
            transition: 'border-radius 0.3s ease',
            zIndex: 2,
          }}
        >
          <iframe
            ref={iframeRef}
            src="https://www.youtube.com/embed/_3eDIZjvJuA?autoplay=1&mute=1&loop=1&controls=0&rel=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&playlist=_3eDIZjvJuA&enablejsapi=1"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              border: 'none',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Video overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, rgba(10,10,10,${overlayOpacity}) 0%, rgba(10,10,10,${overlayOpacity * 0.7}) 50%, rgba(10,10,10,${overlayOpacity * 1.2}) 100%)`,
              transition: 'opacity 0.2s ease',
              pointerEvents: 'none',
            }}
          />

          {/* Sound Toggle Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (iframeRef.current && iframeRef.current.contentWindow) {
                const command = isMuted ? 'unMute' : 'mute';
                iframeRef.current.contentWindow.postMessage(
                  JSON.stringify({ event: 'command', func: command, args: [] }),
                  '*'
                );
                setIsMuted(!isMuted);
              }
            }}
            aria-label={isMuted ? 'Ton einschalten' : 'Ton ausschalten'}
            style={{
              position: 'absolute',
              bottom: '24px',
              right: '24px',
              zIndex: 20,
              background: 'rgba(10,10,10,0.5)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text)',
              cursor: 'none',
              backdropFilter: 'blur(10px)',
              transition: 'background 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,10,10,0.8)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(10,10,10,0.5)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            }}
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Text overlay */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            opacity: Math.max(textOpacity, 0),
            transition: 'opacity 0.1s ease',
            pointerEvents: textOpacity <= 0 ? 'none' : 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              textTransform: 'uppercase',
              mixBlendMode: 'difference',
            }}
          >
            Mysélf
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontWeight: 300,
              color: 'var(--text-dim)',
              marginTop: '24px',
              letterSpacing: '0.05em',
            }}
          >
            Die Stimme einer neuen Ära
          </motion.p>

          <motion.a
            href="https://www.youtube.com/watch?v=_3eDIZjvJuA"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
            style={{
              marginTop: '40px',
              padding: '14px 32px',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50px',
              color: 'var(--text)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              background: 'rgba(10,10,10,0.3)',
              cursor: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(10,10,10,0.3)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            Vollständiges Musikvideo ansehen
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress < 0.3 ? 1 : 0 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Scrollen
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            >
              <rect x="1" y="1" width="18" height="28" rx="9" />
              <motion.circle
                cx="10"
                cy="10"
                r="2"
                fill="var(--accent)"
                animate={{ cy: [8, 16, 8] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
