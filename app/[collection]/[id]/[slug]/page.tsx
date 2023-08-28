import Link from 'next/link'
import { photoManager } from '../../../components/photoManager'
import styles from './../../../styles.module.scss'
import { collectionManager } from '../../../components/collectionManager'
import Image from 'next/image'
import { flickrManager } from '../../../components/flickrManager'
import { IFlickrOptions } from '@/app/interfaces'

async function getPhotoSizes(id: number) {
	const flickrOptions: IFlickrOptions = {
		method: "photos.getSizes",
		photo_id: id.toString()
	};
	const url = flickrManager.makeUrl(flickrOptions)
	const res = await fetch(url);
   
	if (!res.ok) throw new Error('Failed to fetch data')
   
	return res.json()
}

async function getInfo(id: number) {
	const flickrOptions: IFlickrOptions = {
		method: "photos.getInfo",
		photo_id: id.toString()
	};
	const url = flickrManager.makeUrl(flickrOptions)
	
	const res = await fetch(url);
   
	if (!res.ok) throw new Error('Failed to fetch data')
   
	return res.json()
}

export default async function Painting({ params }: { params: { collection: string, id: number, slug: string } }) {

	let loading = true;
	let description = "Loading..."
	const title = photoManager.resolveTitle(params.slug);
	const photoSizes = await getPhotoSizes(params.id);
	loading = false;

	const collection = collectionManager.findBySlug(params.collection);

	const srcset = photoSizes.sizes.size.map((s: any) => `${s.source} ${s.width}w`).join(", ");

	// now get the description
	const info = await getInfo(params.id)
	description = info.photo.description._content

	return (
		<>
			<div className={`${styles.subheader} ${styles.paintingTitle}`}>
				<h2>{ title }</h2>
				<Link href={`/${params.collection}`}>{collection.title}</Link>
			</div>
			<div className={styles.painting}>
				{ loading ? <Image src="/spinner.svg" width="32" height="32" alt="Loading" /> : null }
				<div className={styles.frame}>
					<img srcSet={srcset} alt={title} />
				</div>
				<p className={styles.description}>{ description }</p>
			</div>
		</>
	)
}