import Link from 'next/link'
import styles from './styles.module.scss'
import { collectionManager } from './components/collectionManager'

export default function Home() {

  const collections = collectionManager.getCollections();

  return (
    <>
      <div className={styles.intro}>
        <h3>Irish artist, based in Clifden, Co. Galway, Ireland</h3>
        <h3><a href="http://lavelleartgallery.ie/" target="_blank">Lavelle Art Gallery</a></h3>
      </div>
      { collections.map((c, i) => (
        <div key={c.id} className={styles.menu}>
          <Link href={`${c.slug}`}><h2>{c.title}</h2></Link>
        </div>
      ))}
    </>
  )
}