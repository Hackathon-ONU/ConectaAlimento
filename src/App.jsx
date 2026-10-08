import React, { useEffect, useState } from 'react'
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

const initialDonations = [
  {
    id: 'seed-1',
    titulo: 'Cestas de feira da manhã',
    desc: 'Seleção de frutas e legumes frescos que não chegaram à banca. Ideal para cozinhar hoje e amanhã.',
    categoria: 'Hortifruti',
    qtd: '8 cestas',
    quantidade: 8,
    unidade: 'cestas',
    bairro: 'Pinheiros',
    cidade: 'São Paulo',
    local: 'Mercado Raiz',
    validade: 'Até 09 de out.',
    validadeData: '2026-10-09',
    retirada: '14:00 até 17:30',
    contato: '(11) 98821-4402',
    status: 'Disponível',
  },
  {
    id: 'seed-2',
    titulo: 'Pães do dia',
    desc: 'Pães artesanais produzidos hoje, embalados em sacos de papel. Retirada até o fim da tarde.',
    categoria: 'Padaria',
    qtd: '24 unidades',
    quantidade: 24,
    unidade: 'unidades',
    bairro: 'Sumaré',
    cidade: 'São Paulo',
    local: 'Padaria Pão de Bairro',
    validade: 'Até 08 de out.',
    validadeData: '2026-10-08',
    retirada: '15:00 até 18:00',
    contato: '(11) 98765-4321',
    status: 'Disponível',
  },
  {
    id: 'seed-3',
    titulo: 'Refeições prontas do almoço',
    desc: 'Porções individuais refrigeradas, preparadas nesta manhã. Alergênicos identificados nas embalagens.',
    categoria: 'Pratos prontos',
    qtd: '12 porções',
    quantidade: 12,
    unidade: 'porções',
    bairro: 'Vila Madalena',
    cidade: 'São Paulo',
    local: 'Cozinha da Vila',
    validade: 'Até 08 de out.',
    validadeData: '2026-10-08',
    retirada: '13:00 até 16:00',
    contato: '(11) 98234-5678',
    status: 'Disponível',
  },
  {
    id: 'seed-4',
    titulo: 'Grãos e massas fechados',
    desc: 'Pacotes fechados de arroz, feijão e macarrão próximos da data de consumo preferencial.',
    categoria: 'Não perecíveis',
    qtd: '16 pacotes',
    quantidade: 16,
    unidade: 'pacotes',
    bairro: 'Perdizes',
    cidade: 'São Paulo',
    local: 'Armazém da Praça',
    validade: 'Até 20 de out.',
    validadeData: '2026-10-20',
    retirada: '09:00 até 17:00',
    contato: '(11) 98123-4567',
    status: 'Disponível',
  },
]

function readStoredValue(key, fallback) {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function getScreenFromHash() {
  const screen = window.location.hash.slice(1)
  return ['landing', 'login', 'cadastro', 'perfil', 'doador', 'publicar', 'feed', 'detalhe', 'impacto'].includes(screen)
    ? screen
    : 'landing'
}

export default function App() {
  const [currentScreen, setScreen] = useState(getScreenFromHash)
  const [donations, setDonations] = useState(() => readStoredValue('conecta-alimento-doacoes', initialDonations))
  const [profile, setProfile] = useState(() => readStoredValue('conecta-alimento-perfil', {
    nome: 'Marina Costa',
    organizacao: 'Mercado Raiz',
    cidade: 'São Paulo',
    bairro: 'Pinheiros',
    contato: '(11) 98821-4402',
    tipo: 'doador',
  }))
  const [selectedDonationId, setSelectedDonationId] = useState('seed-1')

  const setCurrentScreen = (screen) => {
    if (screen === currentScreen) return
    window.history.pushState({ screen }, '', `#${screen}`)
    setScreen(screen)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleHistoryChange = () => {
      setScreen(getScreenFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('popstate', handleHistoryChange)
    window.addEventListener('hashchange', handleHistoryChange)
    return () => {
      window.removeEventListener('popstate', handleHistoryChange)
      window.removeEventListener('hashchange', handleHistoryChange)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('conecta-alimento-doacoes', JSON.stringify(donations))
  }, [donations])

  useEffect(() => {
    window.localStorage.setItem('conecta-alimento-perfil', JSON.stringify(profile))
  }, [profile])

  const addDonation = (donation) => {
    setDonations((current) => [{ ...donation, id: `donation-${Date.now()}`, status: 'Disponível' }, ...current])
  }

  const reserveDonation = (donationId) => {
    setDonations((current) => current.map((donation) => (
      donation.id === donationId && donation.status === 'Disponível'
        ? { ...donation, status: 'Reservada', reservadaPor: 'Instituto Caminhos', codigoColeta: Math.random().toString(36).slice(2, 8).toUpperCase() }
        : donation
    )))
  }

  const completeDonation = (donationId) => {
    setDonations((current) => current.map((donation) => (
      donation.id === donationId && donation.status === 'Reservada'
        ? { ...donation, status: 'Coletada' }
        : donation
    )))
  }

  const selectedDonation = donations.find((donation) => donation.id === selectedDonationId) || donations[0]

  const resetDemo = () => {
    window.localStorage.removeItem('conecta-alimento-doacoes')
    window.localStorage.removeItem('conecta-alimento-perfil')
    setDonations(initialDonations)
    setProfile({
      nome: 'Marina Costa',
      organizacao: 'Mercado Raiz',
      cidade: 'São Paulo',
      bairro: 'Pinheiros',
      contato: '(11) 98821-4402',
      tipo: 'doador',
    })
    setSelectedDonationId('seed-1')
    setCurrentScreen('landing')
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentScreen} onResetDemo={resetDemo} />
      case 'login':
        return <Login onNavigate={setCurrentScreen} />
      case 'cadastro':
        return <Cadastro onNavigate={setCurrentScreen} onSaveProfile={setProfile} />
      case 'perfil':
        return <PerfilLocal onNavigate={setCurrentScreen} profile={profile} onSaveProfile={setProfile} />
      case 'doador':
        return <DashboardDoador onNavigate={setCurrentScreen} donations={donations} profile={profile} onCompleteDonation={completeDonation} />
      case 'publicar':
        return <CadastrarExcedente onNavigate={setCurrentScreen} onAddDonation={addDonation} profile={profile} />
      case 'feed':
        return <FeedDoacoes onNavigate={setCurrentScreen} donations={donations} onSelectDonation={setSelectedDonationId} />
      case 'detalhe':
        return <DetalheDoacao onNavigate={setCurrentScreen} donation={selectedDonation} onReserveDonation={reserveDonation} />
      case 'impacto':
        return <Impacto donations={donations} />
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
