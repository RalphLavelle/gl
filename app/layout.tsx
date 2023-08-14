import './globals.scss'
import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './styles.module.scss'
import SearchForm from './components/searchForm' 

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
            <SearchForm />
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