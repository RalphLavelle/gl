import { IFlickrOptions } from '../interfaces';

const flickrManager = {
	makeUrl: (options: IFlickrOptions): string => {
		const flickrEndpoint = "https://www.flickr.com/services/rest";
		const flickrAPIKey=process.env.FLICKR_API_KEY;
		const method = `flickr.${options.method}`

		let url = `${flickrEndpoint}?method=${method}&api_key=${flickrAPIKey}&format=json&nojsoncallback=1`;

		// photo_id?
		if(options.photo_id)
			url += `&photo_id=${options.photo_id}`

		// photoset_id?
		if(options.photoset_id)
		url += `&photoset_id=${options.photoset_id}`

		// extras?
		if(options.extras)
			url += `&extras=${options.extras.join(",")}`
		
		return url;
	}
}

export { flickrManager };