import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeartHandshake, Utensils, BarChart3, Store, Users } from 'lucide-react';

export default function Navbar() {
  const { activeTab, setActiveTab, currentUser, setCurrentUser } = useApp();

  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        <div 
          onClick={() => setActiveTab('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            padding: '8px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <HeartHandshake size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1 }}>
              Conecta<span style={{ color: 'var(--primary)' }}>Alimento</span>
            </h1>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ponte Solidária • ODS 2</span>
          </div>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('home')}
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'home' ? 'var(--primary-light)' : 'transparent',
              color: activeTab === 'home' ? 'var(--primary)' : 'var(--text-muted)',
              transition: 'all 0.2s'
            }}
          >
            Início
          </button>

          <button
            onClick={() => setActiveTab('feed')}
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'feed' ? 'var(--primary-light)' : 'transparent',
              color: activeTab === 'feed' ? 'var(--primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Utensils size={16} /> Alimentos Disponíveis
          </button>

          <button
            onClick={() => setActiveTab('doador')}
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'doador' ? 'var(--primary-light)' : 'transparent',
              color: activeTab === 'doador' ? 'var(--primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Store size={16} /> Sou Doador
          </button>

          <button
            onClick={() => setActiveTab('impacto')}
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.9rem',
              backgroundColor: activeTab === 'impacto' ? 'var(--primary-light)' : 'transparent',
              color: activeTab === 'impacto' ? 'var(--primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <BarChart3 size={16} /> Impacto ODS 2
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Modo: <strong>{currentUser.role === 'donor' ? 'Comércio Doador' : currentUser.role === 'ong' ? 'ONG Receptora' : 'Visitante'}</strong>
          </span>
          <button
            onClick={() => {
              const nextRole = currentUser.role === 'visitor' ? 'donor' : currentUser.role === 'donor' ? 'ong' : 'visitor';
              const nextName = nextRole === 'donor' ? 'Mercado Central' : nextRole === 'ong' ? 'ONG Prato Solidário' : 'Visitante';
              setCurrentUser({ role: nextRole, name: nextName });
            }}
            style={{
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)',
              border: '1px solid var(--accent)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.8rem'
            }}
          >
            Alternar Perfil
          </button>
        </div>
      </div>
    </header>
  );
}
