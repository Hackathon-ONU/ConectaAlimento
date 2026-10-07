export const initialDonations = [
  {
    id: "don-001",
    donorName: "Supermercado Bom Preço",
    donorType: "Supermercado",
    category: "Hortifrúti",
    title: "Caixas de Maçãs, Bananas e Laranjas",
    description: "Frutas maduras e próprias para consumo imediato ou preparo de sucos/doces.",
    quantity: "45 kg",
    urgency: "urgent", // 'urgent' | 'moderate' | 'safe'
    expiresIn: "Hoje até 19:00",
    address: "Rua das Flores, 240 - Centro",
    status: "available", // 'available' | 'reserved' | 'completed'
    createdAt: "2026-10-07T14:30:00Z"
  },
  {
    id: "don-002",
    donorName: "Padaria e Confeitaria Central",
    donorType: "Padaria",
    category: "Panificação",
    title: "Pães Franceses e Pães Doces do Dia",
    description: "Cerca de 60 pães frescos produzidos na fornada da manhã, em perfeito estado.",
    quantity: "12 kg (aprox. 80 unidades)",
    urgency: "urgent",
    expiresIn: "Hoje até 21:00",
    address: "Av. Brasil, 1050 - Jardim Paulista",
    status: "available",
    createdAt: "2026-10-07T16:00:00Z"
  },
  {
    id: "don-003",
    donorName: "Restaurante Sabor da Terra",
    donorType: "Restaurante",
    category: "Refeições Prontas",
    title: "Marmitas Seladas de Arroz, Feijão e Legumes",
    description: "Excedente de produção não exposto ao público, devidamente refrigerado e embalado.",
    quantity: "30 marmitas",
    urgency: "urgent",
    expiresIn: "Hoje até 20:30",
    address: "Rua Quinze de Novembro, 500",
    status: "available",
    createdAt: "2026-10-07T17:15:00Z"
  },
  {
    id: "don-004",
    donorName: "Hortifrúti São José",
    donorType: "Feirante / Hortifrúti",
    category: "Hortifrúti",
    title: "Legumes Diversos (Cenoura, Batata e Abobrinha)",
    description: "Legumes frescos com pequenos defeitos estéticos que seriam descartados comercialmente.",
    quantity: "70 kg",
    urgency: "moderate",
    expiresIn: "Amanhã até 12:00",
    address: "Praça do Mercado, Box 14",
    status: "available",
    createdAt: "2026-10-07T13:00:00Z"
  }
];

export const initialMetrics = {
  totalFoodSavedKg: 1250,
  mealsEstimated: 2500,
  co2SavedKg: 3125, // Regra padrão: ~2.5 kg CO2 por kg de comida desperdiçada evitada
  participatingDonors: 18,
  partnerOngs: 9
};
