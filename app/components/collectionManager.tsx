import { ICollection } from '../interfaces';

const collectionManager = {
	getCollections: (): (ICollection[]) => {
		let collections: ICollection[] = [
			{
				id: "72157681550801763",
				title: "Copper Burned Green"
			},
			{
				id: "72157633416648755",
				title: "Connemara Bog Week Exhibition"
			},
			{
				id: "72157624950445573",
				title: "works in progress"
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