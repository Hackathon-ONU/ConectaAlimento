import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function HeroSection({ onNavigate }) {
  return (
    <section className="lp-hero-wrapper">
      <div className="lp-hero-card">
        <div className="lp-hero-content">
          <span className="lp-tagline-orange">UMA REDE DE CUIDADO NO SEU BAIRRO</span>
          <h1 className="lp-hero-title">
            O excedente de<br />
            hoje pode<br />
            alimentar o<br />
            amanhã.
          </h1>
          <p className="lp-hero-subtitle">
            Conectamos comércios que têm alimentos excedentes a organizações sociais que fazem a diferença todos os dias.
          </p>
          <div className="lp-hero-actions">
            <button 
              type="button" 
              className="lp-btn-orange"
              onClick={() => onNavigate && onNavigate('login')}
            >
              Entrar na rede <ArrowRight size={18} />
            </button>
            <button 
              type="button" 
              className="lp-btn-outline"
              onClick={() => onNavigate && onNavigate('feed')}
            >
              Ver doações
            </button>
          </div>
        </div>

        <div className="lp-hero-badge">
          <div className="lp-circle-seal">
            <span>BAIRRO<br />A BAIRRO<br />COM PROPÓSITO</span>
          </div>
        </div>
      </div>
    </section>
  )
}
