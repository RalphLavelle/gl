import Link from 'next/link';
import { photoManager } from '../../../components/photoManager';
import styles from './../../../styles.module.scss'
import { collectionManager } from '@/app/components/collectionManager';
import Image from 'next/image'

async function getPhotoSizes(id: number) {

	const flickrEndpoint = "https://www.flickr.com/services/rest";
	const flickrAPIKey=process.env.FLICKR_API_KEY;
	const method = "flickr.photos.getSizes";

	const url = `${flickrEndpoint}?method=${method}&api_key=${flickrAPIKey}&photo_id=${id}&format=json&nojsoncallback=1`;
	
	const res = await fetch(url);
   
	if (!res.ok) throw new Error('Failed to fetch data')
   
	return res.json()
}

export default async function Painting({ params }: { params: { collection: string, id: number, slug: string } }) {

	let loading = true;
	const title = photoManager.resolveTitle(params.slug);
	const photoSizes = await getPhotoSizes(params.id);
	loading = false;

	const collection = collectionManager.findBySlug(params.collection);

	const srcset = photoSizes.sizes.size.map((s: any) => `${s.source} ${s.width}w`).join(", ");

	return (
		<div className={styles.painting}>
			{ loading ? <Image src="/spinner.svg" width="32" height="32" alt="Loading" /> : null }
			<div className={styles.titleBar}>
				<h2>{ title }</h2>
				<h3><Link href={`/${params.collection}`}>{collection.title}</Link></h3>
			</div>
			<div className={styles.frame}>
				<img srcSet={srcset} alt={title} />
			</div>
		</div>
	)
}