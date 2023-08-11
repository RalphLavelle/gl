import './globals.scss'
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './styles.module.scss'

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
          <header className={styles.header}>
            <Link href="/"><h1>Gavin Lavelle</h1></Link>
            <form>
              <div className={styles.searchIcon}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input type="text" placeholder="Title, description, etc." />
            </form>
          </header>
          {children}
        </div>
        <footer>
          <a href="https://twitter.com/GavinLavelle" target="_blank"><i className="fa-brands fa-x-twitter"></i></a> | <a href="#"><i className="fa-brands fa-instagram"></i></a> | Site by <a href="https://ralphlavelle.net" target="_blank">RL</a>
        </footer>
      </body>
    </html>
  )
}
