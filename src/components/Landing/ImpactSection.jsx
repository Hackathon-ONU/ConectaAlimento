import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ImpactSection({ onNavigate }) {
  return (
    <section className="lp-impact-section">
      <div className="lp-container">
        <div className="lp-impact-header">
          <div className="lp-impact-titles">
            <span className="lp-tagline-orange">SIMPLES DE FAZER. IMPORTANTE DE VERDADE.</span>
            <h2 className="lp-section-title">
              Alimento perto.<br />
              Impacto por todo lado.
            </h2>
          </div>
          <p className="lp-section-subtitle-right">
            Uma ponte local para que o alimento chegue a quem pode aproveitar.
          </p>
        </div>

        <div className="lp-cards-grid">
          {/* Card 01 - Para quem doa */}
          <div className="lp-card lp-card-donor">
            <div>
              <div className="lp-card-number">01</div>
              <h3 className="lp-card-role">Para quem doa</h3>
              <p className="lp-card-text">
                Publique excedentes com quantidade, validade e janela de retirada. Organizações próximas encontram e reservam.
              </p>
            </div>
            <button 
              type="button" 
              className="lp-btn-card-donor"
              onClick={() => onNavigate && onNavigate('doador')}
            >
              Sou um doador <ArrowUpRight size={17} />
            </button>
          </div>

          {/* Card 02 - Para quem recebe */}
          <div className="lp-card lp-card-receiver">
            <div>
              <div className="lp-card-number">02</div>
              <h3 className="lp-card-role">Para quem recebe</h3>
              <p className="lp-card-text">
                Descubra alimentos disponíveis na vizinhança, reserve o que sua organização consegue retirar e confirme a coleta.
              </p>
            </div>
            <button 
              type="button" 
              className="lp-btn-card-receiver"
              onClick={() => onNavigate && onNavigate('feed')}
            >
              Sou uma organização <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
