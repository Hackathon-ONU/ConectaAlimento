import React from 'react'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import './Pages.css'

export default function Login({ onNavigate }) {
  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">ACESSO DE DEMONSTRAÇÃO</span>
          <h1 className="ca-screen-title">Quem está chegando?</h1>
          <p className="ca-screen-subtitle">
            Escolha um perfil fictício para explorar a rede.
          </p>
        </div>
        <div className="ca-demo-badge">
          Ambiente de demonstração
        </div>
      </div>

      <div className="ca-alert-box ca-alert-green">
        <ShieldCheck size={20} />
        <span>Não há autenticação. Você pode alternar entre os papéis quando quiser.</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '2rem' }}>
        {/* Card Doador */}
        <div className="ca-content-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="ca-badge ca-badge-category" style={{ marginBottom: '1.25rem' }}>Doador</span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#173E2D', margin: '0 0 0.5rem 0' }}>Mercado Raiz</h2>
            <p style={{ color: '#556E5F', margin: '0 0 2rem 0', fontSize: '0.98rem' }}>
              Marina Costa · Pinheiros, São Paulo
            </p>
          </div>
          <button 
            type="button" 
            className="ca-btn-dark"
            onClick={() => onNavigate && onNavigate('doador')}
          >
            Entrar como doador <ArrowRight size={18} />
          </button>
        </div>

        {/* Card ONG / Receptor */}
        <div className="ca-content-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span className="ca-badge ca-badge-location" style={{ marginBottom: '1.25rem' }}>ONG / Receptor</span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#173E2D', margin: '0 0 0.5rem 0' }}>Instituto Caminhos</h2>
            <p style={{ color: '#556E5F', margin: '0 0 2rem 0', fontSize: '0.98rem' }}>
              Ana Paula Lima · Vila Madalena, São Paulo
            </p>
          </div>
          <button 
            type="button" 
            className="ca-btn-orange"
            onClick={() => onNavigate && onNavigate('feed')}
          >
            Entrar como ONG <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <p style={{ color: '#4A6152', fontSize: '0.95rem' }}>
        Quer criar outro perfil fictício?{' '}
        <button 
          type="button"
          onClick={() => onNavigate && onNavigate('cadastro')}
          style={{ background: 'none', border: 'none', color: '#173E2D', fontWeight: 800, cursor: 'pointer', textDecoration: 'underline' }}
        >
          Cadastre-se aqui.
        </button>
      </p>
    </div>
  )
}
