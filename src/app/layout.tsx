import type { Metadata } from "next";
import { Poppins, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: '500',
  variable: "--font-poppins-sans"
});

const interSans = Inter({
  subsets: ['latin'],
  variable: "--font-inter-sans"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contabilidade.com",
  description: "Uma descrição",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppinsSans.className} ${geistMono.className} ${interSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
