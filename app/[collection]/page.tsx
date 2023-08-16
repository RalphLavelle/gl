import { ICollection, IPainting } from '../interfaces';
import styles from '../styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { photoManager } from '../components/photoManager';
import { collectionManager } from '../components/collectionManager';

// const LoadMore = dynamic(() => import("./loadMore"), { ssr: false });

async function getPhotoset(id: string) {

	const flickrEndpoint = "https://www.flickr.com/services/rest";
	const flickrAPIKey=process.env.FLICKR_API_KEY;
	const method = "flickr.photosets.getPhotos";
	const fields = ["description", "url_s", "tags"];

	const url = `${flickrEndpoint}?method=${method}&api_key=${flickrAPIKey}&photoset_id=${id}&format=json&nojsoncallback=1&extras=${fields.join(",")}`;
	//const url = 'http://localhost:3000/data/paintings.json';

	// console.log(`url: ${url}`);
	
	let res;
	try {
		res = await fetch(url);
	} catch(e) {
		throw new Error(`Failed to fetch data from ${flickrEndpoint}?method=${method}`);
	}
   
	if (!res.ok) throw new Error(`Failed to fetch data from ${url}`)
   
	return res.json()
}
  
export default async function Paintings({ params }: { params: { collection: string }}) {
	
	let error: string | undefined = undefined;
	let paintings;
	const collection = collectionManager.findBySlug(params.collection);
	let otherCollections;
	if(collection) {
		otherCollections = collectionManager.getCollections().filter(c => c.id !== collection.id);
		try {
			const photoset = await getPhotoset(collection.id);
			paintings = photoset.photoset.photo.map(p => {
				p.dimensions = {
					height: p.height_s,
					width: p.width_s
				};
				p.slug = photoManager.makeSlug(p);
				p.urls = {
					small: p.url_s
				};
				return p;
			});
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
							<p><Link href={`/${collection.slug}/${p.id}/${p.slug}`}>{p.title}</Link></p>
						</li>
					))}
				</ul>
			}
			{ otherCollections ? <ul className={styles.otherCollections}>
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