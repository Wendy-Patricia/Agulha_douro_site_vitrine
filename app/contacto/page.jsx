import ContactForm from '../../components/ContactForm';
import PageHero from '../../components/PageHero';
import PageShell from '../../components/PageShell';

export const metadata = { title: "Contacto | Atelier Agulha D'ouro" };

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Contacto" title="Vamos criar algo" italic="verdadeiramente seu" description="Conte-nos a sua ideia, a ocasião e a data desejada. Entraremos em contacto para conversar sobre a sua peça." image="/img/hero_section2.jpg" />
      <section className="bg-[#f7f0e3] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div>
            <p className="section-label">Fale connosco</p>
            <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">O atelier está pronto para <span className="italic text-gold">escutar</span></h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-cocoa">O atendimento é feito por marcação para garantirmos tempo, atenção e privacidade a cada cliente.</p>
            <div className="mt-9 space-y-5 text-sm text-cocoa">
              <p><span className="mr-3 text-gold">◆</span>Telefone: +258 85 057 3499 / +258 86 303 3167</p>
              <p><span className="mr-3 text-gold">◆</span>Email: <a href="mailto:atelieragulha.ouro@gmail.com">atelieragulha.ouro@gmail.com</a></p>
              <p><span className="mr-3 text-gold">◆</span>Instagram: <a href="https://www.instagram.com/atelier_agulhadouro/" target="_blank" rel="noopener noreferrer">@atelieragulhadouro</a></p>
              <p><span className="mr-3 text-gold">◆</span>Endereço: Av. Ahmed Sekou Toure nr 675 R/C, Cidade de Maputo, Moçambique</p>
              <p><span className="mr-3 text-gold">◆</span>Atendimento por marcação</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
