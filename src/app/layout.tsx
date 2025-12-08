import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Kazimo - Plateforme de core banking modulaire pour la microfinance en Afrique",
  description:
    "Core banking, portefeuilles numériques, réseau d’agents, Mobile Money, IA et conformité COBAC pour EMF/IMF, coopératives et banques communautaires.",
  keywords: [
    "core banking",
    "microfinance",
    "Afrique",
    "EMF",
    "IMF",
    "COBAC",
    "mobile money",
    "IA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
