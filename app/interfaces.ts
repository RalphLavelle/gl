export interface ICollection {
	id: string;
	slug?: string;
	title: string;
}

export interface IExhibition {
	group?: boolean; // default true
	location: string;
	name: string;
	time: string;
}

export interface IFlickrOptions {
	extras?: Array<string>;
	method: string;
	photo_id?: string;
	photoset_id?: string;
}

export interface IPainting {
	description: string;
	dimensions: {
		height: number;
		width: number;
	};
	id: number;
	slug: string;
	tags: string[];
	title: string;
	urls: {
		small: string;
	}
}