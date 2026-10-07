import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PlusCircle, CheckCircle2, PackageCheck } from 'lucide-react';

export default function DashboardDoador() {
  const { addDonation, setActiveTab } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    donorName: 'Padaria Estrela Dalva',
    donorType: 'Padaria',
    category: 'Panificação',
    title: '',
    description: '',
    quantity: '',
    expiresIn: 'Hoje até 20:00',
    address: 'Rua Principal, 120 - Bairro Novo',
    urgency: 'urgent'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.quantity) return;

    addDonation(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setActiveTab('feed');
    }, 1800);
  };

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem 4rem', maxWidth: '750px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Cadastrar Alimento Excedente
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Disponibilize excedentes do seu comércio para que ONGs locais retirem e distribuam antes do descarte.
        </p>
      </div>

      {submitted ? (
        <div style={{
          backgroundColor: 'var(--primary-light)',
          border: '1px solid var(--primary)',
          borderRadius: 'var(--radius-md)',
          padding: '2.5rem',
          textAlign: 'center',
          color: 'var(--primary-hover)'
        }}>
          <CheckCircle2 size={48} style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Doação cadastrada com sucesso!
          </h2>
          <p style={{ fontSize: '0.95rem' }}>
            As ONGs da sua região já podem visualizar e reservar este lote. Redirecionando para o catálogo...
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
              Nome do seu Estabelecimento
            </label>
            <input
              type="text"
              required
              value={formData.donorName}
              onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
                Categoria
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.9rem',
                  backgroundColor: '#ffffff'
                }}
              >
                <option value="Hortifrúti">Hortifrúti (Frutas/Legumes)</option>
                <option value="Panificação">Panificação (Pães/Bolos)</option>
                <option value="Refeições Prontas">Refeições Prontas / Marmitas</option>
                <option value="Não Perecíveis">Grãos e Não Perecíveis</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
                Quantidade / Peso Estimado
              </label>
              <input
                type="text"
                required
                placeholder="Ex: 25 kg ou 40 marmitas"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
              Título do Lote de Alimentos
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Pães franceses e baguetes do dia"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
              Descrição e Estado dos Alimentos
            </label>
            <textarea
              rows={3}
              placeholder="Descreva detalhes como embalagem, refrigeração e cuidados necessários..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
                Horário Limite para Retirada
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Hoje até 21:00"
                value={formData.expiresIn}
                onChange={(e) => setFormData({ ...formData, expiresIn: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
                Endereço de Retirada
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 700,
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '0.5rem'
            }}
          >
            <PlusCircle size={18} /> Publicar Disponibilidade de Doação
          </button>
        </form>
      )}
    </div>
  );
}
