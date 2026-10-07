import React from 'react'

export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#16a34a', marginBottom: '0.5rem' }}>
        ConectaAlimento
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', marginBottom: '1.5rem' }}>
        Estrutura base do projeto React inicializada com sucesso. Pronto para o desenvolvimento da equipe!
      </p>
      <div style={{
        backgroundColor: '#f1f5f9',
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#334155'
      }}>
        ODS 2 — Fome Zero e Agricultura Sustentável
      </div>
    </div>
  )
}
