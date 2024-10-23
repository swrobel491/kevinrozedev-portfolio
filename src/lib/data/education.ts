import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master of Engineering in Software Engineering',
		description: '',
		location: 'Pensacola, FL',
		logo: Assets.UWF,
		name: '',
		organization: 'University of West Florida',
		period: { from: new Date(2016, 3, 5), to: new Date(2017, 11, 10) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['C#', '.NET', 'Angular', 'Python', 'Algorithms and Data structures']
	},
	{
		degree: 'Bachelor of Engineering in Software Engineering',
		description: '',
		location: 'Dallas, TX',
		logo: Assets.DIU,
		name: '',
		organization: 'Dallas International University',
		period: { from: new Date(2011, 7, 20), to: new Date(2015, 6, 17) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C#', 'Algorithm', 'Algebra', 'Python', 'Java', '.NET']
	}
];

export const title = 'Education';
