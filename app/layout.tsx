import type { Metadata } from 'next';
import { Inter, Sora, Space_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://hydra-silicon-valley.vercel.app'),
  title: {
    default: 'Hydra Silicon Valley — Building Africa’s Future',
    template: '%s | Hydra Silicon Valley',
  },
  description: 'Nous bâtissons des solutions tech, santé et agro qui transforment les secteurs clés de l’Afrique. Depuis Yaoundé, au Cameroun.',
  openGraph: {
    type: 'website',
    locale: 'fr_CM',
    url: 'https://hydra-silicon-valley.vercel.app',
    siteName: 'Hydra Silicon Valley',
    title: 'Hydra Silicon Valley — Enracinés en Afrique. Élevés au niveau mondial.',
    description: 'Un groupe panafricain multisectoriel qui bâtit les entreprises de demain.',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'Hydra Silicon Valley' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hydra Silicon Valley',
    description: 'Enracinés en Afrique. Élevés au niveau mondial.',
    images: ['/icon-512.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${sora.variable} ${inter.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
