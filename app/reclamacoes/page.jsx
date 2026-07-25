import PageHero from '../../components/PageHero';
import PageShell from '../../components/PageShell';

export const metadata = { title: "Reclamações | Atelier Agulha D'ouro" };

export default function ComplaintsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Reclamações" title="A sua opinião merece" italic="ser escutada" description="Utilize este canal para apresentar uma reclamação, sugestão ou pedido de esclarecimento relacionado com o nosso atendimento ou serviços." image="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2200&q=90" />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <form action="https://formspree.io/f/xnjeoodg" method="POST" className="space-y-5 border border-gold/30 bg-[#f7f0e3] p-6 shadow-soft sm:p-10">
            <input type="hidden" name="_subject" value="Nova reclamação — Atelier Agulha D'Ouro" />
            <label className="block space-y-2"><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Nome completo</span><input required name="nome" className="w-full border-b border-gold/60 bg-transparent py-3 text-sm outline-none" /></label>
            <label className="block space-y-2"><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Email</span><input required type="email" name="email" className="w-full border-b border-gold/60 bg-transparent py-3 text-sm outline-none" /></label>
            <label className="block space-y-2"><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Assunto</span><input required name="assunto" className="w-full border-b border-gold/60 bg-transparent py-3 text-sm outline-none" /></label>
            <label className="block space-y-2"><span className="text-[10px] uppercase tracking-[.2em] text-cocoa">Mensagem</span><textarea required name="mensagem" rows="8" className="w-full border border-gold/40 bg-white/50 p-4 text-sm outline-none" /></label>
            <button type="submit" className="w-full bg-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[.24em] text-ink transition hover:bg-ink hover:text-ivory">Enviar reclamação</button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
