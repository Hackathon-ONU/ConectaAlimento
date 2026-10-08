import React from 'react'
import { RotateCcw } from 'lucide-react'

export default function FooterLanding({ onResetDemo }) {
  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="lp-footer-content">
          <p className="lp-footer-brand">
            <strong>ConectaAlimento</strong> · comida boa, perto de quem precisa.
          </p>
          <button type="button" className="lp-btn-restore" title="Restaurar dados de teste" onClick={onResetDemo}>
            <RotateCcw size={14} /> Restaurar demonstração
          </button>
        </div>
      </div>
    </footer>
  )
}
