import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import './colors.css'

const quickSand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KctsGround',
  description: 'Playground de código, transforma tu html,css y js en un pdf'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode
}>): JSX.Element {
  return (
    <html lang='es' suppressHydrationWarning>
      <body suppressHydrationWarning className={quickSand.className}>{children}</body>
    </html>
  )
}
