import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Panasea Healthcare',
  description: 'Panasea Healthcare is a leading provider of innovative healthcare solutions, dedicated to improving patient outcomes and enhancing the quality of care through cutting-edge technology and compassionate service.',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
         <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
