'use client';

export default function ContactForm() {
  return (
    <div>
      <h2 style={{ color: 'var(--text)', marginBottom: '24px', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Schreib mir</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Name" 
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <input 
          type="email" 
          placeholder="E-Mail" 
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <textarea 
          placeholder="Nachricht" 
          rows={5}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            outline: 'none',
            resize: 'vertical',
          }}
        />
        <button 
          type="button" 
          className="btn-outline"
          style={{
            marginTop: '8px',
            background: 'var(--accent)',
            color: 'var(--bg)',
            borderColor: 'var(--accent)',
            justifyContent: 'center'
          }}
        >
          Senden
        </button>
      </form>
    </div>
  );
}
