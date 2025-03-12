import type { Metadata } from 'next'
import { Special_Elite } from 'next/font/google'
import './globals.css'

const inter = Special_Elite({ weight: '400',
  preload: false,})

export const metadata: Metadata = {
  title: 'Seckin NextJs Portfolio',
  description: 'Generated by NextJs and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
