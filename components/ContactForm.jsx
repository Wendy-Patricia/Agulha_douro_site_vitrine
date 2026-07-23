'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-gold/30 bg-ivory p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Nome completo</span>
          <input required name="nome" placeholder="Ex: Ana Ferreira" className="w-full border-b border-gold/60 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-cocoa/40 focus:border-gold" />
        </label>
        <label className="space-y-2">
          <span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Telefone / WhatsApp</span>
          <input required name="telefone" placeholder="Ex: +258 84 000 0000" className="w-full border-b border-gold/60 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-cocoa/40 focus:border-gold" />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Serviço pretendido</span>
        <select name="servico" className="w-full border-b border-gold/60 bg-transparent py-3 text-sm outline-none focus:border-gold">
          <option>Vestido de noiva</option>
          <option>Traje de cerimónia</option>
          <option>Vestuário em capulana</option>
          <option>Peça em linho</option>
          <option>Uniforme profissional</option>
          <option>Outro projecto sob medida</option>
        </select>
      </label>
      <label className="block space-y-2">
        <span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Conte-nos a sua ideia</span>
        <textarea required name="mensagem" rows="5" placeholder="Descreva a peça, a ocasião e a data desejada..." className="w-full border border-gold/40 bg-white/40 p-4 text-sm outline-none placeholder:text-cocoa/40 focus:border-gold" />
      </label>
      <button type="submit" className="w-full bg-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[.24em] text-ink transition hover:bg-ink hover:text-ivory">
        Pedir orçamento
      </button>
      {sent && <p className="text-sm text-cocoa">Pedido registado. Ligue este formulário ao seu e-mail, WhatsApp ou serviço de formulários antes de publicar.</p>}
    </form>
  );
}
