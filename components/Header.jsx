'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    label: 'Início',
    href: '/',
  },
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
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  function isActive(href) {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-ivory backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Atelier Agulha D'ouro — página inicial"
          className="relative z-50"
        >
          <p className="font-display text-lg tracking-[0.12em] sm:text-xl">
            ATELIER{' '}
            <span className="text-gold">
              AGULHA D&apos;OURO
            </span>
          </p>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  active
                    ? 'text-gold'
                    : 'text-ivory/70 hover:text-gold'
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contacto"
            className="border border-gold bg-gold px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-transparent hover:text-gold"
          >
            Pedir orçamento
          </Link>
        </nav>

        <div className="relative z-50 flex items-center lg:hidden">
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block h-px w-6 bg-ivory transition duration-300 ${
                menuOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />

            <span
              className={`block h-px w-6 bg-ivory transition duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`block h-px w-6 bg-ivory transition duration-300 ${
                menuOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-20 border-t border-white/10 bg-ink transition-all duration-300 lg:hidden ${
          menuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-4 opacity-0'
        }`}
      >
        <nav
          aria-label="Navegação móvel"
          className="flex flex-col px-5 py-7"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? 'page' : undefined}
                className={`border-b border-white/10 py-5 text-sm uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? 'text-gold'
                    : 'text-ivory/75 hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contacto"
            onClick={closeMenu}
            className="mt-7 bg-gold px-6 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-ink"
          >
            Pedir orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}