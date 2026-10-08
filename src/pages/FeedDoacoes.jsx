import React from 'react'
import { Search, MapPin, ArrowRight } from 'lucide-react'
import './Pages.css'

export default function FeedDoacoes({ onNavigate }) {
  const doacoes = [
    {
      id: 1,
      titulo: 'Cestas de feira da manhã',
      desc: 'Seleção de frutas e legumes frescos que não chegaram à banca. Ideal para cozinhar hoje e amanhã.',
      categoria: 'Hortifruti',
      qtd: '8 cestas',
      bairro: 'Pinheiros',
      local: 'Mercado Raiz',
      validade: 'Até 09 de out.'
    },
    {
      id: 2,
      titulo: 'Pães do dia',
      desc: 'Pães artesanais produzidos hoje, embalados em sacos de papel. Retirada até o fim da tarde.',
      categoria: 'Padaria',
      qtd: '24 unidades',
      bairro: 'Sumaré',
      local: 'Padaria Pão de Bairro',
      validade: 'Até 08 de out.'
    },
    {
      id: 3,
      titulo: 'Refeições prontas do almoço',
      desc: 'Porções individuais refrigeradas, preparadas nesta manhã. Alergênicos identificados nas embalagens.',
      categoria: 'Pratos prontos',
      qtd: '12 porções',
      bairro: 'Vila Madalena',
      local: 'Cozinha da Vila',
      validade: 'Até 08 de out.'
    },
    {
      id: 4,
      titulo: 'Grãos e massas fechados',
      desc: 'Pacotes fechados de arroz, feijão e macarrão próximos da data de consumo preferencial.',
      categoria: 'Não perecíveis',
      qtd: '16 pacotes',
      bairro: 'Perdizes',
      local: 'Armazém da Praça',
      validade: 'Até 20 de out.'
    }
  ]

  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">VIZINHANÇA EM MOVIMENTO</span>
          <h1 className="ca-screen-title">Doações disponíveis.</h1>
          <p className="ca-screen-subtitle">
            Alimentos compartilhados por comércios próximos.
          </p>
        </div>
        <div className="ca-demo-badge">
          Ambiente de demonstração
        </div>
      </div>

      {/* Barra de Filtros e Busca */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr repeat(3, minmax(140px, 180px))', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} color="#7E9185" style={{ position: 'absolute', left: '12px', top: '13px' }} />
          <input 
            type="text" 
            className="ca-input" 
            placeholder="Buscar alimento, comércio ou bairro" 
            style={{ paddingLeft: '2.5rem' }} 
          />
        </div>
        <select className="ca-select" defaultValue="Todas">
          <option value="Todas">Todas as categorias</option>
          <option value="Hortifruti">Hortifruti</option>
          <option value="Padaria">Padaria</option>
          <option value="Pratos">Pratos prontos</option>
          <option value="NaoPereciveis">Não perecíveis</option>
        </select>
        <select className="ca-select" defaultValue="Todas">
          <option value="Todas">Todas as cidades</option>
          <option value="SP">São Paulo</option>
        </select>
        <select className="ca-select" defaultValue="Qualquer">
          <option value="Qualquer">Qualquer validade</option>
          <option value="Hoje">Hoje</option>
          <option value="Amanhã">Amanhã</option>
        </select>
      </div>

      <p style={{ color: '#556E5F', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        <strong>4</strong> doações disponíveis
      </p>

      {/* Grid de Cards dos Alimentos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {doacoes.map(d => (
          <div key={d.id} className="ca-content-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Banner superior com categoria */}
            <div style={{ backgroundColor: '#D7E5DB', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                border: '1px solid #173E2D',
                padding: '0.4rem 1.25rem',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#173E2D',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                transform: 'rotate(-3deg)',
                backgroundColor: 'rgba(255, 255, 255, 0.4)'
              }}>
                {d.categoria}
              </div>
            </div>

            {/* Conteúdo do Card */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="ca-badge ca-badge-category">{d.categoria}</span>
                  <span className="ca-badge ca-badge-available">Disponível</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#173E2D', margin: '0 0 0.5rem 0' }}>
                  {d.titulo}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#556E5F', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                  {d.desc}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span className="ca-badge ca-badge-location">{d.qtd}</span>
                  <span className="ca-badge ca-badge-location" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
                    <MapPin size={12} /> {d.bairro}
                  </span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#778A7F', marginBottom: '1rem', borderTop: '1px solid #F0EAE1', paddingTop: '0.75rem' }}>
                  <span>{d.local}</span>
                  <span>{d.validade}</span>
                </div>

                <button 
                  type="button" 
                  className="ca-btn-dark"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => onNavigate && onNavigate('detalhe')}
                >
                  Ver detalhes <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
