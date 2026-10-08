import React from 'react'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import './Pages.css'

export default function CadastrarExcedente({ onNavigate }) {
  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">NOVA PUBLICAÇÃO</span>
          <h1 className="ca-screen-title">Compartilhe o excedente.</h1>
          <p className="ca-screen-subtitle">
            Inclua os detalhes que ajudam uma organização a decidir.
          </p>
        </div>
        <div className="ca-demo-badge">
          Ambiente de demonstração
        </div>
      </div>

      <div className="ca-alert-box ca-alert-green">
        <ShieldCheck size={20} />
        <span>Informe uma quantidade realista e uma janela de retirada que sua equipe consiga cumprir.</span>
      </div>

      <div className="ca-content-card">
        <div className="ca-form-group">
          <label className="ca-form-label">Nome da doação</label>
          <input type="text" className="ca-input" placeholder="Ex.: Caixas de legumes frescos" defaultValue="Caixas de legumes frescos" />
        </div>

        <div className="ca-form-grid-2">
          <div className="ca-form-group">
            <label className="ca-form-label">Categoria</label>
            <select className="ca-select" defaultValue="Hortifruti">
              <option value="Hortifruti">Hortifruti</option>
              <option value="Padaria">Padaria</option>
              <option value="Pratos prontos">Pratos prontos</option>
              <option value="Não perecíveis">Não perecíveis</option>
            </select>
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label">Quantidade</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '0.75rem' }}>
              <input type="number" className="ca-input" defaultValue="8" />
              <select className="ca-select" defaultValue="cestas">
                <option value="cestas">cestas</option>
                <option value="kg">kg</option>
                <option value="unidades">unidades</option>
                <option value="porções">porções</option>
                <option value="pacotes">pacotes</option>
              </select>
            </div>
          </div>
        </div>

        <div className="ca-form-group">
          <label className="ca-form-label">Descrição e cuidados</label>
          <textarea 
            className="ca-textarea" 
            placeholder="Conte o que está sendo doado, como está armazenado e informações importantes."
            defaultValue="Seleção de frutas e legumes frescos colhidos hoje que não foram para a gôndola principal. Próprios para consumo imediato."
          />
        </div>

        <div className="ca-form-grid-2">
          <div className="ca-form-group">
            <label className="ca-form-label">Consumir até</label>
            <input type="date" className="ca-input" defaultValue="2026-10-09" />
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label">Janela de retirada</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="time" className="ca-input" defaultValue="14:00" />
              <span style={{ color: '#556E5F', fontSize: '0.9rem' }}>até</span>
              <input type="time" className="ca-input" defaultValue="17:00" />
            </div>
          </div>
        </div>

        <div className="ca-form-group">
          <label className="ca-form-label">Imagem opcional</label>
          <input type="file" className="ca-input" />
          <small style={{ color: '#7E9185', marginTop: '0.25rem' }}>
            Imagem local, até 1,5 MB. Fica salva neste navegador.
          </small>
        </div>

        <div className="ca-alert-box ca-alert-peach" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <span>Retirada em Pinheiros, São Paulo · Contato: (11) 98821-4402. Revise seu perfil antes de publicar.</span>
        </div>

        <div className="ca-btn-group">
          <button 
            type="button" 
            className="ca-btn-orange"
            onClick={() => {
              alert('Demonstração: Doação cadastrada com sucesso!')
              onNavigate && onNavigate('feed')
            }}
          >
            Publicar doação <ArrowRight size={18} />
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
  )
}
