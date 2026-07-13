import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose D. Pena Gómez | Desarrollador Full-Stack",
  description: "Portafolio profesional - Aplicaciones web y landing pages",
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
      <body className="bg-[#FDF6F0]">{children}</body>
    </html>
  );
}