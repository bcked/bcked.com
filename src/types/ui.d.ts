declare namespace ui {
	type Navigation = {
		name: string;
		path: string;
		icon?: import('svelte').ComponentType;
	}[];

	type Theme = {
		title?: string | undefined;
		text?: string | undefined;
		from?: string | undefined;
		via?: string | undefined;
		to?: string | undefined;
	};

	type Placement = 'top' | 'bottom';

	type StatsType = 'standard' | 'currency' | 'percent' | 'change';

	type Stats = {
		name: string;
		value: string | number | undefined;
		type: ui.StatsType;
	};
}
