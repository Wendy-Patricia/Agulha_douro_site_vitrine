import Image from 'next/image';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import PageShell from '../../components/PageShell';

const collections = [
  {
    number: '01',
    title: 'Vestidos de Noiva',
    subtitle: 'Elegância feita à sua medida',
    text: 'Criamos o vestido dos seus sonhos, adaptado à sua silhueta, ao seu estilo e à história do seu casamento. Cada detalhe é pensado para tornar o seu dia verdadeiramente inesquecível.',
    image:
      '/img/casamento_2.jpg',
  },
  {
    number: '02',
    title: 'Trajes de Cerimónia',
    subtitle: 'Para momentos que ficam na memória',
    text: 'Peças elegantes e personalizadas para casamentos, galas, baptizados, festas e outros momentos especiais, combinando conforto, sofisticação e atenção ao detalhe.',
    image:
      '/img/celebracao_2.jpg',
  },
  {
    number: '03',
    title: 'Capulana & Linho',
    subtitle: 'Identidade, tradição e modernidade',
    text: 'Criações autorais que celebram a riqueza da capulana, a leveza do linho e a herança cultural africana através de cortes contemporâneos e acabamentos cuidadosamente executados.',
    image:
      '/img/capulana_2.jpg',
  },
  {
    number: '04',
    title: 'Uniformes Profissionais',
    subtitle: 'A identidade da sua marca em cada detalhe',
    text: 'Desenvolvemos uniformes confortáveis, funcionais e distintos para equipas que procuram transmitir profissionalismo e representar a identidade visual da sua marca.',
    image:
      '/img/uniforme.jpg',
  },
];

export const metadata = {
  title: "Colecções | Atelier Agulha D'ouro",
  description:
    "Descubra as colecções do Atelier Agulha D'ouro: vestidos de noiva, trajes de cerimónia, peças em capulana e linho e uniformes profissionais.",
};

export default function CollectionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Colecções & criações"
        title="Peças feitas para"
        italic="contar histórias"
        description="Cada criação nasce de uma escuta atenta e é desenvolvida para respeitar o seu corpo, o seu estilo e o seu momento."
        image="/img/hero_section3.jpg"
      />

      <section className="relative overflow-hidden bg-[#fcf8f1] py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -left-32 bottom-40 h-96 w-96 rounded-full bg-[#9f6b55]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <header className="mx-auto mb-16 max-w-2xl text-center sm:mb-24">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
              O nosso trabalho
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-cocoa sm:text-5xl lg:text-6xl">
              Criações únicas para cada ocasião
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-gold" />

            <p className="mt-7 text-sm font-light leading-7 text-cocoa/70 sm:text-base">
              Do primeiro esboço ao último acabamento, cada peça é criada com
              sensibilidade, precisão e respeito pela personalidade de quem a
              veste.
            </p>
          </header>

          <div className="space-y-16 sm:space-y-24">
            {collections.map((collection, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <article
                  key={collection.title}
                  className="group grid overflow-hidden border border-gold/15 bg-[#f7f0e3] shadow-[0_20px_60px_rgba(83,54,38,0.06)] lg:grid-cols-2"
                >
                  <div
                    className={`relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[620px] ${
                      isReversed ? 'lg:order-2' : ''
                    }`}
                  >
                    <Image
                      src={collection.image}
                      alt={`Criação da colecção ${collection.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6 border border-white/30 bg-black/15 px-4 py-2 backdrop-blur-sm sm:bottom-8 sm:left-8">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-white">
                        Feito por medida
                      </p>
                    </div>
                  </div>

                  <div
                    className={`relative flex items-center p-8 sm:p-12 lg:p-16 ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="max-w-lg">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                          {collection.number}
                        </span>

                        <span className="h-px w-10 bg-gold/60" />

                        <span className="text-[10px] uppercase tracking-[0.2em] text-cocoa/50">
                          Colecção
                        </span>
                      </div>

                      <h3 className="mt-7 font-display text-4xl leading-tight text-cocoa sm:text-5xl">
                        {collection.title}
                      </h3>

                      <p className="mt-4 font-display text-xl italic text-gold sm:text-2xl">
                        {collection.subtitle}
                      </p>

                      <p className="mt-7 text-sm font-light leading-8 text-cocoa/75 sm:text-base">
                        {collection.text}
                      </p>

                      <Link
                        href={`/contacto?coleccao=${encodeURIComponent(
                          collection.title
                        )}`}
                        aria-label={`Pedir orçamento para ${collection.title}`}
                        className="mt-9 inline-flex items-center gap-4 border-b border-gold pb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa transition-colors duration-300 hover:text-gold"
                      >
                        Pedir orçamento
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-5 right-7 hidden font-display text-8xl text-gold/[0.06] sm:block lg:text-9xl"
                    >
                      {collection.number}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cocoa px-5 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Criação personalizada
          </p>

          <h2 className="mt-6 font-display text-4xl leading-tight text-[#f7f0e3] sm:text-5xl lg:text-6xl">
            Tem uma ideia especial em mente?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-7 text-[#f7f0e3]/70 sm:text-base">
            Conte-nos o que imagina. Juntos, podemos transformar a sua
            inspiração numa peça única, desenhada especialmente para si.
          </p>

          <Link
            href="/contacto"
            className="mt-10 inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-8 text-[10px] font-medium uppercase tracking-[0.22em] text-cocoa transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            Falar com o atelier
          </Link>
        </div>
      </section>
    </PageShell>
  );
}