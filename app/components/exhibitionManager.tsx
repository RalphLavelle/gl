import { IExhibition } from '../interfaces';

const exhibitionManager = {
	getExhibitions: (): (IExhibition[]) => {
		let exhibitions: IExhibition[] = [
			{
				group: false,
				location: 'Toradh Gallery, Ashbourne, Co.Meath',
				name: '"Burning Green like Orange"',
				time: 'Sept 2015'
			},
			{
				group: false,
				location: 'Peppercanister Gallery, Dublin',
				name: '"Tales from the West" (with Rosie McGurran, R.U.A)',	
				time: 'May 2012'
			},
			{
				name: 'RHA Annual Exhibition',
				location: 'Dublin',
				time: '2006, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023'
			},
			{
				country: 'GB',
				name: 'Royal Ulster Academy',
				location: 'Belfast, NI',
				time: '2010, 2012, 2014, 2015, 2016, 2017, 2019, 2021, 2022, 2023'
			},
			{
				name: 'Ballinglen Arts Foundation 1st Biennial',
				location: 'Ballycastle, Co. Mayo',
				time: '2023'
			},
			{
				name: 'Boyle Arts Festival',
				location: 'Co. Sligo',
				time: '2017'
			},
			{
				name: 'Chimera-Gallery',
				location: 'Mullingar, Co Westmeath',
				time: '2015-'
			},
			{
				country: 'GB',
				name: 'Royal West of England Academy, Autumn Exhibition',
				location: 'Bristol, UK',
				time: '2012'
			},
			{
				country: 'GB',
				name: 'Medici Gallery',
				location: 'Mayfair, London, UK',
				time: '2012, 2013'
			},
			{
				name: 'Peppercanister Gallery',
				location: 'Dublin',
				time: '2010, 2012',
			},
			{
				name: 'Water Street Gallery',
				location: 'Todmorden, W.Yorkshire, UK',
				time: '2012-'
			},
			{
				country: 'GB',
				name: 'McKenna Gallery',
				location: 'Omagh, Co. Tyrone',
				time: '2011'
			},
			{
				name: 'Dun Laoghaire-Rathdown Co.Council Open',
				location: 'Dublin',
				time: '2008'
			},
			{
				country: 'GB',
				name: 'Whalley Fine Art',
				location: 'Holywood, Co.Down',
				time: '2008'
			},
			{
				name: 'Jorgensen Fine Art',
				location: 'Dublin',
				time: '2005'
			},
			{
				country: 'GB',
				name: 'Stables Gallery',
				location: 'Portstewart, Co. Derry',
				time: '2005'
			},
			{
				country: 'GB',
				name: 'Petley Fine Art',
				location: 'London',
				time: '2005'
			},
			{
				country: 'GB',
				name: 'McGilloway Gallery',
				location: 'Derry',
				time: '2004'
			},
			{
				name: 'Claremorris Open Exhibition',
				location: 'Co. Mayo',
				time: '1991'
			}
		];
		return exhibitions;
	}
}

export { exhibitionManager };