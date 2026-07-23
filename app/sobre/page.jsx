import Image from 'next/image';
import Link from 'next/link';
import PageHero from '../../components/PageHero';
import PageShell from '../../components/PageShell';

const process = [
  {
    number: '01',
    title: 'Escutamos',
    text: 'Começamos por conhecer a sua história, a ocasião, as suas referências e aquilo que deseja sentir ao vestir a peça.',
  },
  {
    number: '02',
    title: 'Desenhamos',
    text: 'Definimos o modelo, os tecidos, as cores e os acabamentos numa proposta criada especialmente para si.',
  },
  {
    number: '03',
    title: 'Criamos',
    text: 'A peça ganha forma no atelier através de corte, costura e provas realizadas com tempo, cuidado e precisão.',
  },
  {
    number: '04',
    title: 'Entregamos',
    text: 'Finalizamos cada detalhe para que receba uma criação confortável, elegante e verdadeiramente única.',
  },
];

const values = [
  {
    number: '01',
    title: 'Artesanato',
    text: 'Cada peça é trabalhada cuidadosamente, valorizando técnicas de costura, acabamentos delicados e atenção ao detalhe.',
  },
  {
    number: '02',
    title: 'Identidade',
    text: 'Criamos peças que respeitam a personalidade, a história e a individualidade de cada cliente.',
  },
  {
    number: '03',
    title: 'Qualidade',
    text: 'Selecionamos materiais e processos que garantem conforto, durabilidade e um acabamento elegante.',
  },
];

const specialties = [
  'Vestidos de noiva',
  'Trajes de cerimónia',
  'Capulana',
  'Linho',
  'Uniformes profissionais',
  'Criações personalizadas',
];

export const metadata = {
  title: "Sobre nós | Atelier Agulha D'ouro",
  description:
    "Conheça o Atelier Agulha D'ouro, a nossa história, valores e processo de criação de peças artesanais feitas por medida.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sobre nós"
        title="Tradição artesanal,"
        italic="visão contemporânea"
        description="Um atelier onde cada peça é concebida como uma obra única, feita com precisão, cuidado e paixão pela arte da costura."
        image="/img/hero_section.jpg
        "
      />

      {/* História e essência */}
      <section className="relative overflow-hidden bg-[#fcf8f1] py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-gold/5 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="relative min-h-[520px] overflow-hidden sm:min-h-[650px]">
              <Image
                src="/img/tradicional.jpg"
                alt="Trabalho artesanal de costura no atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-2 hidden w-[230px] border border-gold/20 bg-[#f7f0e3] p-7 shadow-[0_20px_60px_rgba(83,54,38,0.12)] sm:block lg:-right-10">
              <p className="font-display text-5xl text-gold">Único</p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-cocoa/60">
                Cada cliente
              </p>

              <p className="mt-4 text-sm font-light leading-6 text-cocoa/75">
                Nenhuma história é igual. Por isso, nenhuma criação deve ser.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 h-24 w-24 border-l border-t border-gold/40"
            />
          </div>

          <div className="flex flex-col justify-center lg:pl-12">
            <p className="section-label">A nossa essência</p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-cocoa sm:text-5xl lg:text-6xl">
              Elegância sem ostentação, criada{' '}
              <span className="italic text-gold">à mão</span>
            </h2>

            <div className="gold-divider mt-7" />

            <div className="mt-8 space-y-5 text-sm font-light leading-7 text-cocoa/75 sm:text-base sm:leading-8">
              <p>
                O Atelier Agulha D&apos;ouro nasceu da paixão pela costura e do
                desejo de criar peças que expressem a personalidade de quem as
                veste.
              </p>

              <p>
                Trabalhamos com mulheres, homens, empresas e instituições que
                procuram uma elegância personalizada, cuidada e construída com
                autenticidade.
              </p>

              <p>
                Especializamo-nos em vestidos de noiva, trajes de cerimónia,
                peças em linho, vestuário em capulana, uniformes profissionais e
                criações desenvolvidas inteiramente por medida.
              </p>

              <p>
                Em cada projeto, acompanhamos o cliente desde a primeira
                conversa até à prova final, mantendo uma relação próxima,
                transparente e atenta.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-gold/20 pt-8 sm:grid-cols-3">
              {specialties.map((specialty) => (
                <div key={specialty} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                  />

                  <span className="text-[10px] uppercase leading-5 tracking-[0.15em] text-cocoa/70">
                    {specialty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/15 bg-[#f7f0e3] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            A nossa filosofia
          </p>

          <blockquote className="mt-7 font-display text-3xl leading-relaxed text-cocoa sm:text-4xl lg:text-5xl">
            “Mais do que criar roupas, queremos criar peças que acompanhem
            momentos, guardem memórias e façam cada pessoa sentir-se{' '}
            <span className="italic text-gold">verdadeiramente especial.</span>”
          </blockquote>

          <div className="mx-auto mt-9 h-px w-14 bg-gold" />
        </div>
      </section>

      <section className="bg-[#fcf8f1] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="section-label">O que nos orienta</p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-cocoa sm:text-5xl">
                Valores presentes em cada{' '}
                <span className="italic text-gold">criação</span>
              </h2>
            </div>

            <p className="max-w-2xl text-sm font-light leading-7 text-cocoa/65 sm:text-base">
              Da escolha do tecido ao último ponto, trabalhamos segundo
              princípios que refletem a identidade e o compromisso do atelier.
            </p>
          </div>

          <div className="mt-16 grid border-l border-t border-gold/20 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="group relative border-b border-r border-gold/20 p-8 transition-colors duration-500 hover:bg-[#f7f0e3] sm:p-10"
              >
                <span className="font-display text-4xl text-gold/50 transition-colors duration-300 group-hover:text-gold">
                  {value.number}
                </span>

                <h3 className="mt-10 font-display text-3xl text-cocoa">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm font-light leading-7 text-cocoa/65">
                  {value.text}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="section-label">O nosso processo</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Do primeiro contacto à{' '}
                <span className="italic text-gold">última costura</span>
              </h2>

              <p className="mt-7 max-w-md text-sm font-light leading-7 text-ivory/60 sm:text-base">
                Um acompanhamento próximo e cuidadoso, pensado para transformar
                uma ideia numa peça que respeita o seu corpo, estilo e ocasião.
              </p>

              <Link
                href="/contacto"
                className="mt-9 inline-flex items-center gap-4 border-b border-gold pb-2 text-[10px] uppercase tracking-[0.22em] text-ivory transition-colors hover:text-gold"
              >
                Iniciar uma criação
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="border-l border-white/10">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="group relative border-b border-white/10 px-7 py-10 transition-colors duration-500 hover:bg-white/[0.03] sm:px-10 sm:py-12"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-14 h-[9px] w-[9px] rotate-45 bg-gold"
                  />

                  <div className="grid gap-5 sm:grid-cols-[80px_1fr] sm:gap-8">
                    <span className="font-display text-4xl text-gold/50 transition-colors duration-300 group-hover:text-gold sm:text-5xl">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-display text-3xl text-ivory sm:text-4xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm font-light leading-7 text-ivory/60">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-[#f7f0e3] py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 w-px bg-gold/10"
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            A sua história
          </p>

          <h2 className="mt-6 font-display text-4xl leading-tight text-cocoa sm:text-5xl lg:text-6xl">
            Vamos criar algo feito{' '}
            <span className="italic text-gold">especialmente para si?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm font-light leading-7 text-cocoa/65 sm:text-base">
            Partilhe connosco a sua ideia, ocasião ou inspiração. Teremos todo o
            gosto em acompanhá-lo na criação de uma peça única.
          </p>

          <Link
            href="/contacto"
            className="mt-10 inline-flex min-h-12 items-center justify-center border border-cocoa bg-cocoa px-9 text-[10px] font-medium uppercase tracking-[0.22em] text-ivory transition-colors duration-300 hover:bg-transparent hover:text-cocoa"
          >
            Falar com o atelier
          </Link>
        </div>
      </section>
    </PageShell>
  );
}