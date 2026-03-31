import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { AuthProvider } from '@/components/AuthProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Galería de Glitches — Donde el código roto se convierte en sabiduría colectiva',
  description:
    'Comparte tus peores bugs, aprende de otros desarrolladores y resuelve errores juntos. La plataforma comunitaria donde los fallos de programación se convierten en conocimiento colectivo.',
  openGraph: {
    title: 'Galería de Glitches',
    description: 'La comunidad donde los bugs se convierten en aprendizaje colectivo.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body><AuthProvider>{children}</AuthProvider></body>
    </html>
  );
}
