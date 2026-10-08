import React, { useState } from 'react'
import { MapPin, Check } from 'lucide-react'
import './Pages.css'

export default function PerfilLocal({ onNavigate, profile, onSaveProfile }) {
  const [saved, setSaved] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onSaveProfile?.({
      ...profile,
      nome: formData.get('nome'),
      organizacao: formData.get('organizacao'),
      cidade: formData.get('cidade'),
      bairro: formData.get('bairro'),
      contato: formData.get('contato'),
    })
    setSaved(true)
  }

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
            {profile?.organizacao?.charAt(0) || 'M'}
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
            {profile?.tipo === 'ong' ? 'ONG / Receptor' : 'Doador'}
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 0.25rem 0' }}>{profile?.organizacao}</h3>
          <p style={{ color: '#BDD2C5', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>{profile?.nome}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#BDD2C5', fontSize: '0.85rem' }}>
            <MapPin size={14} /> {profile?.bairro}, {profile?.cidade}
          </div>
        </div>

        {/* Card Formulário Editar Perfil */}
        <form className="ca-content-card" onSubmit={handleSubmit}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#173E2D', margin: '0 0 1.5rem 0' }}>
            Editar perfil
          </h3>

          <div className="ca-form-grid-2">
            <div className="ca-form-group">
              <label className="ca-form-label" htmlFor="perfil-nome">Seu nome</label>
              <input id="perfil-nome" name="nome" type="text" className="ca-input" defaultValue={profile?.nome} required />
            </div>
            <div className="ca-form-group">
              <label className="ca-form-label" htmlFor="perfil-organizacao">Organização</label>
              <input id="perfil-organizacao" name="organizacao" type="text" className="ca-input" defaultValue={profile?.organizacao} required />
            </div>
          </div>

          <div className="ca-form-grid-2">
            <div className="ca-form-group">
              <label className="ca-form-label" htmlFor="perfil-cidade">Cidade</label>
              <input id="perfil-cidade" name="cidade" type="text" className="ca-input" defaultValue={profile?.cidade} required />
            </div>
            <div className="ca-form-group">
              <label className="ca-form-label" htmlFor="perfil-bairro">Bairro</label>
              <input id="perfil-bairro" name="bairro" type="text" className="ca-input" defaultValue={profile?.bairro} required />
            </div>
          </div>

          <div className="ca-form-group">
            <label className="ca-form-label" htmlFor="perfil-contato">Contato</label>
            <input id="perfil-contato" name="contato" type="tel" className="ca-input" defaultValue={profile?.contato} required />
          </div>

          <div className="ca-btn-group">
            <button 
              type="submit" 
              className="ca-btn-dark"
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
          {saved && <p role="status" style={{ color: '#267343', marginBottom: 0 }}>Perfil atualizado e salvo neste navegador.</p>}
        </form>
      </div>
    </div>
  )
}
