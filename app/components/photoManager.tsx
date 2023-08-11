import { IPainting } from '../interfaces';

const photoManager = {
	makeSlug: (photo: IPainting) => {
		return photo.title.toLowerCase().replace(/ /g, "-");
	},
	resolveTitle: (slug: string) => {
		return slug.replace(/-/g, " ");
	}
};

export { photoManager };