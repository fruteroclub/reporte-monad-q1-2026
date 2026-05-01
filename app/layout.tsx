import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://reporte-monad-q1-2026.vercel.app"),
  title: "Monad × Frutero Club - Builder Success Report",
  description: "Builder Success and DevRel support report for Monad in Mexico during January to April 2026, including activations, workshops, content, tooling, and ongoing builder support.",
  openGraph: {
    title: "Monad × Frutero Club - Builder Success Report",
    description: "Builder Success and DevRel support for Monad in Mexico during January to April 2026 across activations, workshops, content, tooling, and Blitz events.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monad × Frutero Club - Builder Success Report",
    description: "Builder Success and DevRel support for Monad in Mexico during January to April 2026 across activations, workshops, content, tooling, and Blitz events.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f4ecdf] text-[#241b15] antialiased`}>
        {children}
      </body>
    </html>
  );
}
