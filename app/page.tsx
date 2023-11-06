import styles from './styles.module.scss'
import studio from './../public/images/studio.jpg'
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <div className={styles.subheader}>
        <h3>Irish artist, based in Clifden, Co. Galway, Ireland</h3>
      </div>
      <div className={styles.intro}>
        <figure><Image src={studio} alt="In the studio" /></figure>
        <h3>In galleries:</h3>
        <ul>
          <li>&gt;&gt; <a href="http://lavelleartgallery.ie/artists/paintings/gavin-lavelle/" target="_blank">The Lavelle Art Gallery, Clifden, Co. Galway</a></li>
          <li>&gt;&gt; <a href="https://rhagallery.ie/rha-annual" target="_blank">RHA (Royal Hibernian Academy) Annual Exhibition, Dublin</a></li>
          <li>&gt;&gt; <a href="https://www.royalulsteracademy.org/annual-exhibition/" target="_blank">Royal Ulster Academy of Arts Annual Exhibition, Belfast, Northern Ireland</a></li>
        </ul>
      </div>
    </>
  )
}