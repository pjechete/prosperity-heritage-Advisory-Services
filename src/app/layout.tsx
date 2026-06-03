import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Prosperity Heritage Advisory',
  description:
    'Practical operational and financial support for organizations navigating workflow, reporting, cash flow, growth, and change.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={plusJakarta.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
