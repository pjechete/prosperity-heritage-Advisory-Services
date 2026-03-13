import './globals.css'

export const metadata = {
  title: 'Prosperity Heritage Advisory',
  description: 'Revenue Control & Cash Stabilization Advisory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
