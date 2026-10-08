import React, { useMemo, useState } from 'react'
import { Search, MapPin, ArrowRight } from 'lucide-react'
import './Pages.css'

export default function FeedDoacoes({ onNavigate, donations = [], onSelectDonation }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')
  const [city, setCity] = useState('Todas')
  const [expiration, setExpiration] = useState('Qualquer')
  const dateKey = (date) => {
    const localDate = new Date(date)
    return `${localDate.getFullYear()}-${String(localDate.getMonth() + 1).padStart(2, '0')}-${String(localDate.getDate()).padStart(2, '0')}`
  }
  const today = dateKey(new Date())
  const tomorrowDate = new Date()
  tomorrowDate.setDate(tomorrowDate.getDate() + 1)
  const tomorrow = dateKey(tomorrowDate)
  const filteredDonations = useMemo(() => donations.filter((donation) => {
    const query = search.trim().toLocaleLowerCase('pt-BR')
    const matchesSearch = !query || [donation.titulo, donation.local, donation.bairro].some((value) => value?.toLocaleLowerCase('pt-BR').includes(query))
    const matchesCategory = category === 'Todas' || donation.categoria === category
    const matchesCity = city === 'Todas' || donation.cidade === city
    const matchesExpiration = expiration === 'Qualquer'
      || (expiration === 'Hoje' && donation.validadeData === today)
      || (expiration === 'Amanhã' && donation.validadeData === tomorrow)
    return donation.status !== 'Coletada' && matchesSearch && matchesCategory && matchesCity && matchesExpiration
  }), [donations, search, category, city, expiration, today, tomorrow])

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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Buscar doações"
          />
        </div>
        <select className="ca-select" value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filtrar por categoria">
          <option value="Todas">Todas as categorias</option>
          <option value="Hortifruti">Hortifruti</option>
          <option value="Padaria">Padaria</option>
          <option value="Pratos prontos">Pratos prontos</option>
          <option value="Não perecíveis">Não perecíveis</option>
        </select>
        <select className="ca-select" value={city} onChange={(event) => setCity(event.target.value)} aria-label="Filtrar por cidade">
          <option value="Todas">Todas as cidades</option>
          <option value="SP">São Paulo</option>
        </select>
        <select className="ca-select" value={expiration} onChange={(event) => setExpiration(event.target.value)} aria-label="Filtrar por validade">
          <option value="Qualquer">Qualquer validade</option>
          <option value="Hoje">Hoje</option>
          <option value="Amanhã">Amanhã</option>
        </select>
      </div>

      <p style={{ color: '#556E5F', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        <strong>{filteredDonations.length}</strong> doações exibidas de {donations.filter((donation) => donation.status !== 'Coletada').length} disponíveis
      </p>

      {/* Grid de Cards dos Alimentos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filteredDonations.map(d => (
          <div key={d.id} className="ca-content-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Banner superior com categoria */}
            <div style={{ backgroundColor: '#D7E5DB', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: d.imagem ? `url(${d.imagem})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              {!d.imagem &&
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
              </div>}
            </div>

            {/* Conteúdo do Card */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="ca-badge ca-badge-category">{d.categoria}</span>
                  <span className={`ca-badge ${d.status === 'Disponível' ? 'ca-badge-available' : 'ca-badge-location'}`}>{d.status}</span>
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
                  onClick={() => {
                    onSelectDonation?.(d.id)
                    onNavigate?.('detalhe')
                  }}
                >
                  Ver detalhes <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredDonations.length === 0 && <p role="status" style={{ color: '#556E5F' }}>Nenhuma doação corresponde aos filtros selecionados.</p>}
    </div>
  )
}
