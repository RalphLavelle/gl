import styles from '../styles.module.scss'
import { IExhibition } from '../interfaces';
import { exhibitionManager } from '../components/exhibitionManager';
import studio from './../../public/images/studio.jpg'
import Image from 'next/image'

export default function CV() {

	const exhibitions = exhibitionManager.getExhibitions().map(e => {
		e.group = e.group == undefined ? true : e.group;
		return e;
	});

  	return (
		<>
			<div className={styles.subheader}>
				<h3>CV</h3>
			</div>
			<div className={styles.cv}>
				<Image src={studio} alt="In the studio" />
				<div className={styles.exhibitions}>
					<h4 className={styles.solo}>Solo exhibitions</h4>
					<h4 className={styles.group}>Group exhibitions</h4>
					{ exhibitions.map((e: IExhibition) => (
						<>
							<em>{ e.name }</em>
							<div className={styles.locationAndTime}>
								<span>{ e.location }</span>
								<time>{ e.time }</time>
							</div>
						</>
					))}
				</div>
				<p>RTE Open House / Irish Arts Review Emerging artist of the year award (2004)</p>
			</div>
		</>
  	)
}