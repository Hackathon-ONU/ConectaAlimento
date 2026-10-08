import React from 'react'
import { Plus, Clock, ExternalLink } from 'lucide-react'
import './Pages.css'

export default function DashboardDoador({ onNavigate }) {
  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">ESPAÇO DO DOADOR · DEMONSTRAÇÃO</span>
          <h1 className="ca-screen-title">Bom dia, Marina.</h1>
          <p className="ca-screen-subtitle">
            O que sua vizinhança pode aproveitar hoje?
          </p>
        </div>
        <button 
          type="button" 
          className="ca-btn-orange"
          onClick={() => onNavigate && onNavigate('publicar')}
        >
          <Plus size={18} /> Publicar doação
        </button>
      </div>

      {/* 3 Cards de Indicadores */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#EAF4EC', borderRadius: '16px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#446650', fontWeight: 600 }}>Ofertas publicadas</span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#173E2D', marginTop: '0.5rem' }}>1</div>
        </div>
        <div style={{ backgroundColor: '#FAEEE4', borderRadius: '16px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#915330', fontWeight: 600 }}>Aguardando organização</span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#88431E', marginTop: '0.5rem' }}>1</div>
        </div>
        <div style={{ backgroundColor: '#EAF4EC', borderRadius: '16px', padding: '1.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#446650', fontWeight: 600 }}>Coletas concluídas</span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#173E2D', marginTop: '0.5rem' }}>0</div>
        </div>
      </div>

      {/* Grid: Doações Recentes + Atalhos */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.75rem', alignItems: 'flex-start' }}>
        {/* Card Doações recentes */}
        <div className="ca-content-card">
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#173E2D', margin: '0 0 1.5rem 0' }}>
            Suas doações recentes
          </h3>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.25rem',
            border: '1px solid #ECE4DA',
            borderRadius: '12px',
            backgroundColor: '#FCFAF7'
          }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#173E2D', margin: '0 0 0.35rem 0' }}>
                Cestas de feira da manhã
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#556E5F', margin: 0 }}>
                8 cestas · Retirada em Pinheiros · até 09 de out.
              </p>
            </div>
            <span className="ca-badge ca-badge-available">
              Disponível
            </span>
          </div>
        </div>

        {/* Card Atalhos */}
        <div className="ca-content-card">
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#173E2D', margin: '0 0 1.25rem 0' }}>
            Atalhos
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button 
              type="button" 
              className="ca-btn-light" 
              style={{ justifyContent: 'center' }}
              onClick={() => onNavigate && onNavigate('publicar')}
            >
              <Plus size={16} /> Publicar oferta
            </button>
            <button 
              type="button" 
              className="ca-btn-light" 
              style={{ justifyContent: 'center' }}
              onClick={() => onNavigate && onNavigate('feed')}
            >
              <Clock size={16} /> Histórico completo
            </button>
            <button 
              type="button" 
              className="ca-btn-light" 
              style={{ justifyContent: 'center' }}
              onClick={() => onNavigate && onNavigate('impacto')}
            >
              <ExternalLink size={16} /> Ver impacto simulado
            </button>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#7E9185', marginTop: '1.5rem', marginBottom: 0 }}>
            Seu perfil: Mercado Raiz<br />
            Pinheiros, São Paulo
          </p>
        </div>
      </div>
    </div>
  )
}
