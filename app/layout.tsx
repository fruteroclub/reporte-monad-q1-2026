import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad × Frutero Club - Q1 2026 Report",
  description: "Q1 2026 Builder Success and DevRel support report for Monad in Mexico, including talent activation, content reach, livestreams, and ongoing builder support.",
  openGraph: {
    title: "Monad × Frutero Club - Q1 2026 Report",
    description: "Builder Success and DevRel support for Monad in Mexico across activations, content, livestreams, and Blitz events.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monad × Frutero Club - Q1 2026 Report",
    description: "Builder Success and DevRel support for Monad in Mexico across activations, content, livestreams, and Blitz events.",
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
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
