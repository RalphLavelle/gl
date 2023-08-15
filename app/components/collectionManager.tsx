import { ICollection } from '../interfaces';

const collectionManager = {
	getCollections: (): (ICollection[]) => {
		let collections: ICollection[] = [
			{
				id: "72177720310485996",
				title: "2020"
			},
			{
				id: "72177720310485861",
				title: "2021"
			},
			{
				id: "72177720310485741",
				title: "2022"
			},
			{
				id: "72177720310496553",
				title: "2023"
			}
		];
		return collections.map(c => {
			c.slug = collectionManager.makeSlug(c);
			return c;
		});
	},
	findBySlug: (slug: string): ICollection => {
		const collections = collectionManager.getCollections();
		return collections.find(c => c.slug === slug)!;
	},
	makeSlug: (photo: ICollection): string => {
		return photo.title.toLowerCase().replace(/ /g, "-");
	},
	resolveTitle: (slug: string): string => {
		return slug.replace(/-/g, " ");
	}
};

export { collectionManager };