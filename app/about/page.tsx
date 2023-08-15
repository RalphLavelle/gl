import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles.module.scss'

export default function About() {

  return (
    <div className={styles.about}>
		<h3>b.1969</h3>
		<h3>BA Fine Art (painting) 1986-1991 NCAD, Dublin.</h3>
		<h3>Lives and works in Co. Galway</h3>
		<p>Although I am primarily a painter in acrylic on wood or canvas, for some time now I've been using collage with my work. I often begin a piece with a mental template of experiences and influences. These include the Northern/Flemish Renaissance, Greek & Roman statues, influences of Christian and Pagan iconography,  animation, biological illustrations, jewels, sci-fi, British & German Romantic painting, prints of flora & fauna, Poussin, botanical illustrations, Russian & Asian fabric and textiles, Persian & Mughal Miniature painting.</p>
		<p>Using glued & hand-cut collage combined with my own painting, I found a freedom which my approach to painting couldn't provide. The combination of sharp printed imagery opened a new range of possibilities.</p>
		<p>I have a structured approach which allows me to change direction as the piece develops. If I start with an image or an idea in mind, I take it to a certain stage, then reassess slowly and I might take things apart and reassemble them. There is a lot of time needed, with breaks and pauses, and a lot of pieces don't make it, but the ones that do seem to tell me when they're finished. There's no one key to decipher any artwork but several threads in any given piece. With the right amount of work, a level of unity emerges and the painting becomes complete.</p>
		<blockquote><i>"Vibrant, playful and highly original, the work of Galway-based artist Gavin Lavelle draws viewers into a fantastical world - and then invites them to stay a little longer. While primarily a painter in acrylic on wood or canvas, Lavelle has been using hand-cut collage along with painting in his work for some time now. There's a surprising harmony to Lavelle's pieces."</i><p>Katie Byrne, Irish Independent, 2022</p></blockquote>
	</div>
  )
}