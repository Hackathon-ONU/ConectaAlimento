import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, MapPin, Clock, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function FeedOng() {
  const { donations, reserveDonation } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [reservedSuccessId, setReservedSuccessId] = useState(null);

  const categories = ['Todas', 'Hortifrúti', 'Panificação', 'Refeições Prontas'];

  const filteredDonations = donations.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReserve = (id) => {
    reserveDonation(id, 'Minha ONG Beneficiária');
    setReservedSuccessId(id);
    setTimeout(() => {
      setReservedSuccessId(null);
    }, 4000);
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem 4rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Alimentos Disponíveis para Doação
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Alimentos próprios para consumo disponibilizados por comércios locais para ONGs e cozinhas solidárias.
        </p>
      </div>

      {/* Barra de Filtro e Busca */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '1.25rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem'
      }}>
        <div style={{
          position: 'relative',
          flex: '1 1 300px'
        }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Buscar por alimento, padaria ou mercado..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 10px 10px 38px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                backgroundColor: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-main)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)',
                border: '1px solid var(--border-color)',
                transition: 'all 0.15s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Cards */}
      {filteredDonations.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-color)'
        }}>
          <AlertCircle size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
            Nenhum alimento encontrado
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Tente buscar com outros termos ou selecione outra categoria.
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredDonations.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary-hover)',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    {item.category}
                  </span>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: item.status === 'reserved' ? '#fef3c7' : '#ecfdf5',
                    color: item.status === 'reserved' ? '#b45309' : '#047857'
                  }}>
                    {item.status === 'reserved' ? 'Reservado' : 'Disponível'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                  {item.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
                  backgroundColor: 'var(--bg-main)',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <strong>Quantidade:</strong> <span>{item.quantity}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#b45309' }}>
                    <Clock size={14} /> <strong>Retirada:</strong> <span>{item.expiresIn}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                    <MapPin size={14} /> <span>{item.donorName} — {item.address}</span>
                  </div>
                </div>
              </div>

              {item.status === 'available' ? (
                <button
                  onClick={() => handleReserve(item.id)}
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <CheckCircle size={16} /> Solicitar Reserva para Minha ONG
                </button>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '8px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)'
                }}>
                  {reservedSuccessId === item.id ? '🎉 Reservado com sucesso!' : `Reservado por ${item.reservedBy || 'ONG Parceira'}`}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
