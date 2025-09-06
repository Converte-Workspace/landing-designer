import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NB Creative - Aqui suas ideias se tornam realidade",
  description:
    "Criamos soluções digitais inovadoras que impulsionam o seu negócio. Desenvolvimento web, aplicativos mobile, e-commerce e mais. Design moderno, performance excepcional e resultados garantidos.",
  keywords:
    "desenvolvimento web, aplicativos mobile, e-commerce, design digital, soluções digitais, next.js, react, typescript",
  authors: [{ name: "NB Team" }],
  openGraph: {
    title: "NB Creative - Aqui suas ideias se tornam realidade",
    description:
      "Criamos soluções digitais inovadoras que impulsionam o seu negócio para o próximo nível.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
