import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import PerfilLocal from './pages/PerfilLocal'
import DashboardDoador from './pages/DashboardDoador'
import CadastrarExcedente from './pages/CadastrarExcedente'
import FeedDoacoes from './pages/FeedDoacoes'
import DetalheDoacao from './pages/DetalheDoacao'
import Impacto from './pages/Impacto'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing')

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentScreen} />
      case 'login':
        return <Login onNavigate={setCurrentScreen} />
      case 'cadastro':
        return <Cadastro onNavigate={setCurrentScreen} />
      case 'perfil':
        return <PerfilLocal onNavigate={setCurrentScreen} />
      case 'doador':
        return <DashboardDoador onNavigate={setCurrentScreen} />
      case 'publicar':
        return <CadastrarExcedente onNavigate={setCurrentScreen} />
      case 'feed':
        return <FeedDoacoes onNavigate={setCurrentScreen} />
      case 'detalhe':
        return <DetalheDoacao onNavigate={setCurrentScreen} />
      case 'impacto':
        return <Impacto onNavigate={setCurrentScreen} />
      default:
        return <LandingPage onNavigate={setCurrentScreen} />
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2' }}>
      <Navbar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      <main>
        {renderScreen()}
      </main>
    </div>
  )
}
