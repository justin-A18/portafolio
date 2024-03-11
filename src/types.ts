export interface Experience {
	id: number;
	date: string;
	title: string;
	description: string;
}

export interface Technologies {
	id: number;
	name: string;
	icon: unknown;
}

export interface Projects {
	id: number;
	image?: string;
	category: Category;
	title: string;
	url_demo: string;
	url_github: string;
	description: string;
	technologies: Technologies[];
}

export enum Category {
	Star = 'star',
	Popular = 'popular',
}
