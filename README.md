# ConectaAlimento — Ponte Solidária Contra o Desperdício

> Aplicação web Front-end desenvolvida durante o **Hackathon Front-end — ODS da ONU**, conectando estabelecimentos comerciais com excedentes de alimentos próprios para consumo a entidades assistenciais e cozinhas comunitárias.

---

## 🎯 ODS
* **ODS 2: Fome Zero e Agricultura Sustentável** (Meta 2.1 e 2.2 — Acesso universal a alimentos seguros e nutritivos).
* **ODS 12: Consumo e Produção Responsáveis** (Meta 12.3 — Redução pela metade do desperdício global de alimentos per capita).
* **ODS 17: Parcerias e Meios de Implementação** (Engajamento entre setor privado, sociedade civil e voluntariado).

---

## 🚨 Problema
Diariamente, toneladas de alimentos perfeitamente próprios para consumo humano são descartadas por pequenos e médios comércios (restaurantes, feiras, padarias e supermercados) devido à aproximação da data de validade comercial, pequenas imperfeições estéticas ou sobra de produção do turno. 

Paralelamente, comunidades periféricas e famílias em vulnerabilidade social enfrentam severa insegurança alimentar. A principal barreira para o aproveitamento dessas sobras é a **ausência de um canal de comunicação ágil e em tempo real** entre o comércio que deseja doar e as entidades que têm a capacidade logística de retirar os alimentos rapidamente.

---

## 👥 Público-alvo
1. **Doadores:** Restaurantes, padarias, quitandas, supermercados e produtores locais que geram excedentes diários.
2. **Receptores / Beneficiários:** ONGs, cozinhas comunitárias, creches sociais, bancos de alimentos e abrigos que distribuem refeições para pessoas em vulnerabilidade.

---

## 💡 Proposta de Valor
* **Qual problema resolvemos?** O descarte diário de alimentos aptos para consumo decorrente de falhas de comunicação e logística de última hora.
* **Para quem?** Comércios com excedentes e entidades sociais com demanda por insumos alimentares.
* **Como nossa solução ajuda?** Cria uma ponte direta, instantânea e geolocalizada via web, onde comércios publicam seus excedentes em menos de 1 minuto e ONGs reservam e coordenam a retirada imediata.
* **Qual valor ela entrega?** Redução imediata do desperdício de alimentos, economia de recursos para entidades sociais, mitigação de gases de efeito estufa (metano em aterros) e alinhamento prático com as metas da ONU e com a **Lei Federal nº 14.016/2020** (Segurança Jurídica na Doação de Alimentos).

---

## 🔍 Benchmarking

Realizamos uma análise comparativa de 5 soluções do mercado:

| Solução | Funcionalidades Principais | Público-alvo | Pontos Positivos | Pontos Negativos | Referência Utilizada no ConectaAlimento |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Too Good To Go** | Venda com desconto de "sacolas surpresa" de excedentes | Consumidor B2C final e restaurantes | Interface intuitiva e alta adesão comercial | Modelo focado em venda e não em doação social | Conceito de notificações rápidas de lotes do dia |
| **Comida Invisível** | Conexão para doação de alimentos certificados | Médias e grandes empresas / ONGs | Certificação de segurança alimentar e combate ao desperdício | Foco em grandes volumes; fluxo burocrático para pequenos comércios | Transparência de dados e alinhamento com a Lei 14.016 |
| **Olio** | Compartilhamento comunitário de sobras e itens domésticos | Vizinhos e voluntários C2C | Estimula a comunidade local e facilidade de anúncio | Falta de foco em entidades assistenciais organizadas | Facilidade e agilidade de cadastro de itens |
| **Connecting Food** | Gestão de ponta a ponta de doações corporativas | Redes de varejo e bancos de alimentos | Métricas consolidadas de impacto social e ambiental | Plataforma corporativa fechada, complexa para microempresas | Dashboard de métricas (kg salvos e CO₂ evitado) |
| **Banco de Alimentos (Mesa Brasil)** | Logística centralizada de arrecadação e redistribuição | Produtores, indústrias e entidades cadastradas | Escala gigantesca e credibilidade institucional | Dependência de centros de triagem físicos e agendamento lento | Critérios de triagem e categorias de alimentos |

---

## 📋 Requisitos

### Requisitos Funcionais (RF)
* **RF01:** O sistema deve permitir que o comércio doador cadastre lotes de alimentos excedentes informando título, categoria, quantidade/peso, prazo de retirada e endereço.
* **RF02:** O sistema deve permitir a alternância de perfil de usuário (Visitante, Comércio Doador e ONG Receptora).
* **RF03:** O sistema deve disponibilizar um catálogo/feed de alimentos disponíveis em tempo real.
* **RF04:** O sistema deve permitir filtrar alimentos por categoria (Hortifrúti, Panificação, Refeições Prontas e Não Perecíveis).
* **RF05:** O sistema deve permitir a busca textual por nome de alimento ou estabelecimento.
* **RF06:** O sistema deve permitir que uma ONG solicite a reserva imediata de um lote disponível.
* **RF07:** O sistema deve atualizar o status do alimento para "Reservado" após a solicitação da ONG.
* **RF08:** O sistema deve exibir os detalhes de contato e retirada do comércio doador para a ONG solicitante.
* **RF09:** O sistema deve calcular e exibir indicadores consolidados de impacto social (kg de alimentos salvos, refeições estimadas, emissão de CO₂ evitada).
* **RF10:** O sistema deve persistir as doações e reservas no navegador do usuário via LocalStorage.

### Requisitos Não Funcionais (RNF)
* **RNF01 — Responsividade:** A aplicação deve ser totalmente adaptável para dispositivos móveis, tablets e desktops (layout fluido).
* **RNF02 — Acessibilidade:** A interface deve respeitar contrastes mínimos de cores recomendados pelas diretrizes WCAG e fontes legíveis.
* **RNF03 — Desempenho:** O carregamento inicial da aplicação deve ser inferior a 2 segundos em conexões padrão.
* **RNF04 — Arquitetura Front-end:** A aplicação deve ser desenvolvida em Single Page Application (SPA) utilizando React com separação clara de componentes.
* **RNF05 — Usabilidade:** A publicação de um excedente pelo comércio não deve demandar mais de 4 passos na tela.
* **RNF06 — Disponibilidade:** A aplicação deve ser hospedada em infraestrutura de alta disponibilidade com CDN global (Vercel / Netlify).
* **RNF07 — Persistência Client-side:** O estado da aplicação deve se manter íntegro mesmo após o recarregamento da página (F5) através de LocalStorage.
* **RNF08 — Feedback Visual:** Todas as ações do usuário (reservar, cadastrar, alternar filtro) devem fornecer retorno visual instantâneo.
* **RNF09 — Padrões de Código:** O código-fonte deve seguir convenções limpas de JavaScript moderno (ES6+), hooks do React e componentes funcionais.
* **RNF10 — Compatibilidade:** A aplicação deve funcionar perfeitamente nos navegadores modernos (Google Chrome, Firefox, Safari, Microsoft Edge).

---

## 📖 User Stories

1. **US01:** *Como feirante ou comerciante*, quero cadastrar rapidamente caixas de frutas maduras no final da feira, *para que* uma instituição comunitária possa retirá-las antes que estraguem.
2. **US02:** *Como coordenadora de uma cozinha solidária*, quero filtrar alimentos por categoria e urgência, *para que* possamos planejar o cardápio e preparar o almoço da comunidade a tempo.
3. **US03:** *Como restaurante parceiro*, quero acompanhar o total de quilos de comida que doamos através da plataforma, *para que* possamos mensurar nosso impacto social e ambiental positivo.
4. **US04:** *Como voluntário de uma ONG*, quero reservar um lote de marmitas com apenas um clique, *para que* outros receptores saibam que aquele alimento já está sendo retirado e evite viagens duplicadas.

---

## ⚡ Funcionalidades
* 🏠 **Landing Page Institucional:** Apresentação da causa, métricas da ONU e fluxo de adesão.
* 📦 **Catálogo Dinâmico de Excedentes:** Feed com busca textual e filtros instantâneos por categoria.
* 📝 **Cadastro Rápido de Doações:** Formulário completo com validação de dados para doadores.
* 🤝 **Sistema de Reserva em 1 Clique:** Trava o item e exibe a ONG responsável pela coleta.
* 📊 **Painel de Impacto ODS 2:** Monitor em tempo real de kg salvos, refeições distribuídas e CO₂ evitado.
* 🔄 **Simulador de Perfis:** Alternância rápida entre visão de Comércio, ONG e Visitante.

---

## 🛠️ Tecnologias Utilizadas
* **HTML5 & CSS3 Moderno** (Variáveis CSS, Flexbox, CSS Grid)
* **JavaScript (ES6+)**
* **Lucide React** (Pacote de ícones semânticos)
* **Vite** (Build tool e servidor de desenvolvimento ultra-rápido)
* **LocalStorage API** (Armazenamento e persistência de dados no cliente)

---

## ⚛️ Framework Utilizado
* **React 19**
  * *React Hooks:* `useState`, `useEffect`, `useContext`, `useMemo`
  * *Context API:* Gerenciamento centralizado do estado de doações, autenticação mock e métricas
  * *Componentização Reutilizável:* Navbar, Footer, Cards e Modais

---

## 🚀 Como Executar

### Pré-requisitos
* Node.js instalado (versão 18 ou superior)
* Gerenciador de pacotes `npm`

### Passo a passo
1. Clone o repositório:
```bash
git clone https://github.com/Hackathon-ONU/ConectaAlimento.git
```
2. Acesse a pasta do projeto:
```bash
cd ConectaAlimento
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
5. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 📱 Protótipo
* **Link do Protótipo / Wireframes:** *(Disponibilizado na documentação da equipe)*
* **Telas Contempladas (10 telas):**
  1. Landing Page / Apresentação Institucional
  2. Seleção de Perfil e Cadastro (Doador vs. ONG)
  3. Login e Autenticação
  4. Dashboard do Doador
  5. Formulário de Cadastro de Alimento Excedente
  6. Catálogo / Feed de Doações Disponíveis
  7. Detalhes da Doação e Confirmação de Reserva
  8. Mapa de Proximidade e Rotas de Coleta
  9. Comprovante de Coleta e QR Code
  10. Painel de Impacto Social ODS 2 da ONU

---

## 🌐 Aplicação
* **URL da Aplicação Publicada:** *(A ser inserido após deploy na Vercel/Netlify)*
* **URL do Repositório:** https://github.com/Hackathon-ONU/ConectaAlimento
* **Branch Principal de Desenvolvimento:** `develop`

---

## 📈 Processo de Desenvolvimento
O desenvolvimento seguiu rito ágil e iterativo durante as 4 horas do Hackathon:
1. **Fase 1:** Concepção da proposta, delimitação do problema e levantamento de requisitos frente ao ODS 2 da ONU.
2. **Fase 2:** Benchmarking de soluções e desenho do fluxo de navegação do usuário.
3. **Fase 3:** Setup da arquitetura Front-end em React + Vite, definindo componentes base e design system.
4. **Fase 4:** Desenvolvimento do catálogo, persistência de dados em LocalStorage e simulação de reserva.
5. **Fase 5:** Implementação do painel de impacto com indicadores ecológicos e sociais.
6. **Fase 6:** Testes de usabilidade, responsividade em dispositivos móveis e deploy contínuo.

---

## 🤖 Inteligência Artificial

Em conformidade com as diretrizes do Hackathon, registramos a utilização de ferramentas de Inteligência Artificial:

* **Ferramenta Utilizada:** Google Antigravity / Gemini
* **Etapas de Utilização:**
  * Auxílio na estruturação analítica do Benchmarking frente a soluções nacionais e internacionais;
  * Elaboração e refinamento dos 10 Requisitos Funcionais, 10 Não Funcionais e User Stories;
  * Estruturação do backlog de 50+ atividades no GitHub Projects;
  * Apoio na formulação dos cálculos estimativos de pegada de carbono ($CO_2$) evitada por quilograma de alimento resgatado;
  * Revisão ortográfica e padronização da documentação técnica.

---

## 👥 Integrantes
* **Isabelly Caroline** — *Desenvolvimento Front-end & Gestão do Projeto*
* *(Equipe Hackathon ONU — ConectaAlimento)*