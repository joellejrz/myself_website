'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('myself_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'myself_cookie_consent',
      JSON.stringify({ necessary: true, analytics: true, marketing: true })
    );
    setShow(false);
  };

  const handleSave = () => {
    localStorage.setItem('myself_cookie_consent', JSON.stringify(prefs));
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem(
      'myself_cookie_consent',
      JSON.stringify({ necessary: true, analytics: false, marketing: false })
    );
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            borderTop: '1px solid var(--accent)',
            zIndex: 9999,
            padding: '24px',
            fontFamily: 'var(--font-body)',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {!showSettings ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '8px',
                    }}
                  >
                    Wir verwenden Cookies
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-dim)',
                      lineHeight: 1.6,
                      maxWidth: '800px',
                    }}
                  >
                    Um unsere Webseite für dich optimal zu gestalten und
                    fortlaufend verbessern zu können, verwenden wir Cookies.
                    Einige von ihnen sind essenziell, während andere uns helfen,
                    diese Website und deine Erfahrung zu verbessern.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <button
                    onClick={handleAcceptAll}
                    style={{
                      padding: '12px 24px',
                      background: 'var(--accent)',
                      color: 'var(--bg)',
                      border: '1px solid var(--accent)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'none',
                    }}
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={handleReject}
                    style={{
                      padding: '12px 24px',
                      background: 'transparent',
                      color: 'var(--text)',
                      border: '1px solid var(--border)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'none',
                    }}
                  >
                    Nur essenzielle
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    style={{
                      padding: '12px 24px',
                      background: 'transparent',
                      color: 'var(--text-dim)',
                      border: '1px solid transparent',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'none',
                    }}
                  >
                    Einstellungen
                  </button>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
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
                    Cookie-Einstellungen
                  </h3>
                  
                  {/* Option: Necessary */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'not-allowed',
                      opacity: 0.7,
                    }}
                  >
                    <input type="checkbox" checked={true} readOnly />
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.9rem',
                          color: 'var(--text)',
                          fontWeight: 600,
                        }}
                      >
                        Essenziell
                      </span>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        Notwendig für die Grundfunktionen der Website.
                      </span>
                    </div>
                  </label>

                  {/* Option: Analytics */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'none',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={prefs.analytics}
                      onChange={(e) =>
                        setPrefs({ ...prefs, analytics: e.target.checked })
                      }
                    />
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.9rem',
                          color: 'var(--text)',
                          fontWeight: 600,
                        }}
                      >
                        Statistiken
                      </span>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        Erfassen Informationen anonym, um zu verstehen, wie
                        Besucher unsere Website nutzen.
                      </span>
                    </div>
                  </label>

                  {/* Option: Marketing */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'none',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={prefs.marketing}
                      onChange={(e) =>
                        setPrefs({ ...prefs, marketing: e.target.checked })
                      }
                    />
                    <div>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '0.9rem',
                          color: 'var(--text)',
                          fontWeight: 600,
                        }}
                      >
                        Marketing
                      </span>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        Werden verwendet, um Besuchern auf Webseiten zu folgen
                        (z.B. für personalisierte Werbung).
                      </span>
                    </div>
                  </label>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <button
                    onClick={handleSave}
                    style={{
                      padding: '12px 24px',
                      background: 'var(--accent)',
                      color: 'var(--bg)',
                      border: '1px solid var(--accent)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'none',
                    }}
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    style={{
                      padding: '12px 24px',
                      background: 'transparent',
                      color: 'var(--text-dim)',
                      border: '1px solid transparent',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: 'none',
                    }}
                  >
                    Zurück
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
