import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import './Pages.css'

export default function Cadastro({ onNavigate }) {
  const [tipo, setTipo] = useState('doador')

  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">CADASTRO FICTÍCIO</span>
          <h1 className="ca-screen-title">Faça parte da rede.</h1>
          <p className="ca-screen-subtitle">
            Crie um perfil local para experimentar o fluxo.
          </p>
        </div>
      </div>

      <div className="ca-content-card" style={{ maxWidth: '800px' }}>
        <div className="ca-form-group">
          <label className="ca-form-label">Quero participar como</label>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
            <button
              type="button"
              className={tipo === 'doador' ? 'ca-btn-dark' : 'ca-btn-light'}
              style={{ borderRadius: '8px', padding: '0.65rem 1.4rem' }}
              onClick={() => setTipo('doador')}
            >
              Doador
            </button>
            <button
              type="button"
              className={tipo === 'ong' ? 'ca-btn-dark' : 'ca-btn-light'}
              style={{ borderRadius: '8px', padding: '0.65rem 1.4rem' }}
              onClick={() => setTipo('ong')}
            >
              ONG / Receptor
            </button>
          </div>
        </div>

        <div className="ca-form-grid-2" style={{ marginTop: '1.5rem' }}>
          <div className="ca-form-group">
            <label className="ca-form-label">Seu nome</label>
            <input type="text" className="ca-input" placeholder="Ex.: Camila Santos" defaultValue="Camila Santos" />
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label">Comércio ou organização</label>
            <input type="text" className="ca-input" placeholder="Nome da organização" defaultValue="Padaria Estrela Solar" />
          </div>
        </div>

        <div className="ca-form-grid-2">
          <div className="ca-form-group">
            <label className="ca-form-label">Cidade</label>
            <input type="text" className="ca-input" defaultValue="São Paulo" />
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label">Bairro</label>
            <input type="text" className="ca-input" placeholder="Seu bairro" defaultValue="Pinheiros" />
          </div>
        </div>

        <div className="ca-form-group">
          <label className="ca-form-label">Contato</label>
          <input type="text" className="ca-input" placeholder="Telefone ou WhatsApp" defaultValue="(11) 98765-4321" />
        </div>

        <div className="ca-alert-box ca-alert-green" style={{ margin: '1.5rem 0' }}>
          <span>Dados usados somente neste protótipo neste navegador. Não informe dados pessoais reais.</span>
        </div>

        <div className="ca-btn-group">
          <button 
            type="button" 
            className="ca-btn-dark"
            onClick={() => onNavigate && onNavigate(tipo === 'doador' ? 'doador' : 'feed')}
          >
            Criar perfil de demonstração <ArrowRight size={18} />
          </button>
          <button 
            type="button" 
            className="ca-btn-light"
            onClick={() => onNavigate && onNavigate('landing')}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  )
}
