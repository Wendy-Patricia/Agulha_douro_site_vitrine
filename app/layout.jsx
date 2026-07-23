import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic']
});

const body = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600']
});

export const metadata = {
  title: "Atelier Agulha D'ouro | Vestuário sob medida",
  description:
    'Vestuário sob medida, vestidos de noiva, cerimónia, capulana, linho e uniformes profissionais.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
