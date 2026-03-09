import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: "Multtlink - aluguel de notebooks B2B",
  description: "Plataforma de aluguel de notebooks para empresas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className="antialiased"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
