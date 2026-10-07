import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialDonations, initialMetrics } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Current user role: 'visitor' | 'donor' | 'ong'
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('conecta_user');
    return saved ? JSON.parse(saved) : { role: 'visitor', name: 'Visitante' };
  });

  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('conecta_donations');
    return saved ? JSON.parse(saved) : initialDonations;
  });

  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    localStorage.setItem('conecta_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('conecta_donations', JSON.stringify(donations));
  }, [donations]);

  const addDonation = (newDonation) => {
    const item = {
      ...newDonation,
      id: `don-${Date.now()}`,
      status: 'available',
      createdAt: new Date().toISOString()
    };
    setDonations((prev) => [item, ...prev]);
  };

  const reserveDonation = (id, ongName = 'ONG Esperança Viva') => {
    setDonations((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: 'reserved', reservedBy: ongName, reservedAt: new Date().toISOString() }
          : item
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        donations,
        addDonation,
        reserveDonation,
        activeTab,
        setActiveTab,
        metrics: initialMetrics
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser utilizado dentro de um AppProvider');
  }
  return context;
}
