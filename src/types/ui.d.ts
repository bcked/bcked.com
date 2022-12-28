declare namespace ui {
	type Navigation = {
		name: string;
		path: string;
		icon?: import('svelte').ComponentType;
	}[];

	type Theme = { title?: string; text?: string; from?: string; via?: string; to?: string };

	type Placement = 'top' | 'bottom';
}
