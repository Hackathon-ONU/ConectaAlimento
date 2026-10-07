import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, UtensilsCrossed, Leaf } from 'lucide-react';

export default function Home() {
  const { setActiveTab, metrics } = useApp();

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-main) 100%)',
        padding: '4rem 0 3rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px' }}>
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
            marginBottom: '1.25rem'
          }}>
            <Leaf size={16} /> Alinhado ao ODS 2 da ONU — Fome Zero
          </div>

          <h1 style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            color: 'var(--text-main)'
          }}>
            Transformando o excedente de alimentos em <span style={{ color: 'var(--primary)' }}>esperança e nutrição</span>.
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Conectamos restaurantes, mercados e feirantes diretamente a ONGs e cozinhas comunitárias. Reduzimos o desperdício diário e agilizamos a entrega para quem mais precisa.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('feed')}
              style={{
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              Ver Alimentos Disponíveis <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setActiveTab('doador')}
              style={{
                backgroundColor: '#ffffff',
                color: 'var(--text-main)',
                border: '1px solid var(--border-color)',
                padding: '12px 24px',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              Cadastrar Doação (Comércios)
            </button>
          </div>
        </div>
      </section>

      {/* Highlights / Métricas rápidas */}
      <section className="container" style={{ marginTop: '-1.5rem', marginBottom: '3.5rem' }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-md)',
          padding: '1.5rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>
              {metrics.totalFoodSavedKg} kg
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Alimentos Salvos do Desperdício
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>
              {metrics.mealsEstimated}+
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Refeições Proporcionadas
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0284c7' }}>
              {metrics.co2SavedKg} kg
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Emissão de CO₂ Evitada
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#8b5cf6' }}>
              {metrics.participatingDonors} Comércios
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Doadores Cadastrados
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            Como o ConectaAlimento Funciona
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Processo 100% digital, ágil e seguro para evitar o descarte de comida de qualidade.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <UtensilsCrossed size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              1. Comércio Notifica o Excedente
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              O restaurante, supermercado ou padaria cadastra itens próprios para consumo que não foram vendidos no dia.
            </p>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <CheckCircle2 size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              2. ONG Reserva Instantaneamente
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              Instituições sociais da região visualizam o catálogo por proximidade e reservam o lote com 1 clique.
            </p>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: '#e0f2fe',
              color: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Truck size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              3. Retirada e Entrega Segura
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              A ONG retira os alimentos no endereço do doador e distribui refeições nutritivas à comunidade vulnerável.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
