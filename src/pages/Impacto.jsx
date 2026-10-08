import React from 'react'
import { Sprout } from 'lucide-react'
import './Pages.css'

export default function Impacto({ donations = [] }) {
  const availableCount = donations.filter((donation) => donation.status === 'Disponível').length
  const reservedCount = donations.filter((donation) => donation.status === 'Reservada').length
  const completedCount = donations.filter((donation) => donation.status === 'Coletada').length
  const categories = [...new Set(donations.map((donation) => donation.categoria))]

  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">IMPACTO LOCAL</span>
          <h1 className="ca-screen-title">O que foi compartilhado.</h1>
          <p className="ca-screen-subtitle">
            Contagens baseadas somente nas quantidades registradas neste navegador.
          </p>
        </div>
        <div className="ca-demo-badge">
          Ambiente de demonstração
        </div>
      </div>

      <div className="ca-alert-box ca-alert-peach">
        <span><strong>Dados simulados.</strong> Indicadores refletem os registros desta demonstração. Não estimamos refeições, pessoas atendidas ou emissões evitadas.</span>
      </div>

      {/* Grid de 4 Métricas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
        <div style={{ backgroundColor: '#EAF4EC', borderRadius: '8px', padding: '1.75rem' }}>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: '#173E2D', lineHeight: 1 }}>{donations.length}</div>
          <p style={{ fontSize: '0.88rem', color: '#4A6854', marginTop: '0.85rem', marginBottom: 0, lineHeight: 1.4 }}>
            ofertas registradas neste navegador
          </p>
        </div>

        <div style={{ backgroundColor: '#EAF4EC', borderRadius: '8px', padding: '1.75rem' }}>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: '#173E2D', lineHeight: 1 }}>{availableCount}</div>
          <p style={{ fontSize: '0.88rem', color: '#4A6854', marginTop: '0.85rem', marginBottom: 0, lineHeight: 1.4 }}>
            ofertas disponíveis para reserva
          </p>
        </div>

        <div style={{ backgroundColor: '#FAEEE4', borderRadius: '8px', padding: '1.75rem' }}>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: '#88431E', lineHeight: 1 }}>{reservedCount}</div>
          <p style={{ fontSize: '0.88rem', color: '#4A6854', marginTop: '0.85rem', marginBottom: 0, lineHeight: 1.4 }}>
            ofertas reservadas para retirada
          </p>
        </div>

        <div style={{ backgroundColor: '#EAF4EC', borderRadius: '8px', padding: '1.75rem' }}>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: '#173E2D', lineHeight: 1 }}>{completedCount}</div>
          <p style={{ fontSize: '0.88rem', color: '#4A6854', marginTop: '0.85rem', marginBottom: 0, lineHeight: 1.4 }}>
            ofertas com coleta confirmada
          </p>
        </div>
      </div>

      {/* Seção Por Categoria */}
      <span className="ca-screen-tag">OFERTAS REGISTRADAS</span>
      <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#173E2D', margin: '0 0 1.5rem 0' }}>
        Acompanhe cada publicação.
      </h2>

      {donations.length > 0 ? <div style={{ display: 'grid', gap: '0.75rem' }}>
        {categories.map((category) => (
          <section key={category} className="ca-content-card">
            <h3 style={{ fontSize: '1.1rem', color: '#173E2D', margin: '0 0 0.75rem' }}>{category}</h3>
            {donations.filter((donation) => donation.categoria === category).map((donation) => (
              <div key={donation.id} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '0.7rem 0', borderTop: '1px solid #ECE4DA' }}>
                <span>{donation.titulo} · {donation.qtd}</span>
                <span>{donation.status}</span>
              </div>
            ))}
          </section>
        ))}
      </div> : <div style={{
        border: '1.5px dashed #C8D8CC',
        borderRadius: '20px',
        padding: '4rem 2rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: '#E5F1E8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          color: '#173E2D'
        }}>
          <Sprout size={24} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#173E2D', margin: '0 0 0.5rem 0' }}>
          Ainda não há coletas concluídas
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#556E5F', maxWidth: '420px', margin: 0, lineHeight: 1.5 }}>
          Quando um doador confirmar uma coleta, as quantidades registradas serão contabilizadas aqui.
        </p>
      </div>}
    </div>
  )
}
