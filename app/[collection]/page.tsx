import { ICollection, IFlickrOptions, IPainting } from '../interfaces';
import styles from '../styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { photoManager } from '../components/photoManager';
import { collectionManager } from '../components/collectionManager';
import { flickrManager } from '@/app/components/flickrManager';

// const LoadMore = dynamic(() => import("./loadMore"), { ssr: false });

async function getPhotoset(id: string) {
	const flickrOptions: IFlickrOptions = {
		extras: ["description", "url_s", "tags"],
		method: "photosets.getPhotos",
		photoset_id: id
	};
	const url = flickrManager.makeUrl(flickrOptions)
	
	let res;
	try {
		res = await fetch(url);
	} catch(e) {
		throw new Error(`Failed to fetch data from Flickr.`);
	}
   
	if (!res.ok) throw new Error(`Failed to fetch data from ${url}`)
   
	return res.json()
}
  
export default async function Paintings({ params }: { params: { collection: string }}) {
	
	let error: string | undefined = undefined;
	let paintings: Array<IPainting> = [];
	const collection = collectionManager.findBySlug(params.collection);
	let otherCollections;
	if(collection) {
		otherCollections = collectionManager.getCollections().filter(c => c.id !== collection.id);
		try {
			const photoset = await getPhotoset(collection.id);
			paintings = photoManager.mapPhotos(photoset);
		} catch(e: any) {
			error = e.message;
		}
	} else {
		const title = collectionManager.resolveTitle(params.collection);
		error = `Collection "${title}" not found.`;
	}
	
	return (
		<div className={styles.collection}>
			<div className={styles.titleBar}>
				<h2>{ error ? "Error" : collection.title }</h2>
			</div>
			{ error ? <p className={styles.content}>{ error }</p> :
				<ul className={styles.paintings}>
					{ paintings.map((p: IPainting, i: number) => (
						<li key={i}>
							<Link href={`/${collection.slug}/${p.id}/${p.slug}`}>
								<Image
									src={p.urls.small}
									height={p.dimensions.height}
									width={p.dimensions.width}
									alt={p.title}
								/>
							</Link>
							<h3><Link href={`/${collection.slug}/${p.id}/${p.slug}`}>{p.title}</Link></h3>
							<p>{ p.description }</p>
						</li>
					))}
				</ul>
			}
			{ otherCollections ? <ul className={styles.collectionsList}>
				{ otherCollections.map((c: ICollection, i: number) => (
					<li key={i}>
						<Link href={`/${c.slug}`}>{c.title}</Link>
					</li>
				))}
			</ul> : null }
			{/* <LoadMore /> */}
		</div>
	)
}