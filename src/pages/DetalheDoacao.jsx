import React from 'react'
import { MapPin, Clock, Package, ArrowLeft } from 'lucide-react'
import './Pages.css'

export default function DetalheDoacao({ onNavigate }) {
  return (
    <div className="ca-page-container">
      <button 
        type="button" 
        onClick={() => onNavigate && onNavigate('feed')}
        style={{
          background: 'none',
          border: 'none',
          color: '#556E5F',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          cursor: 'pointer',
          marginBottom: '1rem',
          fontWeight: 600,
          fontSize: '0.9rem'
        }}
      >
        <ArrowLeft size={16} /> Voltar para doações
      </button>

      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">DETALHES DA DOAÇÃO</span>
          <h1 className="ca-screen-title">Cestas de feira da manhã</h1>
          <p className="ca-screen-subtitle">
            Mercado Raiz · Pinheiros, São Paulo
          </p>
        </div>
        <span className="ca-badge ca-badge-available" style={{ fontSize: '0.9rem', padding: '0.4rem 1rem' }}>
          Disponível
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem', alignItems: 'flex-start' }}>
        {/* Coluna Principal da Doação */}
        <div className="ca-content-card">
          {/* Espaço de imagem / placeholder visual */}
          <div style={{
            backgroundColor: '#D7E5DB',
            height: '240px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#173E2D',
            marginBottom: '1.5rem'
          }}>
            Hortifruti
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span className="ca-badge ca-badge-category">Hortifruti</span>
            <span className="ca-badge ca-badge-location">8 cestas</span>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#173E2D', margin: '0 0 0.75rem 0' }}>
            Cestas de feira da manhã
          </h2>
          <p style={{ fontSize: '1rem', color: '#4D6656', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
            Seleção de frutas e legumes frescos que não chegaram à banca. Ideal para cozinhar hoje e amanhã.
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #ECE4DA', margin: '1.5rem 0' }} />

          <div className="ca-form-grid-2">
            <div>
              <span className="ca-screen-tag" style={{ fontSize: '0.75rem' }}>CONSUMIR ATÉ</span>
              <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#173E2D', margin: 0 }}>
                09 de out.
              </p>
            </div>
            <div>
              <span className="ca-screen-tag" style={{ fontSize: '0.75rem' }}>RETIRADA</span>
              <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#173E2D', margin: 0 }}>
                14:00–17:30
              </p>
            </div>
          </div>
        </div>

        {/* Coluna Lateral de Retirada & Reserva */}
        <div className="ca-content-card">
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#173E2D', margin: '0 0 1.25rem 0' }}>
            Retirada local
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465F50', fontSize: '0.95rem' }}>
              <MapPin size={18} color="#D96534" />
              <span>Pinheiros, São Paulo</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#465F50', fontSize: '0.95rem' }}>
              <Clock size={18} color="#D96534" />
              <span>14:00 até 17:30</span>
            </div>
          </div>

          <div className="ca-alert-box ca-alert-peach" style={{ fontSize: '0.86rem', marginBottom: '1.5rem' }}>
            <span>Ao reservar, sua organização confirma que poderá retirar neste horário. O contato do doador será exibido após a reserva.</span>
          </div>

          <button 
            type="button" 
            className="ca-btn-orange"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => alert('Demonstração: Reserva realizada! Código de coleta gerado.')}
          >
            <Package size={18} /> Reservar esta doação
          </button>

          <p style={{ fontSize: '0.82rem', color: '#7E9185', textAlign: 'center', marginTop: '1.25rem', marginBottom: 0 }}>
            Doador: Mercado Raiz
          </p>
        </div>
      </div>
    </div>
  )
}
