import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad Blitz CDMX — Reporte Frutero Club",
  description: "Reporte de actividades Frutero Club durante Monad Blitz Ciudad de México, 21 de febrero 2026",
  openGraph: {
    title: "Monad Blitz CDMX — Reporte Frutero Club",
    description: "DevRel as a Service para el ecosistema Monad",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monad Blitz CDMX — Reporte Frutero Club",
    description: "DevRel as a Service para el ecosistema Monad",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
