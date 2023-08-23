import './globals.scss'
import type { Metadata } from 'next'
import Footer from './components/footer'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Gavin Lavelle: Irish Artist',
  description: 'Art by Gavin Lavelle. Gavin is an artist living in Clifden, Connemara, in Co. Galway on the west coast of Ireland. He primarily shows his work in The Lavelle Art Gallery.',
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