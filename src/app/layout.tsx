import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ui/ThemeProvider';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UDI Stats — Uberlândia em dados',
  description: 'Painel de análise municipal com dados públicos de Uberlândia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <div className="fixed top-16 left-0 right-0 z-40 bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 px-4 py-1.5 text-center text-xs text-yellow-700 dark:text-yellow-400 md:ml-56">
            Alguns dados estão em processo de verificação com fontes oficiais.
            Consulte sempre as fontes primárias.
          </div>
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <main className="md:ml-56 pt-24 min-h-screen flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
