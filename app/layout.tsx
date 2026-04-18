import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NavbarNew } from "@/components/nav";
import { LoadingScreen } from "@/components/loading-screen";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    "Panasea Healthcare | Medical Supplies & Pharmaceutical Distributor in India",
  description:
    "Your trusted partner in healthcare distribution. Panasea Healthcare supplies medicines, medical equipment, and hospital essentials with fast, safe, and efficient delivery across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <LoadingScreen />
        <NavbarNew />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
