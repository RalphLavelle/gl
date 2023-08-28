import styles from '../styles.module.scss'
import { collectionManager } from '../components/collectionManager';
import Link from 'next/link';
import { ICollection, IExhibition } from '../interfaces';
import { exhibitionManager } from '../components/exhibitionManager';

export default function CV() {

	const collections = collectionManager.getCollections();
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
				<div className={styles.exhibitions}>
					<h4 className={styles.solo}>Solo exhibitions</h4>
					<h4 className={styles.group}>Group exhibitions</h4>
					{ exhibitions.map((e: IExhibition) => (
						<>
							<em>{ e.name }</em>
							<div className={styles.locationAndTime}>
								<div className={styles.location}>
									<span>{ e.location }</span>
								</div>
								<time>{ e.time }</time>
							</div>
						</>
					))}
				</div>
				<p>RTE Open House / Irish Arts Review Emerging artist of the year award (2004)</p>
				<h3>Works:</h3>
				{ collections ? <ul className={styles.collectionsList}>
				{ collections.map((c: ICollection, i: number) => (
					<li key={i}>
						<Link href={`/${c.slug}`}>{c.title}</Link>
					</li>
				))}
			</ul> : null }	
			</div>
		</>
  	)
}