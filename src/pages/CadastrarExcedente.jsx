import React, { useState } from 'react'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import './Pages.css'

export default function CadastrarExcedente({ onNavigate, onAddDonation, profile }) {
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    const formData = new FormData(event.currentTarget)
    const image = formData.get('imagem')
    if (image?.size > 1.5 * 1024 * 1024) {
      setError('A imagem deve ter no máximo 1,5 MB.')
      return
    }

    let imagemData = ''
    if (image?.size) {
      imagemData = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(image)
      })
    }

    const quantidade = Number(formData.get('quantidade'))
    const unidade = formData.get('unidade')
    const validadeData = formData.get('validade')
    const validadeFormatada = new Date(`${validadeData}T12:00:00`).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
    })
    onAddDonation?.({
      titulo: formData.get('titulo').trim(),
      desc: formData.get('descricao').trim(),
      categoria: formData.get('categoria'),
      quantidade,
      unidade,
      qtd: `${quantidade} ${unidade}`,
      bairro: profile?.bairro || 'Pinheiros',
      cidade: profile?.cidade || 'São Paulo',
      local: profile?.organizacao || 'Mercado Raiz',
      validade: `Até ${validadeFormatada}`,
      validadeData,
      retirada: `${formData.get('retiradaInicio')} até ${formData.get('retiradaFim')}`,
      contato: profile?.contato || '',
      imagem: imagemData,
    })
    onNavigate?.('feed')
  }

  return (
    <div className="ca-page-container">
      <div className="ca-screen-header">
        <div className="ca-screen-header-left">
          <span className="ca-screen-tag">NOVA PUBLICAÇÃO</span>
          <h1 className="ca-screen-title">Compartilhe o excedente.</h1>
          <p className="ca-screen-subtitle">
            Inclua os detalhes que ajudam uma organização a decidir.
          </p>
        </div>
        <div className="ca-demo-badge">
          Ambiente de demonstração
        </div>
      </div>

      <div className="ca-alert-box ca-alert-green">
        <ShieldCheck size={20} />
        <span>Informe uma quantidade realista e uma janela de retirada que sua equipe consiga cumprir.</span>
      </div>

      <form className="ca-content-card" onSubmit={handleSubmit}>
        <div className="ca-form-group">
          <label className="ca-form-label" htmlFor="doacao-titulo">Nome da doação</label>
          <input id="doacao-titulo" name="titulo" type="text" className="ca-input" placeholder="Ex.: Caixas de legumes frescos" defaultValue="Caixas de legumes frescos" required />
        </div>

        <div className="ca-form-grid-2">
          <div className="ca-form-group">
            <label className="ca-form-label" htmlFor="doacao-categoria">Categoria</label>
            <select id="doacao-categoria" name="categoria" className="ca-select" defaultValue="Hortifruti">
              <option value="Hortifruti">Hortifruti</option>
              <option value="Padaria">Padaria</option>
              <option value="Pratos prontos">Pratos prontos</option>
              <option value="Não perecíveis">Não perecíveis</option>
            </select>
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label" htmlFor="doacao-quantidade">Quantidade</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '0.75rem' }}>
              <input id="doacao-quantidade" name="quantidade" type="number" className="ca-input" min="1" defaultValue="8" required />
              <select name="unidade" className="ca-select" defaultValue="cestas">
                <option value="cestas">cestas</option>
                <option value="kg">kg</option>
                <option value="unidades">unidades</option>
                <option value="porções">porções</option>
                <option value="pacotes">pacotes</option>
              </select>
            </div>
          </div>
        </div>

        <div className="ca-form-group">
          <label className="ca-form-label" htmlFor="doacao-descricao">Descrição e cuidados</label>
          <textarea 
            id="doacao-descricao"
            name="descricao"
            className="ca-textarea" 
            placeholder="Conte o que está sendo doado, como está armazenado e informações importantes."
            defaultValue="Seleção de frutas e legumes frescos colhidos hoje que não foram para a gôndola principal. Próprios para consumo imediato."
            required
          />
        </div>

        <div className="ca-form-grid-2">
          <div className="ca-form-group">
            <label className="ca-form-label" htmlFor="doacao-validade">Consumir até</label>
            <input id="doacao-validade" name="validade" type="date" className="ca-input" defaultValue="2026-10-09" required />
          </div>
          <div className="ca-form-group">
            <label className="ca-form-label">Janela de retirada</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input aria-label="Início da retirada" name="retiradaInicio" type="time" className="ca-input" defaultValue="14:00" required />
              <span style={{ color: '#556E5F', fontSize: '0.9rem' }}>até</span>
              <input aria-label="Fim da retirada" name="retiradaFim" type="time" className="ca-input" defaultValue="17:00" required />
            </div>
          </div>
        </div>

        <div className="ca-form-group">
          <label className="ca-form-label" htmlFor="doacao-imagem">Imagem opcional</label>
          <input id="doacao-imagem" name="imagem" type="file" accept="image/*" className="ca-input" />
          <small style={{ color: '#7E9185', marginTop: '0.25rem' }}>
            Imagem local, até 1,5 MB. Fica salva neste navegador.
          </small>
        </div>

        <div className="ca-alert-box ca-alert-peach" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <span>Retirada em Pinheiros, São Paulo · Contato: (11) 98821-4402. Revise seu perfil antes de publicar.</span>
        </div>

        {error && <p role="alert" style={{ color: '#A33322' }}>{error}</p>}

        <div className="ca-btn-group">
          <button type="submit" className="ca-btn-orange">
            Publicar doação <ArrowRight size={18} />
          </button>
          <button 
            type="button" 
            className="ca-btn-light"
            onClick={() => onNavigate && onNavigate('doador')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
