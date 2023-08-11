import dynamic from 'next/dynamic';
import { IPainting } from '../interfaces';
import styles from '../styles.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { photoManager } from '../components/photoManager';
import { collectionManager } from '../components/collectionManager';

const LoadMore = dynamic(() => import("./loadMore"), { ssr: false });

async function getPhotoset(id: string) {

	const flickrEndpoint = "https://www.flickr.com/services/rest";
	const flickrAPIKey="590493df250838ceb832f62bb08a1a07";
	const method = "flickr.photosets.getPhotos";
	const fields = ["description", "url_s", "tags"];

	const url = `${flickrEndpoint}?method=${method}&api_key=${flickrAPIKey}&photoset_id=${id}&format=json&nojsoncallback=1&extras=${fields.join(",")}`;
	//const url = 'http://localhost:3000/data/paintings.json';
	
	const res = await fetch(url);
   
	if (!res.ok) throw new Error('Failed to fetch data')
   
	return res.json()
}
  
export default async function Paintings({ params }: { params: { collection: string }}) {

	const collection = collectionManager.findBySlug(params.collection);
	const photoset = await getPhotoset(collection.id);

	const paintings = photoset.photoset.photo.map(p => {
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
	
	return (
		<div className={styles.collection}>
			<h2>{ collection.title }</h2>
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
						<p><Link href={`/paintings/${p.id}/${p.slug}`}>{p.title}</Link></p>
					</li>
				))}
			</ul>
			{/* <LoadMore /> */}
		</div>
	)
}