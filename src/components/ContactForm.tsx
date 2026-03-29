'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState('Allgemeine Anfragen');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emails = {
    'Allgemeine Anfragen': 'contact@myself-official.com',
    'Booking & Management': 'booking@myself-official.com',
    'Presse': 'press@myself-official.com',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Bitte fülle alle Felder aus.');
      return;
    }

    const targetEmail = emails[inquiryType as keyof typeof emails];
    const subject = encodeURIComponent(`Anfrage via Website: ${inquiryType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <h2 style={{ color: 'var(--text)', marginBottom: '24px', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Schreib mir</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleSubmit}>
        <select
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          style={{
            width: '100%',
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            outline: 'none',
            cursor: 'pointer',
            appearance: 'none',
          }}
        >
          <option value="Allgemeine Anfragen" style={{ background: '#111', color: '#fff' }}>Allgemeine Anfragen</option>
          <option value="Booking & Management" style={{ background: '#111', color: '#fff' }}>Booking & Management</option>
          <option value="Presse" style={{ background: '#111', color: '#fff' }}>Presse</option>
        </select>
        
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
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
          type="submit" 
          className="btn-outline"
          style={{
            marginTop: '8px',
            background: 'var(--accent)',
            color: 'var(--bg)',
            borderColor: 'var(--accent)',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          Senden
        </button>
      </form>
    </div>
  );
}
