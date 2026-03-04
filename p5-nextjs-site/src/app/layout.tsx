import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'P5 Marketing',
    template: '%s | P5 Marketing',
  },
  description: 'Intent Data Marketing Agency for High-Trust, High-Value Businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: "'DM Sans', 'Space Mono', sans-serif" }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-dm-sans: 'DM Sans', sans-serif;
            --font-space-mono: 'Space Mono', monospace;
          }
        `}</style>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
