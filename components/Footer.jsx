'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = {
  pt: [
    {
      label: 'Colecções',
      href: '/coleccoes',
    },
    {
      label: 'Sobre nós',
      href: '/sobre',
    },
    {
      label: 'Contacto',
      href: '/contacto',
    },
    {
      label: 'Reclamações',
      href: '/reclamacoes',
    },
    {
      label: 'Política de Privacidade',
      href: '/politica-de-privacidade',
    },
    {
      label: 'Termos e Condições',
      href: '/termos-e-condicoes',
    },
  ],

  en: [
    {
      label: 'Collections',
      href: '/en/collections',
    },
    {
      label: 'About us',
      href: '/en/about',
    },
    {
      label: 'Contact',
      href: '/en/contact',
    },
    {
      label: 'Complaints',
      href: '/en/complaints',
    },
    {
      label: 'Privacy Policy',
      href: '/en/privacy-policy',
    },
    {
      label: 'Terms and Conditions',
      href: '/en/terms-and-conditions',
    },
  ],
};

const translatedRoutes = {
  '/': '/en',
  '/coleccoes': '/en/collections',
  '/sobre': '/en/about',
  '/contacto': '/en/contact',
  '/reclamacoes': '/en/complaints',
  '/politica-de-privacidade': '/en/privacy-policy',
  '/termos-e-condicoes': '/en/terms-and-conditions',
  '/aviso-legal': '/en/legal-notice',

  '/en': '/',
  '/en/collections': '/coleccoes',
  '/en/about': '/sobre',
  '/en/contact': '/contacto',
  '/en/complaints': '/reclamacoes',
  '/en/privacy-policy': '/politica-de-privacidade',
  '/en/terms-and-conditions': '/termos-e-condicoes',
  '/en/legal-notice': '/aviso-legal',
};

export default function Footer() {
  const pathname = usePathname();

  const locale = pathname.startsWith('/en') ? 'en' : 'pt';
  const links = footerLinks[locale];

  const homeHref = locale === 'en' ? '/en' : '/';

  const languageHref =
    translatedRoutes[pathname] || (locale === 'en' ? '/' : '/en');

  const languageLabel = locale === 'en' ? 'Português' : 'English';

  return (
    <footer className="bg-ink py-12 text-ivory">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 md:grid-cols-[1.2fr_.8fr] md:items-end lg:px-8">
        <div>
          <Link
            href={homeHref}
            aria-label={
              locale === 'en'
                ? 'Go to homepage'
                : 'Ir para a página inicial'
            }
          >
            <p className="font-display text-3xl tracking-[.12em]">
              ATELIER{' '}
              <span className="text-gold">
                AGULHA D&apos;OURO
              </span>
            </p>
          </Link>

          <p className="mt-2 font-display italic text-gold">
            {locale === 'en'
              ? 'Elegance tailored to your story'
              : 'Elegância à medida da sua história'}
          </p>
        </div>

        <div className="md:text-right">
          <div className="flex flex-wrap gap-x-7 gap-y-5 text-[9px] uppercase tracking-[.18em] text-ivory/60 md:justify-end">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={languageHref}
              className="font-semibold text-gold transition hover:text-ivory"
            >
              {languageLabel}
            </Link>
          </div>

          <p className="mt-5 text-[9px] uppercase tracking-[.18em] text-ivory/35">
            © 2026 Atelier Agulha D&apos;ouro ·{' '}
            {locale === 'en'
              ? 'All rights reserved'
              : 'Todos os direitos reservados'}
          </p>
        </div>
      </div>
    </footer>
  );
}