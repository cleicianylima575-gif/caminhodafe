import type { Metadata } from "next";

import "./globals.css";

import { PageTransition } from "@/components/providers/PageTransition";

export const metadata: Metadata = {
  title: "Caminho da Fé",
  description: "Uma comunidade cristã moderna e acolhedora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="pt-BR">

      <body>

        <PageTransition>

          {children}

        </PageTransition>

      </body>

    </html>

  );

}