import Link from 'next/link'
import styles from './styles.module.scss'
import { collectionManager } from './components/collectionManager'

export default function Home() {

  const collections = collectionManager.getCollections();

  return (
    <>
      <div className={styles.subheader}>
        <h3>Irish artist, based in Clifden, Co. Galway, Ireland</h3>
      </div>
      <div className={styles.intro2}>
        <h3>In galleries:</h3>
        <ul>
          <li><a href="http://lavelleartgallery.ie/artists/paintings/gavin-lavelle/" target="_blank">The Lavelle Art Gallery, Clifden, Co. Galway</a></li>
          <li><a href="https://canvasgalleries.com/collections/gavin-lavelle" target="_blank">Canvas Galleries, Belfast, Northern Ireland</a></li>
          <li><a href="https://rhagallery.ie/rha-annual" target="_blank">RHA (Royal Hibernian Academy) Annual Exhibition, Dublin</a></li>
          <li><a href="https://www.royalulsteracademy.org/annual-exhibition/" target="_blank">Royal Ulster Academy of Arts Annual Exhibition, Belfast, Northern Ireland</a></li>
        </ul>
        <h3>Works:</h3>
        <ul>
        { collections.map((c, i) => (
          <li key={c.id}><Link href={`${c.slug}`}>{c.title}</Link></li>
        ))}
        </ul>
      </div>
    </>
  )
}