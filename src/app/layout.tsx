import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose Pena | Desarrollador Full-Stack",
  description: "Portafolio profesional - Aplicaciones web modernas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-900">{children}</body>
    </html>
  );
}