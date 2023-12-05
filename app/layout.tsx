import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Header from '@/src/components/header'
import Footer from '@/src/components/footer'
import { cn } from '@/src/lib/utils'
import { ComponentProps } from 'react'

const lato = Lato({ subsets: ['latin'], display: 'swap', weight: '400' })

export const metadata: Metadata = {
  title: 'Kold - A world of adventures',
  description: 'Meet the world of Kold, a vast and full of adventures.'
}

type RootLayoutProps = ComponentProps<'html'>

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn('flex min-h-screen flex-col', lato.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
