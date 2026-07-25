import Image from "next/image";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

const services = [
  {
    title: "Vestidos de Noiva",
    text: "Criamos o vestido dos seus sonhos, adaptado à sua figura, ao seu estilo e à história do seu casamento.",
    image: "/img/casamento.jpg",
  },
  {
    title: "Trajes de Cerimónia",
    text: "Peças elegantes para momentos inesquecíveis, concebidas com equilíbrio entre tradição e modernidade.",
    image: "/img/celebracao.jpg",
  },
  {
    title: "Capulana & Linho",
    text: "Criações autorais que celebram textura, cor e identidade, com acabamento artesanal e contemporâneo.",
    image: "/img/capulana.jpg",
  },
  {
    title: "Uniformes Profissionais",
    text: "Soluções confortáveis e distintas para equipas que desejam vestir a identidade da sua marca.",
    image: "/img/farda.jpg",
  },
];

const process = [
  [
    "01",
    "Escutamos",
    "Começamos pela sua história, ocasião, referências e expectativas.",
  ],
  [
    "02",
    "Desenhamos",
    "Definimos modelo, materiais, acabamentos e uma proposta feita para si.",
  ],
  [
    "03",
    "Criamos",
    "A peça ganha forma no atelier através de corte, costura e provas cuidadas.",
  ],
  [
    "04",
    "Entregamos",
    "Finalizamos cada detalhe para que vista algo verdadeiramente único.",
  ],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-ivory">
      <Header />

      <section
        id="inicio"
        className="noise relative min-h-screen bg-ink pt-20 text-ivory"
      >
        <Image
          src="/img/hero_section.png"
          alt="Vestido de alta-costura em ambiente editorial"
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] uppercase tracking-[.36em] text-gold">
              Atelier de vestuário sob medida
            </p>
            <h1 className="font-display text-6xl font-medium leading-[.9] sm:text-7xl lg:text-[7.5rem]">
              Elegância <span className="italic text-gold">à medida</span>
              <br />
              da sua história
            </h1>
            <p className="mt-8 max-w-xl text-sm font-light leading-7 text-ivory/75 sm:text-base">
              Peças únicas, criadas com precisão, cuidado e paixão pela arte da
              costura do primeiro desenho à última costura.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contacto"
                className="bg-gold px-7 py-4 text-center text-[11px] font-semibold uppercase tracking-[.22em] text-ink transition hover:bg-ivory"
              >
                Encomendar
              </a>
              <a
                href="/coleccoes"
                className="border border-ivory/50 px-7 py-4 text-center text-[11px] uppercase tracking-[.22em] text-ivory transition hover:border-gold hover:text-gold"
              >
                Ver criações
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.95fr_1.05fr] lg:px-8">
          <div className="relative min-h-[520px]">
            <Image
              src="/img/grupo.jpg"
              alt="Detalhe de costura artesanal"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-8 -right-3 hidden w-52 border border-gold bg-ink p-7 text-ivory shadow-soft sm:block">
              <p className="font-display text-4xl text-gold">2+</p>
              <p className="mt-2 text-[10px] uppercase tracking-[.22em] text-ivory/65">
                anos a transformar tecido em memórias
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:pl-10">
            <p className="section-label">01 - Quem somos</p>
            <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
              Uma peça única para uma{" "}
              <span className="italic text-gold">história única</span>
            </h2>
            <div className="gold-divider mt-7" />
            <div className="mt-8 space-y-5 text-sm font-light leading-7 text-cocoa sm:text-base">
              <p>
                O Atelier Agulha D&apos;ouro é dedicado à criação de vestuário
                sob medida para mulheres e homens que procuram elegância
                personalizada.
              </p>
              <p>
                Especializados em vestidos de noiva, trajes de cerimónia, peças
                em linho, vestuário em capulana e uniformes profissionais,
                aliamos tradição artesanal à estética contemporânea.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Elegância",
                "Artesanal",
                "Personalização",
                "Qualidade",
                "Tradição",
                "Modernidade",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-gold/50 px-4 py-2 text-[9px] uppercase tracking-[.2em] text-cocoa"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="coleccoes" className="bg-[#f7f0e3] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">02 - Colecções & criações</p>
            <h2 className="mt-5 font-display text-5xl sm:text-6xl">
              Os nossos <span className="italic text-gold">serviços</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-cocoa">
              Cada criação nasce de uma escuta atenta e é desenvolvida para
              respeitar o seu corpo, o seu estilo e o seu momento.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative min-h-[470px] overflow-hidden bg-ink"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="text-[10px] uppercase tracking-[.25em] text-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-display text-4xl text-ivory">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm font-light leading-6 text-ivory/70">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-ivory sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-label">03 - Processo</p>
              <h2 className="mt-5 font-display text-5xl sm:text-6xl">
                Do primeiro contacto à{" "}
                <span className="italic text-gold">última costura</span>
              </h2>
              <p className="mt-6 max-w-md text-sm font-light leading-7 text-ivory/65">
                Um acompanhamento próximo, transparente e personalizado em todas
                as etapas.
              </p>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {process.map(([number, title, text]) => (
                <div key={number} className="bg-ink p-7 sm:p-9">
                  <span className="font-display text-4xl text-gold/70">
                    {number}
                  </span>
                  <h3 className="mt-6 font-display text-3xl">{title}</h3>
                  <p className="mt-3 text-sm font-light leading-6 text-ivory/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#f7f0e3] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <p className="section-label">04 - Contacto</p>
            <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
              Conte-nos o seu{" "}
              <span className="italic text-gold">momento especial</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-cocoa">
              Pode entrar com uma ideia ou apenas um sentimento - o nosso
              atelier está pronto para escutar e criar consigo.
            </p>
            <div className="mt-9 space-y-5 text-sm text-cocoa">
              <p>
                <span className="mr-3 text-gold">◆</span>WhatsApp: +258 85 057
                3499
              </p>
              <p>
                <a
                  href="https://www.instagram.com/atelier_agulhadouro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition"
                >
                  <span className="mr-3 text-gold">◆</span>Instagram:
                  @atelier_agulhadouro
                </a>
              </p>
              <p>
                <span className="mr-3 text-gold">◆</span>Atendimento por
                marcação
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-ink py-16 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-3 lg:px-8">
          <div>
            <p className="font-display text-3xl tracking-[.12em]">
              ATELIER <span className="text-gold">AGULHA D&apos;OURO</span>
            </p>

            <p className="mt-3 font-display italic text-gold">
              Elegância à medida da sua história
            </p>

            <p className="mt-6 text-sm leading-7 text-ivory/60">
              Vestidos de noiva, trajes de cerimónia, capulana, linho e
              uniformes profissionais criados à medida.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[.25em] text-gold">
              Navegação
            </h3>

            <ul className="space-y-3 text-sm text-ivory/70">
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="/coleccoes">Colecções</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[.25em] text-gold">
              Informações
            </h3>

            <ul className="space-y-3 text-sm text-ivory/70">
              <li>
                <a
                  href="/politica-de-privacidade"
                  className="hover:text-gold transition"
                >
                  Política de Privacidade
                </a>
              </li>

              <li>
                <a
                  href="/termos-e-condicoes"
                  className="hover:text-gold transition"
                >
                  Termos e Condições
                </a>
              </li>

              <li>
                <a href="/aviso-legal" className="hover:text-gold transition">
                  Aviso Legal
                </a>
              </li>

              <li>
                <a href="/reclamacoes" className="hover:text-gold transition">
                  Reclamações
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-8 px-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-ivory/40 md:flex-row">
            <p>
              © 2026 Atelier Agulha D&apos;Ouro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
