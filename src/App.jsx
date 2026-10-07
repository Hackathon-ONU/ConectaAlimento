import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import FeedOng from './pages/FeedOng';
import DashboardDoador from './pages/DashboardDoador';
import Impacto from './pages/Impacto';

function MainContent() {
  const { activeTab } = useApp();

  return (
    <main style={{ minHeight: 'calc(100vh - 70px - 250px)' }}>
      {activeTab === 'home' && <Home />}
      {activeTab === 'feed' && <FeedOng />}
      {activeTab === 'doador' && <DashboardDoador />}
      {activeTab === 'impacto' && <Impacto />}
    </main>
  );
}

export default function App() {
  return (
    <AppProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </AppProvider>
  );
}
