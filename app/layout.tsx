import './globals.scss'
import type { Metadata } from 'next'
import Footer from './components/footer'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Gavin Lavelle: Artist',
  description: 'Art by Gavin Lavelle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}