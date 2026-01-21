import React from "react"
import type { Metadata } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lycan Online | Free to Play MMORPG',
  description: 'Join Lycan Online - An epic free to play MMORPG experience. Battle fierce monsters, conquer fortresses, and become a legend.',
  generator: 'Lycan Online',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
