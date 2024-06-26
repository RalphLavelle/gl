import { ICollection } from '../interfaces';

const collectionManager = {
	getCollections: (): (ICollection[]) => {
		let collections: ICollection[] = [
			{
				id: "72177720315651929",
				primaryPaintingId: "53606672738",
				title: "2024"
			},
			{
				id: "72177720310496553",
				primaryPaintingId: "53107746629",
				title: "2023"
			},
			{
				id: "72177720310485741",
				primaryPaintingId: "53117241865",
				title: "2022"
			},
			{
				id: "72177720310485861",
				primaryPaintingId: "53117053119",
				title: "2021"
			},
			{
				id: "72177720310485996",
				primaryPaintingId: "49705495918",
				title: "2020"
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