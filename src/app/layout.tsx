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
  metadataBase: new URL('https://phs-usa.com'),
  title: {
    default: 'Prosperity Heritage Solutions',
    template: '%s | Prosperity Heritage Solutions',
  },
  description:
    'Prosperity Heritage Solutions is an operational and financial execution partner helping organizations recover hidden profit, improve execution, strengthen visibility, and scale with confidence.',
  openGraph: {
    title: 'Prosperity Heritage Solutions',
    description:
      'Operational and financial execution support for organizations and advisory firms navigating cash flow pressure, reporting gaps, workflow bottlenecks, and stalled initiatives.',
    url: 'https://phs-usa.com',
    siteName: 'Prosperity Heritage Solutions',
    type: 'website',
  },
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
