export default function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  navigation = [],
  variant = 'default',
  contactEmail = '',
  children,
}) {
  const isEnhanced = variant === 'privacy' || variant === 'terms';
  const isPrivacy = variant === 'privacy';

  // Mantém o design antigo para outras páginas que utilizem LegalPage
  if (!isEnhanced) {
    return (
      <main className="min-h-screen bg-[#FDFCF8]">
        <section className="mx-auto max-w-4xl px-6 py-32">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C9A84C]">
            {eyebrow}
          </p>

          <h1 className="font-display mb-10 text-5xl text-[#1A1410]">
            {title}
          </h1>

          <article className="prose prose-neutral max-w-none">
            {children}
          </article>
        </section>
      </main>
    );
  }

  const introductoryMessage = isPrivacy
    ? 'A proteção da sua privacidade faz parte do cuidado e da confiança que colocamos em cada relação com os nossos clientes.'
    : 'Estes termos definem as condições de utilização do site e de contacto com o Atelier Agulha D’ouro.';

  const contactLabel = isPrivacy
    ? 'Questões sobre privacidade'
    : 'Questões sobre estes termos';

  return (
    <main className="min-h-screen bg-[#F8F5EE] text-[#1A1410]">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-[#D8CBAA]/40 bg-[#17130F] text-white">
        {/* Elementos decorativos */}
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-32 h-96 w-96 rounded-full border border-[#C9A84C]/15"
        />

        <div
          aria-hidden="true"
          className="absolute -right-4 -top-8 h-64 w-64 rounded-full border border-[#C9A84C]/20"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-20 left-[10%] h-48 w-48 rounded-full bg-[#C9A84C]/[0.04] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-70"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pt-40">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A84C]" />

              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#D8BE73]">
                {eyebrow}
              </p>
            </div>

            <h1 className="font-display max-w-3xl text-5xl font-normal leading-[1.05] sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            {description && (
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                {description}
              </p>
            )}

            {lastUpdated && (
              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-xs text-white/60 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                Última atualização: {lastUpdated}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-12 lg:py-24">
        {/* Índice lateral */}
        {navigation.length > 0 && (
          <aside className="hidden lg:block">
            <nav
              aria-label={`Índice de ${title}`}
              className="sticky top-28 rounded-sm border border-[#D8CBAA]/60 bg-[#FDFCF8] p-7 shadow-[0_18px_60px_rgba(50,38,20,0.06)]"
            >
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9A7B2F]">
                Nesta página
              </p>

              <ol className="space-y-1">
                {navigation.map((item, index) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group flex gap-3 border-l border-[#D8CBAA] py-2.5 pl-4 text-sm leading-5 text-[#71685F] transition-all duration-300 hover:border-[#C9A84C] hover:text-[#1A1410]"
                    >
                      <span className="font-display text-[#B89A4B]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        )}

        {/* Texto legal */}
        <article
          className="
            min-w-0 rounded-sm border border-[#D8CBAA]/60 bg-[#FDFCF8]
            px-6 py-10 shadow-[0_24px_80px_rgba(50,38,20,0.07)]
            sm:px-10 sm:py-14 lg:px-16 lg:py-16

            [&>p]:mb-6
            [&>p]:text-[15px]
            [&>p]:leading-8
            [&>p]:text-[#625A52]

            [&>h2]:mb-5
            [&>h2]:mt-14
            [&>h2]:scroll-mt-32
            [&>h2]:border-t
            [&>h2]:border-[#D8CBAA]/60
            [&>h2]:pt-12
            [&>h2]:font-display
            [&>h2]:text-2xl
            [&>h2]:font-normal
            [&>h2]:text-[#1A1410]
            sm:[&>h2]:text-3xl

            [&>h2:first-of-type]:mt-8
            [&>h2:first-of-type]:border-0
            [&>h2:first-of-type]:pt-0

            [&>ul]:mb-8
            [&>ul]:space-y-3
            [&>ul]:pl-0
            [&>ul]:text-[15px]
            [&>ul]:leading-7
            [&>ul]:text-[#625A52]

            [&>ul>li]:relative
            [&>ul>li]:list-none
            [&>ul>li]:pl-7

            [&>ul>li]:before:absolute
            [&>ul>li]:before:left-0
            [&>ul>li]:before:top-[11px]
            [&>ul>li]:before:h-1.5
            [&>ul>li]:before:w-1.5
            [&>ul>li]:before:rotate-45
            [&>ul>li]:before:bg-[#C9A84C]

            [&_a]:font-medium
            [&_a]:text-[#8D6F24]
            [&_a]:underline
            [&_a]:decoration-[#C9A84C]/40
            [&_a]:underline-offset-4
            [&_a]:transition-colors
            hover:[&_a]:text-[#1A1410]

            [&_strong]:font-semibold
            [&_strong]:text-[#2B231D]
          "
        >
          {/* Caixa introdutória */}
          <div className="mb-10 flex items-start gap-4 rounded-sm border-l-2 border-[#C9A84C] bg-[#F5EFE1] px-5 py-5 text-sm leading-7 text-[#625A52]">
            <svg
              aria-hidden="true"
              className="mt-1 h-5 w-5 shrink-0 text-[#A88939]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isPrivacy ? (
                <>
                  <path d="M12 3 5 6v5c0 4.7 2.8 8.3 7 10 4.2-1.7 7-5.3 7-10V6l-7-3Z" />
                  <path d="m9.5 12 1.6 1.6 3.7-4" />
                </>
              ) : (
                <>
                  <path d="M6 3h9l4 4v14H6z" />
                  <path d="M14 3v5h5" />
                  <path d="M9 13h6M9 17h6" />
                </>
              )}
            </svg>

            <p>{introductoryMessage}</p>
          </div>

          {children}
        </article>
      </div>

      {/* Contacto */}
      <section className="border-t border-[#D8CBAA]/60 bg-[#EEE7D8]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-14 sm:px-8 md:flex-row md:items-center lg:px-12">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9A7B2F]">
              {contactLabel}
            </p>

            <h2 className="font-display text-3xl font-normal">
              Precisa de esclarecimentos?
            </h2>
          </div>

          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-3 bg-[#1A1410] px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white no-underline transition-colors duration-300 hover:bg-[#A88939]"
            >
              Contactar o atelier
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <a
              href="/contacto"
              className="inline-flex items-center gap-3 bg-[#1A1410] px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white no-underline transition-colors duration-300 hover:bg-[#A88939]"
            >
              Contactar o atelier
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </section>
    </main>
  );
}