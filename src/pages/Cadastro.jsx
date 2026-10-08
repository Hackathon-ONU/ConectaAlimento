import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import './Pages.css'

export default function Cadastro({ onNavigate, onSaveProfile }) {
  const [tipo, setTipo] = useState('doador')

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onSaveProfile?.({
      nome: formData.get('nome'),
      organizacao: formData.get('organizacao'),
      cidade: formData.get('cidade'),
      bairro: formData.get('bairro'),
      contato: formData.get('contato'),
      tipo,
    })
    onNavigate?.(tipo === 'doador' ? 'doador' : 'feed')
  }

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

      <form className="ca-content-card" style={{ maxWidth: '800px' }} onSubmit={handleSubmit}>
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
            <label className="ca-form-label" htmlFor="cadastro-nome">Seu nome</label>
            <input id="cadastro-nome" name="nome" type="text" className="ca-input" placeholder="Ex.: Camila Santos" defaultValue="Camila Santos" required />
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label" htmlFor="cadastro-organizacao">Comércio ou organização</label>
            <input id="cadastro-organizacao" name="organizacao" type="text" className="ca-input" placeholder="Nome da organização" defaultValue="Padaria Estrela Solar" required />
          </div>
        </div>

        <div className="ca-form-grid-2">
          <div className="ca-form-group">
            <label className="ca-form-label" htmlFor="cadastro-cidade">Cidade</label>
            <input id="cadastro-cidade" name="cidade" type="text" className="ca-input" defaultValue="São Paulo" required />
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label" htmlFor="cadastro-bairro">Bairro</label>
            <input id="cadastro-bairro" name="bairro" type="text" className="ca-input" placeholder="Seu bairro" defaultValue="Pinheiros" required />
          </div>
        </div>

        <div className="ca-form-group">
          <label className="ca-form-label" htmlFor="cadastro-contato">Contato</label>
          <input id="cadastro-contato" name="contato" type="tel" className="ca-input" placeholder="Telefone ou WhatsApp" defaultValue="(11) 98765-4321" required />
        </div>

        <div className="ca-alert-box ca-alert-green" style={{ margin: '1.5rem 0' }}>
          <span>Dados usados somente neste protótipo neste navegador. Não informe dados pessoais reais.</span>
        </div>

        <div className="ca-btn-group">
          <button type="submit" className="ca-btn-dark">
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
      </form>
    </div>
  )
}
