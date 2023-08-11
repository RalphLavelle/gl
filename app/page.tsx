import Link from 'next/link'
import styles from './styles.module.scss'
import { collectionManager } from './components/collectionManager'

export default function Home() {

  const collections = collectionManager.getCollections();

  return (
    <>
      { collections.map((c, i) => (
        <div key={c.id} className={styles.menu}>
          <Link href={`${c.slug}`}><h2>{c.title}</h2></Link>
        </div>
      ))}
    </>
  )
}