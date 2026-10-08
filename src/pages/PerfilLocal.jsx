import React from 'react'
import { MapPin, Check } from 'lucide-react'
import './Pages.css'

export default function PerfilLocal({ onNavigate }) {
  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">PERFIL LOCAL</span>
          <h1 className="ca-screen-title">Seus dados de demonstração.</h1>
          <p className="ca-screen-subtitle">
            Atualize como sua organização aparece na rede.
          </p>
        </div>
        <div className="ca-demo-badge">
          Ambiente de demonstração
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2rem', alignItems: 'flex-start' }}>
        {/* Sidebar do Perfil (verde escuro) */}
        <div style={{
          backgroundColor: '#173E2D',
          color: '#ffffff',
          borderRadius: '20px',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#D96534',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 800,
            marginBottom: '1.25rem'
          }}>
            M
          </div>
          <span style={{
            backgroundColor: '#FFF',
            color: '#D96534',
            fontSize: '0.72rem',
            fontWeight: 800,
            padding: '0.2rem 0.6rem',
            borderRadius: '12px',
            width: 'fit-content',
            marginBottom: '1rem'
          }}>
            Doador
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 0.25rem 0' }}>Mercado Raiz</h3>
          <p style={{ color: '#BDD2C5', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>Marina Costa</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#BDD2C5', fontSize: '0.85rem' }}>
            <MapPin size={14} /> Pinheiros, São Paulo
          </div>
        </div>

        {/* Card Formulário Editar Perfil */}
        <div className="ca-content-card">
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#173E2D', margin: '0 0 1.5rem 0' }}>
            Editar perfil
          </h3>

          <div className="ca-form-grid-2">
            <div className="ca-form-group">
              <label className="ca-form-label">Seu nome</label>
              <input type="text" className="ca-input" defaultValue="Marina Costa" />
            </div>
            <div className="ca-form-group">
              <label className="ca-form-label">Organização</label>
              <input type="text" className="ca-input" defaultValue="Mercado Raiz" />
            </div>
          </div>

          <div className="ca-form-grid-2">
            <div className="ca-form-group">
              <label className="ca-form-label">Cidade</label>
              <input type="text" className="ca-input" defaultValue="São Paulo" />
            </div>
            <div className="ca-form-group">
              <label className="ca-form-label">Bairro</label>
              <input type="text" className="ca-input" defaultValue="Pinheiros" />
            </div>
          </div>

          <div className="ca-form-group">
            <label className="ca-form-label">Contato</label>
            <input type="text" className="ca-input" defaultValue="(11) 98821-4402" />
          </div>

          <div className="ca-btn-group">
            <button 
              type="button" 
              className="ca-btn-dark"
              onClick={() => alert('Demonstração: Alterações salvas no navegador!')}
            >
              Salvar alterações <Check size={18} />
            </button>
            <button 
              type="button" 
              className="ca-btn-light"
              onClick={() => onNavigate && onNavigate('doador')}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
