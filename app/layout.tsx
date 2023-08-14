import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Header from '@/src/components/header'
import Hero from '@/src/components/hero/hero'
import Footer from '@/src/components/footer'
import { cn } from '@/src/lib/utils'

const lato = Lato({ subsets: ['latin'], display: 'swap', weight: '400' })

export const metadata: Metadata = {
  title: 'Kold - A world of adventures',
  description: 'Meet the world of Kold, a vast and full of adventures.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col bg-slate-950 ',
          lato.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
