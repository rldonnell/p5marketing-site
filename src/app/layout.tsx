import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "P5 Marketing | Agencia de Marketing Digital",
    template: "%s | P5 Marketing",
  },
  description:
    "Agencia de marketing digital especializada en diseño web, SEO, redes sociales y estrategias que generan resultados.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://p5marketing.com"
  ),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "P5 Marketing",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
