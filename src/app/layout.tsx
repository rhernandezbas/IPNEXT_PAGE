import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IPNEXT — Internet de Fibra y Wireless hasta 1 Gbps",
  description:
    "Conectate al internet más rápido de la región. Planes de fibra óptica y wireless con instalación GRATIS. Hasta 1 Gbps. Soporte 24/7.",
  keywords: ["internet", "fibra optica", "wireless", "IPNEXT", "1 Gbps", "ISP"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
