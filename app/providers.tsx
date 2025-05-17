'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LangAttributeUpdater from './components/LangAttributeUpdater';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <LanguageProvider>
        <LangAttributeUpdater />
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </LanguageProvider>
    </SessionProvider>
  );
}