import { IPainting } from '../interfaces';

const photoManager = {
	makeSlug: (photo: IPainting) => {
		return photo.title.toLowerCase().replace(/ /g, "-");
	},
	mapPhotos: (flickrPhotoset): Array<IPainting> => {
		return flickrPhotoset.photoset.photo.map(p => {
			p.description = p.description._content,
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
	},
	resolveTitle: (slug: string) => {
		return slug.replace(/-/g, " ");
	}
};

export { photoManager };