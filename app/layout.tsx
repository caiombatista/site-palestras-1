import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-palestras-1.vercel.app"),
  title: "Caio Batista | Estrategia, Inovacao, Lideranca e IA",
  description:
    "Palestras e experiencias executivas sobre estrategia, inovacao, lideranca e IA para empresas que querem continuar relevantes.",
  openGraph: {
    title: "Caio Batista | Clareza estrategica e movimento para empresas",
    description:
      "Provocacoes estrategicas para tirar lideres, times e empresas da inercia com direcao pratica.",
    images: ["/foto-caio.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Batista | Estrategia, inovacao, lideranca e IA",
    description:
      "Palestras, workshops e imersoes para empresas que querem continuar relevantes."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
