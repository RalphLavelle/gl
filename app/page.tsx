import styles from './styles.module.scss'
import gavPic from './../public/images/gl.jpg'
import Image from 'next/image'
import { collectionManager } from './components/collectionManager'
import Link from 'next/link';

export default function Home() {

  const collections = collectionManager.getCollections();

  return (
    <>
      <div className={styles.subheader}>
        <h3>Painter based in Clifden, Co. Galway, Ireland</h3>
      </div>
      <div className={styles.intro}>
        <figure><Image src={gavPic} alt="Gavin Lavelle" /></figure>
        <h3>Works:</h3>
        <ul className={styles.works}>
          { collections.map((c, _) => (
						<li key={c.id}>
              <h3><Link href={`/${c.slug}`}>{c.title}</Link></h3>
            </li>
					))}
        </ul>
        <h3>In galleries:</h3>
        <ul>
          <li>&gt;&gt; <a href="http://lavelleartgallery.ie/artists/paintings/gavin-lavelle/" target="_blank">The Lavelle Art Gallery, Clifden, Co. Galway</a></li>
        </ul>
      </div>
    </>
  )
}