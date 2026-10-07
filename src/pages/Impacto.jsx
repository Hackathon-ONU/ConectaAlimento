import React from 'react';
import { useApp } from '../context/AppContext';
import { Leaf, Award, BarChart2, Users, HeartHandshake } from 'lucide-react';

export default function Impacto() {
  const { metrics, donations } = useApp();

  const reservedCount = donations.filter(d => d.status === 'reserved').length;
  const availableCount = donations.filter(d => d.status === 'available').length;

  return (
    <div className="container" style={{ padding: '2.5rem 1.5rem 4rem' }}>
      <div style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'var(--primary-light)',
          color: 'var(--primary-hover)',
          padding: '6px 14px',
          borderRadius: '999px',
          fontSize: '0.85rem',
          fontWeight: 700,
          marginBottom: '1rem'
        }}>
          <Leaf size={16} /> Monitor de Impacto Social & Ambiental
        </div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Contribuindo Ativamente com os Objetivos da ONU
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Acompanhe como a ponte direta entre comércios e entidades beneficentes gera valor humano, econômico e ecológico.
        </p>
      </div>

      {/* Grid de Cards de Métricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            ODS 2.1 — Acesso a Alimentos
          </span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', margin: '0.5rem 0' }}>
            {metrics.mealsEstimated}+
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Refeições nutricionais complementadas na mesa de famílias em situação de vulnerabilidade.
          </p>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            ODS 12.3 — Redução do Desperdício
          </span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', margin: '0.5rem 0' }}>
            {metrics.totalFoodSavedKg} kg
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Total de comida fresca e própria para consumo resgatada da destinação inadequada em aterros.
          </p>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            ODS 13 — Ação Contra a Mudança Climática
          </span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0284c7', margin: '0.5rem 0' }}>
            {metrics.co2SavedKg} kg
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Emissões de gases de efeito estufa evitadas através da destinação correta da matéria orgânica.
          </p>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          padding: '1.75rem',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            ODS 17 — Parcerias & Comunidade
          </span>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#8b5cf6', margin: '0.5rem 0' }}>
            {metrics.participatingDonors + metrics.partnerOngs}
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Organizações conectadas em rede solidária no ecossistema local do ConectaAlimento.
          </p>
        </div>
      </div>

      {/* Status da Sessão Atual */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-md)',
        padding: '2rem',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
          Atividade em Tempo Real da Plataforma
        </h3>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Doações Ativas para Coleta:</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{availableCount} lotes</div>
          </div>
          <div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Doações Reservadas / Em Trânsito:</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>{reservedCount} lotes</div>
          </div>
          <div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Taxa de Conversão Solidária:</span>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>100% de aproveitamento</div>
          </div>
        </div>
      </div>
    </div>
  );
}
