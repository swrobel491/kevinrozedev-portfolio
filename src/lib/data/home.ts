import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Kevin Riley';

export const name = 'Kevin';

export const lastName = 'Riley';

export const description =
	'A results-driven Senior .NET Engineer with 10+ years of expertise in architecting and developing high-performance, scalable systems in the FinTech, InsurTech, and healthcare sectors.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/' },
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'kevin.rozedev@gmail.com'
	}
];

export const skills = getSkills('dotnet', 'csharp', 'python', 'angular', 'azure', 'git', 'vs');
