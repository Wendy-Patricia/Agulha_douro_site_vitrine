import Header from './Header';
import Footer from './Footer';

export default function PageShell({ children }) {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory">
      <Header />
      {children}
      <Footer />
      <a href="https://wa.me/258840000000" aria-label="Contactar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-soft transition hover:scale-105">✆</a>
    </main>
  );
}
