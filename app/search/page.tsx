'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles.module.scss'
import { photoManager } from '../components/photoManager';
import { IPainting } from '../interfaces';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

async function searchPhotos(searchTerm: string) {

	const flickrEndpoint = "https://www.flickr.com/services/rest";
	const flickrAPIKey=process.env.FLICKR_API_KEY;
	const method = "flickr.photos.search";
  	const fields = ["description", "url_s", "tags"];
  	const user_id = "gavinlavelle"; // Gav's NSID

	const url = `${flickrEndpoint}?method=${method}&api_key=${flickrAPIKey}&user_id=${user_id}&text=${searchTerm}&format=json&nojsoncallback=1&extras=${fields.join(",")}`;
	
	const res = await fetch(url);
   
	if (!res.ok) throw new Error('Failed to fetch data')
   
	return res.json()
}

export default function Search() {
	const [loading, setLoading] = useState(true);
	const searchParams = useSearchParams()
  	const searchTerm = searchParams.get('term')
	let paintings: IPainting[] = [];
	if(searchTerm) {
		const getResults = async () => {
			let results = await searchPhotos(searchTerm!);
			// console.log(results);
			paintings = results.photos.photo.map(p => {
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
			setLoading(false);
			// console.log(paintings);
		}
		getResults();
		
	} else {
		setLoading(false);
	}

  return (
    <div className={styles.collection}>
		<div className={styles.titleBar}>
			<h2>Results for { searchTerm }</h2>
		</div>
		<p>{ paintings.length} result(s)</p>
		{ loading
			? <Image src="/spinner.svg" width="32" height="32" alt="Loading" />
			: <ul className={styles.paintings}>
				{ paintings.map((p: IPainting, i: number) => (
					<li key={i}>
						{/* <Link href={`/${collection.slug}/${p.id}/${p.slug}`}> */}
							<Image
								src={p.urls.small}
								height={p.dimensions.height}
								width={p.dimensions.width}
								alt={p.title}
							/>
						{/* </Link> */}
						<p><Link href={`/paintings/${p.id}/${p.slug}`}>{p.title}</Link></p>
					</li>
				))}
			</ul>
		}
		{/* <LoadMore /> */}
	</div>
  )
}