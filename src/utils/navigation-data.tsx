export const NAVIGATION_DATA = [
	{
		id: 'home',
		label: 'Home',
		path: '/',
	},
	{
		id: 'about',
		label: 'About',
		path: '/about',
		dropdownElements: [
			{
				id: 'politics',
				label: 'Politics in Poland',
				path: '/about/politics',
			},
			{
				id: 'currency',
				label: 'Currency',
				path: '/about/curency',
			},
		],
	},
	{
		id: 'transportation',
		label: 'Transportation',
		path: '/transportation',
		dropdownElements: [
			{
				id: 'bus',
				label: 'Use Bus',
				path: '/transportation/bus',
			},
			{
				id: 'car',
				label: 'Use Car',
				path: '/transportation/car',
			},
		],
	},
];
