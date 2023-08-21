import './globals.scss'
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './styles.module.scss'
import Footer from './components/footer' 

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
          <header>
            <h1><Link href="/">Gavin Lavelle</Link></h1>
            <div className={styles.headerItems}>
              <span><Link href="/about">About</Link></span>
              <span><Link href="/cv">CV</Link></span>
            </div>
          </header>
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}