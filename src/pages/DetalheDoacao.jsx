import React from 'react'
import { MapPin, Clock, Package, ArrowLeft } from 'lucide-react'
import './Pages.css'

export default function DetalheDoacao({ onNavigate, donation, onReserveDonation }) {
  if (!donation) {
    return <div className="ca-page-container"><p role="status">Não há uma doação selecionada.</p><button type="button" className="ca-btn-light" onClick={() => onNavigate?.('feed')}>Ir para doações</button></div>
  }

  const available = donation.status === 'Disponível'

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
          <h1 className="ca-screen-title">{donation.titulo}</h1>
          <p className="ca-screen-subtitle">
            {donation.local} · {donation.bairro}, {donation.cidade}
          </p>
        </div>
        <span className={`ca-badge ${available ? 'ca-badge-available' : 'ca-badge-location'}`} style={{ fontSize: '0.9rem', padding: '0.4rem 1rem' }}>
          {donation.status}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem', alignItems: 'flex-start' }}>
        {/* Coluna Principal da Doação */}
        <div className="ca-content-card">
          {/* Espaço de imagem / placeholder visual */}
          <div style={{
            backgroundColor: '#D7E5DB',
            backgroundImage: donation.imagem ? `url(${donation.imagem})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
            {!donation.imagem && donation.categoria}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span className="ca-badge ca-badge-category">{donation.categoria}</span>
            <span className="ca-badge ca-badge-location">{donation.qtd}</span>
          </div>

          <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#173E2D', margin: '0 0 0.75rem 0' }}>
            {donation.titulo}
          </h2>
          <p style={{ fontSize: '1rem', color: '#4D6656', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
            {donation.desc}
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #ECE4DA', margin: '1.5rem 0' }} />

          <div className="ca-form-grid-2">
            <div>
              <span className="ca-screen-tag" style={{ fontSize: '0.75rem' }}>CONSUMIR ATÉ</span>
              <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#173E2D', margin: 0 }}>
                {donation.validade}
              </p>
            </div>
            <div>
              <span className="ca-screen-tag" style={{ fontSize: '0.75rem' }}>RETIRADA</span>
              <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#173E2D', margin: 0 }}>
                {donation.retirada}
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
              <span>{available ? 'Ao reservar, sua organização confirma que poderá retirar neste horário. O contato do doador será exibido após a reserva.' : donation.status === 'Reservada' ? `Reservada por ${donation.reservadaPor || 'uma organização'}.` : 'Esta doação já foi coletada.'}</span>
          </div>

          <button 
            type="button" 
            className="ca-btn-orange"
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={!available}
            onClick={() => onReserveDonation?.(donation.id)}
          >
            <Package size={18} /> {available ? 'Reservar esta doação' : donation.status}
          </button>

          <p style={{ fontSize: '0.82rem', color: '#7E9185', textAlign: 'center', marginTop: '1.25rem', marginBottom: 0 }}>
            Doador: {donation.local}
          </p>
          {!available && donation.contato && <p role="status" style={{ color: '#267343', textAlign: 'center' }}>Contato para retirada: {donation.contato}</p>}
          {donation.codigoColeta && <p style={{ color: '#173E2D', textAlign: 'center', fontWeight: 800 }}>Código de retirada: {donation.codigoColeta}</p>}
        </div>
      </div>
    </div>
  )
}
