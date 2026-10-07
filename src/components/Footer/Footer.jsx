import React from 'react';
import { Globe, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid var(--border-color)',
      padding: '2.5rem 0 1.5rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              ConectaAlimento
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Plataforma desenvolvida para o Hackathon Front-end em apoio ao <strong>ODS 2 da ONU: Fome Zero e Agricultura Sustentável</strong>.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Objetivos da ONU Vinculados
            </h4>
            <ul style={{ listStyle: 'none', fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>🌱 <strong>ODS 2:</strong> Fome Zero e Nutrição Adequada</li>
              <li>♻️ <strong>ODS 12:</strong> Consumo e Produção Responsáveis</li>
              <li>🤝 <strong>ODS 17:</strong> Parcerias e Meios de Implementação</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              Segurança Alimentar
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Conformidade com a <em>Lei Federal nº 14.016/2020</em> que autoriza e regulamenta a doação de alimentos excedentes próprios para o consumo humano.
            </p>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          ConectaAlimento • Hackathon ONU 2026 • Desenvolvido com React
        </div>
      </div>
    </footer>
  );
}
