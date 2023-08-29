import styles from '../styles.module.scss'
import Image from 'next/image'
import gavPic from './../../public/images/Gav.jpg'

export default function About() {

  	return (
		<>
			<div className={styles.subheader}>
				<h3>b.1969</h3>
				<h3>BA Fine Art (painting) 1986-1991 NCAD, Dublin.</h3>
				<h3>Lives and works in Co. Galway</h3>
			</div>
			<div className={styles.aboutContent}>
				<div className={styles.aboutBody}>
					<Image src={gavPic} alt="Gavin Lavelle" />
					<p><em>Although I am primarily a painter in acrylic on wood or canvas</em>, for some time now I've been using collage with my work. I often begin a piece with a mental template of experiences and influences. These include the Northern/Flemish Renaissance, Greek & Roman statues, influences of Christian and Pagan iconography,  animation, biological illustrations, jewels, sci-fi, British & German Romantic painting, prints of flora & fauna, Poussin, botanical illustrations, Russian & Asian fabric and textiles, Persian & Mughal Miniature painting.</p>
					<p><em>Using glued and hand-cut collage</em> combined with my own painting, I found a freedom which my approach to painting couldn't provide. The combination of sharp printed imagery opened a new range of possibilities.</p>
					<p><em>If I start with an image or an idea in mind</em>, I take it to a certain stage, then reassess slowly and I might take things apart and reassemble them. There is a lot of time needed, with breaks and pauses, and a lot of pieces don't make it, but the ones that do seem to tell me when they're finished. There's no one key to decipher any artwork but several threads in any given piece. With the right amount of work, a level of unity emerges and the painting becomes complete.</p>
					<p><em>Do I plan all the positioning and layout in advance?</em> No, but I have a structured approach which allows me to change direction as the piece develops.</p>
				</div>
				<div className={styles.aboutPress}>
					<h3>Press/testimonials</h3>
					<blockquote><p>"Vibrant, playful and highly original, the work of Galway-based artist Gavin Lavelle draws viewers into a fantastical world - and then invites them to stay a little longer. While primarily a painter in acrylic on wood or canvas, Lavelle has been using hand-cut collage along with painting in his work for some time now. There's a surprising harmony to Lavelle's pieces, but he doesn't plan the positioning in advance. He does, however, have a structured approach, which allows him to change direction as the piece develops. "With the right amount of work, a level of unity emerges, and the painting becomes complete."</p><p className={styles.attribution}>Katie Byrne, <a href="https://www.independent.ie/">Irish Independent</a>, 2022</p></blockquote>
					<hr />
					<blockquote><p>"Gavin Lavelle's 'Elephantine' is a Garden of Earthly Delights, a hymn to Nature's strangeness and superabundance. Underlying is a memory of the Irish landscape, but transformed first through painterly idealisation, then by a multitude of collage additions which complete its transformation into an exotic Paradise, home to all the world's riches. Fabulous details abound. A tiny, delightful elephant at the bottom left-hand corner gives the picture it's title. It invites you to visit like the first explorer of a fabulous tropical island. The whole thing craves to be pored over like the carpet page of an illuminated manuscript. Lavelle works like an illuminator of old, building each collage slowly to maximize intricate richness and decorative effect. He nods to Persian and other great decorative traditions. He is clearly a voracious absorber of styles and influences. A Medieval aesthetic of abundance unified by pattern blends with Postmodernism's eclectic recycling of cultural imagery.</p><p>Nature is invoked mainly through details from museum artworks and vintage illustrations. This is art made from art, with nature already stylised and largely tamed. If a sense of protean wildness still breaks through, it is because the order of the whole seems less planned than emergent, like an ecosystem with species all jostling and adapting to each other, yielding a harmony beyond rational design. The artist appears less Lord of his Domain than a traveler within it, guided by delight and appreciation of every single element and an intuitive sense of the unity in the manifold. The work is microcosmic. The great privilege of being alive, a witness and affirmer of all the universe can show us, and pure joy in this, shines through."</p><p className={styles.attribution}><a href="https://conorwalton.com/blog/highlights-from-the-rha-annual-exhibition-2023-part-1/">Conor Walton</a> (Artist)</p></blockquote>
				</div>
			</div>
		</>
  	)
}