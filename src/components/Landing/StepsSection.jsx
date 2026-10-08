import React from 'react'

export default function StepsSection() {
  return (
    <section className="lp-steps-section">
      <div className="lp-container">
        <div className="lp-steps-header">
          <span className="lp-tagline-orange">COMO A REDE FUNCIONA</span>
          <h2 className="lp-section-title">Da prateleira até a mesa.</h2>
        </div>

        <div className="lp-steps-grid">
          {/* Passo 01 */}
          <div className="lp-step-column">
            <span className="lp-step-number">PASSO 01</span>
            <h3 className="lp-step-title">Compartilhe o excedente</h3>
            <p className="lp-step-desc">
              Cadastre o alimento e informe quando ele poderá ser retirado.
            </p>
          </div>

          {/* Passo 02 */}
          <div className="lp-step-column">
            <span className="lp-step-number">PASSO 02</span>
            <h3 className="lp-step-title">Uma organização reserva</h3>
            <p className="lp-step-desc">
              Quem está perto verifica os detalhes e confirma que consegue buscar.
            </p>
          </div>

          {/* Passo 03 */}
          <div className="lp-step-column">
            <span className="lp-step-number">PASSO 03</span>
            <h3 className="lp-step-title">Combine e retire</h3>
            <p className="lp-step-desc">
              Use o código de coleta no encontro e atualize o status da doação.
            </p>
          </div>
        </div>

        {/* Caixa de aviso demonstrativo */}
        <div className="lp-disclaimer-box">
          <strong>Protótipo demonstrativo.</strong> Os perfis, ofertas e quantidades exibidos são fictícios e ficam salvos apenas neste navegador.
        </div>
      </div>
    </section>
  )
}
