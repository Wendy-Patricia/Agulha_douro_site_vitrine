import Link from 'next/link';
export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-ink px-5 text-center text-ivory"><div><p className="section-label">Erro 404</p><h1 className="mt-5 font-display text-6xl">Página não encontrada</h1><p className="mx-auto mt-5 max-w-md text-sm leading-7 text-ivory/65">A página que procura não existe ou foi deslocada.</p><Link href="/" className="mt-9 inline-block border border-gold px-6 py-4 text-[10px] uppercase tracking-[.22em] text-gold transition hover:bg-gold hover:text-ink">Voltar ao início</Link></div></main>;
}
