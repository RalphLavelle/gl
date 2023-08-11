export interface ICollection {
	id: string;
	slug?: string;
	title: string;
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