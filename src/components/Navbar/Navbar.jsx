import React from 'react'
import { Sprout } from 'lucide-react'
import './Navbar.css'

export default function Navbar({ currentScreen, setCurrentScreen }) {
  const screens = [
    { id: 'landing', label: 'Início' },
    { id: 'feed', label: 'Doações Disponíveis' },
    { id: 'detalhe', label: 'Detalhes da Doação' },
    { id: 'doador', label: 'Espaço do Doador' },
    { id: 'publicar', label: '+ Publicar Excedente' },
    { id: 'impacto', label: 'Impacto ODS 2' },
    { id: 'login', label: 'Login' },
    { id: 'cadastro', label: 'Cadastrar' },
    { id: 'perfil', label: 'Meu Perfil' }
  ]

  return (
    <header className="ca-navbar">
      <div className="ca-navbar-container">
        <button 
          type="button" 
          className="ca-navbar-brand"
          onClick={() => setCurrentScreen('landing')}
        >
          <Sprout size={22} color="#173E2D" />
          Conecta<span>Alimento</span>
        </button>

        <nav className="ca-nav-links">
          {screens.map(s => (
            <button
              key={s.id}
              type="button"
              className={`ca-nav-btn ${currentScreen === s.id ? 'active' : ''}`}
              onClick={() => setCurrentScreen(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
