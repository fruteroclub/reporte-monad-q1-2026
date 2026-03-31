import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monad × Frutero Club — Q1 2026 Report",
  description: "Q1 2026 quarterly report: DevRel as a Service for the Monad ecosystem by Frutero Club",
  openGraph: {
    title: "Monad × Frutero Club — Q1 2026 Report",
    description: "DevRel as a Service for the Monad ecosystem — 34 projects, 2 hackathons, 62K+ reach",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monad × Frutero Club — Q1 2026 Report",
    description: "DevRel as a Service for the Monad ecosystem — 34 projects, 2 hackathons, 62K+ reach",
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
